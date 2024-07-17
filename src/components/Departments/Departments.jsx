import React, { useState } from 'react';
import './Departments.css';
import departmentsData from './DepartmentsData';

function Departments() {
  const [selectedDepartment, setSelectedDepartment] = useState(departmentsData[0]);

  return (
    <section id='departments'>
      <h1>Departments</h1>
      <p className='departments-p'>Medilab offers a diverse range of departments: Cardiology, Neurology, Hepatology, Pediatrics, and Eye Care, ensuring comprehensive healthcare services. Our specialized teams provide advanced diagnostics, treatments, and personalized care, promoting overall health and well-being.</p>
      <div className="departments-container">
        <ul className="departments-list">
          {departmentsData.map((department, index) => (
            <li 
              key={index} 
              onClick={() => setSelectedDepartment(department)}
              className={selectedDepartment.title === department.title ? 'active' : ''}
            >
              {department.title}
            </li>
          ))}
        </ul>

        <div className="department-details">
          {selectedDepartment && (
            <>
              <div className="department">
                <h2>{selectedDepartment.title}</h2>
                <em>{selectedDepartment.quote}</em>
                <p>{selectedDepartment.description}</p>
              </div>
              <div className='department-img'><img src={selectedDepartment.image} alt={selectedDepartment.title} /></div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Departments;
