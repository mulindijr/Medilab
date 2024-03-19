import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import './Home.css'

function Home() {
  return (
    <>
      <div className='hero-bg'>
        <div className='hero-content'>
          <h1>WELCOME TO MEDILAB</h1>
          <p>Medilab: Where Compassionate Care Meets Cutting-Edge Medicine</p>
          <NavLink to="/about"><button>Get Started</button></NavLink> 
        </div>
      </div>
    </>
  )
}

export default Home