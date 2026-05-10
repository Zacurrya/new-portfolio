import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/react"
import { SceneProvider } from '@contexts/SceneProvider.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics/>
    <SceneProvider>
      <App />
    </SceneProvider>
  </StrictMode>,
)
