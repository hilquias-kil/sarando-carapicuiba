import { getCollection } from 'astro:content'

/**
 * The published projetos, in the order the association wants them shown.
 * Every page that lists projetos goes through here, so "published" means
 * one thing site-wide.
 */
export const projetosPublicados = async () =>
  (await getCollection('projetos', ({ data }) => !data.rascunho && data.ativo)).sort(
    (a, b) => a.data.ordem - b.data.ordem
  )

/**
 * The published ações, most recent first.
 * `entry.data.data` is Astro's frontmatter bag holding a field named `data`,
 * which is unreadable at the call site. It is unwrapped once, here.
 */
export const acoesPublicadas = async (limite?: number) => {
  const acoes = (await getCollection('acoes', ({ data }) => !data.rascunho)).sort(
    (a, b) => b.data.data.getTime() - a.data.data.getTime()
  )
  return limite ? acoes.slice(0, limite) : acoes
}

export const diretoria = async () =>
  (await getCollection('equipe')).sort((a, b) => a.data.ordem - b.data.ordem)
