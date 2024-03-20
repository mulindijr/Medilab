import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { TfiEmail } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <>
      <div className='topbar'>
        <div className='topbar-left'>
          <p  className='mail-to'>
            <a href="mailto:mulindijrn@gmail.com">
              <TfiEmail /> contact@medilab.com
            </a>
          </p>
          <p><BsPhone />+254713382707</p>
        </div>
        <div className='topbar-right'>
          <a href="https://twitter.com/mulindijr" target='_blank' rel='noopener noreferrer'>
            <FaTwitter className='icon' />
          </a>
          <a href="https://instagram.com/mulindijr" target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='icon' />
          </a>
          <a href="https://facebook.com" target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='icon' />
          </a>
          <a href="https://linkedin.com/in/mulindijr" target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='icon' />
          </a>
        </div>
      </div>
      <div className='nav-bar'>
        <nav>
          <h3><NavLink to="/">MEDILAB</NavLink></h3>
          <ul className='navbar'>
          <li><NavLink exact='true' to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
            <li><NavLink to="/departments" activeClassName="active">Departments</NavLink></li>
            <li><NavLink to="/doctors" activeClassName="active">Doctors</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            <NavLink to="/appointment" activeClassName="active"><button>Make an Appointment</button></NavLink>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar