import Footer from '../components/Footer'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react'

export default function Contact() {
  const [formIsValid, setFormIsValid] = useState(true)
  const validateForm = () => {
    const nameInput = document.getElementsByName('name')[0] as HTMLInputElement;
    const emailInput = document.getElementsByName('email')[0] as HTMLInputElement;
    return Boolean(nameInput.value && emailInput.value)
  }
  
  const notify = () => {
    if (formIsValid) {
      toast.success('E-mail enviado com sucesso!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } 
    // else {
    //   toast.error('Por favor, preencha todos os campos obrigatórios.')
    // }
  }

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Banner */}
      <div className="bg-fourth-banner p-16 w-full flex flex-col items-center h-[500px] bg-cover bg-no-repeat  text-white">
        <h2 className="font-bold text-center my-10 text-5xl sm:text-6xl">
          Contato
        </h2>
        <p className="font-light text-center text-2xl">
          Entre em contato conosco para fazer seu orçamento, é simples e
          gratuito!
        </p>
      </div>
      {/* Formulário */}
      <div className="bg-[#d3d3d3] p-12">
        <form
          className="bg-[#818181] sm:w-1/3 mx-auto p-8 flex flex-col"
          action="https://formsubmit.co/jellyfishdevelop@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://www.jmsolucoesenergia.com.br"
          />
          <input type="hidden" name="_autoresponse" value="Email Recebido"></input>
          <div className="flex justify-between my-2  ">
            <input
              type="text"
              name="name"
              placeholder="Nome:"
              className="p-4 w-1/2 mr-2 outline-none  bg-white"
              required
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
            required
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
          <button
            onClick={() => {
              const isFormValid = validateForm()
              setFormIsValid(isFormValid);
              if (isFormValid) {
                notify();
              }
            }}
            className="p-4 my-2 outline-none bg-[#5C5C5C] text-white"
          >
            Enviar
          </button>
        </form>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
