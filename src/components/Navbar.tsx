import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo-jm.png'

export default function Navbar() {
  const [open, setOpen] = useState(true)
  return (
    <nav className="p-2 2xl:p-4 font-light text-xl  w-full bg-white z-10">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <img
          src={logoImg}
          className="w-16 h-16 2xl:w-24 2xl:h-24"
          alt="Logo JM"
        />
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none    dark:hover:bg-[#E6E6E6]"
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
          <div className="flex flex-col md:flex-row md:space-x-16 md:mt-0 lg:text-xl 2xl:text-2xl  md:border-0 md:bg-white  ">
            <Link className="my-2 text-center" to="/">
              Início
            </Link>
            <Link className="my-2 text-center" to="/services">
              Serviços
            </Link>
            <Link className="my-2 text-center" to="/about">
              Sobre nós
            </Link>
            <Link className="my-2 text-center" to="/contact">
              Contato
            </Link>
          </div>
        </div>
        <p
          className={`${
            open ? 'block' : 'hidden'
          } text-center w-full md:w-auto lg:text-xl 2xl:text-2xl font-bold text-white p-4 2xl:px-8 2xl:py-4 rounded-xl bg-[#969696]`}
        >
          (13) 99646-2507
        </p>
      </div>
    </nav>
  )
}
