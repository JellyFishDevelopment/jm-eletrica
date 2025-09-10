import Navbar from './components/Navbar'
import './styles/main.css'
import { Outlet } from 'react-router-dom'
import ScrollTop from './components/ScrollTop'

function App() {
  return (
    <div>
      <Navbar />
      <ScrollTop>
        <Outlet />
      </ScrollTop>
    </div>
  )
}

export default App
