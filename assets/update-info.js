const records = new Map();
const format = new Intl.DateTimeFormat('ru-RU', {timeZone:'Asia/Seoul',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});

export function updateText(value, state='ready') {
  const date = value === null || value === undefined || value === '' ? null : new Date(value);
  const stamp = date && Number.isFinite(date.getTime()) && date.getTime()>0 ? format.format(date) + ' · Сеул' : 'дата неизвестна';
  const suffix = {stale:' · данные задержались',offline:' · сервер офлайн',waiting:' · ожидаем данные',paused:' · слой выключен',error:' · нет связи'}[state] || '';
  return 'Обновлено: ' + stamp + suffix;
}

export function setUpdateInfo(key, at, state='ready') {
  const element = document.querySelector(`[data-update-feed="${key}"]`);
  if (!element) return;
  const previous = records.get(key);
  // A failed check keeps the last real source timestamp. Checking the page
  // or receiving an error is never an update of the underlying data.
  if (at === undefined) at = previous?.at;
  records.set(key,{at,state});
  element.textContent = updateText(at,state);
  element.dataset.state = state;
}

const bar = document.querySelector('.topbar');
if (bar && typeof ResizeObserver !== 'undefined') {
  new ResizeObserver(() => document.documentElement.style.setProperty('--site-header-height',bar.getBoundingClientRect().height+'px')).observe(bar);
}

// The API reference has no application/data loader of its own.
if (document.querySelector('[data-update-feed="api"]')) {
  fetch('data.json',{cache:'no-store'}).then(response => {if(!response.ok)throw Error();return response.json();})
    .then(data => setUpdateInfo('api',data.updated_at)).catch(() => setUpdateInfo('api',undefined,'error'));
}
