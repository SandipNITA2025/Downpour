import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import ScrollToTop from './scroll/scrollToTop';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> <App />
      <ScrollToTop />
    </BrowserRouter>

  </React.StrictMode>,
)
