export const site = {
  nome: 'Associação Sarando Carapicuíba',
  cnpj: '05.392.117/0001-81',
  endereco: 'Av. Celeste, 94, Centro, Carapicuíba, SP, 06320-030',
  telefoneDisplay: '11 98195-0343',
  whatsapp: 'https://wa.me/5511981950343',
  email: 'associacao-sarando-carapicuiba@outlook.com',
  instagram: 'https://www.instagram.com/sarandocarapicuiba/',
  instagramHandle: '@sarandocarapicuiba',
  mapa: 'https://maps.app.goo.gl/EdcfyFiojaphtFEf6',
  ga4: 'G-6N23FX10H6',
} as const

/** The account the association receives into. Published on /doacoes and /empresas. */
export const conta = {
  titular: site.nome,
  instituicao: '403, Cora SCD',
  agencia: '0001',
  numero: '1733434-4',
  /** The PIX key is the CNPJ. */
  chavePix: site.cnpj,
} as const

/** Header nav. Five items is the mobile ceiling. */
export const nav = [
  { href: '/quem-somos', label: 'Quem somos' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/acoes', label: 'Ações' },
  { href: '/doacoes', label: 'Doações' },
  { href: '/empresas', label: 'Para empresas' },
] as const

/**
 * One label per intent, repeated site-wide. Adding a sixth is how a site ends
 * up with three ways to say the same thing, which is what this replaces.
 *
 * Labels only. Two of these point at the same WhatsApp number and differ by
 * who is reading, and `verAcao` points at whichever ação rendered it, so the
 * destination cannot live here without lying about one of them.
 */
export const cta = {
  doar: 'Doar',
  whatsapp: 'Falar no WhatsApp',
  voluntario: 'Ser voluntário',
  verAcao: 'Ver a ação',
  associacao: 'Falar com a associação',
} as const

/** Destinations for the CTA labels that always land in the same place. */
export const destino = {
  doar: '/doacoes',
  whatsapp: site.whatsapp,
  voluntario: '/voluntario',
  empresas: '/empresas',
} as const

export const formatarData = (d: Date) =>
  new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(d)

export const dataCurta = (d: Date) =>
  new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(d)
