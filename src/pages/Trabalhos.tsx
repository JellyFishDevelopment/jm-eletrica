import { FloatingWhatsApp } from 'react-floating-whatsapp'
import BannerContato from '../components/BannerContato'
import Footer from '../components/Footer'
import logoImage from './../assets/logo-jm.png'
import trabalhoUm from '../assets/trabalho-1.png'
import trabalhoDois from '../assets/trabalho-2.png'
import trabalhoTres from '../assets/trabalho-3.png'

export default function Trabalhos() {
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
      <div className="bg-fifth-banner p-16 w-full flex flex-col items-center h-[500px] bg-cover bg-no-repeat  text-white">
        <h2 className="font-bold text-center my-10 text-5xl sm:text-8xl">
          Trabalhos realizados
        </h2>
        <p className="font-light text-center text-xl sm:text-3xl">
          Nesta página demonstramos alguns dos serviços prestados recentemente.
        </p>
      </div>
      {/* Trabalhos */}
      <div className="p-8 sm:p-16">
        <div className="bg-[#747474] sm:w-[80%] my-8 p-4 sm:p-8 mx-auto rounded-xl flex flex-col sm:flex-row justify-between">
          <div className="my-4 sm:mt-8 mx-8">
            <h3 className="font-bold text-white text-2xl sm:text-4xl">
              Condomínio do Sol
            </h3>
            <span className="font-bold text-green-500 text-2xl ">
              Condomínio
            </span>
            <p className="font-bold text-white text-2xl mt-8">
              Serviços executado:
            </p>
            <p className="font-light text-white text-2xl">
              • Manutenção e troca de fiação
            </p>
          </div>
          <img src={trabalhoUm} />
        </div>
        <div className="bg-[#747474] sm:w-[80%] my-8 p-4 sm:p-8 mx-auto rounded-xl flex flex-col sm:flex-row justify-between">
          <div className="my-4 sm:mt-8 mx-8">
            <h3 className="font-bold text-white text-4xl">
              Empório e padaria Rodrigues - Unidade São Vicente
            </h3>
            <span className="font-bold text-green-500 text-2xl ">Empresa</span>
            <p className="font-bold text-white text-2xl mt-8">
              Serviços executado:
            </p>
            <p className="font-light text-white text-2xl">
              • Adequação ao sistema externo de iluminação
            </p>
          </div>
          <img src={trabalhoDois} />
        </div>
        <div className="bg-[#747474] sm:w-[80%] my-8 p-4 sm:p-8 mx-auto rounded-xl flex flex-col sm:flex-row justify-between">
          <div className="my-4 sm:mt-8 mx-8">
            <h3 className="font-bold text-white text-4xl">
              San Diego Pizzas e Esfirraria
            </h3>
            <span className="font-bold text-green-500 text-2xl ">Empresa</span>
            <p className="font-bold text-white text-2xl mt-8">
              Serviços executado:
            </p>
            <p className="font-light text-white text-2xl">
              • Instalação de gerador elétrico • Análise termográfia das
              temperaturas do ambiente
            </p>
          </div>
          <img src={trabalhoTres} />
        </div>
      </div>
      {/* Banner */}
      <BannerContato />
      {/* Rodapé */}
      <Footer />
    </div>
  )
}
