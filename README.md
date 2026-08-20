# sarandocarapicuiba.org

Site da Associação Sarando Carapicuíba. Astro 7, estático, hospedado na Netlify.

O plano completo da reconstrução está em [`.scratch/rebuild-astro/HANDOFF.md`](.scratch/rebuild-astro/HANDOFF.md),
e todo o texto do site em [`.scratch/rebuild-astro/copy/copy-deck.md`](.scratch/rebuild-astro/copy/copy-deck.md).

## Rodar localmente

Precisa de Node 22.12 ou mais novo.

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # typecheck
npm run build    # gera dist/
```

## Publicar uma ação

Não precisa de programador. Precisa de um editor de texto e das fotos.

1. Crie o arquivo `src/content/acoes/<slug>.md`. **O nome do arquivo vira o endereço da
   página**, então use só letras minúsculas e hífens, sem acento:
   `acao-de-natal-no-murao.md` vira `/acoes/acao-de-natal-no-murao`.
2. Crie uma pasta com o mesmo nome, `src/content/acoes/<slug>/`, e coloque as fotos lá.
3. Copie o começo de uma ação que já existe e troque os valores. É esta parte:

   ```yaml
   ---
   titulo: "Ação de Natal no Murão"
   data: 2026-12-20
   comunidade: "Murão"
   resumo: "Uma frase dizendo o que foi levado, para quem e quando. No máximo 240 letras."
   capa: "./acao-de-natal-no-murao/capa.webp"
   capaAlt: "Descrição da foto para quem não enxerga"
   rascunho: true
   ---
   ```

4. Escreva o texto embaixo dessa parte, em parágrafos separados por uma linha em branco.
5. Deixe `rascunho: true` enquanto estiver escrevendo. **A ação só aparece no site quando
   virar `rascunho: false`.**
6. Se tiver mais fotos além da capa, acrescente a galeria:

   ```yaml
   galeria:
     - imagem: "./acao-de-natal-no-murao/foto-1.webp"
       legenda: "Legenda opcional"
     - imagem: "./acao-de-natal-no-murao/foto-2.webp"
   ```

Duas regras que o site cobra na hora de publicar, e são de propósito:

- **`resumo` tem limite de 240 letras.** Se passar, o build falha em vez de deixar um
  parágrafo inteiro entrar num card.
- **`capaAlt` é obrigatório.** É o que uma pessoa cega ouve no lugar da foto.

Projeto novo funciona igual, em `src/content/projetos/`, com `ordem` no lugar de `data`.

## Onde ficam as coisas

| Pasta | O que tem |
|---|---|
| `src/content/acoes/` | Uma ação por arquivo `.md`, com as fotos numa pasta de mesmo nome |
| `src/content/projetos/` | Um projeto por arquivo `.md` |
| `src/data/equipe.json` | A diretoria, com as fotos em `public/equipe/` |
| `src/pages/` | As páginas fixas |
| `src/styles/global.css` | Cores, tipografia e espaçamento. Tudo sai daqui |
| `public/_redirects` | Os 301 das páginas antigas |

## Antes de publicar mudanças no ar

Consulte a checklist de lançamento no HANDOFF. Em resumo: o Google Analytics não pode
carregar antes do clique em "Aceitar", a retenção de dados no painel do GA4 fica em 2 meses,
e os três redirects precisam responder 301 de verdade, conferidos com `curl -I`.
