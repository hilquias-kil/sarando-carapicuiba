# The corporate donor path

Type: grilling
Status: resolved
Blocked by: 01, 02, 04

## Question

What does a company see, and what does it do, from landing to first contact?

Settled: lead capture is the primary CTA, with documents downloadable right there so a CSR analyst can qualify the association without waiting for a reply. Also settled: no aggregate impact numbers exist, so credibility rests on institutional documents plus the dated, photographed ações.

Decide:

- The page (or pages) and their structure — what a company reads first, second, third.
- **The lead mechanism.** Netlify Forms, a WhatsApp handoff, a plain mailto, or a mix. Whoever receives it has to actually check it, which is a real constraint given nobody is paid to.
- What data the lead captures, which is also the input to the LGPD question downstream.
- How the Lei 9.249/95 deduction argument is presented. Today it is a wall of numbered paragraphs; it is the strongest argument on the site and the least readable thing on it.
- How the ações are used as evidence here without turning the page emotional — the register is institutional on this path.
- Where the individual-donor path (PIX, bank details, termo PF) lives once companies are the primary audience. It must not be degraded, only deprioritised.

**Reworked by the two collection tickets — read this before starting.** The premise this ticket was written on has changed. There are **no documents to download**: no estatuto, no termo de doação PJ or PF, no financial report, and the cartão CNPJ is deliberately withheld. Together with the absence of impact metrics, both halves of the credibility strategy settled while charting are gone.

What is actually left to build trust with: the named board of nine with photos, the CNPJ number itself (public, already in the footer), the four dated and photographed ações, a verifiable street address, the Instagram account, and the Lei 9.249/95 argument. This ticket's central question becomes sharper and harder: **what persuades a company to transfer money to an organisation that can show it no paperwork?** Answer that honestly — including the possibility that the honest answer is "start smaller than a corporate donation".

Confirmed mechanics: the monitored email is **associacao-sarando-carapicuiba@outlook.com**, and **11 98195-0343 is WhatsApp**, so a WhatsApp handoff is a live option for the lead mechanism alongside Netlify Forms. Note that an `@outlook.com` address on an organisation that owns `sarandocarapicuiba.org` reads as less institutional to exactly the audience this page targets — worth raising, since the domain is already paid for.

See also the estatuto-recovery ticket, which does not block this one.

## Answer

### The reframe

`/empresas` is written for **local Carapicuíba businesses first**, and for large companies second. The formal tax-deduction path stays on the page, clearly marked as the bigger and slower one, but it is not the page's primary conversion.

Reason: the Lei 9.249/95 deduction reaches companies taxed on lucro real, and those companies run compliance checks that require an estatuto social, ata de eleição da diretoria, cartão CNPJ and certidões negativas. The association has none of those today. The businesses that can say yes this month, the padaria, o mercado, a oficina, o depósito de material de construção, are mostly on Simples Nacional, where that deduction does not apply. They give because they are from Carapicuíba. Writing the page around the tax argument alone would aim it at exactly the companies that cannot act.

### The asks, in order

1. **Patrocine uma ação.** A company funds or supplies one dated action in one community. This is the headline ask. It converts a donation into something with a date, a place and photographs, which is precisely the evidence the next donor will read. The four existing ações are the proof of what it looks like.
2. **Doação em espécie (in-kind).** Cestas, roupas, instrumentos, material. This is already the association's operating model, every published ação was food, clothes or Easter eggs reaching a family. It needs no compliance approval and a local business can agree to it in a WhatsApp message. The page carries a concrete list of what is actually useful, not a generic appeal.
3. **Doação financeira**, including the tax deduction, stated honestly about who it applies to.

### Contact mechanism

**WhatsApp primary (11 98195-0343), email secondary (associacao-sarando-carapicuiba@outlook.com). No form.**

Nobody at the association is paid to watch a form inbox, and Brazilian small business runs on WhatsApp. A company that needs a paper trail uses the email. Consequence for the rest of the map: **the site collects no personal data through any form**, which materially simplifies the privacy policy.

### Page structure

1. One-line ask naming the three ways to help.
2. **Patrocine uma ação**, with the four past ações as concrete proof.
3. **Doação em espécie**, with a specific list of useful items.
4. **Doação financeira**, with the Lei 9.249/95 deduction explained honestly, including who can and cannot use it.
5. **Bloco institucional**: CNPJ, endereço, diretoria de nove pessoas nomeadas. Documents listed as "sob solicitação" while they do not exist.
6. **Contato**: WhatsApp and email, one line each.

Register per the voice guide: "nós", "sua empresa", short sentences, no emotional appeal, mechanism first. The photographed ações carry the feeling so the copy does not have to reach for it.

### Blocked on research

The tax claims on this page were argued from memory and must not be published that way. A research ticket now covers who can deduct under Lei 9.249/95 and under what limits, what documents a Brazilian company typically requires before donating to an associação, and whether CEBAS, CMDCA or utilidade pública municipal registration would change the picture. It blocks the copy for this page only.

## Amendment, after the corporate-giving research

Four corrections to the answer above. The overall reframe (local businesses first, patrocine uma ação, money third) survives; the reasoning under it does not.

1. **"Doação em espécie" was used wrongly throughout this ticket.** In Brazilian usage *em espécie* means **cash**. Non-cash giving is **doação de bens** or *in natura*. Every use of the term above should be read as "doação de bens", and the copy must use the correct term.
2. **The tax path is less closed than argued.** Lei 13.204/2015 removed the certification requirement from Lei 9.249/95 art. 13. The law now asks only for a bank credit into an account in the association's own name and a declaração issued by the association. The estatuto and certidões are corporate compliance practice, not legal conditions. So the association can make a donation legally deductible **today**, with a bank account and a one-page declaration, though a company's auditors will still ask for the pasta.
3. **Donating goods costs the company tax in São Paulo.** Moving stock out as a donation is an ICMS taxable event with no general state exemption. For a company giving from its own inventory, cash is often better for everyone, and it lets the association buy what it actually needs. Food is the exception worth pushing: Lei 14.016/2020 shields food donors from liability except in cases of dolo, which is the argument that unlocks supermarkets and restaurants.
4. **The page must never claim that donating to the Sarando is income-tax deductible.** The Receita states that donations to "orfanatos e similares" are indedutíveis. Deductibility from imposto devido flows through a **Fundo da Criança e do Adolescente**, and the association is not yet registered with Carapicuíba's CMDCA. Until it is, that argument stays off the page entirely.

## Second amendment: the tax argument is off the page entirely

The association decided that no tax or legal claim appears on the site at all. The Lei 9.249/95 block, the ICMS warning and the Lei 14.016/2020 reference are all removed from `/empresas`, and `/doacoes` loses its income-tax section.

The three asks and their order survive untouched: patrocine uma ação, doação de bens, dinheiro. What ask #3 no longer carries is an argument about deduction. It says instead that the association issues a declaração de recebimento and receives into an account in its own name, and that the company's own accountant decides the rest.

Given the research, this costs less than it looks like: the deduction reached only lucro-real companies, and this page was already aimed at local businesses mostly on Simples. See the contador-review ticket for the full reasoning.
