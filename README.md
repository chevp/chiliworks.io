# chiliworks.io

Vue 3 + Vite + Tailwind site for **Chiliworks** (Veranstaltungstechnik).
Content is based on [chiliworks.ch](https://www.chiliworks.ch/) as a starting point.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into ./dist
npm run preview  # preview the production build
```

## Deployment

Pushes to `main` deploy automatically to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Live: https://chevp.github.io/chiliworks.io/

## Content

Edit copy in [`src/data/content.js`](src/data/content.js). Page layouts live in
[`src/pages/`](src/pages/) and are wired through [`src/router/index.js`](src/router/index.js).

## Structure

```
src/
  App.vue
  main.js
  style.css
  router/
  data/content.js   ← edit text here
  components/       ← AppHeader, AppFooter, HeroSection, ServiceCard
  pages/            ← HomePage + one page per nav entry
```
