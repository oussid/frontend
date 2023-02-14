import Home from './pages/home/Home'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Public from './layouts/public/Public'
import Admin from './layouts/admin/Admin'
import Dashboard from './views/admin-main/Dashboard'
import Projets from './views/admin-main/Projects'
import Apartments from './views/admin-main/Apartments'
import Employees from './views/admin-main/Employees'
import Notfound from './views/notfound/Notfound'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Public/>}>
          <Route index element={<Home />} />
        </Route>
        <Route  path='/admin' element={<Admin />}>
          <Route path='accueil' element={<Dashboard/>} />
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
