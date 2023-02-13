import Home from './pages/home/Home'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Public from './layouts/Public'
import Admin from './layouts/Admin'
import Notfound from './views/notfound/Notfound'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Public/>}>
          <Route index element={<Home />} />
        </Route>
        <Route  path='/admin' element={<Admin />}>
          <Route path='*' element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
