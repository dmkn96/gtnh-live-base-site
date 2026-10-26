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
export function tilePath(dimension, layer, x, z) {
  if (!Number.isInteger(dimension) || !/^(day|\d+)$/.test(layer) || !Number.isInteger(x) || !Number.isInteger(z)) throw new Error('Invalid tile coordinates');
  return `world-map/tiles/${dimension}/${layer}/${x},${z}.png`;
}
