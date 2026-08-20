# Astro capabilities this rebuild depends on

Type: research
Status: resolved
Blocked by: —

## Question

What does current Astro actually give us for the specific things this site needs, and where are the sharp edges?

Answer against primary sources (Astro docs, Netlify docs) — not training data — and record versions, because several of these APIs changed recently:

1. **Content collections** — schema definition, the loader API, how Markdown/MDX bodies and frontmatter are typed, and how collection entries render to routes.
2. **Images** — optimisation for images referenced from collection frontmatter vs `public/`, formats, responsive output, and what the current ~25 `.webp` files in `static/` would need.
3. **Netlify** — the adapter, whether this site needs one at all if it stays fully static, Netlify Forms with an Astro build, and how form submissions surface.
4. **Redirects** — declaring redirects from the old Gatsby URLs, static vs adapter-based, and what lands in `_redirects`.
5. **SEO plumbing** — sitemap, robots.txt, and per-page meta/OG tags (the Gatsby site uses `gatsby-plugin-sitemap`, `gatsby-plugin-robots-txt`, and a `Head` export per page).
6. **GA4** — the current idiom for adding a `gtag` property (`G-6N23FX10H6`) without a Gatsby-style plugin.

Capture findings as a Markdown file in the repo and link it from the answer.

## Answer

Full findings, with citations and code: [`.scratch/rebuild-astro/research/astro-capabilities.md`](../research/astro-capabilities.md) (803 lines). Version claims below were re-verified directly against the npm registry, not taken on the research agent's word.

**Baseline.** Astro **7.2.4**, Node **>= 22.12.0** (local machine is on v24.11.1, fine). `@astrojs/netlify` 8.2.3, `@astrojs/sitemap` 3.7.3, `@astrojs/mdx` 7.0.7, Tailwind **4.3.3**.

**The six questions, answered:**

1. **Collections** — `src/content.config.ts` only; a `loader` (`glob()`/`file()`) is mandatory. `entry.slug`, `entry.render()` and `getEntryBySlug()` are gone: use `entry.id` and the standalone `render(entry)`. Import Zod as `astro/zod` (Zod 4) — `import { z } from 'astro:content'` is deprecated.
2. **Images** — responsive images are stable since 5.10.0. Recommended split for the existing 25 `.webp`: `src/assets/` + `<Image>` for anything a component renders (gets AVIF, srcset, intrinsic dimensions), `public/` only for logo, favicon, OG images and anything hotlinked.
3. **Netlify** — the adapter is *not* required for a static build, but is recommended here anyway because it is what emits real redirects. Netlify Forms work natively from `.astro` pages since the form is in the built HTML; the hidden-form hack is only needed if a form becomes a client-rendered island.
4. **Redirects** — the decisive finding. Static Astro with no adapter compiles `redirects` into **`<meta http-equiv="refresh">` pages, not 301s**. Verified in adapter source: `@astrojs/netlify` sets `build.redirects: false` and appends real rules (301 by default) to `dist/_redirects`, including under `output: 'static'`. A hand-written `public/_redirects` is equally valid.
5. **SEO** — `@astrojs/sitemap` (requires `site`), `robots.txt` as a static file or endpoint, and a hand-rolled Layout with props + `<slot name="head" />` for per-page title/description/OG. `astro-seo` on Astro 7 **could not be confirmed** — hand-roll instead.
6. **GA4** — no official integration; raw gtag snippet with `is:inline` in the layout head (without `is:inline`, bundling scopes `gtag` to the module instead of `window`). View transitions only complicate this if `<ClientRouter />` is added.

**Three findings that change other tickets:**

- **`@astrojs/tailwind` is a dead end on Astro 7** — its peer range stops at `astro@^5` (confirmed: 6.0.2 peers `^3 || ^4 || ^5`). The rebuild goes to `@tailwindcss/vite` + Tailwind 4, which is a *language* change: no `tailwind.config.js`, CSS-first `@theme` instead. Folded into the design system spec ticket.
- **Astro 7 changed the Markdown engine** — `@astrojs/mdx@7` peers on `@astrojs/markdown-satteri@^0.3.1` (confirmed to exist, 0.3.7) rather than remark/rehype. Only bites if content needs remark plugins; this content does not.
- **The sitemap filename changed** — `@astrojs/sitemap` emits `sitemap-index.xml`, but the live `robots.txt` advertises `sitemap.xml` to Search Console. Folded into the IA and URL map ticket.

**Two traps recorded for the migration session:** a surviving page file silently beats its own redirect (in both Astro *and* Netlify, the latter needing `!` to force), and images left in `public/` need hand-written `width`/`height` or the rebuild ships CLS that `gatsby-plugin-image` was absorbing. Trailing-slash behaviour matches Gatsby's by default — do not "tidy" it.

No new tickets surfaced; the open questions this raised were already inside existing tickets.
