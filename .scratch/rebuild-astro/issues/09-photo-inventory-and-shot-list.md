# Photo inventory and shot list

Type: task
Status: resolved
Blocked by: 05

## Question

Which existing photos survive the locked design, and what is missing?

Photos are reused, not reshot — settled while charting — but a photo-led editorial design exposes weak images mercilessly, and the association should know exactly what to point a phone at during the next ação.

- [ ] Audit the ~25 `.webp` files in `static/` against the locked design: resolution, crop, subject, whether they hold up at the sizes the design uses.
- [ ] Flag anything unusable, and decide the fallback for each slot it leaves empty.
- [ ] Confirm the nine board portraits work at the size the new `/quem-somos` uses them.
- [ ] Produce a concrete shot list — subject, orientation, roughly what it is for — that someone can shoot on a phone at the next ação.
- [ ] Check whether photos of identifiable people, especially children, have any consent situation attached. This is a real question in Brazil and nobody has asked it.

The rebuild does not block on new photos. This ticket exists so the gaps are known rather than discovered mid-build.

**From the locked direction (C · Campo):** the design is photography-led with full-bleed dark panels, which raises the bar considerably — images that read acceptably at Gatsby's thumbnail sizes will not survive full-bleed. Audit specifically at hero width, and treat the 3:4 portrait crop the project grid uses as a hard requirement, since most existing photos are landscape.

## Answer

36 `.webp` files audited by dimension and aspect ratio against direction C's actual slots. Summary: **the library survives, with one structural gap and three retirements.**

### The structural gap: nothing is portrait

Direction C's project grid crops to **3:4 portrait**. Not one of the four project images is portrait:

| Projeto | Arquivo | Tamanho | Depois do corte 3:4 | Veredito |
|---|---|---|---|---|
| Capacitação profissional | `capacitacao-profissional.webp` | 640×640 | 480×640 | Justo. Sem folga. |
| Aulas de bateria | `bateria.webp` | 1000×667 | 500×667 | Justo. |
| Jiu-jitsu | `Jiu-jitsu.webp` | 1000×615 | 461×615 | Fraco. |
| Socioeducativo | `socioeducacional.webp` | 800×533 | 400×533 | **Insuficiente.** |

The grid renders around 295 px per column on desktop, so 590 px is the retina target. Cropping landscape to portrait throws away 40 to 50 percent of the width and lands three of the four below that. They will look acceptable and slightly soft. This is the single biggest photographic gap in the rebuild, and it is entirely fixable with a phone held vertically.

### Hero

Only two candidates are large enough for a full-bleed hero: `about.webp` (1920×1080) and `banner.webp` (1620×1080). Both are fine at 1x on a laptop and soft on a large or retina display. **Recommend `about.webp` as the hero** and `banner.webp` as the secondary. A hero replacement at 2400 px or wider is the highest-value single shot on the list.

### Ações

Covers are 4:3 and 3:2, cropping to the 16:10 card is mild and safe. One exception: `actions/acao-2/capa.webp` at **768×576** is the smallest cover and sits under the retina target for a half-width card. Usable, worst of the four.

The Murão gallery is the strongest material in the library: three images at 1024 px, one of them (`murao_1.webp`, 683×1024) is **the only true portrait photograph in the entire library**.

### Retirements

- `iv.webp`, `revisao-de-vidas.webp`, `sage.webp`, `saranossaterra.webp` retire with the church projects.
- `cover-about-us.webp` (2000×299), `cover-volunter.webp` (1440×240), `doacoes.webp` (1280×200) are the old thin page-header strips. Direction C uses full-bleed heroes, not letterbox bands, and a 6.7:1 strip cannot be cropped into anything. **Three images retire with no replacement needed**, because the design no longer has that slot.
- `iv-aula.webp` is referenced by a live page and does not exist. Moot once that page is cut.
- `map.webp` (403×301) is a low-resolution screenshot of Google Maps. Keep for now, but a static map image at that size is poor on any modern display and the footer would be better served by a plain link or a proper embed.

### Board portraits

Nine 1:1 portraits from 374 px (`wn.webp`) to 745 px (`karen.webp`). At the ~180 px display size `/quem-somos` uses, all nine hold. **Do not render them larger than 200 px.** Since these live in `public/` per the schema decision, their `width`/`height` must be written explicitly.

### The logo is a raster file

`logo.webp` is 733×639 pixels. It is the mark on every page, the favicon and the OG image, and it will be rendered at several sizes including inverted white over the hero photograph. **Ask whoever designed it for the vector** (SVG, AI or PDF). This is the cheapest quality win available and it is one message to one person.

### Shot list

Everything below is a phone, held the right way, at an ação or at the sede. In priority order:

1. **Hero, horizontal, 2400 px or wider.** An ação in progress, people visible, with uncluttered space in the lower third where the headline and scrim sit.
2. **Four vertical shots, one per projeto, 1200×1600 or larger.** The activity actually happening, not posed. This closes the structural gap above.
3. **The sede, from the street.** There is no photograph of Av. Celeste, 94 anywhere on the site. For a corporate donor deciding whether an association is real, a photo of the building is worth more than any adjective.
4. **A stronger cover for the Porto de Areia food action**, replacing the 768 px file.
5. **A group photograph of the diretoria**, optional, for `/quem-somos`.
6. **The logo in vector format.** Not a photograph, but it belongs on the same list of asks.

### Routed elsewhere

The consent question is real and unanswered: several photographs show identifiable people, including children, and whether any authorização de uso de imagem exists is unknown. It is a legal question rather than a photographic one, and it is now tracked in the legal-pages ticket alongside image rights. The rebuild does not block on it, but it should not be published on the assumption that it is fine.
