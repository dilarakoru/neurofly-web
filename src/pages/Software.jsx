import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LESSONS, parseProgress, toggleLesson } from '../lib/checklist';
export default function Software() {
 const { i18n } = useTranslation(); const tr=i18n.language==='tr';
 const [done,setDone]=useState(()=>{try{return parseProgress(localStorage.getItem('neurofly-progress'))}catch{return []}});
 function toggle(id){const next=toggleLesson(done,id);setDone(next);try{localStorage.setItem('neurofly-progress',JSON.stringify(next))}catch{/* Session-only progress if storage is unavailable. */}}
 const labels=tr?['Platformun bileşenlerini tanı','Bağlantı rehberini incele','Python kontrol rehberini oku']:['Understand the platform components','Review the connection guide','Read the Python control guide'];
 return <main className="container" style={{paddingTop:140,paddingBottom:80,minHeight:'75vh',maxWidth:850}}><h1>{tr?'Öğrenme yolun':'Your learning path'}</h1><p style={{color:'var(--text-muted)',margin:'20px 0'}}>{tr?'İlerlemen bu tarayıcıda saklanır.':'Your progress is saved in this browser.'}</p><progress aria-label={tr?'Tamamlanan modüller':'Completed modules'} max={3} value={done.length} style={{width:'100%',height:20}}/><p aria-live="polite">{done.length} / 3 {tr?'tamamlandı':'completed'}</p>{LESSONS.map((id,index)=><label key={id} style={{display:'flex',gap:18,padding:24,marginTop:18,border:'1px solid #294058',borderRadius:12,cursor:'pointer'}}><input type="checkbox" checked={done.includes(id)} onChange={()=>toggle(id)}/>{labels[index]}</label>)}<Link className="btn btn-primary" to="/wiki" style={{marginTop:30}}>{tr?'Rehberleri aç':'Open the guides'}</Link></main>;
}
