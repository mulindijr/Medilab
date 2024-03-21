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
      
      </div>
    </>
  );
}

export default Navbar;