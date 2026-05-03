# Vimse Marketing Website — Implementation Plan

## Overview

A marketing/showcase website for the Vimse app, built with Astro + Tailwind CSS, deployed on Vercel. The site lives at `nesh.no` as a separate repo from the app. A future web client will live at `app.nesh.no`.

---

## Phase 1: Project Setup

Goal: A working Astro project with all tooling configured, deployed to Vercel, producing a blank page.

### 1.1 Create the repository

- [ ] Choose a location: a **sibling directory to `VimzeApp`** (e.g. `C:\Users\anderss\Projects\vimse-web`) — not nested inside it
- [ ] Don't pre-create the directory or run `git init` yet — the Astro scaffold (1.2) creates the folder and initialises git when called with `--git`
- [ ] Confirm the parent directory exists (e.g. `C:\Users\anderss\Projects\`) and that `vimse-web` does not already exist
- [ ] After scaffold, append any of these to the auto-generated `.gitignore` if missing: `node_modules/`, `dist/`, `.vercel/`, `.env`, `.env.*`, `.DS_Store`, `*.log`

### 1.2 Scaffold Astro project

- [ ] From the parent directory (e.g. `C:\Users\anderss\Projects\`), run:

```bash
npm create astro@latest vimse-web -- --template minimal --typescript strict --install --git
```

This creates `vimse-web/`, installs dependencies, and initialises git. Decline any follow-up prompts you don't want (telemetry, Astro Studio, etc.).

- [ ] `cd vimse-web && npm run dev` — confirm the default Astro page serves at `http://localhost:4321`

### 1.3 Install and configure Tailwind CSS

Astro 5 uses **Tailwind v4** via the Vite plugin (`@tailwindcss/vite`) with **CSS-first configuration** — there is no `tailwind.config.mjs`. If the scaffold installed an older Astro (v4 or earlier), fall back to the legacy `@astrojs/tailwind` integration with a JS config — verify with `npx astro --version` first.

- [ ] Install: `npx astro add tailwind` — wires `@tailwindcss/vite` into `astro.config.mjs` automatically
- [ ] Create `src/styles/global.css` with the Vimse design tokens declared as a `@theme` block:

```css
@import "tailwindcss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

@theme {
  --color-primary-50: #E8F4F3;
  --color-primary-100: #D0EBE8;
  --color-primary-200: #A3D5CF;
  --color-primary-300: #6EB8AF;
  --color-primary-400: #3D9489;
  --color-primary-500: #007A6E;
  --color-primary-600: #006B60;
  --color-primary-700: #005F54;
  --color-primary-800: #004A42;
  --color-primary-900: #003630;

  --color-gray-50: #FAFAFA;
  --color-gray-100: #F5F5F5;
  --color-gray-200: #EEEEEE;
  --color-gray-300: #E0E0E0;
  --color-gray-400: #BDBDBD;
  --color-gray-500: #9E9E9E;
  --color-gray-600: #757575;
  --color-gray-700: #616161;
  --color-gray-800: #424242;
  --color-gray-900: #212121;

  --color-vimse-hero: #121E26;
  --color-vimse-surface: #F2F2F2;
  --color-vimse-mint: #E0F2F1;

  --color-success: #159A8A;
  --color-warning: #C4882A;
  --color-error: #C4505A;
  --color-info: #4A8FA8;

  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 30px;
  --text-4xl: 36px;

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.10);
  --shadow-xl: 0 8px 32px rgba(0, 0, 0, 0.12);

  --font-sans: "Inter", system-ui, sans-serif;
}
```

- [ ] Import `global.css` once in `src/layouts/BaseLayout.astro` (created in 1.6) so Tailwind loads site-wide
- [ ] Verify Tailwind works: temporarily render `<div class="bg-primary-500 p-md text-white">test</div>` and confirm it renders teal with the expected padding

### 1.4 Verify TypeScript strict mode

The `--typescript strict` flag in 1.2 already produces a strict `tsconfig.json` — no manual edit needed.

- [ ] Confirm `tsconfig.json` extends `astro/tsconfigs/strict`
- [ ] `npx astro check` passes on the empty scaffold

### 1.5 Add Astro integrations

This is a static marketing site (no SSR / API routes), so use the static Vercel target.

- [ ] `npx astro add sitemap` — generates a sitemap automatically once `site:` is configured
- [ ] `npx astro add vercel` — installs the Vercel adapter and wires it into `astro.config.mjs`
- [ ] Final `astro.config.mjs` (Tailwind v4 is already wired via the Vite plugin from 1.3, no `tailwind()` integration entry):

```js
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  site: "https://nesh.no",
  integrations: [sitemap()],
  adapter: vercel(),
});
```

Note: `@astrojs/vercel/static` is the import path for older adapter releases. Recent versions expose a single `@astrojs/vercel` entry that defaults to static — check the adapter README for the version installed and adjust the import.

### 1.6 Add Vercel Analytics + create base layout

The Phase 1 deliverable is a blank page, but a base layout is needed both for Analytics to live in and as the foundation Phase 2 will build on. Create the shell now.

- [ ] `npm install @vercel/analytics`
- [ ] Create `src/layouts/BaseLayout.astro`:

```astro
---
import "../styles/global.css";
import { Analytics } from "@vercel/analytics/astro";
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>Vimse</title>
  </head>
  <body>
    <slot />
    <Analytics />
  </body>
</html>
```

- [ ] Use it from `src/pages/index.astro` (even though the page is blank) so the layout actually loads
- [ ] Note: Vercel Analytics only reports data **after deployment to Vercel** — local dev shows nothing in the dashboard, which is normal

### 1.7 Static files & placeholders

- [ ] Create `public/robots.txt` with:

```
User-agent: *
Allow: /
Sitemap: https://nesh.no/sitemap-index.xml
```

(The Astro sitemap integration emits `sitemap-index.xml`, not `sitemap.xml`.)

- [ ] Keep the default Astro `public/favicon.svg` for now — real branding lands in Phase 2
- [ ] Create empty `public/images/` directory (with a `.gitkeep` so git tracks it) for future screenshots/assets

### 1.8 Deploy to Vercel

- [ ] Create a GitHub repo and push `main`. Either:
  - `gh repo create vimse-web --public --source=. --remote=origin --push`, or
  - create the repo via the GitHub web UI, then `git remote add origin … && git push -u origin main`
- [ ] At https://vercel.com/new, import the GitHub repo — the Astro framework preset is auto-detected; accept defaults and click Deploy
- [ ] Verify the deployed Vercel URL (e.g. `vimse-web-<hash>.vercel.app`) loads the blank page over HTTPS
- [ ] Add the `nesh.no` domain in Vercel → project Settings → Domains
- [ ] Update DNS at the registrar:
  - Apex (`nesh.no`): A record → `76.76.21.21`
  - Or `www.nesh.no`: CNAME → `cname.vercel-dns.com`
- [ ] Wait for SSL provisioning (usually < 5 min); confirm `https://nesh.no` loads the blank page

### Phase 1 deliverable

A deployed, empty Astro site at `nesh.no` with Tailwind (using Vimse design tokens), TypeScript, sitemap generation, Vercel Analytics, and a clean project structure. No visible content yet.

---

## Phase 2: Pages, Layout & Content

Goal: A complete marketing site with all pages, navigation, SEO, and placeholder content ready to be replaced with real copy and screenshots.

### 2.1 Base layout

- [ ] Create `src/layouts/BaseLayout.astro`:
  - `<head>`: charset, viewport, Inter font, favicon, global CSS
  - Props for per-page SEO: `title`, `description`, `ogImage`
  - Open Graph meta tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
  - Twitter card meta tags
  - JSON-LD structured data (SoftwareApplication schema)
  - Vercel Analytics script
  - Astro `<ViewTransitions />` for smooth page navigation
  - Slot for page content between Header and Footer

### 2.2 Header component

- [ ] Create `src/components/Header.astro`:
  - Sticky top navigation bar
  - Logo placeholder (left)
  - Nav links: Home, Features, About (center or right)
  - "Download" CTA button (right) — links to app store section or scrolls to CTA
  - Mobile hamburger menu for small screens
  - Active page highlighting
  - Uses `vimse-hero` (#121E26) background or white with border

### 2.3 Footer component

- [ ] Create `src/components/Footer.astro`:
  - Nav links (mirror header)
  - Contact info (email)
  - App store link badges
  - Copyright notice
  - Social links (placeholder)

### 2.4 Landing page (`index.astro`)

- [ ] **Hero section**: Full-width, `vimse-hero` background
  - Headline (e.g., "Organize your life, offline-first")
  - Subtitle (value proposition, 1-2 sentences)
  - App Store + Play Store badge links (placeholder URLs)
  - Optional: phone mockup placeholder image area
- [ ] **Benefits section**: 3-4 cards in a grid
  - Icon + headline + short description per card
  - Topics: Offline-first, Recipes & shopping, Cross-platform, Privacy-focused
- [ ] **Feature highlights**: 2-3 alternating sections (text left/image right, then flipped)
  - Screenshot placeholder + feature description
  - Topics: Recipe management, Smart shopping lists, Recipe-to-list flow
- [ ] **Final CTA section**: 
  - Compelling headline
  - App store download badges
  - Background: `primary-500` or `vimse-mint`

### 2.5 Features page (`features.astro`)

- [ ] Page hero with title and subtitle
- [ ] Feature grid or list — detailed breakdown of app capabilities:
  - Recipe management (create, edit, browse)
  - Shopping lists (offline-first, auto-sync)
  - Recipe-to-shopping-list conversion
  - Cross-platform (iOS, Android, web coming soon)
  - Offline-first architecture
  - Future: packing lists, todo lists, travel planning
- [ ] Each feature: icon/illustration placeholder + title + description
- [ ] CTA section at bottom (download the app)

### 2.6 About page (`about.astro`)

- [ ] Who/what is Vimse — the story and mission
- [ ] Contact information section (email, any social links)
- [ ] Optional: team/founder section (placeholder)
- [ ] CTA section (download the app)

### 2.7 App Store links component

- [ ] Create `src/components/AppStoreLinks.astro`:
  - Apple App Store badge
  - Google Play Store badge
  - Placeholder `href` values until apps are published
  - Responsive layout (side by side on desktop, stacked on mobile)

### 2.8 SEO finalization

- [ ] Unique `<title>` and `<meta description>` for each page
- [ ] Open Graph image placeholder (1200x630)
- [ ] Verify `sitemap.xml` includes all pages
- [ ] Verify `robots.txt` is correct
- [ ] JSON-LD on landing page: SoftwareApplication with name, description, OS, app store URLs

### 2.9 Visual polish (CSS-only)

- [ ] Smooth scroll behavior
- [ ] Hover transitions on buttons, cards, links (scale, color, shadow)
- [ ] CSS fade-in animations for sections on scroll (using `animation-timeline: view()` or `IntersectionObserver` as progressive enhancement)
- [ ] Astro `ViewTransitions` for page-to-page transitions
- [ ] Responsive design: test at mobile, tablet, desktop breakpoints

### 2.10 Final verification

- [ ] All pages render correctly on desktop and mobile
- [ ] Navigation works between all pages
- [ ] All placeholder content is clearly marked for replacement
- [ ] Lighthouse audit: aim for 95+ on Performance, SEO, Accessibility, Best Practices
- [ ] Deploy final version to Vercel

### Phase 2 deliverable

A complete, deployed marketing site with three pages, sticky navigation, footer, SEO setup, smooth transitions, and placeholder content. Ready for real copy, screenshots, and app store links to be dropped in.
