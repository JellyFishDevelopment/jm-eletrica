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
        <h1 className="text-center font-bold text-5xl sm:text-8xl">Laudos</h1>
        <p className="font-light text-center text-xl sm:text-4xl mt-8">
          Para que os laudos servem. Aenean fermentum eget dolor sit amet
          sagittis. Aenean ex diam, ornare in leo elementum, aliquet vehicula
          tortor. Ut vehicula arcu quis tellus commodo, luctus varius lacus
          laoreet.{' '}
        </p>
      </div>
      {/* Laudos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-32">
        <div className="bg-[#969696] mx-auto text-white p-8  w-3/4 sm:w-3/4 rounded-xl">
          <h3 className="font-bold text-center text-4xl">SPDA</h3>
          <p className="font-light text-xl my-4">
            O laudo do sistema de proteção contra descargas atmosféricas (SPDA) tem por finalidade atestar as condições técnicas do sistema projetado como: malha de aterramento, descidas, captores e etc. Como sua função básica é direcionar a descargas atmosféricas para terra de uma forma segura, conseguimos dessa forma minimizar e até eliminar riscos de danos as pessoas, empreendimentos e indústrias.
          </p>
        </div>
        <div className="bg-[#969696] mx-auto text-white p-8 w-3/4 sm:w-3/4 rounded-xl">
          <h3 className="font-bold text-center text-4xl">NR10</h3>
          <p className="font-light text-xl my-4">
          A segurança em instalações elétricas deve ser bem compreendida e assimilada pelos profissionais que trabalham com energia elétrica. A finalidade do laudo é evidenciar as medidas de controle e sistemas preventivos adotados nas empresas, de forma a garantir a saúde e a segurança dos trabalhadores que, indireta ou diretamente, interajam com as instalações elétricas. Com isso, há a redução de problemas como curtos-circuitos, acidentes de origem elétrica, incêndios, explosões, entre outros.
          </p>
        </div>
        <div className="bg-[#969696] mx-auto text-white p-8 w-3/4 sm:w-3/4 rounded-xl">
          <h3 className="font-bold text-center text-4xl">Termografia</h3>
          <p className="font-light text-xl my-4">
            É uma técnica de inspeção não destrutiva, utilizada para avaliação preventiva de componentes e instalações elétricas. Utilizado para medir a temperatura de determinados pontos através da radiação infravermelha, ou seja, o laudo termográfico detecta e informa as altas temperaturas nos mais variados componentes elétricos e eletrônicos tais como: painéis, transformadores, motores entre outros, e assim evita as panes e princípios de incêndios.
          </p>
        </div>
        <div className="bg-[#969696] mx-auto text-white p-8 w-3/4 sm:w-3/4 rounded-xl">
          <h3 className="font-bold text-center text-4xl">
            Qualidade de energia
          </h3>
          <p className="font-light text-xl my-4">
            Tem por finalidade atestar se as instalações industriais estão em boas condições. A qualidade da energia é um ponto crítico nas instalações industriais, sendo uma área pouco explorada podendo comprometer o bom funcionamento dos equipamentos elétricos e eletrônicos. Com um estudo bem elaborado podemos atuar diretamente no ciclo de vida dos equipamentos melhorando sua eficiência e confiabilidade.
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
