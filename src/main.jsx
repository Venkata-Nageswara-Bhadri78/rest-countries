import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CountriesProvider } from './CountriesContext.jsx'
import { DarkModeProvider } from './DarkModeContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <CountriesProvider>
        <App />
      </CountriesProvider>
    </DarkModeProvider>
  </StrictMode>,
)
