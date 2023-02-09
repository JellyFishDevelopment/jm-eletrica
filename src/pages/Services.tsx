import { Barricade, Lightning, ShieldCheckered } from 'phosphor-react'
import ServiceCard from '../components/ServiceCard'
import laudoUm from '../assets/laudo-1.png'
import laudoDois from '../assets/laudo-2.png'
import laudoTres from '../assets/laudo-3.png'
import imagemConsultoria from '../assets/consultorias.png'
import imagemLaudo from '../assets/laudostecnicos.png'
import imagemProjeto from '../assets/projetoseletricos.png'
import CartaoServico from '../components/CartaoServico'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logoImage from './../assets/logo-jm.png'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function Services() {
  const carousel = useRef()
  const [width, setWidth] = useState(0)
  const slides = [laudoUm, laudoDois, laudoTres]

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

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
      <div className="pt-16 h-96 text-white bg-[#818181]">
        {/* Título */}
        <h1 className="text-center font-bold text-6xl sm:text-8xl">Serviços</h1>
        {/* Serviços */}
        <div className="flex flex-col p-8 sm:flex-row sm:justify-evenly mt-32">
          <ServiceCard
            image={<Lightning size={80} color="#FFF" />}
            text="Oferecemos as melhores soluções para aqueles que precisam de consultoria quanto à energia que sua residência ou empresa consome. Com um estudo bem elaborado podemos atuar diretamente no ciclo de vida dos equipamentos melhorando sua eficiência e confiabilidade."
          />
          <ServiceCard
            image={<Barricade size={80} color="#FFF" />}
            text="Atuamos no setor de projetos elétricos, de modo a garantir que todas as etapas do projeto, sejam executadas de maneira adequada, visando sempre a qualidade e a segurança, baseando-se nas normas regulamentadoras e boas práticas da engenharia."
          />
          <ServiceCard
            image={<ShieldCheckered size={80} color="#FFF" />}
            text="Através de laudos específicos, levamos mais controle e prevenção aos equipamentos e instalações elétricas, garantindo maior segurança para os usuários "
          />
        </div>
        {/* Serviços + Imagens */}

        <div className="flex flex-col p-8  sm:flex-row sm:justify-evenly my-16">
          <CartaoServico
            image={<Lightning size={80} color="#FFF" />}
            title="Consultoria"
            description="A consultoria elétrica consiste em buscar economia de energia elétrica ao cliente e aproveitar da melhor maneira o seu consumo mensal, versus suas instalações elétricas. Este serviço pode ser através de análise da conta de energia, que as vezes numa simples alteração tarifária, poder causar economia."
          />
          <img
            src={imagemConsultoria}
            className="rounded-full mx-auto my-4 sm:m-0 w-72 h-72 sm:w-96  sm:h-96"
            alt="Imagem de laudo e instalações elétricas"
          />
        </div>
        <div className="flex flex-col-reverse p-8 sm:flex-row sm:justify-evenly my-24">
          <img
            src={imagemProjeto}
            className="rounded-full mx-auto my-4 sm:m-0 w-72 h-72 sm:w-96  sm:h-96"
            alt="Imagem de laudo e instalações elétricas"
          />
          <CartaoServico
            image={<Barricade size={80} color="#FFF" />}
            title="Projetos Elétricos"
            description="O projeto elétrico consiste na determinação de materiais, tanto em especificação quanto em quantidade, além de como serão feitas as instalações que demandam energia elétrica após o término da obra, isso vale para iluminação e para a rede de tomadas."
          />
        </div>
        <div className="flex flex-col p-8  sm:flex-row sm:justify-evenly my-16">
          <CartaoServico
            image={<ShieldCheckered size={80} color="#FFF" />}
            title="Laudos Técnicos"
            description="O Laudo Técnico nada mais é que um relatório emitido por um engenheiro especializado, logo após os processos de análise e avaliação, a respeito de um problema ou caso específico. Dessa forma, têm-se o diagnóstico da situação, baseado na experiência e conhecimentos técnicos do profissional."
          />
          <img
            src={imagemLaudo}
            className="rounded-full mx-auto my-4 sm:m-0 w-72 h-72 sm:w-96  sm:h-96"
            alt="Imagem de laudo e instalações elétricas"
          />
        </div>

        {/* Carousel */}
        <div className="bg-[#969696] p-8">
          <h2 className="text-white text-center font-bold text-5xl sm:text-7xl">
            Saiba mais sobre nossos serviços
          </h2>
          <motion.div
            ref={carousel}
            className="cursor-grab overflow-hidden w-[90%] sm:w-3/4 mx-auto"
            whileTap={{ cursor: 'grabbing' }}
          >
            <motion.div
              className="flex"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              {slides.map(image => (
                <motion.div
                  className="min-h-[532px] min-w-[492px] p-12"
                  key={image}
                >
                  <img
                    className="w-full h-[400px] rounded-2xl pointer-events-none"
                    src={image}
                    alt="Imagem Carousel"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  )
}
