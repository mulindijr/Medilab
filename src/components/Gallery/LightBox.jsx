import React, { useState, useEffect, useCallback } from 'react';
import { FaAngleLeft, FaAngleRight, FaTimes } from 'react-icons/fa';
import './LightBox.css';

const Lightbox = ({ images, selectedImage, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(selectedImage);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <div className='lightbox'>
      <div className='lightbox-content'>
        <button className='close-btn' onClick={onClose}><FaTimes /></button>
        <button className='prev-btn' onClick={handlePrev}><FaAngleLeft /></button>
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className='lightbox-image' />
        <button className='next-btn' onClick={handleNext}><FaAngleRight /></button>
      </div>
    </div>
  );
};

export default Lightbox;
