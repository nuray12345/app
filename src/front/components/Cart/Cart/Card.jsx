import React from "react";
import CardHeader from "../CardHeader/CardHeader";
import CardFooter from "../CardFooter/CardFooter";
import './style.sass'

const Card = () => {
    const items = [
        {
            title: "Karte 1",
            content: "Dies ist die erste Karte.",
            footer: "Mehr erfahren",
        },
        {
            title: "Karte 2",
            content: "Hier ist eine zweite Karte.",
            footer: "Mehr erfahren",
        },
        {
            title: "Karte 3",
            content: "Und noch eine dritte Karte.",
            footer: "Mehr erfahren",
        },
    ];

    return (
        <div className="cards-container">
            {items.map((item, index) => (
                <div className="card" key={index}>
                    <CardHeader title={item.title} />
                    <div className="card-content">{item.content}</div>
                    <CardFooter footerContent={item.footer} />
                </div>
            ))}
        </div>
    );
};

export default Card;
