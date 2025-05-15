import React, { useState, useEffect, useRef } from 'react';

const TicketsSection = () => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("cards")) || [];
    const filtered = storedCards.filter(card => card.category.toLowerCase() === "tickets");
    setCards(filtered);
  }, []);

  const updateCardStock = (index, newStock) => {
    const updatedCards = [...cards];
    updatedCards[index].stock = newStock;
    setCards(updatedCards);
    // Optional: Save the updated stock back to localStorage if needed
    const allCards = JSON.parse(localStorage.getItem("cards")) || [];
    const updatedAllCards = allCards.map(card =>
      card.title === updatedCards[index].title ? { ...card, stock: newStock } : card
    );
    localStorage.setItem("cards", JSON.stringify(updatedAllCards));
  };

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 4, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 4, cards.length - 4));
  };

  const renderCards = () => {
    if (cards.length === 0) {
      return <p>No items available in this category.</p>;
    }

    const visibleCards = cards.slice(currentIndex, currentIndex + 4);

    return visibleCards.map((card, index) => (
      <div key={index} className="card-item">
        <div className="card">
          {card.image && <img src={card.image} alt={card.title} className="card-image" />}
          <div className="card-content">
            <h3>{card.title}</h3>
            <div><p className="priceshop"><strong>Price:</strong> {card.price} Dh</p></div>
            <p className="stock-status"><strong>Stock:</strong> {card.stock}</p>
            {card.stock === 0 && <p className="sold-out">Sold Out</p>}
            <button
              className="buy-button"
              data-link={card.link}
              disabled={card.stock === 0}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="main-section">
      <h2 style={{ textAlign: 'center' }}>Billets</h2>
      <div className="slider-container">
        <div id="tickets-cards" className="cards-wrapper">
          {renderCards()}
        </div>
        <div className="slider-controls">
          <button
            ref={prevButtonRef}
            className="slider-button"
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
          >
            &#10094;
          </button>
          <button
            ref={nextButtonRef}
            className="slider-button"
            onClick={handleNextClick}
            disabled={currentIndex >= cards.length - 4}
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
