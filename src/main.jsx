import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CUSTOMTHEME from './styles/customTheme.jsx'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={CUSTOMTHEME} >
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
