import React, { useState } from 'react'
import logo from '../../images/logo.png'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'gatsby'

const NavLink = ({
  url,
  label,
  onClick,
}: {
  url: string
  label: string
  onClick?: () => void
}) => (
  <li>
    <Link
      to={url}
      className="text-red-700 font-bold hover:text-red-800 hover:underline text-2xl md:text-base"
      onClick={onClick}
    >
      {label}
    </Link>
  </li>
)

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <header className="bg-white p-4 flex justify-between items-center relative z-20">
      <Link to="/">
        <img src={logo} alt="associacao sarando carapicuiba" />
      </Link>
      <nav>
        <button onClick={() => setOpenMenu(true)} className="md:hidden">
          <FiMenu size="24px" className="text-red-700" />
        </button>
        <div
          className={`fixed right-0 top-0 overflow-hidden h-full bg-white ${
            openMenu ? 'w-full' : 'w-0'
          } md:relative md:w-auto transition-all`}
        >
          <div className="p-4 flex justify-end md:hidden">
            <button onClick={() => setOpenMenu(false)}>
              <FiX size="24px" className="text-red-700" />
            </button>
          </div>
          <ul className="p-6 md:p-4 box-border flex flex-col gap-4 md:flex-row md:gap-6">
            <NavLink url="/quem-somos" label="Quem somos" />
            <NavLink url="/doacoes" label="Doações" />
            <NavLink url="/voluntario" label="Seja um voluntário" />
            <NavLink
              url="#contato"
              label="Contato"
              onClick={() => setOpenMenu(false)}
            />
          </ul>
        </div>
      </nav>
    </header>
  )
}
