// Same layers as VisualProspecting: host stone, tinted primary ore, untinted overlay.
const images = new Map(), sprites = new Map();
export function tintChannel(pixel, tint) { return Math.floor(pixel * tint / 255); }
function load(path) {
  if (!images.has(path)) images.set(path, new Promise((resolve, reject) => {
    const image = new Image(); image.onload = () => resolve(image); image.onerror = reject; image.src = path;
  }).catch(error => { images.delete(path); throw error; }));
  return images.get(path);
}
function canvas() {
  const node = document.createElement('canvas'); node.width = node.height = 32; return node;
}
async function render(catalog, key, dimension, depleted) {
  const ore = catalog.materials[catalog.veins[key].primary];
  const [rock, base, overlay, cross] = await Promise.all([
    load(catalog.backgrounds[String(dimension)]), load(ore.base),
    ore.overlay ? load(ore.overlay) : null, depleted ? load(catalog.depleted) : null,
  ]);
  const result = canvas(), layer = canvas(), ctx = result.getContext('2d'), tint = layer.getContext('2d');
  for (const context of [ctx, tint]) context.imageSmoothingEnabled = false;
  const draw = (context, image) => context.drawImage(image, 0, 0, image.width, Math.min(image.width, image.height), 0, 0, 32, 32);
  draw(ctx, rock); draw(tint, base);
  const pixels = tint.getImageData(0, 0, 32, 32), rgb = [1, 3, 5].map(offset => parseInt(ore.color.slice(offset, offset + 2), 16));
  for (let i = 0; i < pixels.data.length; i += 4) for (let channel = 0; channel < 3; channel++) pixels.data[i + channel] = tintChannel(pixels.data[i + channel], rgb[channel]);
  tint.putImageData(pixels, 0, 0); ctx.drawImage(layer, 0, 0);
  if (overlay) draw(ctx, overlay);
  if (depleted) { ctx.fillStyle = 'rgba(0,0,0,0.5882352941)'; ctx.fillRect(0, 0, 32, 32); draw(ctx, cross); }
  return result;
}
export function oreIcon(catalog, key, dimension, depleted = false) {
  const output = canvas(); output.className = 'vein-sprite'; output.setAttribute('aria-hidden', 'true');
  const id = `${key}/${dimension}/${depleted}`;
  if (!sprites.has(id)) sprites.set(id, render(catalog, key, dimension, depleted).catch(error => { sprites.delete(id); throw error; }));
  sprites.get(id).then(sprite => { output.getContext('2d').drawImage(sprite, 0, 0); output.dataset.loaded = 'true'; })
    .catch(() => { output.classList.add('vein-sprite-unavailable'); });
  return output;
}
