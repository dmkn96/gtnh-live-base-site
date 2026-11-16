import {statusNames,progressModel,questState,chapterStats,matchesFilter,searchQuests,graphBounds,safeURL} from './quest-model.js';
const $=id=>document.getElementById(id),map=$('quest-map'),world=$('quest-world'),dialog=$('quest-dialog');
let book,rawProgress,progress,chapter,selected=null,scale=1,pan={x:0,y:0},drag=null,dragged=false,opener=null;
const chapterOf=new Map(),nodeElements=new Map(),chapterElements=new Map();
const create=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
const icon=(path,cls='')=>{if(!path)return create('span','fallback-icon','✦');const i=create('img',cls);i.src=path;i.alt='';i.draggable=false;return i;};
const stateOf=id=>questState(id,book,progress),stateName=id=>statusNames[stateOf(id)]||'Статус неизвестен';
const seoul=value=>value?new Intl.DateTimeFormat('ru-RU',{timeZone:'Asia/Seoul',dateStyle:'short',timeStyle:'short'}).format(new Date(value))+' · Сеул':'';
function route(quest=null,push=false){const h=new URLSearchParams({chapter:chapter.id});if(quest)h.set('quest',quest);history[push?'pushState':'replaceState'](null,'','#'+h);}
function drawTransform(){world.style.transform=`translate(${pan.x}px,${pan.y}px) scale(${scale})`;}
function fit(){if(!chapter||!map.clientWidth||!map.clientHeight)return;const b=graphBounds(chapter);scale=Math.max(.12,Math.min(1.8,Math.min(map.clientWidth/(b.w*1.5),map.clientHeight/(b.h*1.5))*.94));pan={x:(map.clientWidth-b.w*1.5*scale)/2-b.x*1.5*scale,y:(map.clientHeight-b.h*1.5*scale)/2-b.y*1.5*scale};drawTransform();}
function zoom(factor,x=map.clientWidth/2,y=map.clientHeight/2){const next=Math.max(.12,Math.min(5,scale*factor)),r=next/scale;pan={x:x-(x-pan.x)*r,y:y-(y-pan.y)*r};scale=next;drawTransform();hideTip();}
function showTip(id,e){const tip=$('quest-tooltip');tip.replaceChildren(create('strong','',book.quests[id].name),create('small','',stateName(id)+' · Нажми, чтобы открыть'));tip.hidden=false;const rect=e.currentTarget.getBoundingClientRect();tip.style.left=Math.min(window.innerWidth-295,Math.max(12,rect.right+10))+'px';tip.style.top=Math.min(window.innerHeight-90,rect.top)+'px';}
function hideTip(){$('quest-tooltip').hidden=true;}
function openChapter(id,{updateRoute=true,reset=true}={}){
 chapter=book.chapters.find(c=>c.id===id)||book.chapters[0];
 for(const [key,button] of chapterElements)button.setAttribute('aria-current',String(key===chapter.id));
 $('chapter-title').textContent=chapter.name;updateCounts();
 $('quest-search').value='';$('clear-search').hidden=true;$('search-results').hidden=true;map.hidden=false;
 document.body.classList.remove('chapters-open');hideTip();
 const svg=$('quest-links'),nodes=$('quest-nodes');svg.replaceChildren();nodes.replaceChildren();nodeElements.clear();
 const layout=new Map(chapter.nodes.map(n=>[n.id,n]));
 const ns='http://www.w3.org/2000/svg';
 for(const n of chapter.nodes){
  const q=book.quests[n.id];
  for(const id of q.requires){const from=layout.get(id);if(!from)continue;
   const line=document.createElementNS(ns,'line');
   line.setAttribute('x1',String((from.x+from.w/2)*1.5));line.setAttribute('y1',String((from.y+from.h/2)*1.5));
   line.setAttribute('x2',String((n.x+n.w/2)*1.5));line.setAttribute('y2',String((n.y+n.h/2)*1.5));
   line.setAttribute('class','quest-edge'+(progress.completed.has(id)&&progress.completed.has(n.id)?' complete':''));svg.append(line);
  }
  const button=create('button','quest-node'+(q.main?' main':''));button.type='button';button.dataset.quest=n.id;
  Object.assign(button.style,{left:n.x*1.5+'px',top:n.y*1.5+'px',width:n.w*1.5+'px',height:n.h*1.5+'px'});
  button.append(icon(q.icon));
  button.addEventListener('click',()=>{if(!dragged)openQuest(n.id,button);});
  button.addEventListener('pointerenter',e=>{if(!drag)showTip(n.id,e);});button.addEventListener('pointerleave',hideTip);
  button.addEventListener('focus',e=>showTip(n.id,e));button.addEventListener('blur',hideTip);
  nodes.append(button);nodeElements.set(n.id,button);
 }
 updateNodes();if(updateRoute)route();if(reset)fit();
}
function updateCounts(){
 if(!chapter)return;const {done,total}=chapterStats(chapter,progress);$('chapter-count').textContent=progress.status==='unavailable'?`${total} квестов · прогресс недоступен`:`${done} / ${total} выполнено · ${Math.round(done/Math.max(total,1)*100)}%`;
 const count=Object.keys(book.quests).length,n=progress.completed.size;
 $('team-total').textContent=progress.status==='unavailable'?'Прогресс недоступен':`${n.toLocaleString('ru-RU')} / ${count.toLocaleString('ru-RU')} квестов`;
 $('team-percent').textContent=progress.status==='unavailable'?'':`${Math.round(n/count*100)}%`;$('team-bar').max=count;$('team-bar').value=n;
 $('saved-date').textContent=rawProgress.saved_at?'Сохранение: '+seoul(rawProgress.saved_at):'Дата сохранения неизвестна';
 for(const c of book.chapters){const el=chapterElements.get(c.id),stats=chapterStats(c,progress);el.querySelector('small').textContent=progress.status==='unavailable'?`${stats.total} квестов`:`${stats.done} / ${stats.total}`;el.querySelector('i').style.width=100*stats.done/Math.max(stats.total,1)+'%';}
}
function updateNodes(){
 const filter=$('quest-filter').value;
 for(const [id,e] of nodeElements){const state=stateOf(id);for(const cls of ['done','partial','available','locked','unknown'])e.classList.toggle(cls,state===cls);e.classList.toggle('filtered',!matchesFilter(state,filter));e.setAttribute('aria-label',book.quests[id].name+' — '+stateName(id));e.title=book.quests[id].name+' — '+stateName(id);e.querySelector('.node-check')?.remove();if(state==='done')e.append(create('span','node-check','✓'));}
}
function renderChapters(){
 $('chapters').replaceChildren();chapterElements.clear();chapterOf.clear();
 for(const c of book.chapters){
  for(const n of c.nodes){if(!chapterOf.has(n.id))chapterOf.set(n.id,c);}
  const b=create('button','chapter-button');b.type='button';b.append(icon(c.icon));const text=create('span');text.append(create('span','chapter-name',c.name),create('small'));const meter=create('span','chapter-meter');meter.append(create('i'));b.append(text,meter);b.addEventListener('click',()=>openChapter(c.id));$('chapters').append(b);chapterElements.set(c.id,b);
 }
}
function search(){
 const query=$('quest-search').value.trim();$('clear-search').hidden=!query;
 if(!query){$('search-results').hidden=true;map.hidden=false;return;}
 hideTip();map.hidden=true;$('search-results').hidden=false;
 const results=searchQuests(book,progress,query,$('quest-filter').value);$('search-count').textContent=`Найдено: ${results.length}`;$('search-list').replaceChildren();
 for(const id of results){const q=book.quests[id],b=create('button','search-quest '+stateOf(id));b.append(icon(q.icon));const text=create('span');text.append(create('b','',q.name),create('small','',(chapterOf.get(id)?.name||'Другая глава')+' · '+stateName(id)));b.append(text);b.addEventListener('click',()=>openQuest(id,b));$('search-list').append(b);}
}
// Format only the game's known markup; never interpret quest text as HTML.
function richText(text,target){
 target.replaceChildren();const token=/\[url(?:=([^\]]+))?\]([\s\S]*?)\[\/url\]|§([0-9a-fklmnor])|\[(\/?)(b|i|u|s|warn|note|color)(?:=([^\]]+))?\]|\[img\]([\s\S]*?)\[\/img\]|%n/gi;
 let last=0,parent=target,stack=[],styles=[];
 function append(value){if(!value)return;const span=create('span',styles.join(' '),value);parent.append(span);}
 for(const m of text.matchAll(token)){
  append(text.slice(last,m.index));last=m.index+m[0].length;
  if(m[2]!==undefined){const url=safeURL(m[1]||m[2]);if(url){const a=create('a','',m[2]);a.href=url;a.target='_blank';a.rel='noopener noreferrer';parent.append(a);}else append(m[2]);}
  else if(m[3]){const code=m[3].toLowerCase();if(code==='r')styles=[];else if(/[0-9a-f]/.test(code))styles=['mc-'+code];else if(code==='l')styles.push('b');else if(code==='o')styles.push('i');else if(code==='n')styles.push('u');else if(code==='m')styles.push('s');}
  else if(m[5]){if(m[4]){const prev=stack.pop();if(prev)parent=prev;}else{const span=create('span',m[5].toLowerCase());stack.push(parent);parent.append(span);parent=span;}}
  else if(m[7])append('[Иллюстрация: '+m[7]+']');else append('\n');
 }
 append(text.slice(last));
}
const typeNames={retrieval:'Предметы',optional_retrieval:'Предметы · необязательно',crafting:'Изготовить',checkbox:'Подтвердить в квестбуке',hunt:'Охота',location:'Посетить место',fluid:'Жидкости',meeting:'Встретить',item:'Все предметы',choice:'Выбрать одну награду',xp:'Опыт',questcompletion:'Связанные квесты'};
function renderGroups(groups,target,reward,id){
 target.replaceChildren();
 if(!groups.length){target.append(create('p','empty-group',reward?'Наград нет.':'Дополнительных условий нет.'));return;}
 const taskDone=new Set(progress.tasks[id]||[]);
 for(const g of groups){
  const card=create('div','quest-group'),heading=create('div','quest-group-heading');heading.append(create('span','',typeNames[g.type]||g.type));
  if(!reward&&taskDone.has(g.index))heading.append(create('span','task-done','✓ Выполнено'));
  card.append(heading);
  for(const item of g.items){const row=create('div','quest-item'),slot=create('span','item-slot');slot.append(icon(item.icon));const name=create('span','item-name',item.name);name.title=item.item+' · '+item.damage;row.append(slot,name,create('span','item-count','× '+item.count.toLocaleString('ru-RU')));card.append(row);}
  if(g.quest&&book.quests[g.quest]){const link=create('button','relation-button',book.quests[g.quest].name+' ↗');link.addEventListener('click',()=>openQuest(g.quest,link));card.append(link);}else if(g.text)card.append(create('p','',g.text));if(g.consume)card.append(create('p','reward-note','Предметы сдаются при выполнении.'));target.append(card);
 }
}
function renderDetail(id){
 const q=book.quests[id];$('detail-title').textContent=q.name;$('detail-chapter').textContent=chapterOf.get(id)?.name||'Квест';$('detail-icon').replaceChildren(icon(q.icon));
 $('detail-status').textContent=stateName(id)+(q.repeatable?' · Повторяемый':'')+(progress.completed.has(id)?(q.rewards.length?(progress.claimed.has(id)?' · Награды получены хотя бы одним участником':' · Награды ещё не получены'):''):'' )+(progress.status==='stale'?' · Сохранённая копия':'');
 richText(q.description||'В этом квесте нет описания.',$('detail-description'));
 $('tasks-heading').textContent=q.task_logic==='OR'?'Задания · достаточно одного':'Задания';
 renderGroups(q.tasks,$('detail-tasks'),false,id);renderGroups(q.rewards,$('detail-rewards'),true,id);
 $('detail-relations').replaceChildren();
 function relation(key,label){const b=create('button','relation-button');if(!book.quests[key]){b.textContent=label+'Отсутствует в сборке · '+key;b.disabled=true;}else{b.append(create('span','',stateOf(key)==='done'?'✓':'↗'),document.createTextNode(label+book.quests[key].name));b.addEventListener('click',()=>openQuest(key,b));}$('detail-relations').append(b);}
 for(const key of q.requires)relation(key,'Требуется: ');
 for(const [key,value] of Object.entries(book.quests))if(value.requires.includes(id))relation(key,'Открывает: ');
 if(!$('detail-relations').children.length)$('detail-relations').append(create('p','empty-group','Связанных заданий нет.'));
 $('detail-id').textContent='ID: '+id;$('copy-notice').textContent='';
}
function openQuest(id,button=null,{updateRoute=true}={}){
 if(!book.quests[id])return;selected=id;if(button)opener=button;
 if(chapterOf.get(id)&&!chapter.nodes.some(n=>n.id===id))openChapter(chapterOf.get(id).id,{updateRoute:false});
 hideTip();renderDetail(id);if(!dialog.open)dialog.showModal();if(updateRoute)route(id,true);$('detail-close').focus();
}
function closeQuest(){dialog.close();}
dialog.addEventListener('close',()=>{selected=null;if(chapter)route();if(opener?.isConnected)opener.focus();hideTip();});
$('detail-close').addEventListener('click',closeQuest);dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeQuest();}});
$('copy-link').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);$('copy-notice').textContent='Ссылка скопирована';}catch{$('copy-notice').textContent='Скопируй адрес из строки браузера';}});
map.addEventListener('wheel',e=>{e.preventDefault();const r=map.getBoundingClientRect();zoom(Math.exp(-e.deltaY*.0015),e.clientX-r.left,e.clientY-r.top);},{passive:false});
map.addEventListener('pointerdown',e=>{if(e.button!==0)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY};dragged=false;});
map.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>5){dragged=true;map.setPointerCapture(e.pointerId);map.classList.add('dragging');}if(dragged){pan.x+=dx;pan.y+=dy;drawTransform();hideTip();}drag.x=e.clientX;drag.y=e.clientY;});
function endDrag(){drag=null;map.classList.remove('dragging');setTimeout(()=>{dragged=false;},0);}
map.addEventListener('pointerup',endDrag);map.addEventListener('pointercancel',endDrag);
map.addEventListener('keydown',e=>{if(e.target!==map)return;const dirs={ArrowLeft:[50,0],ArrowRight:[-50,0],ArrowUp:[0,50],ArrowDown:[0,-50]};if(dirs[e.key]){e.preventDefault();pan.x+=dirs[e.key][0];pan.y+=dirs[e.key][1];drawTransform();}else if(e.key==='+'||e.key==='=')zoom(1.2);else if(e.key==='-')zoom(1/1.2);else if(e.key.toLowerCase()==='r')fit();});
$('zoom-in').addEventListener('click',()=>zoom(1.3));$('zoom-out').addEventListener('click',()=>zoom(1/1.3));$('zoom-fit').addEventListener('click',fit);
$('chapters-toggle').addEventListener('click',()=>document.body.classList.toggle('chapters-open'));$('chapters-close').addEventListener('click',()=>document.body.classList.remove('chapters-open'));
$('quest-search').addEventListener('input',search);$('clear-search').addEventListener('click',()=>{$('quest-search').value='';search();$('quest-search').focus();});
$('quest-filter').addEventListener('change',()=>{updateNodes();search();});
new ResizeObserver(()=>{if(chapter&&!dialog.open)fit();}).observe(map);
function navigate(){if(!book)return;const params=new URLSearchParams(location.hash.slice(1)),q=params.get('quest'),c=params.get('chapter');if(q&&book.quests[q]){openChapter(c||chapterOf.get(q)?.id,{updateRoute:false});openQuest(q,null,{updateRoute:false});}else{if(dialog.open)dialog.close();openChapter(c,{updateRoute:false});}}
window.addEventListener('popstate',navigate);
async function json(url){const res=await fetch(url,{cache:'no-cache'});if(!res.ok)throw new Error('HTTP '+res.status);return res.json();}
function freshness(){$('quest-notice').textContent=progress.status==='ready'?'':progress.status==='stale'?'Не удалось обновить прогресс. Показано последнее успешное сохранение.':'Прогресс временно недоступен. Завершённые квесты не определены.';}
async function load(){
 $('quest-retry').hidden=true;$('quest-notice').textContent='Загрузка глав и прогресса…';
 try{
  [book,rawProgress]=await Promise.all([json('api/v1/quests.json'),json('api/v1/quest-progress.json')]);
  if(book.schema!==1||!book.chapters?.length||rawProgress.schema!==1)throw new Error('Неверный формат квестбука');
  progress=progressModel(rawProgress);renderChapters();
  if(location.hash)navigate();else{const tech=book.chapters.slice(0,7).filter(c=>chapterStats(c,progress).done>0);openChapter((tech.at(-1)||book.chapters[0]).id);}
  freshness();
 }catch{ $('quest-notice').textContent='Не удалось загрузить квестбук. Проверь подключение и повтори попытку.';$('quest-retry').hidden=false;}
}
$('quest-retry').addEventListener('click',load);
let refreshing=false;
async function refresh(){if(document.hidden||!book||refreshing)return;refreshing=true;try{const latest=await json('api/v1/quest-progress.json');if(latest.schema!==1)throw new Error('schema');rawProgress=latest;progress=progressModel(latest);freshness();updateCounts();updateNodes();search();if(selected)renderDetail(selected);}catch{$('quest-notice').textContent='Связь потеряна. Показана последняя загруженная копия прогресса.';}finally{refreshing=false;}}
setInterval(refresh,60000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});
load();
