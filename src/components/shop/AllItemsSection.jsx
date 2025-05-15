import React, { useState, useEffect, useRef } from 'react';

const AllItemsSection = () => {
    const [cards, setCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current visible card index
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

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
    };

    // Handle the slider buttons' functionality
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 4, 0));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 4, cards.length - 4));
    };

    // Render card elements
    const renderCards = () => {
        if (cards.length === 0) {
            return <p>No cards available.</p>;
        }

        // Show only 4 cards at a time
        const visibleCards = cards.slice(currentIndex, currentIndex + 4);

        return visibleCards.map((card, index) => (
            <div key={index} className="card-item">
                <div className="card">
                    <img src={card.image} alt={card.title} className="card-image" />
                    <div className="card-content">
                        <h3>{card.title}</h3>
                        <div ><p className="priceshop"><strong>Price:</strong> {card.price} Dh</p></div>
                        <p className="stock-status"><strong>Stock:</strong> {card.stock}</p>
                        <div >{card.stock <= 0 ? "SOLD OUT" : ""}</div>
                        <button className="buy-button" data-link={card.link}>Buy Now</button>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <section className="main-section">
            <h2 align="center">Tous les articles</h2>
            <div className="slider-container">
                <div id="all-items-cards" className="cards-wrapper">
                    {renderCards()}
                </div>
                <div className="slider-controls">
                    <button
                        ref={prevButtonRef}
                        className="slider-button"
                        onClick={handlePrevClick}
                        disabled={currentIndex === 0} // Disable if at the start
                    >
                        &#10094;
                    </button>
                    <button
                        ref={nextButtonRef}
                        className="slider-button"
                        onClick={handleNextClick}
                        disabled={currentIndex >= cards.length - 4} // Disable if at the end
                    >
                        &#10095;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AllItemsSection;
