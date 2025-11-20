import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Isi  from './Isi.jsx'
import HeroSectionPart2 from './components/HeroSectionPart2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroSectionPart2 />  
    <Isi />
  </StrictMode>,
)
