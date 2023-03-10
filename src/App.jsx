import Home from './pages/home/Home'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Public from './layouts/public/Public'
import Admin from './layouts/admin/Admin'
import Dashboard from './views/admin-main/dashboard/Dashboard'
import Projets from './views/admin-main/projects/Projects'
import Apartments from './views/admin-main/apartments/Apartments'
import Employees from './views/admin-main/employees/Employees'
import Notfound from './views/notfound/Notfound'
import APropos from './pages/apropos/APropos'
import NoProjets from './pages/nosprojets/NoProjets'
import Projet from './pages/projet/Projet'
import RendezVous from './pages/rendezVous/RendezVous'
function App() {
  

  return (
    <div className="App">
      <Routes>
      <Route  path='/' element={<Public/>}>
          <Route index element={<Home />} />
          <Route path='a_propos_de_nous' element={<APropos/>} />
          <Route path='nos_projets/' element={<NoProjets/>} />
          <Route path='nos_projets/:id' element={<Projet/>} />
          <Route path='rendez_vous/' element={<RendezVous/>} />
        </Route>

        <Route  path='/admin' element={<Admin />}>
          <Route  path='accueil' index element={<Dashboard/>} />
          <Route path='projets' element={<Projets/>} />
          <Route path='appartements' element={<Apartments/>} />
          <Route path='employees' element={<Employees/>} />
        </Route>

        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default App
