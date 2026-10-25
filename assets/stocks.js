import { materialIcon } from './material-icons.js';

const $ = id => document.getElementById(id);
const number = new Intl.NumberFormat('ru-RU');
const formNames = { ingot: 'Слитки', plate: 'Пластины', gem: 'Алмазы', dust: 'Редстоун' };
let materials = [];
let activeRequest = false;
const opened = new Set();

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function render() {
  const query = $('stock-search').value.trim().toLocaleLowerCase('ru').replaceAll('ё', 'е');
  const rows = materials.filter(row => row.label.toLocaleLowerCase('ru').replaceAll('ё', 'е').includes(query));
  const fragment = document.createDocumentFragment();
  for (const row of rows) {
    const forms = Object.entries(row.forms);
    const expandable = forms.length > 1;
    const group = element(expandable ? 'details' : 'div', 'stock-group' + (expandable ? '' : ' stock-single'));
    const heading = element(expandable ? 'summary' : 'div', 'stock-row');
    const mainForm = (forms.find(([, count]) => count > 0) || forms[0])[0];
    heading.append(materialIcon(row.material, mainForm), element('span', 'stock-name', row.label), element('span', 'stock-count', number.format(row.total)));
    group.append(heading);
    if (expandable) {
      group.open = opened.has(row.material);
      group.addEventListener('toggle', () => {
        if (!group.isConnected) return;
        if (group.open) opened.add(row.material); else opened.delete(row.material);
      });
      const tree = element('ul', 'stock-tree');
      for (const [form, count] of forms) {
        const branch = element('li');
        branch.append(materialIcon(row.material, form), element('span', 'stock-name', formNames[form]), element('span', 'stock-count', number.format(count)));
        tree.append(branch);
      }
      group.append(tree);
    }
    fragment.append(group);
  }
  $('stock-list').replaceChildren(fragment);
  $('stock-empty').hidden = rows.length > 0 || $('stock-list').getAttribute('aria-busy') === 'true';
}

async function refresh() {
  if (activeRequest) return;
  activeRequest = true;
  try {
    const response = await fetch('stocks.json', { cache: 'no-store', signal: AbortSignal.timeout(20000) });
    if (!response.ok) throw new Error('http');
    const data = await response.json();
    if (data.schema !== 1 || !Array.isArray(data.materials) || !['ready', 'stale', 'unavailable'].includes(data.status)) throw new Error('schema');
    materials = data.materials.sort((a, b) => a.label.localeCompare(b.label, 'ru'));
    $('stock-list').setAttribute('aria-busy', 'false');
    $('stock-led').className = 'status-led ' + (data.status === 'ready' ? 'ready' : 'stale');
    $('stock-notice').hidden = data.status === 'ready';
    $('stock-notice').textContent = data.status === 'stale' ? 'Обновление задержалось. Показаны последние сохранённые запасы.' : 'Запасы пока недоступны.';
    const date = new Date(data.observed_at);
    $('stock-date').hidden = !data.observed_at || !Number.isFinite(date.getTime());
    $('stock-date').textContent = 'Последнее изменение: ' + date.toLocaleString('ru-RU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
    $('stock-date').title = 'Проверка каждый час, пока на сервере есть игроки. Сумма в штуках, без пересчёта форм. Алмазы — обычные камни; редстоун — пыль.';
    render();
    if (data.status === 'unavailable') $('stock-empty').hidden = true;
  } catch {
    $('stock-list').setAttribute('aria-busy', 'false');
    $('stock-led').className = 'status-led stale';
    $('stock-notice').hidden = false;
    $('stock-notice').textContent = materials.length ? 'Не удалось обновить запасы. Показаны предыдущие данные.' : 'Не удалось загрузить запасы. Повторим автоматически.';
  } finally {
    activeRequest = false;
  }
}

$('stock-search').addEventListener('input', render);
document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
// The collector checks hourly; an open tab picks up a new release promptly.
setInterval(() => { if (!document.hidden) refresh(); }, 5 * 60 * 1000);
refresh();
