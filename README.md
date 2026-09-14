# Kent Tsai — Portfolio

Liquid-glass portfolio site. Vite, no framework — plain HTML/CSS/JS.

## Develop

```bash
npm install
npm run dev
```

## Build (for Cloudflare Pages)

```bash
npm run build
```

Output goes to `dist/`. On Cloudflare Pages: connect the repo, build command
`npm run build`, output directory `dist`.

## Where to edit

- `index.html` — all copy on the homepage (hero, work cards, about, contact).
- `case-study-onerai.html`, `case-study-referral.html`, `case-study-cheggmate.html`,
  `case-study-allen-institute.html` — the four real case studies (cards 01–04).
- `case-study.html` — blank case study template for a 5th+ project. Duplicate
  this file per project (e.g. `case-study-newproject.html`), replace the
  `[bracketed]` placeholder copy and gallery blocks, then point a work card
  in `index.html`'s `#work` section at the new file.
- `src/style.css` — design tokens live at the top (`:root`), including
  colors, fonts, and radii.
- `public/resume.pdf` — add your résumé here to make the download buttons work.
- `public/favicon.svg` — swap for a real mark/photo-based favicon later.

## Real photos

Replace the gradient placeholders (`.portrait-placeholder`, `.work-thumb-*`,
`.cs-cover`, `.cs-gallery-item`) with `<img>` tags once you have real
photography or product shots — the glass framing and rounded corners will
still apply.
