import {useEffect,useRef,useState} from 'react'
import {SITE,PROJECTS,SKILLS,EDUCATION,EXPERIENCE,CERTIFICATIONS} from './data/site'
import Media from './components/Media'
import CaseStudy from './components/CaseStudy'

const LAYOUTS=['','flip','wide']
export default function App(){
  const [open,setOpen]=useState<number|null>(null)
  const [theme,setTheme]=useState(document.documentElement.dataset.theme||'light')
  const [scrollY,setScrollY]=useState(0)
  const hero=useRef<HTMLDivElement>(null),cur=useRef<HTMLDivElement>(null)

  useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem('theme',theme)}catch{}},[theme])

  useEffect(()=>{
    const onScroll=()=>setScrollY(window.scrollY)
    onScroll()
    window.addEventListener('scroll',onScroll,{passive:true})
    return ()=>window.removeEventListener('scroll',onScroll)
  },[])

  useEffect(()=>{
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.2})
    document.querySelectorAll('.work').forEach(w=>io.observe(w))
    const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('.links a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'})
    ;['work','about','experience','contact'].forEach(id=>{const el=document.getElementById(id);if(el)so.observe(el)})
    let off=()=>{}
    if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
      document.body.classList.add('cc')
      const mv=(e:PointerEvent)=>{
        const c=cur.current,h=hero.current;if(!c||!h)return
        c.style.opacity='1';c.style.transform=`translate(${e.clientX}px,${e.clientY}px)`
        c.classList.toggle('big',!!(e.target as Element).closest('[data-view]'))
        if(e.clientY<innerHeight){h.style.setProperty('--mx',(e.clientX/innerWidth-.5)*-22+'px');h.style.setProperty('--my',(e.clientY/innerHeight-.5)*-22+'px')}
      }
      addEventListener('pointermove',mv,{passive:true})
      off=()=>{removeEventListener('pointermove',mv);document.body.classList.remove('cc')}
    }
    return()=>{io.disconnect();so.disconnect();off()}
  },[])

  const keyOpen=(i:number)=>(e:React.KeyboardEvent)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setOpen(i)} }
  const contactLinks:[string,string][]=[
    ['Email',SITE.email&&'mailto:'+SITE.email],
    ['Phone',SITE.phone&&'tel:'+SITE.phone],
    ['LinkedIn',SITE.linkedin],
    ['GitHub',SITE.github],
    ['Résumé',SITE.resume]
  ]
  const links=contactLinks.filter(([,url])=>Boolean(url))
  const heroShift = Math.min(scrollY * 0.12, 38)

  return <>
      <a className="sr" href="#work">Skip to work</a>
      <nav aria-label="Primary">
        <a className="mark" href="#top">ADITYA</a>
        <div className="links">
          <a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a className="keep" href="#contact">Contact</a>
          <button className="tt" id="tt" aria-label="Switch theme" onClick={()=>setTheme(t=>t==='dark'?'light':'dark')}><i/></button>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="portrait" ref={hero} style={{transform:`translateY(${heroShift}px)`}}><Media m={SITE.hero} label="replace with your portrait or video (SITE.hero)"/></div>
        <h1 className="name" aria-label="Aditya Srivastava"><span><em>Aditya</em></span><span><em>Srivastava</em></span></h1>
        <div className="hmeta"><div className="role">{SITE.role}</div><p className="intro">{SITE.intro}</p><div className="scroll" aria-hidden="true">Scroll<i/></div></div>
      </header>

      <main>
      <section id="about" className="wrap">
        <div className="lab"><span>About</span><span>{SITE.location}</span></div>
        <div className="about">
          <p className="lead">Full-stack developer and Computer Science undergraduate building scalable web applications and real-time products.</p>
          <div className="pic"><Media m={SITE.about} label="personal photo (SITE.about)"/></div>
          <div className="txt">
            <p>Motivated to build and deploy polished web applications and high-performance REST APIs. I work across frontend and backend systems, with a focus on clean code, problem-solving, and reliable integration.</p>
            <p>My toolkit includes JavaScript, React, Node.js, Express, MongoDB, SQL, object-oriented programming, and data structures. I have also built real-time applications using WebRTC and Socket.IO.</p>
          </div>
          <div className="facts">{SITE.facts.map(([k,v])=><div key={k}><small>{k}</small>{v}</div>)}</div>
        </div>
      </section>

      <section id="education" className="wrap">
        <div className="lab"><span>Education</span><span>{EDUCATION.dates}</span></div>
        <div className="cols">
          <div className="row">
            <h3>{EDUCATION.degree}</h3>
            <div className="v"><p>{EDUCATION.institution}</p><p>{EDUCATION.location} · {EDUCATION.dates}</p></div>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="lab"><span>Skills summary</span><span>Technologies and core computer science</span></div>
        <div className="cols">{Object.entries(SKILLS).map(([k,v])=><div className="row" key={k}><h3>{k}</h3><div className="v">{v.map(s=><span key={s}>{s}</span>)}</div></div>)}</div>
      </section>

      <section id="experience" className="wrap">
        <div className="lab"><span>Experience</span><span>Internship &amp; technical program</span></div>
        <div className="cols">{EXPERIENCE.map(e=><div className="row" key={e.role}>
          <h3>{e.role}</h3>
          <div className="v"><p className="entry-org">{e.organization}{e.dates?` · ${e.dates}`:''}</p><ul>{e.bullets.map(b=><li key={b}>{b}</li>)}</ul></div>
        </div>)}</div>
      </section>

      <section id="work" className="wrap">
        <div className="lab"><span>Projects</span><span>{PROJECTS.length} selected projects</span></div>
        {PROJECTS.map((p,i)=>(
          <article key={p.title} className={`work ${LAYOUTS[i%3]}`}>
            {p.demo
              ?<a className="shot" data-view href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.title} website (opens in a new tab)`}>
                <Media m={p.shots[0]??{}} label={`real screenshot of ${p.title}`}/>
              </a>
              :<div className="shot" data-view tabIndex={0} role="button" aria-label={`Open ${p.title} case study`} onClick={()=>setOpen(i)} onKeyDown={keyOpen(i)}>
                <Media m={p.shots[0]??{}} label={`real screenshot of ${p.title}`}/>
              </div>}
            <div className="info">
              <div><div className="cat">{p.category}</div><h3 data-view onClick={()=>setOpen(i)}>{p.title}</h3></div>
              <div><p>{p.desc}</p><div className="tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div>
                <button className="btn" onClick={()=>setOpen(i)}>Read case study</button></div>
            </div>
          </article>
        ))}
      </section>

      <section className="wrap">
        <div className="lab"><span>Certifications</span><span>Training &amp; participation</span></div>
        <div className="cols">{CERTIFICATIONS.map(([name,issuer,date])=><div className="row" key={name}>
          <h3>{name}</h3><div className="v"><p>{issuer}</p><p>{date}</p></div>
        </div>)}</div>
      </section>

      <section id="contact" className="wrap contact">
        <div className="lab"><span>Contact</span><span>Let's build something thoughtful.</span></div>
        <a className="big" href={SITE.email?'mailto:'+SITE.email:'#contact'} style={{font:'600 clamp(48px,12.5vw,210px)/.9 var(--d)',letterSpacing:'-.04em'}}>Have a good project in mind?</a>
        <div className="cl">{links.map(([n,u])=><a key={n} href={u} {...(['Email','Phone'].includes(n)?{}:{target:'_blank',rel:'noopener'})}>{n}{n==='Email'?`: ${SITE.email}`:n==='Phone'?`: ${SITE.phone}`:''}</a>)}</div>
        <footer><span>© {new Date().getFullYear()} Aditya Srivastava</span><a href="#top">Back to top</a></footer>
      </section>
    </main>

      {open!==null&&<CaseStudy i={open} onGo={setOpen} onClose={()=>setOpen(null)}/>}
      <div id="cur" ref={cur} aria-hidden="true">VIEW</div>
  </>
}
