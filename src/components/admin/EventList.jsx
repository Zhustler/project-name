import React, { useState, useEffect } from 'react';

const EventListSection = () => {
    const [events, setEvents] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fetch events from localStorage when the component mounts
    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
        setEvents(storedEvents);
    }, []);

    // Delete event by index
    const deleteEvent = (index) => {
        const updatedEvents = events.filter((_, i) => i !== index);
        setEvents(updatedEvents); // This will trigger a re-render
        localStorage.setItem("events", JSON.stringify(updatedEvents)); // Update localStorage

        // Adjust the current index if necessary
        if (currentIndex >= updatedEvents.length) {
            setCurrentIndex(0);
        }
    };

    // Handle next slide
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    };

    // Handle previous slide
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    };

    // Render the current event
    const renderCurrentEvent = () => {
        if (events.length === 0) {
            return <p>No events available.</p>;
        }

        const event = events[currentIndex];
        const categoryClass = event.category.toLowerCase().replace(/\s+/g, '-');

        return (
            <div className={`event-item ${categoryClass}`}>
              <div> <button onClick={() => deleteEvent(currentIndex)}>Delete</button></div>  
                <h3>{event.title}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Category:</strong> {event.category}</p>
               
            </div>
        );
    };

    return (
        <section className="main-section">
            <h2>Liste des événements</h2>
            <div className="event-cards-container">
                {renderCurrentEvent()}
            </div>
            <div className="slider-buttons">
                <button className="prev" id="prev-event-slide" onClick={handlePrev}>
                    &#10094;
                </button>
                <button className="next" id="next-event-slide" onClick={handleNext}>
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default EventListSection;
