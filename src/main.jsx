import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes/AppRoutes'
import Header from './components/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <AppRoutes/>
  </StrictMode>,
)
