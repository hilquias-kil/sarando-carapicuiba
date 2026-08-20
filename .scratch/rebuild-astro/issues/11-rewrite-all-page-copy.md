# Rewrite all page copy

Type: task
Status: resolved
Blocked by: 03, 04, 06, 08, 15

## Question

Produce the final PT-BR copy for every page in the new IA — the text the migration session pastes in, not a direction for someone else to write.

Scope, per the new IA: home, quem somos, the donor path, voluntário, four projeto pages, the ações index plus four ação entries, transparência, 404, and the two legal pages. The ação bodies are largely fine as reportage and mostly need tightening; the evergreen pages need rebuilding from the ground up.

Rules in force: the voice guide governs; no claim beyond what is checkable; the only numbers are the per-ação ones that already exist; faith intact on quem somos, outcomes-led on the donor path; every project page carries its practical participation block from the collected facts.

Also produce, for each page: `<title>`, meta description, and OG text. The current site ships bare titles like `<title>Quem somos</title>` with no descriptions at all.

Run everything through `unslop` before recording it. Flag any sentence asserting something you could not source — the association verifies those rather than the site publishing them on faith.

**From the two collection tickets:** every project page carries the same participation facts — sede da associação, gratuito, aberto a todos, vagas ilimitadas, sem horário fixo, contato por WhatsApp — and **no instructor names**. Do not write copy that implies schedules or selection criteria that do not exist. The confirmed contact email is `associacao-sarando-carapicuiba@outlook.com`; the footer's `contato@sarandocarapicuiba.org` is wrong and appears in the current site. LinkedIn and Facebook are gone; Instagram is the only social reference.

**From the voice guide:** "a gente" on community pages, "nós" on `/empresas` and legal pages, "você" for the reader everywhere. Only checkable facts, and **no founding year** until it is confirmed. Always "associação", never "ONG"; projeto and ação never blur. The Tiago 1:27 epigraph does **not** move to the new site. Zero exclamation marks. CTA labels are fixed: Doar · Falar no WhatsApp · Ser voluntário · Ver a ação · Falar com a associação. Run every page against the seven-point checklist at the end of the voice guide.

**From the corporate-giving research — hard constraints on the `/empresas` copy:** never write that donating to the association is deductible from income tax. Say that the Lei 9.249/95 deduction exists only for companies on **lucro real**, capped at 2% do lucro operacional, and that the association provides the required declaração and receives into an account in its own name. Use **doação de bens**, never "em espécie", for non-cash giving. Warn that donating goods from stock generally triggers ICMS in São Paulo, and lead food donors to Lei 14.016/2020. Do not mention FUMCAD until the CMDCA registration ticket closes. Nothing tax-related is published without contador review.

## Answer

The full copy deck is written and lives at **[copy/copy-deck.md](../copy/copy-deck.md)**. It is the paste-in text for all 17 URLs, not a direction: hero and section copy for every evergreen page, frontmatter plus body for all eight collection entries, the shared "Como participar" block, the five CTA labels wired to their destinations, and `<title>` / meta description / OG text for every page.

### What changed against the scope line

The ticket's scope predates the IA decision. There is **no `/transparencia`** (board and CNPJ moved to `/quem-somos`) and **no `/termo-e-condicoes`** (dropped). So the deck covers the 17 live URLs, not the 18 the scope implied.

### The one deliberate hole

**`/politica-de-privacidade` has its title and meta description but no body.** What that page must say is still an open ticket: whether GA4 needs a consent mechanism, what the site says about image rights for identifiable people including children, and who answers a titular request. Writing LGPD copy before that ticket decides those would be inventing the association's legal position. The facts already fixed for it (CNPJ, address, the outlook.com channel, no forms, the Google Form sitting off-domain) are recorded in the deck so that ticket starts with them in hand.

### Three things the rewrite found, not three things it polished

1. **Contradictions with the collected facts.** The bateria page sells "preços acessíveis e opções de pagamento flexíveis" for a project confirmed free. The jiu-jítsu page tells people to write in for schedules that do not exist. The alimentos ação ships a literal template marker, `[Nome da Comunidade]`, in production.
2. **Metadata defects worth more than the prose.** The three Porto de Areia and Murão ação pages all carry the same `<title>`, "Ação de páscoa na comunidade porto de areia", including the Murão one. No page on the site has a meta description or OG text. The deck supplies all three for every URL.
3. **A missing image on a surviving page.** The jiu-jítsu body references `/to-do.webp`, which does not exist, the same class of bug as the already-known `/iv-aula.webp` but on a project that is **not** being cut. Jiu-jítsu is left with only the grid photo, which was already the worst 3:4 crop of the four.

### Nine claims held back

Section 13 of the deck lists every assertion that is on the site today, or would improve the site, and could not be published under the facts rule. The two that matter most: **"+ de 300 cursos com certificado reconhecido pelo MEC"** is not merely unverifiable but probably wrong, since cursos livres by definition carry no MEC recognition; and **"a diretoria não é remunerada"**, which is not on the site at all and, if true, is the cheapest strong sentence `/empresas` could gain. Both are now tracked as a task ticket rather than published on faith.

### Constraints honoured, checked mechanically

Zero exclamation marks. Zero em dashes inside sentences. Zero curly quotes. No "ONG" anywhere, only "associação". No founding year. No "em espécie" for non-cash giving. No FUMCAD or CMDCA mention, since the association is not registered. "A gente" on the community pages, "nós" on `/empresas`, "você" throughout. Projeto and ação never blur. Five CTA labels and no sixth. The Tiago 1:27 epigraph is gone.

The `/empresas` tax block and the `/doacoes` income-tax paragraph carry an explicit publish gate: **neither goes live without a contador reading it.** That gate is now its own ticket rather than a note buried in a document.

## Amendment, after the legal-pages ticket

The deliberate hole is filled and two written pages changed.

1. **`/politica-de-privacidade` is written**, section 12 of the deck.
2. **`/voluntario` lost the Google Form.** It was verified during this work and is closed: `forms.gle/HKefw1S6r5Vmn6M16` answers "não aceita mais respostas". WhatsApp is now the only volunteer path, and the site collects no personal data anywhere.
3. **A consent bar was added** to the global section of the deck, with its copy and the rule that GA4 is not loaded before the click.
