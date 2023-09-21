import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HeadFC } from 'gatsby'

const Projects = () => (
  <main>
    <Header />
    <section className="px-6 py-12 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto ">
      <h3 className="font-bebas text-4xl mb-2 md:text-8xl">Socioeducativo</h3>
      <h4 className="text-red-800 font-bold mb-4 lg:text-xl">
        Programa Socioeducativo da Associação Sarando Carapicuíba
      </h4>
      <img
        src="/socioeducacional.webp"
        className="w-full lg:h-[500px] object-cover mb-6"
      />
      <p className="mb-6 lg:text-xl">
        A educação é uma das ferramentas mais poderosas para transformação
        social. Por meio dela, podemos romper barreiras, construir futuros
        promissores e criar comunidades mais fortes e coesas. Na Associação Sarando Carapicuíba,
        reconhecemos o potencial da abordagem socioeducativa para fazer a
        diferença nas vidas dos indivíduos e, por extensão, em nossa sociedade.
      </p>
      <h4 className="font-bold text-2xl mb-2 md:text-4xl">
        O que é o Programa Socioeducativo?
      </h4>
      <p className="mb-6 lg:text-xl">
        Nosso programa socioeducativo vai além do ensino tradicional. Combinamos
        aprendizado acadêmico com formação cidadã, ensinando valores,
        habilidades sociais e proporcionando aos participantes uma compreensão
        mais profunda de seu papel no mundo.
      </p>
      <h4 className="font-bold text-2xl mb-2 md:text-4xl">
        Por que é importante?
      </h4>
      <ul className="list-outside list-disc pl-4">
        <li className="mb-6 lg:text-xl">
          <strong>Empoderamento</strong>: O programa capacita os indivíduos a
          reconhecerem seu valor, desenvolverem sua autoestima e se tornarem
          agentes de mudança em suas comunidades.
        </li>
        <li className="mb-6 lg:text-xl">
          <strong>Conexão Comunitária</strong>: Ao aprenderem sobre seus
          direitos, responsabilidades e a importância do engajamento cívico, os
          participantes tornam-se mais conectados e comprometidos com sua
          comunidade.
        </li>
        <li className="mb-6 lg:text-xl">
          <strong>Desenvolvimento Holístico</strong>: O foco não está apenas no
          desenvolvimento acadêmico, mas também no emocional, social e ético,
          garantindo que os participantes estejam equipados para lidar com os
          desafios da vida.
        </li>
      </ul>
      <h4 className="font-bold text-2xl mb-2 md:text-4xl">
        Como você pode se envolver?
      </h4>
      <p className="mb-6 lg:text-xl">
        Estamos sempre buscando voluntários apaixonados, doadores generosos e
        parceiros comprometidos para expandir e fortalecer nosso programa
        socioeducativo.
      </p>
      <ul className="list-outside list-disc pl-4">
        <li className="mb-6 lg:text-xl">
          <strong>Seja um Voluntário</strong>: Contribua com suas habilidades e
          conhecimento, e faça a diferença na vida de alguém.
        </li>
        <li className="mb-6 lg:text-xl">
          <strong>Faça uma Doação</strong>: Suas contribuições nos ajudam a
          alcançar mais pessoas e oferecer recursos e oportunidades de
          qualidade.
        </li>
        <li className="mb-6 lg:text-xl">
          <strong>Torne-se um Parceiro</strong>: Junte-se a nós em parcerias
          colaborativas para ampliar o alcance e o impacto do programa.
        </li>
      </ul>
      <p className="mb-6 lg:text-xl">
        Juntos, podemos construir um futuro mais brilhante e inclusivo. Faça
        parte do nosso movimento socioeducativo e ajude a moldar a próxima
        geração de líderes conscientes e capacitados!
      </p>
    </section>
    <Footer />
  </main>
)

export default Projects

export const Head: HeadFC = () => <title>Socioeducativo</title>
