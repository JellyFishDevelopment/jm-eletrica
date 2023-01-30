import Navbar from './components/Navbar'
import './styles/main.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
