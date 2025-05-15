import React, { useState, useEffect } from 'react';

const AnnouncementSection = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fetch announcements from localStorage when the component mounts
    useEffect(() => {
        const storedAnnouncements = JSON.parse(localStorage.getItem("announcements")) || [];
        setAnnouncements(storedAnnouncements);
    }, []);

    // Delete announcement by index
    const deleteAnnouncement = (index) => {
        const updatedAnnouncements = announcements.filter((_, i) => i !== index);
        setAnnouncements(updatedAnnouncements); // Update the state to trigger a re-render
        localStorage.setItem("announcements", JSON.stringify(updatedAnnouncements)); // Update localStorage

        // Adjust the current index if necessary
        if (currentIndex >= updatedAnnouncements.length) {
            setCurrentIndex(0);
        }
    };

    // Handle next slide
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    };

    // Handle previous slide
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + announcements.length) % announcements.length);
    };

    // Render the current announcement
    const renderCurrentAnnouncement = () => {
        if (announcements.length === 0) {
            return <p>No announcements available.</p>;
        }

        const announcement = announcements[currentIndex];
        const categoryClass = announcement.category.toLowerCase().replace(/\s+/g, '-');

        return (
            <div className={`announcement-item ${categoryClass}`}>
                <div className="category">
                    <div className="category2">
                        <h3>{announcement.title}</h3>
                    </div>
                    <p><strong>Category:</strong> {announcement.category}</p>
                    <p>{announcement.description}</p>
                    <div className="category3">
                        <p>Link: <a href={announcement.link} target="_blank" rel="noopener noreferrer">{announcement.link}</a></p>
                    </div>
                    <button onClick={() => deleteAnnouncement(currentIndex)}>Delete</button>
                </div>
            </div>
        );
    };

    return (
        <section className="main-section">
            <h2>Annonces</h2>
            <div id="announcement-list" className="announcement-cards-container">
                {renderCurrentAnnouncement()}
            </div>
            <div className="slider-buttons">
                <button className="prev" id="prev-announcement-slide" onClick={handlePrev}>
                    &#10094;
                </button>
                <button className="next" id="next-announcement-slide" onClick={handleNext}>
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default AnnouncementSection;
