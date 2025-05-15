import React from 'react';
import CategoryGrid from './CategoryGrid';

const categories = [
  { title: "MEMBRE DE BUREAU", images: ["m1.jpg", "m2.jpeg", "m3.jpeg", "m4.jpeg", "m5.jpeg"] },
  { title: "ZOUBIR", images: ["z1.jpg", "z2.jpg", "z3.jpg", "z4.jpg", "z5.jpg"] },
  { title: "Animaux", images: ["b8.jpg", "b9.jpg", "b11.jpg", "b12.jpg", "b1.jpg"] },
  { title: "SAID KHALLAF", images: ["a1.jpg", "a2.jpg", "a4.jpg", "a5.jpg", "a6.jpg"] }
];

const GridSection = () => {
  return (
    <div className="gallery-section">
      <h2>Grille de la Galerie</h2>
      {categories.map((category, index) => (
        <CategoryGrid key={index} category={category} />
      ))}
    </div>
  );
};

export default GridSection;
