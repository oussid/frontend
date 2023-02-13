import Home from './pages/home/Home'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Public from './layouts/Public'
import Admin from './layouts/Admin'
import APropos from './pages/apropos/APropos'
import NoProjets from './pages/nosprojets/NoProjets'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Public/>}>
          <Route index element={<Home />} />
          <Route path='a_propos_de_nous' element={<APropos/>} />
          <Route path='nos_projets' element={<NoProjets/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
