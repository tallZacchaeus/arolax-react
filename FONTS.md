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

## What this build uses  *(updated — the demo's own fonts are now in use)*

| token | face | where | licence |
|---|---|---|---|
| `--font-hero` | **Getaway** | hero headline, both CTA lines, wordmarks | unknown — see below |
| `--font-inner` | **Beatrice Trial** | inner-page display type | Sharp Type TRIAL |
| `--font-display` | **Kanit** | homepage section titles | OFL |
| `--font-body` | **Instrument Sans** | body copy | OFL |

Getaway and Beatrice are **self-hosted** from `public/assets/fonts/`, declared
in `src/styles/fonts.css`. Weights match the demo: Getaway 400, Beatrice 400
and 500.

### These font files are gitignored

`public/assets/fonts/` is excluded from git. Using a trial font locally is one
thing; committing it to a public repository is redistribution, which is the
part a foundry actually pursues. The files stay on disk and in any build you
deploy, but never enter version control.

Copy them in from the WordPress install:

```bash
mkdir -p public/assets/fonts
cd ../wp-local/site/wp-content/uploads/2024/06
cp getaway.otf               ../../../../../arolax-react/public/assets/fonts/Getaway-Regular.otf
cp BeatriceTRIAL-Regular.ttf ../../../../../arolax-react/public/assets/fonts/BeatriceTrial-Regular.ttf
cp BeatriceTRIAL-Medium.ttf  ../../../../../arolax-react/public/assets/fonts/BeatriceTrial-Medium.ttf
```

Each `font-family` stack falls back to Kanit or DM Serif Display, so a checkout
without the files renders readable rather than broken.

### The licence position has not changed

Using these faces on a public Brandfirst Media site still carries the risk
described above: Beatrice Trial is an evaluation cut, and Getaway's provenance
is unknown. Buying a Beatrice web licence from Sharp Type clears half of it;
identifying Getaway's foundry clears the other half. That is a decision for the
client, made knowingly.

## If you want the demo's exact type

1. **Beatrice** — buy a web licence from [Sharp Type](https://sharptype.co/licensing/),
   then self-host the licensed webfonts and point `--font-display` at it.
2. **Getaway** — identify it first. Given the missing metadata, treat the bundled
   file as unusable until you can name the foundry and buy a licence. A wide
   geometric display face is the closest category.
3. Self-hosting either way: drop `.woff2` files in `public/assets/fonts/`, add
   `@font-face` rules, and update the tokens in `src/styles/tokens.css`.
