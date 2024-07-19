import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Appointment from './components/Appointment/Appointment'
import Departments from './components/Departments/Departments'
import Doctors from './components/Doctors/Doctors'
import Faq from './components/Faq/Faq'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Appointment />
        <Departments />    
        <Doctors />   
        <Faq />
        <Gallery />
        <Contact />
      </BrowserRouter>
      
    </>
  )
}

export default App
