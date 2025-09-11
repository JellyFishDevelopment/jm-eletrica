import Navbar from './components/Navbar'
import './styles/main.css'
import { Outlet } from 'react-router-dom'
import ScrollTop from './components/ScrollTop'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logoImage from '/eisen-card.png'

function App() {
  return (
    <div>
      <Navbar />
      <ScrollTop>
        <Outlet />
      </ScrollTop>
      <FloatingWhatsApp
        darkMode={true}
        accountName="EINSEN SOLUTIONS"
        phoneNumber="+55 13 99646-2507"
        chatMessage="Olá, como posso te ajudar?"
        statusMessage=""
        avatar={logoImage}
        placeholder="Mensagem:"
      />
    </div>
  )
}

export default App
