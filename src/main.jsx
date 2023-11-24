import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CUSTOMTHEME from './styles/customTheme.jsx'
import { ThemeProvider } from 'styled-components'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline/>
    <ThemeProvider theme={CUSTOMTHEME} >
    <App />
    </ThemeProvider>
    
  </React.StrictMode>,
)
