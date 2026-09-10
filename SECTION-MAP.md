# Arolax "Branding Agency" homepage → React component map

Source of truth: Elementor page **#9322**, extracted from `_elementor_data`
(285,970 bytes) in the local WordPress install. Structure below is the real
tree, not a visual guess.

## Design tokens

| token | value | notes |
|---|---|---|
| `--ink` | `#121212` | dominant dark ground (74 uses) |
| `--paper` | `#FFFFFF` | 31 uses |
| `--lime` | `#BAE900` | hero accent |
| `--muted` | `#555555` | body text |
| tints | `#D8E9E4` `#B7C5C1` `#C3B4B4` `#EFEFEF` | per-section surfaces |

**Fonts:** Kanit (display), Instrument Sans (body), Getaway (decorative).
**Type scale (px):** 16, 18, 24, 30, 60, 70, 120, 150, 300, 450.

## Sections

| # | Component | Widgets | Effects |
|---|---|---|---|
| 1 | `Hero` | 6 | char split, fade, text_move, **pin**, spin-text, cursor |
| 2 | `SelectedWork` | 29 | fade, reveal, text_move, text_reveal, **pin**, smooth |
| 3 | `StatsIntro` | 3 | char, reveal, text_reveal, **pin**, smooth |
| 4 | `Services` | 11 | fade, text_reveal, **pin** |
| 5 | `ProcessSteps` | 16 | fade, text_reveal, **pin**, smooth |
| 6 | `ShowcaseImage` | 1 | scale, **pin** |
| 7 | `Testimonials` | 7 | text_reveal, **pin**, spin-text |
| 8 | `Team` | 26 | text_reveal, **pin**, spin-text |
| 9 | `Journal` | 3 | text_reveal, **pin**, spin-text |
| 10 | `CTAFooter` | 3 | text_reveal, **pin**, spin-text |

## Animation parameters (taken from the demo data, not invented)

| setting | occurrences | example |
|---|---|---|
| `aae_anim_s_cus` / `aae_anim_e_cus` | 206 | `top top` → `bottom top` |
| `wcf_pin_area_start/end_custom` | 101 | `top top` → `bottom top` |
| `wcf_enable_cursor_hover_effect_text` | 101 | `View` |
| `spin_text_*` | 38 | `top 50%` → `bottom 30%`, `play none none reverse` |
| `aae_anim_invert_s/e` | 38 | `top 85%` → `bottom center` |
| `wcf-animation` | 22 | `fade` |
| `wcf_text_animation` | 13 | `char` |
| `wcf_enable_pin_area` | 10 | `yes` |
| `wcf-image-animation` | 8 | `reveal` |
| `text_stagger` | 2 | `0.05` |

These map to the hooks in `src/hooks/useGsap.js`:
`useTextReveal`, `useFadeIn`, `usePinned`, `useImageReveal`.

## Widget → component translation

| Elementor widget | count | React treatment |
|---|---|---|
| `wcf--arolax-button` | 35 | `<a className="btn">` |
| `wcf--text` | 18 | `<p>` |
| `wcf--title` | 16 | `<h1>`–`<h3>` + `useTextReveal` |
| `image` / `wcf--image` | 17 | `<img>` + `useImageReveal` |
| `icon-box` | 6 | `ServiceRow` / list item |
| `arolax--video` | 1 | video modal trigger |
| `arolax--testimonial` | 1 | quote block |
| `wcf--brand-slider` | 1 | logo marquee |
| `wcf--posts` | 1 | `Journal` (data prop) |

## Section grounds (verified against computed styles)

Every section is a rounded card: `border-radius: 80px`, `margin-top: -100px`
(Testimonials uses `-150px`), so sections overlap as you scroll.

| # | Component | Ground | Notes |
|---|---|---|---|
| 1 | Hero | `#BAE900` | bg-shape.webp top-right |
| 2 | SelectedWork | `#FFFFFF` | 2-col grid, 30/90 gaps |
| 3 | StatsIntro | `#D9DCED` | "150" at 450px |
| 4 | Services | `#121212` | cards `#1C1C1C`, radius 20, 4-up |
| 5 | ProcessSteps | `#D8E9E4` | 5-col grid + half-circles |
| 6 | ShowcaseImage | `#FFFFFF` | full-bleed, image radius 80 |
| 7 | Testimonials | `#F9F3EE` | rating card `#FDFAF8`, overlap -150 |
| 8 | Team | `#F4E0E0` | 3-up, 80px column gap |
| 9 | Journal | `#FFFFFF` | `posts` prop |
| 10 | CTAFooter | `#D8E9E4` | display line at 150px |

## Scroll behaviour

**Stacked cards.** Every top-level section sets `wcf_enable_pin_area: yes` with
`start "bottom bottom"` (sections 2-3: `bottom bottom-=150`), `end "bottom top"`
and `wcf_enable_pin_area_mobile: "no"`. Each section holds still once its bottom
reaches the viewport bottom, and the next — overlapping by -100px with an 80px
rounded top — scrolls up over it. `hooks/useStackedPin.js` reproduces this with
`pinSpacing: false` (essential: the sections already overlap by margin, so pin
spacers would insert gaps). Pinning is gated to `min-width: 768px` via
`gsap.matchMedia`, matching the demo. The last section stays unpinned so the
footer scrolls in cleanly — 9 pins for 10 sections.

**Smooth scroll.** `hooks/useSmoothScroll.js` uses Lenis in place of the theme's
GSAP ScrollSmoother (`wcf_enable_scroll_smoother`). Lenis and ScrollTrigger
share one clock — `lenis.raf` is driven from `gsap.ticker` and
`ScrollTrigger.update` runs on every Lenis scroll — otherwise pinned sections
jitter because each reads/writes scroll position on a different rAF tick.
`base.css` carries the required `html.lenis` rules.

Both are disabled under `prefers-reduced-motion`.

## Hero video

`components/HeroVideo.jsx` — the `arolax--video` widget. Extracted settings:
border radius 30px, play wrap 80px, icon 16px `#FFFFFF`, border 2px solid
`#FFFFFF` at radius 100%.

`video_thumbnail` is **empty**, and the widget's own custom CSS is
`.video-with-poster img { display: none }` — so the demo shows the video itself
rather than a poster behind a play button. It therefore autoplays muted and
loops, and the control toggles sound first, then pause, which is what a play
button means once footage is already moving. Hidden entirely under
`prefers-reduced-motion`, since autoplay is motion the viewer did not ask for.

## Custom cursor

`components/Cursor.jsx` ports two plugin behaviours:

| source | element | spec |
|---|---|---|
| `adv-cursor.js` | `.wcf-cursor` | 40px ring, 1px solid, radius 100%, z-index 999 |
| `adv-cursor.js` | `.wcf-cursor-follower` | 8px filled dot |
| `cursor-hover-effects.js` | `.wcf-hover-cursor-effect` | 100px black disc, white label text |

Motion matches the source: `gsap.quickTo` x/y at duration 0.6 —
`power4.out` for ring and dot, `expo` for the label; ring/dot grow in on first
mousemove (0.5s `power4.out`), label scales 0→1 on enter and reverses on leave
(0.5s `expo.inOut`). All three are centred with `xPercent/yPercent: -50`.

The plugin binds a handler per widget; here one delegated listener reads
`data-cursor` off the hovered element, so any element opts in by adding the
attribute. The theme does **not** set `cursor: none`, so the native pointer
stays visible — matched deliberately.

Disabled for touch, coarse pointers, widths under 768px and
`prefers-reduced-motion`, and re-evaluated on `matchMedia` change so resizing
into a desktop viewport activates it without a reload.

## Animation implementation note

Reveals use **IntersectionObserver**, not ScrollTrigger. ScrollTrigger derives
start offsets from viewport height at creation and `once: true` self-kills when
created already in view, which silently strands elements at `opacity: 0`;
React StrictMode's double-mount also left duplicate triggers. A 2.5s failsafe
reveals content unconditionally, so nothing can stay invisible. ScrollTrigger
is retained for pinning, where scroll position genuinely matters.

## Layout (Elementor templates)

| file | template | spec |
|---|---|---|
| `layout/Header.jsx` | #13 "Header" | absolute, z-index 2, boxed 1720, padding 32/20; logo 20% / nav 60% / action 20% |
| `layout/Footer.jsx` | #1354 "Footer" | bg `#121212`, boxed 1760, radius 80 top; brand 37.7% / links 62.3%, both padding-top 130; copyright 18px `#999999` |

Menu source: WordPress **"Main Menu"** (Home, About Us, Pages, Blog, Contact —
5 top-level, 37 items). The demo page actually renders **"Mega Menu"**
(Demo / Portfolio / RTL / Home / Pages / Shop — 127 items), which exists to
showcase the theme's 92 demos and is not site navigation. The header's
"Purchase Now" button is likewise ThemeForest marketing; replaced with
"Get in touch".

Other templates left unbuilt: #8558 Header inner, #7259 Header Inner Pages,
#558 Footer Inner Page, #4725 Portfolio Details, #5365 Blog Single,
#6484 Blog Archive, #7258 404.

## Journal data

`data/posts.js` holds the 6 posts imported with the demo (title, slug, date,
category, image). `<Journal>` defaults to them and slices to `limit = 3`,
matching the widget's `posts_per_page: 3` / `post_order: asc`.

Widget styling reproduced from `wcf--posts` settings: `thumb_height` 400px,
title 30px Instrument Sans 600 / 1.22em `#121212`, taxonomy 14px Kanit
uppercase `#555555` (hover `#121212`), `show_date: yes`,
`read_more_text: "Read More"`.

Note the demo filters to term 6, which is the **tag** "Development", while every
post is in the *category* "Design" — a demo-content quirk, not a bug. The data
module simply lists the posts; filter as you need.

To use a CMS, pass your own array: `<Journal posts={fromCms} />`. The shape is
`{ slug, title, date, category, image }`.

## Routes and inner pages

`react-router-dom` v7. `SiteLayout` supplies cursor, header, footer and smooth
scroll to every route; stacked-card pinning stays in `<Home>` since it is
homepage-only.

| route | template | spec |
|---|---|---|
| `/` | page #9322 | Home — 10 stacked sections |
| `/blog` | #6484 | boxed 1290, padding 150/20; title 100px/1.08em (350px) + lede (300px) + 2 counters |
| `/blog/:slug` | #5365 | boxed 1290, padding 110/20; title 100px/1em, 630px meta row (25/23/33%), related grid |
| `/work/:slug` | #4725 | dark hero, title 80px `#FFFFFF` (70%), meta grid gap 25, 4 metrics |
| `/search?q=` | #6518 | boxed 1290, padding 100/20; form (placeholder "Search..."), query centred 60px, message 30px, results grid |
| `/category/:slug` | #6512 | boxed 1290, padding 150/20; title centred 60px/80px (750px) + posts grid |
| `/tag/:slug` | #6512 | same template, "Tag:" heading |
| `/about` | #3304 About Us 01 | intro · stats · who-we-are · pitch · showcase · discipline · dark "Quality team" · CTA · brand strip |
| `/services` | #3331 Service Style 1 | hero · 6 services · pitch · 3 pricing plans · brand strip |
| `/work` | #4307 Work | hero + 2-up project grid + "Load More Works" |
| `/team` | #76 Team Page | hero · 4 stats · member grid · closing quote |
| `/team/:slug` | #1715 Team Details | photo · name/role · bio · Profile links · Follow |
| `/career` | #229 Career | dark hero · values line · dark hiring list · why-join grid |
| `/faq` | #2096 FAQ | hero + 8-item accordion |
| `/contact` | #2474 Contact Us | hero · direct contact column · message form |
| `*` | #7258 | 100vh centred; title 60px/65px, text 18px/26px (381px) |

Portfolio cards on the homepage now link to `/work/:slug`; journal cards to
`/blog/:slug`. Unknown slugs render the 404 template rather than an empty page.

`data/projects.js` carries the 6 homepage projects. The demo imported 11
`arolax-portfolio` items but only 6 have local images.

### Header / footer variants

`SiteLayout` selects chrome by route — one `<Header variant>` rather than three
near-duplicate components.

| variant | template | spec | used on |
|---|---|---|---|
| `overlay` | #13 | absolute, z-index 2, padding 32, cols 20/60/20, "Get in touch" | `/` |
| `inner` | #7259 | in-flow, light ground, padding 29, cols 15/70/15, "Lets Talk" | `/blog`, `/blog/:slug` |
| `dark` | #6033 | `#121212` ground, white logo/nav, padding 32, cols 20/60/20 | `/work/:slug` |

| footer | template | spec | used on |
|---|---|---|---|
| `Footer` | #1354 | `#121212`, boxed 1760, link columns | `/` |
| `FooterInner` | #558 | `#171717`, boxed 1290, CTA "Get started now" @100px, London/New York addresses, mailchimp signup | all inner pages |

#8558 "Header inner" is the same layout as #13, so it gets no variant of its own.

The dark header sits flush against the Portfolio Details hero (measured gap:
-1px, both `rgb(18,18,18)`) so the two read as one surface. Its top padding was
reduced from the template's 220px because the template measures from the
header's baseline while an in-flow header contributes its own height above.

Search filters `data/posts.js` on title + category; the taxonomy archive
matches on category. Both are client-side over the local data module — swap in
a CMS query when one exists. Empty states are handled explicitly rather than
rendering a bare grid.

`components/PostCard.jsx` is the shared `arolax--posts` item, used by the
Journal section and the Blog Archive, Blog Single (related), Search and
Taxonomy pages — one component instead of the five near-copies this would
otherwise be. Category labels link through to `/category/:slug`.

All Elementor templates from the demo are now built, and every nav/footer
destination resolves to a real route (verified: 0 unresolved links).

### Depth of the nav pages

Headings, eyebrows, ledes and section order are extracted from each page's
`_elementor_data`. Where the demo used lorem placeholders or widgets whose
content is not in the page data (pricing tiers, FAQ answer bodies, job
listings, career values), the copy here is written to fit the theme's voice
rather than reproduced — those are marked in each component's header comment.
The large pages (About 61 widgets, Services 52, Team 45, Career 42) are built
from their real section structure but not every nested decorative element.

`components/PageHero.jsx` is the shared opener (light and dark variants);
`data/team.js` and `data/faqs.js` back the team and FAQ pages.

## Not yet done
- Hero video uses the demo's own footage (`arolux-branding-agency-video.mp4`,
  12.5 MB, 1280x720, 20s), downloaded to `public/assets/`. **Licensing:** this
  is CrowdyTheme's demo asset. Fine for local review; replace it with your own
  showreel before shipping.
