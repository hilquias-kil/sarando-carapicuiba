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
      <HeadingPages title="Doações" img="/doacoes.webp" />

      <section className="p-6 lg:px-0 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto ">
        <h3 className="font-bold text-xl mb-4 lg:text-3xl lg:mb-8">
          Ajude financiando os projetos da ONG!
        </h3>
        <p className="mb-6 lg:text-xl">
          Em um mundo repleto de desafios, cada ato de generosidade ilumina um
          pouco mais o caminho para um futuro melhor. Ao doar para a Associação Sarando Carapicuíba, você não está apenas oferecendo recursos financeiros; está
          depositando esperança, fortalecendo comunidades e construindo pontes
          para mudanças reais e duradouras. Cada contribuição, por menor que
          seja, tem o poder de transformar vidas, criar oportunidades e semear
          um amanhã mais justo e solidário. Faça parte desta missão conosco e
          descubra o imenso impacto que seu gesto pode causar!
        </p>
        <div className="md:flex md:gap-12">
          <img src="/capa-doacoes.webp" className="w-full md:w-1/2" />
          <div className="mb-6 flex-grow">
            <p className="bg-cyan-600 p-6 text-white lg:text-xl mb-6">
              Dados para transferência: <br />
              Agência: <strong>0001</strong>
              <br />
              Conta: <strong>1733434-4</strong>
              <br />
              Instituição: <strong>403 - Cora SCD</strong>
              <br />
              Nome da Empresa: <strong>Associação Sarando Carapicuíba</strong>
              <br />
              CNPJ: <strong>05.392.117/0001-81 (Chave PIX)</strong>
            </p>
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
          Por que Empresas Devem Considerar Doações para Associação Sarando
          Carapicuíba?
        </h3>

        <p className="mb-6 lg:text-xl">
          No cenário empresarial atual, a responsabilidade social corporativa
          não é apenas uma opção, mas uma necessidade. As empresas estão cada
          vez mais cientes do impacto positivo que podem gerar na sociedade e na
          forma como são percebidas pelo público. Além disso, há também
          incentivos fiscais significativos para empresas que optam por fazer a
          diferença. Com base na Lei 9.249/95, queremos destacar alguns dos
          benefícios fiscais de doar para a Associação Sarando Carapicuíba:
        </p>

        <ul>
          <li className="mb-6 lg:text-xl">
            1. <strong>Deduções Fiscais</strong>: A Lei 9.249/95 estabelece que
            as doações feitas a entidades civis sem fins lucrativos podem ser
            deduzidas até certo limite. Isso significa que sua empresa pode
            reduzir a base de cálculo do Imposto de Renda e da Contribuição
            Social sobre o Lucro Líquido (CSLL), tornando a doação não apenas
            uma ação de caridade, mas também uma estratégia fiscal inteligente.
          </li>
          <li className="mb-6 lg:text-xl">
            2. <strong>Fortalecimento da Imagem Corporativa</strong>: As
            empresas que demonstram um compromisso genuíno com causas sociais
            ganham uma imagem positiva no mercado. Associar sua marca a uma
            organização respeitável como a Associação Sarando Carapicuíba amplia
            sua visibilidade e destaca seu comprometimento com o bem-estar da
            comunidade.
          </li>
          <li className="mb-6 lg:text-xl">
            3. <strong>Cumprimento da Responsabilidade Social</strong>: Para
            além dos benefícios fiscais, doar para organizações sem fins
            lucrativos é uma maneira de cumprir a responsabilidade social da sua
            empresa. Contribuir para o trabalho da Associação Sarando
            Carapicuíba permite que sua empresa faça parte de mudanças tangíveis
            e positivas na vida de muitas pessoas.
          </li>
          <li className="mb-6 lg:text-xl">
            4. <strong>Relacionamento com Stakeholders</strong>: A sociedade, os
            clientes e até os investidores valorizam empresas que demonstram
            ética e compromisso social. Doar é uma forma de construir e
            fortalecer esses relacionamentos, impactando positivamente a
            percepção de stakeholders e o valor da marca.
          </li>
        </ul>
        <p className="lg:text-xl">
          Ao considerar fazer uma doação para a Associação Sarando Carapicuíba,
          sua empresa não está apenas ajudando a financiar projetos vitais, mas
          também está aproveitando os benefícios fiscais proporcionados pela
          legislação brasileira e fortalecendo sua posição no mercado. Entre em
          contato conosco para saber mais sobre como sua empresa pode se
          envolver e fazer a diferença!
        </p>
      </section>

      <section className="p-6 lg:px-0 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto">
        <h3 className="font-bold text-xl mb-4 lg:text-3xl lg:mb-8">
          Prestação de Contas
        </h3>
        <div className=" flex flex-col gap-6 md:w-1/2">
          <p>em breve...</p>
          {/* <div className="bg-neutral-100 p-4">
            <a href="#" className="underline  flex gap-2 items-center">
              <FiDownload />
              <span>termo de doação pessoa fisica</span>
            </a>
            <span className="italic">10/10/2022</span>
          </div>
           */}
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
              className="w-[200px]"
            />
          </a>
          <a href="#">
            <img
              src="/saranossaterra.webp"
              alt="Sara Nossa Terra"
              className="w-[200px]"
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
