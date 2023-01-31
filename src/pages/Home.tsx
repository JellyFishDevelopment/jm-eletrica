import Navbar from '../components/Navbar'
import { CaretDown, Lightning } from 'phosphor-react'

import bannerOne from './../assets/banner-1.png'
import logoImage from './../assets/logo-jm.png'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import ServiceCard from '../components/ServiceCard'
import SuccessCase from '../components/SuccessCase'

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
          <p>Faça seu orçamento agora!</p>
        </button>
        <CaretDown
          className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2"
          size={64}
          color="#fff"
        />
      </div>
      {/* Principais serviços */}
      <div className="bg-white p-16">
        <h2 className="text-black text-center font-bold text-6xl">
          Principais serviços
        </h2>
        <p className="text-black text-center font-normal text-3xl">
          Saiba mais sobre os principais serviços que oferecemos!
        </p>
        <div className="flex justify-between">
          <ServiceCard
            image={<Lightning size={80} color="#FFF" />}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
          <ServiceCard
            image={<Lightning size={80} color="#FFF" />}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.."
          />
          <ServiceCard
            image={<Lightning size={80} color="#FFF" />}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </div>
      </div>
      {/* Atuação no mercado */}
      <div className="flex justify-start p-16 bg-second-banner w-full bg-no-repeat bg-cover">
        <img src={logoImage} className="w-80 h-80 mx-auto" alt="Logo" />
        <div className="w-1/2 mx-auto text-white">
          <h3 className="font-bold text-6xl">Atuação no mercado</h3>
          <p className="my-8 font-normal text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
          <button className="mx-auto text-center bg-[#969696] text-white p-6  rounded-full font-bold text-xl">
            <p>Faça seu orçamento agora!</p>
          </button>
        </div>
      </div>
      {/* Cases de sucesso */}
      <div>
        <div className="bg-white p-16">
          <h2 className="text-black text-center font-bold text-6xl">
            Cases de sucesso
          </h2>

          <div className="flex justify-between my-16">
            <SuccessCase CompanyText="Empresa" />
            <SuccessCase CompanyText="Empresa" />
            <SuccessCase CompanyText="Empresa" />
          </div>
        </div>
      </div>
    </div>
  )
}
