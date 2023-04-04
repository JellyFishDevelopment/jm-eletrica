import { CaretDown, ClipboardText, Lightning, NotePencil, CheckCircle } from 'phosphor-react'

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
      <div className="bg-eighth-banner sm:h-[689px] px-8 pb-8 pt-16 w-full flex flex-col justify-between item-center bg-cover bg-no-repeat  text-white">
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="mt-16 font-bold text-4xl sm:text-5xl text-white">
            Conheça o nosso portifólio.
          </h2>
          <h2 className="font-bold text-4xl sm:text-5xl md:text-7xl text-white">
            Laudos e Projetos Elétricos.
          </h2>
        </motion.div>
        <div className="flex flex-col sm:flex-row mt-16">
          <button className="self-start hidden sm:block bg-[#FAD40F] text-white p-4 2xl:p-6  rounded-full font-bold text-base  2xl:text-xl">
            <LinkNav to="/contact">
              {' '}
              <p>Faça seu orçamento agora</p>
            </LinkNav>
          </button>

          <button className="self-start hidden sm:block bg-[#FFA228] text-white p-4 2xl:p-6  rounded-full font-bold text-base  2xl:text-xl">
            <LinkNav to="/services">
              {' '}
              <p>Conheça nossos serviços</p>
            </LinkNav>
          </button>
        </div>
          <Link
            to="#servicos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <CaretDown className="hidden lg:block " size={64} color="#fff" />
          </Link>
      </div>
      {/* Principais serviços */}
      <div id="#servicos" className="bg-white p-12 sm:p-16">
        <h2 className="text-black text-center font-bold text-4xl sm:text-6xl">
          Nossas especialidades
        </h2>
        <p className="text-black text-center font-normal text-3xl">
          Saiba mais sobre os principais serviços que oferecemos!
        </p>
        <div className="flex flex-col justify-center sm:flex-row sm:justify-evenly mt-16">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <ServiceCard
              image={<NotePencil size={80} color="#FAD40F" />}
              text="Projetos"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <ServiceCard
              image={<CheckCircle size={80} color="#FAD40F" />}
              text="Execução"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <ServiceCard
              image={<Lightning size={80} color="#FAD40F" />}
              text="Laudos Técnicos"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
          >
            <ServiceCard
              image={<ClipboardText size={80} color="#FAD40F" />}
              text="Consultoria de Serviço"
            />
          </motion.div>
        </div>
      </div>
      {/* Atuação no mercado */}
      <div className=" p-16 bg-second-banner w-full bg-no-repeat bg-cover">
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
          <div className="text-center sm:w-1/2 sm:text-left mx-auto text-white">
            <h3 className="font-bold text-4xl sm:text-6xl">
              Atuação no mercado
            </h3>
            <p className="my-8 font-normal text-2xl">
              Há 12 anos trabalhando com engenharia elétrica, buscamos ser
              referência quando o assunto é qualidade e eficiência. Estamos
              aptos para entregar aquilo que o cliente merece.
            </p>
            <button className=" mx-auto text-center bg-[#FAD40F] text-white p-6  rounded-full font-bold text-xl">
              <LinkNav to="/contact">
                <p>Faça seu orçamento agora!</p>
              </LinkNav>
            </button>
          </div>
        </motion.div>
      </div>
      {/* Cases de sucesso */}
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
      </div>
      {/* Banner fale conosco */}
      <BannerContato />
      {/* Footer */}
      <Footer />
    </div>
  )
}
