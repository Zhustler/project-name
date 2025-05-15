// src/components/news/AboutClubSection.js
import React from 'react';

const AboutClubSection = () => {
  return (
    <section className="section-2">
      <div className="main">
        <img
          src="../photos/Screenshot_27-11-2024_172619_.jpeg"
          alt="photo"
        />
        <div className="about-text">
          <h1>MISSION DU CLUB</h1>
          <p className="text1">
            LA MISSION DU CLUB DE CINÉMA DE LA FACULTÉ DES SCIENCES BEN M'SIKE
            EST DE PROMOUVOIR{' '}
            <span className="highlight">LA CULTURE CINÉMATOGRAPHIQUE</span> ET
            D'AUTRES FORMES D'EXPRESSIONS ARTISTIQUES AUSEIN DE LA FACULTÉ, EN
            OFFRANT UNE PLATEFORME D'APPRENTISSAGE, DECRÉA ET D'ÉCHANGE. LE CLUB
            S'ENGAGE À ORGANISER DES ÉVÉNEMENTS VARIÉS, TELQUE DES PROJECTIONS DE
            FILMS, DES ATELIERS PRATIQUES, DES CONFÉRENCES, ET DES RENCONTRES AVEC
            DES PROFESSIONNELS DE L'INDUSTRIE, AFIN DES ENSIBILISER LES ÉTUDIANTS
            AUX DIFFÉRENTES FAC ET TES DU CINÉMA, MAIS AUSSI À D'AUTRES DOMAINES
            ARTISTIQUES COMPLÉMENTAIRES COMME LA PRODUCTION MUSICALE ET LE GRAPHIC
            DESIGN.
          </p>
        </div>
      </div>

      <div className="main2">
        <img
          src="../photos/WhatsApp Image 2024-11-27 at 20.40.13_94fb6d4e.jpg"
          alt="photo"
          className="image-2"
        />
        <div className="about-text2">
          <h1>HISTORIQUE DU CLUB</h1>
          <p>
            AU FIL DES ANNÉES, LE CLUB A ORGANISÉ DES PROJECTIONS RÉGULIÈRES DE
            FILMS, MAIS ÉGALEMENT DES ATELIERS DE RÉALISATION CINÉMATOGRAPHIQUE
            QUI ONT PERMIS AUX ÉTUDIANTS DE DÉVELOPPER DES COMPÉTENCES PRATIQUES EN
            MATIÈRE DE TOURNAGE, DE MONTAGE ET DE SCÉNARISATION. CES ATELIERS
            ONT ATTIRÉ UN GRAND NOMBRE DE PARTICIPANTS ET ONT ÉTÉ L OCCASION DE
            COLLABORER AVEC DES PROFESSIONNELS DU CINÉMA POUR OFFRIR UNE EXPÉRIENCE
            ENRICHISSANTE.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutClubSection;
