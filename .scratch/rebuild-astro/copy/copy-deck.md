# Copy deck: sarandocarapicuiba.org

Final PT-BR copy for every page in the new IA. This is the text the migration session pastes in, not a brief.

Written against: the IA and URL map (17 URLs), the voice guide, the corporate donor path plus its amendment, the corporate-giving research, and the collected participation facts.

**Two scope notes.**

1. The ticket's scope line predates the IA decision. There is no `/transparencia` page (the board and CNPJ moved to `/quem-somos`) and no `/termo-e-condicoes` (dropped). So the count here is the 17 live URLs from the IA plus the shared blocks, not 18 pages.
2. `/politica-de-privacidade` **is written**, as of the legal-pages ticket closing. Section 12 carries the full body. Two things arrived with it and changed pages that were already written: the site gains a **consent bar** (section 0), and `/voluntario` **loses the Google Form** (section 10).

Everything here is complete and ready to paste.

---

## 0. Global

### Header

Five items, in this order:

`Quem somos` · `Projetos` · `Ações` · `Doações` · `Para empresas`

### CTA labels

Five, fixed, no variations anywhere on the site:

| Rótulo | Onde | Destino |
|---|---|---|
| `Doar` | home, `/doacoes`, blocos de CTA | `/doacoes` |
| `Falar no WhatsApp` | projetos, `/doacoes`, `/voluntario` | `https://wa.me/5511981950343` |
| `Ser voluntário` | home, projetos | `/voluntario` |
| `Ver a ação` | cards de ação | a ação |
| `Falar com a associação` | `/empresas` | `https://wa.me/5511981950343` |

### Footer

```
Associação Sarando Carapicuíba
Av. Celeste, 94, Centro, Carapicuíba, SP, 06320-030
CNPJ 05.392.117/0001-81

WhatsApp  11 98195-0343
E-mail    associacao-sarando-carapicuiba@outlook.com
Instagram @sarandocarapicuiba
```

Links: `Quem somos` · `Projetos` · `Ações` · `Doações` · `Para empresas` · `Ser voluntário` · `Política de privacidade`

Linha final: `© {ano} Associação Sarando Carapicuíba`

Three fixes carried in from the audit, all of which the migration must actually apply:

- The `mailto:` is `associacao-sarando-carapicuiba@outlook.com`. The current site links `contato@sarandocarapicuiba.org`, which is wrong.
- The LinkedIn and Facebook icons are gone. Instagram is the only social link.
- The copyright year is the build year, not the hardcoded `2022`.

### Contato (âncora `#contato` no rodapé)

Título: `Contato`

> Pode chamar para doar, ser voluntário ou tirar uma dúvida. Quem responde é alguém da diretoria, no WhatsApp ou no e-mail.

### Barra de consentimento

Aparece na primeira visita, fixa no rodapé da viewport, fundo `--color-canvas` com uma hairline `--color-rule` em cima. Uma linha de texto e dois botões. Não é modal e não bloqueia a leitura.

> Este site usa o Google Analytics para contar visitas. Nada é carregado antes de você escolher.

Botões: `Aceitar` · `Recusar`
Link: `Política de privacidade`

Regras que valem para a implementação, não só para o texto:

- **O GA4 não é carregado antes do clique em `Aceitar`.** Não é `gtag('consent', 'denied')` com o script já na página: o script não entra. É o que a página de privacidade afirma, então precisa ser verdade.
- `Recusar` deixa o site inteiro funcionando, sem página degradada e sem barra que volta a cada clique.
- A escolha vale por um ano e fica em `localStorage`, não em cookie.
- A barra some depois da escolha e só volta se a pessoa limpar o navegador.

### Meta pattern

- Home: `Associação Sarando Carapicuíba`
- Todas as outras: `<Título da página> | Associação Sarando Carapicuíba`
- Locale: `pt-BR` em `<html lang>` e em `og:locale`
- OG image: enquanto o logo em vetor não chega, use um recorte 1200×630 de `about.webp`. O logo em raster de 733 px fica ruim como card de compartilhamento.
- `og:type`: `website` nas páginas, `article` nas ações.

---

## 1. `/`: Home

**Title:** `Associação Sarando Carapicuíba`
**Meta description:** `Associação sem fins lucrativos em Carapicuíba. Quatro projetos gratuitos na sede, na Av. Celeste, 94, e ações levadas às comunidades da cidade.`
**OG title:** `Associação Sarando Carapicuíba`
**OG description:** `Quatro projetos gratuitos na sede e ações com data e foto nas comunidades de Carapicuíba.`

### Hero (foto full-bleed, scrim ≥ 0,70)

**H1:** `Aula de graça na sede. Cesta entregue na comunidade.`

**Linha de apoio:**
> A Associação Sarando Carapicuíba fica na Av. Celeste, 94, no Centro de Carapicuíba. São quatro projetos abertos toda semana na sede, e ações levadas a comunidades da cidade como o Murão e o Porto de Areia.

**CTAs:** `Doar` · `Ser voluntário`

### Seção: o que a associação faz (canvas)

**Eyebrow:** `O que a gente faz`
**H2:** `Projeto e ação são duas coisas diferentes.`

> **Projeto** é o que acontece toda semana na sede. Capacitação profissional, bateria, jiu-jítsu e socioeducativo. É gratuito, não tem seleção e não tem limite de vagas.
>
> **Ação** é uma data. A gente escolhe uma comunidade de Carapicuíba, combina o que falta ali e leva. Foi assim no Porto de Areia, com alimento, roupa e ovo de Páscoa, e no Murão, em 14 de janeiro de 2024, com cesta para mais de 40 famílias e roupa e brinquedo para 40 crianças.
>
> Ninguém aqui é pago. A associação funciona inteira com voluntário, e o que entra em doação vira cesta, roupa, material escolar, instrumento, tatame e transporte.

### Seção: projetos (canvas, grade 3:4 de quatro)

**Eyebrow:** `Projetos`
**H2:** `Toda semana, na sede, de graça.`

| Card | Linha |
|---|---|
| Capacitação profissional | Curso e treinamento para quem está procurando trabalho ou quer mudar de área. |
| Aulas de bateria | Aula em grupo, sem precisar saber tocar e sem precisar ter bateria em casa. |
| Aulas de jiu-jítsu | Treino no tatame, do começo, sem exigência de faixa nem de experiência. |
| Socioeducativo | Encontro que junta aprendizado escolar e formação cidadã para crianças e adolescentes. |

**Link:** `Ver todos os projetos` → `/projetos`

### Seção: ações (painel escuro, duas colunas)

**Eyebrow:** `Ações`
**H2:** `O que a associação já fez, ação por ação.`

> Cada uma com data, comunidade e as fotos do dia.

Dois cards mais recentes, cada um com `Ver a ação`.

**Link:** `Ver todas as ações` → `/acoes`

### Seção: CTA triplo (canvas)

**Bloco 1: Empresas**
**H3:** `A sua empresa pode bancar uma ação inteira.`
> Uma ação tem data, comunidade, lista do que vai ser levado e foto depois. É a doação mais fácil de mostrar para o seu conselho.
**Link:** `Para empresas`, para `/empresas`

Este bloco pedia `Falar com a associação`, que abre o WhatsApp direto. Mudou na implementação, de propósito: quem clica aqui ainda não leu a proposta, e mandar a pessoa para o WhatsApp antes de ela saber o que está sendo pedido queima o contato. `/empresas` explica, e o botão de WhatsApp está lá, três vezes.

**Bloco 2: Doar**
**H3:** `PIX, e o dinheiro vira o que falta na ação.`
> A chave PIX é o CNPJ da associação e a conta está no nome dela. Não tem valor mínimo.
**CTA:** `Doar`

**Bloco 3: Voluntário**
**H3:** `A associação funciona com voluntário.`
> Precisa de gente para montar cesta, carregar, organizar, dar aula e registrar o dia.
**CTA:** `Ser voluntário`

---

## 2. `/quem-somos`

**Title:** `Quem somos | Associação Sarando Carapicuíba`
**Meta description:** `Missão, pilares, diretoria, CNPJ e endereço da Associação Sarando Carapicuíba, em Carapicuíba, São Paulo.`
**OG description:** `Quem responde pela Associação Sarando Carapicuíba: a diretoria de nove pessoas, o CNPJ e o endereço da sede.`

**H1:** `Quem somos`

**Lead:**
> A Associação Sarando Carapicuíba é uma associação sem fins lucrativos com sede na Av. Celeste, 94, no Centro de Carapicuíba. A gente mantém quatro projetos gratuitos na sede e leva ações às comunidades da cidade.

> A missão cabe em uma frase: demonstrar o amor através de ações. A palavra que carrega a frase é ação. O que a associação faz tem sempre data, lugar e gente presente.

### A fé da associação

**H2:** `A fé da associação`

> A gente é uma associação cristã e não esconde isso. "Cremos no poder de Deus sobre Carapicuíba" é uma declaração da diretoria, escrita por ela.
>
> Isso não é condição para ninguém. Os projetos e as ações são abertos a qualquer pessoa, de qualquer religião ou de nenhuma, e nenhuma atividade exige participação religiosa.

### Os pilares

**H2:** `Três pilares`

**1. Amor de Deus**
> É de onde a associação diz que vem o trabalho, e é por isso que a missão começa pela palavra amor.

**2. Social**
> Chegar perto da família antes de ela precisar pedir. Cesta, roupa, material, presença no bairro.

**3. Capacitação**
> Ensinar alguma coisa que fique depois que a gente for embora. Um ofício, um instrumento, um esporte.

### Diretoria

**H2:** `A diretoria`

> Quem responde pela associação está aqui, com nome e cargo. Ninguém é remunerado: a diretoria é voluntária, como o resto da associação.

Grade em mosaico, foto quadrada, nome e cargo. Nove, nesta ordem:

| Nome | Cargo |
|---|---|
| Aline Mayara | Presidente |
| Joaquim Aparecido | Vice-presidente |
| Jucilene Ribeiro | 1ª secretária |
| Henrique Moura | 2º secretário |
| Larissa de Oliveira | 1ª tesoureira |
| Adilans de Deus | 2ª tesoureira |
| Douglas da Silva | Conselheiro fiscal |
| Wellington Soares | Conselheiro fiscal |
| Karen Vieira | Conselheira fiscal |

Os cargos aparecem no site atual sem acento e sem concordância ("1° Secretária", "Conselheiro fiscal" para Karen). Estão corrigidos acima.

### Bloco de fatos

| | |
|---|---|
| Razão social | Associação Sarando Carapicuíba |
| CNPJ | 05.392.117/0001-81 |
| Endereço | Av. Celeste, 94, Centro, Carapicuíba, SP, 06320-030 |
| WhatsApp | 11 98195-0343 |
| E-mail | associacao-sarando-carapicuiba@outlook.com |

---

## 3. `/projetos`

**Title:** `Projetos | Associação Sarando Carapicuíba`
**Meta description:** `Quatro projetos gratuitos na sede da associação, em Carapicuíba: capacitação profissional, bateria, jiu-jítsu e socioeducativo.`
**OG description:** `Quatro projetos gratuitos, abertos a qualquer pessoa, na Av. Celeste, 94, em Carapicuíba.`

**H1:** `Projetos`

**Lead:**
> Toda semana, na sede, a associação abre quatro projetos gratuitos: capacitação profissional para quem procura trabalho, aulas de bateria, treino de jiu-jítsu e um encontro socioeducativo para crianças e adolescentes.

Grade dos quatro cards, com a mesma linha usada na home.

Depois da grade, o bloco compartilhado **Como participar** (abaixo).

---

## 4. Bloco compartilhado: Como participar

Um componente só, renderizado nas quatro páginas de projeto e no fim de `/projetos`. Nada aqui é por projeto, porque os fatos são idênticos nos quatro.

**H2:** `Como participar`

> As aulas acontecem na sede da associação, na Av. Celeste, 94, Centro, Carapicuíba.
>
> É gratuito. Não tem mensalidade, não tem material pago e não tem limite de vagas.
>
> É aberto a qualquer pessoa e não precisa de experiência.
>
> Não tem horário fixo publicado. Mande mensagem no WhatsApp e a gente diz quando é a próxima aula.

**CTA:** `Falar no WhatsApp`

A última linha é a parte importante e não deve ser suavizada. Sem horário publicado, ninguém descobre quando aparecer sem mandar mensagem. Escrever "consulte os horários" esconderia isso.

---

## 5. Páginas de projeto

Coleção `projetos`. Frontmatter conforme o schema já definido, corpo em Markdown, o bloco **Como participar** entra pelo layout e não pelo corpo.

### 5.1 `capacitacao-profissional`

```yaml
---
titulo: "Capacitação profissional"
ordem: 1
resumo: "Curso e treinamento gratuitos para quem está procurando trabalho ou quer mudar de área. Aberto a qualquer pessoa, na sede da associação."
capa: "./capacitacao-profissional.webp"
capaAlt: "Sala com participantes de um curso da associação"
ativo: true
rascunho: false
---
```

**Título da página:** `Capacitação profissional`
**Linha de apoio:** `Para quem está procurando trabalho ou quer mudar de área.`

**Corpo:**
> Este é o projeto mais direto da associação. Ele existe para melhorar a chance de alguém conseguir trabalho.
>
> São cursos e treinamentos abertos a qualquer pessoa da cidade, sem custo. Quem está desempregado, quem nunca teve carteira assinada e quem quer mudar de área entram do mesmo jeito.
>
> O catálogo de cursos é da Sage, parceira da associação, e passa de 300 títulos. Para quem faz, não custa nada.
>
> Uma parte do que se aprende é técnica. A outra parte é o que costuma derrubar candidato na entrevista e no primeiro mês: falar em público, trabalhar junto, resolver um problema sem sumir.

**Title:** `Capacitação profissional | Associação Sarando Carapicuíba`
**Meta description:** `Curso e treinamento gratuitos em Carapicuíba para quem procura trabalho ou quer mudar de área. Sem custo, sem vaga limitada, na sede da associação.`

A parceria com a Sage e o número de cursos foram confirmados pela associação e entraram no texto. **Uma parte não voltou:** a frase original dizia "certificado reconhecido pelo MEC (cursos livres)", e curso livre, por definição, não tem reconhecimento do MEC. Afirmar isso sobre o certificado de um terceiro é o tipo de frase que se paga caro por publicar. Se a Sage confirmar por escrito o que o certificado dela é, a frase volta com o texto certo.

### 5.2 `aulas-de-bateria`

```yaml
---
titulo: "Aulas de bateria"
ordem: 2
resumo: "Aula de bateria em grupo, do começo, na sede da associação. Não precisa saber tocar nem ter instrumento em casa."
capa: "./bateria.webp"
capaAlt: "Aluno tocando bateria em aula na sede da associação"
ativo: true
rascunho: false
---
```

**Título da página:** `Aulas de bateria`
**Linha de apoio:** `Do começo, em grupo, no instrumento da associação.`

**Corpo:**
> A aula é em grupo e começa do zero. Não precisa saber tocar, não precisa ter bateria em casa e não precisa comprar nada.
>
> Quem nunca sentou num banco de bateria aprende ali. Quem já toca alguma coisa toca junto e vai adiante.
>
> A bateria é da associação e fica na sede. É o instrumento mais caro de se ter em casa e o mais fácil de dividir.

**Title:** `Aulas de bateria | Associação Sarando Carapicuíba`
**Meta description:** `Aula de bateria gratuita em Carapicuíba, em grupo e do começo. Instrumento da associação, sem custo e sem vaga limitada.`

O texto atual do site oferece "preços acessíveis e opções de pagamento flexíveis", o que contraria o fato confirmado de que o projeto é gratuito. Não migre essa frase.

### 5.3 `aulas-de-jiu-jitsu`

```yaml
---
titulo: "Aulas de jiu-jítsu"
ordem: 3
resumo: "Treino de jiu-jítsu em grupo, do começo, na sede da associação. Sem exigência de faixa, de idade ou de experiência."
capa: "./jiu-jitsu.webp"
capaAlt: "Treino de jiu-jítsu no tatame da associação"
ativo: true
rascunho: false
---
```

**Título da página:** `Aulas de jiu-jítsu`
**Linha de apoio:** `Tatame, em grupo, sem exigência de faixa.`

**Corpo:**
> O treino é em grupo e começa do começo. Não precisa ter feito luta antes e não tem exigência de faixa nem de idade.
>
> No tatame, a criança aprende a cair, a esperar a vez e a apertar a mão de quem acabou de derrubar ela. É o que o esporte ensina antes de ensinar golpe.
>
> O tatame é da associação e fica na sede.

**Title:** `Aulas de jiu-jítsu | Associação Sarando Carapicuíba`
**Meta description:** `Treino de jiu-jítsu gratuito em Carapicuíba, do começo, sem exigência de faixa nem de experiência. Na sede da associação.`

A página atual referencia `/to-do.webp`, que não existe. Esse projeto entra na lista de fotos com a maior lacuna: não há foto de treino nenhuma.

### 5.4 `socioeducativo`

```yaml
---
titulo: "Socioeducativo"
ordem: 4
resumo: "Encontro que junta aprendizado escolar e formação cidadã para crianças e adolescentes, na sede da associação."
capa: "./socioeducacional.webp"
capaAlt: "Crianças em atividade do projeto socioeducativo"
ativo: true
rascunho: false
---
```

**Título da página:** `Socioeducativo`
**Linha de apoio:** `Aprendizado escolar e formação cidadã no mesmo encontro.`

**Corpo:**
> É o projeto de convivência da associação, para crianças e adolescentes.
>
> Uma parte é apoio escolar: ler, escrever, contar, entender o que foi dado na escola e ninguém explicou de novo.
>
> A outra parte é formação cidadã: conversa sobre direito, dever e o bairro onde eles moram. É a parte que não cai na prova e é a que costuma faltar.

**Title:** `Socioeducativo | Associação Sarando Carapicuíba`
**Meta description:** `Projeto socioeducativo gratuito em Carapicuíba para crianças e adolescentes, com apoio escolar e formação cidadã, na sede da associação.`

Este é o projeto com a descrição mais fraca dos quatro, e é fraca porque o site atual também não diz o que acontece num encontro. Uma frase concreta da associação melhora a página inteira. Está na lista de verificação.

---

## 6. `/acoes`

**Title:** `Ações | Associação Sarando Carapicuíba`
**Meta description:** `As ações da Associação Sarando Carapicuíba nas comunidades de Carapicuíba, com data, lugar e fotos do dia.`
**OG description:** `Cada ação com data, comunidade e foto. Murão e Porto de Areia.`

**H1:** `Ações`

**Lead:**
> A associação escolhe uma comunidade de Carapicuíba, combina o que falta ali e leva num dia marcado: cesta de alimento, roupa, calçado, brinquedo. Até agora, foi em Murão e Porto de Areia.

As comunidades saem das próprias ações publicadas (`Intl.ListFormat` sobre `comunidade`), não de uma lista escrita à mão.

Lista em ordem de data decrescente. Cada card: data em `tabular-nums`, título, comunidade, resumo, `Ver a ação`.

**Fecho da página:**
> A próxima ação pode ter o nome de uma empresa junto.
**Link:** `Para empresas`, para `/empresas`. Mesma correção do bloco 1 da home: a página de empresas antes do WhatsApp.

---

## 7. Entradas da coleção de ações

Coleção `acoes`. Os corpos abaixo já estão apertados: o material original é reportagem e a maior parte do trabalho foi tirar adjetivo, não acrescentar fato.

### 7.1 `primeira-acao-na-comunidade-do-murao`

```yaml
---
titulo: "Primeira ação no Murão"
data: 2024-01-14
comunidade: "Murão"
resumo: "Em 14 de janeiro de 2024, a associação levou cesta de alimento para mais de 40 famílias e roupa e brinquedo para 40 crianças na comunidade do Murão."
capa: "./capa.webp"
capaAlt: "Voluntários entregando cestas na comunidade do Murão"
galeria:
  - imagem: "./murao_1.webp"
    legenda: "Entrega no Murão, 14 de janeiro de 2024"
  - imagem: "./murao_2.webp"
  - imagem: "./murao_3.webp"
rascunho: false
---
```

**Corpo:**
> No dia 14 de janeiro de 2024, a associação foi pela primeira vez à comunidade do Murão.
>
> Mais de 40 famílias receberam cesta de alimento. Outras 40 crianças receberam roupa e brinquedo.
>
> Foi a primeira ação do ano e a primeira naquela comunidade. As fotos são do dia.

**Title:** `Primeira ação no Murão | Associação Sarando Carapicuíba`
**Meta description:** `14 de janeiro de 2024: cesta de alimento para mais de 40 famílias e roupa e brinquedo para 40 crianças na comunidade do Murão, em Carapicuíba.`

O título antigo, "Juntos, Fazemos a Diferença: Recapitulação da Primeira Ação no Murão", sai. A URL fica igual.

### 7.2 `acao-de-pascoa-na-comunidade-porto-de-areia`

```yaml
---
titulo: "Ação de Páscoa no Porto de Areia"
data: 2023-04-16
comunidade: "Porto de Areia"
resumo: "Em 16 de abril de 2023, a associação distribuiu ovos de Páscoa para as crianças da comunidade Porto de Areia."
capa: "./capa.webp"
capaAlt: "Criança recebendo ovo de Páscoa no Porto de Areia"
rascunho: false
---
```

**Corpo:**
> No dia 16 de abril de 2023, a associação levou ovos de Páscoa para as crianças da comunidade Porto de Areia.
>
> É a menor das ações publicadas e a mais fácil de repetir: uma data no calendário, uma lista de nomes e alguém que banque os ovos.

**Title:** `Ação de Páscoa no Porto de Areia | Associação Sarando Carapicuíba`
**Meta description:** `16 de abril de 2023: distribuição de ovos de Páscoa para as crianças da comunidade Porto de Areia, em Carapicuíba.`

### 7.3 `acao-de-doacao-de-alimentos-comunidade-porto-de-areia`

```yaml
---
titulo: "Doação de alimentos no Porto de Areia"
data: 2023-03-31
comunidade: "Porto de Areia"
resumo: "Em 31 de março de 2023, a associação entregou cestas com arroz, feijão, óleo e farinha na comunidade Porto de Areia."
capa: "./capa.webp"
capaAlt: "Cestas de alimento montadas para a entrega no Porto de Areia"
rascunho: false
---
```

**Corpo:**
> No dia 31 de março de 2023, a associação entregou cestas de alimento na comunidade Porto de Areia.
>
> Cada cesta tinha arroz, feijão, óleo e farinha. É o conjunto que sustenta refeição de verdade por alguns dias, e é o que a associação monta quando alguém doa dinheiro sem dizer para o que é.

**Title:** `Doação de alimentos no Porto de Areia | Associação Sarando Carapicuíba`
**Meta description:** `31 de março de 2023: entrega de cestas com arroz, feijão, óleo e farinha na comunidade Porto de Areia, em Carapicuíba.`

Duas coisas saíram. O texto atual tem um marcador de modelo, literalmente `[Nome da Comunidade]`, publicado em produção. E o número de famílias era "muitas", que a regra dos fatos proíbe, então a quantidade simplesmente não é mencionada.

### 7.4 `acao-de-doacao-de-roupas-comunidade-porto-de-areia`

```yaml
---
titulo: "Doação de roupas no Porto de Areia"
data: 2023-03-30
comunidade: "Porto de Areia"
resumo: "Em 30 de março de 2023, a associação distribuiu roupa infantil e adulta, calçado, cobertor e acessório na comunidade Porto de Areia."
capa: "./capa.webp"
capaAlt: "Roupas separadas para a entrega no Porto de Areia"
rascunho: false
---
```

**Corpo:**
> No dia 30 de março de 2023, a associação levou roupa para a comunidade Porto de Areia.
>
> Teve roupa infantil e adulta, calçado, cobertor e acessório. A roupa veio de doação.
>
> Foi no dia anterior à entrega de alimento na mesma comunidade. As duas ações foram feitas em sequência.

**Title:** `Doação de roupas no Porto de Areia | Associação Sarando Carapicuíba`
**Meta description:** `30 de março de 2023: distribuição de roupa, calçado, cobertor e acessório na comunidade Porto de Areia, em Carapicuíba.`

---

## 8. `/empresas`

Registro diferente do resto do site: "nós" e "a sua empresa", frases curtas, mecanismo antes de apelo. As fotos das ações fazem o trabalho emocional, o texto não tenta.

**Title:** `Para empresas | Associação Sarando Carapicuíba`
**Meta description:** `Como a sua empresa pode patrocinar uma ação, doar bens ou doar dinheiro para a Associação Sarando Carapicuíba, em Carapicuíba.`
**OG description:** `Patrocine uma ação com data, comunidade e foto. Ou doe bens. Ou doe dinheiro.`

**H1:** `Para empresas`

**Lead:**
> Nós somos uma associação de Carapicuíba e trabalhamos com empresas de Carapicuíba. A sua empresa pode entrar de três formas: patrocinando uma ação inteira, doando bens ou doando dinheiro. A primeira é a que volta com data, comunidade e foto para mostrar.

### 1. Patrocine uma ação

**H2:** `Patrocine uma ação`

> A sua empresa banca um dia inteiro numa comunidade da cidade. O que vai ser levado é combinado antes, a entrega tem data marcada e o dia é fotografado.
>
> No fim existe uma data, um bairro e o registro do que foi entregue, com o nome da empresa junto se ela quiser aparecer.
>
> As ações já feitas estão publicadas neste site, com data e foto. É exatamente esse o material que a sua empresa recebe depois.

**CTA:** `Falar com a associação`

### 2. Doação de bens

**H2:** `Doação de bens`

> O que a associação usa: alimento não perecível, roupa e calçado, material escolar, instrumento, material esportivo, material de construção para a sede.
>
> Como a saída de mercadoria entra na contabilidade da sua empresa, quem diz é o seu contador. Vale confirmar com ele antes de separar o que sai do estoque.
>
> Se o que a sua empresa vende não é o que falta aqui, dinheiro rende mais: com dinheiro nós compramos exatamente o que a ação precisa.

**CTA:** `Falar com a associação`

### 3. Doação em dinheiro

**H2:** `Doação em dinheiro`

> A conta está no nome da própria associação. Depois do depósito, nós emitimos a declaração de recebimento da doação.
>
> Sobre imposto, quem responde é a contabilidade da sua empresa: nós não prometemos benefício fiscal nenhum. O que sai daqui é a declaração e um depósito rastreável numa conta da associação. Leve os dois para o seu contador.

**Dados bancários**

```
Titular       Associação Sarando Carapicuíba
CNPJ          05.392.117/0001-81  (chave PIX)
Instituição   403, Cora SCD
Agência       0001
Conta         1733434-4
```

### Bloco institucional

**H2:** `Quem está do outro lado`

> A associação tem diretoria com nome e cargo publicados, sede própria com endereço de rua e CNPJ ativo. Está tudo em [Quem somos](/quem-somos).
>
> Ninguém aqui recebe salário, nem a diretoria. O que a sua empresa doar sai em cesta, material e transporte, e não em folha de pagamento.
>
> Se a sua empresa precisa de outros documentos para aprovar a doação, escreva antes de decidir o valor. Nós dizemos na hora o que já está em mãos e o que teria que ser providenciado.

| | |
|---|---|
| Razão social | Associação Sarando Carapicuíba |
| CNPJ | 05.392.117/0001-81 |
| Endereço | Av. Celeste, 94, Centro, Carapicuíba, SP, 06320-030 |
| WhatsApp | 11 98195-0343 |
| E-mail | associacao-sarando-carapicuiba@outlook.com |

### Contato

**H2:** `Falar com a gente`

> WhatsApp 11 98195-0343 é o caminho mais rápido, e é onde a diretoria responde.
>
> Se a sua empresa precisa de registro escrito, escreva para associacao-sarando-carapicuiba@outlook.com.

**CTA:** `Falar com a associação`

> ### Por que esta página não fala de imposto
>
> **Por decisão: nenhuma afirmação fiscal ou legal entra no site.** Não tem citação de lei, não tem número de dedução, não tem alíquota. O que a página promete é papel e prazo, e essas duas coisas a associação controla.
>
> Isso troca um argumento por uma garantia. O argumento perdido é estreito: a dedução da Lei 9.249/95 só alcança empresa no lucro real, com teto de 2% do lucro operacional, e a maior parte do público desta página está no Simples. Em troca, nada aqui precisa de revisão contábil antes de ir ao ar, e nenhuma frase pode envelhecer mal.
>
> Se a associação se inscrever no CMDCA de Carapicuíba, isso muda de figura. A dedução via Fundo sai do imposto devido, e aí vale reabrir a discussão com um contador junto.

---

## 9. `/doacoes`

Página de pessoa física. Registro comunitário, "a gente".

**Title:** `Doações | Associação Sarando Carapicuíba`
**Meta description:** `Como doar para a Associação Sarando Carapicuíba: chave PIX, dados bancários e o que a doação vira em Carapicuíba.`
**OG description:** `PIX no CNPJ da associação. O que entra vira cesta, roupa, material e transporte.`

**H1:** `Doações`

**Lead:**
> Dá para doar por PIX ou por transferência. A chave PIX é o CNPJ da associação e a conta está no nome dela.
>
> O que entra vira cesta, roupa, material escolar, instrumento, tatame e transporte para as ações. Não tem valor mínimo.

### Dados para doar

```
Chave PIX     05.392.117/0001-81   (CNPJ)
Titular       Associação Sarando Carapicuíba
Instituição   403, Cora SCD
Agência       0001
Conta         1733434-4
```

> Depois de doar, se você quiser, manda o comprovante no WhatsApp. Assim a gente sabe quem doou e consegue responder.

**CTA:** `Falar no WhatsApp`

### Doar coisa em vez de dinheiro

**H2:** `Doar coisa em vez de dinheiro`

> Também dá para doar alimento não perecível, roupa em condição de uso, calçado, material escolar e instrumento.
>
> Antes de separar, manda mensagem no WhatsApp para combinar a entrega.

**CTA:** `Falar no WhatsApp`

### O que saiu desta página

Três blocos do site atual não migram, e a decisão é da IA e da pesquisa fiscal, não estética:

- Os dois links de "termo de doação", que apontam para `#` e não existem.
- A seção "Prestação de contas", que hoje diz "em breve..." e não tem nada atrás.
- A seção de argumentos fiscais para empresas, que foi reescrita e mudou de página. Ela contém afirmações sobre dedução que a pesquisa mostrou serem, no mínimo, imprecisas, e não deve ser copiada de lá.
- A faixa de "Patrocinadores, Apoiadores e Parceiros" com os logos da Sage e da Sara Nossa Terra, ambos linkando para `#`. A Sage já confirmou que aceita ser nomeada, então a faixa pode voltar assim que alguém tiver a URL dela. Por enquanto a parceria aparece no texto de `/projetos/capacitacao-profissional`, que é onde ela significa alguma coisa.

---

## 10. `/voluntario`

**Title:** `Ser voluntário | Associação Sarando Carapicuíba`
**Meta description:** `Como ser voluntário na Associação Sarando Carapicuíba: preencha o formulário e fale com a gente no WhatsApp. Sem exigência de experiência.`
**OG description:** `A associação funciona com voluntário. Preencha o formulário e mande mensagem.`

**H1:** `Ser voluntário`

**Lead:**
> A associação funciona com voluntário. Quem monta cesta, carrega, organiza a entrega, dá aula e registra o dia é voluntário.
>
> Não precisa de formação, de experiência nem de muito tempo livre. Precisa aparecer no dia combinado.

### Onde entra gente

**H2:** `Onde entra gente`

> **Na ação.** Separar, montar, carregar, entregar, organizar a fila. É o dia mais pesado e o mais fácil de participar sem compromisso longo.
>
> **No projeto.** Dar aula ou ajudar quem dá, toda semana na sede. Serve quem sabe um ofício, um instrumento ou uma luta.
>
> **Fora do dia.** Motorista, cozinha, foto, redes sociais, planilha. Uma parte do trabalho não acontece na frente de ninguém.

### Como começar

**H2:** `Como começar`

> Manda mensagem no WhatsApp dizendo que você quer ser voluntário e o que você sabe fazer. Não tem formulário, não tem cadastro e não tem entrevista.
>
> A gente responde combinando a próxima ação ou o projeto onde falta gente.

**CTA:** `Falar no WhatsApp`

### O que saiu desta página

A epígrafe de Tiago 1:27 sai por decisão do guia de voz. Sai também a lista de quatro benefícios do voluntariado, que é o trecho mais genérico do site inteiro.

**E sai o formulário do Google.** Ele foi verificado durante a escrita deste documento e está fechado: `forms.gle/HKefw1S6r5Vmn6M16` responde "não aceita mais respostas". Quem clica em "quero ser voluntário" no site de hoje bate numa porta trancada, e ninguém percebeu. WhatsApp passa a ser o único caminho.

A consequência é maior que esta página: **o site inteiro deixa de coletar qualquer dado pessoal.** Não tem formulário em lugar nenhum, e é isso que deixa a política de privacidade caber em uma página curta.

---

## 11. `/404`

**Title:** `Página não encontrada | Associação Sarando Carapicuíba`
**Meta:** `noindex`

**H1:** `Essa página não existe`

> O endereço que você abriu não está neste site. Pode ser que ele tenha mudado de lugar.

Links: `Início` · `Projetos` · `Ações` · `Doações`

A página atual está em inglês, com emoji, e é o template padrão do Gatsby. Ela é servida em produção do jeito que veio.

---

## 12. `/politica-de-privacidade`

Registro "nós", como as outras páginas institucionais. Página curta de propósito: o site não tem conta, não tem compra e não tem formulário, então a história é curta e escrever boilerplate descreveria coisas que não existem.

**Title:** `Política de privacidade | Associação Sarando Carapicuíba`
**Meta description:** `Como a Associação Sarando Carapicuíba trata dados neste site: estatística de acesso, cookies, uso de imagem e o canal para pedidos da LGPD.`
**Indexável.** Sem `noindex`.

**H1:** `Política de privacidade`

**Lead:**
> Esta página diz o que este site coleta, o que ele não coleta e para quem escrever se você quiser alguma coisa apagada.
>
> Última atualização: `{data da publicação}`.

### Quem é responsável

**H2:** `Quem é responsável`

> A responsável por este site é a Associação Sarando Carapicuíba, CNPJ 05.392.117/0001-81, com sede na Av. Celeste, 94, Centro, Carapicuíba, SP, 06320-030.
>
> Para qualquer assunto desta página, escreva para associacao-sarando-carapicuiba@outlook.com. Quem lê é a diretoria.

### O que este site não coleta

**H2:** `O que este site não coleta`

> Este site não tem cadastro, não tem login, não tem carrinho e não tem formulário. Nenhuma página aqui pede nome, telefone, e-mail, CPF ou endereço.
>
> Quando você fala com a associação, é por WhatsApp ou por e-mail, e aí os seus dados ficam onde essa conversa acontece, não neste site.

### Estatística de acesso e cookies

**H2:** `Estatística de acesso e cookies`

> Este site usa o Google Analytics 4 para contar visitas, saber quais páginas são lidas e de onde as pessoas chegam. Serve para decidir o que escrever, e é a única coisa medida aqui.
>
> **Nada disso carrega antes de você aceitar.** Na primeira visita aparece uma barra com duas opções. Se você recusar, o Google Analytics não é carregado e o site funciona igual, inteiro. Se você aceitar, o Google grava cookies no seu navegador com nomes começados em `_ga`, que servem para não contar você duas vezes.
>
> Os dados de navegação guardados pelo Google Analytics são apagados depois de **2 meses**. O que sobra depois disso é número somado, sem ninguém dentro.
>
> Esses dados são processados pelo Google, em servidores fora do Brasil. A política do Google vale sobre eles também.
>
> A base legal para essa medição é o seu consentimento, previsto no art. 7º, inciso I, da LGPD. Você pode mudar de ideia quando quiser: limpe os cookies deste site no seu navegador e a barra volta a perguntar.

### Fotos de pessoas

**H2:** `Fotos de pessoas`

> Este site publica fotos das ações e dos projetos, e nelas aparecem pessoas reconhecíveis, incluindo crianças. Elas estão aqui porque são a prova do que a associação fez, e não como ilustração.
>
> **Se você, ou uma criança sob sua responsabilidade, aparece numa foto e você não quer que ela fique no ar, escreva para associacao-sarando-carapicuiba@outlook.com dizendo qual página.** A foto sai, e não precisa explicar por quê.
>
> Nas ações a partir de agora, a associação pede autorização por escrito para fotografar, e a autorização de quem tem menos de 18 anos é assinada pelo responsável.

### Links para fora daqui

**H2:** `Links para fora daqui`

> Este site tem link para o Instagram da associação, para o WhatsApp e para o Google Maps. São serviços de outras empresas, com política própria, e o que você faz lá não passa por aqui.

### Seus direitos

**H2:** `Seus direitos`

> A LGPD, no art. 18, dá a você o direito de saber se tem dado seu sendo tratado, de acessar, de corrigir, de pedir a eliminação e de revogar o consentimento.
>
> Como este site não coleta dado pessoal identificável, o pedido mais comum aqui vai ser sobre foto, e ele está resolvido no parágrafo acima. Para os outros, escreva para associacao-sarando-carapicuiba@outlook.com. Nós respondemos em até 15 dias.
>
> A associação não tem encarregado de proteção de dados nomeado. O e-mail acima é o canal, e ele é atendido pela diretoria.

### Mudanças nesta página

**H2:** `Mudanças nesta página`

> Se esta página mudar, a data lá em cima muda junto. Não tem versão antiga arquivada.

> ### Antes de publicar esta página
>
> Três coisas precisam ser verdade no dia em que ela entrar no ar, senão a página vira uma declaração falsa. **Uma**, a barra de consentimento existe e o GA4 realmente não carrega antes do clique. **Duas**, a retenção de dados do usuário na conta do GA4 está configurada em 2 meses, o que é uma mudança de dois cliques no painel de administração. **Três**, o prazo de 15 dias para responder é o que a diretoria consegue cumprir de verdade.
>
> E o de sempre: alguém competente lê antes. Este texto foi escrito com cuidado e por quem não é advogado.

---

## 13. Verificação: o que a associação confirmou e o que continua em aberto

A associação respondeu a lista. Sete das nove linhas estão fechadas e o texto acima já foi ajustado. O que sobra está marcado **em aberto**.

| # | Afirmação | Situação |
|---|---|---|
| 1 | Ninguém na associação é remunerado, diretoria incluída | **Confirmado.** Entrou em `/quem-somos`, em `/empresas` e na home. É a frase mais forte que a associação ganhou de graça neste documento. |
| 2 | Todo mundo que trabalha na associação é voluntário | **Confirmado.** Entrou na seção "o que a gente faz" da home. |
| 3 | Parceria com a Sage, e a Sage aceita ser nomeada | **Confirmado.** A Sage é nomeada em `/projetos/capacitacao-profissional`. |
| 4 | O catálogo de mais de 300 cursos | **Confirmado**, com uma ressalva. O catálogo é da Sage e a associação não precisa comprová-lo, então o número entrou. **Não entrou** a frase "certificado reconhecido pelo MEC": curso livre não tem reconhecimento do MEC, e afirmar isso sobre o certificado de um terceiro é caro se estiver errado. Se a Sage disser por escrito o que o certificado dela é, a frase volta com o texto certo. |
| 5 | O que acontece num encontro do socioeducativo | **Dispensado pela associação.** A página fica como está, que é a mais fraca das quatro. Uma frase concreta ainda a resolveria a qualquer momento. |
| 6 | Quantidade de cestas na ação de 31/03/2023 | **Não existe.** A página fica sem número, que é como está escrita. |
| 7 | Dia fixo dos projetos | **Não existe.** O bloco "Como participar" continua dizendo isso na cara. No dia em que houver horário, é a melhoria mais útil do site inteiro para quem mora perto. |
| 8 | Ano de fundação | **Em aberto.** Continua fora do site. Está no estatuto, que é outro ticket. |
| 9 | O texto fiscal de `/empresas` e o parágrafo de imposto de `/doacoes` | **Resolvido por remoção.** Nenhuma afirmação fiscal ou legal fica no site: as citações da Lei 9.249/95, do ICMS e da Lei 14.016/2020 saíram de `/empresas`, e a seção de imposto de renda saiu de `/doacoes` inteira. Não precisa mais de revisão contábil. |

Uma consequência que sobrou da linha 3: se a Sage aceita ser nomeada, a faixa de apoiadores pode voltar. Ela precisa de um link de verdade, e ninguém tem a URL da Sage ainda. Até lá a parceria aparece só no texto da página de capacitação, que é onde ela significa alguma coisa.

---

## 14. Auditoria: o que foi cortado e por quê

A reescrita não foi de estilo. Foram três problemas concretos:

**Afirmação sem fonte.** "Muitas famílias", "inúmeras peças", "impacto profundo", "milhares". Nenhum desses números existe em lugar nenhum. Onde havia número real, ele ficou: mais de 40 famílias e 40 crianças no Murão, 14 de janeiro de 2024. Onde não havia, a quantidade sumiu em vez de virar advérbio.

**Vocabulário de qualquer associação do Brasil.** "Transformação de vidas", "fazer a diferença", "jornada solidária", "propósito", "agente de mudança", "semear um amanhã mais justo". O site inteiro passou pelo teste do guia de voz: se a frase caberia igual no site de outra associação, ela foi cortada. Restaram os nomes das comunidades, as datas, o endereço, o preço, que é zero, e o que entra em cada cesta.

**Contradição com os fatos coletados.** A página de bateria vendia "preços acessíveis e opções de pagamento flexíveis" num projeto gratuito. A de jiu-jítsu mandava "entrar em contato para obter informações sobre horários" onde horário não existe. A de alimentos publicou `[Nome da Comunidade]`, um marcador de modelo, em produção.

Além disso, os defeitos de metadados que o site tem hoje e que a migração corrige de graça: as três páginas de ação da Porto de Areia e do Murão compartilham o mesmo `<title>`, "Ação de páscoa na comunidade porto de areia", inclusive a do Murão. E **nenhuma página tem meta description ou texto de OG próprio**: existe uma única descrição global em `src/html.js`, o mesmo parágrafo sobre "transformação de vidas" repetido em todas as páginas, com uma `og:image` que aponta para a foto dos voluntários. Este documento fornece título, descrição e OG específicos para as dezessete URLs.

**Contagem final.** Zero pontos de exclamação. Zero travessões no meio de frase. Zero ocorrências de "transformação", "impacto", "jornada", "propósito" e "fazer a diferença". Nenhum "ONG": só "associação". Projeto e ação nunca se misturam. Cinco rótulos de CTA, sempre os mesmos.

---

## 15. Onde cada imagem vai parar

O schema das coleções usa `image()`, então as capas e as galerias saem de `static/` e passam a morar ao lado do Markdown. Só as fotos da diretoria continuam em `public/`, porque a coleção `equipe` é um JSON.

| Hoje | Depois |
|---|---|
| `static/about.webp` | `src/assets/hero.webp` (hero da home) |
| `static/capacitacao-profissional.webp` | `src/content/projetos/capacitacao-profissional.webp` |
| `static/bateria.webp` | `src/content/projetos/bateria.webp` |
| `static/Jiu-jitsu.webp` | `src/content/projetos/jiu-jitsu.webp` (renomeado para minúsculo) |
| `static/socioeducacional.webp` | `src/content/projetos/socioeducativo.webp` |
| `static/actions/acao-4/*` | `src/content/acoes/primeira-acao-na-comunidade-do-murao/` |
| `static/actions/acao-1/capa.webp` | `src/content/acoes/acao-de-pascoa-na-comunidade-porto-de-areia/capa.webp` |
| `static/actions/acao-2/capa.webp` | `src/content/acoes/acao-de-doacao-de-alimentos-comunidade-porto-de-areia/capa.webp` |
| `static/actions/acao-3/capa.webp` | `src/content/acoes/acao-de-doacao-de-roupas-comunidade-porto-de-areia/capa.webp` |
| `static/{aline,joaquim,jucilene,henrique,larissa,adilas,douglas,wn,karen}.webp` | `public/equipe/` |
| `static/logo.webp` | `public/logo.webp` até o vetor chegar |

Não migram: `iv.webp` e `revisao-de-vidas.webp`, que saem com os dois projetos cortados; `sage.webp` e `saranossaterra.webp`, que são os logos de apoiador linkando para `#`; e `cover-about-us.webp`, `cover-volunter.webp` e `doacoes.webp`, as três faixas finas de cabeçalho, que não têm slot equivalente na direção C. `banner.webp` fica como hero reserva. `capa-doacoes.webp` só volta se a nova `/doacoes` pedir uma foto, e ela não pede.

Duas imagens são referenciadas por páginas vivas e não existem no repositório: `/iv-aula.webp`, que some junto com o Instituto de Vencedores, e `/to-do.webp`, que é a imagem do corpo da página de jiu-jítsu. A segunda importa: o jiu-jítsu fica só com a foto da grade, que já era o pior recorte 3:4 dos quatro projetos. É o primeiro item da lista de fotos a tirar.
