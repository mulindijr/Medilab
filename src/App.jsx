import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Services />
        
      </BrowserRouter>
      
    </>
  )
}

export default App
