import React from "react";
import CardHeader from "./CardHeader/CardHeader";
import './style.sass';

const Card = () => {
    const items = [
        {
            content: "1-karte",
            subtext: "Zusätzliche Info", // Новый текст
            footer: "Mehr erfahren",
        },
        {
            content: "Hier ist eine zweite Karte.",
            subtext: "Noch mehr Details",
            footer: "data",
        },
        {
            content: "Und noch eine dritte Karte.",
            subtext: "Letzte Zusatzinfo",
            footer: "Mehr erfahren",
        },
    ];

    return (
        <div className="cards-container">
            {items.map((item, index) => (
                <div className="card" key={index}>
                    <CardHeader imageSrc="/img/products/bg5.jpg" altText={`Produkt ${index + 1}`} />
                    <IndexCard content={item.content} subtext={item.subtext} footer={item.footer} />
                </div>
            ))}
        </div>
    );
};

const IndexCard = ({ content, subtext, footer }) => {
    return (
        <div className="card-content">
            <p className="card-text">{content}</p>
            <p className="card-subtext">{subtext}</p>
            <span className="card-footer-text">{footer}</span>
        </div>
    );
};


export default Card;
