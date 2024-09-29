import React, { useState, useEffect } from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook, FaBars, FaTimes } from 'react-icons/fa';
import { TfiEmail } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetActive = (to) => {
    setActiveSection(to);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Disable scrolling when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup when the component is unmounted or when the menu closes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

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
          <h3><Link to="home" smooth={true} duration={1500}>MEDILAB</Link></h3>
          <ul className={`navbar ${isMenuOpen ? 'navbar-open' : ''}`}>
            <li><Link to="home" smooth={true} duration={1500} spy={true} onSetActive={handleSetActive}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={1500} spy={true} offset={-90} onSetActive={handleSetActive}>About</Link></li>
            <li><Link to="services" smooth={true} duration={1500} spy={true} offset={-90} onSetActive={handleSetActive}>Services</Link></li>
            <li><Link to="departments" smooth={true} duration={1500} spy={true} offset={-70} onSetActive={handleSetActive}>Departments</Link></li>
            <li><Link to="doctors" smooth={true} duration={1500} spy={true} offset={-90} onSetActive={handleSetActive}>Doctors</Link></li>
            <li><Link to="contact" smooth={true} duration={1500} spy={true} offset={-90} onSetActive={handleSetActive}>Contact</Link></li>
          </ul>
          <div className='mobile-menu-container'>
            <Link to="appointment" smooth={true} duration={1500} spy={true} offset={-70}>
              <button className='appointment-btn'>Make an Appointment</button>
            </Link>
            <div className='menu-icon' onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
