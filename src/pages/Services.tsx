import {
  ClipboardText,
  Lightning,
  NotePencil,
  CheckCircle,
  Check
} from 'phosphor-react'
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
import imagemProjetos from '/projetos.png'
import CartaoServico from '../components/CartaoServico'
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

      <div className="p-8 sm:p-12 h-50 text-black bg-[#f2f2f2]">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-center font-bold text-3xl sm:text-4xl titulo-servicos">
            Serviços
          </h1>
        </motion.div>
      </div>

      {/* Serviços + Imagens */}
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9 }}
        className="flex flex-col-reverse p-8 sm:flex-row sm:justify-evenly my-26"
      >
        <img
          src={imagemProjeto}
          className="rounded-full mx-auto my-4 sm:m-0 w-72 h-72 sm:w-96 sm:h-96"
          alt="Imagem de laudo e instalações elétricas"
        />
        <CartaoServico
          image={<NotePencil size={80} color="#1e55f4" />}
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
          image={<CheckCircle size={80} color="#1e55f4" />}
          title="Laudos Técnicos"
          description="O Laudo Técnico é um relatório emitido por um engenheiro especializado, logo após os processos de análise e avaliação, a respeito de um problema ou caso específico. Dessa forma, têm-se o diagnóstico da situação, baseado na experiência e conhecimentos técnicos do profissional."
          link="/laudos"
        />
        <img
          src={imagemLaudo}
          className="rounded-full mx-auto my-4 sm:m-0 w-72 h-72 sm:w-96  sm:h-96"
          alt="Imagem de laudo e instalações elétricas"
        />
      </motion.div>
      <hr />
      <Footer />
    </div>
  )
}
