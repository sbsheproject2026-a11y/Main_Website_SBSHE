 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async' 

createRoot(document.getElementById('root')).render(
  // <StrictMode>  // ✅ Tip: Development me bugs pakadne ke liye isko uncomment kar sakte hain
    <HelmetProvider> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  // </StrictMode>,
)

// ✅ Yahan se window.addEventListener('load') wala code hata dein