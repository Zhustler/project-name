import React, { useEffect, useState } from 'react';

const ContactFormSubmissionsSection = () => {
    const [messages, setMessages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
        setMessages(storedMessages);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length);
    };

    return (
        <section className="main-section">
            <h2>Soumissions du formulaire de contact</h2>
            <div id="message-list" className="message-cards-container">
                {messages.length === 0 ? (
                    <p>No messages available.</p>
                ) : (
                    <div className="message-card">
                        <p><strong>Name:</strong> {messages[currentIndex].name}</p>
                        <p><strong>Email:</strong> {messages[currentIndex].email}</p>
                        <p><strong>Message:</strong> {messages[currentIndex].message}</p>
                        <p><strong>Code Apogée:</strong> {messages[currentIndex].codeapogee}</p>
                    </div>
                )}
            </div>
            {messages.length > 1 && (
                <div className="slider-buttons">
                    <button className="prev" id="prev-message-slide" onClick={handlePrev}>
                        &#10094;
                    </button>
                    <button className="next" id="next-message-slide" onClick={handleNext}>
                        &#10095;
                    </button>
                </div>
            )}
        </section>
    );
};

export default ContactFormSubmissionsSection;