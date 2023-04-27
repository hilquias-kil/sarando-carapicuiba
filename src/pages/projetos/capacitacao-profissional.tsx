import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HeadFC } from 'gatsby'

const Projects = () => (
  <main>
    <Header />
    <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto ">
      <h3 className="font-bebas text-4xl mb-2 md:text-8xl">
        Capacitação profissional
      </h3>
      <h4 className="text-red-800 font-bold mb-4 lg:text-xl">
        + de 300 Cursos com certificado reconhecido pelo MEC (Cursos livres)
      </h4>
      <img src="/capacitacao-profissional.webp" className="w-full lg:h-[500px] object-cover mb-6" />

      <p className="mb-6 lg:text-xl">
        A capacitação profissional é uma ferramenta essencial para o
        desenvolvimento de uma carreira de sucesso. Através de cursos,
        treinamentos e outras formas de capacitação, os profissionais podem
        adquirir novas habilidades e conhecimentos que os ajudarão a alcançar
        seus objetivos pessoais e profissionais.
      </p>
      <p className="mb-6 lg:text-xl">
        No entanto, muitas pessoas têm dificuldades em encontrar oportunidades
        de capacitação adequadas às suas necessidades e orçamento. É por isso
        que as ONGs desempenham um papel tão importante na promoção da
        capacitação profissional.
      </p>
      <p className="mb-6 lg:text-xl">
        A ONG Sarando Carapicuba em parceria com a Sage oferece uma variedade de
        programas e serviços de capacitação para ajudar as pessoas a se
        prepararem para o mercado de trabalho. Isso inclui cursos técnicos,
        treinamentos em habilidades profissionais, orientação para
        empreendedorismo e muito mais.
      </p>
      <p className="mb-6 lg:text-xl">
        Mas a capacitação profissional não se trata apenas de adquirir
        habilidades técnicas. Nós tambem oferecemos programas para ajudar as
        pessoas a desenvolver habilidades interpessoais, como comunicação,
        liderança e trabalho em equipe. Essas habilidades são cada vez mais
        valorizadas pelas empresas, pois ajudam a criar um ambiente de trabalho
        saudável e produtivo.
      </p>
      <p className="mb-6 lg:text-xl">
        Por fim, a capacitação profissional é uma ferramenta essencial para
        combater a desigualdade e promover a inclusão social. Essa iniciativa
        têm um papel crucial a desempenhar na promoção da capacitação para
        pessoas que podem ter menos acesso a oportunidades educacionais e
        profissionais.
      </p>

      <p className="mb-6 lg:text-xl">
        E se você tem habilidades ou conhecimentos que podem ajudar outras
        pessoas a se capacitar, considere se tonar um voluntário. Juntos podemos
        ajudar mais pessoas a alcançar seu potencial profissional.
      </p>
    </section>
    <Footer />
  </main>
)

export default Projects

export const Head: HeadFC = () => <title> Capacitação profissional</title>
