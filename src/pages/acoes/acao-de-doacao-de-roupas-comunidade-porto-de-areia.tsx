import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HeadFC } from 'gatsby'

const Acao = () => (
  <main>
    <Header />
    <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto ">
      <h3 className="font-bebas text-4xl mb-2 md:text-8xl">
        Ação de doação de roupas na comunidade porto de areia
      </h3>
      <h4 className="text-red-800 font-bold mb-4 lg:text-xl">30/03/2023</h4>
      <img
        src="/actions/acao-3/capa.webp"
        className="w-full lg:h-[600px] object-cover mb-6"
      />

      <p className="mb-12 lg:text-xl">
        Em 30/03/2023, nossa equipe da Associação Sarando Carapicuíba embarcou
        em uma das missões mais tocantes que já realizamos: levar conforto e
        dignidade através da distribuição de roupas na comunidade Porto de
        areia. A realidade de muitas famílias na região é de dificuldade para
        adquirir vestuário adequado, seja por razões financeiras ou por eventos
        adversos, como desastres naturais. Com o apoio inestimável de nossos
        doadores e voluntários, conseguimos fazer a diferença!
      </p>
      <p className="mb-6 lg:text-xl">
        <strong>Impacto da Campanha</strong>
      </p>
      <p className="mb-12 lg:text-xl">
        Ao longo da ação, distribuímos inumeras peças de roupas , desde
        vestuário infantil até roupas para adultos, beneficiando muitas famílias
        famílias. Além de roupas, oferecemos sapatos, cobertores e acessórios,
        assegurando que cada beneficiado tivesse suas necessidades atendidas.
      </p>
      <p className="mb-6 lg:text-xl">
        <strong>Nossos Agradecimentos</strong>
      </p>
      <p className="mb-12 lg:text-xl">
        Nossa gratidão infinita a todos que colaboraram de alguma forma. Cada
        peça doada, cada minuto dedicado, cada gesto de carinho, tudo contribuiu
        para o sucesso desta campanha. Juntos, mostramos que a solidariedade é
        capaz de aquecer corações e corpos.
      </p>
      <p className="mb-6 lg:text-xl"><strong>Seguimos Adiante</strong></p>
      <p className="mb-12 lg:text-xl">
        A necessidade continua e nosso compromisso também. Estamos sempre em
        busca de novas formas de ajudar e expandir nossas ações. Se você deseja
        contribuir com futuras iniciativas, doando roupas, seu tempo ou
        recursos, entre em contato conosco e faça parte desta jornada
        transformadora.
      </p>
      <p className="mb-12 lg:text-xl"><a href="#contato" className='underline'>Contate-nos</a></p>
    </section>
    <Footer />
  </main>
)

export default Acao

export const Head: HeadFC = () => (
  <title>Ação de páscoa na comunidade porto de areia</title>
)
