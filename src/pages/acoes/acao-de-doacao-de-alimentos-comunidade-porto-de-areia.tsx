import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HeadFC } from 'gatsby'

const Acao = () => (
  <main>
    <Header />
    <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto ">
      <h3 className="font-bebas text-4xl mb-2 md:text-8xl">
        Ação de doação de alimentos na comunidade porto de areia
      </h3>
      <h4 className="text-red-800 font-bold mb-4 lg:text-xl">31/03/2023</h4>
      <img
        src="/acoes/image.webp"
        className="w-full lg:h-[600px] object-cover mb-6"
      />

      <p className="mb-12 lg:text-xl">texto</p>
    </section>
    <Footer />
  </main>
)

export default Acao

export const Head: HeadFC = () => (
  <title>Ação de páscoa na comunidade porto de areia</title>
)
