import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

import { GifExpertApp } from './GifExpert.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <GifExpertApp />
  //</StrictMode>,
)
