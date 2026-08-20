---
name: Associação Sarando Carapicuíba
description: Warm-ivory editorial ground alternating with near-black full-bleed photograph panels; one signal red, no shadows, square corners.
colors:
  canvas: "#FAF7F5"
  surface: "#FFFFFF"
  panel: "#141110"
  panel-deep: "#241C1A"
  ink: "#1A1413"
  ink-2: "#5A4E4B"
  ink-3: "#766862"
  on-panel: "#FFFFFF"
  on-panel-2: "#A79C98"
  accent: "#E5262C"
  accent-deep: "#B01B22"
  accent-lift: "#F2565A"
  accent-tint: "#FBE4E4"
  rule: "#E4DCD8"
typography:
  display:
    fontFamily: "Lora Variable, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.3rem, 6vw, 4.4rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Lora Variable, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.7rem, 3.6vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Lora Variable, Georgia, Times New Roman, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.15
  lead:
    fontFamily: "Source Sans 3 Variable, system-ui, -apple-system, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Source Sans 3 Variable, system-ui, -apple-system, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    fontFeature: "liga, kern"
  titulo:
    fontFamily: "Lora Variable, Georgia, Times New Roman, serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "normal"
  ui:
    fontFamily: "Source Sans 3 Variable, system-ui, -apple-system, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1
  caption:
    fontFamily: "Source Sans 3 Variable, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Source Sans 3 Variable, system-ui, -apple-system, sans-serif"
    fontSize: "0.70rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  sm: "2px"
spacing:
  espaco-s: "0.8rem"
  espaco-m: "1.2rem"
  espaco-l: "1.6rem"
  gutter: "clamp(1rem, 4vw, 2rem)"
  section: "clamp(2.5rem, 6vw, 4.5rem)"
components:
  section-canvas:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    padding: "{spacing.section} 0"
  section-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.on-panel}"
    padding: "{spacing.section} 0"
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.1rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-deep}"
    textColor: "#FFFFFF"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.1rem"
  button-onphoto:
    backgroundColor: "rgba(255,255,255,0.12)"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.1rem"
  button-onphoto-hover:
    backgroundColor: "rgba(255,255,255,0.22)"
    textColor: "#FFFFFF"
  facts-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "1.25rem 1.4rem"
  facts-card-panel:
    backgroundColor: "rgba(255,255,255,0.06)"
    textColor: "{colors.on-panel}"
    rounded: "{rounded.sm}"
    padding: "1.25rem 1.4rem"
  eyebrow:
    typography: "{typography.label}"
    textColor: "{colors.ink-3}"
  consent-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    padding: "0.9rem 0"
---

# Design System: Associação Sarando Carapicuíba

## Overview

**Creative North Star: "Campo"**

The site is built out of two grounds and nothing else. A warm ivory canvas (#FAF7F5) carries every word the association wants read; a near-black panel (#141110) carries every photograph it wants seen, edge to edge, uninterrupted. A page is a sequence of those two grounds, and the switch between them is the only structural drama the system owns. There is no third ground, no card floating over a texture, no decorated frame — the photograph is the decoration, and it is given the whole viewport width to be it.

The register is warm editorial with an institutional spine. Lora sets every heading with a real serif's weight and a tight negative tracking; Source Sans 3 sets running prose at a generous 1.7 line-height and 65ch measure. Underneath that warmth the system is unusually strict about numbers: dates, CNPJ, agência and conta all render in `tabular-nums`, because they exist to be compared and copied, not admired. This is a small association with no metrics and no institutional documents, so the design's job is to make the few checkable facts it does have — a date, a community, a photograph, a board member's name — look exactly as reliable as they are.

Restraint is enforced, not aspired to. One accent red, inherited from the mark, appearing as a fill or a 2px underline and never as body text. One ornament, the four-tile mosaic, taken from the logo's grid. Zero shadows. Two rounded corners in the entire system, both 2px. Motion is a single 400ms image scale on card hover and a one-pixel underline shift on links, both removed under `prefers-reduced-motion`.

**Key Characteristics:**
- Two grounds, declared per section, never painted per page
- Photography is full-bleed and uninterrupted; text sits on gradient scrims, never on flat colour overlays
- One accent red with three contrast-checked variants for three contexts
- Flat by construction — no `box-shadow` anywhere
- Square corners except two 2px exceptions
- Serif display against humanist sans body; tabular numerals for anything checkable
- A single committed light world; no dark mode

## Colors

A warm, low-chroma ground palette — every neutral is bent slightly toward red-brown, never toward blue — punctuated by one saturated signal red carried over from the mark.

### Primary
- **Signal Red** (`{colors.accent}`): The mark's red. Button fills, the 2px underline under an ação card's CTA, the active and hover border under a nav item, and the four mosaic tiles. Large display type only. At 4.24:1 on canvas it fails as body text, which is why it has two siblings.
- **Deep Signal Red** (`{colors.accent-deep}`): Every accent-coloured word at body size on the ivory canvas (6.51:1) — inline links, prose links, the board member's cargo, the focus ring. Also the primary button's hover fill.
- **Lifted Red** (`{colors.accent-lift}`): The same job on a dark panel (5.60:1), where the deep variant would disappear.
- **Red Wash** (`{colors.accent-tint}`): The palest tint, held in reserve for a large low-contrast fill. Non-text only.

### Neutral
- **Warm Paper Ivory** (`{colors.canvas}`): The default page ground and the reading surface. Also the mobile nav overlay and the consent bar, so both read as part of the page rather than as chrome dropped on top of it.
- **Pure Surface** (`{colors.surface}`): Reserved for the facts card, which lifts off the ivory by being whiter than it — the system's only "raised" surface, achieved without a shadow.
- **Roasted Near-Black** (`{colors.panel}`): The photograph panel and the hero's fallback ground, and the base of every scrim gradient (`rgba(20,17,16,…)`).
- **Coffee Panel** (`{colors.panel-deep}`): The footer, and only the footer. One step warmer and lighter than the panel so the page ends on a different note than its darkest section.
- **Full Ink** (`{colors.ink}`): Body text on canvas (17.07:1).
- **Muted Ink** (`{colors.ink-2}`): Lead paragraphs and secondary prose on canvas (7.50:1).
- **Faded Ink** (`{colors.ink-3}`): Eyebrows, datelines, and definition-list terms (5.01:1). The quietest text allowed.
- **Panel White** (`{colors.on-panel}`): Text on panels and on photographs (18.79:1).
- **Panel Grey** (`{colors.on-panel-2}`): Secondary text and figure captions on panels (7.03:1).
- **Hairline** (`{colors.rule}`): Every 1px border on canvas — the header's bottom edge, the facts card, the ghost button, the consent bar's top edge.

### Named Rules

**The Accent-Is-Not-Text Rule.** Signal Red never sets text at body size. On canvas, accent-coloured body text is Deep Signal Red; on a panel it is Lifted Red. Full-saturation red is for fills, large display type, and non-text marks. This is measured, not stylistic: Signal Red is 4.24:1 on the canvas and fails.

**The Scrim Floor Rule.** Wherever white text sits over a photograph, the scrim beneath it is at least 0.70 opacity of `#141110`. The floor is composited against a worst case of a pure-white photograph, which yields 7.03:1. Below 0.70 the design is betting on the photograph being dark, and nobody can guarantee that at publish time.

**The Anchored Scrim Rule.** A scrim's stops are measured in pixels from the thing they protect, never in percentages of the box they sit in. A percentage stop only holds the floor at the one height it was drawn for: the same gradient measured 0.76 behind the home `h1` and 0.30 behind the shorter `/empresas` one. So `.scrim-texto` starts at the top of a band that begins `5rem` above the hero copy and is already at 0.74 where the copy begins — true for any hero height and any amount of copy — while `.scrim-topo` holds 0.70 for the first 96px, which is the band the inverted header sits in. The card caption scrim runs `0 → 0.72 (45%) → 0.90`, and that 45% stop is placed where the caption's glyph tops land, not where the box starts.

**The Blue-Free Rule.** There is no blue, no cool grey, and no cool black in this palette. Every neutral carries a red-brown bias. A grey that reads cool against the ivory is a defect.

## Typography

**Display Font:** Lora Variable (falling back to Georgia, Times New Roman, serif)
**Body Font:** Source Sans 3 Variable (falling back to system-ui, -apple-system, sans-serif)

**Character:** A bookish, slightly high-contrast serif doing all the talking at the top of the hierarchy, against a plain humanist sans that gets out of the way underneath it. The serif carries warmth and the association's age; the sans carries the practical information — addresses, hours, account numbers — without any pretension at all. Italic Lora appears exactly once, on photo captions.

### Hierarchy
- **Display** (600, `clamp(2.3rem, 6vw, 4.4rem)`, 1.15, -0.02em): The single `h1` per page. Balanced with `text-wrap: balance` and capped at 18ch in the hero so it breaks into two or three deliberate lines rather than a paragraph.
- **Headline** (600, `clamp(1.7rem, 3.6vw, 2.6rem)`, 1.15, -0.015em): Section `h2`. Written as a complete sentence with a full stop — the headings in this system make statements, not labels.
- **Title** (600, 1.25rem, 1.15): Card and sub-section `h3`. Bumps to 1.35rem inside a projeto card's caption, where it sits over a photograph.
- **Lead** (400, 1.125rem, 1.65): The opening paragraph of a page or section, in Muted Ink on canvas and Panel Grey on a panel.
- **Body** (400, 1.0625rem, 1.7): Running prose, capped at 65ch. `text-wrap: pretty` is on globally.
- **Caption** (400, 0.875rem): Card sub-lines, legal lines, the consent bar. In italic Lora for photo `figcaption`s.
- **Label** (600, 0.70rem, 0.14em, uppercase): Eyebrows, datelines, and facts-card terms. The dateline adds `tabular-nums`.

### Named Rules

**The Variable-Name Rule.** The families are `"Lora Variable"` and `"Source Sans 3 Variable"`. `@fontsource-variable` registers those exact names, and writing `"Lora"` or `"Source Sans 3"` fails silently into Georgia and system-ui — a defect that survives to production because the page still looks fine.

**The Self-Hosted Rule.** Fonts are imported from the `@fontsource-variable` packages and served from this origin. No `fonts.googleapis.com` link enters this site: the privacy page promises that nothing third-party loads before the visitor chooses, and a font request would hand over an IP on first paint regardless of the consent bar.

**The Tabular Rule.** Anything a reader might compare, verify, or copy renders in `font-variant-numeric: tabular-nums` — dates, CNPJ, agência, conta, the phone number. The `time` element and the `.tabular` class both carry it globally.

## Layout

Three primitives replace all page-level layout invention.

- **`.wrap`** — `max-width: 1180px`, centred, with `padding-inline: clamp(1rem, 4vw, 2rem)`. Every band of content sits in one.
- **`.bleed`** — full viewport width, for the hero and photograph panels. It contains its own `.wrap` for the text riding on top.
- **`.measure`** — `max-width: 65ch` for running prose.

Vertical rhythm on major sections is `clamp(2.5rem, 6vw, 4.5rem)` of block padding, applied by `.section`, never per page. Local spacing steps are three and only three: `.espaco-s` (0.8rem), `.espaco-m` (1.2rem), `.espaco-l` (1.6rem).

The recurring grids are named in Portuguese, matching the codebase: `.duas-colunas` (prose plus a 340px aside — the facts card, a photograph, or the bank block — collapsing to one column below 900px), `.grade-projetos` (four across on desktop, two on mobile — the portrait grid never drops to one), `.tres-colunas` (three across above 800px), and the page-local `.duas-acoes` (two across above 800px) and `.mosaico` (three 200px columns above 900px, three fluid above 620px, two below).

Breakpoints are ad-hoc by design and chosen per grid rather than from a global scale: 620, 700, 720, 800, 860/861, and 900px. The nav's 860/861 pair is the only one that must stay exact — the mobile overlay and the desktop bar are mutually exclusive at that boundary.

### Named Rules

**The Panel Rhythm Rule.** A section declares itself `.section--canvas` or `.section--panel` and inherits its ground colour, its matching ink tokens, and its vertical padding from the primitive. No page paints a section background of its own. Without this the system dissolves by the third page, which is exactly what it replaced.

**The One Gap Rule.** Two sections on the same ground are one field, so the space between them is one section gap and not the sum of two. `.section--canvas + .section--canvas` and its panel twin drop their top padding; without it a page silently opens a 144px hole wherever two same-ground sections meet.

**The One-Wrap Rule.** Content is never centred or width-limited by a page-local `max-width`. If a new band needs a container, it uses `.wrap` — the string `lg:w-[1024px] xl:w-[1280px] lg:m-auto` copy-pasted across fourteen files is the anti-reference this primitive exists to kill.

## Elevation & Depth

**This system is flat by construction. `box-shadow` does not appear anywhere in it, and none may be added.** Depth is produced three ways, in this order of strength:

1. **Ground switching.** A canvas section against a panel section against a full-bleed photograph. This is the primary z-axis and it works at full page scale.
2. **Hairline rules.** A single 1px `Hairline` border sets the facts card, the ghost button, the header, and the consent bar apart from their ground. On a panel the equivalent is `rgba(255,255,255,0.20)`.
3. **Tonal lift.** The facts card rises off the ivory canvas by being pure white; on a dark panel the same card lifts by being `rgba(255,255,255,0.06)`. A lighter surface, not a cast shadow.

The gradient scrims over photographs are a legibility device governed by The Scrim Floor Rule, not an elevation device. They do not make the photograph recede.

### Named Rules

**The No-Shadow Rule.** No `box-shadow`, no `filter: drop-shadow`, no simulated shadow via a gradient. A component that seems to need one needs either a different ground or a hairline instead.

## Shapes

Square is the default and it is nearly absolute. Photographs, cards, panels, gallery figures, board portraits, nav overlays and the mosaic tiles all have hard 90° corners.

There is exactly one radius token, `{rounded.sm}` at 2px, and it is used in exactly two places: the button and the facts card. At 2px it does not read as "rounded" — it reads as a printed corner that has been trimmed. That is the intent, and it is why there is no `md` or `lg` step to reach for.

Fixed aspect ratios carry more of the form language than corners do: projeto cards crop to **3:4 portrait**, ação cards to **16:10**, board portraits to **1:1** at a maximum of 200px, and the hero to `min(88vh, 780px)`. The mosaic ornament is four 10px squares with a 4px gap, stepping in opacity 0.25 / 0.5 / 0.75 / 1.

### Named Rules

**The Square-Corner Rule.** Nothing new gets a radius. If a component needs to feel softer, it is the wrong component. Pills, capsule buttons, and circular avatars are all outside this system.

## Components

Every component here is **plain-spoken and square**: a legible object rather than a designed one. No ornament, no gradients apart from the scrims, no decorative borders. The mosaic rule is the single permitted flourish, and it appears twice in the whole site.

### Buttons
- **Shape:** Trimmed corner (2px), 1px transparent border so every variant shares one box, `0.7rem 1.1rem` padding, `{typography.ui}`, `line-height: 1`.
- **Primary:** Signal Red fill, white text at `{typography.ui}`. Hover deepens to Deep Signal Red over 160ms. This is the donate/WhatsApp button and it is the only saturated fill on the page.
- **Ghost:** Transparent with a Hairline border and Full Ink text; hover darkens the border to Faded Ink. On a panel it flips automatically to `rgba(255,255,255,0.35)` border and white text, brightening to solid white on hover.
- **On-photo:** `rgba(255,255,255,0.12)` fill with a `rgba(255,255,255,0.55)` border — a glass button that never competes with the primary red beside it in the hero. Hover lifts the fill to 0.22.
- **Focus:** Inherited globally — a 2px Deep Signal Red outline at 3px offset. Never removed, never restyled per component.

### Cards / Containers
- **Projeto card:** 3:4 portrait photograph, square, with a bottom caption scrim carrying the title in `{typography.titulo}` over it, plus a one-line `linha` in caption size below the image. Hovering the card scales the image to 1.03 over 400ms `--ease-out`; the crop does the moving, the frame does not.
- **Ação card:** 16:10 photograph, then an uppercase tabular dateline (`date · comunidade`), then the title, then the 240-character resumo, then a CTA word underlined with a 2px Signal Red border. Two-up on a panel, and in a `.acao--lista` variant on canvas the photograph moves to a 320px left column with the text beside it.
- **Facts card:** The institutional block — Pure Surface on a Hairline border, a definition list with Label-cased terms in Faded Ink and tabular values. Used for CNPJ/endereço/contato on `/quem-somos` and `/empresas`, and for the PIX and bank details on `/doacoes`. Its `--panel` variant carries the same content onto a dark section.
- **Shadow strategy:** None. See Elevation & Depth.

### Photo hero
One component, `PhotoHero.astro`, serves both photo heroes; the pattern used to exist twice with two sets of class names. Full-bleed photograph under a `hero--cheia` (`min(88vh, 780px)`, home) or `hero--curta` (`min(52vh, 460px)`) box, copy bottom-aligned inside a `.wrap`. Two scrims, both governed by The Anchored Scrim Rule: `.scrim-topo` only where the header is inverted, `.scrim-texto` always, bleeding past the wrap on both sides and clipped by the hero. Index and legal pages take the plain canvas hero instead — display heading, no photograph.

### Navigation
- **Header:** Logo plus full association name in 0.95rem Lora on the left, five nav items on the right, 600 weight at 0.95rem, on an ivory ground with a Hairline bottom edge.
- **Inverted variant:** On the home hero the header goes transparent and absolutely positioned, with white text and no border, relying entirely on the hero scrim's 0.75 top stop for legibility. That coupling is why the top stop is 0.75 and not lower.
- **States:** Hover and `aria-current="page"` both draw a 2px Signal Red bottom border. There is no colour change, no background, no weight shift — the underline is the whole state vocabulary.
- **Mobile (≤860px):** A full-screen ivory overlay, not a dropdown. Nav items grow to 1.4rem Lora, body scroll locks, focus moves to the close button on open and back to the toggle on close, and Escape closes it.

### Footer
Coffee Panel ground, a `Contato` heading, contact lines each led by a 1em inline SVG icon, a nav column, and a legal line separated by a `rgba(255,255,255,0.15)` hairline carrying the CNPJ and the build year. Links are undecorated until hover, then underlined.

### Consent bar
Fixed to the bottom, ivory ground, Hairline top edge, one line of caption-size text at 62ch and two buttons (primary Aceitar, ghost Recusar). It is not a modal, does not dim the page, and does not block reading. While it is on screen it publishes its own height as `--consent-h`, which `body` takes as bottom padding and `html` as `scroll-padding-bottom`, so the end of the document and anything the keyboard scrolls to stay above it.

### Section rule (signature)
Four 10px Signal Red squares with a 4px gap, stepping 0.25 / 0.5 / 0.75 / 1 in opacity, `aria-hidden`, with 1.5rem of block margin. Taken from the mark's tile grid. It marks a beat inside a section — after a page's lead paragraph, before a grid — and it is the only ornament in the system.

### Board mosaic (signature)
The `/quem-somos` diretoria grid: square portraits at a hard 200px ceiling, three across, name in 700 weight and cargo in Deep Signal Red caption size beneath. It is the logo's tile grid made literal — a heart assembled out of people — and it is the second and last place the mosaic motif is allowed to appear.

### Named Rules

**The Two-Places Rule.** The mosaic motif lives in exactly two places: the section rule and the diretoria grid. It never becomes an image-crop system, a background pattern, or a loading state — tiling the photographs would fight the premise that they run uninterrupted.

**The Quiet Motion Rule.** The system's entire motion vocabulary is three lines: a 1.03 image scale on card hover (400ms), a button colour transition (160ms), and a 1px link underline offset shift (120ms). No entrance animation, no scroll reveal, no parallax, no counters. `prefers-reduced-motion: reduce` collapses all of it to 0.01ms and turns off smooth scrolling.

## Do's and Don'ts

### Do:
- **Do** declare every new section `.section--canvas` or `.section--panel` and let the primitive supply ground, ink, and padding.
- **Do** use `{colors.accent-deep}` for accent text on canvas and `{colors.accent-lift}` on panels; reserve `{colors.accent}` for fills, large display type, and non-text marks.
- **Do** put every white-on-photograph text block on a scrim of at least 0.70, and anchor the gradient's stops in pixels to the text, so the floor survives a change of hero height or copy length.
- **Do** reach for `.wrap`, `.bleed`, `.measure` and the three `.espaco-*` steps before writing a new layout rule.
- **Do** set dates, CNPJ, agência, conta, and phone numbers in `tabular-nums`.
- **Do** write section headings as complete sentences with a full stop.
- **Do** give every photograph a real `alt` written in PT-BR, and explicit `width`/`height` on the board portraits.
- **Do** let the image move on hover (`scale(1.03)`, 400ms) and leave the frame still.

### Don't:
- **Don't** add a dark mode. The ivory ground and the near-black panels *are* the design, not a light-mode expression of it. Every colour is painted explicitly; no `prefers-color-scheme` branch belongs in this stylesheet.
- **Don't** add a `box-shadow`, anywhere, for any reason. Use a ground change or a 1px `{colors.rule}` hairline.
- **Don't** introduce a second radius step. 2px on buttons and the facts card is the whole vocabulary; everything else is square.
- **Don't** set body-size text in `{colors.accent}` — it measures 4.24:1 on the canvas and fails.
- **Don't** write `"Lora"` or `"Source Sans 3"` in a font stack. The registered names carry ` Variable`, and getting it wrong fails silently into the fallbacks.
- **Don't** link a stylesheet or font from a third-party origin. Fonts are self-hosted, and the consent bar is the only thing permitted to inject an external script — after a click.
- **Don't** re-declare container widths, section padding, grid definitions, or a hero inside a page file. Six page files doing that is what these primitives replaced.
- **Don't** write a raw `font-size` into a component. Every size in the system is a `--text-*` step; a literal is how two near-identical sizes end up doing one job.
- **Don't** add entrance animations, scroll reveals, or parallax. The motion budget is three transitions and it is full.
- **Don't** extend the mosaic motif past the section rule and the diretoria grid.
