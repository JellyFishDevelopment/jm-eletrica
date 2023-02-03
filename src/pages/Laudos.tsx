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
      />
      {/* Cabeçalho */}
      <div className="p-16 h-96 text-white bg-[#818181]">
        <h1 className="text-center font-bold text-8xl">Laudos</h1>
        <p className="font-light text-center text-4xl mt-8">
          Para que os laudos servem. Aenean fermentum eget dolor sit amet
          sagittis. Aenean ex diam, ornare in leo elementum, aliquet vehicula
          tortor. Ut vehicula arcu quis tellus commodo, luctus varius lacus
          laoreet.{' '}
        </p>
      </div>
      {/* Laudos */}
      <div className="grid grid-cols-2 gap-4 my-32">
        <div className="bg-[#969696] mx-auto text-white p-8  w-3/4 rounded-xl">
          <h3 className="font-bold text-center text-4xl">SPDA</h3>
          <p className="font-light text-xl my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="bg-[#969696] mx-auto text-white p-8 w-3/4 rounded-xl">
          <h3 className="font-bold text-center text-4xl">NR10</h3>
          <p className="font-light text-xl my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="bg-[#969696] mx-auto text-white p-8 w-3/4 rounded-xl">
          <h3 className="font-bold text-center text-4xl">Termografia</h3>
          <p className="font-light text-xl my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="bg-[#969696] mx-auto text-white p-8 w-3/4 rounded-xl">
          <h3 className="font-bold text-center text-4xl">
            Qualidade de energia
          </h3>
          <p className="font-light text-xl my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
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
