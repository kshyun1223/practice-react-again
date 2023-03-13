import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.css'

const rootNode = document.getElementById('root')

const root = createRoot(rootNode)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);