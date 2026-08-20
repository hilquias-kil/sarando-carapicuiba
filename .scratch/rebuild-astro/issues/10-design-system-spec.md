# Design system spec

Type: grilling
Status: resolved
Blocked by: 05

## Question

Turn the locked visual direction into a specification the migration can build against without making design decisions.

- The token spine: colour, type scale, spacing, radii, shadows — in the three-layer form `tokens` describes, not a pile of hex values.
- Typography: families and their fallbacks, the scale, and what replaces the current Bebas-Neue-for-everything-display habit.
- The layout primitive that replaces `lg:w-[1024px] xl:w-[1280px] lg:m-auto` repeated in fourteen files.
- The component inventory: header and mobile nav, footer, page hero, ação card, projeto card, board-member card, document/download link, CTA block, quote/epigraph. Each with its states.
- How the warm and institutional layers differ, concretely — same tokens, different usage rules.
- Tailwind configuration: what lands in `theme.extend` vs what stays a utility.

Consult `tokens`, `brief` and `ui-craft`. Resolve by writing the durable brief so the migration session inherits it.

**From the Astro research ticket — this changes the last bullet above.** `@astrojs/tailwind` peers only up to `astro@^5` and is unusable on Astro 7, so the rebuild is `@tailwindcss/vite` + **Tailwind 4**. There is no `tailwind.config.js`: theme configuration is CSS-first via `@theme`, and some v3 utility names have changed. Write the token spine directly as Tailwind 4 `@theme` variables rather than as a `theme.extend` object.

**From the locked direction (C · Campo):** the palette, type pairing and panel rhythm are in that ticket's answer — formalise them as the Tailwind 4 `@theme` spine. Three things it explicitly hands to this ticket: (1) decide whether the **logo's mosaic tile motif** earns a place in C, or is deliberately dropped — it is the most distinctive device the brand owns and direction C does not currently use it; (2) fix minimum **scrim opacity** for white text over photographs and a solid fallback for the inverted hero nav, verified against APCA rather than assumed; (3) specify the alternating ivory/dark panel rhythm as a real layout primitive, since it is the system's signature and will otherwise be re-invented per page.

## Answer

The prototype's palette was checked with real contrast math, not by eye, and **three defects were found and fixed** before anything got written down. Details in "Contrast, measured" below.

### Token spine — Tailwind 4 `@theme`

No `tailwind.config.js`. Everything is CSS-first in the global stylesheet.

```css
@import "tailwindcss";

@theme {
  /* ground */
  --color-canvas:      #FAF7F5;  /* warm off-white, the default page ground */
  --color-surface:     #FFFFFF;  /* cards, facts blocks */
  --color-panel:       #141110;  /* warm near-black, full-bleed photo + ação panels */

  /* ink on canvas */
  --color-ink:         #1A1413;  /* body            17.07:1 */
  --color-ink-2:       #5A4E4B;  /* secondary        7.50:1 */
  --color-ink-3:       #766862;  /* eyebrows, datas  5.01:1  (was #8A7C78, failed at 3.76) */

  /* ink on panel */
  --color-on-panel:    #FFFFFF;  /*                 18.79:1 */
  --color-on-panel-2:  #A79C98;  /* secondary        7.03:1 */

  /* brand */
  --color-accent:      #E5262C;  /* fills, large text, non-text only on canvas */
  --color-accent-deep: #B01B22;  /* ALL body-size accent text on canvas  6.51:1 */
  --color-accent-lift: #F2565A;  /* accent text on dark panels           5.60:1 */
  --color-accent-tint: #FBE4E4;

  --color-rule:        #E4DCD8;

  /* type */
  --font-display: "Lora", Georgia, "Times New Roman", serif;
  --font-body: "Source Sans 3", system-ui, -apple-system, sans-serif;

  --text-eyebrow: 0.70rem;   --text-eyebrow--letter-spacing: 0.14em;
  --text-small:   0.875rem;
  --text-body:    1.0625rem; --text-body--line-height: 1.7;
  --text-lead:    1.125rem;
  --text-h3:      1.25rem;
  --text-h2:      clamp(1.7rem, 3.6vw, 2.6rem);
  --text-h1:      clamp(2.3rem, 6vw, 4.4rem);

  --radius-sm: 2px;   /* buttons, facts blocks. Sharp. Not rounded-lg. */

  --ease-out: cubic-bezier(0.22, 0.61, 0.36, 1);
}
```

Display face is Lora at 600, tracking `-0.015em` above 24px, `text-wrap: balance` on every heading. Body is Source Sans 3 at 1.7 line height with `text-wrap: pretty`. `font-variant-numeric: tabular-nums` on every date, on the CNPJ and on the phone number.

### Contrast, measured

Worst-case WCAG ratios, computed rather than assumed. Three fixes are baked into the tokens above:

1. **`--color-ink-3` was `#8A7C78` at 3.76:1 and failed.** It carries eyebrows, datelines and captions, all small text. Darkened to `#766862`, now 5.01:1.
2. **The brand red fails as body text on ivory.** `#E5262C` on `#FAF7F5` is **4.24:1**, under the 4.5 floor. So the rule is: the full-saturation red is for fills, large display text and non-text only; **every body-size accent text on canvas uses `--color-accent-deep` (6.51:1)**. This is the rule most likely to be broken later, so it is stated as a rule and not a preference.
3. **The brand red fails on the dark panel too**, at 4.16:1. On panels, accent text uses `--color-accent-lift` `#F2565A` (5.60:1). Full-saturation red on dark is fills only.

White on `#E5262C` is 4.52:1, which passes but with no margin. Button labels stay at 600 weight and 0.98rem or larger, and the hover state `--color-accent-deep` improves it rather than degrading it.

### The scrim, specified numerically

The hero and the project captions put white text over uncontrolled photography, so the scrim is a contrast device and not a mood device. Composited against a **worst case of a pure white photograph**:

| Scrim alpha over `#141110` | Effective bg | White text |
|---|---|---|
| 0.55 | rgb(126,124,124) | 4.15:1 fails |
| 0.60 | rgb(114,112,112) | 4.91:1 |
| **0.70** | rgb(91,88,88) | **7.03:1** |
| 0.80 | rgb(67,65,64) | 10.20:1 |

**Rule: wherever white text sits on a photograph, the scrim is at least 0.70.** Below that the design depends on the photograph being dark, which is not a thing anyone can guarantee at publish time.

The hero gradient is therefore `linear-gradient(180deg, rgba(20,17,16,0.75) 0%, rgba(20,17,16,0.15) 38%, rgba(20,17,16,0.88) 100%)`. Note the **top** stop is 0.75, not decorative: the inverted nav sits there. There is no separate solid fallback; the top stop is the fallback.

Project card captions use a bottom-anchored gradient reaching 0.85 where the text sits.

### The mosaic motif: kept, in exactly two places

Direction C did not use the logo's tile grid, and the choice was flagged so it would be made rather than defaulted. **Decision: keep it, structurally, twice.**

1. **As the section rule.** Where a divider is needed, use a short row of four squares stepping in opacity (0.25 / 0.5 / 0.75 / 1) in the accent, not a hairline. It is the one ornament in the system and it comes from the mark.
2. **As the `/quem-somos` diretoria grid.** Nine board members in a square photo grid, which is the logo's meaning made literal: a heart assembled from people. This is where it earns the most and costs nothing.

**Not** as an image-crop system. Tiling the photography would fight direction C's entire premise, which is that photographs run full-bleed and uninterrupted.

### Layout primitives

Three, replacing the `lg:w-[1024px] xl:w-[1280px] lg:m-auto` string repeated across fourteen files:

- **`.wrap`** — `max-width: 1180px; margin-inline: auto; padding-inline: clamp(1rem, 4vw, 2rem)`. The default.
- **`.bleed`** — full viewport width, used by hero and dark panels. Contains its own `.wrap` for text.
- **`.measure`** — `max-width: 65ch` for running prose.

**The panel rhythm is a primitive, not a per-page decision.** The site alternates quiet canvas sections against `--color-panel` full-bleed sections. A page defines its sections as `canvas` or `panel` and the primitive handles ground colour, the ink tokens that go with it, and vertical padding. Without this, every page re-invents the rhythm and the system dissolves within three pages.

Vertical rhythm: `clamp(2.5rem, 6vw, 4.5rem)` block padding on major sections. Editorial density, low.

### Component inventory

| Component | Notes |
|---|---|
| Header / nav | Two states: **inverted** over the hero photograph (home only), **solid canvas** everywhere else. Five items. Mobile: full-screen overlay, the existing pattern works. |
| Footer | Dark `#241C1A`. Address, WhatsApp, email, Instagram, CNPJ, nav, privacy link. No LinkedIn, no Facebook. |
| Page hero | Two variants: **photo hero** (bleed + scrim ≥0.70, home and `/empresas`), **plain hero** (canvas, display heading, no photo) for legal and index pages. Replaces the old thin banner strips, which retire with their images. |
| Ação card | 16:10 image, dateline in `tabular-nums`, título, resumo. Two-up on panel, list on canvas. |
| Projeto card | **3:4 portrait** image, caption gradient to 0.85, título. Four-up desktop, two-up mobile. |
| Board member | Square photo, nome, cargo. Explicit `width`/`height`, never rendered above 200px. Arranged as the mosaic grid. |
| Facts block | `--color-surface` on 1px `--color-rule`, definition list, `tabular-nums`. Carries CNPJ, endereço, WhatsApp, email. Used on `/empresas` and `/quem-somos`. |
| Participation block | The shared "como participar" component. One instance, four project pages. Sede, gratuito, aberto a todos, WhatsApp. |
| CTA block | One label per intent, from the voice guide's five. |
| Section rule | The four-tile mosaic device. |

### Warm and institutional, concretely

Same tokens throughout. The difference is usage, and it is three rules, not a second palette:

1. **Panel frequency.** Community pages alternate canvas and photo panels freely. `/empresas`, `/quem-somos` and the legal pages stay on canvas, with at most one panel.
2. **Photograph size.** Community pages run photographs full-bleed. Institutional pages keep them contained within `.wrap`.
3. **Facts density.** Institutional pages carry the facts block high on the page. Community pages carry it in the footer only.

### Motion

Editorial knob, low. Project card image `transform: scale(1.03)` over 400ms `--ease-out` on hover, and inline link underline shifts. Nothing else. No entrance animation, no scroll reveal, no parallax. `prefers-reduced-motion: reduce` removes all of it.

### Theme

**Single committed light world. No dark mode.** The ivory ground and the near-black panels are the design, not a light-mode expression of it. Every colour is painted explicitly so the pages hold on any host background.
