import {
  CaretDown,
  ClipboardText,
  Lightning,
  NotePencil,
  CheckCircle
} from 'phosphor-react'

import logoImage from '/logo-jm.png'
import logoImageFundo from '/logo-jm-fundo.png'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
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
      <div className="bg-eighth-banner sm:h-[689px] px-8 pb-8 pt-16 w-full flex flex-col justify-between item-center bg-cover bg-no-repeat  text-white">
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
      </div>

      {/* Principais serviços */}
      <div id="#servicos" className="bg-white p-12 sm:p-16">
        <h2 className="text-black text-center font-bold text-4xl sm:text-5xl">
          Nossas especialidades
        </h2>
        <p className="text-black text-center font-normal text-2xl">
          Saiba mais sobre os principais serviços que oferecemos!
        </p>
        <div className="flex flex-col justify-center sm:flex-row sm:justify-evenly mt-16">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <button onClick={handleOpenModal1}>
              <ServiceCard
                image={<NotePencil size={80} color="#FAD40F" />}
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

          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <button onClick={handleOpenModal2}>
              <ServiceCard
                image={<CheckCircle size={80} color="#FAD40F" />}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <button onClick={handleOpenModal3}>
              <ServiceCard
                image={<Lightning size={80} color="#FAD40F" />}
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

          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <button onClick={handleOpenModal4}>
              <ServiceCard
                image={<ClipboardText size={80} color="#FAD40F" />}
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
          </motion.div>
        </div>
      </div>
      {/* Quem somos - página inicial */}
      <div className=" p-16 w-full bg-no-repeat bg-cover">
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="flex flex-col sm:flex-row justify-between"
        >
          <img
            src={logoImageFundo}
            className="w-40 h-40 sm:w-80 sm:h-80 mx-auto rounded-full"
            alt="Logo"
          />
          <div className="text-center sm:w-1/2 sm:text-left mx-auto text-black">
            <h3 className="font-bold text-4xl sm:text-4xl">
              Quem somos
            </h3>
            <p className="my-8 font-normal text-1xl">
              Há 12 anos trabalhando com engenharia elétrica, buscamos ser
              referência quando o assunto é qualidade e eficiência. Estamos
              aptos para entregar aquilo que o cliente merece.
            </p>
            <button className=" mx-auto text-center bg-[#FAD40F] text-white p-6  rounded-full font-bold text-x">
              <LinkNav to="/contact">
                <p>Faça seu orçamento agora!</p>
              </LinkNav>
            </button>
          </div>
        </motion.div>
      </div>
      {/* Cases de sucesso
      <div>
        <div className="bg-white p-16">
          <h2 className="text-black text-center font-bold text-4xl sm:text-6xl">
            Cases de sucesso
          </h2>

          <motion.div
            initial={{ opacity: 0, y: -90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
            className="flex flex-col sm:flex-row justify-evenly my-16"
          >
            <SuccessCase CompanyText="Empresa" />
            <SuccessCase CompanyText="Empresa" />
            <SuccessCase CompanyText="Empresa" />
          </motion.div>
        </div>
      </div> */}
      {/* Banner fale conosco */}
      <BannerContato />
      {/* Footer */}
      <Footer />
    </div>
  )
}
