import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HeadFC } from 'gatsby'

const Projects = () => (
  <main>
    <Header />
    <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto ">
      <h3 className="font-bebas text-4xl mb-2 md:text-8xl">
        Instituto de Vencedores
      </h3>
      <h4 className="text-red-800 font-bold mb-4 lg:text-xl">O Instituto de Vencedores é uma renomada escola de capacitação dedicada
        à formação dos futuros líderes de células da Sara Nossa Terra.</h4>
      <img
        src="/iv-aula.webp"
        className="w-full lg:h-[500px] object-cover mb-6"
      />
      <p className="mb-6 lg:text-xl">
         Conta com
        educadores entusiasmados e dotados de uma profunda unção para transmitir
        conhecimento. Cada aula é meticulosamente planejada para apresentar o
        ensino da Palavra de Deus de uma maneira inovadora e poderosa.
      </p>
      <p className="mb-6 lg:text-xl">
        A abordagem pedagógica do Instituto de Vencedores é ancorada na
        Andragogia, que se define como a "arte e ciência voltada a facilitar o
        aprendizado e a compreensão dos adultos". Esta metodologia se aprofunda
        no entendimento do adulto, levando em consideração suas dimensões
        psicológicas, biológicas e sociais.
      </p>
      <p className="mb-6 lg:text-xl">
        Além disso, o projeto tem o propósito primordial de preparar os jovens
        para uma vida ativa em sociedade, ajudando-os a compreender e assumir
        seu papel, alinhados aos ensinamentos divinos.
      </p>
      <p className="mb-6 lg:text-xl">
        A associação se dedica com empenho, apoiando e colaborando diretamente
        com este projeto, em parceria com a igreja evangélica Sara Nossa Terra.
      </p>
      
    </section>
    <Footer />
  </main>
)

export default Projects

export const Head: HeadFC = () => <title>Instituto de Vencedores</title>
