import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Laudos from './pages/Laudos'
import Trabalhos from './pages/Trabalhos'
import ProjetosEletricos from './pages/ProjetosEletricos'
import Consultoria from './pages/Consultoria'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'laudos',
        element: <Laudos />
      },
      {
        path: 'trabalhos',
        element: <Trabalhos />
      },
      {
        path: 'consultoria',
        element: <Consultoria />
      },
      {
        path: 'projetos',
        element: <ProjetosEletricos />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
