import React from 'react'
import doctors from '../../assets/about.jpg'
import { RiTeamFill } from "react-icons/ri";
import { HiMiniFingerPrint } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import Count from '../../components/Counts/Count';
import './About.css'

function About() {
  return (
    <section id='about'>
      <h3>About Medilab</h3>
      <div className='about-body'>
        <div className='about-left'>
            <img src={doctors} alt="doctors" />
        </div>
        <div className='about-right'>
          <p>At Medilab, we are committed to providing exceptional healthcare services tailored to meet the diverse needs of our patients. With a legacy of excellence spanning decades, we have established ourselves as a trusted name in the healthcare industry.</p>
          <div className='about-content'>
            <div className='icon-box'>
              <RiTeamFill className='about-icon'/>
            </div>
            <div>
              <h4>Our Team</h4>
              <p>At Medilab, our team consists of highly skilled and compassionate healthcare professionals who are dedicated to providing the best possible care to our patients. From our experienced physicians to our caring support staff, everyone at Medilab plays a vital role in our commitment to excellence.</p>
            </div>

          </div>
          <div className='about-content'>
            <div className='icon-box'>
              <HiMiniFingerPrint className='about-icon'/>
            </div>

            <div>
              <h4>Our Facilities</h4>
              <p>We take pride in our state-of-the-art facilities, equipped with the latest technology and designedto ensure patient comfort and safety. From advanced diagnostic tools to modern treatment options, our facilities are equipped to meet the diverse needs of our patients.</p>
            </div>

          </div>
          <div className='about-content'>
            <div className='icon-box'>
              <FaPhoneAlt className='about-icon'/>
            </div>
            <div>
              <h4>Get in Touch</h4>
              <p>For more information about our services or to schedule an appointment, please contact us today. We look forward to serving you and your family with the highest standard of care.</p>
            </div>
          </div>
        </div>
      </div>
      <Count />
    </section>    
  )
}

export default About