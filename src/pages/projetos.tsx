import * as React from 'react'
import type { HeadFC } from 'gatsby'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HeadingPages } from '../components/HeadingPages'

const IndexPage = () => {
  return (
    <main>
      <Header />
      <HeadingPages title="Projetos" />

      <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto md:flex md:items-start md:gap-6 lg:gap-12 ">
        <img
          src="https://via.placeholder.com/640x480"
          className="mb-4 md:w-1/2"
        />
        <div>
          <h3 className="font-bebas text-4xl mb-2 md:text-6xl">
            Capacitação profissional
          </h3>
          <h4 className="text-red-800 font-bold mb-4">
            + de 300 Cursos com certificado reconhecido pelo MEC (Cursos livres)
          </h4>
          <p className="mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto md:flex md:items-start md:gap-6 lg:gap-12 md:flex-row-reverse">
        <img
          src="https://siteong.s3.sa-east-1.amazonaws.com/revisao.jpg"
          className="mb-4 md:w-1/2"
        />
        <div>
          <h3 className="font-bebas text-4xl mb-2 md:text-6xl">
            Revisão de vidas
          </h3>
          <h4 className="text-red-800 font-bold mb-4">
            Projeto social para restauração de pessoas através dos ensinamentos
            de Jesus
          </h4>
          <ul className="mb-6 list-disc list-inside">
            <li>
              <strong>18 palestras</strong> ministradas
            </li>
            <li>
              <strong>4 eventos</strong> no ano
            </li>
          </ul>
          <p className="mb-6">
            Mais de <strong>200</strong> só em 2021
          </p>
          <p className="mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto md:flex md:items-start md:gap-6 lg:gap-12">
        <img
          src="https://via.placeholder.com/640x480"
          className="mb-4 md:w-1/2"
        />
        <div>
          <h3 className="font-bebas text-4xl mb-2 md:text-6xl">
            Instituto de vencedores
          </h3>
          <h4 className="text-red-800 font-bold mb-4">
            Curso para formação de jovens e adultos em liderança
          </h4>
          <p className="mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto md:flex md:items-start md:gap-6 lg:gap-12 md:flex-row-reverse">
        <img
          src="https://via.placeholder.com/640x480"
          className="mb-4 md:w-1/2"
        />
        <div>
          <h3 className="font-bebas text-4xl mb-2 md:text-6xl">
            Combate a fome
          </h3>
          <h4 className="text-red-800 font-bold mb-4">
            Programa de distribuição de alimentos em comunidades carentes
          </h4>
          <p className="mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto md:flex md:items-start md:gap-6 lg:gap-12">
        <img
          src="https://via.placeholder.com/640x480"
          className="mb-4 md:w-1/2"
        />
        <div>
          <h3 className="font-bebas text-4xl mb-2 md:text-6xl">
            Meio ambiente
          </h3>
          <h4 className="text-red-800 font-bold mb-4">
            Conscientização sobre a importância do cuidado com a preservação do
            meio ambiente
          </h4>
          <p className="mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Projetos</title>
