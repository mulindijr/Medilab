import React from 'react'
import doctorsData from './DoctorsData'; 
import './Doctors.css'

function Doctors() {
  return (
    <section id='doctors'>
      <h1>Doctors</h1>
      <p className='doctors-p'>Doctors at Medilab are dedicated professionals offering exceptional healthcare services. Specializing in various fields, they ensure comprehensive patient care. With access to advanced medical technology and ongoing professional development, Medilab doctors diagnose and treat diverse medical conditions. Their patient-centered approach ensures personalized and effective treatment, fostering a supportive healing environment.</p>

      <div className='card'>
        {doctorsData.map((doctor, index) => (
          <div key={index} className='doctors-card'>
            <div className='img-container'>
              <img src={doctor.Image} alt={doctor.Name} />
            </div>
            <div className='doctors-card-details'>
              <h2>{doctor.Name}</h2>
              <em>{doctor.Title}</em>
              <p>{doctor.Description}</p>
              <div className="social-media-icons">
                {doctor.SocialMedia.map((social, idx) => (
                  <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className='social-icon'/>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>  


    </section>
  )
}

export default Doctors;