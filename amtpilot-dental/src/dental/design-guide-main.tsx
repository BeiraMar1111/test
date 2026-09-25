import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DesignGuide } from './DesignGuide'
import './styles/tokens.css'
import './styles/design-guide.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DesignGuide />
  </StrictMode>,
)
