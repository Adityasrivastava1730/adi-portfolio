# Aditya Srivastava — Portfolio (React + TypeScript + Vite)

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build -> dist/
    npm run preview

## Edit content
All text, links and projects live in `src/data/site.ts` (SITE, PROJECTS, SKILLS, EXP).

## Replace placeholders
Put files in `public/media/` and reference them as `/media/...`:
- Hero: SITE.hero = {type:"image"|"video", src:"/media/portrait.jpg", poster:"/media/poster.jpg", alt:"...", pos:"50% 20%"}
- About photo: SITE.about = {src:"/media/about.jpg", alt:"..."}
- Screenshots: PROJECTS[i].shots = [{src:"/media/cambridge-1.png", alt:"..."}]
- Links: SITE.email / linkedin / github / resume, and demo / github per project.

## Deploy (Vercel)
Push to GitHub, import the repo in Vercel (framework preset: Vite).

