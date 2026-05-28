# iloyola.com — Portfolio Site

Personal portfolio for Ivan Loyola. Built with Vue 3, Vite, TypeScript, and Tailwind CSS. Deployed on Netlify.

---

## Requirements

- Node.js 18+
- npm 9+

---

## Getting started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser. The dev server supports hot module replacement — changes to `.vue`, `.ts`, and `.css` files update instantly without a page reload.

---

## Available scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start local dev server at localhost:5173 |
| `npm run build` | Type-check and build for production into `dist/` |
| `npm run preview` | Serve the production build locally for review |

---

## Project structure

```
iloyola-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── main.css          # Global styles + Tailwind imports
│   ├── components/
│   │   ├── SiteNav.vue        # Sticky nav with mobile menu
│   │   ├── SiteFooter.vue
│   │   └── CaseStudyCard.vue  # Reusable work card
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── WorkView.vue
│   │   ├── AboutView.vue
│   │   ├── ContactView.vue
│   │   └── work/
│   │       ├── FondaAIView.vue
│   │       ├── FoodAppView.vue
│   │       ├── GHDView.vue
│   │       ├── IKEAView.vue
│   │       └── IntellectView.vue
│   ├── App.vue
│   └── main.ts               # App entry + router setup
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── netlify.toml               # Build command + SPA redirect rule
```

---

## Deployment

The site deploys to Netlify automatically. The `netlify.toml` file handles everything:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **SPA redirect:** all routes fall back to `index.html` so Vue Router handles them

To deploy manually, drag the `dist/` folder into the Netlify dashboard, or connect the GitHub repo for auto-deploy on push.
