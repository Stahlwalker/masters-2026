import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Masters  from './pages/Masters'
import PGA      from './pages/PGA'
import USOpen   from './pages/USOpen'
import TheOpen  from './pages/TheOpen'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"       element={<Masters />} />
        <Route path="/pga"    element={<PGA />} />
        <Route path="/usopen" element={<USOpen />} />
        <Route path="/open"   element={<TheOpen />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
