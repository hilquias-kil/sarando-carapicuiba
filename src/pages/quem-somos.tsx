import * as React from 'react'
import type { HeadFC } from 'gatsby'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HeadingPages } from '../components/HeadingPages'
import { FiDownload, FiHeart, FiThumbsUp, FiBookOpen } from 'react-icons/fi'

const IndexPage = () => {
  return (
    <main>
      <Header />
      <HeadingPages
        title="Quem somos"
        img="/cover-about-us.webp"
      />

      <section className="p-6 py-12 md:flex md:items-start md:gap-6 lg:px-0 lg:w-[1024px] xl:w-[1280px] lg:m-auto">
        <div className="flex-grow">
          <p className="mb-6">
            Somos uma instituição sem fins lucrativos que visa levar
            transformação de vidas através de projetos solidários a fim de unir
            forças entre o setor publico, privado e comunidades com propósito de
            promover projetos de capacitação e investimento em cada pessoa até
            que ela tenha o domínio de sua própria vida.
          </p>
          <p className="mb-6">
            Missão: Demonstrar o amor através de ações. Através do amor ver e
            desenvolver o potencial de cada pessoa pois, é pelo amor que vemos
            em cada pessoa o caminho sem fim.
          </p>
          <p className="mb-6">
            <a
              href="#"
              className="underline text-cyan-800 flex gap-2 items-center"
            >
              <FiDownload />
              <span>Estatuto social</span>
            </a>
          </p>
        </div>
        <img
          src="/logo.webp"
          className="md:w-1/3"
          width="733"
          height="639"
          alt="Associação Sarando Carapicuíba"
        />
      </section>

      <section className="relative w-full h-[400px] lg:h-[500px] after:content-[''] after:w-full after:h-full after:absolute after:bg-cyan-800 after:bg-opacity-70 after:left-0 after:top-0 md:after:w-1/2">
        <div className="relative z-20 p-6 md:w-1/2 lg:px-0 lg:py-14 lg:w-[1024px] xl:w-[1280px] lg:pr-[calc(1024px/2)] xl:pr-[calc(1280px/2)] lg:m-auto">
          <h3 className="font-bebas text-4xl lg:text-7xl mb-4 md:mb-6 text-white">
            A MISSÃO DE SARAR...
          </h3>
          <h4 className="text-xl lg:text-2xl text-white mb-4 md:mb-8">
            Cremos no poder de Deus sobre Carapicuíba
          </h4>
          <p className="text-white lg:w-4/5">
            Queremos levar a transformação de vida até as famílias
            carapicuíbanas através e um projeto solidário que visa unir forças
            entre o setor público, empresas privadas e a comunidade, para assim
            promover projetos de capacitação profissional, combate a fome e o
            bem estar familiar.
          </p>
        </div>
        <img
          src="/about.webp"
          className="absolute left-0 top-0 w-full h-full object-cover z-0"
        />
      </section>

      <section className="p-6 py-10 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto">
        <h3 className="font-bebas text-4xl lg:text-6xl mb-4 md:mb-6">
          Conheça um pouco sobre os 3 pilares que nos move
        </h3>
        <p className="mb-4 lg:mb-8">
          Mais do que valores, são princípios que temos como verdade e que
          acreditamos ser a base para o desenvolvimento sustentável da
          sociedade!
        </p>
        <div className="flex flex-col gap-6 mb-6 md:mb-10 md:flex-row">
          <div className="p-6 lg:py-10 bg-red-800 flex flex-col items-center">
            <FiHeart className="h-10 w-10 mb-4 text-amber-100" />
            <h4 className="text-amber-100 text-2xl mb-4">Amor de Deus</h4>
            <p className="text-amber-100 text-center">
              O amor de Deus expresso por seu filho Jesus através de sua Igreja,
              tem poder para sarar nossa cidade.
            </p>
          </div>
          <div className="p-6 lg:py-10 bg-amber-100 flex flex-col items-center">
            <FiThumbsUp className="h-10 w-10 mb-4 text-red-800" />
            <h4 className="text-red-800 text-2xl mb-4">Social</h4>
            <p className="text-red-800 text-center">
              Fortalecer as famílias por meio de projetos sociais que trás
              esperança e resgate de vidas.
            </p>
          </div>
          <div className="p-6 lg:py-10 bg-amber-100 flex flex-col items-center">
            <FiBookOpen className="h-10 w-10 mb-4 text-red-800" />
            <h4 className="text-red-800 text-2xl mb-4">Capacitação</h4>
            <p className="text-red-800 text-center">
              Entendemos a importância de preparar nossos jovens para lidar com
              os desafios profissionais.
            </p>
          </div>
        </div>
        <p className="text-xl lg:w-3/5">
          Queremos fazer a diferença nas famílias de nossa cidade,
          democratizando o acesso a educação, formação de caráter e instrução
          dos nossos Jovens.
        </p>
      </section>

      <section className="p-6 py-10 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto">
        <h3 className="font-bebas text-4xl lg:text-6xl mb-8 md:mb-12">
          Nossa Equipe de Profissionais
        </h3>
        <div className="flex  flex-wrap gap-6 md:gap-14">
          <div className="w-[140px] md:w-[200px]">
            <img
              src="/aline.webp"
              className="mb-4"
            />
            <span className="block font-bold">Aline Mayara</span>
            <span className="text-red-800 block">Presidente</span>
          </div>
          <div className="w-[140px] md:w-[200px]">
            <img
              src="/joaquim.webp"
              className="mb-4"
            />
            <span className="block font-bold">Joaquim Aparecido</span>
            <span className="text-red-800 block">Vice Presidente</span>
          </div>
          <div className="w-[140px] md:w-[200px]">
            <img
              src="/jucilene.webp"
              className="mb-4"
            />
            <span className="block font-bold">Jucilene Ribeiro</span>
            <span className="text-red-800 block">1° Secretária</span>
          </div>
          <div className="w-[140px] md:w-[200px]">
            <img
              src="/henrique.webp"
              className="mb-4"
            />
            <span className="block font-bold">Henrique Moura</span>
            <span className="text-red-800 block">2° Secretário</span>
          </div>
          <div className="w-[140px] md:w-[200px]">
            <img
              src="/larissa.webp"
              className="mb-4"
            />
            <span className="block font-bold">Larissa de Oliveira</span>
            <span className="text-red-800 block">1° Tesoureira</span>
          </div>
          <div className="w-[140px] md:w-[200px]">
            <img
              src="/adilas.webp"
              className="mb-4"
            />
            <span className="block font-bold">Adilans de Deus</span>
            <span className="text-red-800 block">2° Tesoureira</span>
          </div>
          <div className="w-[140px] md:w-[200px]">
            <img
              src="/douglas.webp"
              className="mb-4"
            />
            <span className="block font-bold">Douglas da Silva</span>
            <span className="text-red-800 block">Conselheiro fiscal</span>
          </div>
          <div className="w-[140px] md:w-[200px]">
            <img
              src="/wn.webp"
              className="mb-4"
            />
            <span className="block font-bold">Wellington Soares</span>
            <span className="text-red-800 block">Conselheiro fiscal</span>
          </div>
          <div className="w-[140px] md:w-[200px]">
            <img
              src="/karen.webp"
              className="mb-4"
            />
            <span className="block font-bold">Karen Vieira </span>
            <span className="text-red-800 block">Conselheiro fiscal</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Quem somos</title>
