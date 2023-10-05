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
        src="/actions/acao-2/capa.webp"
        className="w-full object-cover mb-6"
      />

      <p className="mb-12 lg:text-xl">
        Em 31/03/2023, a Associação Sarando Carapicuíba realizou uma ação de
        grande impacto na comunidade Porto de areia. O cenário era de
        vulnerabilidade, com famílias enfrentando sérias dificuldades
        alimentares. Porém, com união, solidariedade e um trabalho conjunto,
        conseguimos trazer esperança e alimento para muitos lares!
      </p>

      <p className="mb-6 lg:text-xl">
        <strong>Impacto da Ação</strong>
      </p>

      <p className="mb-12 lg:text-xl">
        Distribuímos alimentos, beneficiando diretamente muitas famílias. Cada
        cesta continha itens essenciais, como arroz, feijão, óleo, farinhas,
        entre outros, garantindo refeições nutritivas para todos.
      </p>

      <p className="mb-6 lg:text-xl">
        <strong>Agradecimentos</strong>
      </p>
      <p className="mb-12 lg:text-xl">
        Nosso mais profundo agradecimento a todos os voluntários, doadores e
        parceiros que tornaram essa ação possível. Vocês são a prova viva de
        que, com empatia e união, podemos superar desafios e fazer a diferença
        na vida de muitas pessoas.
      </p>

      <p className="mb-6 lg:text-xl">
        <strong>Próximos Passos</strong>
      </p>

      <p className="mb-12 lg:text-xl">
        Continuaremos nosso compromisso com a comunidade [Nome da Comunidade] e
        outras regiões que necessitam de nosso auxílio. Se você deseja se juntar
        a nós em futuras ações, seja como voluntário, doador ou parceiro, entre
        em contato e faça parte dessa rede de solidariedade.
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
