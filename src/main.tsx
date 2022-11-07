
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { App } from './App'
import './index.css'
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom";
import { setupStore } from './store/store'

const store = setupStore()


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
        <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
        </Provider>
      </React.StrictMode>
    )
})
.catch(console.error)

reportWebVitals();
