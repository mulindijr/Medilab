import React from 'react'
import { Link } from 'react-scroll';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import './Home.css'

function Home() {
  return (
    <section id='home'>
      <div className='hero-bg'>
        <div className='hero-content'>
          <h1>WELCOME TO MEDILAB</h1>
          <p>Medilab: Where Compassionate Care Meets Cutting-Edge Medicine</p>
          <Link to="about" smooth={true} duration={500} spy={true} offset={-90}><button>Get Started</button></Link> 
        </div>
        
      </div>
      <div className='hero-cards-container'>
        <div className='why-medilab'>
          <h1>Why Choose Medilab?</h1>
          <p>With a rich legacy of medical expertise spanning decades, we provide comprehensive, patient-centered care tailored to your individual needs. Our multidisciplinary team of dedicated healthcare professionals delivers compassionate support and cutting-edge treatments in our state-of-the-art facilities. We prioritize your well-being above all else, ensuring that you receive the highest quality care in a safe and comfortable environment.</p>
          <Link to="about" smooth={true} duration={500} spy={true}><button>Learn More<MdKeyboardArrowRight className='arrow-right' /></button></Link>
        </div>
        <div className='hero-cards'>
          <div className='hero-cards-icons'><MdHealthAndSafety /></div>
          <h3>Mission</h3>
          <p>Our mission is to provide accessible, high-quality healthcare services to our community. We are committed to delivering compassionate care, utilizing innovative technologies, and fostering a culture of continuous improvement.</p>
        </div>
        <div className='hero-cards'>
          <div className='hero-cards-icons'><MdHealthAndSafety /></div>
          <h3>Vision</h3>
          <p>Our vision is to be a leader in healthcare excellence, recognized for our unwavering commitment to patient-centered care, clinical innovation, and community engagement.</p>
        </div>
        <div className='hero-cards'>
          <div className='hero-cards-icons'><MdHealthAndSafety /></div>
          <h3>Motto</h3>
          <p>Care Beyond Measure</p>
        </div>
      </div>
    </section>
  )
}

export default Home