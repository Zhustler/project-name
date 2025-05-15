// src/components/home/MainContent.js
import React from 'react';

const MainContent = () => {
  return (
    <section className="main-content"><div>
      <article className="image-section">
        <img src="../photos/m1.jpg" alt="Club Cinema Team" />
      </article></div>
      <article className="text-section">
       <h1>
         <b> WE SPEAK ART
          <br />
          WE ARE CINEMA</b>
        </h1>
        <p>
          Le Club Cinema de la Faculté des Sciences Ben M'Sik est un espace
          <br /> vibrant et créatif dédié à tous les passionnés du 7e art. Animés
          par un <br /> amour profond du cinéma, nous nous efforçons de promouvoir
          <br /> la richesse et la diversité de cet art à travers des projections,
          des débats et des ateliers. Notre club est un lieu <br /> d’échange et de
          découverte où l’imaginaire et la créativité <br /> sont à l’honneur,
          permettant à chacun d’explorer, <br /> d’apprendre et de s'inspirer de
          l’univers cinématographique. <br /> Rejoignez-nous pour vivre pleinement
          la magie du cinéma et <br /> participer à des projets qui célèbrent l'art
          sous toutes ses formes.
        </p>
        <a
          href="https://chat.whatsapp.com/BTGvcigoLMVH3OH3zhIpQB"
          className="cta-button"
        >
          Join the Team Now
        </a>
      </article>
    </section>
  );
};

export default MainContent;
