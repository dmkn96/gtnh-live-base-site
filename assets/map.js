import { point, tileBounds, tilePath, visibleVeins, visibleWaypoints } from './map-model.js';

const byId = id => document.getElementById(id);
const dimensionSelect = byId('map-dimension'), heightSelect = byId('map-height'), oreSelect = byId('map-ore');
const showVeins = byId('map-veins'), showWaypoints = byId('map-waypoints'), message = byId('map-message');
let data, map, raster, markers, dimension, layer;

function element(tag, content, className) {
  const node = document.createElement(tag);
  if (content !== undefined) node.textContent = content;
  if (className) node.className = className;
  return node;
}
function popup(title, subtitle, coordinates) {
  const node = element('div', undefined, 'map-popup');
  node.append(element('strong', title), element('span', subtitle), element('code', coordinates));
  return node;
}
function option(value, label) {
  const node = element('option', label); node.value = String(value); return node;
}
function selectedDimension() { return data.dimensions.find(world => world.id === dimension); }
function selectedLayer() { return selectedDimension().layers.find(entry => entry.id === layer); }

function updateMarkers() {
  markers.clearLayers();
  const veins = visibleVeins(data, dimension, oreSelect.value), waypoints = visibleWaypoints(data, dimension);
  if (showVeins.checked) for (const vein of veins) {
    const type = data.oreTypes[vein.type];
    L.circleMarker(point(vein.x, vein.z), {
      radius: 5, weight: 1.5, color: vein.depleted ? '#809078' : '#17221b',
      fillColor: type.color, fillOpacity: vein.depleted ? .25 : .88,
      dashArray: vein.depleted ? '2 3' : null,
    }).bindTooltip(element('span', type.label)).bindPopup(popup(type.label, vein.depleted ? 'Отмечена как истощённая' : 'Известная жила', `X ${vein.x} · Z ${vein.z}`)).addTo(markers);
  }
  if (showWaypoints.checked) for (const waypoint of waypoints) {
    L.circleMarker(point(waypoint.x, waypoint.z), {
      radius: 7, weight: 2.5, color: '#e8efdf', fillColor: waypoint.color, fillOpacity: 1,
    }).bindTooltip(element('span', waypoint.name)).bindPopup(popup(waypoint.name, 'Метка JourneyMap', `X ${waypoint.x} · Y ${waypoint.y} · Z ${waypoint.z}`)).addTo(markers);
  }
  byId('map-counts').textContent = `${showVeins.checked ? veins.length : 0} жил · ${showWaypoints.checked ? waypoints.length : 0} меток`;
}

function setLayer(id) {
  layer = id; heightSelect.value = id;
  if (raster) map.removeLayer(raster);
  const info = selectedLayer(), present = new Set(info.tiles.map(coordinates => coordinates.join(',')));
  const SparseTiles = L.GridLayer.extend({
    createTile(coordinates, done) {
      // All images have native zoom 0. GridLayer scales this level while zooming.
      if (!present.has(`${coordinates.x},${coordinates.y}`)) {
        const tile = element('div');
        queueMicrotask(() => done(null, tile)); return tile;
      }
      const tile = element('img'); tile.alt = ''; tile.width = tile.height = data.tileSize;
      tile.onload = () => done(null, tile);
      tile.onerror = () => { tile.classList.add('map-missing-tile'); done(null, tile); };
      tile.src = tilePath(dimension, layer, coordinates.x, coordinates.y);
      return tile;
    },
  });
  raster = new SparseTiles({ tileSize: data.tileSize, minNativeZoom: 0, maxNativeZoom: 0,
    minZoom: -4, maxZoom: 3, noWrap: true, bounds: tileBounds(info.tiles, data.tileSize), attribution: 'JourneyMap' }).addTo(map);
  raster.setZIndex(1);
}

function fit() {
  const bounds = tileBounds(selectedLayer().tiles, data.tileSize);
  if (bounds) map.fitBounds(bounds, { padding: [30, 85], maxZoom: 0, animate: false });
}

function changeDimension(id) {
  dimension = id; dimensionSelect.value = String(id);
  const info = selectedDimension();
  heightSelect.replaceChildren(...info.layers.map(entry => option(entry.id, entry.label)));
  byId('map-height-field').hidden = info.layers.length < 2;
  const keys = [...new Set(visibleVeins(data, id).map(vein => vein.type))].sort((a, b) => data.oreTypes[a].label.localeCompare(data.oreTypes[b].label, 'ru'));
  oreSelect.replaceChildren(option('', 'Все жилы'), ...keys.map(key => option(key, data.oreTypes[key].label)));
  setLayer(info.defaultLayer); updateMarkers();
  const home = visibleWaypoints(data, id).find(entry => /^home$|^дом$/iu.test(entry.name));
  if (home) map.setView(point(home.x, home.z), -1, { animate: false }); else fit();
  history.replaceState(null, '', `#dim=${id}`);
}

async function start() {
  const response = await fetch('world-map/data.json', { cache: 'no-cache' });
  if (!response.ok) throw new Error('map-unavailable');
  data = await response.json();
  if (data.schema !== 1 || !data.dimensions.length) throw new Error('map-empty');
  map = L.map('world-map', { crs: L.CRS.Simple, minZoom: -4, maxZoom: 3, zoomSnap: .5,
    zoomControl: false, attributionControl: false, preferCanvas: true });
  L.control.zoom({ position: 'bottomright', zoomInTitle: 'Приблизить', zoomOutTitle: 'Отдалить' }).addTo(map);
  markers = L.layerGroup().addTo(map);
  dimensionSelect.replaceChildren(...data.dimensions.map(world => option(world.id, world.name)));
  const requested = Number(new URLSearchParams(location.hash.slice(1)).get('dim') || 0);
  const initial = data.dimensions.some(world => world.id === requested) ? requested : data.dimensions[0].id;
  changeDimension(initial);
  const stamp = new Intl.DateTimeFormat('ru-RU', { timeZone: 'Asia/Seoul', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(data.updatedAt));
  byId('map-date').textContent = `Снимок ${stamp}`;
  byId('map-coverage').textContent = data.coverage;
  dimensionSelect.addEventListener('change', () => changeDimension(Number(dimensionSelect.value)));
  heightSelect.addEventListener('change', () => setLayer(heightSelect.value));
  for (const control of [oreSelect, showVeins, showWaypoints]) control.addEventListener('change', updateMarkers);
  byId('map-fit').addEventListener('click', fit);
  map.on('mousemove', event => { byId('map-coordinates').textContent = `X ${Math.floor(event.latlng.lng)} · Z ${Math.floor(-event.latlng.lat)}`; });
  message.hidden = true;
}

start().catch(() => { message.hidden = false; message.textContent = 'Не удалось загрузить карту. Обнови страницу чуть позже.'; });
