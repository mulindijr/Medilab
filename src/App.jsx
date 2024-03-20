import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<Home />}/>
          <Route path='/services' element={<Home />}/>
          <Route path='/departments' element={<Home />}/>
          <Route path='/doctors' element={<Home />}/>
          <Route path='/contact' element={<Home />}/>
          <Route path='/appointment' element={<Home />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
