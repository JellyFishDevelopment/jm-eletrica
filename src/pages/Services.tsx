import { Barricade, Lightning, ShieldCheckered } from 'phosphor-react'
import ServiceCard from '../components/ServiceCard'
import laudoUm from '../assets/laudo-1.png'
import laudoDois from '../assets/laudo-2.png'
import laudoTres from '../assets/laudo-3.png'
import CartaoServico from '../components/CartaoServico'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logoImage from './../assets/logo-jm.png'
import Footer from '../components/Footer'

export default function Services() {
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
      <div className="p-16 h-96 text-white bg-[#818181]">
        {/* Título */}
        <h1 className="text-center font-bold text-8xl">Serviços</h1>
        {/* Serviços */}
        <div className="flex justify-evenly mt-32">
          <ServiceCard
            image={<Lightning size={80} color="#FFF" />}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
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
        {/* Serviços + Imagens */}

        <div className="flex justify-evenly my-16">
          <CartaoServico
            image={<Lightning size={80} color="#FFF" />}
            title="Laudos"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
          <img
            src={laudoUm}
            className="rounded-full w-96 h-96"
            alt="Imagem de laudo e instalações elétricas"
          />
        </div>
        <div className="flex justify-evenly my-24">
          <img
            src={laudoDois}
            className="rounded-full w-96 h-96"
            alt="Imagem de laudo e instalações elétricas"
          />
          <CartaoServico
            image={<Barricade size={80} color="#FFF" />}
            title="Manutenção"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </div>
        <div className="flex justify-evenly my-16">
          <CartaoServico
            image={<ShieldCheckered size={80} color="#FFF" />}
            title="Segurança"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
          <img
            src={laudoTres}
            className="rounded-full w-96 h-96"
            alt="Imagem de laudo e instalações elétricas"
          />
        </div>

        <hr />
        <Footer />
      </div>
    </div>
  )
}
