# inteliSentry — Landing Page

A modern, **teleconsult-first** healthcare clinic landing page. Patients consult a clinician
online first, and visit the clinic only when an in-person follow-up or procedure is needed.

Static, hand-coded, no build step — open `index.html` in any browser. Visually inspired by the
clean modern-healthcare marketing style of athenahealth.com, recoloured to a refined
**gold-and-white** palette.

## Preview

Open the site locally:

```bash
# Just open the file
start index.html          # Windows
# or serve it (nicer for SEO/relative paths)
python -m http.server 8000   # then visit http://localhost:8000
```

## Structure

```
index.html        Semantic, SEO-complete landing page (all sections)
styles.css        Design tokens (gold/white), components, responsive, reduced-motion
main.js           Sticky header, mobile nav, scroll-reveal, animated stats, FAQ, demo form
sitemap.xml       Single canonical URL (expandable)
robots.txt        Crawl directives + sitemap pointer
assets/
  favicon.svg     Gold brand mark
  og-image.svg    1200x630 social share card
docs/
  design-language.md   Full design system (colour, type, layout, components, SEO)
  specs/               Build spec for this mockup
```

## Design system

- **Colour:** gold accents on a warm white/champagne canvas. Gold is reserved for CTAs, icons,
  numerals, and accents — never body text — to meet WCAG AA contrast.
- **Type:** Fraunces (display serif) + Inter (body), loaded via Google Fonts with system fallbacks.
- **Sections:** hero, teleconsult-first 3-step journey, services, feature rows, stats, clinicians,
  testimonials, FAQ, booking CTA, footer.

Full details in [`docs/design-language.md`](docs/design-language.md).

## SEO & accessibility

- Semantic HTML5 landmarks, a single `<h1>`, correct heading order.
- `<title>` / meta description / Open Graph / Twitter cards / canonical.
- JSON-LD structured data: `MedicalClinic` + `LocalBusiness`, `WebSite`, `FAQPage`,
  `BreadcrumbList`, and `Physician`.
- `sitemap.xml` + `robots.txt`, descriptive `alt` text, lazy-loaded media.
- Keyboard-operable nav and FAQ, visible focus states, `prefers-reduced-motion` support.

## Before going live (placeholders to replace)

Clinic name/address/phone/email (NAP), JSON-LD `geo` coordinates and `priceRange`, the illustrative
stat figures, clinician and testimonial details, real photography in place of the SVG/gradient
placeholders, and a PNG version of the OG share image.

---

This is a design preview with placeholder content. Built as a static mockup for client review.
