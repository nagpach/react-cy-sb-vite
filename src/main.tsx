
import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import './index.css'
import reportWebVitals from "./reportWebVitals"


async function prepare() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser')
    return worker.start({ onUnhandledRequest: 'bypass' })
  }
  return Promise.resolve()
}

prepare()
  .then(() => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
})
.catch(console.error)

reportWebVitals();
