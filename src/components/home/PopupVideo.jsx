import React, { useRef, useState, useEffect } from 'react';

const IntroPopupVideo = () => {
  const [showPopup, setShowPopup] = useState(true); // show popup immediately
  const videoRef = useRef(null);
  const homepageRef = useRef(null);

  useEffect(() => {
    if (showPopup && videoRef.current) {
      const video = videoRef.current;

      const handleVideoEnd = () => {
        setShowPopup(false); // Hide popup
        if (homepageRef.current) {
          homepageRef.current.style.display = 'block'; // Show homepage
        }
      };

      video.addEventListener('ended', handleVideoEnd);

      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [showPopup]);

  return (
    <div>
      {/* Homepage Content (initially hidden) */}
      <div id="homepage" ref={homepageRef} style={{ display: showPopup ? 'none' : 'block' }}>
       
        {/* Add your homepage content here */}
      </div>

      {/* Popup Video */}
      {showPopup && (
        <div id="video-popup" className="popup">
          <div className="popup-content">
            <video ref={videoRef} autoPlay muted className="popup-video">
              <source src="/video/exporttt.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroPopupVideo;
