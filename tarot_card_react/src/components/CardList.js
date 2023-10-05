// src/components/CardList.js
import React, { useState, useEffect } from 'react';
import { fetchAllCards } from '../api';

const CardList = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchAllCards().then(response => {
            setCards(response.data);
        }).catch(error => {
            console.error("Error fetching cards:", error);
        });
    }, []);

    return (
        <div>
            {cards.map(card => (
                <div key={card.id}>
                    <h3>{card.name}</h3>
                    <p>{card.description}</p>
                    <p>{card.reversed}</p>
                </div>
            ))}
        </div>
    );
}

export default CardList;
