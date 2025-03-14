import React from "react";
import CardHeader from "../CardHeader/CardHeader";
import CardFooter from "../CardFooter/CardFooter";
import './style.sass'
import CardContent from "../CardContent/CardContent";

const Card = () => {
    const items = [
        {
            content: "Dies ist die erste Karte.",
            footer: "Mehr erfahren",
        },
        {
            content: "Hier ist eine zweite Karte.",
            footer: "Mehr erfahren",
        },
        {

            content: "Und noch eine dritte Karte.",
            footer: "Mehr erfahren",
        },
    ];

    return (
        <div className="cards-container">
            {items.map((item, index) => (
                <div className="card" key={index}>
                     <CardHeader imageSrc="/img/products/bg5.jpg" altText="Produkt 1" />
                    <CardContent>
                        {"This is the large text"}
                        {"This is the small text"}
                    </CardContent>
                    <CardFooter footerContent={item.footer} />
                </div>
            ))}
        </div>
    );
};

export default Card;
