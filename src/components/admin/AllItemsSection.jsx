import React, { useState, useEffect } from 'react';

const AllItemsSection = () => {
    const [cards, setCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fetch cards from localStorage when the component mounts
    useEffect(() => {
        const storedCards = JSON.parse(localStorage.getItem("cards")) || [];
        setCards(storedCards);
    }, []);

    // Update card stock in state and localStorage
    const updateCardStock = (index, newStock) => {
        const updatedCards = [...cards];
        updatedCards[index].stock = newStock;
        updatedCards[index].stockStatus = newStock <= 0 ? "SOLD OUT" : "";
        setCards(updatedCards);
        localStorage.setItem("cards", JSON.stringify(updatedCards));
    };

    // Delete card by index
    const deleteCard = (index) => {
        const updatedCards = cards.filter((_, i) => i !== index);
        setCards(updatedCards);
        localStorage.setItem("cards", JSON.stringify(updatedCards));

        // Adjust the current index if necessary
        if (currentIndex >= updatedCards.length) {
            setCurrentIndex(0);
        }
    };

    // Handle next slide
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    // Handle previous slide
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    // Render the current card
    const renderCurrentCard = () => {
        if (cards.length === 0) {
            return <p>No cards available.</p>;
        }

        const card = cards[currentIndex];

        return (
            <div className="card-item">
                <div className="card">
                    <img src={card.image} alt={card.title} className="card-image" />
                    <div className="card-content">
                        <h3>{card.title}</h3>
                        <p className="price"><strong>Price:</strong> {card.price} Dh</p>
                        <p className="stock-status"><label><strong>Stock:</strong></label></p>
                        <input
                            type="number"
                            value={card.stock}
                            className="stock-input"
                            onChange={(e) => updateCardStock(currentIndex, parseInt(e.target.value, 10))}
                        />
                        <p className="stock-status">{card.stock <= 0 ? "SOLD OUT" : ""}</p>
                        <button className="delete-button" onClick={() => deleteCard(currentIndex)}>Delete</button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="main-section">
            <h2 align="center">Tous les articles</h2>
            <div className="slider-container">
                <div id="all-items-cards" className="cards-wrapper">
                    {renderCurrentCard()}
                </div>
            </div>
            <div className="slider-controls">
                <button className="slider-button prev" onClick={handlePrev}>
                    &#10094;
                </button>
                <button className="slider-button next" onClick={handleNext}>
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default AllItemsSection;
