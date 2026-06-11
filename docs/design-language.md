# inteliSentry — Design Language (athenahealth-inspired, gold & white)

inteliSentry's visual direction takes athenahealth's calm, white-dominant, whitespace-heavy marketing rhythm and recolors it from confident blue to a refined champagne-to-deep-gold palette: a premium, warm-but-clinical canvas where gold is a disciplined accent, never a flood. The design pairs a warm editorial serif (Fraunces) for headlines with a neutral humanist sans (Inter) for everything else, stacks the page into airy, alternating sections, and bends every structural decision toward one story — the teleconsult-first patient journey (Book teleconsult → Online consult → In-clinic follow-up / procedure if needed). It is built SEO-ready and accessible from the foundation up, with WCAG AA contrast guaranteed by routing all meaningful text through deep gold or charcoal and reserving brighter golds for fills, icons, and large numerals.

---

## 1. Design principles & overall feel

- **Gold is an accent, not a background.** The dominant canvas is white and warm off-white; gold appears on CTAs, icons, active states, eyebrows, dividers, and stat numerals — typically under ~10% of any viewport. Whitespace, not decoration, is the luxury signal: err toward more vertical breathing room than athenahealth, never less.
- **Warm-but-clinical.** Neutrals carry a faint warm (yellow/brown) bias so they harmonize with gold rather than reading cold-blue. The palette feels premium and trustworthy; gold stays in the champagne/amber/deep-gold range, never bright yellow.
- **Editorial premium pairing.** A warm humanist serif (Fraunces) for display headings against a neutral grotesque (Inter) for body/UI echoes athenahealth's serif-display/sans-body contrast, but with more brand personality — restrained, legible, calm.
- **One canvas, stacked rhythm, one story.** The page is a vertical stack of self-contained, alternating media-beside-text sections at a single content measure, sequenced to tell the teleconsult-first journey top-to-bottom and funnel to a single, repeated primary action: **Book a teleconsult**.
- **Calm, functional motion.** Motion confirms cause-and-effect (hover, click, reveal) and guides the eye along the journey — short, eased, transform/opacity-only, and fully respectful of `prefers-reduced-motion`. No scroll-jacking, no autoplay that hijacks reading.
- **Accessible and SEO-ready from the foundation.** Semantic HTML, one `<h1>` per page, correct landmark/heading order, structured data, and WCAG 2.2 AA contrast are launch gates, not polish — and a light, low-image-weight gold/white canvas is naturally fast.

---

## 2. Color system

This is the single source of truth for color. Tokens are exposed as CSS custom properties under the `--is-` (inteliSentry) prefix; **hex values are authoritative.** Earlier section drafts used divergent token prefixes (`--clr-`, `--color-`, `--gold-`) and slightly different golds — those are reconciled here into the `--is-` ramp below, and all components reference these names.

### Design principles

1. **Gold is an accent, not a background.** Dominant canvas is white/near-white; gold is reserved for CTAs, icons, active states, eyebrows, dividers, stat numerals, and small key moments.
2. **Never set important text in mid-gold on white.** Brand gold `#B8862B` does not reach AA for body text on white. Use deep gold `--is-gold-700` (`#7A5512`) or charcoal for text; reserve mid/primary gold for large display numerals, fills, icons, and borders.
3. **Warm the neutrals.** Grays carry a faint warm bias; the canvas is a warm off-white, not pure clinical gray.
4. **Two-tier buttons** mirror athenahealth: a solid gold primary and a gold-outline/ghost secondary, plus a charcoal/gold text-link tertiary.

### Core token table

| Token | Hex | Role / usage |
|---|---|---|
| `--is-gold-50` | `#FBF6EC` | Lightest champagne wash — alternating bands, hero text-block tint, table zebra |
| `--is-gold-100` | `#F6ECD6` | Cream/champagne — card containers, pill/badge fill, soft callout backgrounds |
| `--is-gold-200` | `#EBD9AE` | Light gold — hover fill on ghost buttons, selected pill, subtle borders on gold surfaces |
| `--is-gold-300` | `#DCC07A` | Soft gold — decorative dividers, chart fills, icon backgrounds, gold accent on dark |
| `--is-gold-400` | `#C9A24E` | Bright accent gold — large display numerals, icon glyphs, focus ring on light |
| `--is-gold-500` | `#B8862B` | **Primary brand gold** — logo mark, active carousel dot, key accents, stat numerals (large only) |
| `--is-gold-600` | `#9A6E1E` | **Hover/pressed gold + robust primary button fill** — primary CTA fill, link hover on light |
| `--is-gold-700` | `#7A5512` | **Deep gold (text-safe)** — gold text/links on white, eyebrow labels, AA-passing accent text |
| `--is-gold-800` | `#5C3F0C` | Darkest gold — text on champagne/`gold-100` backgrounds, deep emphasis |
| `--is-white` | `#FFFFFF` | Primary page background, card fills, on-dark text |
| `--is-canvas` | `#FCFBF8` | Warm off-white app canvas (default `body` background) |
| `--is-surface-alt` | `#F7F4ED` | Warm light-gray alternating section / container fill |
| `--is-ink-900` | `#1A1714` | Near-black warm charcoal — H1–H3 headings, dark footer/hero background |
| `--is-ink-700` | `#3A352E` | Primary body text (warm charcoal) |
| `--is-ink-500` | `#6B645A` | Secondary/muted body, captions, meta, dates, read-time |
| `--is-ink-300` | `#A8A092` | Disabled text, placeholder, faint labels |
| `--is-border` | `#E5DFD3` | Default borders, card outlines, dividers (warm) |
| `--is-border-strong` | `#CFC7B6` | Stronger dividers, input borders, table rules |
| `--is-success` | `#2E7D52` | Success — confirmation, "booked" states, positive stats |
| `--is-success-bg` | `#E6F2EA` | Success banner/toast background |
| `--is-error` | `#C0392B` | Error — form validation, destructive actions, alerts |
| `--is-error-bg` | `#FBEAE7` | Error banner/toast background |
| `--is-warning` | `#B8862B` | Warning — reuses primary gold; pair with `--is-ink-900` text/icon, never gold text alone |
| `--is-warning-bg` | `#FBF1DC` | Warning banner/toast background |
| `--is-info` | `#2D6CA2` | Info — neutral notices, secondary informational links (used sparingly) |
| `--is-info-bg` | `#E7F0F7` | Info banner/toast background |
| `--is-focus` | `#C9A24E` | Focus-ring color on light surfaces (`gold-400`); `2px` solid + `2px` offset |

### Dark surface tokens (hero / footer)

The dark hero overlay and dark multi-column footer invert to a warm near-black with gold accents and white text.

| Token | Hex | Role / usage |
|---|---|---|
| `--is-dark-bg` | `#1A1714` | Hero overlay base, footer background |
| `--is-dark-surface` | `#26221C` | Raised cards/inputs on dark, footer column hover |
| `--is-dark-text` | `#FFFFFF` | Primary text on dark |
| `--is-dark-text-muted` | `#C9C2B4` | Secondary text, footer link rest state on dark |
| `--is-dark-border` | `#3A352E` | Dividers and column rules on dark |
| `--is-dark-accent` | `#DCC07A` | Gold accent on dark (use `gold-300`, not `gold-500` — brighter gold reads better on near-black) |

### Color application map

| Surface / element | Background | Text | Accent |
|---|---|---|---|
| `body` / page canvas | `--is-canvas` | `--is-ink-700` | — |
| Default section | `--is-white` | `--is-ink-700` | gold accents |
| Alternating section band | `--is-surface-alt` | `--is-ink-700` | — |
| Soft feature/callout band | `--is-gold-50` | `--is-ink-700` | `--is-gold-700` eyebrows |
| Card / feature card | `--is-white` | `--is-ink-700` | `1px` `--is-border`, shadow `--elev-2` |
| Headings (H1–H3) | inherit | `--is-ink-900` | — |
| Eyebrow / category label | inherit | `--is-gold-700` | uppercase, letter-spacing `0.08em` |
| Body text | inherit | `--is-ink-700` | — |
| Secondary / meta text | inherit | `--is-ink-500` | — |
| Text link (rest) | inherit | `--is-gold-700` | underline on hover |
| Text link (hover) | inherit | `--is-gold-600` | — |
| Stat / metric numeral | inherit | `--is-gold-500` (large only) | — |
| Divider / `<hr>` | — | — | `--is-border` |
| Hero / footer | `--is-dark-bg` | `--is-dark-text` | `--is-dark-accent` |

### Buttons — tokens and states

Buttons use `--radius-sm` (8px) radius, `12px 24px` (`0.75rem 1.5rem`) padding, `16px`/`1rem` label, min touch height `44px` (default control height `48px`), label weight `600`. **Engineering default for the primary fill is `--is-gold-600`** (white label reaches ~4.8:1, full AA for normal text); `--is-gold-500` is permitted only where labels are large/bold (≥18.66px bold or ≥24px). This reconciles the drafts: one robust default, no guessing per component.

| Variant | Rest | Hover | Active / Pressed | Disabled |
|---|---|---|---|---|
| **Primary** (solid gold) | bg `--is-gold-600`, text `--is-white` | bg `--is-gold-700`, `--elev-2`, `translateY(-1px)` | bg `--is-gold-800`, `translateY(0)` + inner shadow | bg `--is-border-strong`, text `--is-ink-300`, no elevation |
| **Secondary** (ghost/outline) | transparent, `1.5px` border `--is-gold-600`, text `--is-gold-700` | bg `--is-gold-100`, border `--is-gold-700` | bg `--is-gold-200` | border `--is-border-strong`, text `--is-ink-300` |
| **Tertiary** (text link) | text `--is-gold-700`, trailing arrow `→` | text `--is-gold-600`, underline-wipe in, arrow `+4px` | text `--is-gold-800` | text `--is-ink-300` |
| **Primary on dark** | bg `--is-gold-400`, text `--is-ink-900` | bg `--is-gold-300` | bg `--is-gold-500` | `0.5` opacity |

Sizes: `sm` 40px · `md` 48px (default) · `lg` 56px (hero). The primary is the **only solid-gold fill on the page** — ideally one per section.

### WCAG AA contrast guidance

Target **4.5:1** for normal text, **3:1** for large text (≥24px, or ≥18.66px bold) and for UI component / graphical boundaries. Values are approximate vs. the stated background and must be re-verified by engineering with a contrast checker before release.

| Foreground | Background | Ratio | Verdict |
|---|---|---|---|
| `--is-ink-900` `#1A1714` | `--is-white` | ~16.8:1 | Pass (all text) |
| `--is-ink-700` `#3A352E` | `--is-white` | ~11.4:1 | Pass (all text) |
| `--is-ink-700` `#3A352E` | `--is-canvas` `#FCFBF8` | ~11.1:1 | Pass (all text) |
| `--is-ink-500` `#6B645A` | `--is-white` | ~5.0:1 | Pass (normal text) |
| `--is-ink-500` `#6B645A` | `--is-surface-alt` `#F7F4ED` | ~4.6:1 | Pass (normal text, borderline) |
| `--is-gold-700` `#7A5512` | `--is-white` | ~5.9:1 | Pass (normal text) — **the text-safe gold** |
| `--is-gold-700` `#7A5512` | `--is-gold-50` `#FBF6EC` | ~5.4:1 | Pass (normal text) |
| `--is-gold-800` `#5C3F0C` | `--is-gold-100` `#F6ECD6` | ~7.6:1 | Pass (all text) — text on champagne |
| `--is-gold-600` `#9A6E1E` | `--is-white` | ~4.1:1 | **Fail normal / Pass large.** Large/bold text or hover only; not body copy |
| `--is-gold-500` `#B8862B` | `--is-white` | ~3.3:1 | **Fail normal text.** OK for large display numerals, icons, borders, UI graphics (≥3:1) only |
| `--is-gold-400` `#C9A24E` | `--is-white` | ~2.3:1 | **Fail all text.** Decorative / fills / focus-ring only — never text |
| `--is-white` | `--is-gold-600` `#9A6E1E` | ~4.8:1 | Pass (normal text) — robust primary button fill |
| `--is-white` | `--is-gold-500` `#B8862B` | ~3.3:1 | Large/bold UI label only; prefer `--is-gold-600` for normal-weight labels |
| `--is-dark-text` `#FFFFFF` | `--is-dark-bg` `#1A1714` | ~16.8:1 | Pass (all text) |
| `--is-dark-accent` `#DCC07A` | `--is-dark-bg` `#1A1714` | ~8.9:1 | Pass (all text) — gold links/accents on dark |
| `--is-dark-text-muted` `#C9C2B4` | `--is-dark-bg` `#1A1714` | ~9.7:1 | Pass (all text) |

**Rules of thumb for engineers:**

- **Gold text on white:** only `--is-gold-700` or darker. Never set `--is-gold-500`/`-400` as text on white/light.
- **Gold as fill or graphic** (button bg, icon, stat numeral ≥24px, divider, border): `--is-gold-500` is fine (≥3:1 non-text/large threshold); pair fills with white or `--is-ink-900` labels per the button table.
- **Gold on dark:** brighten to `--is-gold-300`/`-400`; do not use `--is-gold-500/600/700` as text on `--is-dark-bg`.
- **Eyebrows/labels in gold:** `--is-gold-700` on light, `--is-gold-300` on dark.
- **Focus rings:** `--is-gold-400` at `2px` with `2px` offset is acceptable as a UI boundary; add a `1px` `--is-ink-900` inner outline on critical controls for guaranteed visibility.
- **Semantic colors** (`success`/`error`/`info`) pass AA for normal text on white; their `-bg` tints are background-only and must carry `--is-ink-700` or darker text.

### Implementation snippet (CSS custom properties)

```css
:root {
  /* Gold ramp */
  --is-gold-50:  #FBF6EC;
  --is-gold-100: #F6ECD6;
  --is-gold-200: #EBD9AE;
  --is-gold-300: #DCC07A;
  --is-gold-400: #C9A24E;
  --is-gold-500: #B8862B; /* primary brand gold */
  --is-gold-600: #9A6E1E; /* hover / robust primary button fill */
  --is-gold-700: #7A5512; /* text-safe gold */
  --is-gold-800: #5C3F0C;

  /* Surfaces & neutrals */
  --is-white:         #FFFFFF;
  --is-canvas:        #FCFBF8;
  --is-surface-alt:   #F7F4ED;
  --is-ink-900:       #1A1714;
  --is-ink-700:       #3A352E;
  --is-ink-500:       #6B645A;
  --is-ink-300:       #A8A092;
  --is-border:        #E5DFD3;
  --is-border-strong: #CFC7B6;

  /* Semantic */
  --is-success: #2E7D52; --is-success-bg: #E6F2EA;
  --is-error:   #C0392B; --is-error-bg:   #FBEAE7;
  --is-warning: #B8862B; --is-warning-bg: #FBF1DC;
  --is-info:    #2D6CA2; --is-info-bg:    #E7F0F7;
  --is-focus:   #C9A24E;

  /* Dark surfaces (hero / footer) */
  --is-dark-bg:         #1A1714;
  --is-dark-surface:    #26221C;
  --is-dark-text:       #FFFFFF;
  --is-dark-text-muted: #C9C2B4;
  --is-dark-border:     #3A352E;
  --is-dark-accent:     #DCC07A;

  /* Semantic aliases */
  --is-bg:                var(--is-canvas);
  --is-text:              var(--is-ink-700);
  --is-heading:           var(--is-ink-900);
  --is-link:              var(--is-gold-700);
  --is-link-hover:        var(--is-gold-600);
  --is-btn-primary:       var(--is-gold-600); /* robust default; -500 only with large/bold labels */
  --is-btn-primary-hover: var(--is-gold-700);
  --is-accent:            var(--is-gold-500);
}
```

---

## 3. Typography

A single humanist sans carries UI and body copy while a warmer editorial serif gives headlines presence — calm, trustworthy, modern-healthcare register. The pairing is deliberately restrained: high legibility, generous body leading, tight tracking on large headings, and gold reserved as an accent color, never the default text color.

### Font families

| Role | Family | Source | Weights | Fallback stack |
|---|---|---|---|---|
| Display / headings | **Fraunces** (opsz variable, "Soft" optical set) | Google Fonts / self-hosted (SIL OFL) | 400, 500, 600, 700 | `Fraunces, "Iowan Old Style", "Palatino Linotype", Georgia, serif` |
| UI / body | **Inter** (variable) | Google Fonts / self-hosted (SIL OFL) | 400, 500, 600, 700 | `Inter, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |
| Numeric / data (tabular) | **Inter** with `font-feature-settings: "tnum" 1` | — | 500, 600 | inherits UI stack |

- **Inter** is the non-negotiable workhorse: neutral, humanist, exhaustive weight range, excellent at small sizes, with tabular figures for stat bands and billing tables.
- **Fraunces** supplies the warm, slightly old-style serif character the brief calls for — premium and editorial. Use it **only at H2 and above** (it degrades at small sizes); H3 and below switch to Inter for density and legibility.
- **All-sans alternative** (if Fraunces' load cost or tone-fit is rejected in design review): **Sora** or **Plus Jakarta Sans** for display, Inter for everything else.
- **Do not** introduce a third family. Two families is the ceiling.

### Type scale

Base size **16px = 1rem**; a ~1.2 (minor-third, tightened at the top) modular progression. Ship `rem`; reserve `px` for borders/hairlines.

| Token | Element / use | Font | px / rem | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|---|
| `--fs-display` | Hero H1 (homepage, campaign) | Fraunces | 60 / 3.75rem | 600 | 1.05 | -0.02em |
| `--fs-h1` | Page H1 (interior pages) | Fraunces | 44 / 2.75rem | 600 | 1.1 | -0.015em |
| `--fs-h2` | Section headers | Fraunces | 34 / 2.125rem | 600 | 1.15 | -0.01em |
| `--fs-h3` | Card titles, sub-sections | Inter | 24 / 1.5rem | 600 | 1.25 | -0.005em |
| `--fs-h4` | Minor headings, feature titles | Inter | 20 / 1.25rem | 600 | 1.3 | 0 |
| `--fs-h5` | Eyebrow-adjacent headings, list-group titles | Inter | 18 / 1.125rem | 600 | 1.4 | 0 |
| `--fs-h6` | Smallest heading, dense UI labels | Inter | 16 / 1rem | 600 | 1.4 | 0 |
| `--fs-body-lg` | Lead paragraph, hero subhead | Inter | 18 / 1.125rem | 400 | 1.6 | 0 |
| `--fs-body` | Default body text | Inter | 16 / 1rem | 400 | 1.6 | 0 |
| `--fs-body-sm` | Secondary / supporting text | Inter | 14 / 0.875rem | 400 | 1.55 | 0 |
| `--fs-small` | Meta, dates, read-time, tags | Inter | 13 / 0.8125rem | 500 | 1.45 | 0.005em |
| `--fs-caption` | Captions, legal, footnotes | Inter | 12 / 0.75rem | 400 | 1.4 | 0.01em |
| `--fs-eyebrow` | All-caps kicker above headings | Inter | 12 / 0.75rem | 600 | 1.3 | 0.08em |
| `--fs-button` | Button / CTA labels | Inter | 16 / 1rem | 600 | 1 | 0.01em |

Note: `--fs-display` is `60px` desktop but **clamps down on mobile** (see below). Eyebrows are `text-transform: uppercase`; buttons are Title Case.

### Responsive behavior

Fluid `clamp()` on the largest steps only (320–1280px viewport range); body and anything `--fs-body` or smaller stays fixed to keep measure and rhythm stable.

```css
:root {
  --fs-display: clamp(2.25rem, 1.4rem + 4.25vw, 3.75rem); /* 36 → 60 */
  --fs-h1:      clamp(2rem,    1.5rem + 2.5vw,  2.75rem);  /* 32 → 44 */
  --fs-h2:      clamp(1.625rem, 1.3rem + 1.6vw, 2.125rem); /* 26 → 34 */
  --fs-h3:      clamp(1.25rem,  1.1rem + 0.75vw, 1.5rem);  /* 20 → 24 */
  /* h4–h6, body and below: fixed rem, no fluid scaling */
}
```

### Color & contrast rules (typography)

- **Body default** `--is-ink-700` on white/`--is-canvas` (~11:1, AAA). **Secondary** `--is-ink-500` (~5:1, AA).
- **Gold is an accent, not a text color.** Brand gold (`--is-gold-500`) on white is ~3.3:1 — passes for large text / UI/icons only, **never** body copy. Never set `--fs-body`, `--fs-body-sm`, `--fs-small`, or `--fs-caption` in gold. Where gold text is wanted, use `--is-gold-700`.
- **Headings** stay `--is-ink-900`. Reserve gold for at most a single accent word, and only at H2+ where size lifts contrast.
- **On dark / footer:** body `--is-dark-text` (`#FFFFFF`), secondary `--is-dark-text-muted` (`#C9C2B4`), gold accents lighten to `--is-dark-accent` (`#DCC07A`) to hold ≥4.5:1.

### Usage rules

1. **One `<h1>` per page**, mapped to `--fs-h1` (or `--fs-display` on the homepage hero). Never skip heading levels.
2. **Decouple semantics from size.** Utility classes (`.text-display`, `.text-h2`, …) let a visually large lead remain an `<h2>` in the DOM — critical for SEO.
3. **Fraunces for headings only (H2+).** Never set body, buttons, labels, or anything below 18px in the serif.
4. **Tabular figures for all data:** stat bands, billing tables, aligned numerics use `font-feature-settings: "tnum" 1; font-variant-numeric: tabular-nums;`.
5. **Line length:** cap body copy at **65ch** (`--measure-text`) so it never runs edge-to-edge on wide media-beside-text layouts.
6. **Tracking scales inversely with size** (negative on display/headings, 0 on body, positive on small/caps) — baked into the scale; do not re-tune per component.
7. **Buttons are Title Case; eyebrows are UPPERCASE.** Eyebrows are the one place gold text is sanctioned.
8. **Performance:** self-host both as variable woff2, `font-display: swap`, subset to Latin, define a `size-adjust` metrics-matched fallback to kill swap CLS. Preload the two most critical files (Inter 400, Fraunces 600). Target ≤ 2 families / ≤ 4 woff2 requests.

```css
:root {
  --font-display: "Fraunces", "Iowan Old Style", "Palatino Linotype", Georgia, serif;
  --font-sans: "Inter", -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  /* weights */
  --fw-regular: 400; --fw-medium: 500; --fw-semibold: 600; --fw-bold: 700;

  /* line-heights (unitless) */
  --lh-tight: 1.1; --lh-snug: 1.25; --lh-normal: 1.4; --lh-relaxed: 1.6;
}
```

---

## 4. Layout & spacing

The spatial system is inspired by athenahealth's airy, whitespace-heavy, vertically-stacked rhythm, retuned for a gold-on-white premium clinical brand. All tokens assume a `16px` root.

### Design principles

- **Whitespace is the luxury signal.** Premium feel comes from breathing room and a disciplined rhythm, not decoration. Err toward more vertical space than athenahealth.
- **One canvas, gold accents.** The page is predominantly white/near-white; color and elevation lead the eye through the patient journey.
- **8px base grid.** Every margin, padding, and gap resolves to a multiple of `8px`, with a single `4px` half-step for fine type/icon adjustments.
- **Single content measure.** One `--container-max` governs reading width sitewide so heading, body, and media columns stay visually anchored.

### Breakpoints

Mobile-first, min-width; styles cascade upward.

| Token | Min width | Target | Notes |
|---|---|---|---|
| `--bp-sm` | `480px` | Large phones | Minor type bumps, 2-up cards begin |
| `--bp-md` | `768px` | Tablet / portrait | Grid widens to 8 cols, nav still collapsible |
| `--bp-lg` | `1024px` | Small laptop | Full 12-col grid, mega-menu nav, media-beside-text |
| `--bp-xl` | `1280px` | Desktop | Container reaches max, full gutters |
| `--bp-2xl` | `1536px` | Large desktop | Container caps; side margins grow only |

```css
--bp-sm: 480px; --bp-md: 768px; --bp-lg: 1024px; --bp-xl: 1280px; --bp-2xl: 1536px;
```

### Container & content width

- `--container-max: 1280px` — outer content frame; above `--bp-2xl` it stays pinned and gutters absorb extra width.
- `--container-narrow: 768px` — long-form prose measure (articles, legal, FAQ body).
- `--measure-text: 65ch` — hard cap on paragraph width inside any section.

```css
.container         { width: 100%; max-width: var(--container-max); margin-inline: auto; padding-inline: var(--container-pad); }
.container--narrow { max-width: var(--container-narrow); }
```

> Note on max width: the drafts proposed `1200px` and `1280px`. **`1280px` is canonical** here (`--container-max`); the narrow prose measure is `768px`.

### Container (horizontal) padding

| Breakpoint | `--container-pad` | Rationale |
|---|---|---|
| xs (mobile) | `20px` | Comfortable thumb margin |
| md (tablet) | `32px` | More air as width grows |
| lg+ (desktop) | `48px` | Wide, premium side margins |

```css
:root                      { --container-pad: 20px; }
@media (min-width: 768px)  { :root { --container-pad: 32px; } }
@media (min-width: 1024px) { :root { --container-pad: 48px; } }
```

### Responsive grid

12-column desktop foundation stepping down to 8 then 4. Implement with CSS Grid.

| Breakpoint | Columns | Gutter | Typical use |
|---|---|---|---|
| xs (mobile) | 4 | `16px` | Everything stacks; cards full-width |
| md (tablet) | 8 | `24px` | 2-up / 3-up card grids, journey steps side-by-side |
| lg (desktop) | 12 | `32px` | Media-beside-text (7/5 or 6/6), 3–4-up card rows |
| xl+ | 12 | `32px` | Same, container simply wider |

```css
:root                      { --grid-cols: 4;  --grid-gutter: 16px; }
@media (min-width: 768px)  { :root { --grid-cols: 8;  --grid-gutter: 24px; } }
@media (min-width: 1024px) { :root { --grid-cols: 12; --grid-gutter: 32px; } }
```

**Common spans (lg, 12-col):** media-beside-text text `span 6` + media `span 6` (or asymmetric 5/7); three-step journey cards each `span 4`; four-up value/stat each `span 3`; centered CTA/prose `col-start 3 / span 8`.

### Spacing scale (8px base, single 4px half-step)

| Token | px | rem | Primary use |
|---|---|---|---|
| `--space-3xs` | `4px` | `0.25rem` | Icon-to-label gap, fine nudges (only 4px step) |
| `--space-2xs` | `8px` | `0.5rem` | Tight inner gaps, chip padding, eyebrow→heading |
| `--space-xs` | `12px` | `0.75rem` | Button vertical padding, small stack gaps |
| `--space-sm` | `16px` | `1rem` | Default paragraph spacing, card inner gap, heading→body |
| `--space-md` | `24px` | `1.5rem` | Card padding, grid gutter (tablet) |
| `--space-lg` | `32px` | `2rem` | Card padding (desktop), grid gutter, body→CTA |
| `--space-xl` | `48px` | `3rem` | Sub-section spacing, heading-block→grid |
| `--space-2xl` | `64px` | `4rem` | Section padding (mobile) |
| `--space-3xl` | `96px` | `6rem` | Section padding (desktop) |
| `--space-4xl` | `128px` | `8rem` | Hero / major band vertical padding (desktop) |
| `--space-5xl` | `160px` | `10rem` | Reserved oversized hero / full-bleed breaks |

```css
--space-3xs: 0.25rem; --space-2xs: 0.5rem; --space-xs: 0.75rem;
--space-sm: 1rem;     --space-md: 1.5rem;  --space-lg: 2rem;
--space-xl: 3rem;     --space-2xl: 4rem;   --space-3xl: 6rem;
--space-4xl: 8rem;    --space-5xl: 10rem;
```

### Section vertical rhythm

Sections are the primary structural unit; vertical padding is intentionally more generous than a typical SaaS site.

| Context | Mobile | Tablet | Desktop | Token |
|---|---|---|---|---|
| Standard section | `64px` | `80px` | `96px` | `--section-pad-y` |
| Hero (first viewport) | `80px` | `112px` | `128px` | `--hero-pad-y` |
| Compact band (CTA / logo / stat) | `48px` | `56px` | `64px` | `--band-pad-y` |

```css
:root                      { --section-pad-y: 4rem; --hero-pad-y: 5rem; --band-pad-y: 3rem; }
@media (min-width: 768px)  { :root { --section-pad-y: 5rem; --hero-pad-y: 7rem; --band-pad-y: 3.5rem; } }
@media (min-width: 1024px) { :root { --section-pad-y: 6rem; --hero-pad-y: 8rem; --band-pad-y: 4rem; } }
```

**Intra-section rhythm:** eyebrow→heading `--space-2xs` (8px); heading→body `--space-sm` (16px); body→CTA `--space-lg` (32px); header block→grid/media `--space-xl`/`--space-2xl` (48–64px).

**Background alternation:** alternate `--is-white` with `--is-surface-alt` (warm off-white). Reserve `--is-gold-50` for at most one or two emphasis bands per page (credibility/award band, final CTA). Never stack two tinted sections adjacently.

### Border-radius scale

| Token | px | Use |
|---|---|---|
| `--radius-xs` | `4px` | Tags, chips, small badges, inline code |
| `--radius-sm` | `8px` | Buttons, inputs, small controls |
| `--radius-md` | `12px` | Cards, media frames, dropdown panels (default) |
| `--radius-lg` | `20px` | Large feature cards, hero media container, modals |
| `--radius-xl` | `28px` | Oversized promo / journey-step tiles |
| `--radius-full` | `9999px` | Pills, avatars, icon circles, journey-step number badges |

```css
--radius-xs: 4px;  --radius-sm: 8px;  --radius-md: 12px;
--radius-lg: 20px; --radius-xl: 28px; --radius-full: 9999px;
```

> Reconciliation: component drafts referenced `--r-sm/-md/-lg`. Map them to this canonical scale — buttons/inputs use `--radius-sm` (8px), cards use `--radius-md`/`--radius-lg`.

### Shadow / elevation scale

Soft, warm-tinted (a desaturated deep-gold/brown, never pure black) so shadows sit naturally on a champagne-white canvas. Keep it restrained.

```css
/* Warm-neutral shadow base */
--shadow-color: 30 25% 20%;   /* HSL channels for layered alpha */

--elev-0: none;
--elev-1: 0 1px 2px   hsl(var(--shadow-color) / 0.06),
          0 1px 1px   hsl(var(--shadow-color) / 0.04);   /* inputs, hairline */
--elev-2: 0 2px 8px   hsl(var(--shadow-color) / 0.08),
          0 1px 2px   hsl(var(--shadow-color) / 0.06);   /* resting cards (default) */
--elev-3: 0 8px 24px  hsl(var(--shadow-color) / 0.10),
          0 2px 6px   hsl(var(--shadow-color) / 0.06);   /* card hover, dropdowns */
--elev-4: 0 16px 48px hsl(var(--shadow-color) / 0.14),
          0 4px 12px  hsl(var(--shadow-color) / 0.08);   /* modals, mega-menu, scrolled sticky header */
```

| Token | Applied to |
|---|---|
| `--elev-0` | Sits-on-surface tiles, alternating-band content |
| `--elev-1` | Inputs, resting tags, dividers-as-shadow |
| `--elev-2` | Journey/blog/stat cards (default resting card) |
| `--elev-3` | Card hover (`translateY(-2px → -4px)`), dropdowns, popovers |
| `--elev-4` | Modals, mega-menu panels, scrolled sticky header |

**Hover convention:** interactive cards lift `translateY(-2px to -4px)` and step `--elev-2 → --elev-3` over `150–200ms ease-out`. The hover shadow is gold-tinted; to keep animation compositor-only, render it on a `::after` pseudo-element and animate its opacity (see Motion §6), not `box-shadow` directly.

### The recurring "section" pattern

The workhorse is the **media-beside-text section**, alternating media side down the page to carry the teleconsult-first narrative.

**Anatomy (text column, top to bottom):** Eyebrow (`--fs-eyebrow`, `--is-gold-700`, e.g. `STEP 01 · TELECONSULT`) → H2 (`--fs-h2`, `--is-ink-900`) → body/subhead (`--fs-body`/`--fs-body-lg`, `--is-ink-700`, capped at `--measure-text`) → CTA (one primary + optional tertiary text link with trailing arrow). **Media column:** image/app-mockup/video in a `--radius-lg` container with `--elev-2`; aspect ratios `16:9` (video), `4:3`/`3:2` (photography), `~4:5` (portrait/app-mockup).

**Alternation rule:** first media-beside-text section places media on the **right** (text leads left, natural reading order); each subsequent section of this type flips via an `is-reversed` modifier. On mobile, every section collapses to single column with **text above media**.

```html
<section class="section section--media is-reversed" aria-labelledby="step-1-h2">
  <div class="container">
    <div class="section__grid">
      <div class="section__text">
        <p class="eyebrow">Step 01 · Teleconsult</p>
        <h2 id="step-1-h2" class="section__heading">Start with a video visit, on your schedule</h2>
        <p class="section__body">…</p>
        <div class="section__cta">
          <a class="btn btn--primary">Book a teleconsult</a>
          <a class="link link--arrow">How it works →</a>
        </div>
      </div>
      <figure class="section__media"><img src="…" alt="…"></figure>
    </div>
  </div>
</section>
```

```css
.section        { padding-block: var(--section-pad-y); }
.section__grid  { display: grid; gap: var(--grid-gutter);
                  grid-template-columns: repeat(var(--grid-cols), minmax(0,1fr)); align-items: center; }
.section__text  { grid-column: span 4; }
.section__media { grid-column: span 4; }
@media (min-width: 1024px) {
  .section__text  { grid-column: span 6; }
  .section__media { grid-column: span 6; }
  .is-reversed .section__text  { order: 2; }
  .is-reversed .section__media { order: 1; }
}
```

**Section variants (same skeleton):** **Hero** (H1 replaces H2, `--hero-pad-y`, full `--radius-lg` media, single primary CTA, gold keyline motif); **Three-step journey band** (the signature block — eyebrow + centered heading + 3-up numbered step cards with gold `--radius-full` number badges and a connecting hairline); **Card grid** (insights/services/specialties, 2–4-up); **Stat / metric band** (compact `--band-pad-y`, large `600` numerals); **Credibility / award band** (the single most gold-forward band); **CTA band** (compact, centered prose, one primary gold button, closes the page above the footer).

---

## 5. Components

The reusable component set. All tokens, sizes, and names below are the canonical engineering contract, consuming **only** the `--is-` color tokens and the layout/type tokens above — no hard-coded hex in component CSS, so the palette stays centrally tunable.

### Shared primitives & conventions

- **Global focus ring:** every interactive element shows a visible `:focus-visible` ring — `outline: 2px solid var(--is-focus); outline-offset: 2px;` (lightens to `--is-gold-300` on dark surfaces for contrast; add a `1px --is-ink-900` inner outline on critical controls). Color is never the sole state signal — pair with icon/text/underline.
- **Motion:** all transitions consume the motion tokens (§6); every scroll/auto animation is gated behind `prefers-reduced-motion: reduce`.
- **Radius/elevation/spacing:** consume the §4 scales (`--radius-*`, `--elev-*`, `--space-*`).

### 1. `Button` (shared primitive)

`--font-sans` 600, 16px label, padding `14px 28px`, `--radius-sm`, min-height 48px (`sm` 40 / `md` 48 / `lg` 56), inline-flex with optional 20px leading/trailing icon, 8px gap. Variants and states per the **Buttons** table in §2: `primary` (solid `--is-gold-600`, the only solid-gold fill on the page — one per section ideally), `secondary` (ghost, `1.5px --is-gold-600` border), `tertiary`/link (no border, `--is-gold-700`, trailing arrow `→` that translates `+4px` and underline-wipes on hover), `on-dark` (bg `--is-gold-400`, `--is-ink-900` text, for scrim/video heroes). `:disabled` → `--is-border-strong` fill, `--is-ink-300` text, `not-allowed`, no elevation. `[aria-busy="true"]` shows an inline spinner and dims label to 70%.

### 2. `AnnouncementBar`

Full-width strip above the header, `--is-gold-100` champagne fill, `--is-ink-900` text at `--fs-small`. Centered single line: short message + inline text link (e.g. "Now offering same-week teleconsults — Book yours"). Optional trailing dismiss `×` (44×44px hit area); collapses on dismiss (persisted via `localStorage` key `is-announce-dismissed`, then `aria-hidden` and removed from flow). **Variants:** `default`; `emphasis` (`--is-gold-500` left border 3px + bold lead word); `alert` (`--is-error` text on white). Link `:hover` underline + `--is-gold-600`.

### 3. `SiteHeader` + `MegaMenu`

Sticky (`position: sticky; top: 0; z-index: 1000`), `--is-white` fill, bottom `1px solid var(--is-border)`, height 72px (64px / `--nav-height` mobile 56px) and condenses to 64px + `--elev-4` when `.is-scrolled` (after `64px` scroll). Grid: logo (left) | primary nav (center) | utility cluster (right). Utility: "Patient Login" text link + **"Book a Teleconsult"** primary button (the one persistent gold-filled CTA). Primary nav: **How It Works** (direct link — it's the story), **Services ▾** (mega-menu), **For Patients ▾** (mega-menu), **About**, **Resources**.

**MegaMenu panel:** full-width white drop panel, `--elev-4`, top border `2px solid var(--is-gold-500)`, multi-column grid (2–4 cols), 32px padding, `--container-max` centered. Column = `--fs-eyebrow` group label + links (title `--fs-h4` + one-line `--fs-small` description). Optional right-rail promo card (`--is-gold-100`, image + heading + arrow link).

**Variants:** `solid` (default); `transparent` (over dark hero media: white text/logo, transparent fill until `.is-scrolled` swaps to solid). Mobile (`< 1024px`): hamburger drawer (full-height right sheet, accordion nav groups, **"Book a Teleconsult" persistent in the collapsed bar — never buried in the drawer**).

**States:** nav item `:hover`/`:focus-visible` → label `--is-gold-700` + 2px `--is-gold-600` underline grows from center (`scaleX`); open item `aria-expanded="true"`, chevron rotates 180°, panel fades+slides 8px. Mega link `:hover` → `--is-gold-700` + 4px left indent. Focus trapped in open panel/drawer; `Esc` closes and returns focus to trigger.

### 4. `Hero`

Two-zone at `--container-max`: left text (~52%) + right media (~48%). Text stack: eyebrow ("Teleconsult-first care") → H1 `--font-display` `--fs-display` `--is-ink-900` → subcopy `--fs-body-lg` `--is-ink-700` (max 52ch) → CTA row (primary "Book a Teleconsult" + secondary ghost "How it works") → optional trust microline ("No referral needed · Same-week availability"). Media: 16:9 `--radius-lg` image or `<video>` with poster + centered play affordance, `--elev-3`.

**Variants:** `split-media` (default, light canvas — preferred per brand); `video-bg` (full-bleed `<video>`, `rgba(26,23,20,.55)` scrim, centered white text, header runs `transparent`); `text-only` (interior pages, `--is-gold-100` band); `centered` (single-column, narrow). Play button `:hover` scale 1.06 + `--is-gold-400` ring; respects `prefers-reduced-motion` (video pauses, shows poster). **LCP image uses `fetchpriority="high"`, eager load + preload; everything else lazy.**

### 5. `LogoStrip` / `TrustBar`

Centered eyebrow caption above a single row of 5–7 partner/accreditation/insurer logos, grayscale-warm (`filter: grayscale(1) opacity(.7)`), max-height 40px each, on `--is-canvas` or white. Accreditation badges may render full-color as exceptions. **Variants:** `static-grid` (default); `marquee` (auto-scroll on overflow, paused on hover/focus and under reduced-motion); `with-stat`. Logo `:hover`/`:focus-visible` → full color over `--motion-duration-base`.

### 6. `StatBand`

Full-width band, `--is-gold-50`/`--is-gold-100` (light) or `--is-ink-900` (dark). 3–4-column grid of stat cells: optional 32px line icon (`--is-gold-500`) → big number `--font-display` `clamp(2.5rem,4vw,3.25rem)` 600 (`--is-ink-900` light / `--is-gold-400` dark, **tabular figures**) → `--fs-small` uppercase label + optional footnote superscript. Thin `--is-border` vertical dividers between cells (hidden when stacked). **Variants:** `light`, `dark`, `inline-2up`. Optional `countUp` on scroll-into-view (respects reduced-motion — renders final value immediately). Footnote citations support E-E-A-T.

### 7. `FeatureCard` / `BenefitCard`

White card, `--radius-lg`, `1px solid var(--is-border)`, `--elev-2`, padding 24px. Top zone: 48px line icon `--is-gold-500` (or 16:9 image-top) → H3 `--fs-h3` → body `--fs-body` `--is-ink-700` → tertiary "Learn more →" link. Used in 2–4-up grids. **Variants:** `icon`, `image-top`, `compact`, `highlighted` (`--is-gold-50` fill + `--is-gold-500` 1px border). Whole-card-clickable wraps content in one anchor with a stretched-link pseudo-element. **States:** `:hover`/`:focus-within` → `translateY(-4px)`, `--elev-3`, border → `--is-gold-300`, icon → `--is-gold-600`, arrow `+4px`; `:focus-visible` ring on the card anchor. "Coming soon" → `opacity .6`, no lift, "Soon" pill.

### 8. `FeatureRow` (alternating feature rows)

Two-column 50/50 row: media panel (`--radius-lg`, `--elev-2`) + text panel (eyebrow → H2 `--fs-h2` → body `--fs-body-lg` → optional 3-bullet checklist with `--is-gold-500` check icons → CTA). `media-right` default; alternate via `.is-reversed`. On mobile both stack, media first. Images lazy-load with `--is-gold-100` blur-up placeholder; optional fade+rise 12px on scroll-into-view (disabled under reduced-motion).

### 9. `JourneyTimeline` — signature component

The site's central narrative. Eyebrow ("How inteliSentry works") + H2, then a 3-node stepper connected by a gold progress line (`2px`, `--is-gold-300`, gradient fill animating left→right on scroll). Each node: numbered gold disc (40px circle, `--is-gold-600` fill, white numeral, `--font-display`) + step icon → H3 step title → `--fs-body` description → optional micro-link.

- **Step 1 — Book a teleconsult** (calendar icon)
- **Step 2 — Online consultation** (video icon)
- **Step 3 — In-clinic follow-up / procedure** (clinic icon), with a conditional "if needed" pill.

A trailing primary `Button` ("Start at step one — Book a teleconsult") anchors the section. **Variants:** `horizontal` (desktop, 3-up + connecting line), `vertical` (`< 768px`, line top→bottom on the left), `compact-inline`, `with-media` (each step paired with a screenshot; the "if needed" branch renders as a dashed sub-branch). **Semantics & states:** marked up as an ordered list (`<ol>` of `<li>`); node `:hover`/`:focus-within` → disc scales 1.05, `--elev-3`, title → `--is-gold-700`; in-view step gets a `--is-gold-200` halo and `aria-current="step"`; progress fill is scroll-driven (IntersectionObserver), rendered fully filled under reduced-motion. Let the three steps reveal left-to-right to literally animate the journey order.

### 10. `ServicesGrid`

Responsive grid (`repeat(auto-fit, minmax(280px, 1fr))`, 24px gap) of service cards (Primary Care, Dermatology, Minor Procedures, Chronic Care, Mental Health, Diagnostics): 40px specialty line icon `--is-gold-500` → H3 service name → 1–2-line summary → eligibility pill → stretched "View service →" link. **Eligibility pills reinforce the model:** `teleconsult` (`--is-gold-200` bg, `--is-gold-800` text) vs `in-clinic` (`--is-surface-alt` bg, `--is-ink-700` text). **Variants:** `3-up`/`4-up`, `with-filter` (pill toggles by category/eligibility), `featured-first` (first cell spans 2 cols). Filter pills: default outline; `:hover` champagne fill; selected = `--is-gold-600` fill + white text + `aria-pressed="true"`. Card states inherit `FeatureCard`.

### 11. `Testimonial` / `QuoteCard`

Large opening quotation glyph in `--is-gold-400`, italic quote `--fs-body-lg` `--is-ink-700`, then attribution row: 48px circular avatar + name `--fs-h4` + role/condition `--fs-small` `--is-ink-500`. Optional 5-dot/star rating in `--is-gold-500`. Privacy-safe ("Patient, age 42"). **Variants:** `single` (centered band on `--is-gold-50`), `carousel` (dots + prev/next arrows), `grid-3up`, `with-video`. Carousel dots: default `--is-border`; active `--is-gold-600`; `:hover` `--is-gold-400`. Arrows: 44px circular, `1px solid var(--is-border)`, `:hover` border+icon `--is-gold-600`, `:disabled` opacity .4 at track ends. Auto-advance pauses on hover/focus and under reduced-motion; `aria-live="polite"` announces slide changes; swipe-enabled on touch. Emits `Review` schema only where genuine.

### 12. `FaqAccordion`

Stacked items (semantic `<dl>` or button-controlled regions): full-width trigger (question `--fs-h4` `--is-ink-900`, left) + `+`/`−` or chevron (`--is-gold-600`, right), `1px` bottom `--is-border`. Expanded panel: `--fs-body` `--is-ink-700`, 16px top padding, smooth height transition (animate `grid-template-rows: 0fr → 1fr`). **Variants:** `single-open` vs `multi-open`; `two-column` (list + "Still have questions?" promo); `bordered-card`. Trigger `:hover` → question `--is-gold-700`, bg `--is-gold-50`. Triggers are real `<button>`s with `aria-controls`/`aria-expanded`; full keyboard support. Eligible for `FAQPage` JSON-LD where the Q&A is genuinely visible.

### 13. `ResourceCard` / `BlogCard`

White card, `--radius-lg`, `--elev-1`, image-top (16:9, `--radius-lg` top corners, lazy-loaded) → 20px body: category tag pill (`--fs-eyebrow`, `--is-gold-200` bg / `--is-gold-800` text) → H3 `--fs-h3` (display font, 2-line clamp) → `--fs-body` excerpt (3-line clamp) → meta row `--fs-small` `--is-ink-500` (date · read-time). Whole card is a stretched link. **Variants:** `standard`, `featured` (image-left 60/40, bigger H3), `horizontal` (thumbnail-left). `:hover`/`:focus-within` → `translateY(-3px)`, `--elev-3`, image `scale(1.03)` (clipped by `overflow:hidden`), title → `--is-gold-700`. Reduced-motion disables zoom and lift. Carries `Article`/`BlogPosting` microdata.

### 14. `CtaBand` / `BookTeleconsultBand`

Full-width conversion band, default `--is-gold-50`/`--is-gold-100` champagne (or `--is-ink-900` dark). Centered or two-column: H2 `--fs-h2` ("Ready to start? Your first step is a teleconsult.") + `--fs-body-lg` support + primary `Button` ("Book a Teleconsult") + secondary link ("Call us · [phone]"). May embed a slim inline lead form (single email/phone + submit). Optional reassurance microcopy. **Variants:** `simple`, `inline-form`, `split`, `dark` (`on-dark` button + gold accent rule). Recurs ~2–3× per long page. Inline form: success swaps to `--is-success` confirmation row; error shows `--is-error` helper text; `aria-live` announces result; honeypot + disabled-on-submit (`aria-busy`).

### 15. `ContactForm` + `Input` primitives

Card or two-column (form + clinic contact/map). Fields stack: `Label` (`--fs-small` 600, `--is-ink-700`) above control. `Input`/`Textarea`/`Select`: white fill, `1.5px solid var(--is-border-strong)`, `--radius-md`, 12–14px padding, `--fs-body`, min-height 48px. Field set: Name, Email, Phone, Reason for visit (`Select`), Preferred date (date picker), Message (`Textarea`), consent `Checkbox` (privacy/HIPAA notice), submit primary `Button` ("Request my teleconsult"). Required marked `*` + `aria-required`. **Variants:** `full`, `inline`, `booking` (adds service `Select` + date/time picker), `split-with-info`.

**Per-control states:** default border `--is-border-strong`; `:hover` border `--is-ink-500`; `:focus-visible` border `--is-gold-600` + focus ring, no default outline; valid optional `--is-success` check; `:invalid`/error border `--is-error` + `--fs-small` error text with alert icon + `aria-describedby` + `aria-invalid="true"`; `:disabled` `--is-surface-alt` fill, `--is-ink-300` text, `not-allowed`; placeholder `--is-ink-500`. Checkbox/radio: custom 20px box, checked = `--is-gold-600` fill + white check, focus ring. Errors are never color-only.

### 16. `SiteFooter`

Dark `--is-ink-900` (`--is-dark-bg`) footer, `--is-dark-text`/`--is-dark-text-muted` text. Top: 4–5 link columns (`--fs-eyebrow` `--is-dark-accent` group headings + `--fs-body` links) — **Services**, **For Patients**, **About**, **Resources**, **Patients** (Login, Pay a bill, FAQs) — plus a brand column (logo + one-line mission + "Book a Teleconsult" button + prominent phone). Mid: optional newsletter inline form + social row (40px circular, `--is-dark-surface` bg). Bottom legal bar: `--is-dark-border` top border, `--fs-small` `--is-dark-text-muted` — copyright, Privacy, Terms, Accessibility, HIPAA/PDPA Notice, "Do Not Sell/Share", Cookie Preferences. **Variants:** `full`, `slim`, `with-newsletter`. Link `:hover`/`:focus-visible` → `--is-dark-accent` + underline (focus ring lightens to `--is-gold-300` for contrast on dark); social icon `:hover` → bg `--is-gold-600`, icon white, scale 1.05. "Book a Teleconsult" uses the `on-dark` button variant. Feeds `Organization` + `MedicalClinic` schema (name, logo, geo, `openingHours`, `telephone`).

### Cross-cutting conventions (all components)

- **Accessibility (WCAG 2.2 AA).** Visible `:focus-visible` ring on every interactive element; color never the sole signal; contrast meets AA (gold-600/700 on white and white on gold-600 pass for text at the sizes used; gold-500 verified for large text/icons only). Carousels, accordions, menus, and forms carry correct ARIA roles, `aria-expanded`/`aria-controls`/`aria-current`, focus management, and `Esc`-to-close. Touch targets ≥ 44×44px.
- **SEO / semantics.** One `<h1>` per page; correct landmark/heading order (`<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`); `JourneyTimeline` is an `<ol>`, `FaqAccordion` a `<dl>`/button-region pair eligible for `FAQPage` JSON-LD, `ResourceCard` carries `Article`/`BlogPosting`, header/footer feed `Organization` + `MedicalClinic`, `Testimonial` can emit `Review`. All imagery needs descriptive `alt`; decorative gold flourishes are `aria-hidden`.
- **Theming.** Components consume the `--is-` tokens and §4 scales only — no hard-coded hex — so the gold/white palette is centrally tunable.

---

## 6. Motion

Motion is **functional, not decorative.** It guides attention along the teleconsult-first journey, reinforces the premium gold-on-white brand, and respects a clinical context where users may be anxious, distracted, or assistive-tech dependent. Every animation is short, eased, GPU-cheap. When in doubt, do less.

### Principles

- **Calm over flashy.** No parallax, scroll-jacking, or auto-advancing carousels that hijack reading. Motion confirms cause-and-effect and nothing more.
- **Transform/opacity only.** Animate only `transform` and `opacity` to stay on the compositor thread. Never animate `width`, `height`, `top`, `left`, `box-shadow` (animate a layered pseudo-element's opacity instead), or `background-color` on large surfaces.
- **Short and crisp.** Micro-interactions 120–200ms; section reveals 400–600ms. Nothing user-initiated exceeds 250ms.
- **One axis, small distance.** Reveals translate ≤24px; hovers lift ≤4px and scale ≤1.02 (image zoom capped at 1.03). Restraint reads as premium.
- **Gold is the accent of motion too.** Color/underline transitions resolve to brand gold, never bright yellow.

### Motion tokens

Motion color states reference the canonical `--is-` gold ramp (reconciled from the draft's standalone `--motion-accent` values).

```css
:root {
  /* Durations */
  --motion-duration-instant: 80ms;   /* state flips: checkbox, toggle */
  --motion-duration-fast:    140ms;  /* hover color/underline, button press */
  --motion-duration-base:    200ms;  /* dropdown, accordion, card hover lift */
  --motion-duration-slow:    320ms;  /* mega-menu panel, modal */
  --motion-duration-reveal:  520ms;  /* scroll-reveal section entrance */

  /* Easing curves */
  --motion-ease-standard:   cubic-bezier(0.4, 0.0, 0.2, 1);  /* default in/out — most UI */
  --motion-ease-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);  /* entrances */
  --motion-ease-accelerate: cubic-bezier(0.4, 0.0, 1, 1);    /* exits */
  --motion-ease-emphasized: cubic-bezier(0.2, 0.0, 0, 1);    /* reveals & mega-menu */

  /* Reveal distances + stagger */
  --motion-distance-sm: 12px;  /* cards, list items */
  --motion-distance-md: 24px;  /* section blocks */
  --motion-stagger:     70ms;

  /* Motion-resolved accent colors (alias the canonical ramp) */
  --motion-accent:       var(--is-gold-600); /* base/pressed gold */
  --motion-accent-hover: var(--is-gold-700); /* hover/darken */
  --motion-accent-soft:  var(--is-gold-300); /* champagne border warm */
}
```

Use `--motion-ease-decelerate` for anything appearing, `--motion-ease-accelerate` for anything leaving, `--motion-ease-standard` for reversible hovers/toggles. `--motion-ease-emphasized` is reserved for the two signature moments: section scroll-reveals and the nav mega-menu.

### Scroll-reveal (sections, cards, stat bands)

Sections fade up subtly on entry, driven by `IntersectionObserver` (never scroll-event listeners), toggling a single class — one paint, degrades safely.

```css
.reveal {
  opacity: 0;
  transform: translateY(var(--motion-distance-md));
  transition: opacity var(--motion-duration-reveal) var(--motion-ease-emphasized),
              transform var(--motion-duration-reveal) var(--motion-ease-emphasized);
  will-change: opacity, transform;
}
.reveal.is-visible { opacity: 1; transform: none; }
.reveal--sm        { transform: translateY(var(--motion-distance-sm)); }
.reveal[style*="--i"] { transition-delay: calc(var(--i) * var(--motion-stagger)); }
```

```js
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    entry.target.classList.add('is-visible');
    io.unobserve(entry.target);            // reveal once, then stop observing
  }
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
```

- **Trigger** ~15% visible, slightly before fully in view. **Reveal once** (`unobserve` after firing). **Stagger** grids via an `--i` index, **capped at 4 items** — beyond that, reveal the group together. The three-step journey row is the hero use case — reveal steps **left-to-right** to animate the journey order.
- **CLS safety:** elements occupy their final box from first paint (only `opacity`/`transform` change), contributing **0 to CLS.** Never gate above-the-fold hero content (H1, subhead, primary CTA) behind reveal — it renders immediately with no JS dependency.

### Hover & focus — buttons and links

```css
.btn {
  background: var(--motion-accent); color: #fff; border-radius: var(--radius-sm);
  transition: background-color var(--motion-duration-fast) var(--motion-ease-standard),
              transform var(--motion-duration-fast) var(--motion-ease-standard);
}
.btn:hover  { background-color: var(--motion-accent-hover); }
.btn:active { transform: translateY(1px); }   /* tactile press; no scale on buttons */

/* Signature inteliSentry text-link: left-to-right gold underline wipe */
.link-gold {
  background-image: linear-gradient(var(--motion-accent), var(--motion-accent));
  background-size: 0% 2px; background-position: 0 100%; background-repeat: no-repeat;
  transition: background-size var(--motion-duration-base) var(--motion-ease-standard);
}
.link-gold:hover, .link-gold:focus-visible { background-size: 100% 2px; }
```

The underline-wipe and the focus ring share the same trigger, so keyboard users get identical affordance. Focus is not optional:

```css
:focus-visible { outline: 2px solid var(--is-focus); outline-offset: 2px; border-radius: 4px; }
```

### Hover — cards

Cards lift **4px** with a warm gold-tinted shadow faded in via a `::after` opacity trick (keeps `box-shadow` off the animated path); border warms from neutral to `--motion-accent-soft`. `:focus-within` mirrors `:hover`. Any contained image may zoom to **1.03** max with `overflow: hidden` on the media wrapper.

```css
.card {
  border: 1px solid var(--is-border); border-radius: var(--radius-md); background: var(--is-white);
  transition: transform var(--motion-duration-base) var(--motion-ease-standard),
              border-color var(--motion-duration-base) var(--motion-ease-standard);
}
.card::after {
  content: ""; position: absolute; inset: 0; border-radius: inherit;
  box-shadow: var(--elev-3); opacity: 0; pointer-events: none;
  transition: opacity var(--motion-duration-base) var(--motion-ease-standard);
}
.card:hover, .card:focus-within { transform: translateY(-4px); border-color: var(--motion-accent-soft); }
.card:hover::after, .card:focus-within::after { opacity: 1; }
```

### Navigation — sticky header & mega-menu

- **Sticky header** condenses once `scrollY > 8px` (preferably via a top sentinel `IntersectionObserver`, else an `rAF`-gated scroll handler): reduces padding and fades in the gold-tinted shadow over `--motion-duration-base`.
- **Mega-menu** (second signature moment) fades + slides down 8px with `--motion-ease-emphasized` over `--motion-duration-slow` on open; exits faster (`--motion-duration-base`, `--motion-ease-accelerate`). Opens on **hover AND focus-within** (keyboard parity) with ~120ms open-intent and ~200ms close delay; click-toggled on touch. Chevron rotates 180° over `--motion-duration-fast`.

### Other patterns

- **Accordions/FAQ:** animate `grid-template-rows: 0fr → 1fr` over `--motion-duration-base`; rotate chevron in parallel. Never animate a guessed `max-height`.
- **Carousels:** slide via `transform: translateX()` over `--motion-duration-slow`. **No autoplay by default;** if required, pause on hover/focus and under reduced-motion, with working prev/next + dots.
- **Modal / booking dialog:** backdrop fades (`--motion-duration-base`); dialog scales `0.98 → 1` + fades over `--motion-duration-slow` with `--motion-ease-decelerate`; reverse with `--motion-ease-accelerate`. Trap focus; `Esc` closes; return focus to trigger.
- **Form fields:** border/label transition over `--motion-duration-fast`; validation messages fade/slide 8px, never flash.
- **Skeleton loaders:** slow opacity pulse (1.4s ease-in-out), disabled under reduced-motion.

### `prefers-reduced-motion` strategy

Reduced motion is **first-class** — critical for vestibular-disorder and migraine-prone patients. Strategy: **keep meaning, remove movement.** Content still appears and state still changes; strip translation/scale, preserve gentle opacity for continuity.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important; animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important; scroll-behavior: auto !important;
  }
  .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
  .card:hover, .card:focus-within { transform: none !important; }
  .skeleton, .carousel--autoplay { animation: none !important; }
}
```

Never trap content behind motion: the CSS above forces revealed elements visible regardless of JS, and a `<noscript>` block can also force `.reveal { opacity: 1 }`. Gate scripted animation behind `window.matchMedia('(prefers-reduced-motion: reduce)').matches` too.

### Performance budget & QA

- **Compositor-only:** every transition is `transform`/`opacity` (audit via DevTools → Rendering → Paint flashing).
- **`will-change` discipline:** only on actively animating elements; never blanket-applied.
- **No scroll-event animation:** reveals and sticky-header use `IntersectionObserver`; any unavoidable scroll handler is `rAF`-throttled and `passive: true`.
- **60fps on mid-tier mobile** (test at 4–6× CPU throttle); stagger groups capped at 4.
- **Tiny footprint:** pure CSS transitions + one `IntersectionObserver` — no animation library — keeping JS and main-thread cost minimal and CWV-friendly (no INP/CLS regressions).
- **A11y QA:** tab every interactive element (focus ring visible, mega-menu reachable, modal focus-trapped, `Esc` closes), then re-run the full journey with reduced-motion enabled and confirm all content visible and all state changes occur.

---

## 7. Information architecture & sitemap

The IA borrows athenahealth's stacked, carousel-rich, conversion-funneling marketing pattern but is re-pointed around the **teleconsult-first** story. Where athenahealth's dominant CTA is "Request a Demo" (B2B), inteliSentry's is **"Book a teleconsult"** (B2C). All nav/IA color and type references use the canonical `--is-` tokens (§2) and the type scale (§3); the persistent CTA is `--is-gold-600` fill with white label.

### Page inventory (sitemap)

Flat, shallow IA — every primary destination reachable in one click from the global nav. Clean, lowercase, trailing-slash-free canonical paths; one `<h1>` per page.

```
/                                 Home
├── /how-it-works/                How It Works (the teleconsult-first journey — flagship narrative)
├── /services/                    Services & Treatments (hub)
│   ├── /services/teleconsultation/   Online Teleconsultation
│   ├── /services/follow-up-care/     In-Clinic Follow-Up Visits
│   ├── /services/procedures/         In-Clinic Procedures
│   ├── /services/chronic-care/       Chronic & Ongoing Care
│   └── /services/{specialty-slug}/   (repeatable specialty/treatment detail template)
├── /patients/                    For Patients (hub)
│   ├── /patients/booking/            Booking & Pricing
│   ├── /patients/what-to-expect/     What to Expect (per journey stage)
│   ├── /patients/prepare/            Prepare for Your Teleconsult
│   ├── /patients/faq/                Patient FAQ
│   └── /patients/portal/             Patient Portal (external/app handoff)
├── /about/                       About (hub)
│   ├── /about/our-care-model/        Our Care Model (teleconsult-first philosophy)
│   ├── /about/clinicians/            Our Clinicians
│   └── /about/{page-slug}/           Mission, careers, etc.
├── /resources/                   Resources / Blog (content hub + filter tabs)
│   ├── /resources/{category}/        Category index
│   └── /resources/{slug}/            Article / BlogPosting detail
├── /contact/                     Contact
├── /book/                        Book a Teleconsult (conversion endpoint — booking flow)
└── Legal (footer-only)
    ├── /privacy/                 Privacy Policy
    ├── /terms/                   Terms of Use
    ├── /accessibility/           Accessibility Statement
    └── /cookie-preferences/      Cookie Preferences
```

> URL note: the page-inventory routes above are canonical. The SEO section's `<title>`/meta table uses shorthand stand-ins (`/teleconsult`, `/doctors`, `/faq`, `/insights/*`) — engineers should map those to the canonical paths here (`/services/teleconsultation/`, `/about/clinicians/`, `/patients/faq/`, `/resources/*`) and apply the redirects below.

**URL & redirect rules:** never 404 obvious alternates — 301 them: `/services` → `/services/`, `/book-a-teleconsult/` → `/book/`, `/teleconsult` → `/services/teleconsultation/`, `/blog/` → `/resources/`, `/faq/` → `/patients/faq/`, `/doctors/` → `/about/clinicians/`. Self-referencing canonical on every page; `BreadcrumbList` JSON-LD on every page below depth 1.

### Primary navigation

Sticky global header, `--nav-height` (72px desktop / 56px mobile), `--is-white` background, `--elev-4` after `64px` scroll. Logo left, mega-menu center, persistent CTA right. Two mega-menus (Services, For Patients); the rest are direct links. Active section gets a `2px --is-gold-600` bottom indicator.

```
GLOBAL HEADER (sticky, role="banner")
├── [Logo: inteliSentry] → /                        (gold mark on ink wordmark)
├── PRIMARY NAV (<nav aria-label="Primary">, center)
│   ├── How It Works     → /how-it-works/            (direct link — this is the story)
│   ├── Services ▾       (mega-menu, 3-column: Care pathway · Browse by need · Promo card --is-gold-100)
│   ├── For Patients ▾   (mega-menu, 2-column: Get started · Promo "Open the portal")
│   ├── About            → /about/
│   └── Resources        → /resources/
├── UTILITY  Patient Portal Login → /patients/portal/  (text link, --is-ink-700, 14px)
└── PRIMARY CTA  [ Book a teleconsult ] → /book/      (solid --is-gold-600 fill, white text, persistent + sticky)
```

**Behavior & a11y:** mega-menus open on hover (desktop) AND click/Enter (keyboard); `aria-expanded`/`aria-controls`, focus-trap, `Esc` returns focus to trigger; 200ms fade/slide. Mobile (`< 1024px`): hamburger; mega-menus become stacked accordions; **"Book a teleconsult" stays visible in the collapsed bar, never buried in the drawer.** Focus ring per §5. The header is the only place "Book a teleconsult" is gold-filled at all times — one repeated, unmistakable primary action.

### Homepage section order

Re-sequenced so the **3-step journey sits immediately under the hero** — it is the central narrative, not buried.

| # | Section | Purpose / content | CTA |
|---|---|---|---|
| 1 | **Utility bar** (optional, slim) | Phone, "Patient Portal Login"; `--is-gold-50` bg, collapses on scroll | — |
| 2 | **Hero** | `<h1>` *"See your doctor online first. Visit the clinic only when you need to."* + subhead on the model. Warm clinician-on-video photography, **light white/champagne canvas (not a dark overlay)**; image right, text left | **Book a teleconsult** (primary) + "How it works" (text link) |
| 3 | **The journey (3 steps)** | Flagship band. `<h2>` "How inteliSentry works". Three numbered cards: **1. Book your teleconsult → 2. Meet your doctor online → 3. In-clinic follow-up or procedure, only if needed.** Gold step-numbers + connecting line; `--is-gold-50` band | "See the full journey" → /how-it-works/ |
| 4 | **Why teleconsult-first** | `<h2>` value prop — convenience, faster access, less waiting-room time, continuity. 3–4 benefit tiles. White bg | inline links |
| 5 | **Services overview** | `<h2>` "Care, end to end". Carousel of the 4 pathway services, image-top cards, dot + arrows; `--is-gold-100` container | "Explore services" → /services/ |
| 6 | **Proof / stats band** | `<h2>` trust metrics (time-to-appointment, satisfaction, consults delivered). Large gold numerals + footnoted captions for E-E-A-T | — |
| 7 | **Meet the clinicians** | `<h2>` warm portraits of named, credentialed doctors (`Physician` schema); real photography | "Meet our clinicians" → /about/clinicians/ |
| 8 | **Awards / credibility band** | Accreditations, certifications, security/privacy badges (HIPAA/PDPA-equivalent), gold + full-color | — |
| 9 | **Patient testimonials** | `<h2>` "What our patients say". Quote + portrait + name carousel; `Review` schema where genuine | "Read patient stories" → /resources/ |
| 10 | **Insights / blog** | `<h2>` "Health insights worth reading". 3 latest `BlogPosting` cards | "Visit Resources" → /resources/ |
| 11 | **Conversion band** | Two-column helper: *Book a teleconsult* / *Talk to our care team*. The page's final funnel — gold band | **Book a teleconsult** (primary) + Contact → /contact/ |
| 12 | **Footer** | 4–5-column sitemap, portal login, phone, social, legal row, cookie preferences; `--is-ink-900` bg, gold accents, white text | — |

### Key conversion path

A single, unmistakable primary action repeated at every scroll depth and on every page.

```
ENTRY (any page / section) — gold "Book a teleconsult": header (persistent), hero (#2),
  journey (#3), services cards, closing band (#11), footer
   ▼
/book/  — Booking flow
   ├─ Step 1  Reason for visit / specialty  (segmented, guided)
   ├─ Step 2  Pick a time  (next-available emphasized — speed-to-care is the value prop)
   ├─ Step 3  Patient details  (returning → Portal Login shortcut to prefill)
   └─ Step 4  Confirm → confirmation + calendar add + what-to-expect link
   ▼
POST-BOOK — confirmation links → /patients/prepare/ (reduce no-shows);
  downstream story: online consult → in-clinic follow-up/procedure only if clinically needed
```

**Conversion rules:** one dominant CTA — "Book a teleconsult" is the only gold-filled button in the header and is never out-competed; secondary actions are gold text links or ghost buttons, never gold fills. Always visible (sticky on every page, including the collapsed mobile bar). Max 4 steps to a confirmed teleconsult; surface next-available early. **Measurement:** fire `book_teleconsult_start` on `/book/` entry and `book_teleconsult_complete` on confirmation; tag each CTA with its source (`hero`, `journey`, `services`, `closing_band`, `header`, `footer`).

### SEO & structured-data hooks (IA-level)

`MedicalClinic`/`MedicalBusiness` on `/` and `/about/`; `Physician` on `/about/clinicians/` and each clinician; `MedicalProcedure`/`MedicalTherapy` on `/services/*` detail pages; `FAQPage` on `/patients/faq/` and on-page FAQ accordions; `BreadcrumbList` on all depth-2+ pages; `BlogPosting` on `/resources/*` articles; `Review`/`AggregateRating` only where genuine; `WebSite` + `SearchAction` sitewide. One `<h1>` per page; semantic landmarks; `og:`/`twitter:` + canonical sitewide; `sitemap.xml` of all canonical paths; preload hero image, lazy-load below-the-fold carousels.

---

## 8. SEO & technical readiness

The contract for everything that is *not* visible pixels: document structure, metadata, structured data, performance, and the accessibility/SEO overlap. A clinic lives and dies by local search and trust signals, so structured data and Core Web Vitals are launch gates, not polish. The teleconsult-first journey (**Book teleconsult → Online consult → In-clinic follow-up / procedure**) is the spine; every directive below reinforces it for crawlers and assistive tech.

### 1. Semantic HTML5 landmarks

One — and only one — of each primary landmark per page.

```html
<body>
  <a class="skip-link" href="#main">Skip to content</a>   <!-- visually hidden until :focus -->
  <header role="banner">…</header>                          <!-- logo, primary nav, Book Teleconsult CTA -->
  <nav aria-label="Primary">…</nav>                         <!-- inside header -->
  <main id="main">…</main>                                  <!-- exactly one; never nested -->
  <footer role="contentinfo">…</footer>                     <!-- contact, hours, legal, NAP block -->
</body>
```

- **One `<main id="main">` per document;** the skip-link targets it. Never nest `<main>`.
- **Every repeated landmark gets a unique `aria-label`:** header nav `aria-label="Primary"`, footer nav `aria-label="Footer"`, journey-steps nav `aria-label="Patient journey"`. Identical labels on same-type landmarks is an a11y bug.
- **Each content band is a `<section aria-labelledby>`** pointing at its heading's `id`. Carousels are `<section aria-roledescription="carousel" aria-label="…">` with `<button>` controls — never `<div onclick>`.
- **Self-contained cards** (blog post, service card, physician card) are `<article>`; generic groupings are `<ul><li>`.
- **The journey component is an `<ol>` of `<li>` steps** — semantic and the natural anchor for `HowTo` content.
- **Decorative gold accent rules** are CSS, never `<hr>` unless a true thematic break.

### 2. Per-page `<title>` & meta description

Pattern: `Primary Keyword | Page Context — inteliSentry`. Titles ≤ 60 chars, descriptions 140–160 chars, every page unique. The `<h1>` need not equal the `<title>`. Routes below use shorthand stand-ins — map to canonical paths per §7.

| Route (canonical per §7) | `<title>` | Meta description (≤160) |
|---|---|---|
| `/` | `Teleconsult-First Healthcare Clinic \| inteliSentry` | `Book a telehealth consult first, then visit only if you need to. inteliSentry pairs online consults with in-clinic follow-up and procedures.` |
| `/services/teleconsultation/` | `Book a Teleconsultation Online \| inteliSentry` | `Start care with a secure video consult. Same-day teleconsult appointments with our clinicians—follow-up in clinic only when needed.` |
| `/services/` | `Clinic Services & Medical Procedures \| inteliSentry` | `From online consults to in-clinic procedures. Explore inteliSentry's services and how our teleconsult-first model gets you the right care faster.` |
| `/services/{procedure}/` | `[Procedure] in [City] \| inteliSentry` | `Learn about [procedure] at inteliSentry: what to expect, preparation, and how your teleconsult determines if you need an in-clinic visit.` |
| `/about/clinicians/` | `Our Doctors & Clinicians \| inteliSentry` | `Meet the inteliSentry care team. Board-certified clinicians available for teleconsults and in-clinic follow-up across our specialties.` |
| `/about/clinicians/{name}/` | `Dr. [Name], [Specialty] \| inteliSentry` | `Dr. [Name] is a [specialty] at inteliSentry. Book a teleconsult or in-clinic visit. Credentials, focus areas, and availability.` |
| `/about/` | `About Our Clinic \| inteliSentry` | `inteliSentry is a modern, teleconsult-first clinic built around your time. Premium, warm, clinical care—online first, in person when it matters.` |
| `/contact/` | `Contact & Clinic Hours \| inteliSentry` | `Reach inteliSentry's care team. Clinic address, opening hours, phone, and directions. Book a teleconsult or plan your in-clinic visit.` |
| `/patients/faq/` | `Patient FAQ \| inteliSentry` | `How teleconsult-first care works, what to bring, billing, and when an in-clinic visit is needed. Answers to common inteliSentry questions.` |
| `/resources/{slug}/` | `[Article Title] \| inteliSentry` | *Hand-authored per article; fall back to first 155 chars of the dek.* |

Implementation: titles set via the framework head manager (Next `metadata` / `next-seo`), never hard-coded twice. Constants `SITE_NAME = "inteliSentry"` and `TITLE_TEMPLATE = "%s | inteliSentry"` prevent drift. **A missing description must fail CI**, not ship empty.

### 3. Open Graph & Twitter cards

Every indexable page emits a full set; default OG image is brand gold/white, content pages override.

```html
<meta property="og:type" content="website"><!-- "article" on /resources/* -->
<meta property="og:site_name" content="inteliSentry">
<meta property="og:title" content="Teleconsult-First Healthcare Clinic | inteliSentry">
<meta property="og:description" content="…same as meta description…">
<meta property="og:url" content="https://www.intelisentry.com/">
<meta property="og:image" content="https://www.intelisentry.com/og/home.png"><!-- 1200×630, ≤300KB -->
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="inteliSentry — teleconsult-first clinic">
<meta property="og:locale" content="en_SG">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="…">
<meta name="twitter:description" content="…">
<meta name="twitter:image" content="https://www.intelisentry.com/og/home.png">
```

- **OG image spec:** 1200×630, ≤ 300 KB, PNG/static WebP. Brand: white `#FFFFFF` canvas, champagne/deep-gold accent (the `--is-gold-400/500` family — **not** bright yellow), wordmark, one-line value prop. Generate per-template via a dynamic OG endpoint (`/api/og?title=…`) so clinician and article pages get bespoke cards.
- `article:published_time`/`article:modified_time`/`article:author` on `/resources/*`. Never ship without an OG image — a layout-level fallback `/og/default.png` is wired in.

### 4. Canonical URLs & URL hygiene

- **Self-referencing canonical on every page** (absolute, https, one host).
- **Pick one host and 301 the rest** (`intelisentry.com → www.intelisentry.com`). Enforce a single trailing-slash policy in one place (recommend trailing slash on directory paths per §7, applied consistently).
- Lowercase paths only; no `index.html`, no session/UTM params in the canonical (strip query strings).
- **Maintain a redirect map** (per §7); any renamed/removed route gets a **301**, never a soft 404. Pre-launch, crawl (Screaming Frog) and assert zero unintended 4xx/5xx and zero canonical-to-non-200.
- Paginated/filtered listings (`/resources?page=2`) self-canonicalize to the paginated URL (do **not** canonical all to page 1); use clean `rel="prev/next"` links.

### 5. sitemap.xml & robots.txt

**`/sitemap.xml`** — generated at build, one URL per canonical page, `<lastmod>` from content/git mtime, only 200-status indexable URLs.

```xml
<url>
  <loc>https://www.intelisentry.com/services/teleconsultation/</loc>
  <lastmod>2026-06-11</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>  <!-- / = 1.0; teleconsultation 0.9; services 0.8; resources 0.6 -->
</url>
```

Split into a sitemap index (`sitemap-pages.xml`, `sitemap-clinicians.xml`, `sitemap-resources.xml`) if any list exceeds ~1,000 URLs.

**`/robots.txt`:**

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /*?*utm_
Disallow: /draft/
Disallow: /thank-you/

Sitemap: https://www.intelisentry.com/sitemap.xml
```

Do **not** `Disallow` CSS/JS — Google must render the page for CWV and mobile-friendliness. Booking confirmation, account, and any PHI-adjacent flows are `noindex` via meta robots **and** kept off the sitemap.

### 6. JSON-LD structured data

All structured data is JSON-LD, one `@graph` per page where entities relate. This is the single highest-leverage SEO investment for a clinic — it drives rich results, the knowledge panel, and local-pack eligibility.

**Sitewide — Organization + the clinic as `MedicalClinic`/`LocalBusiness`:**

```json
{
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  "@id": "https://www.intelisentry.com/#clinic",
  "name": "inteliSentry",
  "url": "https://www.intelisentry.com/",
  "logo": "https://www.intelisentry.com/brand/logo.png",
  "image": "https://www.intelisentry.com/brand/clinic.jpg",
  "telephone": "+65-XXXX-XXXX",
  "priceRange": "$$",
  "medicalSpecialty": ["PrimaryCare", "Telemedicine"],
  "address": { "@type": "PostalAddress", "streetAddress": "…", "addressLocality": "Singapore", "postalCode": "…", "addressCountry": "SG" },
  "geo": { "@type": "GeoCoordinates", "latitude": 1.3xxxx, "longitude": 103.8xxxx },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00", "closes": "18:00" }
  ],
  "availableService": { "@type": "MedicalProcedure", "name": "Teleconsultation", "procedureType": "https://schema.org/NoninvasiveProcedure" },
  "sameAs": ["https://www.facebook.com/…", "https://www.linkedin.com/company/…"]
}
```

Per-template:

| Template | `@type` | Key properties |
|---|---|---|
| Home `/` | `WebSite` (+ `SearchAction`) + the `#clinic` graph | `potentialAction`, `publisher` → `#clinic` |
| `/services/teleconsultation/` | `MedicalProcedure` + `HowTo` | `HowTo.step` = the 3-step journey; `MedicalProcedure.howPerformed` |
| `/services/{procedure}/` | `MedicalProcedure` | `procedureType`, `bodyLocation`, `preparation`, `followup`, `howPerformed` |
| `/about/clinicians/{name}/` | `Physician` | `name`, `medicalSpecialty`, `worksFor` → `#clinic`, `image`, `alumniOf`, `availableService` |
| `/about/clinicians/` | `ItemList` of `Physician` | ordered `itemListElement` |
| `/patients/faq/` | `FAQPage` | `mainEntity[]` of `Question`/`acceptedAnswer` — **only for genuinely visible Q&A** |
| `/resources/{slug}/` | `MedicalWebPage` or `Article` | `headline`, `datePublished`, `author`, `reviewedBy` → `Physician`, `image` |
| All deep pages | `BreadcrumbList` | mirrors the visible breadcrumb trail |

**Hard rules:** `BreadcrumbList` on every page below the top level, mirroring a *visible* breadcrumb (`Home › Services › [Procedure]`). `FAQPage` only where the Q&A is genuinely visible (never hidden-FAQ bait). `Physician.reviewedBy`/`Article.reviewedBy` — medical content reviewed by a named clinician (show "Medically reviewed by Dr. X" in UI *and* markup) — the E-E-A-T signal that matters in YMYL health. Use stable `@id` anchors (`#clinic`, `#person-jdoe`) so entities cross-reference. Validate every template against Google Rich Results Test + schema.org validator in CI; malformed JSON-LD fails the build.

### 7. Heading hierarchy

- **Exactly one `<h1>` per page**, matching the page's core promise (home `<h1>` carries the teleconsult-first value prop).
- **No skipped levels** (`h1 → h2 → h3`); each `<section>`'s heading is the next level down and the target of that section's `aria-labelledby`.
- **Visual size is decoupled from level** via type tokens (§3) — style an `<h2>` with `--fs-display` if a small band needs a big-looking heading; do not demote/promote the tag for looks.
- Eyebrow/kicker labels are `<p class="eyebrow">`, **not** a heading tag. Carousel slide titles are `<h3>`/`<h4>` under the section `<h2>`; CTA-band and footer-column headings are consistent levels, not styled `<div>`s.

### 8. Images: alt text & lazy-loading

- **Every `<img>` has `alt`.** Informative images describe content *and* context ("Clinician leads a video teleconsult with a patient on a tablet"). Decorative gold accents get `alt=""` + `role="presentation"`.
- **Dimensions always set** (`width`/`height` or `aspect-ratio`) to protect CLS — no layout-shifting images, ever.
- **Lazy-load below the fold** (`loading="lazy" decoding="async"`). **The LCP hero image is the exception:** `loading="eager" fetchpriority="high"` + preload (`<link rel="preload" as="image" imagesrcset=…>`). Never lazy-load the hero.
- **Responsive:** `srcset` + `sizes`, serve **AVIF → WebP → fallback** via `<picture>`. Ship warm documentary photography sized, not as 2 MB originals.
- Physician/procedure imagery carries person/procedure-specific alt (feeds image search). Decorative SVG icons get `aria-hidden="true"`; meaningful SVG gets `<title>`.

### 9. Core Web Vitals & performance budget

Targets are the *good* thresholds at p75 mobile, enforced in CI (Lighthouse CI) — a regression past budget fails the build.

| Metric | Budget (p75 mobile) |
|---|---|
| LCP | **≤ 2.0 s** (tighter than the 2.5 s pass line) |
| INP | **≤ 200 ms** |
| CLS | **≤ 0.05** (tighter than 0.1) |
| TTFB | ≤ 0.6 s |
| Total JS (initial route, gzipped) | **≤ 150 KB** |
| Total page weight (initial) | ≤ 1.0 MB |
| Web fonts | ≤ 2 families / ≤ 4 files, `font-display: swap`, self-hosted, `preload` the display face |

**Tactics:** self-host fonts (`woff2`, Latin subset), `font-display: swap`, preload the heading face, define a `size-adjust` metrics-matched fallback to kill swap CLS. Hero video is **not** autoplaying full-bleed by default — poster image is the LCP; load video on interaction/`requestIdleCallback`. Ship mostly static/server-rendered HTML (SSG/ISR) so crawlers see structured data and meta on first byte. Code-split per route; the booking widget and chat load on interaction. Third-party scripts `async`/`defer`, ideally post-consent. Preconnect to the image CDN and booking origin; `dns-prefetch` analytics; cache-bust via hashed filenames + long `immutable` headers. The light gold/white palette is a performance asset — don't squander it with heavy hero media.

### 10. Accessibility (WCAG 2.2 AA) where it meets SEO

Accessibility and SEO share a substrate: semantic structure, text alternatives, predictable interaction. Treat AA as a launch gate.

- **Color contrast — the gold trap.** Champagne/amber gold on white is the brief's biggest a11y risk. Rules: body/UI text **≥ 4.5:1**, large text (≥ 24px / 18.66px bold) **≥ 3:1**, non-text UI (borders, focus rings, icons) **≥ 3:1**. **Gold is an accent/surface, not a text color.** Primary CTA = `--is-gold-600` fill with **white** label (~4.8:1, passes); gold text on white must be `--is-gold-700`+; never gold text on white for body copy. (Full contrast matrix in §2.)
- **Visible focus on everything interactive** — a `2px` gold-or-charcoal ring with offset, never `outline:none` without a replacement. Keyboard order matches visual order; the skip-link is the first focusable element.
- **Carousels/menus keyboard-operable** (real `<button>`s, arrow keys, `aria-current`), respect `prefers-reduced-motion`, pause on focus/hover.
- **Forms** (booking flow): every field a programmatic `<label>`, errors tied via `aria-describedby` + `aria-invalid`, never color-only. Touch targets ≥ 24×24px (prefer 44×44).
- **Language & order:** `<html lang="en-SG">`, DOM order = reading order, landmarks per §1.
- Run axe-core in CI on every template; AA violations fail the build alongside the Lighthouse budget.

### 11. Local SEO for the clinic

- **NAP consistency is sacred.** Name / Address / Phone identical character-for-character across footer, `MedicalClinic` JSON-LD, Google Business Profile, and every directory citation. One canonical NAP string in a config constant; footer and JSON-LD both render from it.
- **Google Business Profile** is the off-site centerpiece: category "Medical clinic" / "Telemedicine service", matching hours, same primary photo set, booking link → `/book/`. On-site `MedicalClinic` schema must mirror GBP exactly (`geo`, `openingHoursSpecification`, `telephone`, `priceRange`).
- **Embedded map + directions** on `/contact/`, address as real selectable text (not baked into an image) and the same string as the JSON-LD `PostalAddress`. Lazy-load the map iframe so it doesn't tax LCP.
- **`areaServed`** on the clinic entity reinforces local relevance; teleconsult lets you list a broader `areaServed` than a single physical catchment — lean into that.
- **Location/landing pages:** if multiple sites later, one indexable page per location with unique content + its own `MedicalClinic` `@id`, geo, and hours — never duplicate boilerplate.
- **Reviews/ratings:** mark genuine, visible first-party reviews with `AggregateRating`/`Review` on the clinic entity (Google penalizes self-serving markup). GBP reviews remain the primary local trust signal.
- **`hreflang`** only if you add languages/regions; otherwise omit. Set `og:locale` (`en_SG`) and `<html lang="en-SG">` to match the primary market.

---

**Definition of done (CI gates):** unique `<title>` + meta description per route · valid JSON-LD per template (Rich Results Test) · zero axe-core AA violations · Lighthouse CWV within budget · zero unintended 4xx/5xx in crawl · sitemap = set of 200 canonical URLs · every `<img>` has `alt` · single `<h1>` + no skipped heading levels per page · all component CSS references `--is-` tokens only (no hard-coded hex).