# Contador review of the tax copy

Type: task
Status: resolved
Blocked by: 11

## Question

Two blocks of published text make tax statements, and neither goes live until a contador has read them.

- **`/empresas`, "Doação em dinheiro"**: that Lei 9.249/95 art. 13 allows the deduction as despesa operacional only for companies on lucro real, capped at 2% do lucro operacional; that Simples Nacional and lucro presumido cannot use it; that the association issues the declaração de recebimento and receives into an account in its own name.
- **`/empresas`, "Doação de bens"**: that moving stock out as a donation is generally an ICMS taxable event in São Paulo with no general exemption, and that Lei 14.016/2020 limits a food donor's liability to cases of dolo.
- **`/doacoes`, "Sobre imposto de renda"**: that a pessoa física donating to this association gets no income-tax deduction.

The exact wording is in [copy/copy-deck.md](../copy/copy-deck.md), sections 8 and 9.

Two things the reviewer should be told rather than left to infer. First, the underlying research could **not** verify the ECA art. 260 percentages against the primary text: planalto.gov.br refused the connection and a guessed Receita URL 404'd, so those numbers rest on secondary citations. They do not appear in the published copy, but they shape the reasoning behind it. Second, the deliberate omission is FUMCAD: the association is not registered with Carapicuíba's CMDCA, so the strongest tax argument available to a Brazilian donor is off the page entirely. If that registration lands, `/empresas` is rewritten and this review runs again.

Resolved when someone competent has read the three blocks and either signed off or supplied corrected wording.

## Answer

**Resolved by removal, not by review.** The association's decision: no tax or legal claim appears anywhere on the site. That deletes the risk instead of managing it, and the ticket closes without a contador.

### What came out

- `/empresas`, "Doação em dinheiro": the Lei 9.249/95 paragraph, the lucro real qualifier and the 2% cap.
- `/empresas`, "Doação de bens": the ICMS warning and the Lei 14.016/2020 food-donation reference.
- `/doacoes`: the whole "Sobre imposto de renda" section.

### What replaced it

Not silence, which would have read as evasion on a page written for companies. A promise the association actually controls:

> Sobre imposto, quem responde é a contabilidade da sua empresa. Nós não prometemos benefício fiscal nenhum e não damos palpite sobre a sua declaração.
>
> O que nós fazemos é papel: a declaração de recebimento da doação, e o depósito numa conta que está no nome da associação. Leve os dois para o seu contador e ele diz o resto.

And on doação de bens, one neutral line: confirm with your accountant how it lands in your books, that part is his.

### What it costs, honestly

The Lei 9.249/95 deduction was named as "the wedge" when the map was charted. It is not much of a wedge. The research showed it reaches only companies on lucro real, capped at 2% do lucro operacional, and `/empresas` was already reframed around local Carapicuíba businesses, most of which are on Simples and could never use it. The genuinely strong argument, FUMCAD, was never available because the association is not registered with the CMDCA.

So the page loses a narrow argument aimed at the part of its audience least likely to act, and gains a page that needs no accountant's sign-off, cannot age badly, and cannot be quoted back at the association. On top of that it now carries something better: nobody in the association is paid, which was confirmed after this ticket was written.

**If the CMDCA registration lands, reopen this.** Deduction through the Fundo comes off imposto devido rather than off the base, the donor recovers the whole amount, and that argument is worth putting a contador on. The research doc stays where it is for that day.

### Consequence

Nothing tax-related gates the launch any more. The blocking item is off the handoff checklist.
