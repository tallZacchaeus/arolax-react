# Fonts — what the demo uses, what this build uses, and why they differ

## What the Arolax demo actually uses

Counted across every extracted Elementor template and page:

| family | uses | where |
|---|---|---|
| Kanit | 212 | display type throughout |
| **Beatrice Trial** | **107** | About, Services, Career, Contact, FAQ |
| Instrument Sans | 45 | body copy, post titles |
| oak_suns | 9 | Blog Single |
| **Getaway** | **4** | hero headline, "Pro", closing CTA |
| Roboto / DM Sans / Teko / Plus Jakarta Sans | 1–4 | incidental |

## The two that cannot ship

**Beatrice Trial** — `BeatriceTRIAL-*.ttf`, embedded metadata reads:

> © 2022, Sharp Type Co. All rights reserved. Beatrice Trial …
> See sharptype.co/licensing/ for applicable End User License Agreement.

Trial cuts are for evaluation and mockups. Deploying one to a public site is a
licence violation. The theme ships these inside its demo content, so anyone who
imports the demo and launches inherits the problem.

**Getaway** — `getaway.otf` carries **no copyright, licence, foundry or designer
metadata at all**; the only string is `Fontself Maker 3.5.7`, the tool used to
build it. Unknown provenance. Not safe to assume redistribution rights.

Note Getaway is not a decorative accent: its four uses are the **largest type on
the site** — the hero headline "We sharp brand Value", the "Pro" badge, and the
closing "Let's work together".

Getaway is a **heavy, condensed, high-contrast display serif** — a Didone-ish
fashion face, *not* a geometric sans. Its OS/2 metrics (x-height 0.483em, cap
0.734em, `H` advance 0.64em, weight 400, width class 5) do not reveal that;
only rendering it does.

## What this build uses instead

| role | face | stands in for | licence |
|---|---|---|---|
| `--font-display` | **Kanit** | Kanit (the demo's own, 212 uses) | OFL |
| `--font-body` | **Instrument Sans** | Instrument Sans (the demo's own) | OFL |
| `--font-hero` | **DM Serif Display** | **Getaway** | OFL |

Kanit and Instrument Sans are not substitutions — they are what the demo uses.
`--font-hero` is the substitution, applied to exactly the four places Getaway
was used: `.hero__headline`, `.hero__pro`, `.cta__eyebrow`, `.cta__line`.

### Why DM Serif Display

Measured against Getaway, same string at 100px:

| face | line width | vs Getaway |
|---|---|---|
| Getaway | 929px | — |
| **DM Serif Display** | 956px | **+2.9%** |
| Playfair Display | 974px | +4.8% |
| Abril Fatface | 1007px | +8.4% |
| Bodoni Moda | 1010px | +8.7% |
| Prata | 1062px | +14.3% |
| Fraunces (opsz 144) | 838px | −9.8% |
| Instrument Serif | 729px | −21.5% |

DM Serif Display is closest on width, comparable in weight and stroke contrast,
and single-weight like the original — so it drops in without reflowing the
hero's line breaks.

**Beatrice Trial is still substituted by Kanit** on the inner pages. Given the
trial licence blocks production use either way, matching it was not worth
pursuing; pick a licensed text face when you choose one.

## If you want the demo's exact type

1. **Beatrice** — buy a web licence from [Sharp Type](https://sharptype.co/licensing/),
   then self-host the licensed webfonts and point `--font-display` at it.
2. **Getaway** — identify it first. Given the missing metadata, treat the bundled
   file as unusable until you can name the foundry and buy a licence. A wide
   geometric display face is the closest category.
3. Self-hosting either way: drop `.woff2` files in `public/assets/fonts/`, add
   `@font-face` rules, and update the tokens in `src/styles/tokens.css`.
