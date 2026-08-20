# Astro capabilities for the Sarando Carapicuíba rebuild

**Research date:** 2026-08-19. **Sources:** docs.astro.build, docs.netlify.com, developers.google.com, npm registry metadata, and package/adapter source read directly from the published tarballs and `withastro/adapters` on GitHub. No blog posts or tutorials were used.

## Version baseline (verified 2026-08-19)

| Package | Version | Evidence |
| --- | --- | --- |
| `astro` | **7.2.4** (`dist-tag: latest`) | `npm view astro dist-tags.latest` |
| Node requirement | **`>=22.12.0`** | `engines` field in `astro@7.2.4` package.json (`npm pack astro`) |
| bundled Zod | **`zod@^4.3.6`**, exported as `astro/zod` | `dependencies.zod` + `exports["./zod"]` in `astro@7.2.4` |
| `@astrojs/sitemap` | 3.7.3 (no declared peer range) | `npm pack @astrojs/sitemap` |
| `@astrojs/mdx` | 7.0.7, peer `astro: ^7.0.0`, `@astrojs/markdown-satteri: ^0.3.1` | `npm view @astrojs/mdx peerDependencies` |
| `@astrojs/netlify` | 8.2.3, peer `astro: ^7.0.0` | `npm pack @astrojs/netlify` |
| `tailwindcss` / `@tailwindcss/vite` | 4.3.3 | `npm view tailwindcss version` |
| `@astrojs/tailwind` | 6.0.2, peer `astro: ^3 \|\| ^4 \|\| ^5` — **not usable on Astro 7** | `npm view @astrojs/tailwind peerDependencies` |
| `@astrojs/partytown` | 2.1.7 (no declared peer range) | `npm pack @astrojs/partytown` |
| `astro-seo` (third-party) | 1.1.0, **no peer deps declared**, devDep `astro@^5.16.0` | `npm pack astro-seo` — Astro 7 compatibility **could not be confirmed** |

Recent-major context that invalidates most of what is online:

- **Astro 6** removed the `legacy.collections` flag and support for `src/content/config.ts`; `getEntryBySlug()`, `getDataEntryById()`, `entry.slug` and `entry.render()` are gone. Node floor moved to 22.12.0. <https://docs.astro.build/en/guides/upgrade-to/v6/>
- **Astro 7** switched to the Rust compiler as the only compiler, Vite 8, and **Sätteri as the default Markdown pipeline** instead of remark/rehype (`@astrojs/markdown-remark` must be reinstalled to keep remark plugins). `@astrojs/db` was removed. <https://docs.astro.build/en/guides/upgrade-to/v7/>
- Responsive images (`layout`, `responsiveStyles`, `breakpoints`) went **stable in `astro@5.10.0`** — they are no longer behind `experimental.responsiveImages`. <https://docs.astro.build/en/reference/configuration-reference/#imagelayout>

---

## 1. Content collections

**Direct answer:** In Astro 7 the config file is **`src/content.config.ts`** (the old `src/content/config.ts` was removed in v6), every collection **must** declare a `loader` (`glob()` or `file()` from `astro/loaders`), and you query with `getCollection()` / `getEntry()` and render with the standalone **`render(entry)`** function — `entry.render()` and `entry.slug` no longer exist. This site has no Markdown content today (`src/actions.json` + `.tsx` pages), so collections are optional; the natural fit is a `file()` collection over `actions.json` and/or a `glob()` collection if the ~4 `acoes/` pages become MDX.

### Config file

```ts
// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const acoes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/acoes' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      cover: image(),
      coverAlt: z.string(),
      draft: z.boolean().default(false),
    }),
});

// One entry per object in a single JSON file — matches the existing src/actions.json
const projetos = defineCollection({
  loader: file('./src/data/projetos.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = { acoes, projetos };
```

Import notes, verified against the shipped Astro 7.2.4 tarball rather than the docs:

- `package/templates/content/types.d.ts` line 16 says verbatim: *"`import { z } from 'astro:content'` is deprecated and will be removed in Astro 7. Use `import { z } from 'astro/zod'` instead."* The re-export is still present in 7.2.4 (`export { z } from 'astro/zod'` in `templates/content/module.mjs`, marked `// TODO: remove in Astro 7`), so both work today but **`astro/zod` is the future-proof import**. The docs still show `import { defineCollection, z } from 'astro:content'` in places — that is the deprecated form.
- `astro/zod` is **Zod 4** in Astro 7 (`zod: ^4.3.6`). Zod 3 idioms that changed in v4 (e.g. error-map/`errorMap` signatures) will not port cleanly.
- `glob()` options include `pattern`, `base`, `generateId`, and `retainBody`. `file()` parses JSON/YAML/TOML from one file. <https://docs.astro.build/en/reference/content-loader-reference/>

### Querying

```astro
---
import { getCollection, getEntry, render } from 'astro:content';

const published = await getCollection('acoes', ({ data }) => !data.draft);
const one = await getEntry('acoes', 'primeira-acao-na-comunidade-do-murao');
---
```

`getCollection(name, filter?)` returns all entries; `getEntry(name, id)` returns one; `render(entry)` returns `{ Content, headings, remarkPluginFrontmatter }`. <https://docs.astro.build/en/guides/content-collections/>

### Rendering to a route

```astro
---
// src/pages/acoes/[...id].astro
import { getCollection, render } from 'astro:content';
import Layout from '../../layouts/Layout.astro';

export async function getStaticPaths() {
  const acoes = await getCollection('acoes');
  return acoes.map((acao) => ({
    params: { id: acao.id },
    props: { acao },
  }));
}

const { acao } = Astro.props;
const { Content } = await render(acao);
---
<Layout title={acao.data.title} description={acao.data.description}>
  <h1>{acao.data.title}</h1>
  <Content />
</Layout>
```

Source: <https://docs.astro.build/en/guides/content-collections/> (the docs use `[id].astro`; `[...id].astro` is the catch-all form needed if IDs contain `/`).

### What the Content Layer API changed

| Legacy (Astro ≤ 4, and v5 behind `legacy.collections`) | Current (Astro 5.0 Content Layer → 7) |
| --- | --- |
| `src/content/config.ts` | `src/content.config.ts` |
| `type: 'content'` / `type: 'data'`, no loader | `loader:` is required (`glob()`, `file()`, or a custom loader) |
| Content had to live under `src/content/<collection>/` | `base` can point anywhere |
| `entry.slug` | `entry.id` |
| `await entry.render()` | `await render(entry)` from `astro:content` |
| `getEntryBySlug()`, `getDataEntryById()` | `getEntry()` |

All of the left column was removed in **Astro 6**. A temporary escape hatch exists — `legacy.collectionsBackwardsCompat: true`, introduced in v6.0.0, restores `type: 'content'`/`'data'`, `entry.slug` and `entry.render()` — but it is documented as "a temporary migration helper". <https://docs.astro.build/en/reference/legacy-flags/> · <https://docs.astro.build/en/guides/upgrade-to/v6/>

There is also a newer, separate **live collections** system (`src/live.config.ts`, `defineLiveCollection()`, `getLiveCollection()`) that fetches per-request and requires an on-demand adapter — irrelevant for a static NGO site. <https://docs.astro.build/en/guides/content-collections/>

---

## 2. Images (`astro:assets`)

**Direct answer:** Images imported from `src/` are optimized, hashed and given intrinsic dimensions; anything in `public/` is copied byte-for-byte with no processing. For the ~25 `.webp` files currently in Gatsby's `static/`, moving them to `src/assets/` buys responsive `srcset` + AVIF + automatic width/height (no CLS) at the cost of rewriting every `/logo.webp` string into an ESM import; leaving them in `public/` is a zero-effort migration that ships exactly today's bytes with no responsive variants.

### `src/` vs `public/`

> "Images in `src/` are transformed, optimized, and bundled… files in `public/` are served or copied into the build folder as-is, with no processing."
> — <https://docs.astro.build/en/guides/images/>

`public/` images must be referenced by absolute path string, and Astro cannot infer their size, so **you must pass `width` and `height` yourself** and they will not be optimized. <https://docs.astro.build/en/guides/images/#images-in-publicfolder>

### `<Image>` / `<Picture>`

```astro
---
import { Image, Picture } from 'astro:assets';
import banner from '../assets/banner.webp';
---
<Image
  src={banner}
  alt="Voluntários da Sarando Carapicuíba"
  width={1200}
  height={630}
  layout="constrained"
  format="webp"
  quality="high"
  priority
/>

<Picture
  src={banner}
  formats={['avif', 'webp']}
  fallbackFormat="webp"
  alt="Voluntários da Sarando Carapicuíba"
/>
```

Prop reference (with the version each was added), from <https://docs.astro.build/en/reference/modules/astro-assets/>:

- `src` (required), `alt` (required), `width`, `height`
- `widths` / `densities` / `sizes` — `astro@3.3.0`
- `format` — output type, defaults to `.webp`; `quality` — `low | mid | high | max` or `0–100`
- `inferSize` — `astro@4.4.0` (remote images)
- `priority`, `layout` (`constrained | full-width | fixed | none`), `fit` (`contain | cover | fill`), `position` — `astro@5.10.0`
- `background` — `astro@5.17.0`
- `<Picture>` adds `formats`, `fallbackFormat`, `pictureAttributes`
- `getImage()` for non-HTML use cases (OG images, CSS backgrounds)

### `image()` in a collection schema

```ts
schema: ({ image }) =>
  z.object({
    title: z.string(),
    cover: image(),      // validates + imports; yields ImageMetadata
    coverAlt: z.string(),
  }),
```

```md
---
title: "Primeira ação na comunidade do Murão"
cover: "./capa.webp"          # relative to the Markdown file
coverAlt: "Voluntários entregando cestas"
---
```

Source: <https://docs.astro.build/en/guides/images/#images-in-content-collections>

### Responsive images — stable since `astro@5.10.0`

```js
// astro.config.mjs
image: {
  layout: 'constrained',     // astro@5.10.0, default undefined
  responsiveStyles: true,    // astro@5.10.0, default false
  breakpoints: [640, 750, 828, 1080, 1280, 1668, 2048, 2560], // local-service default
}
```

- `image.layout` sets a project-wide default; per-component `layout` overrides it, and `layout="none"` disables responsive behaviour for that image.
- `image.responsiveStyles` injects the global CSS the layouts rely on — the docs say to enable it "unless you are styling images yourself". It only applies when `layout` is `constrained`, `full-width`, or `fixed`.
- Default breakpoints differ between the local Sharp service and remote/CDN services (the remote default list is much longer: `[640, 750, 828, 960, 1080, 1280, 1668, 1920, 2048, 2560, 3200, 3840, 4480, 5120, 6016]`).

Source: <https://docs.astro.build/en/reference/configuration-reference/#imagelayout>. Anything you read describing `experimental.responsiveImages` or `image.experimentalLayout` is pre-5.10 and stale.

### Remote images

```js
image: {
  domains: ['astro.build'],                     // astro@2.10.10
  remotePatterns: [{ protocol: 'https' }],      // astro@2.10.10
}
```

Remote images from unlisted sources are **not** optimized, but using `<Image>` for them still prevents CLS. <https://docs.astro.build/en/guides/images/>

### Decision for this site's 25 `.webp` files

Current state: `static/*.webp` (25 top-level files plus `static/projects/` and `static/actions/`), referenced as absolute strings like `/logo.webp`.

**Option A — drop `static/` into `public/` verbatim.**
Zero code churn: every `/logo.webp` string keeps working, because `public/` is copied as-is and Netlify's publish dir is `dist/`. But: no AVIF, no `srcset`, no width/height inference (so you must hand-write `width`/`height` on every `<img>` or accept CLS), and no cache-busting hash — a re-uploaded `logo.webp` keeps the same URL.

**Option B — move to `src/assets/` and import.**

```astro
---
import { Image } from 'astro:assets';
import logo from '../assets/logo.webp';
---
<Image src={logo} alt="Sarando Carapicuíba" layout="constrained" width={180} height={60} />
```

Gains: AVIF/WebP negotiation via `<Picture>`, automatic `srcset`/`sizes` from `layout`, intrinsic dimensions (no CLS), content-hashed filenames for far-future caching. Costs: every reference becomes an ESM import (you cannot build the path from a string at runtime), and `sharp` runs at build time on ~30 files, adding a few seconds to the Netlify build.

**Recommendation for this migration:** Option B for the images actually rendered by components (hero/banner/cover/team portraits — most of the list), Option A for anything referenced from outside the component tree: `logo.webp` if it's used in `manifest`/OG metadata, favicons, and anything a third party might hotlink. The files are already `.webp`, so the incremental byte win from optimization is mostly AVIF plus correctly-sized `srcset` variants for mobile — real, but not dramatic. The bigger win is the CLS/dimension correctness that `ImageMetadata` gives you for free.

One caveat: the source files are already WebP. Astro's default image service in Astro 6+ **never upscales** and now crops by default without needing `fit` (<https://docs.astro.build/en/guides/upgrade-to/v6/>), so re-encoding a WebP to WebP at the same width is close to a no-op — the value is in the smaller `widths` and the AVIF sibling.

---

## 3. Netlify

**Direct answer:** A fully static Astro site does **not** need `@astrojs/netlify`. But this site probably wants it anyway, for exactly one reason: the adapter is what turns Astro's `redirects` config into a real `_redirects` file (see §4). Netlify Forms need a real `<form>` with `data-netlify="true"` present in the built HTML — which an `.astro` page produces natively, so no hidden-HTML hack is needed unless the form is rendered by a client-side framework island.

### Is the adapter required?

> "If you're using Astro as a static site builder, you only need this adapter if you are using additional Netlify services that require a server (e.g. Netlify Image CDN). Otherwise, you do not need an adapter to deploy your static site."
> — <https://docs.astro.build/en/guides/integrations-guide/netlify/>

> "Your Astro project is a static site by default. You don't need any extra configuration to deploy a static Astro site to Netlify."
> — <https://docs.astro.build/en/guides/deploy/netlify/>

What the adapter adds: on-demand (SSR) rendering, Netlify Image CDN as the image service, edge middleware via Netlify Edge Functions, sessions backed by Netlify Blobs, `cacheOnDemandPages`, and `_redirects` emission. Options: `imageCDN`, `edgeMiddleware` / `middlewareMode: 'edge'`, `cacheOnDemandPages`, `devFeatures`. Same URL.

Verified in the adapter source (`withastro/adapters`, `packages/netlify/src/index.ts`, `main` branch, read 2026-08-19):

- `setAdapter({... supportedAstroFeatures: { staticOutput: 'stable', hybridOutput: 'stable', serverOutput: 'stable', ... } })` — static output is explicitly supported.
- In `astro:config:setup` it calls `updateConfig({ build: { redirects: false }, ... })` — i.e. it **disables Astro's meta-refresh HTML redirect pages**.
- In `astro:build:done` it *always* runs `writeRedirects(...)` and logs `Emitted _redirects`, then only generates the SSR function `if (finalBuildOutput !== 'static')`.
- Its static fallback target is `/.netlify/static`.

So: adapter + `output: 'static'` is a supported, sane combination that yields a static build plus a `_redirects` file.

`netlify.toml` for the static case:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22.12.0"
```

Node ≥ 22.12.0 must be pinned via `.nvmrc` or `NODE_VERSION`. <https://docs.astro.build/en/guides/deploy/netlify/>

### Netlify Forms

Netlify's build system parses the **built static HTML** to detect forms. Requirements: form detection enabled in the Netlify UI, a unique `name`, and `data-netlify="true"` (or bare `netlify`) on the `<form>`. During post-processing Netlify strips that attribute and injects `<input type="hidden" name="form-name" value="…">`. <https://docs.netlify.com/manage/forms/setup/>

Because `.astro` components render to HTML **at build time**, a form written in an `.astro` file is present in `dist/*.html` and is detected normally. No workaround needed.

```astro
---
// src/pages/contato.astro
---
<form
  name="contato"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/obrigado"
>
  <input type="hidden" name="form-name" value="contato" />
  <p class="hidden">
    <label>Não preencha se você é humano: <input name="bot-field" /></label>
  </p>
  <label>Nome <input type="text" name="nome" required /></label>
  <label>E-mail <input type="email" name="email" required /></label>
  <label>Mensagem <textarea name="mensagem" required></textarea></label>
  <button type="submit">Enviar</button>
</form>
```

The explicit `<input type="hidden" name="form-name">` is belt-and-braces — Netlify injects it itself for detected forms, and including it is the documented fix when the form is not statically detectable.

**When you still need the hidden static HTML form:** only if the form is rendered by a client-side island (`client:load` React/Svelte component) or otherwise isn't in the built HTML. The documented workaround is unchanged:

```html
<!-- e.g. public/__forms.html, or hidden in an .astro page -->
<form name="contato" data-netlify="true" hidden>
  <input name="nome" /><input name="email" /><textarea name="mensagem"></textarea>
</form>
```

plus `<input type="hidden" name="form-name" value="contato" />` inside the real, JS-rendered form. <https://docs.netlify.com/manage/forms/setup/>

**Spam filtering.** Akismet runs on all submissions by default; flagged ones go to a separate **Spam submissions** list. Two opt-in layers on top:

- Honeypot — `netlify-honeypot="bot-field"` on the `<form>` plus a visually hidden `<input name="bot-field">`. Netlify strips the attribute during post-processing and auto-rejects any submission with a value in that field.
- reCAPTCHA 2 — `data-netlify-recaptcha="true"` on the `<form>` **and** an empty `<div data-netlify-recaptcha="true"></div>` where the widget should render; one per page. Custom keys via `SITE_RECAPTCHA_KEY` / `SITE_RECAPTCHA_SECRET`.

Netlify does not state a preference between them. <https://docs.netlify.com/manage/forms/spam-filters/>

**Where submissions land:** the Netlify UI under *Forms → Submissions* (verified vs. spam lists), and via the Netlify API. Notifications are configured under *Configuration → Notifications → Form submission notifications*, with email or HTTP POST (webhook) delivery. File uploads: `enctype="multipart/form-data"`, one file per field, 8 MB max request, 30 s timeout. <https://docs.netlify.com/manage/forms/setup/>

**AJAX submission** (if you want to stay on-page): POST to `/` with a URL-encoded body — *not* JSON:

```js
fetch('/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams(new FormData(form)).toString(),
});
```

<https://docs.netlify.com/manage/forms/setup/>

---

## 4. Redirects — **this is the section that matters most for the migration**

**Direct answer:** With `output: 'static'` and **no adapter**, Astro's `redirects` config emits HTML pages containing a `<meta http-equiv="refresh">` tag — **not** an HTTP 301. Google treats meta refresh as a weaker, "may be interpreted" signal, and it costs an extra round trip. To get genuine 301s on Netlify, either (a) add `@astrojs/netlify`, which sets `build.redirects: false` and writes a real `_redirects` file, or (b) hand-write `public/_redirects`. **Both give real 301s. Do not rely on the default static behaviour.**

### The `redirects` config option (`astro@2.9.0`)

```js
// astro.config.mjs
export default defineConfig({
  redirects: {
    '/projetos/socioeducativo': '/projetos/socioeducacional',
    '/quem-somos': { status: 301, destination: '/sobre' },
    '/pagina-removida': { status: 410, destination: '/' }, // see caveat below
    '/blog/[...slug]': '/artigos/[...slug]',               // params must match on both sides
  },
});
```

- Default status is **301**. `"If building to HTML files the status code is not used by the server."`
- `"When running astro build, Astro will output HTML files with the meta refresh tag by default."`
- `"Supported adapters will instead write out the host's configuration file with the redirects."`
- `"File-based routes take precedence over redirects."` — a redirect from `/quem-somos` is ignored if `src/pages/quem-somos.astro` still exists.
- Dynamic routes are allowed as long as both sides carry the same params.

Source: <https://docs.astro.build/en/guides/routing/#configured-redirects> and <https://docs.astro.build/en/reference/configuration-reference/#redirects>

Related: `build.redirects` (boolean, default `true`, **added in `astro@2.6.0`**) — set to `false` and Astro stops writing the meta-refresh HTML files. It applies to static output only. <https://docs.astro.build/en/reference/configuration-reference/#buildredirects>

### What the Netlify adapter actually does

Read from `withastro/adapters` `packages/netlify/src/index.ts` (main, 2026-08-19) and `@astrojs/underscore-redirects@1.0.4`:

1. `astro:config:setup` → `updateConfig({ build: { redirects: false } })` — meta-refresh HTML pages are suppressed.
2. `astro:build:done` → `writeRedirects()` filters routes of `type === 'redirect'`, builds entries via `createRedirectsFromAstroRoutes()`, and **appends** them to `dist/_redirects`:
   ```ts
   if (!redirects.empty()) {
     await appendFile(new URL('_redirects', outDir), `\n${redirects.print()}\n`);
   }
   ```
3. `@astrojs/underscore-redirects@1.0.4/dist/astro.js` — `getRedirectStatus()` returns `route.redirect.status` if set, otherwise **`301`**; `print.js` writes `input  target  status` per line with a trailing `!` when forced.

Note the word **append**: the adapter appends to `_redirects`, it does not overwrite. Since Astro copies `public/` into `dist/` verbatim, a hand-written `public/_redirects` and adapter-generated rules **coexist in one file**, with your hand-written rules first — and Netlify processes the first matching rule top-to-bottom. That is a usable, deliberate combination.

It does **not** write to `netlify.toml`. (There is a separate `writeNetlifyFrameworkConfig(config, logger)` call for framework config, but redirects go to `_redirects`.)

### Hand-writing `public/_redirects` — viable, and arguably simpler here

Netlify reads a `_redirects` file from the **publish directory root** (`dist/` for Astro). Astro copies `public/` into the output directory as-is, so `public/_redirects` → `dist/_redirects`. Netlify's own docs confirm the file must survive the build into the deploy folder.

```
# public/_redirects — 6 changed URLs + 2 deletions
/projetos/socioeducativo            /projetos/socioeducacional         301
/projetos/aulas-de-jiu-jitsu        /projetos/jiu-jitsu                301
/projetos/aulas-de-bateria          /projetos/bateria                  301
/projetos/instituto-de-vencedores   /projetos/instituto-de-vencedores  301
/quem-somos                         /sobre                             301
/voluntario                         /seja-voluntario                   301

# deleted pages -> nearest relevant parent (301 preserves the link equity)
/acoes/acao-de-pascoa-na-comunidade-porto-de-areia   /acoes   301
/acoes/acao-de-doacao-de-roupas-comunidade-porto-de-areia   /acoes   301
```

(Destinations above are placeholders — substitute the real new URLs.)

Netlify `_redirects` facts, from <https://docs.netlify.com/manage/routing/redirects/overview/>:

- Default status is **301**; `302` for temporary; `200` is a rewrite/proxy.
- Paths are **case-sensitive**; special characters must be URL-encoded; `#` starts a comment.
- `_redirects` rules are processed **before** `netlify.toml` rules; within a file, the **first match wins**.
- **`force`/`!` matters here:** by default a redirect rule does **not** override existing content at that path. If Astro still emits `dist/quem-somos/index.html` (because the page file still exists, or because a meta-refresh page was generated), Netlify serves the file and your 301 never fires. Delete the old page files, or append `!` to force.

### Recommendation

Pick **one** of:

- **A (preferred):** install `@astrojs/netlify`, keep `output: 'static'`, declare redirects in `astro.config.mjs` `redirects`. One source of truth, typed, and Astro will error on obviously broken dynamic-param redirects. Real 301s in `dist/_redirects`.
- **B:** no adapter, hand-write `public/_redirects`, and set `build.redirects: false` in `astro.config.mjs` if you also use the `redirects` config (to stop meta-refresh HTML files shadowing the rules).

Do **not** ship the default (static, no adapter, `redirects` config only) and assume you have 301s — you have meta refresh pages.

Additional SEO note for a live, indexed site: Gatsby's default output is directory-style with trailing slashes (`/quem-somos/`). Astro's `build.format` default is `'directory'` (`/quem-somos/index.html`) and `trailingSlash` defaults to `'ignore'`, so URLs match by default — but if you change either setting you silently 301-or-404 every indexed URL. <https://docs.astro.build/en/reference/configuration-reference/#buildformat>

---

## 5. SEO plumbing

**Direct answer:** `gatsby-plugin-sitemap` → **`@astrojs/sitemap`**; `gatsby-plugin-robots-txt` → a **static `public/robots.txt`** (or a `src/pages/robots.txt.ts` endpoint if you need it generated); the per-page `Head` export → a **Layout component that takes `title`/`description`/`image` props** and renders the `<head>`. `astro-seo` exists but is a third-party package whose Astro 7 compatibility I could not confirm.

### Sitemap

```bash
npx astro add sitemap
```

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sarandocarapicuiba.org',   // REQUIRED, must start with http(s)://
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      // customPages: ['https://sarandocarapicuiba.org/externa'],
    }),
  ],
});
```

Options: `filter()`, `customPages`, `entryLimit` (default 45000), `changefreq`, `lastmod`, `priority`, `serialize()`, `i18n`, `xslURL`. Output is **`sitemap-index.xml` + `sitemap-0.xml`** in the output dir — note that the index file is `sitemap-index.xml`, **not** `sitemap.xml`, which differs from what `gatsby-plugin-sitemap` produced (`/sitemap-index.xml` in Gatsby 4+, but the current `gatsby-config.ts` advertises `https://sarandocarapicuiba.org/sitemap.xml` in the robots.txt block). Documented limitation: it cannot generate entries for dynamic routes in SSR mode — irrelevant for a fully static build. <https://docs.astro.build/en/guides/integrations-guide/sitemap/>

### robots.txt

Simplest and closest to what the site does today — a static file:

```
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://sarandocarapicuiba.org/sitemap-index.xml
```

This is the form the sitemap integration docs themselves recommend. <https://docs.astro.build/en/guides/integrations-guide/sitemap/>

If you want the `gatsby-plugin-robots-txt` behaviour of a different policy per environment, use a static file endpoint instead:

```ts
// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';

const sitemapURL = new URL('sitemap-index.xml', import.meta.env.SITE);

export const GET: APIRoute = () =>
  new Response(
    import.meta.env.PROD
      ? `User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL.href}\n`
      : `User-agent: *\nDisallow: /\n`,
    { headers: { 'Content-Type': 'text/plain' } },
  );
```

Static file endpoints: put a `.js`/`.ts` file in `src/pages/` whose name includes the target extension (the `.js`/`.ts` is stripped at build), export `GET`, and in static output it is "called at build time and use[s] the contents of the body to generate the file". <https://docs.astro.build/en/guides/endpoints/>

Caveat: Astro 6 changed endpoint routing — "custom endpoints with file extensions (like `sitemap.xml`) can no longer be accessed with trailing slashes". <https://docs.astro.build/en/guides/upgrade-to/v6/>

### Per-page title / description / Open Graph

The Astro equivalent of Gatsby's `export const Head = () => …` is simply **props on a layout**. There is no separate head API; `.astro` pages render the real `<head>`.

```astro
---
// src/layouts/BaseLayout.astro
export interface Props {
  title: string;
  description: string;
  image?: string;         // path under /public or an imported asset's .src
  noindex?: boolean;
}
const { title, description, image = '/og-default.jpg', noindex = false } = Astro.props;
const canonical = new URL(Astro.url.pathname, Astro.site);
const ogImage = new URL(image, Astro.site);
---
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    {noindex && <meta name="robots" content="noindex, nofollow" />}

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sarando Carapicuíba" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={ogImage} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />

    <slot name="head" />   {/* per-page extras: JSON-LD, preloads, alternate links */}
  </head>
  <body>
    <slot />
  </body>
</html>
```

Used from a page:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Quem somos | Sarando Carapicuíba" description="…">
  <script type="application/ld+json" slot="head" set:html={JSON.stringify(orgJsonLd)} />
  <h1>Quem somos</h1>
</BaseLayout>
```

`<slot name="head" />` + `slot="head"` is the documented named-slot mechanism, and the docs explicitly show forwarding a `head` slot through nested layouts with `<slot name="head" slot="head" />`. <https://docs.astro.build/en/basics/astro-components/#named-slots> · <https://docs.astro.build/en/basics/layouts/>

`Astro.site` is populated from the `site` config; `Astro.url` gives the current URL — together they produce canonicals without hardcoding the domain.

**`astro-seo`:** version 1.1.0, MIT, gives you an `<SEO>` component with typed `openGraph`/`twitter` objects. It declares **no `peerDependencies`** and its most recent devDependency is `astro@^5.16.0`, so I **could not confirm** it is tested against Astro 7. For a 12-page site the ~40-line layout above is less risk than a dependency.

### Gatsby → Astro mapping

| Gatsby (current) | Astro 7 equivalent |
| --- | --- |
| `gatsby-plugin-sitemap` | `@astrojs/sitemap` (requires `site`) |
| `gatsby-plugin-robots-txt` | `public/robots.txt`, or `src/pages/robots.txt.ts` endpoint |
| `export const Head` per page | `<BaseLayout title description>` + `<slot name="head" />` |
| `gatsby-plugin-google-gtag` | raw gtag snippet with `is:inline` (see §6) |
| `gatsby-plugin-image` / `-sharp` / `gatsby-transformer-sharp` | `astro:assets` (`<Image>`, `<Picture>`), Sharp is built in |
| `gatsby-plugin-mdx` | `@astrojs/mdx` |
| `gatsby-plugin-postcss` + `tailwindcss@3` | `@tailwindcss/vite` + `@import "tailwindcss";` |
| `gatsby-plugin-manifest` | hand-written `public/site.webmanifest` + `<link rel="manifest">` (no official Astro integration; **could not confirm** any first-party equivalent) |
| `gatsby-source-filesystem` | not needed — `glob()`/`file()` loaders, or plain `src/pages` |

---

## 6. GA4 (`G-6N23FX10H6`)

**Direct answer:** There is **no official Astro Google Analytics integration**. The answer is the raw gtag.js snippet pasted into your base layout's `<head>` with **`is:inline`** on both `<script>` tags. If you never add `<ClientRouter />`, nothing else is needed. If you do add view transitions, gtag's automatic `page_view` will not fire on client-side navigations and you must send them manually from `astro:page-load`.

### The snippet

```astro
---
// inside src/layouts/BaseLayout.astro, immediately after <head>
const GA_ID = 'G-6N23FX10H6';
---
<head>
  <!-- Google tag (gtag.js) -->
  <script is:inline async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
  <script is:inline define:vars={{ GA_ID }}>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_ID);
  </script>
  <!-- … -->
</head>
```

Google's canonical snippet and the instruction to "Place the Google tag snippet immediately after the opening `<head>` HTML tag on every page you want to measure": <https://developers.google.com/tag-platform/gtagjs/install>

### Why `is:inline` matters

Astro processes `<script>` tags that have **no attributes other than `src`**: it bundles them, applies TypeScript, resolves imports, converts them to `type="module"`, deduplicates them, and may inline small ones. `is:inline` opts out entirely — the tag is emitted byte-for-byte as written.

Concretely, without `is:inline` on the gtag snippet:

- Astro would convert the inline block to a bundled ES module, so `function gtag(){}` would be **module-scoped, not global** — anything else on the page calling `gtag(...)` breaks.
- The `src` script pointing at `googletagmanager.com` would be treated as something Astro should try to resolve/bundle rather than a third-party URL. The docs are explicit: "To load scripts outside of your project's `src/` folder, include the `is:inline` directive."
- The bundled-module form runs **once**, deferred — which is not what a tag snippet expects in `<head>`.

Documented `is:inline` behaviour, verbatim: "Will not be bundled into an external file"; "Will not be deduplicated—the element will appear as many times as it is rendered"; "Will not have its `import`/`@import`/`url()` references resolved relative to the `.astro` file". It is also **applied automatically** whenever a `<script>` carries any attribute besides `src` — so `async src=…` technically already triggers it, and `define:vars` on a script implies `is:inline` too. Writing it explicitly is still the right call: it documents intent and survives refactors that drop the extra attributes. <https://docs.astro.build/en/reference/directives-reference/#isinline> · <https://docs.astro.build/en/guides/client-side-scripts/>

### View transitions / client-side routing

This only applies if you opt into `<ClientRouter />`. A plain Astro static site does full-page navigations, so `gtag('config', …)` fires its automatic `page_view` on every page — nothing to do.

With `<ClientRouter />`:

- "Bundled module scripts, which are the default scripts in Astro, are only ever executed once. After initial execution they will be ignored, even if the script exists on the new page after a transition."
- Inline scripts *may* re-execute on navigation; `data-astro-rerun` forces it: `<script is:inline data-astro-rerun>…</script>`.
- `astro:page-load` is "dispatched after a page completes loading, whether from a navigation using view transitions or native to the browser" — i.e. it fires on the **initial** load too, which is exactly what you want and also exactly the double-counting hazard.

Sources: <https://docs.astro.build/en/guides/view-transitions/> · <https://docs.astro.build/en/reference/modules/astro-transitions/>

The correct pattern is to disable gtag's automatic pageview and send them yourself, so initial load and SPA navigations are handled by one code path:

```astro
<script is:inline async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
<script is:inline define:vars={{ GA_ID }}>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA_ID, { send_page_view: false });

  document.addEventListener('astro:page-load', () => {
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: location.href,
    });
  });
</script>
```

Google's rules being applied here:

- `gtag('config', 'TAG_ID', { send_page_view: false })` disables the automatic pageview, and "The `send_page_view` setting in the `config` command does not persist across pages" — fine, since the snippet is in every page's head.
- Manual send: `gtag('event', 'page_view', { page_title, page_location })`.
- "If you send manual pageviews without disabling pageview measurement, you may end up with duplicate pageviews." Also: with Enhanced Measurement on, you may need to disable **"Page changes based on browser history events"** in the GA4 property, because `<ClientRouter />` uses the History API and GA would count those navigations too.

Sources: <https://developers.google.com/analytics/devguides/collection/ga4/views> · <https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications>

### Partytown

`@astrojs/partytown` (2.1.7) is a first-party Astro integration that moves third-party scripts to a web worker.

```js
// astro.config.mjs
import partytown from '@astrojs/partytown';
export default defineConfig({
  integrations: [partytown({ config: { forward: ['dataLayer.push', 'gtag'] } })],
});
```

Then `<script type="text/partytown" src="…gtag/js?id=…">`. The docs stress it is "for third-party scripts for things like analytics or ads" — not your own code. <https://docs.astro.build/en/guides/integrations-guide/partytown/>

Caveats for this site: Partytown is a real behavioural change (worker-proxied `document`/`window`), it declares **no peer dependency range** so its Astro 7 compatibility is unverified from metadata, and for one small gtag tag on a 12-page brochure site the main-thread win is marginal. **Recommendation: skip it**, ship the inline snippet.

### Consent

Nothing Astro-specific. If you need LGPD/GDPR consent gating, the mechanism is Google Consent Mode — `gtag('consent', 'default', {...})` before the `config` call, then `gtag('consent', 'update', {...})` after the user chooses. I did not fetch the Consent Mode reference in this pass, so treat the exact parameter names as **unconfirmed** here.

---

## Minimal setup for this specific site

`package.json`:

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
    "@astrojs/mdx": "^7.0.7",
    "@astrojs/netlify": "^8.2.3",
    "@astrojs/sitemap": "^3.7.3",
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

Drop `@astrojs/netlify` if you decide to hand-write `public/_redirects` (§4 option B). Add `sharp` explicitly only if the Netlify build complains — Astro bundles the Sharp image service by default.

`astro.config.mjs`:

```js
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sarandocarapicuiba.org',
  output: 'static',
  adapter: netlify(),          // omit if hand-writing public/_redirects
  trailingSlash: 'ignore',     // default; keeps Gatsby's /page/ URLs working
  build: { format: 'directory' }, // default; matches Gatsby's output shape

  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },

  integrations: [
    mdx(),
    sitemap({ filter: (page) => !page.includes('/404') }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    // '/projetos/socioeducativo': '/projetos/socioeducacional',
    // …6 changed URLs + 2 deleted pages
  },
});
```

`src/styles/global.css`:

```css
@import "tailwindcss";
```

imported once from `BaseLayout.astro`. `npx astro add tailwind` wires this up automatically on Astro ≥ 5.2.0. <https://docs.astro.build/en/guides/styling/#tailwind>

`netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22.12.0"
```

---

## Sharp edges for this migration

1. **Meta refresh is not a 301.** The single biggest trap. Static Astro with no adapter turns `redirects` into `<meta http-equiv="refresh">` HTML pages. For 6 changing URLs + 2 deletions on an indexed site, you need either `@astrojs/netlify` (which sets `build.redirects: false` and emits `dist/_redirects` with real 301s) or a hand-written `public/_redirects`. Verified in adapter source, not just docs.

2. **A leftover page file silently kills its redirect — twice over.** Astro: "File-based routes take precedence over redirects." Netlify: a redirect rule does not override existing content unless forced with `!`. So if `src/pages/quem-somos.astro` survives the rebuild, `/quem-somos` will keep 200-ing regardless of what you put in `_redirects`. Delete the old pages *and* verify with `curl -I` after deploy.

3. **`_redirects` is appended, not written.** The adapter appends its rules to `dist/_redirects`. If you also ship `public/_redirects`, both end up in one file, yours first, and Netlify takes the first match. Intentional use is fine; accidental duplicate rules are confusing.

4. **Sitemap filename changed.** `@astrojs/sitemap` emits `sitemap-index.xml`, but the current `gatsby-config.ts` tells robots.txt and Search Console about `https://sarandocarapicuiba.org/sitemap.xml`. Update `public/robots.txt` and resubmit in Search Console, or add a `/sitemap.xml → /sitemap-index.xml 301` rule.

5. **`@astrojs/tailwind` is a dead end on Astro 7.** Its peer range stops at `astro@^5`. You must move to `@tailwindcss/vite` + Tailwind 4, which is a *language* migration too: the `tailwind.config.js` file is replaced by CSS-first `@theme` config, and several v3 utility names changed. Budget real time for the existing `tailwind.config.js` and any v3-only class names in the 12 pages.

6. **Astro 7 changed the Markdown engine.** Sätteri replaced remark/rehype as the default pipeline; `@astrojs/mdx@7` peers on `@astrojs/markdown-satteri@^0.3.1`. If any content depends on remark/rehype plugins, you must reinstall `@astrojs/markdown-remark` or port them. <https://docs.astro.build/en/guides/upgrade-to/v7/>

7. **Zod is v4 under `astro/zod`, and `import { z } from 'astro:content'` is deprecated** (the shipped type declaration in 7.2.4 literally says it "will be removed in Astro 7" while still exporting it — an inconsistency in the package, flagged as `// TODO`). Write `import { z } from 'astro/zod'` from day one.

8. **Public images give you no dimensions.** If you take the lazy path and dump `static/*.webp` into `public/`, every `<img>` needs hand-written `width`/`height` or you ship CLS that Gatsby's `gatsby-plugin-image` was previously handling for you. This is a real regression risk, not a neutral choice.

9. **Node floor is 22.12.0.** Netlify must be pinned via `NODE_VERSION` or `.nvmrc`; the default build image may be older and will fail confusingly.

10. **Netlify Forms need the form in the built HTML.** Fine for `.astro` pages. The moment someone converts the contact form into a `client:load` React island, build-time detection breaks and you need the hidden static form plus an explicit `form-name` hidden input.

11. **Trailing slashes.** Gatsby served `/quem-somos/`. Astro's defaults (`build.format: 'directory'`, `trailingSlash: 'ignore'`) match. Changing either "for cleanliness" re-writes every indexed URL. Don't.

12. **View transitions + GA4 double counting.** Only if you add `<ClientRouter />`: `astro:page-load` fires on initial load *and* on navigation, so you must pair the manual `page_view` with `send_page_view: false`, and check GA4's Enhanced Measurement "Page changes based on browser history events" setting.

13. **`astro-seo` compatibility unconfirmed.** No declared peer range, last tested against `astro@^5.16.0`. Hand-roll the head instead.

14. **No first-party manifest integration.** `gatsby-plugin-manifest` has no Astro equivalent I could find; write `public/site.webmanifest` and the icon set by hand. **Could not confirm** any official alternative.
