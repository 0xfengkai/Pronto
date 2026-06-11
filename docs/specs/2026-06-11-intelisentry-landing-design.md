# inteliSentry — Static Landing Page Mockup (Build Spec)

Date: 2026-06-11
Status: Awaiting user approval
Design source: [docs/design-language.md](../design-language.md) (full athenahealth-inspired gold & white design language — the authoritative token/type/component reference)

## 1. What we are building

A single **static landing page** to present to the client. Hand-coded, no build step, opens
by double-click in any browser, hostable anywhere. Sections are authored as self-contained
modular blocks so any one can later graduate into its own page (How It Works, Services, About,
For Patients, Contact) without a redesign.

Deliverable file tree:

```
index.html            semantic, SEO-complete landing page
styles.css            design tokens (--is- prefix) + components + responsive + reduced-motion
main.js               vanilla JS: sticky header, mobile nav, scroll-reveal, FAQ accordion, smooth-scroll
robots.txt            allow all + sitemap pointer
sitemap.xml           single canonical URL (expandable)
assets/
  favicon.svg         gold "iS" mark
  og-image.svg        1200x630 share card (white canvas, gold accent, wordmark)
  (inline SVG/CSS placeholders for photography — no external image dependencies)
```

No framework, no Node, no network dependency to render (fonts degrade gracefully offline).

## 2. Brand & visual system (from design-language.md)

- **Palette:** gold-on-white. Warm off-white canvas `#FCFBF8`, white surfaces, champagne bands
  (`--is-gold-50 #FBF6EC`), primary brand gold `--is-gold-500 #B8862B`, button fill `--is-gold-600 #9A6E1E`,
  text-safe deep gold `--is-gold-700 #7A5512`, warm charcoal ink `--is-ink-900 #1A1714` / body `--is-ink-700 #3A352E`.
  Dark near-black hero-accent/footer `#1A1714` with gold-300 accents.
- **Type:** **Fraunces** (warm serif) for H2+ headings and the hero display; **Inter** for H3, body, UI,
  buttons, and all small text. Full type scale and `clamp()` fluid sizing per spec §3. Loaded via Google
  Fonts CDN (with `preconnect`) for the mockup, with a system serif/sans fallback so it still renders
  offline; production note: self-host as woff2 for performance.
- **Tokens:** all spacing (`--space-*` 8px base), radii (`--radius-*`), and elevation (`--elev-*` warm-tinted
  shadows) come straight from the design language. CSS uses tokens only — no hard-coded hex in components.
- **Motion:** subtle, compositor-only (transform/opacity). Scroll-reveal fade-up on sections, card hover-lift,
  FAQ expand. Full `prefers-reduced-motion` honoring (content always visible, movement removed).

## 3. Page structure (modular sections, top to bottom)

1. **Skip link** + **sticky header** — gold "inteliSentry" wordmark, primary nav (How it works · Services ·
   Why us · FAQ · Contact), persistent gold **Book a teleconsult** button. Condenses + gains shadow on scroll.
   Mobile: hamburger drawer; Book CTA stays visible in the collapsed bar.
2. **Hero** — `<h1>` "See your doctor online first. Visit the clinic only when you need to." + subhead, dual CTA
   (Book a teleconsult / How it works), warm clinician illustration placeholder on a light champagne canvas.
3. **Trust strip** — muted accreditation / "as featured in" placeholder logos.
4. **How it works — the teleconsult-first journey** (flagship band, `--is-gold-50`): 3 numbered steps with
   gold badges + connecting line — **① Book your teleconsult → ② Meet your doctor online →
   ③ In-clinic follow-up or procedure, only if needed.**
5. **Why teleconsult-first** — 3-4 benefit tiles (faster access, less waiting-room time, continuity, convenience).
6. **Services** — grid of the four featured services: General teleconsultation (GP), Chronic disease
   management, Minor in-clinic procedures, Health screening & diagnostics. Each: icon, title, blurb, link.
7. **Why inteliSentry** — 2 alternating media-beside-text feature rows (media side flips per the section pattern).
8. **Stats band** — champagne background, large gold numerals (e.g. same-day teleconsults, average wait,
   patient satisfaction) with footnoted captions.
9. **Clinicians** — 3 placeholder doctor cards (portrait, name, credential, focus) — feeds `Physician` schema.
10. **Testimonials** — patient quote cards.
11. **FAQ** — accordion (also powers `FAQPage` JSON-LD).
12. **Closing CTA band** — "Start with a teleconsult today" + a simple booking/contact form
    (front-end only for the mockup — validates and shows a success state, no backend submission).
13. **Footer** — dark, 4-column sitemap + NAP (name/address/phone placeholders) + hours + socials + legal row.

The Book-a-teleconsult CTAs smooth-scroll to the closing booking section (no real `/book/` endpoint in a
static mockup; clearly the conversion anchor for when a backend is added later).

## 4. Content & assets

- **Copy:** realistic placeholder clinic copy written to feel real (not lorem ipsum).
- **Logo:** generated gold "inteliSentry" wordmark + favicon (inline SVG, no external file needed).
- **Imagery:** brand-colored inline-SVG / CSS-gradient placeholders with descriptive `alt` text, sized with
  explicit aspect-ratio to protect CLS. Client swaps in real photography later by replacing the placeholder blocks.
- **Placeholder location/contact details** clearly marked so the client fills in real NAP before launch.

## 5. SEO & technical (baked in, statically achievable)

- Semantic HTML5 landmarks (one `<header>/<main>/<footer>`, `<section aria-labelledby>` per band), single
  `<h1>`, no skipped heading levels, eyebrows as `<p class="eyebrow">` not headings.
- `<title>` + meta description, canonical, Open Graph + Twitter card (with `assets/og-image.svg`).
- **JSON-LD:** `MedicalClinic` + `LocalBusiness` (name, address, geo, telephone, openingHours, priceRange,
  availableService=Teleconsultation), `WebSite`, `FAQPage` (mirrors visible FAQ), `BreadcrumbList`,
  and `Physician` items for the clinician cards. Placeholders flagged for the client to complete.
- `sitemap.xml` + `robots.txt`.
- Every `<img>`/SVG has alt or `aria-hidden`; below-the-fold media `loading="lazy"`; hero is eager.
- Accessibility: WCAG 2.2 AA — gold reserved for accents/large text/fills (never body copy), visible focus
  rings, keyboard-operable nav + accordion, reduced-motion support, `<html lang>` set.
- Lightweight: ~one CSS file, tiny vanilla JS, no images-as-files beyond SVG — fast Core Web Vitals.

## 6. Out of scope for this mockup (future phases)

- Real booking backend / patient portal / payments.
- CMS, multi-page routing (sections are built ready to split, but only `index.html` ships now).
- Real photography, real clinician/contact data, analytics, cookie consent, self-hosted fonts.

## 7. Acceptance

A polished, single-file-openable gold-and-white landing page that tells the teleconsult-first story,
features the four services, looks credibly like a modern healthcare site in athenahealth's spirit, is
fully responsive, accessible, and SEO-complete in markup — ready to show the client.
