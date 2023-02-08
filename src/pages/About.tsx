import eletricaUm from '../assets/eletrica-1.png'
import eletricaDois from '../assets/eletrica-2.png'
import trabalhoUm from '../assets/trabalho-1.png'
import trabalhoDois from '../assets/trabalho-2.png'
import trabalhoTres from '../assets/trabalho-3.png'
import BannerContato from '../components/BannerContato'
import Footer from '../components/Footer'
import TrabalhoCard from '../components/TrabalhoCard'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import logoImage from './../assets/logo-jm.png'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Link } from 'react-router-dom'

export default function About() {
  const carousel = useRef()
  const [width, setWidth] = useState(0)
  const slides = [
    {
      id: 1,
      image: trabalhoUm,
      title: 'San Diego Pizzas',
      description: 'A Melhor Pizza De San Diego Apparel America',
      serviceType: 'Manutenção e troca de fiação'
    },
    {
      id: 2,
      image: trabalhoDois,
      title: 'Empório Rodrigues',
      description: 'A melhor padaria da cidade naútica',
      serviceType: 'Adequação ao sistema externo de iluminação'
    },
    {
      id: 3,
      image: trabalhoTres,
      title: 'Condomínio Caminho do Sol',
      description: '',
      serviceType: 'Análise termográfia das temperaturas do ambiente'
    }
  ]

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
        placeholder="Mensagem:"
      />
      {/* Sobre nós */}
      <div className="bg-[#969696] p-8 ">
        <h2 className="font-bold text-6xl sm:text-8xl text-white text-center">
          Sobre nós
        </h2>
        <div className="text-white p-8 sm:p-16 bg-[#B6B5B0] rounded-xl sm:w-3/4 mx-auto my-16">
          <h3 className="font-normal text-7xl">JM Elétrica</h3>
          <p className="font-bold text-4xl">Engenharia elétrica de qualidade</p>
          <p className="font-light text-3xl my-16">
            Aenean fermentum eget dolor sit amet sagittis. Aenean ex diam,
            ornare in leo elementum, aliquet vehicula tortor. Ut vehicula arcu
            quis tellus commodo, luctus varius lacus laoreet. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Suspendisse sed odio laoreet, porta neque ac, eleifend
            nisi. Aenean finibus eu libero quis vehicula. Donec laoreet elit in
            maximus.
          </p>
          <div className="text-center">
            <button
              type="button"
              className=" px-4 py-6 mt-4 font-bold text-2xl bg-[#818181] text-white rounded-full"
            >
              Saiba mais sobre os nossos serviços
            </button>
          </div>
        </div>
      </div>
      {/* Imagens elétrica */}
      <div className="p-8 bg-white flex flex-col sm:flex-row justify-evenly">
        <img
          className="rounded-[50px] my-2"
          src={eletricaUm}
          alt="Homem operando o notebook"
        />
        <img
          className="rounded-[50px] my-2"
          src={eletricaDois}
          alt="Homem operando cabos"
        />
      </div>
      {/* Experiência e agilidade */}
      <div className="p-8 sm:p-16 bg-[#969696]">
        <h2 className="font-bold text-5xl sm:text-8xl text-white text-center">
          Experiência e agilidade
        </h2>
        <div className="flex flex-col sm:flex-row justify-between text-white my-8">
          <p className="sm:w-[750px] text-center font-light text-2xl sm:text-4xl mx-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            aliquam pellentesque nunc vel molestie. Proin eleifend consectetur
            mauris semper volutpat. Cras eu feugiat leo, ac laoreet odio. Duis
            interdum semper nisi in faucibus. Sed non ligula leo. Donec interdum
            urna enim, nec rutrum lorem eleifend nec. Vestibulum porta varius
            sem tristique luctus. Quisque mattis facilisis mollis. Curabitur et
            egestas eros. Proin hendrerit imperdiet vulputate.
          </p>
          <p className="sm:w-[750px] text-center font-light text-2xl sm:text-4xl mx-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            aliquam pellentesque nunc vel molestie. Proin eleifend consectetur
            mauris semper volutpat. Cras eu feugiat leo, ac laoreet odio. Duis
            interdum semper nisi in faucibus. Sed non ligula leo. Donec interdum
            urna enim, nec rutrum lorem eleifend nec. Vestibulum porta varius
            sem tristique luctus. Quisque mattis facilisis mollis. Curabitur et
            egestas eros. Proin hendrerit imperdiet vulputate.
          </p>
        </div>
      </div>
      {/* Trabalhos recentes */}
      <div className="text-center">
        <motion.div
          ref={carousel}
          className="cursor-grab overflow-hidden w-3/4 mx-auto"
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {slides.map(props => (
              <motion.div className="p-6" key={props.id}>
                <TrabalhoCard
                  image={props.image}
                  title={props.title}
                  description={props.description}
                  serviceType={props.serviceType}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <button className="bg-[#5C5C5C] w-1/2  text-white font-medium rounded-xl p-4 my-4">
          <Link to="/trabalhos">Ver mais trabalhos</Link>
        </button>
      </div>
      <BannerContato />
      <Footer />
    </div>
  )
}
