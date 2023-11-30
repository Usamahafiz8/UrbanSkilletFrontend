import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  { customTheme } from './styles/customTheme.jsx'
import { ThemeProvider } from 'styled-components'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline/>
    <ThemeProvider theme={customTheme} >
    <App />
    </ThemeProvider>
    
  </React.StrictMode>,
)
