# Map: Rebuild sarandocarapicuiba.org on Astro

Label: `wayfinder:map`

## Destination

A **migration-ready handoff spec**: an approved design prototype, a specified Astro content model, and fully rewritten PT-BR copy — enough that one session can mechanically port the site from Gatsby to Astro without deciding anything.

The map is **plan-only**. The one thing it builds is the design itself (a code prototype), because the AI produces the visual direction — there is no designer. The Gatsby→Astro migration is not on this map.

**Reached, 2026-08-19.** The spec is [HANDOFF.md](HANDOFF.md). Every decision the migration depends on is closed. Five tickets stay open and none of them blocks the build: the estatuto, the CMDCA registration, seven unconfirmed facts, the contador review of the tax copy (which blocks *publishing* that copy, not building the site), and the image-consent review.

## Notes

**Domain.** Associação Sarando Carapicuíba — a non-profit in Carapicuíba, SP, Brazil. CNPJ 05.392.117/0001-81. Site is live at sarandocarapicuiba.org, PT-BR only, Gatsby 5 + Tailwind + Netlify + GA4 (`G-6N23FX10H6`). ~15 hardcoded `.tsx` pages, copy inlined in JSX, ~25 webp images in `static/`, one `src/actions.json`.

**Settled while charting — treat as constraints, not open questions:**

- **Primary goal: corporate donations.** Individual donation (PIX/bank) and volunteering stay supported but secondary. The Lei 9.249/95 tax-deduction argument was named as the wedge while charting and **was later removed from the site entirely**: `/empresas` leads on patrocine uma ação and on being local, and makes no tax or legal claim at all.
- **No impact data exists, and none will be gathered.** Numbers stay exactly as they are today (the per-ação figures like "40 famílias no Murão"). Credibility on the donor path is carried by institutional documents + the dated, photographed ações — not by aggregate metrics.
- **Content lives in Astro content collections** (Markdown/MDX in the repo), with frontmatter schemas designed so a CMS could be bolted on later. No CMS now.
- **Redesign = new visual system on the existing logo.** New palette, type scale, components. Logo and name untouched.
- **Register: warm editorial**, photo-led, with an institutional layer on the donor and transparência pages.
- **IA gets redrawn.** Projects and ações become collections with index pages. `/projetos`, `/politica-de-privacidade` and `/termo-e-condicoes` are linked from the footer today and **404 in production**.
- **The two church-linked projects are cut**, not migrated: *Instituto de Vencedores* (formação de líderes de células da Sara Nossa Terra) and *Revisão de Vidas* (retiro espiritual). Four social projects survive: capacitação profissional, aulas de bateria, jiu-jitsu, socioeducativo. Old content stays recoverable in git history.
- **Copy is rewritten freely.** Faith identity stays intact on `/quem-somos` where it is the association's own story; the donor path leads with concrete outcomes.
- **Volunteering has no form.** The Google Form was found closed ("não aceita mais respostas") while writing the legal-pages ticket, and the decision is that it does not come back. WhatsApp is the only volunteer path, and **the site collects no personal data anywhere**, which is what keeps the privacy policy short.
- **Photos are reused**, not reshot. Gaps become a shot list, and the rebuild does not block on a photo session.

**Skills every session should consult:** `ui-craft` + `ui-craft-editorial` (design work), `tokens` and `brief` (token spine), `unslop` (all PT-BR copy), `find-docs` / `ctx7` (any Astro API question — never answer from training data), `grilling` + `domain-modeling` (default for decision tickets), `prototype` (the design direction ticket).

**Stack baseline** (verified against the npm registry 2026-08-19, see the research doc): Astro **7.2.4**, Node **>= 22.12.0**, Tailwind **4.3.3** with CSS-first `@theme`, `@astrojs/netlify` 8.2.3, `@astrojs/sitemap` 3.7.3, `@astrojs/mdx` 7.0.7. Much of what is written online about Astro content collections and images is stale — check the research doc before trusting a memory or a blog post.

**Known broken things to fix on the way through:** `/projetos/instituto-de-vencedores` references `/iv-aula.webp`, which does not exist in `static/` (moot once that page is cut). The footer shows `mailto:contato@sarandocarapicuiba.org` but displays `associacao-sarando-carapicuiba@outlook.com` as the link text. Estatuto social and both termo de doação links are `href="#"`. LinkedIn and Facebook icons link to `#`.

## Decisions so far

<!-- one line per closed ticket: gist + link -->

- [Astro capabilities this rebuild depends on](issues/01-astro-capabilities-research.md) — Astro 7.2.4 / Node >= 22.12 / Tailwind 4. Static Astro without the Netlify adapter emits meta-refresh, **not 301s**, so `@astrojs/netlify` (or a hand-written `public/_redirects`) is required for the changing URLs. `@astrojs/tailwind` is dead on Astro 7 — CSS-first `@theme` replaces `tailwind.config.js`. Collections need a `loader`, `astro/zod`, and `entry.id` + standalone `render()`. Full findings: [research/astro-capabilities.md](research/astro-capabilities.md).

- [Collect the institutional documents](issues/02-collect-institutional-documents.md) — **no publishable documents exist at all** (no estatuto, no termos, no report; cartão CNPJ withheld). Confirmed: email is `associacao-sarando-carapicuiba@outlook.com`, `11 98195-0343` is WhatsApp, LinkedIn and Facebook are removed. Document links stay `href="#"` by instruction — contested, see the IA ticket.
- [Collect practical participation info](issues/03-collect-project-participation-info.md) — all four projects running at the association's address, free, open to all, unlimited places, **no fixed schedules**, joined via WhatsApp, instructors deliberately unnamed. The facts are identical across projects, so participation is a shared component, not per-project data.
- [Information architecture and URL map](issues/04-information-architecture-and-url-map.md) — 17 URLs, 4 new pages (`/projetos`, `/acoes`, `/empresas`, `/politica-de-privacidade`), **only 2 redirects** since every surviving page keeps its address. Donor path splits: `/empresas` (corporate, institutional) vs `/doacoes` (individual, PIX). No transparência page and **the dead document links are removed**, not carried over — board and CNPJ move to `/quem-somos`. Nav is five items; voluntário demoted to CTA, contato stays a footer anchor; `/termo-e-condicoes` dropped.
- [Lock the visual direction](issues/05-lock-the-visual-direction.md) — **Direction C "Campo"** locked: photography-led, alternating warm-ivory text sections and near-black full-bleed photo panels, gradient scrims replacing the current flat colour overlays. Lora + Source Sans 3; canvas `#FAF7F5`, panel `#141110`, accent the logo red `#E5262C`. Single committed light world, no dark mode. Prototype: <https://claude.ai/code/artifact/e4e3a3f7-cade-42f6-a006-56d06923d4e3>
- [Voice and messaging guide](issues/06-voice-and-messaging-guide.md) — "a gente" nas páginas comunitárias, "nós" em `/empresas`, "você" sempre para o leitor. Only checkable facts, no invented numbers, **no founding year until confirmed**. Sempre "associação", nunca "ONG"; **projeto** (semanal, na sede) e **ação** (datada, na comunidade) nunca se misturam. Fé fica em `/quem-somos`; a epígrafe de Tiago 1:27 sai de `/voluntario`. Zero exclamation marks, five fixed CTA labels.
- [Content collection schemas](issues/07-content-collection-schemas.md) — three collections (`acoes`, `projetos`, `equipe`), **Markdown only, MDX dropped**. Full `content.config.ts` written. No participation fields on projetos (they are a shared component); equipe is one JSON file with photos in `public/`. Filenames must equal today's slugs since the IA froze every URL. Kills `src/actions.json` and the double-entry it forces.
- [The corporate donor path](issues/08-corporate-donor-path.md) — **strategic reframe**: `/empresas` targets **local Carapicuíba businesses first**, large companies second. Primary asks are **patrocine uma ação** and **doação em espécie**, money third; the Lei 9.249/95 deduction stays but reaches only lucro-real companies, who are exactly the ones demanding documents the association lacks. Contact is **WhatsApp primary, email secondary, no form anywhere on the site**. Tax claims blocked on new research.
- [Photo inventory and shot list](issues/09-photo-inventory-and-shot-list.md) — library survives with one structural gap: **nothing is portrait**, and direction C's project grid crops to 3:4, putting three of four project images under the retina target. Three thin page-header strips retire with no replacement (the design has no such slot). `about.webp` becomes the hero. **The logo is a 733px raster; ask the designer for the vector.** Six-item shot list produced, all phone-shootable.
- [Design system spec](issues/10-design-system-spec.md) — full Tailwind 4 `@theme` spine, type scale, three layout primitives, component inventory. **Contrast measured, not assumed: three palette defects found and fixed** (the brand red fails as body text on both grounds; `ink-3` failed at 3.76:1). Scrim floor set numerically at **0.70** for white text over photography. The **mosaic motif is kept** in two structural places: the section rule and the diretoria grid. Panel rhythm is a layout primitive, not a per-page choice.
- [What Brazilian companies actually need in order to donate](issues/15-brazilian-corporate-giving-rules.md) — Lei 9.249/95 is **lucro real only, 2% do lucro operacional**, but needs **no certification**: only a bank credit in the association's name plus a declaração it issues itself. Certidões are compliance practice, not law. **Material finding: FUMCAD/CMDCA deducts from imposto devido (1% PJ, 6% PF, donor recovers 100%) and the association is not registered.** Donating goods triggers ICMS in SP with no general exemption. "Em espécie" means cash, not in-kind. Full findings: [research/doacoes-empresas-brasil.md](research/doacoes-empresas-brasil.md)

- [Rewrite all page copy](issues/11-rewrite-all-page-copy.md) — the full paste-in deck for all 17 URLs is written: [copy/copy-deck.md](copy/copy-deck.md). Hero and section copy, frontmatter plus body for all eight collection entries, the shared participation block, and title/meta/OG for every page. **`/politica-de-privacidade` is the one deliberate hole**, deferred to the legal-pages ticket. Three defects surfaced: the bateria page advertises prices for a free project, the three Porto de Areia and Murão ações all share one wrong `<title>`, and the surviving jiu-jítsu page references an image that does not exist. Nine unverifiable claims were held back rather than published.

- [What the legal pages must actually say](issues/12-legal-pages-scope.md) — `/termo-e-condicoes` stays dropped; the privacy policy is written and short. **The volunteer Google Form was found closed, so it is retired: WhatsApp is the only volunteer path and the site now collects no personal data at all.** GA4 gets a real consent bar and is not loaded before the click, retention drops to the 2-month floor, the channel is the association's e-mail with no encarregado named. Photographs of identifiable children get a takedown promise on the page, written authorização from the next ação onward, and a narrow review of what is already published.

- [Assemble the migration handoff spec](issues/13-assemble-the-handoff-spec.md) — **[HANDOFF.md](HANDOFF.md)**, the destination. Four things were decided in the assembly because leaving them open would have broken the promise that the migration decides nothing: **no Netlify adapter** (hand-written `public/_redirects`, reversing the research doc), **self-hosted fonts** rather than Google Fonts, since a third-party font request contradicts what the privacy page promises, a **performance budget** no ticket had set, and a README that explains how to publish an ação without a developer.

- [Confirm the facts the copy had to leave out](issues/17-confirmar-fatos-em-aberto.md) — seven of nine closed by the association. **Nobody in the association is paid, diretoria included, and everyone is a volunteer**, which is now the strongest free sentence on `/empresas`, `/quem-somos` and the home page. Sage confirmed as a named partner and the 300-course catalogue is published as Sage's. "Certificado reconhecido pelo MEC" stays out: curso livre carries no MEC recognition and it is a claim about a third party's certificate. The socioeducativo detail was waived, and the missing cesta count and the absent fixed schedule simply do not exist, so those pages stay as written.

- [Contador review of the tax copy](issues/18-revisao-contabil-do-texto-fiscal.md) — **resolved by removal.** No tax or legal claim appears anywhere on the site: the Lei 9.249/95 block, the ICMS warning and the Lei 14.016/2020 reference are out of `/empresas`, and `/doacoes` loses its income-tax section. In their place, a promise the association controls: it issues the declaração de recebimento, it receives into an account in its own name, and the company's accountant decides the rest. The lost argument was narrow (lucro real only, 2% cap) and aimed at the part of the audience least able to act. **Nothing tax-related gates the launch now.** If the CMDCA registration lands, reopen it with a contador.

## Not yet specified

*The destination is reached; what is left here is genuinely still fog, and each item waits on something nobody has asked yet.*

- **Scale of the ações collection.** _(partly addressed: `rascunho` and date-descending ordering are in the schema; pagination and tags still unspecified.)_  If the association starts posting more than a handful a year, the index needs pagination, filtering, or tags. Revisit once the content model is settled — right now four entries in five years makes this speculative.
- **Instagram as a proof channel.** With no documents and no metrics, `@sarandocarapicuiba` is one of the few signals that the association is visibly active. Whether the site surfaces it beyond a footer icon — an embedded feed, a "últimas ações" strip — waits on the design direction.
- **Apoiadores / parceiros.** No partner or sponsor logos exist on the site today. Whether the new site has a place for them depends on whether any partner agrees to be named, which nobody has asked yet.

## Out of scope

- **Logo or brand-mark redesign** — settled while charting; the mark carries local recognition.
- **A headless CMS** — settled while charting; the publishing rate does not justify the operational cost.
- **English or any i18n** — PT-BR only.
- **Online payment integration** (checkout, recurring giving, PagSeguro/Stripe/etc.) — PIX and bank transfer remain the only mechanisms.
- **Building an impact-measurement program** — the association has no data collection today, and starting one is an organisational project, not a website rebuild.
- **Migrating the two church-linked project pages** — they are being retired.
- **Changing hosting, domain, or the analytics property** — Netlify, sarandocarapicuiba.org and the existing GA4 property all stay.
- **The Gatsby→Astro migration itself** — this map ends at the handoff spec.
