import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './custom.scss'
import './index.css'
import Header from "./components/Header.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header/>
    <App />
  </StrictMode>,
)
