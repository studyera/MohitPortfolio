# Mohit Yadav — Portfolio

> Frontend Engineer L2 @ Publicis Sapient  
> Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

## 📦 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS + CSS Variables |
| Animation | Framer Motion 11 |
| Fonts | next/font/google (self-hosted, zero CLS) |
| Linting | ESLint (next/core-web-vitals) |
| Bundler | Webpack 5 (via Next.js) |
| Compiler | SWC (Next.js default) + Babel for prod plugins |

---

## ⚡ Performance Architecture

### Render-Blocking Elimination

**Problem:** Traditional SPAs ship a large JS bundle that must be parsed before anything renders — causing blank screens.

**Solution in this project:**

1. **React Server Components (RSC)** — Nav, Footer, data layer, and static sections are server-rendered. Zero JS shipped for these.
2. **`React.lazy` + `Suspense`** — All below-fold sections are lazy-loaded. Browser only downloads them when needed.
3. **`content-visibility: auto`** — Off-screen sections are skipped in the render tree entirely until they scroll near the viewport.
4. **`IntersectionObserver` animations** — Replaces scroll event listeners (which fire every frame and block the main thread). Fires only on viewport entry.
5. **Fonts via `next/font`** — Fonts are self-hosted at build time. No external network request at runtime, no FOUT, no CLS.

### Webpack Optimizations (`next.config.js`)

```
┌─────────────────────────────────────────────────────┐
│  Chunk Splitting Strategy                           │
│                                                     │
│  react-vendor     ← React + ReactDOM (rarely changes)
│  next-vendor      ← Next.js internals               │
│  framer-motion    ← Loaded async only when needed   │
│  vendors          ← All other node_modules          │
│  common           ← Shared app code (2+ chunks)     │
└─────────────────────────────────────────────────────┘
```

- **Terser** — 3-pass compression, drops console.*, dead code, unused vars
- **Gzip + Brotli** — All JS/CSS/HTML compressed at build time
- **Deterministic module IDs** — Enables long-term browser caching
- **Tree shaking** — `usedExports: true`, `sideEffects: true`, `innerGraph: true`

### Babel Optimizations (`.babelrc`)

Production-only plugins:
- `transform-remove-console` — Strip all `console.*` calls
- `transform-react-remove-prop-types` — Remove prop-types (~5-15kb saved)
- `transform-react-inline-elements` — Faster React.createElement at runtime
- `transform-react-constant-elements` — Hoists static elements out of render
- `useBuiltIns: 'usage'` — Only include polyfills actually used in code

### CSS Optimizations (`postcss.config.js`)

- **Tailwind CSS purging** — Only used utility classes in final bundle
- **cssnano (advanced)** — Minifies, deduplicates, merges CSS rules
- **Autoprefixer** — Vendor-prefixes only what target browsers need

---

## 📊 Bundle Analysis

```bash
# Generate visual bundle map
npm run analyze
```

Opens an interactive treemap at `http://localhost:8888` showing every module by size.

---

## 🏗️ Project Structure

```
mohit-portfolio/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, skip-link
│   ├── page.tsx            # Home page — RSC shell + lazy sections
│   ├── globals.css         # Design tokens, base reset, utilities
│   ├── components/
│   │   ├── BulbToggle.tsx  # Theme switcher (client component)
│   │   ├── Nav.tsx         # Navigation
│   │   ├── Footer.tsx      # Footer
│   │   ├── Skeletons.tsx   # Suspense fallback loaders
│   │   └── SectionHeader.tsx
│   ├── sections/           # Page sections (lazy loaded)
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── hooks/
│   │   ├── useTheme.ts           # Dark/light theme + localStorage
│   │   └── useIntersectionObserver.ts  # Scroll-triggered animations
│   └── lib/
│       └── data.ts         # All portfolio content (single source of truth)
├── next.config.js          # Webpack, compression, headers, image optimization
├── .babelrc                # Production Babel plugins
├── tailwind.config.ts      # Design tokens, custom utilities
├── postcss.config.js       # cssnano, autoprefixer
└── tsconfig.json           # Strict TypeScript
```

---

## 🎨 Theming

The bulb toggle at the top switches between dark and light themes.

- Dark is the default
- Preference saved to `localStorage`
- OS preference (`prefers-color-scheme`) respected on first visit
- Theme applied via CSS class on `<html>` element — zero flash on load
- All colors use CSS variables — instantaneous theme switch, no rerender

---

## 📝 Updating Content

All portfolio data lives in **`app/lib/data.ts`**. Update once, reflects everywhere:

```ts
// Update your experience
export const experiences = [ ... ]

// Update your projects
export const projects = [ ... ]

// Update your skills
export const skillGroups = [ ... ]
```

---

## 🚢 Deployment

### Vercel (recommended)
```bash
npx vercel --prod
```

### Docker (standalone output)
```bash
# Build
docker build -t mohit-portfolio .
docker run -p 3000:3000 mohit-portfolio
```

The `output: 'standalone'` in `next.config.js` creates a minimal production bundle with only required files.

---

## 📄 License

Personal portfolio — all rights reserved.
