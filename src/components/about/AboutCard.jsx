import React from 'react';
import '../../assets/styles/about.css'; // Ensure the CSS is imported

const AboutCard = ({ image, badge, title }) => {
  return (
    <li className="card-item swiper-slide">
      <a href="#" className="card-link">
        <img src={image} alt="card Image" className="card-image" />
        <p className="badge">{badge}</p>
        <h2 className="card-title">{title}</h2>
      </a>
    </li>
  );
};

export default AboutCard;