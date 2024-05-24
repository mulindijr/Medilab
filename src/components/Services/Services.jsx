import React from 'react'
import { FaWheelchair, FaHospitalUser, FaUserDoctor } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";

import './Services.css'

function Services() {
  return (
    <section id='services'>
        <h1>Services</h1>
        <p>Medilab offers comprehensive healthcare solutions designed to meet your needs. Our services encompass a wide range of medical specialties, including diagnostics, treatment, and ongoing care. From routine check-ups to advanced surgical procedures, we prioritize your health and well-being at every step.</p>

        <div className='service-card-section'>
            <div className='service-card'>
                <div className='service-icon-box'>
                <FaStethoscope className='service-icon'/>
                </div>
                <h2>Primary Care</h2>
                <p>Our primary care services focus on preventive care, routine check-ups, and managing common health concerns. We provide comprehensive assessments, vaccinations, and screenings to promote your overall well-being.</p>
            </div>
            <div className='service-card'>
                <div className='service-icon-box'>
                <FaHeartbeat className='service-icon'/>
                </div>
                <h2>Diagnostic Services</h2>
                <p>We offer a range of diagnostic services, including laboratory tests, imaging scans, and diagnostic procedures. Our state-of-the-art equipment and skilled technicians ensure accurate and timely results to guide your treatment plan.</p>
            </div>
            <div className='service-card'>
                <div className='service-icon-box'>
                <FaHospitalUser className='service-icon'/>
                </div>
                <h2>Surgical Services</h2>
                <p>Medilab provides advanced surgical interventions for various medical conditions. Our experienced surgical team utilizes minimally invasive techniques and innovative procedures to ensure optimal outcomes and faster recovery times.</p>
            </div>
            <div className='service-card'>
                <div className='service-icon-box'>
                <FaWheelchair className='service-icon'/>
                </div>
                <h2>Specialty Care</h2>
                <p>Medilab offers specialized medical care across various disciplines, including cardiology, neurology, orthopedics, and more. Our expert specialists provide advanced diagnostics, treatment, and management for complex health conditions.</p>
            </div>
            <div className='service-card'>
                <div className='service-icon-box'>
                <GiMedicines className='service-icon'/>
                </div>
                <h2>Chronic Disease Management</h2>
                <p>For patients with chronic health conditions such as diabetes, hypertension, and asthma, we offer comprehensive disease management programs. Our multidisciplinary approach focuses on education, lifestyle modifications, and medication management to improve quality of life..</p>
            </div>
            <div className='service-card'>
                <div className='service-icon-box'>
                <FaUserDoctor className='service-icon'/>
                </div>
                <h2>Wellness and Rehabilitation</h2>
                <p>We prioritize holistic wellness by offering services aimed at promoting physical, mental, and emotional well-being. This includes wellness screenings, nutritional counseling, mental health support, and rehabilitation services to help you achieve your health goals and recover from injuries or surgeries.</p>
            </div>
        </div>

    </section>
  )
}

export default Services