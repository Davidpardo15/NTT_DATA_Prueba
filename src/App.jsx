import { useState } from 'react'
import './App.css'
import Frutas from './Frutas'
import Login from './Login'
import NavbarSimple from './navbar'
import Firma from './Firma'
import NotFound from './404'

import { Routes, Route, useLocation } from 'react-router-dom'


function App() {

  return (
   <>
   <NavbarSimple />
    <Routes>
      <Route path='/frutas' element={<Frutas />} />
      <Route path="/" element={<Login />}/>
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Firma />
   </>
   
  )
}

export default App;