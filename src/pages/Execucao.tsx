import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { motion } from 'framer-motion'
import BannerContato from '../components/BannerContato'
import Footer from '../components/Footer'
import logoImage from '/logo-jm.png'

export default function ProjetosEletricos() {
  return (
    <div>
      {/* Whatsapp */}
      <FloatingWhatsApp
        darkMode={true}
        accountName="JM Elétrica"
        phoneNumber="+55 13 99646-2507"
        chatMessage="Olá, como posso te ajudar?"
        statusMessage=""
        avatar={logoImage}
        placeholder="Mensagem:"
      />
      {/* Cabeçalho */}
      <div className="bg-sixth-banner bg-cover bg-no-repeat p-8 sm:p-16 h-96 text-white">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-center font-bold text-5xl sm:text-8xl">
            Execução
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-light text-center text-xl sm:text-2xl mt-8">
          A execução dos projetos é realizada por profissionais e norteada pela NBR 5410 — que dispõe sobre instalações elétricas de baixa tensão.{' '}
          </p>
        </motion.div>
      </div>
      {/* Laudos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-32">
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }}
          className="bg-[#969696] mx-auto text-white p-8  w-3/4 sm:w-3/4 rounded-xl"
        >
          <h3 className="font-bold text-center text-4xl">
            Instalações Elétricas Residenciais e Comerciais
          </h3>
          <p className="font-light text-xl my-4">
          Desenvolvimento do projeto e a instalação de um sistema elétrico em um estabelecimento comercial.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-[#969696] mx-auto text-white p-8 w-3/4 sm:w-3/4 rounded-xl"
        >
          <h3 className="font-bold text-center text-4xl">
            Automação Residencial e Comercial
          </h3>
          <p className="font-light text-xl my-4">
            Uso da tecnologia para facilitar e tornar automáticas algumas tarefas habituais que em uma casa convencional ou empresa ficaria a cargo de seus moradores e funcionário.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="bg-[#969696] mx-auto text-white p-8 w-3/4 sm:w-3/4 rounded-xl"
        >
          <h3 className="font-bold text-center text-4xl">
            Acompanhamento de Obras
          </h3>
          <p className="font-light text-xl my-4">
          Garantir que a execução dos serviços esteja de acordo com as condições e especificações técnicas presentes no escopo do projeto, evitando retrabalhos e gastos desnecessários.
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
