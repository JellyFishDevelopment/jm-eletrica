import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { motion } from 'framer-motion'
import BannerContato from '../components/BannerContato'
import Footer from '../components/Footer'
import logoImage from '/logo-jm.png'
import { Link as LinkNav } from 'react-router-dom'
import subestacao from '/laudo-6.jpeg'
import spda from '/laudo-5.jpeg'
import pmuc from '/projetopmuc.png'
import foto from '/fotovoltaicos.png'


export default function ProjetosEletricos() {
  const initialImageSrc = '';
  const initialHeaderText = '';
  const initialParagraphText = '';

  return (
    <div>
      {/* Whatsapp */}
      <FloatingWhatsApp
        darkMode={true}
        accountName="JM Elétrica"
        phoneNumber="+55 13 99646-2507"
        chatMessage="Olá, como posso te ajudar?"
        statusMessage=""
        avatar={logoImage}
        placeholder="Mensagem:"
      />
      {/* Cabeçalho */}
      <div className="p-8 sm:p-16 h-90 text-black bg-[#f2f2f2]">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-center font-bold text-5xl sm:text-4xl">
              Projetos Elétricos
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-light text-center text-xl sm:text-1xl mt-8">
            O projeto elétrico é o conjunto de todas as informações necessárias
            para realizar o trabalho: cálculos, desenhos, gráficos, materiais e
            tudo mais que se refere a uma instalação ou equipamento elétrico
            baseado em normas técnicas.{' '}
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
              src={subestacao}
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
            <h3 className="font-bold underline my-5 text-3xl text-[#FAD40F]">PROJETOS DE SUBESTAÇÕES</h3>
            <p className="text-black font-light text-xl my-4">
            As subestações são soluções que compõem o sistema de proteção, controle, transmissão e distribuição de energia de alta tensão ou media tensão da fonte geradora à consumidora. Elas geralmente são utilizadas em grandes obras, industrias, centro comerciais, hospitais, eventos de grandes proporções e até na manutenção de energia elétrica da concessionária local.
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
            <h3 className="font-bold underline my-5 text-3xl text-[#FAD40F]">PROJETOS DE SPDA</h3>
            <p className="text-black font-light text-xl my-4">
            Sistema de Proteção Contra Descargas Atmosféricas (SPDA), é um estudo realizado em uma edificação para a implantação de dispositivos que irão proteger a infraestrutura civil e as pessoas que se utilizam deste ambiente. Fundamental em imóveis comerciais e industriais, todo o projeto de SPDA deve ser feito de acordo com a norma técnica NBR 5419/2015.
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
              src={foto}
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
            <h3 className="font-bold underline my-5 text-3xl text-[#FAD40F]">PROJETOS FOTOVOLTAICOS</h3>
            <p className="text-black font-light text-xl my-4">
            Projetos fotovoltaicos são projetos que envolvem a instalação de sistemas de geração de energia elétrica a partir da luz solar, também conhecidos como sistemas de energia solar fotovoltaica. Esses projetos podem ser aplicados em diferentes tipos de edificações, como residências, comércios e indústrias, além de projetos em grande escala, como usinas solares.
            O objetivo principal de um projeto fotovoltaico é fornecer energia elétrica de forma limpa e renovável, reduzindo a dependência de fontes não renováveis, como os combustíveis fósseis. Além disso, os projetos fotovoltaicos podem trazer economia financeira a longo prazo, já que a energia gerada pelo sistema pode ser utilizada para abastecer as necessidades elétricas do imóvel e, eventualmente, gerar créditos de energia que podem ser utilizados para abater a conta de luz.
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
              src={pmuc}
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
            <h3 className="font-bold underline my-5 text-3xl text-[#FAD40F]">PROJETOS PMUC</h3>
            <p className="text-black font-light text-xl my-4">
            O PMUC é o ponto mais importante do sistema elétrico de uma edificação. Porque nele ocorre a entrada da energia fornecida pela concessionaria, bem como a distribuição para todas as unidades de habitação. Por esse motivo deve-se consultar um profissional habilitado e capacitado para a elaboração desse tipo de projeto.
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
