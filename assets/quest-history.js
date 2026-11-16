export const timeNames={recorded:'Завершение зарегистрировано',saved:'Дата из сохранения',observed:'Выполнение обнаружено',unknown:'Дата неизвестна'};
export function formatQuestTime(row){
 if(!row?.at)return 'Выполнен ранее · дата неизвестна';
 const time=new Intl.DateTimeFormat('ru-RU',{timeZone:'Asia/Seoul',dateStyle:'short',timeStyle:'medium'}).format(new Date(row.at));
 return `${timeNames[row.precision]||'Время'}: ${time} · Сеул`;
}
export function firstCompletion(history,id){return history?.completions?.find(row=>row.quest_id===id&&row.cycle===1)||null;}
export function actorLabel(row){
 if(row?.completed_by)return `Последнее задание завершил: ${row.completed_by} · подтверждено действием в журнале`;
 return 'Кто выполнил первым: достоверно неизвестно';
}
export function timeNote(row){return row?.precision==='saved'?'Время сохранилось в BetterQuesting, но могло перенестись при синхронизации партии.':row?.precision==='observed'?'Известно время обнаружения, а не точное время действия.':'';}
