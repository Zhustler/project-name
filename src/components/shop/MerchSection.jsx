import React, { useEffect, useState, useRef } from 'react';

const MerchSection = () => {
  const [cards, setCards] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const allCards = JSON.parse(localStorage.getItem("cards")) || [];
    const merchCards = allCards.filter(card => card.category.toLowerCase() === "merch");
    setCards(merchCards);
  }, []);

  const scroll = (direction) => {
    if (!containerRef.current) return;
    const scrollAmount = 300;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    if (direction === 'left') {
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleBuy = (link) => {
    const message = `If you want to purchase this item, please fill out the required information in the provided Form.\n\nClick OK to proceed to the Form.`;
    if (window.confirm(message)) {
      window.open(link, '_blank');
    }
  };

  return (
    <section className="main-section">
      <h2 style={{ textAlign: 'center' }}>Merch</h2>
      {cards.length === 0 ? (
        <p>No items available in this category.</p>
      ) : (
        <>
            
          <div className="cards-wrapper" ref={containerRef} style={{ display: 'flex', overflow: 'hidden' }}>
            {cards.map((card, index) => (
                    <div  className="card-item">
              <div key={index} className="card">
                {card.image && <img src={card.image} alt={card.title} className="card-image" />}
                <div className="card-content">
                  <h3>{card.title}</h3>
                   
                  <div ><p className="priceshop"><strong>Price:</strong> {card.price} Dh</p></div>
                        <p className="stock-status"><strong>Stock:</strong> {card.stock}</p>
            <button
  className="buy-button1"
  onClick={() => handleBuy(card.link)}
  disabled={card.stock === 0}
>
  Buy Now
</button> </div>

             </div>
                </div>
             
            ))}
          </div>
          <div className="slider-controls">
            <button className="slider-button" onClick={() => scroll('left')}>&#10094;</button>
            <button className="slider-button" onClick={() => scroll('right')}>&#10095;</button>
          </div>
        </>
      )}
    </section>
  );
};

export default MerchSection;
