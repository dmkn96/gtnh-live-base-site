// Public pack vocabulary only. Quest prose is always inserted as text, never HTML.
const word=c=>!!c&&/[\p{L}\p{N}_]/u.test(c);
const normalizeChar=c=>c.toLowerCase().replace('ё','е').replace(/[‑–]/g,'-').replace(/\s/g,' ');
export function normalizeTerm(value){return [...value].map(normalizeChar).join('').replace(/ +/g,' ').trim();}
export function createTermMatcher(data){
 const root=new Map(),terms=data?.terms||{};
 for(const [alias,id] of Object.entries(data?.aliases||{})){
  if(!terms[id])continue;let node=root;
  for(const c of normalizeTerm(alias)){if(!node.has(c))node.set(c,new Map());node=node.get(c);}
  node.id=id;
 }
 return {root,terms,items:data?.items||{}};
}
export function splitTerms(text,matcher){
 const result=[];let plain='',i=0;
 while(i<text.length){
  let node=matcher.root,end=i,match=null;
  if(!word(text[i-1]))while(end<text.length){
   let c=normalizeChar(text[end]);if(!node.has(c))break;node=node.get(c);end++;
   if(c===' ')while(/\s/.test(text[end]||'')&&end<text.length)end++;
   if(node.id&&!word(text[end]))match={id:node.id,end};
  }
  if(!match){plain+=text[i++];continue;}
  if(plain){result.push({text:plain});plain='';}
  const term=matcher.terms[match.id],original=text.slice(i,match.end);
  // Existing bilingual prose should not acquire a second English parenthesis.
  const parenthesis=text.slice(match.end).match(/^\s*\(([^()]+)\)/);
  if(parenthesis&&normalizeTerm(parenthesis[1])===normalizeTerm(term.en))match.end+=parenthesis[0].length;
  const russian=/[А-Яа-яЁё]/.test(original)?original:term.ru;
  result.push({term,ru:russian});i=match.end;
 }
 if(plain)result.push({text:plain});return result;
}
export function termButton(term,ru,{document:doc=globalThis.document,clipboard=globalThis.navigator?.clipboard,notice=()=>{}}={}){
 const button=doc.createElement('button');button.type='button';button.className='quest-term';
 button.textContent=`${ru||term.ru} (${term.en})`;
 button.title=`Скопировать для NEI: ${term.en}`;
 button.setAttribute('aria-label',`${ru||term.ru}. Скопировать английское название: ${term.en}`);
 button.addEventListener('click',async event=>{
  event.stopPropagation();
  try{
   if(!clipboard?.writeText)throw new Error('Clipboard unavailable');
   await clipboard.writeText(term.en);notice(`Скопировано: ${term.en}`);
  }catch{notice(`Не удалось скопировать. Английское название: ${term.en}`);}
 });return button;
}
export function appendTerms(target,text,matcher,options={}){
 const doc=options.document||globalThis.document;
 for(const part of splitTerms(text,matcher))target.append(part.term?termButton(part.term,part.ru,options):doc.createTextNode(part.text));
}
