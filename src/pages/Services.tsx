import { ClipboardText, Lightning, NotePencil, CheckCircle, Check } from 'phosphor-react'
import ServiceCard from '../components/ServiceCard'
import laudoUm from '/laudo-1.png'
import laudoDois from '/laudo-2.png'
import laudoTres from '/laudo-3.png'
import laudoQuatro from '/laudo-4.jpeg'
import laudoCinco from '/laudo-5.jpeg'
import laudoSeis from '/laudo-6.jpeg'
import imagemConsultoria from '/consultorias.png'
import imagemLaudo from '/laudostecnicos.png'
import imagemProjeto from '/projetoseletricos.png'
import CartaoServico from '../components/CartaoServico'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logoImage from '/logo-jm.png'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function Services() {
  const carousel = useRef<any>(null)
  const [width, setWidth] = useState(0)
  const slides = [
    laudoUm,
    laudoDois,
    laudoTres,
    laudoQuatro,
    laudoCinco,
    laudoSeis
  ]

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
      <div className="bg-seventh-banner bg-cover bg-no-repeat pt-16 h-96 text-white">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-center font-bold text-6xl sm:text-8xl">
            Serviços
          </h1>
        </motion.div>
        {/* Serviços */}
        <div className="flex flex-col p-8 sm:flex-row sm:justify-evenly mt-32">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <ServiceCard
              image={<NotePencil size={80} color="#FAD40F" />}
              text="Oferecemos as melhores soluções para aqueles que precisam de consultoria quanto à energia que sua residência ou empresa consome. Com um estudo bem elaborado podemos atuar diretamente no ciclo de vida dos equipamentos melhorando sua eficiência e confiabilidade."
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
              text="A execução é de suma importância para realizar instalações elétricas competentes, a fim de que se tenha garantia da qualidade do serviço executado, feito por profissionais especializados em instalações elétricas."
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
              text="Atuamos no setor de projetos elétricos, de modo a garantir que todas as etapas do projeto, sejam executadas de maneira adequada, visando sempre a qualidade e a segurança, baseando-se nas normas regulamentadoras e boas práticas da engenharia."
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
              text="Através de laudos específicos, levamos mais controle e prevenção aos equipamentos e instalações elétricas. A realização do laudo elétrico é vital para avaliar as condições da infraestrutura da sua empresa e manter o fornecimento de energia para as atividades do dia a dia em boas condições. "
            />
          </motion.div>
        </div>
        {/* Serviços + Imagens */}
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="flex flex-col-reverse p-8 sm:flex-row sm:justify-evenly my-24"
        >
          <img
            src={imagemProjeto}
            className="rounded-full mx-auto my-4 sm:m-0 w-72 h-72 sm:w-96  sm:h-96"
            alt="Imagem de laudo e instalações elétricas"
          />
          <CartaoServico
            image={<NotePencil size={80} color="#FAD40F" />}
            title="Projetos"
            description="O projeto elétrico consiste na determinação de materiais, tanto em especificação quanto em quantidade, além de como serão feitas as instalações que demandam energia elétrica após o término da obra, isso vale para iluminação e para a rede de tomadas."
            link="/projetos"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="flex flex-col p-8  sm:flex-row sm:justify-evenly my-16"
        >
          <CartaoServico
            image={<CheckCircle size={80} color="#FAD40F" />}
            title="Execução"
            description="A execução é de suma importância para realizar instalações elétricas competentes, a fim de que se tenha garantia da qualidade do serviço executado, feito por profissionais especializados em instalações elétricas."
            link="/execucao"
          />
          <img
            src={imagemConsultoria}
            className="rounded-full mx-auto my-4 sm:m-0 w-72 h-72 sm:w-96  sm:h-96"
            alt="Imagem de laudo e instalações elétricas"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="flex flex-col-reverse p-8 sm:flex-row sm:justify-evenly my-24"
        >
          <img
            src={imagemProjeto}
            className="rounded-full mx-auto my-4 sm:m-0 w-72 h-72 sm:w-96  sm:h-96"
            alt="Imagem de laudo e instalações elétricas"
          />
          <CartaoServico
            image={<Lightning size={80} color="#FAD40F" />}
            title="Laudos Técnicos"
            description="O Laudo Técnico é um relatório emitido por um engenheiro especializado, logo após os processos de análise e avaliação, a respeito de um problema ou caso específico. Dessa forma, têm-se o diagnóstico da situação, baseado na experiência e conhecimentos técnicos do profissional."
            link="/laudos"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="flex flex-col p-8  sm:flex-row sm:justify-evenly my-16"
        >
          <CartaoServico
            image={<ClipboardText size={80} color="#FAD40F" />}
            title="Consultoria de Serviço"
            description="A consultoria elétrica consiste em buscar economia de energia elétrica ao cliente e aproveitar da melhor maneira o seu consumo mensal, versus suas instalações elétricas. Este serviço pode ser através de análise da conta de energia, que as vezes numa simples alteração tarifária, poder causar economia."
            link="/consultoria"
          />
          <img
            src={imagemLaudo}
            className="rounded-full mx-auto my-4 sm:m-0 w-72 h-72 sm:w-96  sm:h-96"
            alt="Imagem de laudo e instalações elétricas"
          />
        </motion.div>

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
