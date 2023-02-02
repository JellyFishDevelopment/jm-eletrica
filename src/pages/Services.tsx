import { Barricade, Lightning, ShieldCheckered } from 'phosphor-react'
import ServiceCard from '../components/ServiceCard'
import laudoUm from '../assets/laudo-1.png'
import laudoDois from '../assets/laudo-2.png'
import laudoTres from '../assets/laudo-3.png'
import CartaoServico from '../components/CartaoServico'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logoImage from './../assets/logo-jm.png'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function Services() {
  const carousel = useRef()
  const [width, setWidth] = useState(0)
  const slides = [laudoUm, laudoDois, laudoTres]

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

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
      <div className="pt-16 h-96 text-white bg-[#818181]">
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
            title="Consultoria"
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
            title="Projetos Elétricos"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </div>
        <div className="flex justify-evenly my-16">
          <CartaoServico
            image={<ShieldCheckered size={80} color="#FFF" />}
            title="Laudos Técnicos"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
          <img
            src={laudoTres}
            className="rounded-full w-96 h-96"
            alt="Imagem de laudo e instalações elétricas"
          />
        </div>

        {/* Carousel */}
        <div className="bg-[#969696] p-8">
          <h2 className="text-white text-center font-bold text-7xl">
            Saiba mais sobre nossos serviços
          </h2>
          <motion.div
            ref={carousel}
            className="cursor-grab overflow-hidden w-3/4 mx-auto"
            whileTap={{ cursor: 'grabbing' }}
          >
            <motion.div
              className="flex justify-center"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              {slides.map(image => (
                <motion.div
                  className="min-h-[532px] min-w-[492px] p-12"
                  key={image}
                >
                  <img
                    className="w-full h-[400px] rounded-2xl pointer-events-none"
                    src={image}
                    alt="Imagem Carousel"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  )
}
