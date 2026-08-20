import { defineCollection } from 'astro:content'
import { glob, file } from 'astro/loaders'
import { z } from 'astro/zod'

const acoes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/acoes' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      data: z.coerce.date(),
      comunidade: z.string(),
      resumo: z.string().max(240),
      /** Falls back to `resumo` when absent. */
      metaDescricao: z.string().max(180).optional(),
      capa: image(),
      capaAlt: z.string(),
      galeria: z
        .array(z.object({ imagem: image(), legenda: z.string().optional() }))
        .optional(),
      rascunho: z.boolean().default(false),
    }),
})

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      ordem: z.number(),
      resumo: z.string().max(240),
      /** One line under the card in the grid. */
      linha: z.string().max(120),
      /** The support line under the h1 on the project's own page. */
      apoio: z.string().max(120),
      /** Falls back to `resumo` when absent. */
      metaDescricao: z.string().max(180).optional(),
      capa: image(),
      capaAlt: z.string(),
      ativo: z.boolean().default(true),
      rascunho: z.boolean().default(false),
    }),
})

const equipe = defineCollection({
  loader: file('./src/data/equipe.json'),
  schema: z.object({
    id: z.string(),
    nome: z.string(),
    cargo: z.string(),
    ordem: z.number(),
    foto: z.string(),
  }),
})

export const collections = { acoes, projetos, equipe }
