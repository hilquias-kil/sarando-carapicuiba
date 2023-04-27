import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HeadFC } from 'gatsby'

const Projects = () => (
  <main>
    <Header />
    <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto ">
      <h3 className="font-bebas text-4xl mb-2 md:text-8xl">Aulas de bateria</h3>
      <h4 className="text-red-800 font-bold mb-4 lg:text-xl">
        Se você é um amante da música ou um músico aspirante, estamos aqui para
        ajudá-lo a aprender a tocar bateria
      </h4>
      <img
        src="/projects/bateria-3.webp"
        className="w-full lg:h-[600px] object-cover mb-6"
      />

      <p className="mb-12 lg:text-xl">
        A Associação Sarando Carapicuíba é comprometida em fornecer
        oportunidades educacionais para jovens em comunidades carentes, e
        estamos entusiasmados em oferecer um curso de bateria para aqueles que
        desejam aprender e explorar a música.
      </p>

      <div className="md:flex md:gap-12 md:mb-12 items-start">
        <img src="/projects/bateria-1.webp" className="w-full mb-6 md:w-1/2" />
        <div>
          <p className="mb-6 lg:text-xl">
            O nosso curso de bateria é uma oportunidade emocionante para jovens
            de desenvolverem habilidades musicais valiosas, experimentarem
            diferentes estilos musicais e se conectarem com outros jovens que
            compartilham sua paixão pela música. As aulas são oferecidas em
            grupo, e são acessíveis a todos, independentemente do nível de
            habilidade ou experiência anterior.
          </p>
          <p className="mb-6 lg:text-xl">
            Entendemos que a música pode ser uma forma poderosa de expressão e
            uma maneira de construir confiança e autoestima em jovens. Por isso,
            nos esforçamos para oferecer preços acessíveis e opções de pagamento
            flexíveis para tornar o nosso curso de bateria acessível a todos os
            jovens da comunidade.
          </p>
        </div>
      </div>
      <div className="md:flex md:gap-12 md:flex-row-reverse  items-start">
        <img src="/projects/bateria-2.webp" className="w-full mb-6 md:w-1/2 " />
        <div>
          <p className="mb-6 lg:text-xl">
            Os nossos instrutores são músicos talentosos e experientes, que têm
            uma paixão pela educação musical. Eles estão comprometidos em
            ensinar técnicas avançadas de bateria, e fornecer uma orientação
            valiosa para ajudar os alunos a crescerem como músicos.
          </p>
          <p className="mb-6 lg:text-xl">
            Se você é um jovem com interesse em busca de uma maneira de explorar
            sua paixão pela música, nosso curso de bateria é a escolha certa
            para você. Junte-se a nós e comece a explorar o seu potencial
            musical hoje mesmo!
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </main>
)

export default Projects

export const Head: HeadFC = () => <title>Aulas de bateria</title>
