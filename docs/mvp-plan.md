# FilmuDari website — MVP plan and decisions

Agreed 2026-11-14. Live version: https://claude.ai/artifact/Nmiszwh53Np9pHhRVzYNuy

## Legal status (blocker for payments)
The brief says "Biedrība FilmuDari", i.e. a registered association with its own Swedbank account. Confirm:
registration number, that the account is in the association's name, and who the board member (signatory) is.
Montonio onboarding requires a person legally entitled to represent the organisation. If they are not
registered, they should register an association before collecting public donations.

## Payments: Montonio
- Bank links (Swedbank/SEB/Citadele/Luminor) as default, cards as backup, one integration, webhooks.
- Fees: €11.99/month, bank payment €0.20, cards 1.49% + €0.25.
- Stripe rejected as primary: no native Baltic bank links; most Latvian donors pay via bank app.
- Bank transfer fallback: static block with IBAN, generated reference ("Ziedojums – <film>"), copy button.

## Admin (Filament) — fixed fields, no page builder
- Settings page: slogan, intro, about text, video URL, contacts, goal.
- Films: 10 records, same fields (title, description, goal text, team, images, accent colour, sort order).
- Donations: list + filters + total, "add bank transfer" form, public/anonymous toggle, verified flag.
- No overwriting the total — always computed from verified rows.

## Per-film totals
- Homepage: combined total (general pot + all films). Film page: that film's amount / supporter count.
- Homepage donations go to a "general" pot.
- No per-film goals, percentages or rankings.
- Open question: does film-specific money actually go to that team?

## MVP scope
In:
- Homepage: hero (logo, slogan, intro, ZIEDOT, video facade, battery progress bar), Par mums,
  10 film cards, supporters list, contacts, footer.
- Film page template: title, idea, team, goal, film total, "Atbalstīt filmu", images (placeholders until January).
- Donation flow: presets + custom amount (min €2), optional name + "show publicly", film attribution,
  Montonio checkout + webhook, thank-you page, failed/cancelled page.
- Bank transfer block. Admin. Privacy policy. SEO + OG previews. Responsive. SSL. Backups.
- Cookie banner probably unnecessary (click-to-load no-cookie video, cookieless or no analytics).

Out: news, recurring donations, company donations/invoices, email receipts, bank statement import,
multi-campaign UI, event analytics, per-film goals, user roles, page builder.

## Stack
Laravel + Filament + Blade + Tailwind + Alpine on a small VPS (Hetzner/DigitalOcean), Let's Encrypt,
Cloudflare, Coolify or Ploi. Backups: provider snapshots + daily DB dump.

## Rough costs (paid by FilmuDari)
- Domain filmudari.lv ~€10–20/year
- VPS + backups ~€6–10/month
- Montonio €11.99/month while campaign runs
- Fees: ~600 × €20 donations ≈ €120–200 total
- Total ≈ €20/month + fees, ~€15 upfront

## Next steps
1. Ask friend: reg. number/account holder/board member; earmarking rule; launch month; logo, video link, reference sites.
2. Friend starts Montonio application now.
3. Build 3 prototypes (this repo, `prototypes/`).
4. Friend picks → build MVP against Montonio sandbox → deploy → real €2 test payment → handover screen recording.
