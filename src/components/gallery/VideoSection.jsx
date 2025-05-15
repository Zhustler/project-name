import React from 'react';

const VideoSection = () => {
  return (
    <div className="category">
      <h3 className="category-title">Nos Vidéos</h3>
      <div className="grid">
        <div className="gallery-item">
          <video width="100%" height="auto" controls>
            <source src="../photos/av1.mp4" type="video/mp4" />
            Votre navigateur ne prend pas en charge la balise vidéo.
          </video>
        </div>
        {/* Add more video items as needed */}
      </div>
    </div>
  );
};

export default VideoSection;
