import { Link } from 'gatsby'
import React from 'react'
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiInstagram,
  FiLinkedin,
  FiFacebook,
} from 'react-icons/fi'

const NavLink = ({ url, label }: { url: string; label: string }) => (
  <li>
    <Link
      to={url}
      className="text-amber-100 hover:text-amber-200 hover:underline "
    >
      {label}
    </Link>
  </li>
)

export const Footer = () => (
  <footer>
    <section className="p-6 py-10 md:py-20 bg-red-800">
      <div className="lg:w-[1024px] xl:w-[1280px] m-auto">
        <h3
          id="contato"
          className="font-bebas text-4xl lg:text-6xl mb-6 md:mb-10 text-amber-100"
        >
          Contato
        </h3>
        <div className=" md:justify-between flex flex-col lg:flex-row gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <FiPhone size="24px" className="text-amber-100" />
              <span className="text-amber-100">11 97362 8392</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <FiMail size="24px" className="text-amber-100" />
              <a
                href="mailto:contato@sarandocarapicuiba.org"
                className="text-amber-100"
              >
                contato@sarandocarapicuiba.org
              </a>
            </div>
            <address className="flex items-center gap-4 not-italic mb-6">
              <FiMapPin size="24px" className="text-amber-100" />
              <span className="text-amber-100">
                Av. Celeste, 94 - Centro, <br />
                Carapicuíba - SP, 06320-030
              </span>
            </address>
          </div>
          <a
            href="https://goo.gl/maps/EdcfyFiojaphtFEf6"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://siteong.s3.sa-east-1.amazonaws.com/map.png " />
          </a>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-amber-100">
              Siganos nas redes sociais
            </h3>
            <div className="flex gap-4">
              <a href="#">
                <FiInstagram size="24px" className="text-amber-100" />
              </a>
              <a href="#">
                <FiLinkedin size="24px" className="text-amber-100" />
              </a>
              <a href="#">
                <FiFacebook size="24px" className="text-amber-100" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="p-6 py-10 md:py-20 bg-red-900">
      <div className="lg:w-[1024px] xl:w-[1280px] m-auto">
        <div className="flex flex-col gap-8 lg:gap-24 md:justify-between md:flex-row mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-amber-100">Links</h3>
            <ul className="flex flex-col gap-2">
              <NavLink url="quem-somos" label="Quem somos" />
              <NavLink url="doacoes" label="Doações" />
              <NavLink url="voluntario" label="Seja um voluntário" />
              <NavLink url="projetos" label="Projetos" />
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-amber-100">
              Informacoes
            </h3>
            <ul className="flex flex-col gap-2">
              <NavLink
                url="politica-de-privacidade"
                label="Politica de privacidade"
              />
              <NavLink url="termo-e-condicoes" label="Termo e condicoes" />
            </ul>
          </div>
          <div>
            <p className="text-amber-100 text-sm">
              © Associação Sarando Carapicuíba 2022 - Todos os direitos
              reservados. CNPJ: 05.392.117/0001-81.
            </p>
          </div>
        </div>
      </div>
    </section>
  </footer>
)
