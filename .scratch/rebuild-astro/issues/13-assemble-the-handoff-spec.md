# Assemble the migration handoff spec

Type: task
Status: resolved
Blocked by: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12

## Question

This is the destination. Gather everything the map resolved into one document a single session can execute the Gatsby→Astro migration against, deciding nothing.

It must contain, or link tightly to:

- The page list, URL map, and the old→new redirect table.
- The content collection schemas, and where each existing piece of content lands.
- The locked design: brief, tokens, component inventory, and the approved prototype.
- The final copy for every page, including titles and meta descriptions.
- The document and asset inventory — what exists, what is missing, what the fallback is.
- The Astro-specific findings: images, forms, redirects, sitemap, robots, GA4.
- The build and deploy path on Netlify, and what has to be true before DNS points at the new site.
- An explicit list of what is *not* being migrated: the two church project pages, and everything in the map's Out of scope section.

When this closes, the map is done.

**Build environment, from the Astro research ticket:** Node floor is **22.12.0** — Netlify must be pinned via `NODE_VERSION` or `.nvmrc` or the build fails confusingly, and neither file exists in the repo today. The spec must also carry the post-deploy verification step: `curl -I` every redirected URL to confirm a real 301 rather than a meta refresh.
**Dependency note from the schemas ticket:** `@astrojs/mdx` is **not** installed. The minimal dependency set is Astro 7, `@astrojs/netlify`, `@astrojs/sitemap`, `@tailwindcss/vite` and Tailwind 4.

**From the donor-path ticket:** no Netlify Forms, no form handling of any kind. The build is fully static with no form processing to configure.

## Answer

**[HANDOFF.md](../HANDOFF.md)** is written. Fifteen sections, ~620 lines, and it is the destination: a session can execute the Gatsby to Astro migration against it without making a design, content, IA or infrastructure choice.

It carries the page list and URL map, the three-line redirect table, the collection schemas and where every existing file lands, the token spine with the corrected contrast values, the component inventory, the asset moves, the Astro-specific findings, the Netlify build path, the post-deploy `curl -I` verification, the launch checklist split into blocking and non-blocking, and the explicit list of what is not being migrated.

### Four decisions made while assembling, because leaving them open would break the "decide nothing" promise

1. **No Netlify adapter.** The build is fully static, has no SSR and no forms, and needs exactly three redirect rules. A hand-written `public/_redirects` does that with one fewer dependency and without the adapter's append behaviour, which is one of the research doc's sharp edges. The research doc recommended the adapter; this reverses it, knowingly.
2. **Fonts are self-hosted via `@fontsource-variable`, not loaded from Google Fonts.** This one is not aesthetic. The privacy policy tells the reader nothing loads before they choose, and a `fonts.googleapis.com` request hands Google the visitor's IP on first paint no matter what the consent bar says. Self-hosting also removes a render-blocking third-party request from a site whose LCP is a full-bleed photograph.
3. **A performance budget, which no ticket had set.** A photography-led design without one drifts to a 4MB home page. Home ≤ 1.2 MB transferred, hero ≤ 250 KB, any other image ≤ 150 KB, JavaScript ≤ 20 KB on any page, LCP ≤ 2.5s on throttled 4G. Stated as the decision rather than as guidance, with the rule that a page failing the budget has too heavy a photograph, not too tight a budget.
4. **The README carries "how to publish an ação".** The content model was chosen so a volunteer could add one without a developer, and that only becomes true if someone writes the four steps down.

Also corrected in passing: the schema's `import { defineCollection, reference }` imported `reference`, which nothing uses. Dropped.

### The map is done

Every decision the migration depends on is closed. What remains open is five tickets of work that belongs to the association rather than to the rebuild: the estatuto, the CMDCA registration, the seven unconfirmed facts, the contador review, and the image-consent review. Only the contador review blocks launch, and it blocks publishing the tax copy rather than building the site.
