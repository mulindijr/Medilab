import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Home/>
        <About/>
        
      </BrowserRouter>
      
    </>
  )
}

export default App
