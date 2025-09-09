import {
  CaretDown,
  ClipboardText,
  Lightning,
  NotePencil,
  CheckCircle
} from 'phosphor-react'

import logoImage from '/logo-jm.png'
import logoImageFundo from '/eisen_preto.png'
import { Carousel, CarouselStylesType } from '@material-tailwind/react'
import ServiceCard from '../components/ServiceCard'
import SuccessCase from '../components/SuccessCase'
import BannerContato from '../components/BannerContato'
import Footer from '../components/Footer'
import { Link as LinkNav } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'
import { motion } from 'framer-motion'
import Modal from '../components/Modal'
import { useState } from 'react'

export default function Home() {
  const [currentState, setCurrentState] = useState(0)
  const [isOpenModal1, setIsOpenModal1] = useState(false)
  const [isOpenModal2, setIsOpenModal2] = useState(false)
  const [isOpenModal3, setIsOpenModal3] = useState(false)
  const [isOpenModal4, setIsOpenModal4] = useState(false)

  const handleOpenModal1 = () => {
    setIsOpenModal1(true)
  }

  const handleCloseModal1 = () => {
    setIsOpenModal1(false)
  }

  const handleOpenModal2 = () => {
    setIsOpenModal2(true)
  }

  const handleCloseModal2 = () => {
    setIsOpenModal2(false)
  }

  const handleOpenModal3 = () => {
    setIsOpenModal3(true)
  }

  const handleCloseModal3 = () => {
    setIsOpenModal3(false)
  }

  const handleOpenModal4 = () => {
    setIsOpenModal4(true)
  }

  const handleCloseModal4 = () => {
    setIsOpenModal4(false)
  }

  const items1 = [
    'Projetos Residenciais, Comerciais e Industriais',
    'Projetos de Medição Agrupada (PMUC)',
    'Projetos de Subestação BT/MT',
    'Projetos de Geração Fotovoltaico'
  ]
  const items2 = [
    'Instalações Elétricas Residenciais e Comerciais',
    'Automação Residencial e Comercial',
    'Acompanhamento de Obras'
  ]
  const items3 = ['SPDA', 'NR10', 'Termografia', 'Qualidade de energia']
  const items4 = [
    'Consultor em análise de qualidade de energia',
    'Consultor de PIE',
    'Consultor para Credito de ICMS'
  ]

  return (
    <div>
      {/* Banner principal */}
      <div className="w-full flex flex-col justify-between item-center  text-white">
        <Carousel
          autoplay={true}
          loop={true}
          className="relative"
          transition={{ duration: 2 }}
          prevArrow={({ handlePrev }) => { }}
          nextArrow={({ handleNext }) => { }}
          navigation={({ setActiveIndex, activeIndex, length }) => { }}
        >
          <img
            src="carrousel-1.png"
            alt="image 1"
            className="sm:h-[689px] w-full object-cover"
          />
          <img
            src="carrousel-2.png"
            alt="image 1"
            className="sm:h-[689px] w-full object-cover"
          />
          <img
            src="carrousel-3.png"
            alt="image 1"
            className="sm:h-[689px] w-full object-cover"
          />
          <img
            src="carrousel-4.png"
            alt="image 1"
            className="sm:h-[689px] w-full object-cover"
          />
        </Carousel>
        <div className="absolute w-full px-8 md:pb-8 md:pt-16 pt-10">
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="md:mt-16 font-bold text-2xl md:text-4xl sm:text-3xl text-white">
              Conheça o nosso portifólio.
            </h2>
            <h2 className="font-bold text-2xl sm:text-5xl md:text-5xl text-white">
              Laudos e Projetos Elétricos.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex flex-col sm:flex-row md:mt-20">
              <button className="self-start mx-4 hidden sm:block bg-[#1e55f4] hover:bg-blue-800 text-white p-4 2xl:p-6  rounded-full font-bold text-base  2xl:text-xl">
                <LinkNav to="/contact">
                  {' '}
                  <p>Faça seu orçamento agora</p>
                </LinkNav>
              </button>

              <button className="self-start mx-4 hidden sm:block bg-blue-700 hover:bg-blue-800 text-white p-4 2xl:p-6  rounded-full font-bold text-base  2xl:text-xl">
                <LinkNav to="/services">
                  {' '}
                  <p>Conheça nossos serviços</p>
                </LinkNav>
              </button>
            </div>
          </motion.div>

          <Link
            to="#servicos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex justify-center cursor-pointer self-center text-center mt-16"
          >
            <CaretDown className="hidden lg:block " size={64} color="#fff" />
          </Link>
        </div>
      </div>

      {/* <div className="bg-eighth-banner sm:h-[689px] px-8 pb-8 pt-16 w-full flex flex-col justify-between item-center bg-cover bg-no-repeat  text-white">
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="mt-16 font-bold text-4xl sm:text-3xl text-white">
            Conheça o nosso portifólio.
          </h2>
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl text-white">
            Laudos e Projetos Elétricos.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex flex-col sm:flex-row mt-16">
            <button className="self-start mx-4 hidden sm:block bg-[#FAD40F] text-white p-4 2xl:p-6  rounded-full font-bold text-base  2xl:text-x">
              <LinkNav to="/contact">
                {' '}
                <p>Faça seu orçamento agora</p>
              </LinkNav>
            </button>

            <button className="self-start mx-4 hidden sm:block bg-[#FFA228] text-white p-4 2xl:p-6  rounded-full font-bold text-base  2xl:text-x">
              <LinkNav to="/services">
                {' '}
                <p>Conheça nossos serviços</p>
              </LinkNav>
            </button>
          </div>
        </motion.div>

        <Link
          to="#servicos"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer self-center"
        >
          <CaretDown className="hidden lg:block " size={64} color="#fff" />
        </Link>
      </div> */}

      {/* Principais serviços */}
      <div id="#servicos" className="bg-white p-12 sm:p-16">
        <h2
          className="text-black text-center underline font-bold text-4xl sm:text-5xl"
          style={{
            textDecorationLine: 'underline',
            textDecorationColor: '#1e55f4'
          }}
        >
          Nossos serviços
        </h2>
        {/* <p className="text-black text-center font-normal text-2xl">
          Saiba mais sobre os principais serviços que oferecemos!
        </p> */}
        <div className="flex flex-col justify-center sm:flex-row sm:justify-evenly mt-16">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <button className="w-full" onClick={handleOpenModal1}>
              <ServiceCard
                image={<NotePencil size={80} color="#1e55f4" />}
                text="Projetos"
              />
            </button>
            <div>
              <Modal
                isOpen={isOpenModal1}
                onClose={handleCloseModal1}
                title="Projetos Elétricos"
                list={items1}
              ></Modal>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <button onClick={handleOpenModal2}>
              <ServiceCard
                image={<CheckCircle size={80} color="#1e55f4" />}
                text="Execução"
              />
            </button>
            <div>
              <Modal
                isOpen={isOpenModal2}
                onClose={handleCloseModal2}
                title="Execução"
                list={items2}
              ></Modal>
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <button className="w-full" onClick={handleOpenModal3}>
              <ServiceCard
                image={<Lightning size={80} color="#1e55f4" />}
                text="Laudos Técnicos"
              />
            </button>
            <div>
              <Modal
                isOpen={isOpenModal3}
                onClose={handleCloseModal3}
                title="Laudos Técnicos"
                list={items3}
              ></Modal>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <button onClick={handleOpenModal4}>
              <ServiceCard
                image={<ClipboardText size={80} color="#1e55f4" />}
                text="Consultoria de Serviço"
              />
            </button>
            <div>
              <Modal
                isOpen={isOpenModal4}
                onClose={handleCloseModal4}
                title="Consultoria de Serviços"
                list={items4}
              ></Modal>
            </div>
          </motion.div> */}
        </div>
      </div>
      {/* Quem somos - página inicial */}
      <div className="p-16 w-full bg-no-repeat bg-cover flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="flex flex-col sm:flex-row justify-between w-full"
        >
          <div className="flex flex-col items-center justify-center w-full sm:w-1/2">
            <img
              src={logoImageFundo}
              className="w-40 h-24 sm:w-80 sm:h-24 rounded-half mb-6"
              alt="Logo"
            />
          </div>
          <div className="text-center sm:w-1/2 sm:text-left mx-auto text-black flex flex-col justify-center">
            <h3 className="font-bold underline my-5 text-3xl text-[#1e55f4]">
              Quem somos
            </h3>
            <p className="font-bold text-2xl">EINSEN SOLUTIONS</p>
            <p className="font-light text-1xl my-5">
              A EINSEN Solutions, é uma empresa de engenharia elétrica
              fundada em 2021 na cidade de São Vicente – SP. Oferecemos serviços
              como: projetos elétricos, laudos, acompanhamento de obras,
              consultorias e manutenção residencial, predial e industrial.
              Visando sempre segurança, qualidade e satisfação, atendendo da
              melhor forma a necessidade de cada cliente.
            </p>
            <button
              className="mx-auto text-center bg-[#1e55f4] text-white p-6 rounded-full font-bold text-x"
            >
              <LinkNav to="/contact">
                <p>Faça seu orçamento agora!</p>
              </LinkNav>
            </button>
          </div>
        </motion.div>
      </div>
      <div>
        <div className="bg-white p-16">
          <h2 className="text-black text-center font-bold text-4xl sm:text-6xl">
            Clientes e Parceiros
          </h2>

          <motion.div
            initial={{ opacity: 0, y: -90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
            className="flex flex-col sm:flex-row justify-evenly my-16"
          >
            <SuccessCase CompanyImage="/melq_saude.jpg" />
            <SuccessCase CompanyImage="/fastprev.png" />
            <SuccessCase CompanyImage="/spandex.png" />
            <SuccessCase CompanyImage="/ecophon.svg" />
          </motion.div>
        </div>
      </div>
      {/* Banner fale conosco */}
      <BannerContato />
      {/* Footer */}
      <Footer />
    </div>
  )
}
