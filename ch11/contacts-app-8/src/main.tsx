import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import ContactStore from './redux/ContactStore.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={ContactStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
