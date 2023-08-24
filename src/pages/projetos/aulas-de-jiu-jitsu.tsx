import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HeadFC } from 'gatsby'

const Projects = () => (
  <main>
    <Header />
    <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto ">
      <h3 className="font-bebas text-4xl mb-2 md:text-8xl">
        Aulas de Jiu-jítsu
      </h3>
      <h4 className="text-red-800 font-bold mb-4 lg:text-xl"> Aqui, não apenas ensinamos as técnicas dessa arte marcial, mas também
        cultivamos habilidades essenciais para a vida, proporcionando aos jovens
        da comunidade a oportunidade de se desenvolverem física, mental e
        emocionalmente.</h4>
      <img
        src="/to-do.webp"
        className="w-full lg:h-[500px] object-cover mb-6"
      />
      <p className="mb-6 lg:text-xl">
        Nossa missão é ir além das quatro paredes de um tatame. Acreditamos que
        cada jovem, independente de sua origem, possui um potencial único e
        inexplorado. Ao oferecer aulas de Jiu Jitsu, estamos fornecendo uma
        ferramenta para construir autoconfiança, disciplina, resiliência e
        respeito próprio.
      </p>
      <p className="mb-6 lg:text-xl">
        O Jiu Jitsu vai além de uma simples luta. É um caminho para o
        autodescobrimento e o crescimento pessoal. Através das técnicas e
        exercícios, os jovens aprendem a importância do controle, da paciência e
        da estratégia. Esses valores são transferíveis para todas as áreas da
        vida, capacitando-os a enfrentar desafios de maneira mais eficaz.
      </p>
      <p className="mb-6 lg:text-xl">
        Nossos instrutores não são apenas mestres do Jiu Jitsu, mas também
        mentores comprometidos com o bem-estar de cada aluno. Eles entendem as
        adversidades que os jovens da periferia enfrentam e estão aqui para
        orientá-los não apenas no tatame, mas também na jornada da vida.
      </p>
      <p className="mb-6 lg:text-xl">
        Se você é um jovem da comunidade em busca de uma oportunidade de
        crescimento, estamos aqui para recebê-lo de braços abertos. Não é
        necessário ter experiência prévia em Jiu Jitsu; o importante é o desejo
        de aprender e crescer. Entre em contato conosco para obter informações
        sobre horários, inscrições e como fazer parte desta incrível jornada de
        autodesenvolvimento.
      </p>

      <p className="mb-6 lg:text-xl">
        Se você compartilha da nossa visão de transformação e quer fazer a
        diferença, considere se tornar um apoiador da nossa ONG. Sua
        contribuição, seja financeira, material ou como voluntário, ajudará a
        sustentar e expandir nossos programas, alcançando ainda mais jovens e
        impactando positivamente suas vidas.
      </p>
    </section>
    <Footer />
  </main>
)

export default Projects

export const Head: HeadFC = () => <title> Capacitação profissional</title>
