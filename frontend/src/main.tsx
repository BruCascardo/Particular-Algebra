import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'katex/dist/katex.min.css'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from './context/ConfigContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>,
)
