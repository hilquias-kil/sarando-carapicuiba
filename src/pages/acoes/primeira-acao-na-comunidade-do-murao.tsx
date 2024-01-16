import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HeadFC } from 'gatsby'

const Acao = () => (
  <main>
    <Header />
    <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto ">
      <h3 className="font-bebas text-4xl mb-2 md:text-8xl">
        Juntos, Fazemos a Diferença: Recapitulação da Primeira Ação no Murão
      </h3>
      <h4 className="text-red-800 font-bold mb-4 lg:text-xl">14/01/2024</h4>
      <img
        src="/actions/acao-4/capa.webp"
        className="w-full object-cover mb-6 aspect-video"
      />

      <p className="mb-12 lg:text-xl">
        Em um vibrante início de ano, nossa ONG esteve presente na comunidade do
        Murão, realizando uma ação que tocou os corações de mais de 40 famílias
        e trouxe sorrisos a 40 crianças. Estamos emocionados em compartilhar os
        resultados inspiradores dessa jornada solidária.
      </p>

      <p className="mb-6 lg:text-xl">
        <strong>Assistência às Famílias:</strong>
      </p>

      <p className="mb-12 lg:text-xl">
        Mais do que fornecer cestas básicas, fizemos questão de estender as mãos
        com compaixão e cuidado a mais de 40 famílias na comunidade. Através da
        distribuição de alimentos essenciais, estamos plantando as sementes de
        uma mudança positiva, assegurando que as necessidades básicas de cada
        lar sejam atendidas.
      </p>

      <p className="mb-6 lg:text-xl">
        <strong>Apadrinhamento de Crianças:</strong>
      </p>

      <p className="mb-12 lg:text-xl">
        A alegria e a esperança brilharam nos olhos de 40 crianças que agora têm
        roupas novas e brinquedos para chamar de seus. Ao apadrinhar cada uma
        delas, estamos comprometidos não apenas a fornecer presentes materiais,
        mas a construir laços significativos que transcendem as barreiras e
        nutrem o crescimento e desenvolvimento de cada criança.
      </p>

      <p className="mb-6 lg:text-xl">
        <strong>Agradecimento Especial:</strong>
      </p>
      <p className="mb-12 lg:text-xl">
        Nossa gratidão vai para todos os voluntários dedicados e apoiadores
        generosos que tornaram possível essa ação impactante. Cada um de vocês é
        uma peça fundamental nesse quebra-cabeça de solidariedade, e juntos,
        formamos uma rede de apoio que se estende além das fronteiras da
        comunidade.
      </p>
      <div className="grid md:grid-cols-2 md:grid-rows-1 gap-4 mb-6">
        <img src="/actions/acao-4/murao_1.webp" />
        <div className="grid md:grid-cols-1 md:grid-rows-2 gap-4">
          <img
            src="/actions/acao-4/murao_2.webp"
            className="h-full object-cover"
          />
          <img
            src="/actions/acao-4/murao_3.webp"
            className="h-full  object-cover"
          />
        </div>
      </div>

      <p className="mb-6 lg:text-xl">
        <strong>O Que Vem Por Aí:</strong>
      </p>
      <p className="mb-12 lg:text-xl">
        Este é apenas o começo de um ano repleto de iniciativas e projetos
        inspiradores. Continuaremos a trabalhar de mãos dadas com a comunidade
        do Murão, explorando oportunidades para construir um futuro mais
        brilhante e sustentável para todos.
      </p>

      <p className="mb-12 lg:text-xl">
        Agradecemos a todos que tornaram possível essa ação transformadora.
        Vamos seguir adiante, unidos e comprometidos em fazer a diferença, uma
        família de apoio por vez.
      </p>
      <p className="mb-12 lg:text-xl text-red-800 ">
        VOCÊ TAMBÉM PODE FAZER PARTE DISSO, ACESSE NOSSO{' '}
        <a
          href="https://www.instagram.com/sarandocarapicuiba/"
          target="_blank"
          className="underline"
          rel="noreferrer"
        >
          INSTAGRAM
        </a>
      </p>
      <p className="mb-12 lg:text-xl">
        Com gratidão, <br /> Sarando Carapicuíba.
      </p>
    </section>

    <Footer />
  </main>
)

export default Acao

export const Head: HeadFC = () => (
  <title>
    Juntos, Fazemos a Diferença: Recapitulação da Primeira Ação no Murão
  </title>
)
