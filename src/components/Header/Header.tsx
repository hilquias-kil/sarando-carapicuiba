import React, { useState } from "react";
import logo from "../../images/logo.png"
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from "gatsby"

const NavLink = ({ url, label }: { url: string, label: string }) => (
  <li><Link to={url} className="text-red-700 hover:text-red-800 hover:underline">{label}</Link></li>
)

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <header className="bg-white p-4 flex items-start justify-between items-center">
      <img src={logo} />
      <nav>
        <button onClick={() => setOpenMenu(true)} className="md:hidden">
          <FiMenu size="24px" className="text-red-700" />
        </button>
        <div className={`fixed right-0 top-0 overflow-hidden h-full bg-white ${openMenu ? 'w-full' : 'w-0'} md:relative md:w-auto`}>
          <div className="p-4 flex justify-end md:hidden">
            <button onClick={() => setOpenMenu(false)}>
              <FiX size="24px" className="text-red-700" />
            </button>
          </div>
          <ul className="p-4 box-border flex flex-col gap-4 md:flex-row md:gap-6">
            <NavLink url="quem-somos" label="Quem somos" />
            <NavLink url="doacoes" label="Doações" />
            <NavLink url="voluntario" label="Seja um voluntario" />
            <NavLink url="projetos" label="Projetos" />
            <NavLink url="contato" label="Contato" />
          </ul>
        </div>
      </nav>
    </header>
  )
}