import React, { useState } from 'react';
import { FaMapMarkerAlt} from 'react-icons/fa';
import { TfiEmail } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id='contact'>
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Whether you have questions, feedback, or concerns, our team is here to assist   you. Please feel free to reach out to us using the contact form below. For a more personal touch, you can also  visit our office at the address shown on the map. We look forward to connecting with you and providing the   support you need.
      </p>
      <div className='map-container'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0169788218373!2d36.961706974044866!3d-1.1483576354889946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4750be919635%3A0x6fa1a091d62c885c!2sKimtech%20properties!5e0!3m2!1sen!2ske!4v1721428135636!5m2!1sen!2ske"
          width="100%"
          height="430"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map of Kimtech Properties, Ruiru"
        ></iframe>
      </div>
      <div className='contact-details'>
        <div className="contact-info">
          <div className="info-item">
          <div className='icon-box'>
              <FaMapMarkerAlt className='contact-icon'/>
            </div>
            <div>
              <h2>Location:</h2>
              <span>C63 Kimtech Properties, Ruiru, Kenya</span>
            </div>
          </div>
          <div className="info-item">
            <div className='icon-box'>
              <TfiEmail className='contact-icon'/>
            </div>
            <div>
              <h2>Email:</h2>
              <a href="mailto:mulindijrn@gmail.com">
                contact@medilab.com
              </a>
            </div>
          </div>
          <div className="info-item">
          <div className='icon-box'>
              <BsPhone className='contact-icon'/>
            </div>
            <div>
              <h2>Call:</h2>
              <span>(713) 62-1330</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='contact-form'>

          <div  style={{display:'flex', gap:'10px'}}>
            <input
              style={{width:'100%'}}
              placeholder='Your Name'
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              style={{width:'100%'}}
              placeholder='Your Email'
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            style={{width:'97%'}}
            placeholder='Subject'
            type='text'
            id='subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            placeholder='Message'
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows='4'
            required
          ></textarea>

          <button type='submit'>Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
