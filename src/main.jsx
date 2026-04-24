import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes/AppRoutes'
import Header from './components/Header'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer
    toastClassName={"toast-item"}
    className={"toast-container"}
    />
    <Header/>
    <AppRoutes/>
  </StrictMode>,
)
