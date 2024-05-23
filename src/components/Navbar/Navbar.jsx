import React, { useState } from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { TfiEmail } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  const handleSetActive = (to) => {
    setActiveSection(to);
  };
  return (
    <>
      <div className='topbar'>
        <div className='topbar-left'>
          <p className='mail-to'>
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
      <h3><Link to="home" smooth={true} duration={500}>MEDILAB</Link></h3>
      <ul className='navbar'>
        <li><Link to="home" smooth={true} duration={500} spy={true} active={activeSection === "home"} onSetActive={handleSetActive}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} spy={true} active={activeSection === "about"} onSetActive={handleSetActive}>About</Link></li>
        <li><Link to="services" smooth={true} duration={500} spy={true} active={activeSection === "services"} onSetActive={handleSetActive}>Services</Link></li>
        <li><Link to="departments" smooth={true} duration={500} spy={true} active={activeSection === "departments"} onSetActive={handleSetActive}>Departments</Link></li>
        <li><Link to="doctors" smooth={true} duration={500} spy={true} active={activeSection === "doctors"} onSetActive={handleSetActive}>Doctors</Link></li>
        <li><Link to="contact" smooth={true} duration={500} spy={true} active={activeSection === "contact"} onSetActive={handleSetActive}>Contact</Link></li>
        <Link to="appointment" smooth={true} duration={500} spy={true}><button>Make an Appointment</button></Link>
      </ul>
    </nav>
      </div>
    </>
  );
}

export default Navbar;