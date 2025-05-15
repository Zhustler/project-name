import React from 'react';
import Slideshow from '../components/gallery/Slideshow';
import GridSection from '../components/gallery/GridSection';
import VideoSection from '../components/gallery/VideoSection';
import Lightbox from '../components/gallery/Lightbox';
import '../assets/styles/gallery.css';
const Gallery = () => {
  return (
    <section>
      <Slideshow />
      <GridSection />
      <VideoSection />
      <Lightbox />
    </section>
  );
};

export default Gallery;
