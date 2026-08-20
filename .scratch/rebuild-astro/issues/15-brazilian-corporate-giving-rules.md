# What Brazilian companies actually need in order to donate

Type: research
Status: resolved
Blocked by: —

## Question

The `/empresas` page rests on tax and compliance claims that were argued from memory during the donor-path ticket. They are the load-bearing facts of the page and must be sourced before a word of that copy is written.

Answer against primary sources (Receita Federal, Planalto legislation text, official guidance), citing each claim:

1. **Lei 9.249/95, art. 13.** Who may deduct donations to entidades civis sem fins lucrativos, under which tax regime (lucro real vs lucro presumido vs Simples Nacional), and subject to what limits and conditions. Confirm or correct the working assumption that the deduction is restricted to lucro real and capped at a small percentage of operating profit.
2. **What the donating company must obtain from the association** to book the donation and satisfy its own auditors. Estatuto social, ata de eleição da diretoria, cartão CNPJ, certidões negativas, recibo or termo de doação, and anything else typically required.
3. **Whether any registration changes the picture** for an association of this size: CEBAS, CMDCA/municipal conselho registration, utilidade pública municipal or estadual, or Lei de Incentivo mechanisms. For each: what it unlocks, roughly what it costs to obtain, and whether it is realistic for an association with no paid staff.
4. **In-kind donations.** How doação em espécie is treated differently from cash for the donating company, and what documentation it needs. This matters because in-kind is now the page's primary ask.

Where sources conflict or a question cannot be answered from primary material, say so explicitly rather than resolving it. This is not legal or tax advice and the association should have a contador review anything published.

Capture findings as a Markdown file in the repo and link it from the answer. Findings may also be worth more to the association than to the website.

## Answer

Full findings, in Portuguese, with citations: [`research/doacoes-empresas-brasil.md`](../research/doacoes-empresas-brasil.md) (285 lines).

**Verification note:** I tried to confirm the ECA art. 260 percentages against planalto.gov.br directly and the host refused the connection twice; a Receita Federal URL I guessed returned 404. So the percentages below rest on the research agent's citations, not on my own reading of the primary text. The file already requires contador review before publication, which covers this.

### 1. Lei 9.249/95, art. 13 — my working assumptions were half right

**Right:** deduction is restricted to **lucro real** (confirmed for IRPJ *and* CSLL by SC Cosit 191/2018), capped at **2% do lucro operacional**.

**Wrong, and this matters:** I assumed the entity needed certifications the association lacks. **It does not.** Lei 13.204/2015 rewrote alínea "c" and removed the utilidade pública federal requirement (Lei 91/1935 was revoked). No certification is required. The law asks for exactly two things:

- **(a)** the donation is credited to a bank account **in the association's own name**;
- **(b)** the association gives the donor a **declaração**, whose model changed with IN RFB 2.335/2026 (which revoked IN SRF 87/1996).

Everything else — estatuto registrado, ata, certidões negativas — is **corporate compliance practice copied from art. 34 da Lei 13.019/2014**, which actually governs partnerships with government. No federal rule conditions deductibility on certidões.

Flagged **não confirmado**: whether IN RFB 2.307/2026 dropped this deduction from the preserved-benefits annex of the LC 224/2025 linear reduction, which would cut the effective rate to roughly 1.8%.

### 2. Documents

Legally required: the declaração and the bank credit. Everything else is what a company's auditors will ask for anyway. Both lists are in the research file, separated into "what the law requires", "what compliance practice requires", and "unconfirmed".

### 3. The material finding: CMDCA and FUMCAD

The hypothesis was right and the numbers are much better than Lei 9.249/95. Donations to a municipal **Fundo dos Direitos da Criança e do Adolescente** deduct **from imposto devido**, not from lucro: **1% do IRPJ** for lucro real companies, **6% for pessoa física** (3% if made on the return). The donor recovers **100%** of the donation against roughly 34% in the best case under art. 13. It also reaches individuals, who art. 13 does not.

**And the association is not registered.** Carapicuíba's CMDCA exists (Lei Municipal 1.545/92, alterada pela 2.976/10; FUMCAD CNPJ 18.317.601/0001-98) and the Sarando does **not** appear in the list of inscribed OSCs published in Resolução CMDCA-Carapicuíba nº 01/2025. Without registration there is no chancela and no access to the fund. Per ECA art. 91, a non-governmental entity "somente poderá funcionar depois de registrada" with the CMDCA.

**Critical copy warning:** the Receita states expressly (P&R IRPF 2026, pergunta 458) that a donation to "orfanatos e similares" is **indedutível**. What deducts is a donation **to the Fundo, indicating the project**. The site must never say "doação à Sarando é dedutível do imposto de renda".

CEBAS gives immunity from payroll contributions and is useless to an association with no payroll. Utilidade pública estadual SP is a credential only, since art. 5º of Lei 2.574/1980 states that no state benefit follows from the title. OSCIP has added nothing for donors since 2015.

### 4. Donations of goods

**My terminology was wrong.** "Doação em espécie" means **cash**. Non-cash is "doação de bens" or "in natura" (ECA art. 260-C). The donor-path ticket has been corrected.

For IRPJ the value is the **valor contábil**. The real problem is indirect tax: donating goods from stock is an **ICMS** taxable event (LC 87/96), plus **IPI** for a manufacturer, and **São Paulo has no general exemption** — art. 83 do Anexo I do RICMS requires declared calamidade pública (confirmed in RC 29379/2024 da SEFAZ-SP).

For food specifically, **Lei 14.016/2020** shields the donor from civil and administrative liability except in cases of dolo. That is the argument that unlocks supermarkets and restaurants.

Consequence for the page: for a company donating from its own stock, **money is often more efficient than goods for everyone involved**, and it lets the association buy what it actually needs.
