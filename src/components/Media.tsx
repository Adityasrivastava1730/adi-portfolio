export type M={type?:string;src?:string;poster?:string;alt?:string;pos?:string}
const reduce=()=>matchMedia('(prefers-reduced-motion:reduce)').matches
export default function Media({m,label,id}:{m:M;label:string;id?:string}){
  const style={'--pos':m.pos} as React.CSSProperties
  return <div className="ph" id={id} style={style}>
    {!m.src?<b role="img" aria-label={'Placeholder: '+label}>PLACEHOLDER — {label}</b>
    :m.type==='video'?<video src={m.src} poster={m.poster} autoPlay={!reduce()} muted loop playsInline aria-label={m.alt}/>
    :<img src={m.src} alt={m.alt||''} loading="lazy"/>}
  </div>
}
