// GT colors the first item layer by material and draws its overlay unchanged.
let catalogPromise;
const images = new Map();
const sprites = new Map();

function loadImage(path) {
  if (!images.has(path)) {
    images.set(path, new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = path;
    }));
  }
  return images.get(path);
}

async function sprite(material, form) {
  catalogPromise ||= fetch('assets/material-icons.json').then(response => {
    if (!response.ok) throw new Error('icons');
    return response.json();
  }).catch(error => { catalogPromise = undefined; throw error; });
  const catalog = await catalogPromise;
  const info = catalog.materials[material];
  const profile = catalog.profiles[info?.forms[form]];
  if (!profile) return null;
  const [base, overlay] = await Promise.all([loadImage(profile.base), profile.overlay ? loadImage(profile.overlay) : null]);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 16;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  const draw = img => ctx.drawImage(img, 0, 0, img.width, img.width, 0, 0, 16, 16);
  draw(base);
  ctx.globalCompositeOperation = 'multiply';
  ctx.fillStyle = info.color;
  ctx.fillRect(0, 0, 16, 16);
  ctx.globalCompositeOperation = 'destination-in';
  draw(base);
  ctx.globalCompositeOperation = 'source-over';
  if (overlay) draw(overlay);
  return canvas;
}

export function materialIcon(material, form) {
  const canvas = document.createElement('canvas');
  canvas.className = 'material-icon';
  canvas.width = canvas.height = 16;
  canvas.setAttribute('aria-hidden', 'true');
  const key = material + '/' + form;
  if (!sprites.has(key)) {
    sprites.set(key, sprite(material, form).catch(() => { sprites.delete(key); return null; }));
  }
  sprites.get(key).then(image => {
    if (image) {
      canvas.getContext('2d').drawImage(image, 0, 0);
      canvas.dataset.loaded = 'true';
    }
  });
  return canvas;
}
