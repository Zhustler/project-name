import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    "../photos/a5.jpg","../photos/a2.jpg","../photos/a1.jpg", 
    "../photos/a6.jpg","../photos/b8.jpg","../photos/b1.jpg",
    "../photos/a5.jpg","../photos/a2.jpg","../photos/a1.jpg",
    "../photos/a6.jpg","../photos/b8.jpg","../photos/b1.jpg",
    "../photos/b5.jpg","../photos/b2.jpg","../photos/z1.jpg",
    "../photos/z2.jpg","../photos/z6.jpg","../photos/z7.jpg",
                   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000); // Automatic slide change every 7 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section>
      <h2>POINTS FORTS DES ÉVÉNEMENTS</h2>
    <div className="gallery-section slideshow">
      
      
      <div className="carousel">
        <div className="slides" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
          {slides.map((src, index) => (
            <img key={index} src={src} alt={`Slideshow Image ${index + 1}`} />
          ))}
        </div>
        <button className="prev" onClick={() => setSlideIndex((slideIndex - 1 + slides.length) % slides.length)}>❮</button>
        <button className="next" onClick={() => setSlideIndex((slideIndex + 1) % slides.length)}>❯</button>
      </div>
    </div>
    </section>
  );
};

export default Slideshow;
