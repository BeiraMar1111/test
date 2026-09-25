import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DentalHomepage } from './DentalHomepage'
import './styles/tokens.css'
import './styles/homepage.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DentalHomepage />
  </StrictMode>,
)
