import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider } from './context/ThemeContext' // ← IMPORTER

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> {/* ← AJOUTER CE WRAPPER */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)