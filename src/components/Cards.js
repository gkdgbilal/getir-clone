import React, { useState, useEffect } from 'react';
import cardsData from 'api/cards';

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-x-4">
      {cards.length &&
        cards.map(card => (
          <div
            className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center"
            style={{
              padding: 56
            }}
          >
            <img
              style={{
                marginBottom: '1.5rem'
              }}
              src={card.image}
              alt={card.title}
            />
            <h6 className="font-semibold text-lg text-primary-brand-color">
              {card.title}
            </h6>
            <p className="mt-2 text-sm text-gray-700">{card.description}</p>
          </div>
        ))}
    </div>
  );
}

export default Cards;
