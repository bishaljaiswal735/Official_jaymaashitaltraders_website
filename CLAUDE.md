# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start local dev server at localhost:5173
npm run build        # Build for production (also copies dist/index.html → dist/404.html for SPA routing)
npm run deploy       # Build + deploy to GitHub Pages (runs predeploy automatically)
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
```

Deployment goes to GitHub Pages at **www.jmstraders.com.np** via the `gh-pages` package. The `.env` file must be present at build time — Vite embeds `VITE_*` variables into the bundle.

## Architecture

**Stack:** React 19 + Vite 7 + Tailwind CSS 4 + React Router 7 + Supabase + react-helmet-async

**Hosting:** GitHub Pages (static). All data fetching is client-side via Supabase JS SDK.

### Data flow

Products are stored in **Supabase** (`products` table) and fetched at runtime. Pricing data (flange, GI fittings, nipples, saddle) is **hardcoded** in `src/price_component/*.js` files — intentionally not in Supabase.

- `src/lib/supabase.js` — single shared Supabase client, reads `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- `src/hooks/useProducts.js` — fetches all active products, splits into `mainProducts` / `otherProducts` by `category` field
- `src/hooks/useFlangeData.js` and `src/hooks/usePriceTableData.js` — exist but currently unused; pricing uses hardcoded JS data

### Routing

Five routes defined in `src/App.jsx`. All wrapped with `ScrollToTop`. The `dist/404.html` (copy of `index.html`) + a redirect script in `index.html` handles SPA deep-link routing on GitHub Pages.

| Route | Page |
|---|---|
| `/` | `Home.jsx` |
| `/product` | `Product.jsx` — searchable product grid, fetches from Supabase |
| `/product/:slug` | `ProductDetail.jsx` — individual product page, slug generated from label via `toSlug()` |
| `/pricing` | `Pricing.jsx` — hardcoded price tables |
| `/contact` | `Contact.jsx` |

### Product slugs

`toSlug(label)` is exported from `ProductDetail.jsx` and imported into `Product.jsx`. It converts a product label to a URL slug: lowercase, spaces → hyphens, non-alphanumeric removed. Both files must use the same function to keep URLs consistent.

### SEO

- `index.html` — static `LocalBusiness` JSON-LD schema (company info only, never changes)
- Each page uses `react-helmet-async` (`<Helmet>`) for per-page title, description, keywords, canonical, and JSON-LD
- `ProductDetail.jsx` generates a `Product` schema with the product's live Supabase data
- `main.jsx` wraps the app in `<HelmetProvider>`

### Supabase schema

Only the `products` table is used at runtime:

| Column | Type | Notes |
|---|---|---|
| `label` | text | Product name, used to generate slug |
| `category` | text | `'main'` or `'other'` |
| `image_url` | text | Supabase Storage public URL |
| `brand` | text | |
| `size_info` | text | |
| `display_order` | int | Sort order within category |
| `is_active` | bool | Set false to hide without deleting |

RLS: public SELECT allowed with anon key; INSERT/UPDATE/DELETE requires authenticated role (Supabase Studio login).

`scripts/seed.js` — one-time migration script, requires the **service role key** (not anon key).
