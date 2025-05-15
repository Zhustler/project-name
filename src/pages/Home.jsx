// src/components/home/Home.js
import React from 'react';
import IntroVideo from '../components/home/IntroVideo'; // Importing IntroVideo component
import PopupVideo from '../components/home/PopupVideo'; // Importing PopupVideo component
import MainContent from '../components/home/MainContent'; // Importing MainContent component



import '../assets/styles/home.css'; 

const Home = () => {
  return (
    <div>
      <header>
        {/* Your header code if needed */}
      </header>

      <section>
        <IntroVideo />
      </section>

      <PopupVideo />

      <MainContent />
    </div>
  );
};

export default Home;
