# Collect practical participation info for the four social projects

Type: task
Status: resolved
Blocked by: —

## Question

Not one project page currently says *when*, *where*, or *how to join*. A kid in Carapicuíba who wants drum lessons cannot find out from this site how to show up. The rewritten project pages have a slot for this; the slot needs facts nobody has written down.

For each of the four surviving projects — **capacitação profissional**, **aulas de bateria**, **aulas de jiu-jitsu**, **socioeducativo**:

- [ ] Is it currently running, or paused?
- [ ] Where does it happen (address or reference point)?
- [ ] When — days and times?
- [ ] Who is it for — age range, any prerequisite?
- [ ] Is there a cost, and are places limited?
- [ ] How does someone join — walk in, WhatsApp, form, someone to ask for?
- [ ] Who teaches or runs it?

If the answer for a project is genuinely "there is no fixed schedule", record that — the page then carries a single contact instead of a schedule block. What the page must never do again is stay silent about how to participate.


## Answer

- Is it currently running, or paused?: it is running
- Where does it happen (address or reference point)?: the same adresss of the ong
- When — days and times? we do not have that information
- Who is it for — age range, any prerequisite?: for everyone
- Is there a cost, and are places limited?: its free and unlimited
- How does someone join — walk in, WhatsApp, form, someone to ask for? by the contact options
- Who teaches or runs it? menbers of the ong, do not show names or infomation

**Consequences for the map.** All four projects are running, at the association's own address (Av. Celeste, 94 — Centro, Carapicuíba — SP, 06320-030), free, open to everyone, with unlimited places, no fixed schedule, joined through the general contact options, and with instructors deliberately unnamed.

The important structural consequence: **the participation facts are identical across all four projects.** There is nothing per-project to model. So:
- No `horario`, `local`, `faixa-etaria`, `custo`, `vagas` or `instrutor` fields in the projeto schema — they would all hold the same value, or none.
- "Como participar" becomes a **single shared component** rendered on every project page, not per-page content.
- No instructor slot anywhere in the design, and no names or bios in the copy.
- Since there is no schedule to publish, the block's job is to get someone to WhatsApp — "fale com a gente no WhatsApp para saber os horários" — rather than to inform. A beneficiary still cannot learn when to show up without messaging, which is the honest state of things and should not be papered over with vague copy.
