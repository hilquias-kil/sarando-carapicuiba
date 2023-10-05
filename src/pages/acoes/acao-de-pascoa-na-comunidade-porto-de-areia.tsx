import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HeadFC } from 'gatsby'

const Acao = () => (
  <main>
    <Header />
    <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto ">
      <h3 className="font-bebas text-4xl mb-2 md:text-8xl">
        Ação de páscoa na comunidade porto de areia
      </h3>
      <h4 className="text-red-800 font-bold mb-4 lg:text-xl">16/04/2023</h4>
      <img
        src="/actions/acao-1/capa.webp"
        className="w-full lg:h-[600px] object-cover mb-6"
      />

      <p className="mb-12 lg:text-xl">
        A Páscoa é um momento de renovação, amor e união. Porém, para muitas
        famílias, celebrar essa data se torna um desafio devido às adversidades
        financeiras. Pensando em tornar essa época ainda mais especial e em
        levar um sorriso ao rosto de nossas crianças, A Associação Sarando
        Carapicuíba promoveu uma acao de distribuicao de ovos de pascoa na
        comunidade Porto de Areia no dia 16/04/2023.
      </p>
    </section>
    <Footer />
  </main>
)

export default Acao

export const Head: HeadFC = () => (
  <title>Ação de páscoa na comunidade porto de areia</title>
)
