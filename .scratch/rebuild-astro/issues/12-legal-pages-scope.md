# What the legal pages must actually say

Type: grilling
Status: resolved
Blocked by: 08

## Question

`/politica-de-privacidade` and `/termo-e-condicoes` are linked in the footer and 404 today. The site runs GA4, so a privacy policy is not optional under the LGPD.

Decide what each page must cover before it is written:

- What personal data the site collects, now that the donor lead mechanism is settled — analytics identifiers, whatever the lead form captures, anything the Google Form collects on the association's behalf.
- Legal basis, retention, and who inside the association is the point of contact for a data subject request. This has an organisational answer nobody has given yet.
- Whether a cookie/analytics consent mechanism is needed, or whether GA4 can be configured to avoid it.
- Whether `/termo-e-condicoes` is genuinely needed for a brochure site with no accounts and no transactions, or whether the honest move is to drop the link rather than publish boilerplate.
- Photo and image rights, which connects to the consent question in the photo inventory ticket.

Resolve with the outline and the facts each page needs; the copy itself is written under the copy ticket. This is not legal advice and the association should have someone competent read the result.

**From the institutional-documents ticket:** there is no estatuto to publish, so the privacy policy cannot lean on published governance documents for its institutional identification — it will carry the CNPJ, the registered address and the outlook.com contact email instead. That contact address is also the data-subject request channel unless someone decides otherwise.

**From the IA ticket:** `/termo-e-condicoes` is **dropped** — the footer link is removed rather than a boilerplate page written for a brochure site with no accounts and no transactions. Only `/politica-de-privacidade` gets built, so this ticket now settles that page's content alone.

**From the donor-path ticket:** there is **no form anywhere on the site**. Contact is WhatsApp and email only, so the site itself collects no personal data beyond GA4 analytics identifiers. The privacy policy shrinks to analytics, cookies/consent, photo and image rights, and the data-subject contact channel.
**From the photo inventory:** several published photographs show identifiable people, **including children**, and it is unknown whether any authorização de uso de imagem was ever collected. Under the LGPD and the ECA this is the sharpest legal exposure on the site, sharper than the analytics question. This ticket must decide what the site says about image rights and what the association needs to start doing at future ações.

## Facts gathered before the interview

- **GA4 loads unconditionally.** `gatsby-config.ts` registers `gatsby-plugin-google-gtag` with `G-6N23FX10H6` and no options. There is no consent plugin, no gating, no `gtag('consent', ...)` call anywhere in the repo. Every visitor gets the `_ga` and `_ga_*` first-party cookies on first paint.
- **There is no privacy policy at all today**, and the footer links to one that 404s. The site is not merely thin on LGPD compliance, it has nothing.
- **The volunteer Google Form is closed.** `forms.gle/HKefw1S6r5Vmn6M16` resolves to a form titled "Seja Bem-Vindo ao Nosso Time de Voluntários!" that returns "não aceita mais respostas". Its field list could not be read because the form is shut. So the only path on the live site that collects personal data currently collects nothing, and every visitor who clicks "quero ser voluntário" hits a dead end.
- **Could not verify:** the ANPD's *Guia Orientativo sobre Cookies e Proteção de Dados Pessoais* is published as a PDF that could not be fetched, so its position on analytics cookies rests on nothing I read directly.

## Answer

`/termo-e-condicoes` stays dropped. Only `/politica-de-privacidade` gets built, and the copy is written: **[copy/copy-deck.md](../copy/copy-deck.md), section 12**.

### 1. The volunteer form is dead, so the site collects nothing

`forms.gle/HKefw1S6r5Vmn6M16` returns "não aceita mais respostas". The form is closed, nobody at the association noticed, and every visitor who clicks through to volunteer on the live site hits a locked door.

**Decision: the form does not come back.** WhatsApp becomes the only volunteer path, the same channel that already handles project enrolment and corporate leads. One inbox instead of two, and a channel nobody watches is worse than no channel at all.

The consequence runs past that page. **The site now collects no personal data anywhere**, which is what lets the privacy policy be one short page instead of a template. This reverses the charting-time constraint that volunteering keeps the Google Form; the map's Notes are updated.

### 2. Consent bar, and GA4 actually gated

A minimal bottom bar on first visit: one line of text, `Aceitar` and `Recusar`, a link to the policy. Not a modal, does not block reading, choice stored in `localStorage` for a year.

**The GA4 script is not loaded until the click.** Not loaded-and-denied through consent mode: not on the page. The privacy policy states this in writing, so it has to be literally true. `Recusar` leaves the whole site working.

Rejected: disclosing GA4 and resting on legítimo interesse, which is what most Brazilian small sites do and is the option most likely to be wrong, since an analytics cookie set before any choice is the textbook non-necessary cookie. Also rejected: killing GA4, which is out of scope.

The cost is honest and aesthetic. A bar over a photo-led hero is a real intrusion on direction C, and it is worth it.

**Unverified:** the ANPD's *Guia Orientativo sobre Cookies* is a PDF that would not fetch, so this decision rests on reasoning about what a non-necessary cookie is, not on a passage I read.

### 3. The channel is the e-mail, no named person

`associacao-sarando-carapicuiba@outlook.com`, attended by the diretoria. No individual named, and **no encarregado appointed**, which the page says plainly rather than hiding. The board is nine volunteers; naming one of them on a public page invites mail they cannot handle.

The page commits to answering within 15 days. That number is a promise the diretoria has to be able to keep, and it is on the pre-publish checklist for exactly that reason.

### 4. Retention: 2 months

GA4's minimum for user and event level data. Nobody here runs a year-over-year cohort analysis, and the aggregate reports the association would actually open survive retention limits anyway. Picking the floor lets the page state a short honest number instead of a defensive one.

**This requires a change in the GA4 admin panel.** Two clicks, and until someone makes them the published page states a retention period that is not true.

### 5. Photographs: the sharpest exposure on the site

Sharper than the cookies, and it was never going to be fixed by a paragraph.

**What the page says:** the photos are there because they are the evidence, people including children are identifiable in them, and anyone who appears, or whose child appears, can have a photo taken down by writing one e-mail, without explaining why.

**What the association starts doing:** written authorização at every future ação, signed by a responsável for anyone under 18. A clipboard costs nothing and makes every future photo safe to use.

**What happens to what is already published:** a narrow review, not a purge and not blurring. Group shots of an entrega read as documentary and stay. What comes down is the close-up where one identifiable child is plainly the subject, unless a board member can name the guardian who agreed. The library has redundancy, so the cost is a handful of images, and the alternative is a photo-led redesign that doubles the visibility of exactly the images most at risk.

That review and that practice change are now their own ticket.

### 6. Short page, plain language, lawyer caveat

Six sections and no boilerplate. A brochure site with no accounts, no transactions and one tracker has a genuinely short story, and clauses about "compartilhamento com parceiros comerciais" would describe things that do not exist. Same "someone competent reads it first" gate the tax copy carries.

### What the migration owes this decision

Three things must be true on launch day or the page is a false statement:

1. The consent bar exists and GA4 genuinely does not load before the click.
2. GA4 user-data retention is set to 2 months in the admin panel.
3. The 15-day response commitment is one the diretoria can keep.

The consent bar is also a **new component** that the design system spec does not contain. It is small, it is canvas-coloured with a hairline rule, and it belongs in the handoff spec's component list.
