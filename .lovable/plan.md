## Goal

Restructure the site from 2 routes (`/`, `/services`) into a bilingual, SEO-clean architecture with 14 indexable routes, plus a full technical SEO pass and Instagram added everywhere Facebook appears. **No Twitter Card metadata** — Open Graph only.

## Final route map

| URL | Page | H1 (main keyword) |
|---|---|---|
| `/` | Home FR | Réparation cellulaire à Sherbrooke |
| `/en` | Home EN | Cell Phone Repair in Sherbrooke |
| `/services/ecran-iphone` | iPhone screen FR | Réparation écran iPhone à Sherbrooke |
| `/services/batterie` | Battery FR | Remplacement de batterie cellulaire à Sherbrooke |
| `/services/samsung` | Samsung FR | Réparation Samsung Galaxy à Sherbrooke |
| `/services/pixel` | Google Pixel FR | Réparation Google Pixel à Sherbrooke |
| `/services/deverrouillage` | Unlocking FR | Déverrouillage cellulaire à Sherbrooke |
| `/en/services/iphone-screen` | iPhone screen EN | iPhone Screen Repair in Sherbrooke |
| `/en/services/battery` | Battery EN | Cell Phone Battery Replacement in Sherbrooke |
| `/en/services/samsung` | Samsung EN | Samsung Galaxy Repair in Sherbrooke |
| `/en/services/pixel` | Google Pixel EN | Google Pixel Repair in Sherbrooke |
| `/en/services/unlocking` | Unlocking EN | Cell Phone Unlocking in Sherbrooke |
| `/demande-reparation` | Repair request FR | Demande de réparation |
| `/en/repair-request` | Repair request EN | Repair Request |

The existing `/services` route (consolidated FR overview) will be removed since the new per-service routes replace it. The in-page FR/EN toggle on `/` becomes a true language switch (links to `/` ↔ `/en`). Any existing `twitter:*` meta tags in current routes will be stripped.

## Implementation

### 1. Shared layout components (new, in `src/components/site/`)

- `SiteHeader.tsx` — graphite top bar with logo, nav, Facebook icon, **Instagram icon (same style/size, `target="_blank" rel="noopener"`, URL `https://www.instagram.com/digitalexpert.ca/`)**, language switch (link, not state), CTA phone button. Takes `lang` prop.
- `SiteFooter.tsx` — used everywhere; Facebook **and Instagram** in the social row.
- `MobileCallBar.tsx` — extracted from current home.
- `ServicePageShell.tsx` — reusable layout for the 5 service detail pages (hero, included-models list, pricing, "Comment ça marche" steps, contact CTA, FAQ stub specific to the service).

The existing `/` page is refactored to use `SiteHeader` / `SiteFooter` so all routes share the chrome; visual design preserved.

### 2. i18n

Extend `src/lib/i18n.ts` with strings needed for service detail pages and the repair-request page (hero copy, model lists, FAQs, CTAs). No runtime toggle inside a page — `lang` is determined by route prefix.

Helper `src/lib/site-url.ts` exporting `SITE_URL = "https://fixit-quick-bid.lovable.app"` for canonical and og:url building.

### 3. New route files

- `src/routes/en.tsx` — pathless EN layout returning `<Outlet />`.
- `src/routes/en.index.tsx` — EN home (mirrors `/` content in English).
- `src/routes/services.ecran-iphone.tsx`, `services.batterie.tsx`, `services.samsung.tsx`, `services.pixel.tsx`, `services.deverrouillage.tsx`.
- `src/routes/en.services.iphone-screen.tsx`, `en.services.battery.tsx`, `en.services.samsung.tsx`, `en.services.pixel.tsx`, `en.services.unlocking.tsx`.
- `src/routes/demande-reparation.tsx` — FR standalone form page (reuses current form logic).
- `src/routes/en.repair-request.tsx` — EN version.
- Delete `src/routes/services.tsx` (replaced by per-service routes).

### 4. Per-route head() metadata (Open Graph only — no Twitter)

Every route's `head()` returns:

- `title` — exactly as specified, all under 60 chars (table below)
- `description` — unique, 150–160 chars, in page language, ending with a CTA
- `og:title`, `og:description` — match title/description
- `og:type: "website"`, `og:url` — absolute, self-referencing
- `og:locale: "fr_CA"` or `"en_CA"`
- `og:image` — placeholder share image (see §6)
- `links: [{ rel: "canonical", href: <absolute self URL> }]`
- **No** `twitter:card`, `twitter:image`, `twitter:title`, `twitter:description`. The current `twitter:card` line in `src/routes/index.tsx` and `src/routes/services.tsx` is removed.

Confirmed title lengths (all ≤ 60):

| Route | Title | Len |
|---|---|---|
| `/` | `DigitalExpert.ca \| Réparation cellulaire Sherbrooke` | 52 |
| `/en` | `DigitalExpert.ca \| Cell Phone Repair Sherbrooke` | 48 |
| `/services/ecran-iphone` | `Réparation écran iPhone Sherbrooke \| DigitalExpert` | 51 |
| `/services/batterie` | `Remplacement batterie cellulaire Sherbrooke` | 43 |
| `/services/samsung` | `Réparation Samsung Galaxy Sherbrooke \| DigitalExpert` | 52 |
| `/services/pixel` | `Réparation Google Pixel Sherbrooke \| DigitalExpert` | 50 |
| `/services/deverrouillage` | `Déverrouillage cellulaire Sherbrooke \| DigitalExpert` | 51 |
| `/en/services/iphone-screen` | `iPhone Screen Repair Sherbrooke \| DigitalExpert` | 47 |
| `/en/services/battery` | `Cell Phone Battery Replacement Sherbrooke` | 41 |
| `/en/services/samsung` | `Samsung Galaxy Repair Sherbrooke \| DigitalExpert` | 48 |
| `/en/services/pixel` | `Google Pixel Repair Sherbrooke \| DigitalExpert` | 46 |
| `/en/services/unlocking` | `Cell Phone Unlocking Sherbrooke \| DigitalExpert` | 47 |
| `/demande-reparation` | `Demande de réparation cellulaire \| DigitalExpert.ca` | 51 |
| `/en/repair-request` | `Cell Phone Repair Request \| DigitalExpert.ca` | 44 |

Descriptions hand-written, ~155 chars each, ending with a CTA (e.g. "Soumission gratuite — 819-300-1718", "Get a free estimate — call 819-300-1718", "Passez en boutique au 1394 rue Denault").

### 5. H1 audit

Each page renders exactly one `<h1>` containing the keyword in the table above. Section labels stay as `<h2>`, card titles as `<h3>`. I'll verify every route has one (and only one) H1 and that levels descend H1 → H2 → H3 with no skips.

### 6. OG share image

Generate one placeholder share image (1200×630): logo on graphite background, saved at `src/assets/og-share.jpg`, used as `og:image` on every route. I'll note to the user that Facebook caches previews and may need a manual refresh via its sharing debugger.

### 7. robots.txt + sitemap.xml

- `public/robots.txt` — update to allow all + reference `https://fixit-quick-bid.lovable.app/sitemap.xml`.
- The current `src/routes/sitemap.xml.ts` is registered as `/sitemap/xml` (broken — the dot isn't escaped). Replace with `src/routes/sitemap[.]xml.ts` resolving to `/sitemap.xml`, populated with all 14 routes using `BASE_URL = "https://fixit-quick-bid.lovable.app"`. Delete the old file.

### 8. Instagram propagation

Add the Lucide `Instagram` icon wherever Facebook appears:
- `SiteHeader` social cluster — both icons together
- `SiteFooter` social row — both icons together

All Instagram links: `https://www.instagram.com/digitalexpert.ca/`, `target="_blank"`, `rel="noopener"`, `aria-label="Instagram"`.

### 9. JSON-LD

Keep the sitewide `MobilePhoneStore` schema in `__root.tsx`. Add per-service `Service` JSON-LD on each service route (`provider` references the store, `areaServed: Sherbrooke`). Repair-request pages get no extra schema.

### 10. Verification checklist (reported back at the end)

- [ ] 14 unique titles, all ≤ 60 chars
- [ ] 14 unique descriptions, 150–160 chars, each ending in a CTA
- [ ] Exactly one H1 per page, heading levels descend logically
- [ ] `sitemap.xml` returns 200 and lists all 14 routes
- [ ] `robots.txt` allows crawling and references the sitemap
- [ ] OG tags present on every route, self-referencing canonical/og:url
- [ ] No `twitter:*` tags anywhere
- [ ] Instagram link present in every header and footer with `rel="noopener"` and `target="_blank"`

## Out of scope

- Visual redesign — existing design preserved.
- Final share-image artwork — placeholder only.
- Backend form submission — repair-request page reuses current `mailto:` flow.
- Auto-redirect by browser language on `/`.
