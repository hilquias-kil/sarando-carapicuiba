import * as React from 'react'
import type { HeadFC } from 'gatsby'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HeadingPages } from '../components/HeadingPages'

const IndexPage = () => {
  return (
    <main>
      <Header />
      <HeadingPages title="Seja um voluntário" img="/cover-volunter.webp" />

      <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto md:flex md:items-start md:gap-6 lg:gap-12">
        <img src="/voluntarios.webp" className="mb-6 flex-grow md:w-1/2" />
        <div className="flex-grow">
          <h4 className="text-red-800 font-bold mb-2">Venha fazer parte</h4>
          <h3 className="font-bebas text-4xl mb-6 md:text-6xl">
            Nos ajude a servir vidas.
          </h3>
          <p className="mb-6">
            Há algo extraordinariamente gratificante em doar seu tempo e
            habilidades em prol de uma causa maior. Na Associação Sarando Carapicuíba,
            acreditamos que todos têm algo valioso a contribuir e que juntos,
            com paixão e dedicação, podemos criar um impacto profundo em nossa
            comunidade.
          </p>
          <p className="mb-6">
            Ao se tornar voluntário conosco, você terá a oportunidade de:
          </p>
          <ul className="list-outside list-disc pl-4">
            <li className="mb-6">
              <strong>Transformar Vidas</strong>: Seja através de suas
              habilidades profissionais, dedicação ou simplesmente seu tempo,
              cada ação contribui para uma mudança tangível na vida de alguém.
            </li>
            <li className="mb-6">
              <strong>Aprender e Crescer</strong>: A experiência de voluntariado
              oferece uma rica troca de aprendizados. Você terá a chance de
              conhecer pessoas inspiradoras, adquirir novas habilidades e
              expandir sua visão de mundo.
            </li>
            <li className="mb-6">
              <strong>Conectar-se com Pessoas de Propósito</strong>: Fazendo
              parte de nossa rede de voluntários, você se juntará a indivíduos
              que compartilham dos mesmos valores e desejos de construir um
              mundo melhor.
            </li>
            <li className="mb-6">
              <strong>Ser parte da Solução</strong>: Em vez de apenas
              identificar problemas, você estará ativamente envolvido na busca
              por soluções, tornando-se um agente de mudança em sua comunidade.
            </li>
          </ul>
          <p className="mb-6 italic font-bold ">
            “A religião pura e imaculada para com Deus e Pai, é esta: Visitar os
            órfãos e as viúvas nas suas tribulações e guardar-se da corrupção do
            mundo.” Tiago 1:27
          </p>
        </div>
      </section>

      <section className="px-6 py-12  lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto">
        <h4 className="text-red-800 font-bold mb-2 ">Quero fazer parte</h4>
        <h3 className="font-bebas text-4xl mb-6 md:text-6xl">
          Como se tornar um voluntário
        </h3>
        <p className="mb-6">
          Convidamos você a explorar essa jornada conosco. Não importa sua
          idade, formação ou experiência, há um lugar para você na Associação Sarando Carapicuíba. Junte-se a nós, compartilhe seu tempo e talento, e descubra o
          poder transformador do voluntariado. Sua jornada para fazer a
          diferença começa aqui!
        </p>
        <ul>
          <li className="flex items-center gap-2 mb-4">
            <span className="text-4xl font-bebas bg-red-800 text-white block py-1 px-2">
              1
            </span>{' '}
            <span className="text-xl">Baixe o termo, preencha e assine</span>
          </li>
          <li className="flex items-center gap-2 mb-4 ">
            <span className="text-4xl font-bebas bg-red-800 text-white  block py-1 px-2">
              2
            </span>{' '}
            <span className="text-xl">Entre em contato conosco</span>
          </li>
        </ul>
      </section>

      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Seja um voluntario</title>
