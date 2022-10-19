import * as React from 'react'
import type { HeadFC } from 'gatsby'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HeadingPages } from '../components/HeadingPages'
import { FiDownload } from 'react-icons/fi'

const IndexPage = () => {
  return (
    <main>
      <Header />
      <HeadingPages
        title="Doações"
        img="/doacoes.webp"
      />

      <section className="p-6 lg:px-0 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto ">
        <h3 className="font-bold text-xl mb-4 lg:text-3xl lg:mb-8">
          Ajude financiando os projetos da ONG!
        </h3>
        <div className="md:flex md:gap-12">
          <div className="mb-6 flex-grow">
            <p className="bg-cyan-600 p-6 text-white">
              Dados para transferência: <br />
              Agência: 0001
              <br />
              Conta: 1733434-4
              <br />
              Instituição: 403 - Cora SCD
              <br />
              Nome da Empresa: Associação Sarando Carapicuíba
              <br />
              CNPJ: 05.392.117/0001-81 (Chave PIX)
            </p>
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-xl mb-4">Baixe o termo de doação</h3>
            <a
              href="#"
              className="underline text-cyan-800 flex gap-2 items-center mb-4"
            >
              <FiDownload />
              <span>termo de doação pessoa juridica</span>
            </a>
            <a
              href="#"
              className="underline text-cyan-800 flex gap-2 items-center"
            >
              <FiDownload />
              <span>termo de doação pessoa fisica</span>
            </a>
          </div>
        </div>
      </section>

      <section className="p-6 lg:px-0 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto">
        <h3 className="font-bold text-xl mb-4 lg:text-3xl lg:mb-8">
          Prestação de Contas
        </h3>
        <div className=" flex flex-col gap-6 md:w-1/2">
          <div className="bg-neutral-100 p-4">
            <a href="#" className="underline  flex gap-2 items-center">
              <FiDownload />
              <span>termo de doação pessoa fisica</span>
            </a>
            <span className="italic">10/10/2022</span>
          </div>
          <div className="bg-neutral-100 p-4">
            <a href="#" className="underline  flex gap-2 items-center">
              <FiDownload />
              <span>termo de doação pessoa fisica</span>
            </a>
            <span className="italic">10/10/2022</span>
          </div>
        </div>
      </section>

      <section className="p-6 lg:px-0 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto">
        <h3 className="font-bold text-xl mb-4 lg:text-3xl lg:mb-8">
          Patrocinadores, Apoiadores e Parceiros
        </h3>
        <div className="flex gap-6 items-center">
          <a href="#">
            <img
              src="/sage.webp"
              alt="Sage Cursos Online"
              className='w-[200px]'
            />
          </a>
          <a href="#">
            <img
              src="/saranossaterra.webp"
              alt="Sara Nossa Terra"
              className='w-[200px]'
            />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Doações</title>
