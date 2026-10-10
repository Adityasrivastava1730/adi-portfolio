import {useEffect,useRef} from 'react'
import {PROJECTS} from '../data/site'
import Media from './Media'
const SECT:[string,string][]=[['Overview','overview'],['Problem','problem'],['Goals','goals'],['Solution','solution'],['Key features','features'],['Architecture','architecture'],['Implementation','implementation'],['Challenges','challenges'],['Lessons learned','lessons']]
const miss=(v:string)=>/^\[|Add/.test(v)?'miss':''
export default function CaseStudy({i,onGo,onClose}:{i:number;onGo:(n:number)=>void;onClose:()=>void}){
  const ref=useRef<HTMLDialogElement>(null)
  const p=PROJECTS[i],n=PROJECTS.length,prev=(i+n-1)%n,next=(i+1)%n
  useEffect(()=>{const d=ref.current!;if(!d.open)d.showModal();document.body.style.overflow='hidden';return()=>{document.body.style.overflow=''}},[])
  useEffect(()=>{ref.current?.scrollTo(0,0)},[i])
  const rows:[string,string][]=[['Status',p.status],['My contribution',p.contribution],['Stack',p.stack.join(', ')||'[Add stack]'],...SECT.map(([l,k])=>[l,p.cs[k]] as [string,string])]
  return <dialog id="dlg" ref={ref} aria-label="Project case study" onClose={onClose} onClick={e=>{if(e.target===ref.current)ref.current?.close()}}>
    <div className="cs">
      <div className="top"><span>{p.category}</span><button autoFocus onClick={()=>ref.current?.close()}>Close</button></div>
      <h2>{p.title}</h2><p style={{maxWidth:'50ch',color:'var(--mute)'}}>{p.desc}</p>
      {p.shots.length>0&&<div className="shots">{p.shots.map((shot,k)=><Media key={shot.src} m={shot} label={`screenshot ${k+1}`}/>)}</div>}
      {rows.map(([l,v])=><section key={l}><h4>{l}</h4><p className={miss(v)}>{v}</p></section>)}
      {(p.demo||p.github)&&<section><h4>Links</h4><p>
        {p.demo&&<a href={p.demo} target="_blank" rel="noopener">Live demo</a>}{p.demo&&p.github?' \u00a0 ':''}
        {p.github&&<a href={p.github} target="_blank" rel="noopener">Source</a>}</p></section>}
      <div className="nx"><button onClick={()=>onGo(prev)}>Previous: {PROJECTS[prev].title}</button><button onClick={()=>onGo(next)}>Next: {PROJECTS[next].title}</button></div>
    </div>
  </dialog>
}
