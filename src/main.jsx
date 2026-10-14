 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// Jab complete page/resources load ho jayein
window.addEventListener('load', () => {
  const loader = document.getElementById('initial-loader')

  if (loader) {
    loader.style.opacity = '0'

    setTimeout(() => {
      loader.remove()
    }, 300)
  }
})
