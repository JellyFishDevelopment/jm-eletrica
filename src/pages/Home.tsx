import {
  Barricade,
  CaretDown,
  Lightning,
  ShieldCheckered
} from 'phosphor-react'

import bannerOne from './../assets/banner-1.png'
import logoImage from './../assets/logo-jm.png'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import ServiceCard from '../components/ServiceCard'
import SuccessCase from '../components/SuccessCase'
import BannerContato from '../components/BannerContato'
import Footer from '../components/Footer'
import { Link as LinkNav } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Home() {
  return (
    <div>
      <FloatingWhatsApp
        darkMode={true}
        accountName="JM Elétrica"
        phoneNumber="+55 13 99106-3173"
        chatMessage="Olá, como posso te ajudar?"
        statusMessage=""
        avatar={logoImage}
        placeholder="Mensagem:"
      />
      {/* Banner principal */}
      <div className="relative text-center">
        <img
          src={bannerOne}
          className="h-full w-full"
          alt="Imagem elétrica com fios azuis"
        />
        <h2 className="absolute top-1/4 sm:top-1/2 left-1/2 transform -translate-x-1/2 font-bold text-center text-4xl sm:text-5xl md:text-7xl text-white">
          Serviços Elétricos JM
        </h2>
        <button className="absolute hidden sm:block bottom-0 left-1/4 transform -translate-x-full bg-[#969696] text-white p-6 mb-8 rounded-full font-bold sm:text-lg md:text-xl">
          <LinkNav to="/contact">
            {' '}
            <p>Faça seu orçamento agora!</p>
          </LinkNav>
        </button>
        <Link
          to="#servicos"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <CaretDown
            className="hidden lg:block absolute bottom-12 left-1/2 transform -translate-x-1/2"
            size={64}
            color="#fff"
          />
        </Link>
      </div>
      {/* Principais serviços */}
      <div id="#servicos" className="bg-white p-12 sm:p-16">
        <h2 className="text-black text-center font-bold text-4xl sm:text-6xl">
          Principais serviços
        </h2>
        <p className="text-black text-center font-normal text-3xl">
          Saiba mais sobre os principais serviços que oferecemos!
        </p>
        <div className="flex flex-col justify-center sm:flex-row sm:justify-evenly mt-16">
          <ServiceCard
            image={<Lightning size={80} color="#FFF" />}
            text="Consultoria de Serviços"
          />
          <ServiceCard
            image={<Barricade size={80} color="#FFF" />}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.."
          />
          <ServiceCard
            image={<ShieldCheckered size={80} color="#FFF" />}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </div>
      </div>
      {/* Atuação no mercado */}
      <div className="flex flex-col sm:flex-row justify-start p-16 bg-second-banner w-full bg-no-repeat bg-cover">
        <img
          src={logoImage}
          className="w-40 h-40 sm:w-80 sm:h-80 mx-auto"
          alt="Logo"
        />
        <div className="text-center sm:w-1/2 sm:text-left mx-auto text-white">
          <h3 className="font-bold text-4xl sm:text-6xl">Atuação no mercado</h3>
          <p className="my-8 font-normal text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
          <button className=" mx-auto text-center bg-[#969696] text-white p-6  rounded-full font-bold text-xl">
            <LinkNav to="/contact">
              <p>Faça seu orçamento agora!</p>
            </LinkNav>
          </button>
        </div>
      </div>
      {/* Cases de sucesso */}
      <div>
        <div className="bg-white p-16">
          <h2 className="text-black text-center font-bold text-4xl sm:text-6xl">
            Cases de sucesso
          </h2>

          <div className="flex flex-col sm:flex-row justify-evenly my-16">
            <SuccessCase CompanyText="Empresa" />
            <SuccessCase CompanyText="Empresa" />
            <SuccessCase CompanyText="Empresa" />
          </div>
        </div>
      </div>
      {/* Banner fale conosco */}
      <BannerContato />
      {/* Footer */}
      <Footer />
    </div>
  )
}
