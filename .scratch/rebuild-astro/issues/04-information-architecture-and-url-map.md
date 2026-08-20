# Information architecture and URL map

Type: grilling
Status: resolved
Blocked by: —

## Question

What pages does the new site have, what is each one for, how do they nest, and what URL does each live at?

Inputs and constraints:

- The site is live and indexed. Every URL that changes needs a redirect, and the two retired church projects (`/projetos/instituto-de-vencedores`, `/projetos/revisao-de-vidas`) need a decided fate — redirect to a projects index, or gone.
- `/projetos`, `/politica-de-privacidade` and `/termo-e-condicoes` are linked from the footer and 404 today. They exist in the new IA or the links die.
- Corporate donations are the primary goal, which probably means the donor path is not a single `/doacoes` page serving individuals and companies with one voice.
- A transparência section is settled as part of the IA (documents, board, CNPJ).
- Four social projects, not six.
- Ações become a collection with an index — they are the site's evidence.
- Nav today is four items: Quem somos, Doações, Seja um voluntário, Contato (an anchor). Header and footer nav both need deciding.

Resolve with: the full page list, the URL for each, the nav structure, and the old→new redirect table.

**From the Astro research ticket:** the redirect mechanism is settled — real 301s require `@astrojs/netlify` (which appends rules to `dist/_redirects`) or a hand-written `public/_redirects`; the bare `redirects` config in a static build only emits meta-refresh pages, which is not good enough for an indexed site. Two traps to design around: a surviving page file silently beats its own redirect, and `@astrojs/sitemap` emits `sitemap-index.xml` while the live `robots.txt` still advertises `sitemap.xml` to Search Console — so the URL map needs a decision on that too. Trailing-slash behaviour matches Gatsby's by default; do not change it.

**From the two collection tickets — an open question this ticket must settle.** No institutional documents exist, and the association's instruction is to leave the estatuto and termo links as `href="#"`. That means the transparência section as conceived (documents + board + CNPJ) has only the board and the CNPJ number left. Decide here: (a) keep the dead links, as instructed; (b) remove the links until the documents exist, so nothing on the site is visibly broken; (c) drop the transparência page entirely and fold the board and CNPJ into quem-somos. The recommendation is (b) or (c) — a link that goes nowhere reads worse to a corporate donor than a page that never promised the document. The association's instruction stands unless they revisit it, but the choice should be made knowingly.

Also settled: **LinkedIn and Facebook are removed** from the footer, leaving Instagram as the only social link.

## Answer

### Sitemap

| URL | Status | Purpose |
|---|---|---|
| `/` | keep | Hero → what the association does → four projects → ações strip → split CTA (empresas \| doar \| voluntariar). Leads with the community, not the pitch. |
| `/quem-somos` | keep | Story, missão, 3 pilares, **the board of nine, CNPJ and address** (moved here from the abandoned transparência idea). |
| `/projetos` | **new** | Projects index. Fixes a footer link that 404s in production today. |
| `/projetos/capacitacao-profissional` | keep | Project page + shared "como participar" block. |
| `/projetos/aulas-de-bateria` | keep | idem |
| `/projetos/aulas-de-jiu-jitsu` | keep | idem |
| `/projetos/socioeducativo` | keep | idem |
| `/acoes` | **new** | Ações index — the site's evidence spine, dated and photographed. |
| `/acoes/primeira-acao-na-comunidade-do-murao` | keep | Existing slug, unchanged. |
| `/acoes/acao-de-pascoa-na-comunidade-porto-de-areia` | keep | idem |
| `/acoes/acao-de-doacao-de-alimentos-comunidade-porto-de-areia` | keep | idem |
| `/acoes/acao-de-doacao-de-roupas-comunidade-porto-de-areia` | keep | idem |
| `/empresas` | **new** | Corporate donor path. Split out of `/doacoes` so it can be linked directly into an email to a CSR contact. |
| `/doacoes` | keep | Individual giving: PIX, bank details, WhatsApp. Keeps its URL and its search history. |
| `/voluntario` | keep | Google Form (`forms.gle/HKefw1S6r5Vmn6M16`). |
| `/politica-de-privacidade` | **new** | Required — the site runs GA4. |
| `/404` | keep | |
| `/projetos/instituto-de-vencedores` | **retired** | 301 → `/projetos` |
| `/projetos/revisao-de-vidas` | **retired** | 301 → `/projetos` |
| `/termo-e-condicoes` | **dropped** | Never existed; the footer link is removed rather than a boilerplate page written. |

Seventeen live URLs, four new pages, **two redirects**. Every surviving page keeps its address — the cheapest possible SEO outcome for an indexed site.

### Navigation

**Header:** Quem somos · Projetos · Ações · Doações · Para empresas — five items, the mobile ceiling.

"Seja um voluntário" is **demoted from the nav** to a CTA block on the pages where it belongs plus a footer link: it is third priority behind corporate and individual giving, and it converts through an external form anyway. **Contato stays a footer anchor** (`#contato`) rather than becoming a page — a `/contato` page would hold the same four facts the global footer already shows.

**Footer:** Quem somos · Projetos · Ações · Doações · Para empresas · Seja um voluntário · Política de privacidade. **LinkedIn and Facebook icons removed**; Instagram only.

### Transparência: decided against, for now

No `/transparencia` page. A page with that title offering no documents draws attention to their absence. The board, CNPJ and address move to `/quem-somos`, where they read as identity rather than as evidence.

**The dead links are removed, not carried over** — this reverses the earlier "keep it `#`" instruction, made knowingly: the estatuto link on quem-somos and both termo de doação links on doacoes simply do not appear in the new site. The day the estatuto arrives (see the estatuto-recovery ticket), `/transparencia` gets created and the links become real.

### Redirects

Real 301s, which per the Astro research means `@astrojs/netlify` or a hand-written `public/_redirects` — the bare `redirects` config in a static build emits meta refresh and is not good enough here:

```
/projetos/instituto-de-vencedores   /projetos   301
/projetos/revisao-de-vidas          /projetos   301
/sitemap.xml                        /sitemap-index.xml   301
```

The third line resolves the sitemap-filename mismatch: `@astrojs/sitemap` emits `sitemap-index.xml` while the live `robots.txt` advertises `sitemap.xml` to Search Console. Update `robots.txt` to point at the new filename **and** keep the redirect for the already-submitted URL.

Two traps carried from the research ticket: the retired page files must actually be deleted (a surviving file silently beats its own redirect, in both Astro and Netlify), and trailing-slash behaviour must be left at Astro's defaults, which already match Gatsby's.

## Amendment, after the legal-pages ticket

`/voluntario` no longer links to the Google Form. The form was found closed, and the decision is that it does not come back: WhatsApp is the only volunteer path. The URL map is unchanged, the page stays, and the site now has **no form of any kind**.
