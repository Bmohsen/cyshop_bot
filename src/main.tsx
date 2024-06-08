import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import WebApp from '@twa-dev/sdk'
import '@telegram-apps/telegram-ui/dist/styles.css';
import './index.css'
import { AppRoot } from '@telegram-apps/telegram-ui'

WebApp.ready();

const layout: React.CSSProperties = {
  display: 'flex',
  width: '100vw',
  height: '100vh',
  flexDirection: 'column'
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoot style={layout} appearance='dark'>
    <App />
    </AppRoot>
  </React.StrictMode>,
)
