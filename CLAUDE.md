# FilmuDari — donation campaign website

Donation campaign site for Biedrība FilmuDari: raising €12,000 for 10 short films by 2nd-year
audiovisual arts students at the Latvian Academy of Culture (LKA). Site language: **Latvian only**.

## Read first
- `docs/mvp-plan.md` — agreed MVP scope, decisions, stack, costs. **Source of truth for scope.**
- `docs/brief-original.md` — the client's original brief (Latvian). Where it conflicts with the plan, the plan wins.
- `docs/design-directions.md` — the 3 prototype directions.
- `docs/copy-lv.md` — Latvian copy for all pages (draft; placeholders marked `[..]`).

## Current phase: 1 — visual prototypes
- Static HTML + Tailwind only, in `prototypes/a-kinozale/`, `prototypes/b-programma/`, `prototypes/c-plakats/`.
- No backend, no real payments, no build step required (Tailwind CDN is fine for prototypes).
- Each variant: `index.html` (homepage) and `film.html` (one film detail page). Must work at 390px and 1440px.
- `prototypes/index.html` links all three for the client.
- Use the copy from `docs/copy-lv.md` verbatim — don't invent new Latvian text.

## Phase 2 (after a variant is chosen) — MVP build
- Laravel + Filament (admin) + Blade + Tailwind + Alpine. MySQL or SQLite.
- Payments: Montonio (bank links + cards), webhook-confirmed. Bank-transfer fallback = static IBAN + reference block.
- Donations are a ledger: total is always computed from verified donation rows, never edited directly.
- Every donation row carries `campaign_id` and nullable `film_id`.
- Out of scope for MVP: news, recurring donations, company invoices, email receipts, statement import,
  multi-campaign UI, per-film goals/progress bars, page builder.

## Hard rules
- All fonts must support Latvian diacritics: ā č ē ģ ī ķ ļ ņ š ū ž (and capitals). Verify before using a font.
- Never show per-film goals, percentages or rankings — only a film's amount / supporter count.
- The thank-you page never claims the payment succeeded; it says the donation is being confirmed.
- Video: thumbnail facade, load the player only on click (youtube-nocookie), open in a modal.
- Accessibility basics: real buttons/links, visible focus, alt text, sufficient contrast, `prefers-reduced-motion`.
