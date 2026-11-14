# B · Festivāla programma — design system

Intent: the site reads as a printed film-festival catalogue. Paper, ink, one vermilion, hairline rules, numbered entries, folios.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--paper` | `#F5F2EA` | page surface |
| `--paper-2` | `#EAE5D8` | plates (image placeholders), selected rows |
| `--ink` | `#141414` | text, rules, outlines (16.5:1 on paper) |
| `--ink-2` | `#5E584E` | captions, secondary text (6.3:1 on paper) |
| `--red` | `#D8432C` | hatch fill, large display accents only (3.9:1, never under 24px) |
| `--red-ink` | `#B8341F` | button fill, small red text, error hint (5.3:1 with paper) |
| `--accent` | per film (content.js) | halftone plates only, never text |

Fonts: display `Libre Caslon Display` 400; text `Source Serif 4` (opsz 8–60, roman + italic); labels and numbers `IBM Plex Mono` 400/500. All three checked against "Ziedot ģimenēm ķēķī ļoti šūpļos ĀČĒĢĪĶĻŅŠŪŽ". Fraunces, Newsreader, Bodoni Moda, DM Serif Display are out (missing or misplaced macrons).

Scale: mono label 12/13px caps +0.08em; body 18px/1.55; lead 22px; h3 32px; h2 clamp(44px, 6vw, 88px); cover slogan clamp(52px, 7.2vw, 112px). Spacing on an 8px base: 8 / 16 / 24 / 40 / 64 / 104.

Grid: 12 columns, max 1360px, 24px gutter, 40px page margin (20px under 768px). Every section opens with a folio rule: 1px ink line, mono section number left, mono section name right.

## Components

- **Folio** (section head). Rule + `02` + name. Static.
- **Button, primary** (`.btn`). `--red-ink` fill, paper text, mono caps, min-height 56px (44px in masthead). Hover: ink fill. Focus-visible: 3px ink outline offset 3px. Disabled: paper-2 fill, ink-2 text, not-allowed cursor.
- **Text link** (`.ul`). Ink, underline drawn as a 1px background that grows from 0 to 100% width on hover/focus (instant with reduced motion).
- **Plate** (`.plate`). Image placeholder: paper-2 ground, 1px ink frame, halftone dots in the film accent masked to a soft blob whose position steps with the film number, crop marks, mono plate number. Decorative, `aria-hidden`.
- **Battery** (`.battery`). 2px ink outline + terminal nub, vermilion diagonal hatch fill, solid leading edge, ten ticks. Numbers beside it in Caslon at display size. `role=progressbar` with value text (fd.js).
- **Programme entry** (`.entry`). One film per row: number, title, idea, plate, "Uzzināt vairāk". Entire row is one link target via the title link stretched over the row; hover tints the row paper-2 and draws the title underline.
- **Amount chip** (`[data-amount]`). Square mono box, `aria-pressed`. Pressed: ink fill, paper text. 56px tall.
- **Field**. Underline-only input, mono label above. `aria-invalid=true` turns the rule and the "Minimālā summa — 2 €" hint `--red-ink`.
- **Copy row**. Label · dotted leader · value · "Kopēt" button (44px). Copied state appends ✓ (fd.css).

## Accessibility acceptance

- Body text ≥ 4.5:1, everything interactive ≥ 3:1 outline; `--red` never carries small text.
- Every control is a `button`, `a`, or labelled input; touch targets ≥ 44px.
- Focus-visible outline on every interactive element, never removed.
- Skip link first in tab order. `lang="lv"`.
- `prefers-reduced-motion`: battery fills instantly, numbers render final (fd.js), underline reveals instant.
- Plates and decorative numerals are `aria-hidden`.

## Anti-patterns

- No rounded corners, shadows or gradients-as-decoration: print has none.
- No per-film goal, percentage or ranking. Film entries show only total and supporter count, on the film page.
- No second accent colour in UI chrome; film accents live only inside plates.

## QA checklist

- [ ] 1440×900: logo, slogan, intro, ZIEDOT, video plate, battery all above the fold.
- [ ] `scrollWidth === innerWidth` at 1440, 768, 390.
- [ ] Video dialog opens, closes on button, backdrop and Esc.
- [ ] Presets toggle `aria-pressed`; custom 1.5 disables submit and reddens the hint.
- [ ] Copy buttons show ✓.
- [ ] `film.html?n=1..10` shows the right title, accent, reference; prev/next wrap.
