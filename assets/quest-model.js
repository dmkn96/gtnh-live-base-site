export const statusNames={done:'Выполнен',partial:'Начат',available:'Доступен',locked:'Закрыт'};
export function progressModel(data){return {completed:new Set(data.completed),claimed:new Set(data.claimed),started:new Set(data.started),tasks:data.tasks||{},status:data.status};}
export function questState(id,book,progress){
  if(progress.status==='unavailable')return 'unknown';
  if(progress.completed.has(id))return 'done';
  if(progress.started.has(id))return 'partial';
  const q=book.quests[id],checks=q.requires.map(x=>progress.completed.has(x));
  if(!checks.length)return 'available';
  const hits=checks.filter(Boolean).length;
  const ok={AND:hits===checks.length,OR:hits>0,XOR:hits===1,NAND:hits!==checks.length,NOR:hits===0}[q.logic];
  return ok?'available':'locked';
}
export function chapterStats(chapter,progress){const ids=new Set(chapter.nodes.map(n=>n.id));return {total:ids.size,done:[...ids].filter(id=>progress.completed.has(id)).length};}
export function matchesFilter(state,filter){return filter==='all'||(filter==='done'?state==='done':filter==='todo'?state!=='done':state==='available'||state==='partial');}
export function searchQuests(book,progress,query,filter='all'){
 const words=query.trim().toLocaleLowerCase('ru').split(/\s+/).filter(Boolean);
 return Object.entries(book.quests).filter(([id,q])=>matchesFilter(questState(id,book,progress),filter)&&words.every(w=>(q.name+' '+q.english_name+' '+q.description).toLocaleLowerCase('ru').includes(w))).map(([id])=>id);
}
export function graphBounds(chapter){
 if(!chapter.nodes.length)return {x:0,y:0,w:400,h:300};
 const x=Math.min(...chapter.nodes.map(n=>n.x))-45,y=Math.min(...chapter.nodes.map(n=>n.y))-45;
 return {x,y,w:Math.max(...chapter.nodes.map(n=>n.x+n.w))-x+45,h:Math.max(...chapter.nodes.map(n=>n.y+n.h))-y+45};
}
export function safeURL(value){try{const u=new URL(value);return ['https:','http:'].includes(u.protocol)?u.href:null;}catch{return null;}}
