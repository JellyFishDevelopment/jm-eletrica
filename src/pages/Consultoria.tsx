import BannerContato from '../components/BannerContato'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Consultoria() {
  return (
    <div>
      {/* Cabeçalho */}
      <div className="p-8 sm:p-16 h-96 text-white bg-[#818181]">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-center font-bold text-5xl sm:text-8xl">
            Consultoria
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-light text-center text-xl sm:text-2xl mt-8">
            A consultoria elétrica tem como enfoque direcionar forma de
            economizar energia e dinheiro, sendo assim, essa consultoria tem
            como função encontrar as necessidades de cada empreendimento e
            auxiliá-lo a encontrar formas de economizar energia.{' '}
          </p>
        </motion.div>
      </div>
      {/* Laudos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-32">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="bg-[#969696] mx-auto text-white p-8  w-3/4 sm:w-3/4 rounded-xl"
        >
          <h3 className="font-bold text-center text-4xl">
            Consultor em análise de qualidade de energia
          </h3>
          <p className="font-light text-xl my-4">
            Tem por finalidade atestar se as instalações industriais estão em
            boas condições. A qualidade da energia é um ponto crítico nas
            instalações industriais, sendo uma área pouco explorada podendo
            comprometer o bom funcionamento dos equipamentos elétricos e
            eletrônicos. Com um estudo bem elaborado podemos atuar diretamente
            no ciclo de vida dos equipamentos melhorando sua eficiência e
            confiabilidade.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="bg-[#969696] mx-auto text-white p-8 w-3/4 sm:w-3/4 rounded-xl"
        >
          <h3 className="font-bold text-center text-4xl">Consultor de PIE</h3>
          <p className="font-light text-xl my-4">
            A consultoria em PIE consiste em elaborar ou levantar os documentos
            pertinentes as instalações elétricas, mostrando a necessidade de um
            sistema organizado de forma a conter os documentos que compõe o
            Laudo da NR10. O PIE deve ser organizado e mantido atualizado pelo
            empregador ou pessoa formalmente designada pela empresa, devendo
            permanecer à disposição dos trabalhadores envolvidos em serviços com
            eletricidade.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="bg-[#969696] mx-auto text-white p-8 w-3/4 sm:w-3/4 rounded-xl"
        >
          <h3 className="font-bold text-center text-4xl">
            Consultor para Credito de ICMS
          </h3>
          <p className="font-light text-xl my-4">
            A consultoria para crédito de ICMS, consiste em estudo técnico
            realizado por um Engenheiro eletricista, que irá quantificar a
            energia utilizada no processo de industrialização.
          </p>
        </motion.div>
      </div>
      {/* Banner */}
      <BannerContato />
      {/* Footer */}
      <Footer />
    </div>
  )
}
