# Product

<!-- impeccable:product-schema 1 -->

<!-- Inferred from docs/mvp-plan.md, docs/brief-original.md, docs/copy-lv.md and CLAUDE.md by a delegated agent with no interview channel. Every fact below comes from those files; items marked (inferred) are readings of them, not client answers. -->

## Platform

web

## Stack

Prototypes: static HTML + Tailwind CDN, no build step (CLAUDE.md, phase 1). MVP: Laravel + Filament + Blade + Tailwind + Alpine, Montonio payments (docs/mvp-plan.md).

## Users

- Donors: friends, families and acquaintances of the students, Latvian film-goers, and people reached through FilmuDari's Instagram and Facebook. Most arrive on a phone from a shared link and pay through their bank app (inferred from the Montonio decision).
- The client: Biedrība FilmuDari, which picks one visual direction and later edits texts and records donations in the admin.

## Product Purpose

A donation campaign site raising 12 000 € for ten short films made by 2nd-year audiovisual arts students at the Latvian Academy of Culture (LKA). Success is reaching the goal, with donors trusting that the money reaches the films.

## Positioning

The money funds ten named student productions, and a donor can attach a gift to one specific film. The total is a ledger of verified donations, never an edited number.

## Operating Context

Student course films are the first time young directors, camera operators, editors and producers work as a real crew. Money pays for equipment, locations, transport and actors (docs/copy-lv.md). Films are in pre-production; real key visuals arrive in January.

## Capabilities and Constraints

- Preset amounts 5 / 10 / 20 / 50 / 100 €, custom amount, minimum 2 €. Optional name, optional public listing.
- Bank links and cards via Montonio, webhook-confirmed; bank-transfer fallback with IBAN and reference.
- Per-film page shows that film's amount and supporter count only. No per-film goals, percentages or rankings.
- The thank-you page never claims the payment succeeded.
- Video is a click-to-load youtube-nocookie facade in a modal.
- Language: Latvian only. Every font must render ā č ē ģ ī ķ ļ ņ š ū ž and capitals.
- Out of scope: news, recurring donations, invoices, email receipts, multi-campaign UI.

## Brand Commitments

- Name and wordmark: FilmuDari (assets/logo/filmudari-wordmark.svg).
- Feel: not corporate; minimal, contemporary, independent cinema (docs/design-directions.md).
- Copy in docs/copy-lv.md is used verbatim.

## Evidence on Hand

- Copy: docs/copy-lv.md. Film titles and loglines are placeholders.
- Demo numbers: 4 380 € of 12 000 €, demo supporters in prototypes/shared/content.js. Synthetic.
- Contacts: darifilmu@gmail.com, +371 24922018, @filmudari, Mezgli, Cenu pagasts, Jelgavas novads.
- Absent and not to be fabricated: registration number, IBAN, real team names, film stills, testimonials.

## Product Principles

1. The money is concrete: show what it buys and which film it reaches.
2. Never overstate: totals are verified, payment states are honest.
3. The ten films are equals; nothing ranks them.
4. The students are the subject, not the association.

## Accessibility & Inclusion

Real buttons and links, visible focus, alt text, sufficient contrast, prefers-reduced-motion respected (CLAUDE.md).
