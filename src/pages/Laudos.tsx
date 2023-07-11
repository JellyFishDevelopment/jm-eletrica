import { FloatingWhatsApp } from 'react-floating-whatsapp'
import BannerContato from '../components/BannerContato'
import Footer from '../components/Footer'
import logoImage from '/logo-jm.png'
import { motion } from 'framer-motion'
import { Link as LinkNav } from 'react-router-dom'
import imagemProjeto from '/projetoseletricos.png'
import termo from '/laudo-3.png'
import spda from '/laudo-2.png'

export default function Laudos() {
  return (
    <div>
      {/* Whatsapp */}
      <FloatingWhatsApp
        darkMode={true}
        accountName="JM Elétrica"
        phoneNumber="+55 13 99106-3173"
        chatMessage="Olá, como posso te ajudar?"
        statusMessage=""
        avatar={logoImage}
        placeholder="Mensagem:"
      />
      {/* Cabeçalho */}
      <div className="p-8 sm:p-16 h-96 text-white bg-[#818181]">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-center font-bold text-5xl sm:text-6xl">Laudos</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-light text-center text-xl sm:text-1xl mt-8">
            O laudo elétrico é um relatório que te traz um panorama geral sobre
            a sua instalação elétrica. A partir dele é possível entender as
            necessidades e inconformidades do sistema, te trazendo pontos de
            melhoria e te garantindo maior segurança. Sabemos que a energia
            elétrica é uma capaz de causar danos físicos e materiais.{' '}
          </p>
        </motion.div>
      </div>
      {/* Laudos */}
      <div className="bg-white flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-32 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
            className="flex flex-col-reverse sm:flex-row sm:justify-evenly my-2"
          >
            <img
              src={termo}
              className="mx-auto my-4 sm:m-0 w-150 h-150 sm:w-110 sm:h-110"
              alt="Imagem de laudo e instalações elétricas"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-white w-3/4 sm:w-3/4 rounded-xl"
          >
            <h3 className="font-bold underline my-5 text-3xl text-[#FAD40F]">LAUDO TERMOGRÁFICO</h3>
            <p className="text-black font-light text-xl my-4">
            É uma técnica de inspeção não destrutiva, utilizada para avaliação preventiva de componentes e instalações elétricas. Utilizado para medir a temperatura de determinados pontos através da radiação infravermelha, ou seja, o laudo termográfico detecta e informa as altas temperaturas nos mais variados componentes elétricos e eletrônicos tais como: painéis, transformadores, motores entre outros, e assim evita as panes e princípios de incêndios.
            </p>

            <button className="self-start mx-4 hidden sm:block bg-[#FAD40F] text-white p-4 2xl:p-6  rounded-full font-bold text-base  2xl:text-xl">
                  <LinkNav to="/contact">
                    {' '}
                  <p>Faça seu orçamento agora</p>
              </LinkNav>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="bg-white flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-32 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
            className="flex flex-col-reverse sm:flex-row sm:justify-evenly my-2"
          >
            <img
              src={spda}
              className="mx-auto my-4 sm:m-0 w-150 h-150 sm:w-110 sm:h-110"
              alt="Imagem de laudo e instalações elétricas"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-white w-3/4 sm:w-3/4 rounded-xl"
          >
            <h3 className="font-bold underline my-5 text-3xl text-[#FAD40F]">LAUDOS DE SPDA E MPS</h3>
            <p className="text-black font-light text-xl my-4">
            O laudo do sistema de proteção contra descargas atmosféricas (SPDA) tem por finalidade atestar as condições técnicas do sistema projetado como: malha de aterramento, descidas, captores e etc.
            Como sua função básica é direcionar a descargas atmosféricas para terra de uma forma segura, conseguimos dessa forma minimizar e até eliminar riscos de danos as pessoas, empreendimentos e indústrias.

            </p>

            <button className="self-start mx-4 hidden sm:block bg-[#FAD40F] text-white p-4 2xl:p-6  rounded-full font-bold text-base  2xl:text-xl">
                  <LinkNav to="/contact">
                    {' '}
                  <p>Faça seu orçamento agora</p>
              </LinkNav>
            </button>
          </motion.div>
        </div>
      </div>
      <div className="bg-white flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-32 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
            className="flex flex-col-reverse sm:flex-row sm:justify-evenly my-2"
          >
            <img
              src={termo}
              className="mx-auto my-4 sm:m-0 w-150 h-150 sm:w-110 sm:h-110"
              alt="Imagem de laudo e instalações elétricas"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-white w-3/4 sm:w-3/4 rounded-xl"
          >
            <h3 className="font-bold underline my-5 text-3xl text-[#FAD40F]">LAUDO TERMOGRÁFICO</h3>
            <p className="text-black font-light text-xl my-4">
            É uma técnica de inspeção não destrutiva, utilizada para avaliação preventiva de componentes e instalações elétricas. Utilizado para medir a temperatura de determinados pontos através da radiação infravermelha, ou seja, o laudo termográfico detecta e informa as altas temperaturas nos mais variados componentes elétricos e eletrônicos tais como: painéis, transformadores, motores entre outros, e assim evita as panes e princípios de incêndios.
            </p>

            <button className="self-start mx-4 hidden sm:block bg-[#FAD40F] text-white p-4 2xl:p-6  rounded-full font-bold text-base  2xl:text-xl">
                  <LinkNav to="/contact">
                    {' '}
                  <p>Faça seu orçamento agora</p>
              </LinkNav>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="bg-white flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-32 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
            className="flex flex-col-reverse sm:flex-row sm:justify-evenly my-2"
          >
            <img
              src={termo}
              className="mx-auto my-4 sm:m-0 w-150 h-150 sm:w-110 sm:h-110"
              alt="Imagem de laudo e instalações elétricas"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-white w-3/4 sm:w-3/4 rounded-xl"
          >
            <h3 className="font-bold underline my-5 text-3xl text-[#FAD40F]">LAUDO TERMOGRÁFICO</h3>
            <p className="text-black font-light text-xl my-4">
            É uma técnica de inspeção não destrutiva, utilizada para avaliação preventiva de componentes e instalações elétricas. Utilizado para medir a temperatura de determinados pontos através da radiação infravermelha, ou seja, o laudo termográfico detecta e informa as altas temperaturas nos mais variados componentes elétricos e eletrônicos tais como: painéis, transformadores, motores entre outros, e assim evita as panes e princípios de incêndios.
            </p>

            <button className="self-start mx-4 hidden sm:block bg-[#FAD40F] text-white p-4 2xl:p-6  rounded-full font-bold text-base  2xl:text-xl">
                  <LinkNav to="/contact">
                    {' '}
                  <p>Faça seu orçamento agora</p>
              </LinkNav>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="bg-white flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-32 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
            className="flex flex-col-reverse sm:flex-row sm:justify-evenly my-2"
          >
            <img
              src={termo}
              className="mx-auto my-4 sm:m-0 w-150 h-150 sm:w-110 sm:h-110"
              alt="Imagem de laudo e instalações elétricas"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-white w-3/4 sm:w-3/4 rounded-xl"
          >
            <h3 className="font-bold underline my-5 text-3xl text-[#FAD40F]">LAUDO TERMOGRÁFICO</h3>
            <p className="text-black font-light text-xl my-4">
            É uma técnica de inspeção não destrutiva, utilizada para avaliação preventiva de componentes e instalações elétricas. Utilizado para medir a temperatura de determinados pontos através da radiação infravermelha, ou seja, o laudo termográfico detecta e informa as altas temperaturas nos mais variados componentes elétricos e eletrônicos tais como: painéis, transformadores, motores entre outros, e assim evita as panes e princípios de incêndios.
            </p>

            <button className="self-start mx-4 hidden sm:block bg-[#FAD40F] text-white p-4 2xl:p-6  rounded-full font-bold text-base  2xl:text-xl">
                  <LinkNav to="/contact">
                    {' '}
                  <p>Faça seu orçamento agora</p>
              </LinkNav>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="bg-white flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-32 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
            className="flex flex-col-reverse sm:flex-row sm:justify-evenly my-2"
          >
            <img
              src={termo}
              className="mx-auto my-4 sm:m-0 w-150 h-150 sm:w-110 sm:h-110"
              alt="Imagem de laudo e instalações elétricas"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-white w-3/4 sm:w-3/4 rounded-xl"
          >
            <h3 className="font-bold underline my-5 text-3xl text-[#FAD40F]">LAUDO TERMOGRÁFICO</h3>
            <p className="text-black font-light text-xl my-4">
            É uma técnica de inspeção não destrutiva, utilizada para avaliação preventiva de componentes e instalações elétricas. Utilizado para medir a temperatura de determinados pontos através da radiação infravermelha, ou seja, o laudo termográfico detecta e informa as altas temperaturas nos mais variados componentes elétricos e eletrônicos tais como: painéis, transformadores, motores entre outros, e assim evita as panes e princípios de incêndios.
            </p>

            <button className="self-start mx-4 hidden sm:block bg-[#FAD40F] text-white p-4 2xl:p-6  rounded-full font-bold text-base  2xl:text-xl">
                  <LinkNav to="/contact">
                    {' '}
                  <p>Faça seu orçamento agora</p>
              </LinkNav>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Banner */}
      <BannerContato />
      {/* Footer */}
      <Footer />
    </div>
  )
}
