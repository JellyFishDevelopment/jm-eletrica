import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Servicos from './pages/Servicos'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Laudos from './pages/Laudos'
import Trabalhos from './pages/Trabalhos'
import ProjetosEletricos from './pages/ProjetosEletricos'
import Consultoria from './pages/Consultoria'
import Execucao from './pages/Execucao'

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
        path: 'servicos',
        element: <Servicos />
      },
      {
        path: 'sobre',
        element: <Sobre />
      },
      {
        path: 'contato',
        element: <Contato />
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
      },
      {
        path: 'execucao',
        element: <Execucao />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
