// Screen-space navigation: dragging never starts native text/image selection.
export function zoomAt(view,factor,point,min=.12,max=5){
 const scale=Math.max(min,Math.min(max,view.scale*factor)),ratio=scale/view.scale;
 return {scale,x:point.x-(point.x-view.x)*ratio,y:point.y-(point.y-view.y)*ratio};
}

export function preserveViewportCenter(pan,previous,next){
 return {x:pan.x+(next.w-previous.w)/2,y:pan.y+(next.h-previous.h)/2};
}

export function bindQuestViewport(element,{panBy,zoomBy,onStart=()=>{},onEnd=()=>{},
 win=window,doc=document,threshold=5}={}){
 let gesture=null,blockPointerClick=false;
 const bindings=[];
 function listen(target,type,handler,options){
  target.addEventListener(type,handler,options);bindings.push(()=>target.removeEventListener(type,handler,options));
 }
 function prevent(event){if(event.cancelable!==false)event.preventDefault();}
 function finish(cancelled=false){
  if(!gesture)return;
  const previous=gesture;gesture=null;
  blockPointerClick=previous.moved||cancelled;
  element.classList.remove('dragging');
  // Clear state before releasing: lostpointercapture can be delivered immediately.
  if(previous.capture.hasPointerCapture(previous.id))previous.capture.releasePointerCapture(previous.id);
  onEnd();
 }
 listen(element,'pointerdown',event=>{
  if(event.isPrimary===false||!['mouse','pen','touch',''].includes(event.pointerType||''))return;
  if(event.button!==0&&event.button!==1)return;
  // A second finger cannot replace the pointer that owns the current gesture.
  if(gesture&&gesture.id!==event.pointerId)return;
  if(gesture)finish(true);
  prevent(event);blockPointerClick=false;
  const node=event.target?.closest?.('.quest-node');
  const capture=node&&element.contains(node)?node:element;
  gesture={id:event.pointerId,capture,button:event.button,startX:event.clientX,startY:event.clientY,
   lastX:event.clientX,lastY:event.clientY,moved:false};
  // Capture on the original quest button, so a stationary click still opens it.
  // Blank-space gestures capture on the viewport itself.
  capture.setPointerCapture(event.pointerId);
  capture.focus({preventScroll:true});onStart();
 });
 listen(element,'pointermove',event=>{
  if(!gesture||gesture.id!==event.pointerId)return;
  const mask=gesture.button===1?4:1;
  if(event.pointerType!=='touch'&&(event.buttons&mask)===0){finish(true);return;}
  prevent(event);
  if(!gesture.moved&&Math.hypot(event.clientX-gesture.startX,event.clientY-gesture.startY)<threshold)return;
  gesture.moved=true;blockPointerClick=true;element.classList.add('dragging');
  panBy(event.clientX-gesture.lastX,event.clientY-gesture.lastY);
  gesture.lastX=event.clientX;gesture.lastY=event.clientY;
 });
 listen(element,'pointerup',event=>{
  if(!gesture||gesture.id!==event.pointerId)return;
  prevent(event);finish();
 });
 for(const type of ['pointercancel','lostpointercapture'])listen(element,type,event=>{
  if(gesture?.id===event.pointerId)finish(true);
 });
 listen(element,'click',event=>{
  const keyboard=event.detail===0&&!(event.pointerId>=0);
  if(blockPointerClick&&!keyboard){prevent(event);event.stopImmediatePropagation();}
 },true);
 for(const type of ['dragstart','selectstart'])listen(element,type,prevent);
 listen(element,'wheel',event=>{
  prevent(event);const rect=element.getBoundingClientRect();
  const unit=event.deltaMode===1?16:event.deltaMode===2?element.clientHeight:1;
  const delta=Math.max(-1000,Math.min(1000,event.deltaY*unit));
  zoomBy(Math.exp(-delta*.0015),event.clientX-rect.left,event.clientY-rect.top);
 },{passive:false});
 listen(win,'blur',()=>finish(true));listen(win,'pagehide',()=>finish(true));
 listen(doc,'visibilitychange',()=>{if(doc.hidden)finish(true);});
 return {get active(){return gesture!==null;},cancel(){finish(true);},destroy(){finish(true);for(const remove of bindings)remove();}};
}
