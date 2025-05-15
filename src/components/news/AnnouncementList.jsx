// src/components/news/AnnouncementList.js
import React, { useState, useEffect } from 'react';

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Fetch announcements from localStorage or API
    const storedAnnouncements = JSON.parse(localStorage.getItem('announcements')) || [];
    setAnnouncements(storedAnnouncements);
  }, []);

  return (
        <section  class="main-section" id="announcements">
    <div id="announcements">
      <h2>Announcements</h2>
      <article id="announcement-list" className="announcement-cards-container1">
        {announcements.map((announcement, index) => (
          <div key={index} className={`announcement-item ${announcement.category.toLowerCase()}`}>
            <h3>{announcement.title}</h3>
            <p>{announcement.description}</p>
            <p><strong>By:</strong> {announcement.category}</p>
            <a href={announcement.link} target="_blank" rel="noopener noreferrer">More Info</a>
            
          </div>
        ))}
      </article>
    </div>
    </section>
  );
};

export default AnnouncementList;
