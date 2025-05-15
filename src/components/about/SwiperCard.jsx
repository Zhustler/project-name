import React, { useState } from 'react';

const members = [
  {
    name: 'ABDELLAH RAFIK',
    role: "Chef d'organisation et étudiant en 2ᵉ année de licence en développement informatique.",
    img: '/photos/WhatsApp Image 2024-11-30 at 00.00.08_4484c7fc.jpg'
  },
  {
    name: 'HAJAR CHEQROUNE',
    role: 'Secrétaire générale du club et étudiante en 1ʳᵉ année de licence en électronique, systèmes embarqués et télécommunications.',
    img: '/photos/hajar.jpeg'
  },
  {
    name: 'SOUFIANE HAWDI',
    role: 'Chef de sponsoring et étudiant en 2ᵉ année de licence en développement informatique.',
    img: '/photos/soufiane-haoudi.jpeg'
  },
  {
    name: 'ABDELHAMID EL BOUHMADI',
    role: 'Chef de communication et étudiant en 2ᵉ année de licence en développement informatique.',
    img: '/photos/abdelhamid.jpeg'
  },
  {
    name: 'SOUFIANE TABIT',
    role: 'Régisseur technique et étudiant en 1ʳᵉ année de licence en développement informatique.',
    img: '/photos/soufiane-tbt.jpeg'
  }
];

const MembersSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length);
  };

  return (
    <section className="welcome-message">
      <div className="name">
        <h1>Notre Membres bureau :</h1>
      </div>

      <div className="container">
        <div className="card-wrapper">
          <ul className="card-list">
            <li className="card-item">
              <a href="#" className="card-link">
                <img src={members[currentIndex].img} alt={members[currentIndex].name} className="card-image" />
                <p className="badge">{members[currentIndex].name}</p>
                <h2 className="card-title">{members[currentIndex].role}</h2>
              </a>
            </li>
          </ul>

          <div className="slider-controls">
            <button onClick={prevSlide} className="swiper-button-prev">‹</button>
            <button onClick={nextSlide} className="swiper-button-next">›</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersSlider;
