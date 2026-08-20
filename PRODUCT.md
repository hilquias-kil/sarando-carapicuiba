# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, in this priority order (confirmed unchanged 2026-08-20):

1. **Local Carapicuíba businesses** — the primary target. A shop, clinic or small firm in the city, deciding whether to sponsor one dated ação or give goods, usually reached by someone who already knows the association or saw it on Instagram. Large companies are a secondary case of the same audience.
2. **Individual donors** — a person deciding to send PIX or a bank transfer, typically on a phone, without an account, a checkout, or a form.
3. **Prospective volunteers and beneficiaries** — a resident of Carapicuíba looking for a free project (capacitação profissional, bateria, jiu-jítsu, socioeducativo) at the sede, or offering to help. Both end the same way: a WhatsApp message.

Every path terminates in WhatsApp, PIX, or a bank transfer. The site never asks anyone to fill in a form.

## Product Purpose

The public site of the **Associação Sarando Carapicuíba**, a non-profit Christian association in Carapicuíba, SP, Brazil (CNPJ 05.392.117/0001-81), at `sarandocarapicuiba.org`. It exists to convert local businesses and individuals into donors, and to let residents find the free projects.

The association's own mission, in its own words: *demonstrar o amor através de ações*. The load-bearing word is **ação** — what it does always has a date, a place, and people present.

Success is a WhatsApp conversation with a local business, or a PIX transfer, that would not have happened otherwise.

## Positioning

The association is small, local, and entirely unpaid — **nobody is remunerated, diretoria included**, which is the strongest sentence available to it and one a professionalized NGO cannot truthfully copy. It has no impact metrics and will not gather any. Its credibility is therefore built the opposite way to sector convention: not aggregate numbers, but **dated, photographed, named ações in named communities**, plus a board that appears with names and cargos, plus a CNPJ and an address that can be checked.

It asks businesses for sponsorship of a specific ação rather than abstract support, and it makes no tax, legal, or third-party certification claim of any kind.

## Operating Context

- Physical sede at Av. Celeste, 94, Centro, Carapicuíba, SP, 06320-030. Four free projects run there weekly; ações happen out in the communities (Porto de Areia, Murão).
- PT-BR only, read overwhelmingly on phones, often on modest connections.
- Contact is **WhatsApp primary** (`11 98195-0343`), e-mail secondary (`associacao-sarando-carapicuiba@outlook.com`), Instagram `@sarandocarapicuiba`. No LinkedIn, no Facebook.
- Money arrives by PIX (key is the CNPJ) or transfer to Cora SCD 403, ag. 0001, c/c 1733434-4, in the association's own name.
- Content is published by the association itself, without a developer: a Markdown file plus a folder of photos, per the README. Publishing rate is low — four ações in five years.
- Hosting is Netlify, static build, GA4 property `G-6N23FX10H6`. Domain, host and analytics property are fixed.

## Capabilities and Constraints

**Terminology, binding site-wide.** A **projeto** is weekly and at the sede. An **ação** is dated and in a community. They never mix. Always "associação", never "ONG". "Em espécie" means cash, not goods.

**Frozen product facts.**
- 17 URLs, fifteen of which kept their pre-rebuild addresses. Changing a URL is an SEO cost, not a design choice.
- Static only: no CMS, no forms anywhere, no SSR, no client-side framework, no payment integration or recurring giving. PIX and bank transfer are the only mechanisms.
- **The site collects no personal data at all.** This is what keeps the privacy policy short and is why the volunteer Google Form (found closed) was retired rather than replaced.
- GA4 loads only after an explicit click on the consent bar; retention is at the 2-month floor.
- Fonts are self-hosted, never fetched from a third party — a Google Fonts request would contradict what the privacy page promises.
- Publishing guardrails are enforced by the build, on purpose: `resumo` is capped at 240 characters, and `rascunho: true` keeps an entry off the site.
- The two church-linked projects (*Instituto de Vencedores*, *Revisão de Vidas*) are retired, not migrated. Four social projects survive.
- No English, no i18n.

**Explicitly undecided — record, do not invent.**
- No estatuto social, no termos de doação, no annual report exist in publishable form; the cartão CNPJ was withheld. Dead `href="#"` document links were removed rather than carried over, and no `/transparencia` page exists.
- The association is **not registered with the CMDCA** of Carapicuíba. If that changes, the FUMCAD route (deduction from imposto devido) becomes reopenable with a contador.
- Founding year is unconfirmed and stays off the site until it is confirmed.
- Whether Instagram becomes a proof surface beyond the footer link is open.
- Whether any apoiador/parceiro agrees to be named is open; nobody has asked.
- Pagination, tags, or filtering for the ações index is unspecified and speculative at the current publishing rate.
- Image-use authorization for identifiable children: written authorização from the next ação onward, a takedown promise on the privacy page, and a review of what is already published — the review is not finished.

## Brand Commitments

- **Name and logo are untouched.** The mark carries local recognition; a redesign is out of scope. It exists only as a 733px raster — the vector has been requested and not received.
- **Voice, binding:** "a gente" on the community-facing pages, "nós" on `/empresas`, "você" always for the reader. Zero exclamation marks. Only checkable facts; no invented numbers.
- **Five CTA labels, fixed, no variants:** `Doar`, `Falar no WhatsApp`, `Ser voluntário`, `Ver a ação`, `Falar com a associação`.
- **Faith is stated, never a condition.** The association is openly Christian and says so on `/quem-somos`, in the diretoria's own words. Projects and ações are open to anyone of any religion or none, and no activity requires religious participation. Faith does not travel to the donor or volunteer pages.
- **No claim the association does not control.** No tax or legal argument (Lei 9.249/95, ICMS, Lei 14.016/2020 are all deliberately absent), no "certificado reconhecido pelo MEC". What it does promise: it issues the declaração de recebimento, and it receives into an account in its own name.

## Evidence on Hand

**Real, usable:**
- Four dated ações with photographs and per-ação figures as reported at the time (e.g. "40 famílias no Murão") — `src/content/acoes/`.
- Four projetos with photographs — `src/content/projetos/`.
- Nine board members with names, cargos and portraits — `src/data/equipe.json`, photos in `public/equipe/`.
- CNPJ, address, bank and PIX details — `src/lib/site.ts`.
- **Sage** is a confirmed named partner; the 300-course catalogue is published as Sage's, not as the association's.
- Full decision record and the complete PT-BR copy: `.scratch/rebuild-astro/` (HANDOFF.md, map.md, 19 issue tickets, `copy/copy-deck.md`, two research docs).

**Absences future work must not paper over:** no impact metrics of any kind and none will be gathered; no institutional documents; no partner logos; no testimonials; no cesta counts; no fixed project schedules (there are none); instructors are deliberately unnamed. Photographically, **nothing in the library is portrait** and a six-item shot list exists, all phone-shootable.

## Product Principles

1. **Only what can be checked gets published.** Date, community, name, photo. Nine unverifiable claims were held back rather than published, and that is the standing bar.
2. **Proof is the ações, not a number.** With no metrics and no documents, credibility rests on dated, photographed work and a board that shows its face.
3. **Promise only what the association controls.** No tax argument, no third-party certification, no "em breve" section with nothing behind it.
4. **Every path ends in a conversation, not a form.** WhatsApp, PIX, transfer — the site stores nothing about anyone.
5. **The association must be able to publish without a developer.** A Markdown file and a folder of photos; the build enforces the limits so a person cannot get it wrong.

## Accessibility & Inclusion

**WCAG 2.2 AA is the required standard** (confirmed 2026-08-20): measured contrast rather than eyeballed, keyboard-reachable paths, visible focus, real alt text on every photograph, and `prefers-reduced-motion: reduce` honored. The design system's contrast floors — including the numeric scrim floor for white text over photography — sit under this standard, not beside it.

Inclusion is also a product fact: the projects are free, open to anyone regardless of religion, with unlimited places, and the site must read on a modest Android phone.
