import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Utama from './Utama.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Utama />
  </StrictMode>,
)
