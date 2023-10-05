import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HeadFC } from 'gatsby'

const Projects = () => (
  <main>
    <Header />
    <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto ">
      <h3 className="font-bebas text-4xl mb-2 md:text-8xl">Revisão de vidas</h3>
      <h4 className="text-red-800 font-bold mb-4 lg:text-xl">
        O "Revisão de Vidas" é mais do que um evento; é uma jornada espiritual
      </h4>
      <img
        src="/revisao-de-vidas.webp"
        className="w-full lg:h-[500px] object-cover mb-6"
      />
      <p className="mb-6 lg:text-xl">
        Nesse retiro, somos convidados a refletir profundamente sobre nossas
        crenças, atitudes e comportamentos, encontrando clareza no divino
        propósito que Deus delineou para nós. É uma oportunidade ímpar,
        proporcionada por Deus, para que possamos estabelecer um vínculo mais
        próximo e genuíno com Ele, reavaliando e redirecionando nossa trajetória
        conforme Seu plano divino.
      </p>
      <p className="mb-6 lg:text-xl">
        Ao longo da história, Deus tem designado lugares especiais para os
        encontros com Ele, como fez com Jesus, Moisés e Seus apóstolos, mantendo
        assim a Sua promessa. No mundo de hoje, Ele nos guia para ter um coração
        receptivo, prontos para ouvir e abraçar a Sua palavra. O "Revisão de
        Vida" se destaca como uma oportunidade sublime para mergulhar na
        sabedoria divina que restaura, renova e realinha.
      </p>
      <p className="mb-6 lg:text-xl">
        Durante o "Revisão de Vidas", aguardam-nos momentos poderosos, incluindo
        ministrações abençoadas, batismo e experiências surpreendentes que irão
        transformar a alma e o espírito. Se ainda não experimentou essa jornada,
        não deixe para depois. Permita que Deus realize o Seu desejo divino de
        conhecê-lo e fazer do seu coração o Seu refúgio. Esta experiência é, sem
        dúvida, transformadora!
      </p>
      <p className="mb-6 lg:text-xl">
        <strong>Benefícios do Revisão de Vidas:</strong>
      </p>
      <ol className='list-decimal pl-6'>
        <li className="mb-6 lg:text-xl">
          <strong>Autoconhecimento</strong>: Descubra seu verdadeiro eu e
          entenda o propósito divino para sua vida.
        </li>
        <li className="mb-6 lg:text-xl">
          <strong>Comunhão com Deus</strong>: Experimente um encontro autêntico
          com o Criador.
        </li>
        <li className="mb-6 lg:text-xl">
          <strong>Restauração Emocional</strong>: Encontre cura e renovação para
          as feridas da alma.
        </li>
        <li className="mb-6 lg:text-xl">
          <strong>Cura Física</strong>: Testemunhe os milagres que se manifestam
          durante o retiro.
        </li>
        <li className="mb-6 lg:text-xl">
          <strong>Experiência Amorosa</strong>: Deixe-se envolver e transformar
          pelo amor incondicional de Jesus.
        </li>
        <li className="mb-6 lg:text-xl">
          <strong>Descoberta de Propósito</strong>: Jesus revelará o propósito
          divino específico para sua jornada.
        </li>
        <li className="mb-6 lg:text-xl">
          <strong>Restauração Familiar</strong>: Deus trará cura e unidade,
          dissipando a solidão e estabelecendo conexões mais profundas.
        </li>
      </ol>
      <p className="mb-6 lg:text-xl">
        A Associação Sarando Carapicuíba se dedica com empenho, apoiando e colaborando diretamente
        com este projeto, em parceria com a igreja evangélica Sara Nossa Terra.
      </p>
    </section>
    <Footer />
  </main>
)

export default Projects

export const Head: HeadFC = () => <title>Revisão de vidas</title>
