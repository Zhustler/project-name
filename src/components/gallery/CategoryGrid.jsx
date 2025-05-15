import React from 'react';

const CategoryGrid = ({ category }) => {
  return (
    <div className="category">
      <h3 className="category-title">{category.title}</h3>
      <div className="grid">
        {category.images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={`../photos/${image}`} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
