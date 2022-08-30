import * as React from 'react'
import type { HeadFC } from 'gatsby'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HeadingPages } from '../components/HeadingPages'

const IndexPage = () => {
  return (
    <main>
      <Header />
      <HeadingPages title="Seja um voluntário" />

      <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto md:flex md:items-start md:gap-6 lg:gap-12">
        <img
          src="https://siteong.s3.sa-east-1.amazonaws.com/voluntariado.jpg"
          className="mb-6 flex-grow md:w-1/2"
        />
        <div className="flex-grow">
          <h4 className="text-red-800 font-bold mb-2">Venha fazer parte</h4>
          <h3 className="font-bebas text-4xl mb-6 md:text-6xl">
            Nos ajude a servir vidas.
          </h3>
          <p className="mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
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
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
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
