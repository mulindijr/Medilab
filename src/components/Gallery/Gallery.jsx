import React, { useState } from 'react';
import galleryData from './GalleryData';
import Lightbox from './LightBox';
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id='gallery'>
      <h1>Gallery</h1>
      <p className='gallery-p'>Explore our gallery to see the advanced facilities and technologies we use at Medilab. Our state-of-the-art equipment and comfortable patient rooms ensure you receive the best care possible.</p>
      <div className='gallery-container'>
        {galleryData.map((image, index) => (
          <div key={index} onClick={() => openLightbox(index)}>
            <div className='gallery-image-container'>
              <img src={image.src} alt={image.alt} className='gallery-image' />
            </div>
          </div>
        ))}
      </div>
      {selectedImage !== null && (
        <Lightbox
          images={galleryData}
          selectedImage={selectedImage}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
};

export default Gallery;
