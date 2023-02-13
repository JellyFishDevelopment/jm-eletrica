import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-fourth-banner p-16 w-full flex flex-col items-center h-[500px] bg-cover bg-no-repeat  text-white">
        <h2 className="font-bold text-center my-10 text-5xl sm:text-8xl">
          Contato
        </h2>
        <p className="font-light text-center text-3xl">
          Entre em contato conosco para fazer seu orçamento, é simples e
          gratuito!
        </p>
      </div>
      {/* Formulário */}
      <div className="bg-[#969696] p-12">
        <form className="bg-[#818181] sm:w-1/3 mx-auto p-8 flex flex-col" action="https://formsubmit.co/jellyfish.teste@gmail.com" method="POST">
          <input type="hidden" name="_captcha" value="false"/>
          <input type="hidden" name="_next" value="http://localhost:5173/contact"/>
          <div className="flex justify-between my-2  ">
            <input
              type="text"
              name="name"
              placeholder="Nome:"
              className="p-4 w-1/2 mr-2 outline-none  bg-white"
            />
            <input
              type="text"
              name="phone"
              placeholder="Telefone:"
              className="p-4 w-1/2 ml-2 outline-none bg-white"
            />
          </div>
          <input
            type="text"
            name="email"
            placeholder="Email:"
            className="p-4 my-2 outline-none bg-white"
          />
          <input
            type="text"
            name="subject"
            placeholder="Assunto:"
            className="p-4 my-2 outline-none bg-white"
          />
          <textarea
            className="p-4 my-2 outline-none bg-white resize-none"
            name="message"
            placeholder="Mensagem:"
          ></textarea>
          <button className="p-4 my-2 outline-none bg-[#5C5C5C] text-white">
            Enviar
          </button>
        </form>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
