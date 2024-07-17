import React, { useState } from 'react'
import './Appointment.css'

function Appointment() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        department: '',
        doctor: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data:', formData);
      };
  return (
    <section id='appointment'>
      <div className='appointment'>
        <h1>Make an Appointment</h1>
        <p>At Medilab, your health and convenience are our top priorities. Scheduling an appointment with our expert healthcare providers is simple and hassle-free.Contact us today to book your appointment and experience the exceptional care and attention that Medilab is known for.</p>
    
        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className='form-flex'>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                required
              />
            </div>
          </div>
    
          <div className='form-flex'>
            <div className="form-group">
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Appointment Date"
                required
              />
            </div>
            <div className="form-group">
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="1">Cardiology</option>
                <option value="2">Neurology</option>
                <option value="3">Hepatology</option>
                <option value="4">Pediatrics</option>
                <option value="5">Eye Care</option>
              </select>
            </div>
            <div className="form-group">
              <select
                id="doctor"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
              >
                <option value="">Select Doctor</option>
                <option value="1">Doctor 1</option>
                <option value="2">Doctor 2</option>
                <option value="3">Doctor 3</option>
              </select>
            </div>
          </div>        
          
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message (Optional)"
            />
          </div>
          <button type="submit">Make an Appointment</button>
        </form>

      </div>
      
    </section>
  )
}

export default Appointment