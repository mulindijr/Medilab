import React, { useState, useEffect, useCallback } from 'react';
import { FaAngleLeft, FaAngleRight, FaTimes } from 'react-icons/fa';
import './LightBox.css';

const Lightbox = ({ images, selectedImage, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(selectedImage);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    setCurrentIndex(selectedImage);
  }, [selectedImage]);

  useEffect(() => {
    // Prevent body scroll when lightbox is active
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // Restore body scroll when lightbox is closed and remove event listener
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePrev, handleNext, onClose]);

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
