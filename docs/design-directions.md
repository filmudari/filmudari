# Design directions — 3 prototypes

Goal: three genuinely different directions so the client chooses a direction, not a mix.
Same content, same structure, same copy (`docs/copy-lv.md`) in all three — only the visual language changes.

## Shared requirements (all variants)
- Pages: `index.html` (homepage) + `film.html` (one film, e.g. film 01).
- Breakpoints to check: 390px (mobile) and 1440px (desktop). Also sanity-check 768px.
- Hero must show, without scrolling on desktop: logo, slogan, short intro, ZIEDOT button, video thumbnail, progress bar.
- Progress bar = "battery charging" metaphor, horizontal. Shows: saziedots, mērķis €12 000, vēl trūkst, %.
  Use demo data: €4 380 of €12 000 (36.5%). Animate the fill on load (respect `prefers-reduced-motion`).
- Video: thumbnail with play button; clicking opens a modal (placeholder — no real embed needed).
- Donation block: preset amounts 5 / 10 / 20 / 50 / 100 €, custom amount, min €2 hint, optional name,
  "rādīt manu vārdu" checkbox, primary button. Below: bank transfer details with copy buttons.
- 10 film cards: title, team image placeholder, one-line idea, "Uzzināt vairāk". Each film has an accent colour.
- Supporters list (8–12 demo names + some "Anonīms ziedotājs").
- Film page: title, idea, team (režisors, operators, montāžas režisors, producents), "Kāpēc šī filma",
  film total ("Šo filmu atbalstījuši 23 ziedotāji · €640"), "Atbalstīt filmu" button, key-visual placeholder.
  NO per-film progress bar or goal.
- Image placeholders: solid/gradient blocks or CSS-drawn frames, no stock photos. Must still look good,
  because real key visuals arrive only in January.
- Fonts: Google Fonts only, must render Latvian diacritics (ā č ē ģ ī ķ ļ ņ š ū ž). Test with "Ziedot ģimenēm ķēķī ļoti šūpļos".
- Not corporate. Minimal, contemporary, independent-cinema feel.

## A — "Kinozāle" (cinematic dark)
- Mood: a dark screening room just before the film starts.
- Palette: near-black `#0B0B0C`, warm off-white text `#F2EFE9`, one tungsten accent (`#E8A33D` range).
  Each film's accent shows only on its card hover/page.
- Type: condensed grotesk for display (e.g. Barlow Condensed / Oswald), clean sans for body (e.g. Inter).
- Layout: letterbox framing (thin bars top/bottom of hero), video thumbnail large and central, subtle film grain overlay.
- Progress bar: thin glowing battery like a projector beam; numbers in tabular figures.
- Motion: slow fades, card hover = image brightens like a projector turning on.

## B — "Festivāla programma" (editorial / typographic)
- Mood: a printed film festival catalogue.
- Palette: paper `#F5F2EA`, ink `#141414`, one strong accent (e.g. vermilion `#D8432C`).
- Type: high-contrast serif display (e.g. Fraunces / Newsreader), monospace for numbers and labels (e.g. JetBrains Mono / IBM Plex Mono).
- Layout: strict grid, generous whitespace, films numbered 01–10 like catalogue entries, hairline rules.
- Progress bar: battery as an outlined rectangle with hatched/solid fill and big serif numerals beside it.
- Motion: minimal — underline reveals, numbers counting up.

## C — "Plakāts" (bold poster)
- Mood: indie gig posters / risograph prints, playful and loud.
- Palette: off-white base, each film owns a saturated colour (10 distinct, e.g. riso pink, blue, yellow, green, orange…).
- Type: heavy, wide display face (e.g. Unbounded / Archivo Black — verify Latvian glyphs), simple sans body.
- Layout: big colour blocks, slightly rotated stickers/labels, oversized ZIEDOT button, film cards as mini posters.
- Progress bar: chunky segmented battery (10 segments, filled ones in the films' colours).
- Motion: snappy — hover tilts, sticker wobble, segments filling one by one.

## Deliverable for the client
`prototypes/index.html`: three large tiles (A/B/C) with name + one-line description, linking to each variant.
Host as a static site (Cloudflare Pages / Netlify drop / GitHub Pages) and send the friend one link.
