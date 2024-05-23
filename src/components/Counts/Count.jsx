import React from 'react';
import { FaFlask, FaAward } from "react-icons/fa";
import { FaRegHospital, FaUserDoctor } from "react-icons/fa6";
import './Count.css';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

function Count() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.5 // Trigger when 50% of the component is visible
  });

  return (
    <div className='count' ref={ref}>
      <div className='count-card'>
        <div className='count-icon-box'>
        <FaUserDoctor className='count-icon'/>
        </div>
        {inView && <CountUp end={85} duration={2} className='count-number' />}
        <p>Doctors</p>
      </div>        
      <div className='count-card'>
        <div className='count-icon-box'>
          <FaRegHospital className='count-icon'/>
        </div>        
        {inView && <CountUp end={18} duration={2} className='count-number' />}
        <p>Departments</p>
      </div>        
      <div className='count-card'>
        <div className='count-icon-box'>
          <FaFlask className='count-icon'/>
        </div>
        {inView && <CountUp end={12} duration={2} className='count-number' />}
        <p>Research Labs</p>
      </div>        
      <div className='count-card'>
        <div className='count-icon-box'>
          <FaAward className='count-icon'/>
        </div>
        {inView && <CountUp end={150} duration={2} className='count-number' />}
        <p>Awards</p>
      </div>        
    </div>
  );
}

export default Count;
