import React from 'react'
import ReactDOMClient from 'react-dom/client'
import { ThemeProvider } from './components/theme/ThemeContext'
import { App } from './App';

ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)