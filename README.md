# Arolax → React

A React rebuild of the **Arolax "Branding Agency"** WordPress demo (ThemeForest,
CrowdyTheme), reconstructed from the theme's Elementor data rather than by eye.

```bash
npm install
npm run fetch:video   # optional: hero showreel, 12 MB, see Assets below
npm run dev           # http://localhost:5173
```

## What this is

The original is a WordPress theme: Elementor plus ~113 PHP widgets across two
plugins. This is a standalone React app with no WordPress dependency. Layout
values, colours, type scale, animation parameters and copy were extracted from
`_elementor_data` in a local WordPress install, so the numbers are the theme's
own rather than approximations.

- **15 routes** — home, blog archive/single, work/portfolio detail, about,
  services, team + detail, career, FAQ, contact, search, taxonomy, 404
- **GSAP** for reveals and stacked-card pinning, **Lenis** for smooth scroll
- **React Router** v7, **Vite** 6

See [SECTION-MAP.md](SECTION-MAP.md) for the full template-to-component mapping,
extracted values, and what is still outstanding.

## Assets and licensing — read before deploying

`public/assets/` contains **CrowdyTheme's demo photography, logos and video**.
They are here so the build renders during development. They are *not* licensed
for your production site. Replace them with your own before shipping.

The hero video is excluded from git (12 MB, replaceable); `npm run fetch:video`
pulls it from the vendor's server.

Fonts are a separate matter with a real licence trap in the original theme —
see [FONTS.md](FONTS.md). Short version: the demo uses **Beatrice Trial**
(evaluation-only licence) and **Getaway** (no licence metadata at all). Neither
ships here. This build uses Kanit, Instrument Sans and DM Serif Display, all
OFL.

## Content still needing your words

Structure and voice are faithful to the demo, but several widgets held lorem or
vendor-specific placeholder content. Pricing tiers, job listings, FAQ answer
bodies and career values were written to fit rather than extracted — each is
marked in its component's header comment. Team members 4–6 are invented; the
demo supplied three.
