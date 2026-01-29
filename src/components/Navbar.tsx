import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImg from '/eisen_preto.png'
import Dropdown from './Dropdown'
import { WhatsappLogo } from 'phosphor-react'

export default function Navbar() {
  const [open, setOpen] = useState(true)

  const options = [
    { label: 'Projetos Elétricos', link: '/projetos' },
    // { label: 'Execução', link: '/execucao' },
    { label: 'Laudos Técnicos', link: '/laudos' }
    // { label: 'Consultoria de Serviço', link: '/consultoria' }
  ]

  let activeStyle = {
    textDecoration: 'underline',
    textDecorationColor: '#1e55f4'
  }

  return (
    <nav className="p-2 2xl:p-4 font-light text-md w-full bg-white z-10">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/">
          <img src={logoImg} className="h-12 2xl:w-50 " alt="Logo EISEN" />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:hover:bg-[#E6E6E6]"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={`${open ? 'block' : 'hidden'} w-full md:w-auto`}>
          <div className="flex items-center flex-col md:flex-row md:space-x-16 md:mt-0 md:text-md 3md:text-2xl  md:border-0 md:bg-white  ">
            <NavLink
              to="/"
              className="my-2 text-center"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              INÍCIO
            </NavLink>
            <NavLink
              className="my-2 text-center"
              to="/servicos"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <Dropdown options={options} />
            </NavLink>

            <NavLink
              className="my-2 text-center"
              to="/sobre"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              SOBRE NÓS
            </NavLink>
            <NavLink
              className="my-2 text-center"
              to="/contato"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              CONTATO
            </NavLink>
          </div>
        </div>
        <div className="flex items-center m-auto sm:m-0">
          <WhatsappLogo color="#1e55f4" size={32} />
          <p
            className={`text-center w-full md:w-auto lg:text-xl 2xl:text-1xl font-bold text-[#1e55f4] p-4 2xl:px-8 2xl:py-4`}
          >
            (13) 99646-2507
          </p>
        </div>
      </div>
    </nav>
  )
}
