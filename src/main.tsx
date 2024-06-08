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
  flexDirection: 'column',
  backgroundColor: WebApp.colorScheme == 'dark' ? '#212121' : 'white',
  color: WebApp.colorScheme == 'dark' ? 'white' : '#212121'
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoot style={layout} appearance={WebApp.colorScheme}>
    <App />
    </AppRoot>
  </React.StrictMode>,
)
