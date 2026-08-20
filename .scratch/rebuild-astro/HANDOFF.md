# Migration handoff spec: Gatsby to Astro

**This is the destination of the map.** Everything here is decided. A session executing this spec should not need to make a design, content, IA or infrastructure choice; where a judgement call remains, it is marked **OPEN** and named explicitly.

Read this document first, then the three it points at:

| Artefact | What it holds |
|---|---|
| [copy/copy-deck.md](copy/copy-deck.md) | Every word of PT-BR copy, all frontmatter, all titles and meta descriptions |
| [research/astro-capabilities.md](research/astro-capabilities.md) | The Astro 7 API facts, verified against source and registry, plus 14 sharp edges |
| [research/doacoes-empresas-brasil.md](research/doacoes-empresas-brasil.md) | The Brazilian corporate-giving law behind the `/empresas` copy |

Prototype of the locked design: <https://claude.ai/code/artifact/e4e3a3f7-cade-42f6-a006-56d06923d4e3> (direction **C, "Campo"**).

---

## 1. What you are building

A static Astro 7 site at `sarandocarapicuiba.org`, replacing the Gatsby 5 site in place, on the same Netlify account, the same domain and the same GA4 property. Seventeen URLs. Two content collections plus one JSON data file. No CMS, no forms, no SSR, no client-side framework.

Fifteen of those seventeen URLs already exist and **keep their exact addresses**. That is the cheapest possible SEO outcome and it is the reason the redirect table is three lines long.

### What is not being migrated

- **`/projetos/instituto-de-vencedores` and `/projetos/revisao-de-vidas`.** The two church-linked projects are retired, not ported. Their pages are deleted and 301'd to `/projetos`. Their copy stays recoverable in git history. Their images (`iv.webp`, `revisao-de-vidas.webp`) do not move.
- **`/termo-e-condicoes`.** Never existed, 404s today, and the footer link is removed rather than a boilerplate page written for a site with no accounts and no transactions.
- **The volunteer Google Form.** Verified closed. WhatsApp is the only volunteer path.
- **The apoiadores strip** on `/doacoes` (Sage, Sara Nossa Terra), both linking to `#`.
- **The "Prestação de contas" section** on `/doacoes`, which says "em breve..." and has nothing behind it.
- **The three dead document links**: estatuto social on `/quem-somos`, and both termos de doação on `/doacoes`. They are `href="#"` today. They come back the day the documents exist, on a `/transparencia` page that does not exist yet.
- **Everything in the map's Out of scope section**: logo redesign, a CMS, i18n, payment integration, an impact-measurement programme, and any change to hosting, domain or the analytics property.

---

## 2. Before you start

Four things must be true. None of them is code.

1. **You are on Node 22.12.0 or newer.** Astro 7's engine floor. Netlify's default build image may be older and fails confusingly.
2. **You have write access to the Netlify site and to the GA4 property** `G-6N23FX10H6`. The launch checklist has steps in both consoles.
3. **You have read the copy deck.** Not skimmed. The copy carries constraints that look like prose and are not: the tax paragraphs on `/empresas`, the retention number on the privacy page, the participation block's refusal to invent a schedule.
4. **You are working on a branch, not on `main`.** The current site is live and this is a full replacement.

---

## 3. Repo surgery

### Delete

```
src/pages/                    all 15 .tsx pages
src/components/               all of them, they are React
src/actions.json              replaced by the acoes collection
gatsby-config.ts
gatsby-browser.ts
tailwind.config.js            Tailwind 4 is CSS-first, this file has no successor
postcss.config.js
.eslintrc.json                optional, but it is configured for React
```

`static/` empties out as its files move (section 7). `src/images/` goes too, once the favicon set is regenerated.

### Keep

```
.git                          the history is where the retired pages live
.gitignore                    add dist/ and .astro/
README.md                     rewrite it, do not delete it
tsconfig.json                 replace contents, keep the file
```

### The dependency swap

Every Gatsby, React, MDX and PostCSS package goes. The replacement set is six runtime dependencies and two dev.

```json
{
  "name": "sarando-carapicuiba",
  "type": "module",
  "private": true,
  "engines": { "node": ">=22.12.0" },
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check"
  },
  "dependencies": {
    "@astrojs/sitemap": "^3.7.3",
    "@fontsource-variable/lora": "^5.3.0",
    "@fontsource-variable/source-sans-3": "^5.3.0",
    "@tailwindcss/vite": "^4.3.3",
    "astro": "^7.2.4",
    "tailwindcss": "^4.3.3"
  },
  "devDependencies": {
    "@astrojs/check": "^0.9.10",
    "typescript": "^5.9.0"
  }
}
```

All versions verified against the npm registry. Three deliberate absences, each of which reverses something the research doc suggested:

- **No `@astrojs/mdx`.** Dropped when the content model was settled: one ação has a gallery and one projeto has body images, and frontmatter plus relative Markdown images covers both. Dropping it also sidesteps Astro 7's Markdown engine change, where `@astrojs/mdx@7` peers on `@astrojs/markdown-satteri`.
- **No `@astrojs/netlify`.** See section 8. With a fully static build, no SSR and no forms, the adapter's only job here would be emitting three redirect rules, and a hand-written `public/_redirects` does that with one fewer moving part and without the append behaviour that is sharp edge #3.
- **No framework integration.** No React, no Preact, no islands. The only interactive things on the site are a mobile nav toggle and a consent bar, both of which are a `<script>` tag.

**Fonts are self-hosted, not loaded from Google Fonts.** This is a decision, not a preference: the privacy policy tells the reader that nothing loads before they choose, and a `fonts.googleapis.com` request hands Google the visitor's IP on first paint regardless of the consent bar. Self-hosting also removes a render-blocking third-party request from a photo-led site whose LCP is already a full-bleed image.

### `astro.config.mjs`

```js
// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sarandocarapicuiba.org',
  output: 'static',

  // Both are Astro defaults and both match what Gatsby served.
  // Changing either rewrites every indexed URL. Do not.
  trailingSlash: 'ignore',
  build: { format: 'directory' },

  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },

  integrations: [
    sitemap({ filter: (page) => !page.includes('/404') }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  // NO `redirects` block. Without an adapter it emits meta-refresh pages,
  // which are not 301s. Redirects live in public/_redirects. See section 8.
});
```

### `netlify.toml`

Does not exist in the repo today. Create it.

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22.12.0"
```

Add `.nvmrc` containing `22.12.0` as well, so local and CI agree.

---

## 4. The design system

Locked in the design-system spec ticket. Contrast was computed, not eyeballed, and three defects in the prototype palette were fixed there. **Do not re-derive these values from the prototype; the prototype has the old ones in three places.**

### Token spine

One file, `src/styles/global.css`, imported once from the base layout. There is no `tailwind.config.js` in Tailwind 4.

```css
@import "tailwindcss";
@import "@fontsource-variable/lora";
@import "@fontsource-variable/source-sans-3";

@theme {
  /* ground */
  --color-canvas:      #FAF7F5;
  --color-surface:     #FFFFFF;
  --color-panel:       #141110;
  --color-panel-deep:  #241C1A;  /* the footer ground, which the inventory already named */

  /* ink on canvas */
  --color-ink:         #1A1413;  /* 17.07:1 */
  --color-ink-2:       #5A4E4B;  /*  7.50:1 */
  --color-ink-3:       #766862;  /*  5.01:1 */

  /* ink on panel */
  --color-on-panel:    #FFFFFF;  /* 18.79:1 */
  --color-on-panel-2:  #A79C98;  /*  7.03:1 */

  /* brand */
  --color-accent:      #E5262C;  /* fills, large text, non-text ONLY */
  --color-accent-deep: #B01B22;  /* all body-size accent text on canvas, 6.51:1 */
  --color-accent-lift: #F2565A;  /* accent text on dark panels, 5.60:1 */
  --color-accent-tint: #FBE4E4;

  --color-rule:        #E4DCD8;

  /* type */
  --font-display: "Lora Variable", Georgia, "Times New Roman", serif;
  --font-body: "Source Sans 3 Variable", system-ui, -apple-system, sans-serif;

  --text-eyebrow: 0.70rem;   --text-eyebrow--letter-spacing: 0.14em;
  --text-small:   0.875rem;
  --text-body:    1.0625rem; --text-body--line-height: 1.7;
  --text-lead:    1.125rem;
  --text-h3:      1.25rem;
  --text-h2:      clamp(1.7rem, 3.6vw, 2.6rem);
  --text-h1:      clamp(2.3rem, 6vw, 4.4rem);

  --radius-sm: 2px;

  --ease-out: cubic-bezier(0.22, 0.61, 0.36, 1);
}
```

Note the family names: `@fontsource-variable` registers **"Lora Variable"** and **"Source Sans 3 Variable"**, not the plain names. Getting this wrong fails silently into Georgia and system-ui, which is exactly the class of bug that survives to production.

### Three rules that will be broken if they are not enforced

1. **`--color-accent` is never body-size text.** `#E5262C` on canvas is 4.24:1 and fails. Body-size accent text on canvas is `--color-accent-deep`; on dark panels it is `--color-accent-lift`. Full-saturation red is for fills, large display type and non-text.
2. **Any white text over a photograph sits on a scrim of at least 0.70.** Composited against a worst-case white photo that yields 7.03:1. Below 0.70 the design is betting on the photograph being dark, which nobody can guarantee at publish time. The hero gradient is `linear-gradient(180deg, rgba(20,17,16,0.75) 0%, rgba(20,17,16,0.15) 38%, rgba(20,17,16,0.88) 100%)`; the top stop is 0.75 because the inverted nav sits there, and it is the fallback, so there is no separate solid one.
3. **Panel rhythm is a layout primitive, not a per-page choice.** A page declares each section `canvas` or `panel` and the primitive supplies the ground colour, the matching ink tokens and the vertical padding. Without this the system dissolves by the third page.

### Layout primitives

Three, replacing the `lg:w-[1024px] xl:w-[1280px] lg:m-auto` string that is copy-pasted across fourteen files today.

| Primitive | Definition |
|---|---|
| `.wrap` | `max-width: 1180px; margin-inline: auto; padding-inline: clamp(1rem, 4vw, 2rem)` |
| `.bleed` | full viewport width, hero and dark panels; contains its own `.wrap` for text |
| `.measure` | `max-width: 65ch` for running prose |

Vertical rhythm on major sections: `clamp(2.5rem, 6vw, 4.5rem)` block padding.

### Components

| Component | Notes |
|---|---|
| Header / nav | Two states: **inverted** over the hero photo (home only), **solid canvas** everywhere else. Five items. Mobile is a full-screen overlay; the existing pattern works, rebuilt as a `<script>` class toggle rather than React state. |
| Footer | Dark `#241C1A`. Address, WhatsApp, e-mail, Instagram, CNPJ, nav, privacy link. No LinkedIn, no Facebook. |
| Page hero | **photo hero** (bleed, scrim ≥0.70) for home and `/empresas`; **plain hero** (canvas, display heading, no photo) for index and legal pages. The old thin banner strips retire with their images. |
| Ação card | 16:10 image, dateline in `tabular-nums`, título, resumo. Two-up on panel, list on canvas. |
| Projeto card | **3:4 portrait** image, caption gradient reaching 0.85, título. Four-up desktop, two-up mobile. |
| Board member | Square photo, nome, cargo. Explicit `width`/`height`, never rendered above 200px. Arranged as the mosaic grid. |
| Facts block | `--color-surface` on a 1px `--color-rule`, definition list, `tabular-nums`. CNPJ, endereço, WhatsApp, e-mail. Used on `/empresas` and `/quem-somos`. |
| Participation block | The shared "Como participar". One instance, four project pages plus `/projetos`. |
| CTA block | One label per intent, from the five in the copy deck. |
| Section rule | Four squares stepping in opacity 0.25 / 0.5 / 0.75 / 1 in the accent. The one ornament in the system. |
| **Consent bar** | **New, added by the legal-pages ticket and not in the prototype.** Fixed to the bottom of the viewport, `--color-canvas` ground, hairline `--color-rule` on top, one line of text and two buttons. Not a modal, does not block reading. Copy and behaviour in the deck, section 0. |

### The mosaic motif

Kept, structurally, in exactly two places: as the section rule above, and as the `/quem-somos` diretoria grid, where nine board members in a square grid make the logo's meaning literal. **Not** as an image-crop system, which would fight direction C's premise that photographs run uninterrupted.

### Motion

Project card image `transform: scale(1.03)` over 400ms `--ease-out` on hover, and inline link underline shifts. Nothing else. No entrance animation, no scroll reveal, no parallax. `prefers-reduced-motion: reduce` removes all of it.

### Theme

**Single committed light world. No dark mode.** The ivory ground and near-black panels are the design, not a light-mode expression of it. Paint every colour explicitly.

---

## 5. Content model

`src/content.config.ts`, exactly as settled:

```ts
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const acoes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/acoes' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      data: z.coerce.date(),
      comunidade: z.string(),
      resumo: z.string().max(240),
      capa: image(),
      capaAlt: z.string(),
      galeria: z.array(z.object({ imagem: image(), legenda: z.string().optional() })).optional(),
      rascunho: z.boolean().default(false),
    }),
});

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      ordem: z.number(),
      resumo: z.string().max(240),
      linha: z.string().max(120),
      apoio: z.string().max(120),
      metaDescricao: z.string().max(180).optional(),
      capa: image(),
      capaAlt: z.string(),
      ativo: z.boolean().default(true),
      rascunho: z.boolean().default(false),
    }),
});

const equipe = defineCollection({
  loader: file('./src/data/equipe.json'),
  schema: z.object({
    id: z.string(), nome: z.string(), cargo: z.string(),
    ordem: z.number(), foto: z.string(),
  }),
});

export const collections = { acoes, projetos, equipe };
```

Three fields were added during implementation, because the copy deck asks for text the original schema had nowhere to put: `linha` (the line under a card in the grid), `apoio` (the support line under the h1 on a project page), and `metaDescricao` on both collections, which falls back to `resumo`. Without them, eight URLs would have shared their resumo as a meta description and the deck's per-page descriptions would have gone unpublished.

Three things about this that are easy to get wrong:

- **`import { z } from 'astro/zod'`**, not from `astro:content`. It is Zod 4, and the `astro:content` export is deprecated in 7.2.4 even though the package still ships it.
- **`entry.id` and a standalone `render(entry)`.** `entry.slug`, `entry.render()` and `getEntryBySlug()` were removed in Astro 6 and most of what is written online still uses them.
- **Filenames must equal today's slugs exactly.** The IA froze every URL, so the file name *is* the URL. The eight are listed in section 7.

Routes: `src/pages/projetos/[...id].astro` and `src/pages/acoes/[...id].astro`.

`src/data/equipe.json` holds the nine board members with photos in `public/equipe/`. Names, cargos and order are in the copy deck, section 2, with the accents and concordância fixed.

**`src/actions.json` disappears**, and with it the double-entry it forces today, where an ação must be written twice, once as a page and once as a JSON row.

---

## 6. Pages, in build order

Build the base layout and the primitives first, then the two collection routes, then the evergreen pages. Every word comes from the copy deck; the section numbers below point into it.

| # | Route | Deck § | Notes |
|---|---|---|---|
| 1 | `src/layouts/Base.astro` | 0 | Head, header, footer, consent bar, global CSS import |
| 2 | `/projetos/[...id]` | 5 | Four entries, participation block from the layout |
| 3 | `/acoes/[...id]` | 7 | Four entries, gallery only on the Murão one |
| 4 | `/projetos` | 3 | Index, four cards, participation block |
| 5 | `/acoes` | 6 | Index, date-descending |
| 6 | `/` | 1 | Photo hero, five sections |
| 7 | `/quem-somos` | 2 | Diretoria mosaic, facts block |
| 8 | `/empresas` | 8 | Facts block, tax copy under review gate |
| 9 | `/doacoes` | 9 | Bank details, no termo links |
| 10 | `/voluntario` | 10 | WhatsApp only, no form |
| 11 | `/politica-de-privacidade` | 12 | Fill `{data da publicação}` with the real launch date |
| 12 | `/404` | 11 | PT-BR, `noindex` |

The eight collection filenames, which are also the URLs:

```
src/content/projetos/capacitacao-profissional.md
src/content/projetos/aulas-de-bateria.md
src/content/projetos/aulas-de-jiu-jitsu.md
src/content/projetos/socioeducativo.md

src/content/acoes/primeira-acao-na-comunidade-do-murao.md
src/content/acoes/acao-de-pascoa-na-comunidade-porto-de-areia.md
src/content/acoes/acao-de-doacao-de-alimentos-comunidade-porto-de-areia.md
src/content/acoes/acao-de-doacao-de-roupas-comunidade-porto-de-areia.md
```

### Head, per page

There is no SEO integration. `astro-seo` declares no peer range and was last tested against Astro 5, so hand-roll it in the base layout: `<title>`, `<meta name="description">`, `og:title`, `og:description`, `og:image`, `og:type`, `og:locale` = `pt-BR`, `<link rel="canonical">`, `<html lang="pt-BR">`. Every value for all seventeen URLs is in the deck. The current site has bare per-page titles and a single global description and og:image hard-coded in `src/html.js`, repeated identically on all seventeen URLs, and three ação pages share one wrong title. Per-page metadata is a real gain here, not housekeeping.

---

## 7. Assets

### The moves

| Today | Destination |
|---|---|
| `static/about.webp` | `src/assets/hero.webp` |
| `static/capacitacao-profissional.webp` | `src/content/projetos/capacitacao-profissional.webp` |
| `static/bateria.webp` | `src/content/projetos/bateria.webp` |
| `static/Jiu-jitsu.webp` | `src/content/projetos/jiu-jitsu.webp` (rename to lowercase) |
| `static/socioeducacional.webp` | `src/content/projetos/socioeducativo.webp` |
| `static/actions/acao-4/*` | `src/content/acoes/primeira-acao-na-comunidade-do-murao/` |
| `static/actions/acao-1/capa.webp` | `src/content/acoes/acao-de-pascoa-na-comunidade-porto-de-areia/capa.webp` |
| `static/actions/acao-2/capa.webp` | `src/content/acoes/acao-de-doacao-de-alimentos-comunidade-porto-de-areia/capa.webp` |
| `static/actions/acao-3/capa.webp` | `src/content/acoes/acao-de-doacao-de-roupas-comunidade-porto-de-areia/capa.webp` |
| nine board portraits | `public/equipe/` |
| `static/voluntarios.webp` | `src/assets/voluntarios.webp`, usado no `/voluntario` |
| `static/banner.webp` | `src/assets/hero-reserva.webp`, o hero de `/empresas` |
| `static/logo.webp` | `public/logo.webp` |

Not moving: `iv.webp`, `revisao-de-vidas.webp`, `sage.webp`, `saranossaterra.webp`, `cover-about-us.webp`, `cover-volunter.webp`, `doacoes.webp`, `capa-doacoes.webp`, `map.webp`.

Two images are referenced by live pages and do not exist in the repo: `/iv-aula.webp`, which retires with its page, and `/to-do.webp`, which is the body image of the **surviving** jiu-jítsu page. Jiu-jítsu ships with only its grid photo, which was already the worst 3:4 crop of the four projects.

### The rule that decides `src/` versus `public/`

Anything that goes through `<Image>` lives in `src/` or in a collection folder, and Astro supplies dimensions, format conversion and responsive `srcset`. Anything in `public/` is copied verbatim and **every `<img>` needs hand-written `width` and `height`**, or you ship layout shift that `gatsby-plugin-image` was previously absorbing. The nine board portraits are the deliberate exception, and they must carry explicit dimensions and never render above 200px.

### Known quality gaps, carried not fixed

- **Nothing in the library is portrait**, and the project grid crops 3:4. Three of the four project images land under the retina target. They will look acceptable and slightly soft. The fix is a phone held vertically, not a design change.
- **The hero is soft on a large display.** `about.webp` at 1920×1080 is the best candidate and it is 1x on a laptop.
- **The logo is a 733px raster** used as the mark on every page, as the favicon source and as the OG image, sometimes inverted white over photography. `src/images/icon.png` is 60×60 and `src/images/logo.png` is 213×48, so all three logo files are small rasters. Ask whoever designed it for the vector. This is one message to one person and it is the cheapest quality win available.
- **`map.webp`** is a 403×301 screenshot of Google Maps in the footer. Replace it with a plain link to the maps URL; a low-resolution static map reads worse than text.
- **No favicon set and no web manifest.** `gatsby-plugin-manifest` has no Astro equivalent. Write `public/site.webmanifest` and the icon sizes by hand, from the vector once it arrives.

### Performance budget

Nothing on the map set one, and a photography-led design without a budget drifts into a 4MB home page. These numbers are the decision, not a suggestion:

| Thing | Budget |
|---|---|
| Home page, first load, transferred | **≤ 1.2 MB** |
| Hero image, transferred | **≤ 250 KB** at the widest breakpoint |
| Any other single image | ≤ 150 KB |
| JavaScript, any page | **≤ 20 KB** total, which is the nav toggle and the consent bar and nothing else |
| LCP on a throttled 4G profile | ≤ 2.5s |

How they are met:

- Every image goes through `<Image>` or `<Picture>` with `loading="lazy"`, **except the hero**, which is `loading="eager"` with `fetchpriority="high"`.
- `image.layout: 'constrained'` and `responsiveStyles: true` in the config generate the `srcset`; do not hand-write one.
- Fonts are variable, self-hosted, latin subset, `font-display: swap`. Two families, four axes total.
- Nothing is deferred to a client island, because there are no islands.

If a page cannot meet the budget, the photograph is too heavy, not the budget too tight.

---

## 7b. Handing the site back

`README.md` gets rewritten rather than deleted, and it has one job beyond the usual: **explain how to publish an ação without a developer.** Concretely, a section that says to create `src/content/acoes/<slug>.md`, copy an existing file's frontmatter, drop the photos in a folder of the same name, set `rascunho: true` while writing, and push. Whoever maintains this next is likelier to be a volunteer than an engineer, and the content model was chosen to make that possible.

---

## 8. URLs, redirects and SEO plumbing

### The map

Seventeen live URLs. Fifteen keep their exact address.

```
/
/quem-somos
/projetos                                                   new
/projetos/capacitacao-profissional
/projetos/aulas-de-bateria
/projetos/aulas-de-jiu-jitsu
/projetos/socioeducativo
/acoes                                                      new
/acoes/primeira-acao-na-comunidade-do-murao
/acoes/acao-de-pascoa-na-comunidade-porto-de-areia
/acoes/acao-de-doacao-de-alimentos-comunidade-porto-de-areia
/acoes/acao-de-doacao-de-roupas-comunidade-porto-de-areia
/empresas                                                   new
/doacoes
/voluntario
/politica-de-privacidade                                    new
/404
```

`/projetos` and `/politica-de-privacidade` are linked from the footer today and **404 in production**. Building them fixes two live bugs.

### Redirects

`public/_redirects`, three rules, no adapter:

```
/projetos/instituto-de-vencedores   /projetos            301
/projetos/revisao-de-vidas          /projetos            301
/sitemap.xml                        /sitemap-index.xml   301
```

Two traps, both verified in source rather than inferred:

- **A surviving page file beats its own redirect, in both systems.** Astro gives file-based routes precedence over redirects, and Netlify does not let a redirect override existing content unless it is forced with `!`. So the two retired `.tsx` pages must actually be deleted, and the result must be checked with `curl -I` after deploy, not assumed.
- **Do not use Astro's `redirects` config.** Without an adapter it emits `<meta http-equiv="refresh">` pages, which are not 301s and are not good enough for an indexed site.

### robots.txt and the sitemap

`@astrojs/sitemap` emits `sitemap-index.xml`. The live `robots.txt` advertises `sitemap.xml` to Search Console, which is why the third redirect rule exists. Write `public/robots.txt` by hand:

```
User-agent: *
Allow: /

Sitemap: https://sarandocarapicuiba.org/sitemap-index.xml
```

Then resubmit the sitemap in Search Console after launch. The redirect covers the already-submitted URL; the robots change covers everything after.

### Trailing slashes

Gatsby served `/quem-somos/`. Astro's defaults, `trailingSlash: 'ignore'` and `build.format: 'directory'`, already match. **Changing either "for cleanliness" rewrites every indexed URL.**

---

## 9. Analytics and consent

GA4 property `G-6N23FX10H6` stays. What changes is that it is gated.

Today `gatsby-plugin-google-gtag` loads it unconditionally on first paint, with no consent mechanism anywhere, and the site has no privacy policy at all.

The new behaviour, which the privacy page states in writing and therefore has to be literally true:

1. **The gtag script is not on the page before the visitor clicks `Aceitar`.** Not present-and-denied via consent mode. Not present. Inject it on consent.
2. `Recusar` leaves the entire site working, and does not re-prompt on every navigation.
3. The choice lives in `localStorage` for a year, not in a cookie.
4. The script tag needs `is:inline`, or Astro will try to bundle and process it.
5. **Do not add `<ClientRouter />`.** If view transitions are ever added, `astro:page-load` fires on both initial load and navigation, so the manual `page_view` must be paired with `send_page_view: false` and GA4's Enhanced Measurement history-events setting has to be checked. Not adding it avoids the whole problem.

**One console change, outside the repo: set GA4 user-data retention to 2 months.** The privacy page states that number. Two clicks in the admin panel, and until someone makes them the page is a false statement.

---

## 10. Deploy and verify

The Netlify site, account, domain and DNS all stay. Only the build changes.

1. Merge the branch, or point a deploy preview at it first.
2. Netlify picks up `netlify.toml`: `npm run build`, publish `dist`, `NODE_VERSION=22.12.0`.
3. Check the build log for the Node version actually used. This is the most likely first failure and it fails confusingly.
4. **Verify the redirects with `curl -I` against the deploy URL before DNS matters**, and again after:

```bash
for u in /projetos/instituto-de-vencedores /projetos/revisao-de-vidas /sitemap.xml; do
  printf '%-40s ' "$u"
  curl -sI "https://sarandocarapicuiba.org$u" | head -1
done
```

Each must return `HTTP/2 301`. If one returns `200`, a page file survived the delete. If the body contains `http-equiv="refresh"`, Astro's `redirects` config got used somewhere.

5. Spot-check that all fifteen surviving URLs return 200, including with a trailing slash.
6. Resubmit the sitemap in Search Console as `sitemap-index.xml`.
7. Confirm in a fresh browser profile that no `_ga` cookie is set before clicking `Aceitar`, and that one is set after.

---

## 11. Launch checklist

**Status: the site is built.** Branch `rebuild/astro`, 17 pages, `astro check` clean, `npm run build` green. What is ticked below was verified against the build output; what is not is either a console change or a post-deploy check that needs the live host.

### Blocking

- [x] Consent bar exists and GA4 genuinely does not load before the click. Verified: the built HTML contains no `<script src=...googletagmanager...>`; the string appears once, inside the inline consent script that injects it on `Aceitar`.
- [ ] GA4 user-data retention set to **2 months** in the admin panel. Console change, outside the repo, and the privacy page states the number.
- [ ] All three redirects return a real 301, checked with `curl -I`. **Cannot be verified locally**: `astro preview` does not process `_redirects`. The file ships correctly in `dist/_redirects` and the build emits no meta-refresh page anywhere, so this is a post-deploy check, not an open question about the code.
- [x] `robots.txt` points at `sitemap-index.xml`. Verified in `public/robots.txt`, and `@astrojs/sitemap` does emit `sitemap-index.xml`.
- [x] The two retired page files are deleted, not just unlinked. The whole `src/pages/` tree was replaced; `dist/` contains no `instituto-de-vencedores` or `revisao-de-vidas` route.
- [x] The privacy page carries a real date, from a single `atualizadaEm` constant at the top of the page file.
- [x] The footer e-mail matches in link and label, from `src/lib/site.ts`. Asserted against the built HTML.
- [ ] The 15-day response commitment on the privacy page is one the diretoria can keep.

### Should happen before launch, does not block the build

- [ ] The narrow photo review: close-ups where one identifiable child is the subject come down unless a board member can name the guardian who agreed. Launch is when the photographs get bigger, so this is better done before than after.
- [ ] Written authorização de uso de imagem starts at the next ação.

### Not blocking, worth chasing

- [ ] The logo in vector format.
- [ ] Four vertical project photographs, 1200×1600 or larger. This closes the only structural gap in the design.
- [ ] A hero photograph at 2400px or wider.
- [ ] A photograph of the sede from the street. For a corporate donor deciding whether an association is real, the building is worth more than any adjective.
- [ ] The Sage URL. Sage confirmed it agrees to be named, so the apoiadores strip can come back the moment someone has a real link to point at.

---

## 12. What is still missing, and what changes when it arrives

Five open tickets outlive this spec. None of them blocks the migration, and each one improves a specific page the day it lands.

| Ticket | What it unblocks |
|---|---|
| [Recover the estatuto social](issues/14-recover-the-estatuto-social.md) | A `/transparencia` page, the three document links that are `href="#"` today, and the founding year, which is probably the most persuasive free fact the association owns and is currently written nowhere. |
| [Inscrever no CMDCA de Carapicuíba](issues/16-inscrever-no-cmdca-de-carapicuiba.md) | The strongest tax argument available in Brazil. FUMCAD deducts from *imposto devido*, so the donor recovers the full amount rather than roughly a third. `/empresas` gets rewritten around it, and it is the one thing that would justify putting tax language back on the site, with a contador involved. |
| [Image consent](issues/19-autorizacao-de-uso-de-imagem.md) | The sharpest legal exposure on the site, and a photo-led redesign doubles the visibility of exactly the images at risk. |

---

## 13. Sharp edges

The full list of fourteen is in [research/astro-capabilities.md](research/astro-capabilities.md). Six of them apply to the choices this spec has made, and each one is already handled above:

1. **Meta refresh is not a 301.** Handled: `public/_redirects`, no `redirects` config.
2. **A leftover page file silently kills its redirect, in both Astro and Netlify.** Handled: delete, then `curl -I`.
3. **`@astrojs/tailwind` is dead on Astro 7.** Handled: `@tailwindcss/vite` and CSS-first `@theme`. This is a language migration, not a plugin swap; budget real time for the v3 class names across the old pages.
4. **Zod is v4 under `astro/zod`.** Handled in the schema file.
5. **Public images give you no dimensions.** Handled: only the board portraits live in `public/`, with explicit dimensions.
6. **Node floor 22.12.0.** Handled: `netlify.toml` and `.nvmrc`.

Two more are worth knowing even though this spec avoids them: `@astrojs/sitemap` emitting `sitemap-index.xml` (redirect written), and `gatsby-plugin-manifest` having no successor (write the manifest by hand).

---

*This spec is the destination of the wayfinder map at [map.md](map.md). Every claim in it traces to a resolved ticket; where something could not be verified, the ticket says so.*
