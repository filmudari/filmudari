---
name: FilmuDari E "Kārba"
description: Ten film cans waiting to be filled. A galvanized can lid sealed with camera tape.
colors:
  zinc: "#aeb3b1"
  zinc-shade: "#959b9a"
  steel-lo: "#8b9291"
  steel-deep: "#3f4647"
  tape: "#f1f0ea"
  tape-anon: "#dcdedb"
  ink: "#131516"
  ink-2: "#1f2425"
  go: "#d5ee2c"
  core: "#c4ad7c"
  error: "#a3221b"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 5.9vw, 5.6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 4.6vw, 4.2rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.015em"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  figure:
    fontFamily: "Big Shoulders Stencil Display, Archivo, sans-serif"
    fontSize: "clamp(1.7rem, 2.3vw, 2.15rem)"
    fontWeight: 800
    lineHeight: 1
rounded:
  none: "0px"
  channel: "5px"
  lid: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 64px)"
  section: "clamp(72px, 10vw, 140px)"
  wrap: "1312px"
components:
  button-primary:
    backgroundColor: "{colors.go}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.7em 1.4em"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.tape}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.7em 1.4em"
  amount-tab:
    backgroundColor: "#e4e3dc"
    textColor: "{colors.ink-2}"
    typography: "{typography.figure}"
    height: "60px"
  amount-tab-active:
    backgroundColor: "{colors.go}"
    textColor: "{colors.ink}"
  input:
    backgroundColor: "#fbfbf8"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "52px"
---

# Design System: FilmuDari E "Kārba"

## Overview

The page is one galvanized film-can lid seen from above, sealed with camera tape. Every working part is written on tape: the wordmark and slogan, buttons, the film titles, supporter names. Ground is matte zinc with a faint spangle and pressed rings lit from the top left. Ten films are ten cans, each sealed with its own coloured tape. Fluoro chartreuse tape is the only action and money colour.

Source: student crews label cans, mags and cases with camera tape; the campaign's ten productions are ten cans not yet filled. Scene: a donor on a phone in daylight, the world lit like a lab shelf under flat light. So the ground is light-mid grey, never dark.

## Colors

### Primary
- **Go tape** `#d5ee2c`: ZIEDOT, submit, the chosen amount, the progress fill, the play button, the tape roll. Nothing decorative uses it.

### Neutral
- **Zinc** `#aeb3b1` with the `--spangle` tile: every section ground and every lid.
- **Zinc shade** `#959b9a`: hero ground outside the lid.
- **Steel lo / deep** `#8b9291` / `#3f4647`: battery channel, footer rim.
- **Tape** `#f1f0ea`: all set-type surfaces. **Tape anon** `#dcdedb`: anonymous supporters.
- **Ink** `#131516`, **ink 2** `#1f2425`: text. Ink 2 holds 4.5:1 on steel lo.

### Film tapes
Each film's accent from `prototypes/shared/content.js` is its can tape and the rim of its opened can. Ink text sits on every accent.

### Named Rules
**The One Tape Rule.** Chartreuse marks money and action only.
**No Cream.** Tape is the only light surface; sections never turn to paper.

## Typography

Archivo (variable width) sets everything typed; display runs at weight 800, `wdth` 80. Weight 900 at narrow widths shrinks the ī macron to a dot, so 800/80 is the floor for Latvian display. Big Shoulders Stencil Display sets the figures, can numbers and amounts, like stencilled can markings. Both render ā č ē ģ ī ķ ļ ņ š ū ž and capitals (checked by screenshot).

### Hierarchy
- Display: slogan, film title (up to 6rem).
- Heading: section titles, 2.3–4.2rem.
- Label: 0.95rem bold, `wdth` 85, field names and figure captions.
- Body: 17px (16px under 640px), measure ≤64ch.
- Figure: stencil, tabular.

## Layout

One centred wrap of 1312px with a fluid gutter. Hero fills the first viewport: tape strip from the left edge, intro and ZIEDOT left, video print taped at the lid hub right, battery across the bottom. Films: 5 columns at desktop, 3 under 1100px, a list with a 112px can beside the text under 640px. Donation: form 7fr, bank 5fr, stacked under 1100px.

## Elevation & Depth

Tape lifts by a soft two-step drop shadow (`.lift` drop-shadow on the parent, since torn masks clip box-shadow). Lids cast a soft ground shadow. The battery channel is recessed with inset shadows. No hard offset shadows.

## Shapes

Rectangles with torn ends (SVG masks), circles for lids and the roll. No rounded cards.

## Components

### Buttons
Tape tabs: flat tape colour, soft lift, rise 1px on hover, press flat on active. Primary is go tape. ZIEDOT alone uses caps tracking 0.08em.

### Amount tabs
All five amounts always visible; the chosen one turns go tape and rises 3px.

### Inputs / Fields
Near-white well with a 2px ink-2 underline; invalid turns the underline and hint red with the "Minimālā summa — 2 €" hint bold.

### Can
Zinc lid with one-sided ridge rings, stencil number pressed in, a coloured tape across carrying the title and supporter count. Hover turns the lid 9deg.

### Battery (signature)
Steel channel with a terminal cap. A chartreuse tape roll rolls from zero to the raised share on load, laying cloth tape behind it. Reduced motion shows the end state.

## Do's and Don'ts

### Do:
- Put every working label on tape.
- Keep the zinc ground on every section.
- Use the stencil only for figures and can numbers.

### Don't:
- Don't use conic "brushed metal" sheens.
- Don't use chartreuse for decoration.
- Don't show per-film goals or percentages; a can carries count and amount only.
- Don't set Latvian display text at weight 900 narrow.
