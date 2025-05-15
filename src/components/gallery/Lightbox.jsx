import React, { useState } from 'react';

const Lightbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const openLightbox = (src) => {
    setImgSrc(src);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  return (
    <div id="lightbox" className={`lightbox ${isOpen ? 'open' : ''}`}>
      <span className="close" onClick={closeLightbox}>&times;</span>
      <img className="lightbox-content" src={imgSrc} alt="lightbox" />
    </div>
  );
};

export default Lightbox;
