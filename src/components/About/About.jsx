import React from 'react'
import doctors from '../../assets/about.jpg'
import { RiTeamFill } from "react-icons/ri";
import { HiMiniFingerPrint } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import './About.css'

function About() {
  return (
    <section id='about'>
      <div className='about-left'>
          <img src={doctors} alt="doctors" />
      </div>
      
    </section>    
  )
}

export default About