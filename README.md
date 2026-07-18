# Portfolio

Ishan Bhat's personal portfolio — a retro starfield hero over a modern, modular
site showcasing experience, projects, skills, and education.

## Live

[View Site](https://ishan-bhat.vercel.app/)

## Tech

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with reusable `section` / `card` / `chip` primitives
- `next/font` (Inter, JetBrains Mono, Silkscreen)
- [react-icons](https://react-icons.github.io/react-icons/) + typewriter-effect

## Editing content

All copy lives in a single source of truth: [`src/app/data/content.ts`](src/app/data/content.ts).
Update profile, experience, projects, skills, and education there — every section
is data-driven and renders from it. The résumé PDF is served from
[`public/Ishan_Bhat_Resume.pdf`](public/Ishan_Bhat_Resume.pdf).

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```
