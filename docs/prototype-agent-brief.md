# FilmuDari prototype v2: shared brief

## Goal
Biedrība FilmuDari (a Latvian non-profit) is raising €12 000 for 10 student short films. The client will pick ONE
visual direction for their donation website from several prototypes. The operator wants real diversity at this stage
so they can see what works and what doesn't. Your variant must be a strong, opinionated, independent take.

Repo: /mnt/c/Users/Krist/orca/projects/filmudari

## Read first
- `CLAUDE.md` (hard rules: Latvian diacritics, no per-film goals/percentages/rankings, video facade, accessibility).
- `docs/design-directions.md`: the "Shared requirements" list (and your variant's section, if it has one).
- `docs/copy-lv.md`: all Latvian copy. Use it verbatim. Do not invent Latvian text. If you must add a string
  (an aria-label, a skip link), keep it minimal and list it in your report.
- Your design skill (path given in your prompt). Follow its process. Your prompt wins where they conflict.

## Do NOT read
Other variants' folders and other skills in `.claude/skills/`. Independence is the point.

## Freedom (this overrides "same content, same structure" in the docs)
Keep every required content element (hero items, progress battery, video facade, Par mums, 10 film cards,
donation form + bank transfer block, supporters, contacts, footer, film page fields). Everything else is yours:
section order, page structure, navigation, hero composition, how films are browsed, how donation is presented,
interaction ideas. Do NOT default to the generic "text left / media right split hero, then stacked full-width
sections" page. Make deliberate structural choices that come from your direction's world.

## Shared layer (read-only; do not edit anything in `prototypes/shared/`)
- `prototypes/shared/content.js`: `window.FD` with goal, raised, films (n, title, idea, accent, supporters, total), supporters (null = anonymous).
- `prototypes/shared/fd.js`: optional helpers driven by data attributes. Read the file for the full API:
  `data-render="films|supporters"` + `data-template="#id"` (fills `[data-f=...]`, `[data-href]`, sets `--accent`, `--i`),
  `data-film-page` on body (reads `?n=1..10`; does not touch fields inside `[data-render]` lists), `data-progress`
  (sets `--target` 0..1 and class `is-charged`), `data-num="raised|goal|remaining|percent"`, `form[data-donate]` with
  `[data-amount]`, `[name=custom]`, `[data-donate-label]`, `[data-copy="#id"]`, `dialog#video` + `[data-video-open]` / `[data-video-close]`.
  Use it, extend it with your own JS in your folder, or write your own. Behaviour must work either way.
- `prototypes/shared/fd.css`: `.fd-logo` (the client's hand-drawn wordmark, colour via `currentColor`; give it a height).
  Path is `../shared/fd.css`. The raw SVG is `assets/logo/filmudari-wordmark.svg`.
- `prototypes/shared/diacritics.html`: font test page.

## Fonts
Google Fonts only. Verified BROKEN for Latvian: Fraunces, Newsreader, Delius, Darumadrop One, Antonio, Bodoni Moda,
DM Serif Display, Delicious Handrawn. Verified OK: Barlow Condensed, Instrument Sans, Instrument Serif, Playfair Display,
Gelasio, Ubuntu Mono, Unbounded, Archivo Black, Space Grotesk, Overpass Mono, Shantell Sans. Any other font: render
"Ziedot ģimenēm ķēķī ļoti šūpļos Mūs Vēlies Pēdējais sākums ĀČĒĢĪĶĻŅŠŪŽ" in it, screenshot, and look closely.

## Tech
Static HTML. Tailwind via `<script src="https://cdn.tailwindcss.com/3.4.16"></script>` plus your own CSS file. No build step.
Deliver `index.html` and `film.html` (film page works for `?n=1..10`) in your folder. Use `lang="lv"`.
No stock photos: image placeholders are CSS/SVG compositions that look intentional (real key visuals come in January).
Respect `prefers-reduced-motion`. Real buttons/links, visible focus, sufficient contrast, 44px touch targets.

## Verify (required, on the real page)
A static server runs: `http://127.0.0.1:8765/prototypes/<your-folder>/`. Do not start another on that port.
Browser: `chrome-devtools-axi`, ALWAYS prefixed with your own session, e.g.
`CHROME_DEVTOOLS_AXI_SESSION=<your-folder> chrome-devtools-axi open <url>`.
Useful: `resize W H`, `wait 2500`, `screenshot <path> [--full-page --format jpeg]`, `eval "<js>"`, `snapshot`, `click @uid`, `console`.
Save screenshots under `/tmp/claude-1000/-mnt-c-Users-Krist-orca-projects-filmudari/e22d5a12-17e7-4c4a-a1dc-578b403d5a00/scratchpad/shots/<your-folder>/`.
Check: 1440x900 (hero shows logo, slogan, intro, ZIEDOT, video thumb and progress without scrolling), 768x1024, 390x844.
`document.documentElement.scrollWidth === innerWidth` at each width. Open the video modal, pick amounts, type a custom
amount below 2, click a copy button, open `film.html?n=3`. Look at every screenshot yourself and fix what looks wrong.

## Do not
Commit, push, or edit files outside your folder.

## Report back
Design plan (palette hex, fonts, layout concept, the one memorable thing), structural choices you made and why,
screenshot paths, any strings you added beyond copy-lv.md, known issues.
