# Content collection schemas

Type: grilling
Status: resolved
Blocked by: 01, 04

## Question

What collections exist, and what is the exact frontmatter schema of each?

Candidates visible in the current site: **ações** (four entries, currently duplicated between `src/actions.json` and four hardcoded `.tsx` pages that must stay in sync by hand), **projetos** (four surviving), **equipe** (nine board members, name + role + photo, hardcoded in `/quem-somos`), **documentos** (whatever the institutional-documents task returns).

Decide for each collection:

- Which fields are required vs optional, and their types.
- How images are referenced, and whether they live in the collection or in `public/` — the research ticket has the Astro answer; this ticket decides which we use and why.
- Slug and URL derivation.
- What ordering and what index-page shape.
- Whether the body is Markdown or MDX, and whether any page needs components inline.

Design the schemas so a CMS could later write to them without a migration — that was settled while charting. The test for this ticket: adding a fifth ação must be one Markdown file and nothing else.

**From the Astro research ticket:** schemas live in `src/content.config.ts`, every collection needs an explicit `loader` (`glob()` for the Markdown collections, `file()` if any stay JSON like today's `actions.json`), Zod comes from `astro/zod` (v4), and entries expose `id` — not `slug` — with a standalone `render(entry)`. Use `image()` in the schema for any frontmatter image path so it gets validated and optimized; the recommended split is `src/assets/` for images components render and `public/` only for logo, favicon and OG. See [research/astro-capabilities.md](../research/astro-capabilities.md).

**From the participation-info ticket:** the projeto schema carries **no** schedule, location, cost, age or instructor fields — every project shares identical participation facts, so they belong in a shared component rather than in frontmatter. Instructors are deliberately unnamed; do not model them.

## Answer

Three collections: **acoes**, **projetos**, **equipe**. No `documentos` collection, because no documents exist (see the institutional-documents ticket); it gets added the day the estatuto arrives.

### Markdown only. MDX is dropped.

Only one ação (Murão) has a gallery and only one projeto (bateria) has images inside its body. Frontmatter handles the gallery, and Astro optimizes images referenced relatively from a Markdown body, so nothing here needs components inside content. Dropping `@astrojs/mdx` also sidesteps the Astro 7 Markdown-engine change the research ticket turned up, since we never touch the MDX peer chain.

### `src/content.config.ts`

```ts
import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const acoes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/acoes' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      data: z.coerce.date(),
      comunidade: z.string(),           // "Murão", "Porto de Areia"
      resumo: z.string().max(240),      // index card + meta description
      capa: image(),
      capaAlt: z.string(),
      galeria: z
        .array(z.object({ imagem: image(), legenda: z.string().optional() }))
        .optional(),
      rascunho: z.boolean().default(false),
    }),
});

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      ordem: z.number(),                // fixed display order, not alphabetical
      resumo: z.string().max(240),
      capa: image(),                    // 3:4 portrait — the grid crop in direction C
      capaAlt: z.string(),
      ativo: z.boolean().default(true), // a paused project stays published, marked
      rascunho: z.boolean().default(false),
    }),
});

const equipe = defineCollection({
  loader: file('./src/data/equipe.json'),
  schema: z.object({
    id: z.string(),
    nome: z.string(),
    cargo: z.string(),
    ordem: z.number(),                  // presidente → vice → secretárias → tesoureiras → conselho
    foto: z.string(),                   // path into /public/equipe/
  }),
});

export const collections = { acoes, projetos, equipe };
```

### Decisions behind that

**No participation fields on `projetos`.** No `horario`, `local`, `custo`, `faixaEtaria`, `vagas` or `instrutor`. Every project shares identical participation facts, so they live in one shared component, and instructors are deliberately unnamed. Adding fields that would hold the same value four times is how a schema starts lying.

**`comunidade` is a free string, not an enum.** An enum would document today's reality (Murão, Porto de Areia) and catch typos, but it makes adding a new community a code change. Content must never require editing TypeScript.

**`ativo` earns its place; `destaque` does not.** Projects genuinely can pause, and the site should say so rather than silently deleting a page. A "featured" flag would be speculative — there are four projects and four ações, and everything is shown.

**`rascunho` gives the association a staging step**, filtered out at build time. It is also the field a future CMS would write first.

**Equipe is one JSON file with photos in `public/equipe/`, not a collection of Markdown files.** Nine entries with no body text do not want nine files. The photos stay in `public/` rather than going through `image()`: board portraits render at exactly one size, so the optimization gain is small, and it avoids relying on an unverified interaction between the `file()` loader and the `image()` helper. Because they are public-folder images, **their `width`/`height` must be written explicitly** at the call site or the page ships layout shift. Trade-off taken knowingly.

### Files, slugs and URLs

Content lives in `src/content/acoes/*.md` and `src/content/projetos/*.md`; images in `src/assets/acoes/…` and `src/assets/projetos/…`, referenced relatively from frontmatter so `image()` resolves them.

The `glob` loader derives each entry's `id` from its filename, and the IA ticket froze every existing URL, so **filenames must match today's slugs exactly**:

```
src/content/acoes/primeira-acao-na-comunidade-do-murao.md
src/content/acoes/acao-de-pascoa-na-comunidade-porto-de-areia.md
src/content/acoes/acao-de-doacao-de-alimentos-comunidade-porto-de-areia.md
src/content/acoes/acao-de-doacao-de-roupas-comunidade-porto-de-areia.md
src/content/projetos/capacitacao-profissional.md
src/content/projetos/aulas-de-bateria.md
src/content/projetos/aulas-de-jiu-jitsu.md
src/content/projetos/socioeducativo.md
```

Routes are `src/pages/acoes/[...id].astro` and `src/pages/projetos/[...id].astro` with `getStaticPaths`, using `entry.id` and the standalone `render(entry)` — not `entry.slug` or `entry.render()`, both removed in Astro 6.

Ordering: ações by `data` descending, projetos by `ordem`, equipe by `ordem`.

### What this kills

`src/actions.json` disappears. Today every ação exists twice, as a JSON entry and as a hand-written `.tsx` page, kept in sync by hand. After this, **adding a fifth ação is one Markdown file plus its images, and nothing else** — which was the acceptance test for this ticket.
