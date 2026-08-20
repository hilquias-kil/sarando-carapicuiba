# Lock the visual direction

Type: prototype
Status: resolved
Blocked by: 04

## Question

What does the site actually look like?

The register is settled — warm editorial, photo-led, with an institutional layer on the donor and transparência pages — but that describes a family of designs, not one. Build **two or three real directions in code**, on the actual homepage content and real photos from `static/`, and react to them together. Then lock one.

Constraints:

- The existing logo is fixed. Everything else — palette, type, spacing, components — is open.
- The current brand reads as three unrelated brands at once: `red-800`, `amber-100` and `cyan-800`, plus 70% overlays, plus Bebas Neue for display. Whatever replaces it has to be one system.
- Every page repeats a hardcoded `lg:w-[1024px] xl:w-[1280px] lg:m-auto` container. The new system needs a real layout primitive.
- Warm for the community-facing pages, restrained for the pages a CSR analyst reads.
- Photography is the main asset and the design should lean on it — but see the photo inventory ticket: some of what exists is weak.

Consult `ui-craft` and `ui-craft-editorial`; run the copy in the prototypes through `unslop` even though it is placeholder. Link the prototype as an asset in the answer, and record *why* the winning direction won — the next ticket turns that into tokens.

**From the IA ticket:** the home page structure to prototype against is hero → what the association does → the four projects → the ações strip (dated, photographed) → split CTA (empresas | doar | voluntariar) → footer, leading with the community rather than the pitch. The header carries five items: Quem somos · Projetos · Ações · Doações · Para empresas. `/empresas` is the institutional-register page and should be prototyped alongside the home page, since the warm/institutional split is the hardest part of the direction to get right.

## Answer

**Direction C — "Campo" — is locked.** Photography carries the site; type recedes and stays quiet.

Prototype (all three directions, for the record): <https://claude.ai/code/artifact/e4e3a3f7-cade-42f6-a006-56d06923d4e3> — built on the association's real photos and real institutional facts, with provisional copy.

### Why C won

It is the direction that makes the association's actual asset — photographs of real work in real communities — do the persuading. With no impact metrics and no institutional documents, the photographs and the dated ações are most of what the site has to be credible with, and C is the only one of the three that treats them as the argument rather than as illustration.

### The system, as prototyped

**Palette** (single committed light world; no dark-mode variant):

| Token | Value | Role |
|---|---|---|
| canvas | `#FAF7F5` | warm off-white ground |
| panel-dark | `#141110` | warm near-black, full-bleed photo and ação panels |
| accent | `#E5262C` | the logo red, full saturation |
| accent-deep | `#B01B22` | hover/pressed |
| ink | `#1A1413` | body text |
| ink-2 | `#5A4E4B` | secondary |
| ink-3 | `#8A7C78` | eyebrows, datelines, captions |
| rule | `#E4DCD8` | hairlines, card borders |

Deliberately **not** the cream-and-terracotta palette a warm editorial page defaults to — the accent is brand-mandated and louder, and the ground is warmed off-white rather than cream.

**Type:** Lora 600 for display, Source Sans 3 for body and UI. Two families, no Inter. Tracking slightly negative on large display; `tabular-nums` on all dates and the CNPJ.

**Composition:** full-bleed hero with the nav inverted over the photograph and a **gradient scrim** — explicitly replacing the flat 70% colour overlay the current Gatsby site uses in three places. Then an alternating rhythm: quiet ivory text sections against full-bleed dark photo panels. Projects are a four-up portrait (3:4) grid with gradient caption blocks; ações are a two-up on the dark panel with datelines; `/empresas` is ivory with a bordered facts card holding CNPJ, address, WhatsApp and email.

**Motion:** minimal, per the editorial knobs — a 400ms image scale on project hover and nothing else. `prefers-reduced-motion` cuts it.

### Carried forward, unresolved

- **The mosaic motif is not in C.** Direction A rebuilt the logo's heart out of photographs; C does not use the tile grid at all. Whether it earns a place in C — as section rules, as an image-crop system, or on the `/quem-somos` board grid — is an open question for the design system spec. It is the most distinctive device the brand owns, and dropping it entirely is a real loss worth reconsidering deliberately rather than by omission.
- **Contrast on photographic panels.** White text over photographs is only as accessible as the scrim makes it. The spec must fix minimum scrim opacity and a solid fallback for the inverted nav, and verify against APCA rather than assuming.
- **The design leans hard on photo quality**, which sharpens the photo inventory ticket: soft images that survived at thumbnail size will not survive full-bleed.
