import { point, tileBounds, tilePath, visibleVeins, visibleWaypoints, visiblePlayers, heightLayers, shouldDrawVeins } from './map-model.js?v=3';
import { oreIcon } from './map-ore-icons.js?v=1';

const byId = id => document.getElementById(id);
const dimensionSelect = byId('map-dimension'), heightSlider = byId('map-height'), oreSelect = byId('map-ore');
const showVeins = byId('map-veins'), showWaypoints = byId('map-waypoints'), message = byId('map-message');
const showPlayers = byId('map-players');
const PLAYERS_URL = 'https://gtnh-base-history-api-dmkn96.equal-bee-5135.chatgpt.site/api/v1/players';
let data, oreCatalog, map, raster, markers, playerMarkers, dimension, layer, liveState, liveError = false;
let pollTimer, pollController, pollDelay = 15000;
let veinsRendered = false;

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

function veinDetails(vein) {
  const info = oreCatalog.veins[vein.type], node = element('div', undefined, 'vein-details');
  node.append(element('strong', info.label));
  const list = element('ul');
  for (const material of info.ores) list.append(element('li', oreCatalog.materials[material].label));
  node.append(list);
  if (vein.depleted) node.append(element('span', 'Отмечена как истощённая', 'vein-depleted-note'));
  node.append(element('code', `X ${vein.x} · Z ${vein.z}`));
  return node;
}

function updatePlayers() {
  playerMarkers.clearLayers();
  const status = byId('map-players-status');
  if (!showPlayers.checked) { status.textContent = 'Игроки скрыты'; return; }
  if (liveError) { status.textContent = 'Игроки: нет связи'; return; }
  if (!liveState) { status.textContent = 'Игроки: подключение…'; return; }
  if (liveState.status === 'waiting') { status.textContent = 'Игроки: ожидаем сводку'; return; }
  if (liveState.status === 'stale') { status.textContent = 'Позиции устарели'; return; }
  if (!liveState.online) { status.textContent = 'Сервер офлайн'; return; }
  if (Date.now() - liveState.observedAt > 60000) { status.textContent = 'Позиции устарели'; return; }
  const players = visiblePlayers(liveState, dimension);
  status.textContent = `В мире ${players.length} · онлайн ${liveState.players.length}`;
  for (const player of players) {
    const node = element('div', undefined, 'player-pin');
    const arrow = element('span', undefined, 'player-heading'); arrow.style.transform = `rotate(${player.yaw + 180}deg)`;
    node.append(arrow, element('span', player.name.slice(0, 1), 'player-avatar'));
    const marker = L.marker(point(player.x, player.z), { zIndexOffset: 2000, title: player.name,
      icon: L.divIcon({ html: node, className: 'player-marker', iconSize: [28, 28], iconAnchor: [14, 14] }) });
    marker.bindTooltip(element('span', player.name), { permanent: true, direction: 'bottom', offset: [0, 12], className: 'player-label' })
      .bindPopup(popup(player.name, 'Игрок онлайн', `X ${player.x} · Y ${player.y} · Z ${player.z}`)).addTo(playerMarkers);
  }
}

function stopPlayerPoll() {
  clearTimeout(pollTimer);
  if (pollController) pollController.abort();
}
async function pollPlayers() {
  if (document.hidden || !showPlayers.checked || pollController) return;
  const controller = new AbortController(); pollController = controller;
  const timeout = setTimeout(() => controller.abort(), 6000);
  try {
    const response = await fetch(PLAYERS_URL, { signal: controller.signal, cache: 'no-store', credentials: 'omit' });
    if (!response.ok) throw new Error('players-unavailable');
    const snapshot = await response.json();
    if (snapshot.schema !== 1 || !Array.isArray(snapshot.players) || snapshot.players.length > 128 || !Number.isFinite(snapshot.observedAt)) throw new Error('players-schema');
    liveState = snapshot; liveError = false; pollDelay = 15000;
  } catch {
    if (!document.hidden && showPlayers.checked) { liveError = true; pollDelay = Math.min(60000, pollDelay * 2); }
  } finally {
    clearTimeout(timeout); pollController = null; updatePlayers();
    if (!document.hidden && showPlayers.checked) pollTimer = setTimeout(pollPlayers, pollDelay);
  }
}

function updateMarkers() {
  markers.clearLayers();
  const veins = visibleVeins(data, dimension, oreSelect.value), waypoints = visibleWaypoints(data, dimension);
  veinsRendered = shouldDrawVeins(map.getZoom(), showVeins.checked);
  if (veinsRendered) for (const vein of veins) {
    L.marker(point(vein.x, vein.z), {
      title: oreCatalog.veins[vein.type].label,
      icon: L.divIcon({ html: oreIcon(oreCatalog, vein.type, dimension, vein.depleted), className: 'vein-marker', iconSize: [32, 32], iconAnchor: [16, 16] }),
    }).bindTooltip(() => veinDetails(vein), { direction: 'top', offset: [0, -12], className: 'vein-tooltip' })
      .bindPopup(() => veinDetails(vein)).addTo(markers);
  }
  if (showWaypoints.checked) for (const waypoint of waypoints) {
    L.circleMarker(point(waypoint.x, waypoint.z), {
      radius: 7, weight: 2.5, color: '#e8efdf', fillColor: waypoint.color, fillOpacity: 1,
    }).bindTooltip(element('span', waypoint.name)).bindPopup(popup(waypoint.name, 'Метка JourneyMap', `X ${waypoint.x} · Y ${waypoint.y} · Z ${waypoint.z}`)).addTo(markers);
  }
  const veinCount = showVeins.checked && !veinsRendered ? 'Жилы скрыты' : `${veinsRendered ? veins.length : 0} жил`;
  byId('map-counts').textContent = `${veinCount} · ${showWaypoints.checked ? waypoints.length : 0} меток`;
  updatePlayers();
}

function setLayer(id) {
  layer = id;
  const layers = heightLayers(selectedDimension());
  heightSlider.value = String(layers.findIndex(entry => entry.id === id));
  byId('map-height-label').textContent = selectedLayer().label;
  heightSlider.setAttribute('aria-valuetext', selectedLayer().label);
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
  heightSlider.max = String(info.layers.length - 1);
  byId('nether-depth').hidden = id !== -1 || info.layers.length < 2;
  const keys = [...new Set(visibleVeins(data, id).map(vein => vein.type))].sort((a, b) => data.oreTypes[a].label.localeCompare(data.oreTypes[b].label, 'ru'));
  oreSelect.replaceChildren(option('', 'Все жилы'), ...keys.map(key => option(key, data.oreTypes[key].label)));
  setLayer(info.defaultLayer);
  const home = visibleWaypoints(data, id).find(entry => /^home$|^дом$/iu.test(entry.name));
  if (home) map.setView(point(home.x, home.z), -1, { animate: false }); else fit();
  updateMarkers();
  history.replaceState(null, '', `#dim=${id}`);
}

async function start() {
  const responses = await Promise.all(['world-map/data.json', 'assets/ore-catalog.json'].map(path => fetch(path, { cache: 'no-cache' })));
  if (responses.some(response => !response.ok)) throw new Error('map-unavailable');
  [data, oreCatalog] = await Promise.all(responses.map(response => response.json()));
  if (data.schema !== 1 || !data.dimensions.length) throw new Error('map-empty');
  if (oreCatalog.schema !== 1 || Object.keys(data.oreTypes).some(key => !oreCatalog.veins[key])) throw new Error('ores-unavailable');
  map = L.map('world-map', { crs: L.CRS.Simple, minZoom: -4, maxZoom: 3, zoomSnap: .5,
    zoomControl: false, attributionControl: false, preferCanvas: true });
  L.control.zoom({ position: 'bottomright', zoomInTitle: 'Приблизить', zoomOutTitle: 'Отдалить' }).addTo(map);
  markers = L.layerGroup().addTo(map);
  playerMarkers = L.layerGroup().addTo(map);
  dimensionSelect.replaceChildren(...data.dimensions.map(world => option(world.id, world.name)));
  const requested = Number(new URLSearchParams(location.hash.slice(1)).get('dim') || 0);
  const initial = data.dimensions.some(world => world.id === requested) ? requested : data.dimensions[0].id;
  changeDimension(initial);
  const stamp = new Intl.DateTimeFormat('ru-RU', { timeZone: 'Asia/Seoul', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(data.updatedAt));
  byId('map-date').textContent = `Снимок ${stamp}`;
  byId('map-coverage').textContent = data.coverage;
  dimensionSelect.addEventListener('change', () => changeDimension(Number(dimensionSelect.value)));
  let heightFrame;
  heightSlider.addEventListener('input', () => {
    cancelAnimationFrame(heightFrame);
    heightFrame = requestAnimationFrame(() => setLayer(heightLayers(selectedDimension())[Number(heightSlider.value)].id));
  });
  heightSlider.addEventListener('wheel', event => {
    event.preventDefault();
    heightSlider.value = String(Math.max(0, Math.min(Number(heightSlider.max), Number(heightSlider.value) - Math.sign(event.deltaY))));
    heightSlider.dispatchEvent(new Event('input'));
  }, { passive: false });
  for (const control of [oreSelect, showVeins, showWaypoints]) control.addEventListener('change', updateMarkers);
  byId('map-fit').addEventListener('click', fit);
  showPlayers.addEventListener('change', () => { stopPlayerPoll(); updatePlayers(); if (showPlayers.checked) setTimeout(pollPlayers, 0); });
  document.addEventListener('visibilitychange', () => { stopPlayerPoll(); if (!document.hidden) setTimeout(pollPlayers, 0); });
  window.addEventListener('pagehide', stopPlayerPoll);
  map.on('zoomend', () => {
    byId('world-map').style.setProperty('--ore-size', `${Math.max(24, Math.min(32, 28 + map.getZoom() * 4))}px`);
    if (shouldDrawVeins(map.getZoom(), showVeins.checked) !== veinsRendered) updateMarkers();
  });
  map.on('mousemove', event => { byId('map-coordinates').textContent = `X ${Math.floor(event.latlng.lng)} · Z ${Math.floor(-event.latlng.lat)}`; });
  message.hidden = true;
  pollPlayers();
}

start().catch(() => { message.hidden = false; message.textContent = 'Не удалось загрузить карту. Обнови страницу чуть позже.'; });
