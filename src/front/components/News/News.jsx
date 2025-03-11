import React from 'react';
import './News.css';


const Card = ({ title, image, description }) => {
    return (
      
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
        <div className="card-overlay">
          <p className="card-description">{description}</p>
        </div>
      </div>
    );
  };
  
  const CardSection = () => {
    const cards = [
      {
        title: "Карточка 1",
        image: "/img/products/1.jpg",
        description: "Описание первой карточки."
      },
      {
        title: "Карточка 2",
        image: "/img/products/bg5.jpg",
        description: "Описание второй карточки."
      },
      {
        title: "Карточка 3",
        image: "/img/products/1.jpg",
        description: "Описание третьей карточки."
      }
    ];
  
    return (
      <div className="card-section">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default CardSection;