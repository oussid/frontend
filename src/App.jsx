import Home from './pages/home/Home'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Public from './layouts/Public'
import Admin from './layouts/Admin'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route  path='/admin/:title?' element={<Admin/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
