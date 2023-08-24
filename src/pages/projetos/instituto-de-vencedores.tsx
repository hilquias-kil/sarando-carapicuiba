import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HeadFC } from 'gatsby'

const Projects = () => (
  <main>
    <Header />
    <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto ">
      <h3 className="font-bebas text-4xl mb-2 md:text-8xl">Instituto de Vencedores</h3>
      <h4 className="text-red-800 font-bold mb-4 lg:text-xl">subtitulo</h4>
      <img
        src="/to-do.webp"
        className="w-full lg:h-[500px] object-cover mb-6"
      />
      <p className="mb-6 lg:text-xl">...</p>
    </section>
    <Footer />
  </main>
)

export default Projects

export const Head: HeadFC = () => <title>Instituto de Vencedores</title>
