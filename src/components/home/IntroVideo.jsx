// src/components/home/IntroVideo.js
import React from 'react';

const IntroVideo = () => {
  return (
    <div id="intro-video" align="center">
      <video className="intro-video" autoPlay muted loop>
        <source src="/video/homevideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default IntroVideo;
