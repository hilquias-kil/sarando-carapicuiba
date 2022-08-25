import React from "react";
import logo from "../../images/logo.png"
import { FiMenu } from 'react-icons/fi';
import { Link } from "gatsby"

export const Header = () => (
    <header className="outline p-4 flex items-start justify-between items-center">
        <img src={logo} />
        <nav>
            <button>
                <FiMenu />
            </button>
            <ul className="fixed right-0 top-0 w-0 overflow-hidden h-full bg-white p-4 box-border ">
                <li><Link to="quem-somos">Quem somos</Link></li>
                <li><Link to="doacoes">Doações</Link></li>
                <li><Link to="voluntario">Seja um voluntario</Link></li>
                <li><Link to="projetos">Projetos</Link></li>
                <li><Link to="contato">Contato</Link></li>
            </ul>
        </nav>
    </header>
)