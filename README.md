# Brandfirst Media

Website for **Brandfirst Media**, a media and brand communications agency in
Lagos, Nigeria.

```bash
npm install
npm run dev           # http://localhost:5173
```

## What this is

Copy and page structure come from `BrandfirstMedia-Website-Content.md`
(the client content document, marked *"Draft for client review"*). The visual
system is a React rebuild of the Arolax WordPress theme's Branding Agency demo,
reconstructed from its Elementor data — see [SECTION-MAP.md](SECTION-MAP.md)
for the extracted values and template mapping.

**Routes** follow the navigation the content document specifies:

| route | content |
|---|---|
| `/` | hero, intro, six services, why-us, industries, work preview, insights, CTA |
| `/about` | overview, philosophy, mission, vision, five values |
| `/services` | six services, each with body and "what this includes" |
| `/work` | placeholder case studies + the case-study format |
| `/insights` | intro + eight suggested article topics |
| `/contact` | contact details + the seven specified form fields |

All copy lives in [`src/data/site.js`](src/data/site.js) — edit there, not in
components.

## Still needed from the client

The content document leaves these open, and nothing has been invented to fill
them:

- **Phone and email** — marked `[Add phone number]` / `[Add email address]`.
  `site.phone` and `site.email` are `null`; the contact page and footer omit
  them rather than showing fake numbers.
- **Case studies** — `/work` shows the five placeholder titles from the
  document plus the case-study format (client, sector, challenge, solution,
  channels, results). Real projects drop into `work.placeholders`.
- **Insight articles** — the document lists eight *topics*, not written pieces.
  They render as planned subjects marked "Article in preparation".
- **Logo** — none supplied, so the header and footer use a text wordmark.
- **Photography** — see Assets.

## Assets and licensing — read before deploying

`public/assets/` still contains **CrowdyTheme's demo photography and video**
from the original theme, including the 12 MB hero showreel. They are placeholders so the build renders during
development, and they are **not licensed for production use**. Replace them
with Brandfirst Media's own imagery before launch.

Fonts: the original theme's faces could not be used — **Beatrice Trial** is an
evaluation-only licence and **Getaway** carries no licence metadata at all.
This build uses Kanit, Instrument Sans and DM Serif Display, all OFL. See
[FONTS.md](FONTS.md).
