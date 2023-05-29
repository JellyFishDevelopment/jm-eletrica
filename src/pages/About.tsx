import eletricaUm from '/eletrica-1.png'
import eletricaDois from '/eletrica-2.png'
import trabalhoUm from '/trabalho-1.png'
import trabalhoDois from '/trabalho-2.png'
import trabalhoTres from '/trabalho-3.png'
import BannerContato from '../components/BannerContato'
import Footer from '../components/Footer'
import TrabalhoCard from '../components/TrabalhoCard'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import logoImage from '/logo-jm.png'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Link as LinkNav } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function About() {
  const carousel = useRef<any>(null)
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
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="font-bold text-6xl sm:text-6xl text-white text-center">
            Sobre nós
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.1 }}
          className="text-white p-8 sm:p-16 bg-[#B6B5B0] rounded-xl sm:w-3/4 mx-auto my-16"
        >
          <h3 className="font-normal text-5xl">JM Elétrica</h3>
          <p className="font-bold text-2xl">Engenharia elétrica de qualidade</p>
          <p className="font-light text-1xl my-16">
          A JM Soluções em Energia, é uma empresa de engenharia elétrica fundada em 2021 na cidade de São Vicente – SP.
          Oferecemos serviços como: projetos elétricos, laudos, acompanhamento de obras, consultorias e manutenção residencial, predial e industrial. 
          Visando sempre segurança, qualidade e satisfação, atendendo da melhor forma a necessidade de cada cliente.
          </p>
          <div className="text-center">
            <button
              type="button"
              className=" px-4 py-6 mt-4 font-bold text-1xl bg-[#FAD40F] text-white rounded-full"
            >
              <LinkNav to="/services">
                {' '}
                <p>Saiba mais sobre os nossos serviços</p>
              </LinkNav>
            </button>
          </div>
        </motion.div>
      </div>
      {/* Imagens elétrica
      <div className="p-8 bg-white flex flex-col sm:flex-row justify-evenly">
        <motion.div
          initial={{ opacity: 0, y: -90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
          <img
            className="rounded-[50px] my-2"
            src={eletricaUm}
            alt="Homem operando o notebook"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
          <img
            className="rounded-[50px] my-2"
            src={eletricaDois}
            alt="Homem operando cabos"
          />
        </motion.div>
      </div> */}
      {/* Experiência e agilidade
      <div className="p-8 sm:p-16 bg-[#969696]">
        <motion.div
          initial={{ opacity: 0, y: -90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="font-bold text-5xl sm:text-8xl text-white text-center">
            Experiência e agilidade
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between text-white my-8"
        >
          <p className="sm:w-[750px] text-center font-light text-2xl sm:text-4xl mx-2">
            Me chamo Jair Melo e sou especialista em manutenção. Com 12 anos de
            experiência na área de manutenção industrial, atuo com projetos de
            melhoria industrial, comercial e laudos técnicos. Graduado em
            Engenharia Elétrica com ênfase em Eletrotécnica. Finalizando sua Pós
            Graduação em Gerenciamento de Projetos e Engenharia de
            Confiabilidade.
          </p>
          <p className="sm:w-[750px] text-center font-light text-2xl sm:text-4xl mx-2">
          A JM Soluções em Energia, é uma empresa de engenharia elétrica fundada em 2021 na cidade de São Vicente – SP.
          Oferecemos serviços como: projetos elétricos, laudos, acompanhamento de obras, consultorias e manutenção residencial, predial e industrial. Visando sempre segurança, qualidade e satisfação, atendendo da melhor forma a necessidade de cada cliente.

          </p>
        </motion.div>
      </div> */}
      {/* Trabalhos recentes
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
        <button className="bg-[#FAD40F] w-1/2  text-white font-medium rounded-xl p-4 my-4">
          <LinkNav to="/trabalhos">Ver mais trabalhos</LinkNav>
        </button>
      </div> */}
      <BannerContato />
      <Footer />
    </div>
  )
}
