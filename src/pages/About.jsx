// src/pages/News.js
import React from 'react';
import AboutClubSection from '../components/about/AboutClubSection'; // Importing AboutClubSection component
import SwiperCard from '../components/about/SwiperCard'; // Importing SwiperCard component

import '../assets/styles/about.css'; // Ensure the CSS is imported

const News = () => {
  return (
    <div>
      <AboutClubSection /> {/* About the Club section */}
<SwiperCard /> {/* About the Club section */}
    </div>
  );
};

export default News;
