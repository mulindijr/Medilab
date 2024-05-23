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
           
    </div>
  );
}

export default Count;
