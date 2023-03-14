import React from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import './index.css'
import App from './App'

const rootNode = document.getElementById('root')
const root = createRoot(rootNode)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);