# Handoff: Vimse Marketing Website

**Last updated:** May 3, 2026
**Target domain:** `nesh.no`

---

## Overview

This is a high-fidelity design handoff for the Vimse marketing website — a 3-page public-facing site at `nesh.no`. The site's job is to make visitors aware of the Vimse app, understand what it does, and download it.

**Pages:**
1. **Landing page** (`/`) — Hero, value props, feature showcases, download CTA
2. **Features** (`/features`) — Deep-dive on all features + coming soon roadmap
3. **About** (`/about`) — Origin story, philosophy, contact

**Not included:** Web app client (that will live at `app.nesh.no` later).

---

## About the Design Files

The files in this bundle are **design references created in HTML** — high-fidelity prototypes showing intended look and behavior. They are not production code to copy directly. The task is to **recreate these designs in an Astro codebase** using appropriate components, semantic HTML, and the design tokens documented below.

The HTML files are fully interactive and scrollable — open them in a browser to explore the designs. Navigate between pages using the nav links.

**Files:**
| File | Description |
|------|-------------|
| `Landing Page.html` | Index page design |
| `Features.html` | Features page design |
| `About.html` | About page design |
| `styles.css` | All shared CSS (tokens, components, layout) — read this for reference |
| `components.jsx` | Shared React components used in the prototypes |

---

## Fidelity

**High-fidelity.** These mockups use the exact Vimse design tokens — colors, radii, shadows, typography. Recreate the UI as closely as possible. Where native browser behavior differs slightly from the prototypes (e.g. font rendering), match the intent rather than the pixel.

---

## Design Tokens

### Colors — Primary (Teal)
| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` | `#E8F4F3` | Icon backgrounds, light tints |
| `primary-100` | `#D0EBE8` | Hover tints |
| `primary-200` | `#A3D5CF` | Borders, decorative |
| `primary-300` | `#6EB8AF` | Labels on dark backgrounds |
| `primary-400` | `#3D9489` | Progress fills, accents |
| `primary-500` | `#007A6E` | **Primary CTA color**, links, active states |
| `primary-600` | `#006B60` | Button hover state |
| `primary-700` | `#005F54` | Button active, dark text on light tint |
| `primary-800` | `#004A42` | Deep accent |
| `primary-900` | `#003630` | Darkest teal |

### Colors — Gray (Neutral)
| Token | Hex | Usage |
|-------|-----|-------|
| `gray-50` | `#FAFAFA` | — |
| `gray-100` | `#F5F5F5` | — |
| `gray-200` | `#EEEEEE` | Borders, dividers |
| `gray-300` | `#E0E0E0` | Muted borders |
| `gray-400` | `#BDBDBD` | Placeholder icons, chevrons |
| `gray-500` | `#9E9E9E` | Secondary body text, subtitles |
| `gray-600` | `#757575` | Nav links, body text |
| `gray-700` | `#616161` | Mid-weight body text |
| `gray-800` | `#424242` | Step numbers, dark text |
| `gray-900` | `#212121` | Primary headings, strong text |

### Colors — Vimse Specials
| Token | Hex | Usage |
|-------|-----|-------|
| `vimse-hero` | `#121E26` | Dark section backgrounds, nav, footer |
| `vimse-surface` | `#F2F2F2` | Light gray section backgrounds |
| `vimse-mint` | `#E0F2F1` | Mint tint, accent backgrounds |

### Typography
| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Display / Section titles | DM Serif Display | 44–56px | 700 | Italic for emphasis, letter-spacing -0.5 to -1px |
| Feature headings | DM Serif Display | 36–48px | 700 | |
| Body / UI | Inter | 15–18px | 400–600 | -apple-system fallback |
| Nav logo | DM Serif Display italic | 26px | 700 | Color: primary-500 |
| Section labels | Inter | 13px | 700 | UPPERCASE, letter-spacing 0.1em, color primary-500 |
| Captions / meta | Inter | 11–13px | 500–600 | |

**Google Fonts import:**
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700;800&display=swap');
```

### Border Radii
| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 4px | Tags |
| `md` | 8px | Small chips |
| `lg` | 12px | App store badges, small cards |
| `xl` | 16px | Cards, list items |
| `2xl` | 20–24px | Section cards, feature cards |
| `3xl` | 28–32px | Hero cards, overlapping cards |
| `full` | 9999px | Pills, badges, avatar circles |

### Shadows
| Token | Value | Usage |
|-------|-------|-------|
| `sm` | `0 1px 2px rgba(0,0,0,0.04)` | Subtle borders |
| `md` | `0 2px 12px rgba(0,0,0,0.04)` | Value cards, feature cards |
| `lg` | `0 8px 32px rgba(0,0,0,0.12)` | Floating cards, phone mockup |
| `phone` | `0 32px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08)` | Phone mockup bezel |

---

## Shared Layout

### Max width
- Content max-width: `1200px`, centered
- Horizontal padding: `24px` mobile → `48px` desktop (768px+)

### Section rhythm
- Standard section padding: `100px 0` desktop, `64px 0` mobile
- Section types:
  - White: default
  - `#F2F2F2` surface: alternate sections for visual rhythm
  - `#121E26` dark: accent sections (shopping feature, offline/privacy, CTA)
- Subtle grid texture on surface sections: `linear-gradient(rgba(0,0,0,0.015) 1px, transparent 1px)` at 48×48px

---

## Shared Navigation

**Behavior:**
- Fixed, `z-index: 100`
- On dark-hero pages: transparent background, white logo + links
- On scroll (> 40px): white background (`rgba(255,255,255,0.92)`) with `backdrop-filter: blur(16px)`, subtle shadow, teal logo
- Transition: `background 0.3s, box-shadow 0.3s, padding 0.3s`
- Padding: `16px 0` → `10px 0` when scrolled

**Logo:** "Vimse" in DM Serif Display italic, `26px`, `primary-500` (white when on dark/unscrolled)

**Nav links:**
- Font: Inter `15px`, weight `500`
- Color: `gray-600` → `primary-500` on hover (or `rgba(255,255,255,0.7)` on dark unscrolled)
- Active page: `primary-500`, weight `600`

**Download CTA button:**
- Background: `primary-500`, color `#fff`
- Border-radius: `12px`, padding `10px 22px`
- Hover: `primary-700`

**Mobile (< 768px):** hamburger icon, dropdown below nav, full-width links.

---

## Shared Footer

**Background:** `#121E26`

**Layout:** 3-column grid on desktop (2fr 1fr 1fr), stacked on mobile.
- Col 1: Logo + tagline ("Organize your everyday life..."), `gray-500` text, max-width `280px`
- Col 2: Product links (Features, Pricing, Changelog)
- Col 3: Company links (About, Contact, Privacy)

**Bottom bar:** Copyright left, Privacy Policy + Terms links right. Font `13px`.
**Divider:** `1px solid rgba(255,255,255,0.08)` between top and bottom.

---

## Page 1: Landing Page (`/`)

### Hero Section
**Background:** `#121E26`
**Min-height:** `100vh`
**Padding:** `120px 0 80px`

**Background treatment:**
- Radial gradient overlay: `radial-gradient(ellipse 80% 60% at 30% 50%, rgba(0,122,110,0.08) 0%, transparent 70%)` + second layer at `80% 30%`

**Layout:** 2-column grid on desktop (`1fr auto`), stacked on mobile. Gap: `64px`.

**Left column — hero text:**
- **Availability badge:**
  - `display: inline-flex`, gap `8px`, background `rgba(255,255,255,0.06)`, border `1px solid rgba(255,255,255,0.08)`, border-radius `100px`, padding `6px 16px 6px 8px`
  - Animated pulse dot: `8×8px`, border-radius `4px`, background `primary-400`, animation: opacity 1→0.4→1 over 2s
  - Text: `13px`, `primary-300`, weight `500`, "Now available on iOS & Android"
  - Margin-bottom: `28px`
- **H1:** DM Serif Display, `56px` (38px mobile), weight `700`, color `#fff`, letter-spacing `-1px`, line-height `1.08`
  - "Organize your " + italic `<em>` "everyday" in `primary-300` + " life"
- **Subtitle:** Inter `18px`, line-height `1.65`, color `rgba(255,255,255,0.5)`, max-width `440px`, margin-bottom `36px`
- **App Store badges** (see Buttons & CTAs section)

**Right column — phone mockups:**
- Two phone frames side by side, gap `20px`
- Second phone offset `margin-top: 60px`
- Behind phones: soft glow circle `400×400px`, `primary-500`, opacity `0.08`, `filter: blur(80px)`
- Phone 1: Home screen mockup
- Phone 2: Recipe detail mockup
- **Floating cards** (animated, `animation: float 6s ease-in-out infinite`, translateY 0→-8px):
  - Card 1 (top right of phones): Check icon `primary-50` bg + "Melk ✓", `animation-delay: 0s`
  - Card 2 (bottom left): Recipe icon on `#FEF3C7` bg + "4 porsjoner", `animation-delay: 2s`
  - Card style: white bg, border-radius `16px`, padding `14px 18px`, shadow `lg`, font `13px` weight `600`
- Mobile: show only one phone, hide floating cards

### Value Props Section
**Background:** `#F2F2F2` with grid texture
**Grid:** 4 columns desktop, 2 columns tablet, 1 column mobile. Gap `20px`.

**Section header** (centered, margin-bottom `56px`):
- Label: "Why Vimse?"
- Title: "Everything you need, nothing you don't"

**4 value cards** (hover: `translateY(-4px)`, shadow increase):
| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | Home outline | Offline-first | Works without internet. Syncs seamlessly when you reconnect. |
| 2 | Shopping cart | Recipes + shopping | Add recipe ingredients directly to any shopping list with one tap. |
| 3 | Phone outline | Cross-platform | iOS, Android, and web — your data follows you everywhere. |
| 4 | Shield outline | Private & focused | No ads, no tracking, no bloat. Your data stays on your device. |

Card style: white bg, border-radius `20px`, padding `32px`, border `1px solid gray-100`, shadow `md`.
Icon container: `48×48px`, border-radius `14px`, background `primary-50`.

### Feature Section 1 — Recipes
**Background:** White
**Layout:** 2-column feature grid (text left, phone right). Gap `80px`.

**Text:**
- Label: "Recipes"
- Title: "Your recipes, always with you" (DM Serif Display, `44px`)
- Subtitle: `18px`, `gray-500`
- 3 checkmark list items with `24×24px` teal check circles (border-radius `8px`, background `primary-50`)

**Visual:** Phone mockup showing recipe detail screen, with `320px` blurred teal circle bg.

### Feature Section 2 — Shopping (Dark)
**Background:** `#121E26`
**Layout:** 2-column feature grid, **reversed** (phone left, text right).

**Text:**
- Label: "Shopping lists" (in `primary-300`)
- Title: "Shop smarter, not harder" (white)
- Subtitle: `rgba(255,255,255,0.5)`
- Tag pills: `['Check off items', 'Drag to reorder', 'Archive old lists', 'Add from recipes']`
  - Style: `primary-300` text, `rgba(255,255,255,0.06)` background, padding `8px 16px`, border-radius `12px`

Decorative background blobs: absolute positioned, blurred circles in `primary-500` and `primary-400`.

### Feature Section 3 — Offline
**Background:** White, centered layout, max-width `640px`.

**Stat row** (flex, gap `32px`, justify center, flex-wrap):
| Stat | Label |
|------|-------|
| 100% | Offline capable |
| < 1s | App load time |
| 0 | Ads or trackers |

Stat number: DM Serif Display, `44px`, `primary-500`.
Label: Inter `14px`, `gray-500`, margin-top `6px`.

### Download CTA Section
**Background:** `#121E26`

See reusable CTA section below.

---

## Page 2: Features (`/features`)

### Hero
**Background:** `#121E26`, padding `140px 0 80px`, centered.
- Label: "Features" (`primary-300`)
- H1: "Built around how you actually live" — DM Serif Display `48px`, white
- Subtitle: `rgba(255,255,255,0.45)`, max-width `480px`

### Feature — Recipes
**Background:** White. 2-column grid, text left, phone right.

**Feature icon:** `56×56px`, border-radius `16px`, `primary-50` bg, chef hat SVG in `primary-500`.

**Checklist items (5):**
1. Adjust servings — quantities recalculate automatically
2. Add all ingredients to a shopping list in one tap
3. Step-by-step mode for hands-free cooking
4. Add photos to remember how dishes should look
5. Search and filter across your recipe collection

### Feature — Shopping
**Background:** `#F2F2F2` with grid texture. 2-column grid, **reversed** (phone left, text right).

**Feature icon:** Shopping cart in `primary-500`.

**Checklist items (5):**
1. Check items off as you shop
2. Drag to reorder items
3. Progress bar shows how much is left
4. Archive completed lists for reference
5. Add items manually or from recipes

### Offline & Privacy (Dark)
**Background:** `#121E26`.

**Section header** (centered, margin-bottom `56px`):
- Label: "Offline & Privacy"
- Title: "Your data, your device"

**3 cards** (auto-fit grid, minmax `260px`, gap `20px`):
Card style: `rgba(255,255,255,0.04)` bg, border-radius `20px`, padding `32px`, border `1px solid rgba(255,255,255,0.06)`.
Icon: `40×40px` container, `rgba(255,255,255,0.06)` bg, SVG in `primary-300`.

| Icon | Title | Description |
|------|-------|-------------|
| Home | Works without internet | Open the app on a plane, in a store basement, or in the countryside. Everything works. |
| Refresh | Syncs when ready | Reconnect and your changes merge automatically. No conflicts, no data loss. |
| Shield | No tracking | We don't track you, sell your data, or show ads. Vimse earns your trust by respecting it. |

### Cross-platform
**Background:** White, centered.
Three phones side by side (flex, gap `24px`, align items flex-end):
- Left phone: scale `0.8`, Shopping screen
- Center phone: scale `1.0`, Home screen
- Right phone: scale `0.8`, Recipe screen

### Coming Soon / Roadmap
**Background:** `#F2F2F2`.
3-column grid of dashed-border cards.

Card style: border-radius `20px`, padding `28px`, border `1.5px dashed gray-200`, background `gray-50`.
Badge: "COMING SOON" — font `11px`, weight `700`, `primary-600`, background `primary-50`, padding `3px 10px`, border-radius `8px`, UPPERCASE, letter-spacing `0.04em`.

| Title | Description |
|-------|-------------|
| Packing lists | Plan what to bring on trips — with templates for different types of travel. |
| To-do lists | Simple, fast task management for everyday things that need doing. |
| Wish lists | Keep track of things you want — gifts, gear, books, anything. |

---

## Page 3: About (`/about`)

### Hero
**Background:** `#121E26`, padding `140px 0 80px`.
**Layout:** 2-column grid (`1.2fr 1fr`), gap `80px`.

**Left:**
- Label: "About Vimse" (`primary-300`)
- H1: "Built from frustration, made with care" — DM Serif Display `48px`, white
- Body: `18px`, line-height `1.7`, `rgba(255,255,255,0.5)`, max-width `480px`

**Right:** Founder photo placeholder — `280×280px`, border-radius `32px`, subtle glass border (`rgba(255,255,255,0.06)`), centered italic "V" in DM Serif Display `56px`, `primary-400`.
*(Replace with actual founder photo when available)*

### Story
**Background:** White. Max-width `720px`, left-aligned.
3 paragraphs of body text, `17px`, line-height `1.8`, `gray-600`.

### Philosophy
**Background:** `#F2F2F2` with grid texture.
6-card grid (3 columns desktop, 1 mobile).

Card style: white bg, border-radius `20px`, padding `32px`, border `1px solid gray-100`, shadow `md`. Hover: `translateY(-4px)`.
Number: DM Serif Display `40px`, `primary-200`, line-height `1`, margin-bottom `16px`.

| # | Title | Description |
|---|-------|-------------|
| 01 | Offline-first | Your app should work regardless of your connection. Vimse stores everything locally and syncs when it can. |
| 02 | Respect your time | No ads, no push notifications begging you back, no gamification. Open the app, do what you need, close it. |
| 03 | Privacy by default | Your recipes and shopping lists are personal. We don't read them, analyze them, or sell them. |
| 04 | Honest software | No dark patterns, no misleading upsells. We tell you exactly what Vimse does and doesn't do. |
| 05 | Focused scope | We'd rather do two things extremely well than ten things poorly. Recipes and shopping first, then we expand carefully. |
| 06 | Quality over speed | Every detail matters. Transitions, typography, the feel of checking off an item. Software should feel good to use. |

### Contact
**Background:** White. Max-width `720px`.

Contact card style: background `#121E26`, border-radius `28px`, padding `48px`, position relative, overflow hidden.
Decorative circle: absolute `top: -60px, right: -60px`, `200×200px`, `primary-500`, opacity `0.06`.

- Label: "Get in touch" (`primary-300`)
- H2: "Questions, feedback, or just want to say hi?" — DM Serif Display `36px`, white
- Body: `16px`, `rgba(255,255,255,0.5)`, max-width `440px`
- CTA button: `btn-primary` style, `mailto:hello@nesh.no`

---

## Reusable Components

### Download CTA Section (shared across all pages)
Dark section (`#121E26`), centered, padding `100px 0`.
- Label: "Get started"
- Title: "Ready to simplify your day?" — DM Serif Display, max-width `500px`, centered
- Subtitle: "Download Vimse — free, no account required, works offline from the start."
- App Store badges (centered)
- Decorative blobs (absolute, blurred circles)

### App Store Badges
**App Store badge:**
- Background: `#000`, border-radius `12px`, padding `0 16px`, height `52–56px`
- Apple logo (white) + "Download on the" (10px, `rgba(255,255,255,0.8)`) / "App Store" (17px, white, weight 600)

**Google Play badge:**
- Same dimensions and layout
- Google Play icon (colorful) + "GET IT ON" (10px) / "Google Play" (17px, white, weight 600)
- Link: `#` (placeholder, update with real store URLs)

### Primary Button (`btn-primary`)
- Background: `primary-500`
- Color: `#fff`
- Border-radius: `14px`
- Padding: `16px 32px`
- Font: Inter, `16px`, weight `600`
- Shadow: `0 4px 16px rgba(0,122,110,0.25)`
- Hover: `primary-700`, `translateY(-2px)`, shadow increase
- Transition: `0.2s`

### Secondary Button (`btn-secondary`)
- Background: `#fff`
- Color: `primary-600`
- Border: `2px solid primary-200`
- Border-radius: `14px`
- Padding: `14px 30px`
- Hover: `border-color: primary-400`, `translateY(-1px)`

### Scroll Reveal Animation
All major content blocks reveal on scroll: fade in + `translateY(28px → 0)`.
- Transition: `opacity 0.7s, transform 0.7s` with `cubic-bezier(0.22, 1, 0.36, 1)`
- Trigger: `IntersectionObserver`, threshold `0.12`, rootMargin `0px 0px -40px 0px`
- Stagger delays: `0.1s`, `0.2s`, `0.3s` for sibling items

### Section Label Pattern
```
LABEL TEXT ← 13px Inter, 700, primary-500, UPPERCASE, letter-spacing 0.1em
Big Section Title ← DM Serif Display, 44px, gray-900
Subtitle text at 18px ← Inter, gray-500
```

---

## Interactions & Behavior

| Element | Behavior |
|---------|----------|
| Nav links | Smooth scroll for same-page anchors; page navigation otherwise |
| Nav on scroll | Transparent → frosted white at 40px scroll depth |
| Value cards | `translateY(-4px)` + shadow increase on hover |
| Philosophy cards | `translateY(-4px)` on hover |
| Buttons | `translateY(-2px)` + shadow increase on hover, `0.15s` transition |
| Store badges | `translateY(-2px)` on hover |
| Floating hero cards | Continuous `float` keyframe animation (6s, ease-in-out, infinite) |
| Content sections | Fade + slide up on scroll entry |
| Mobile hamburger | Toggles nav link dropdown |

---

## SEO & Meta

Each page should include:
```html
<meta name="description" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="/og-image.png">
```

Suggested per-page descriptions:
- **Landing:** "Vimse helps you organize your everyday life — recipes, shopping lists, and more. Works offline. Free on iOS and Android."
- **Features:** "Explore Vimse's features: recipe management, shopping lists, offline-first sync, and cross-platform support."
- **About:** "Learn about Vimse — why we built it, what we believe in, and how to get in touch."

---

## Astro Implementation Notes

- Use Astro layouts for shared nav + footer: `src/layouts/Base.astro`
- Each page as a `.astro` file: `src/pages/index.astro`, `features.astro`, `about.astro`
- Extract shared components: `Nav.astro`, `Footer.astro`, `StoreBadges.astro`, `DownloadCTA.astro`
- CSS: use CSS custom properties matching the token table above. Consider a `tokens.css` file imported globally.
- Fonts: import via `<link>` in `<head>` or via Astro font integration
- Animations: implement scroll reveal with a small vanilla JS IntersectionObserver or the Astro `@astrojs/transitions` integration
- Images: replace the inline SVG phone mockup placeholders with actual app screenshots when available. Recommended format: WebP, 2× for retina.
- Store links: replace `href="#"` on badge links with real App Store / Google Play URLs
- Contact email: `hello@nesh.no`

---

## Assets Needed (not in this package)

| Asset | Notes |
|-------|-------|
| App screenshots | Replace phone mockup placeholders. Aim for 3 screens: Home, Recipe Detail, Shopping List. Export at 2× from device. |
| Founder photo | For About page hero — `280×280px` minimum, can be larger. |
| OG image | `1200×630px` for social sharing |
| App Store URL | Real link to iOS App Store listing |
| Google Play URL | Real link to Google Play listing |
| Favicon | Use the Vimse "V" mark, 32×32 and 192×192 |
