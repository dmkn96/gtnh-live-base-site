export function point(x, z) { return [-z, x]; }
export function tileBounds(tiles, size = 512) {
  if (!tiles.length) return null;
  const xs = tiles.map(tile => tile[0]), zs = tiles.map(tile => tile[1]);
  return [point(Math.min(...xs) * size, (Math.max(...zs) + 1) * size), point((Math.max(...xs) + 1) * size, Math.min(...zs) * size)];
}
export function visibleVeins(data, dimension, type = '') {
  return data.veins.filter(vein => vein.dimension === dimension && (!type || vein.type === type));
}
export function visibleWaypoints(data, dimension) {
  return data.waypoints.filter(waypoint => waypoint.dimension === dimension);
}
export function visiblePlayers(snapshot, dimension, now = Date.now()) {
  if (!snapshot || snapshot.schema !== 1 || snapshot.online !== true || !Array.isArray(snapshot.players)
      || !Number.isFinite(snapshot.observedAt) || now - snapshot.observedAt > 60000 || snapshot.observedAt > now + 10000) return [];
  return snapshot.players.filter(player => player.dimension === dimension && /^[A-Za-z0-9_]{1,16}$/.test(player.name)
    && ['x', 'y', 'z', 'yaw'].every(key => Number.isFinite(player[key])));
}
export function heightLayers(world) { return world.layers.slice().sort((a, b) => Number(a.id) - Number(b.id)); }
export function shouldDrawVeins(zoom, enabled = true) {
  return enabled && Number.isFinite(zoom) && zoom >= -1;
}
export function tilePath(dimension, layer, x, z, hash = '') {
  if (!Number.isInteger(dimension) || !/^(day|\d+)$/.test(layer) || !Number.isInteger(x) || !Number.isInteger(z)) throw new Error('Invalid tile coordinates');
  if (hash && !/^[a-f0-9]{64}$/.test(hash)) throw new Error('Invalid tile digest');
  return `world-map/tiles/${dimension}/${layer}/${x},${z}.png${hash ? `?v=${hash}` : ''}`;
}
