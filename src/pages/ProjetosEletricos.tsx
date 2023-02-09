import { FloatingWhatsApp } from 'react-floating-whatsapp'
import BannerContato from '../components/BannerContato'
import Footer from '../components/Footer'
import logoImage from './../assets/logo-jm.png'

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
        <h1 className="text-center font-bold text-5xl sm:text-8xl">Projetos Elétricos</h1>
        <p className="font-light text-center text-xl sm:text-4xl mt-8">
          O projeto elétrico é o conjunto de todas as informações necessárias para realizar o trabalho: cálculos, desenhos, gráficos, materiais e tudo mais que se refere a uma instalação ou equipamento elétrico baseado em normas técnicas.{' '}
        </p>
      </div>
      {/* Laudos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-32">
        <div className="bg-[#969696] mx-auto text-white p-8  w-3/4 sm:w-3/4 rounded-xl">
          <h3 className="font-bold text-center text-4xl">Projetos Residenciais, Comerciais e Industriais</h3>
          <p className="font-light text-xl my-4">
            Projetos Residenciais, Comerciais e Industriais.
          </p>
        </div>
        <div className="bg-[#969696] mx-auto text-white p-8 w-3/4 sm:w-3/4 rounded-xl">
          <h3 className="font-bold text-center text-4xl">Projetos de Medição Agrupada (PMUC)</h3>
          <p className="font-light text-xl my-4">
          Projetos de Medição Agrupada (PMUC).
          </p>
        </div>
        <div className="bg-[#969696] mx-auto text-white p-8 w-3/4 sm:w-3/4 rounded-xl">
          <h3 className="font-bold text-center text-4xl">Projetos de Subestação BT/MT</h3>
          <p className="font-light text-xl my-4">
            Projetos de Subestação BT/MT.
          </p>
        </div>
        <div className="bg-[#969696] mx-auto text-white p-8 w-3/4 sm:w-3/4 rounded-xl">
          <h3 className="font-bold text-center text-4xl">
            Projetos de Geração Fotovoltaico
          </h3>
          <p className="font-light text-xl my-4">
            Projetos de Geração Fotovoltaico.
          </p>
        </div>
      </div>
      {/* Banner */}
      <BannerContato />
      {/* Footer */}
      <Footer />
    </div>
  )
}
