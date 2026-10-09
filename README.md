# V2 3D Printing — Next.js port (demo-shopify)

A standalone Next.js 16 port of the single-file `main.html` in this folder.
`main.html` is kept at the repo root as the porting reference; it is not part of
the app.

> **Source note.** `demo-shopify/main.html` is byte-for-byte identical to
> `demo-mern/main.html` — same MD5 (`fa4fc002ba2c005d30b0f08f65300467`), same
> 73,713 bytes. The two demo folders ship the same exported page, so this port is
> the same application as `../demo-mern`, delivered as its own project (its own
> package name and its own test port). If the intent is for the Shopify demo to
> be a *different* page, replace `main.html` and re-port.

## Commands

```bash
npm run dev      # dev server
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
npm test         # vitest (unit + component, 36 tests)
npm run e2e      # playwright (browser, 26 tests across desktop + mobile)
```

`npm run e2e` runs against a real `next start` server on port 3300 and never
reuses an existing one — a leftover server would silently serve a stale build.
(The sibling `demo-mern` uses 3100 and `demo-webflow` uses 3200, so all three can
run side by side.)

## Structure

```
app/
  layout.jsx        # fonts, metadata, <html>/<body>
  page.jsx          # composes the sections — Server Component
  globals.css       # Tailwind v4 @theme tokens ported from main.html's config
components/
  SiteHeader.jsx       server   announcement bar, nav, cart/wishlist
  Hero.jsx             server   headline, CTAs, floating spec tags
  CategoryBar.jsx      client   active-pill state
  FeatureCollection.jsx server  section header + sort select
  ProductGrid.jsx      client   maps 8 products, owns toast state
  ProductCard.jsx      client   wishlist toggle + quick-add
  CartToast.jsx        client   aria-live status region
  Benefits.jsx         server   4 pillars
  AboutStudio.jsx      server   story + stat grid
  Reviews.jsx          server   rating pill + 3 testimonials
  VipSignup.jsx        client   email validation + success state
  VideoModal.jsx       client   owns its own trigger + dialog
  SiteFooter.jsx       server   links, newsletter, socials, payments
  Icon.jsx             both     Material Symbols glyph, always decorative
lib/
  products.js       # the 8 featured products
  content.js        # nav, categories, benefits, stats, reviews, footer data
tests/
  *.test.jsx|js     # vitest + React Testing Library
  e2e/home.spec.mjs # playwright
```

## Client/server split

The page is fully static (prerendered, `○ Static`). Only four components carry
`"use client"` — `CategoryBar`, `ProductGrid` (with its cards and toast),
`VipSignup` and `VideoModal`. Everything else is a Server Component, so the
shipped JavaScript stays small.

`SiteHeader` is deliberately a Server Component: the original header had no
JavaScript at all, and its currency select and search field work natively.

## Styling

The `tailwind.config` object inlined in `main.html` was a Tailwind **v3** config.
It is ported into Tailwind v4's CSS-first `@theme` in `app/globals.css`:
all 58 colors, 12 named spacing tokens and 15 type scales, including the
per-scale `--text-*--line-height` / `--letter-spacing` / `--font-weight` values.

Three parts of the original config are intentionally not carried over:

- **`fontFamily`** — all 15 keys resolved to "Plus Jakarta Sans", so one
  `--font-sans` covers every one of them. The `font-*` classes are dropped in
  favour of inherited `font-sans`.
- **`borderRadius`** — the v3 overrides (`lg` 0.5rem, `xl` 0.75rem, `full`
  9999px) are identical to the v4 defaults.
- **`darkMode: "class"`** — the markup never used a single `dark:` variant.

`@source not "../main.html"` keeps Tailwind's scanner out of the reference file,
so its utilities are not emitted into the bundle.

## Deliberate deviations from `main.html`

Behaviour is otherwise a faithful copy. These are the exceptions, all deliberate:

| Area | Change | Why |
| --- | --- | --- |
| Tailwind | CDN script → compiled v4 | `cdn.tailwindcss.com` is a browser-side compiler and is not for production. |
| Fonts | Plus Jakarta Sans via `next/font` | Self-hosted, no layout shift. Material Symbols stays a stylesheet link because it is not in `next/font/google`'s data. The original loaded that stylesheet twice. |
| Images | `<img>` → `next/image` | Sized/optimised, served from `/_next/image`. Requires `images.remotePatterns` in `next.config.mjs`. |
| Newsletter | Added email validation | The original relied on `required` + `type=email` and then faked success. Now `noValidate` + an explicit check, with `aria-invalid` and a `role="alert"` message. |
| Modal | Escape closes, focus returns | The original had no dialog semantics and no keyboard exit. |
| Toast | `role="status"` `aria-live="polite"` | The original only toggled opacity, so the confirmation was never announced. |
| Icons | `aria-hidden` on every glyph | Decorative; the original let screen readers read icon ligature names. |
| Labels | `sr-only` labels / `htmlFor` | Currency select, search and both email fields had none. |
| Payment badges | `flex-wrap justify-center` | The 7 badges are 451px wide and overflowed a 412px viewport. Wrapping is a no-op at desktop widths. |
| Cart / wishlist badges | Header stays static | Faithful: `addToCart` never updated the header in the original either. Header state is unused boilerplate there. |
| Category pills | Move the active state only | Faithful: the pills never filtered the grid. Their counts (24 total) describe the wider catalog, not the featured eight. |

## Known dead UI (carried over deliberately)

These are inert in `main.html` and remain inert here, because making them work is
a product decision rather than a porting decision:

- Quick Sort `<select>` — sorts nothing.
- Currency `<select>`, header search — no effect.
- All nav, footer and legal links, plus the "Explore All 24 Models" CTA — `href="#"`.
- Footer "Join" button — no handler.
- The video modal shows a still image and a play icon, not a video.

## Dead scaffold files removed

The `public/*.svg` files from `create-next-app` were unreferenced and deleted.
