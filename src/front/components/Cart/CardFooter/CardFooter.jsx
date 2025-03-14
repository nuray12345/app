import React from "react";
import "./CardFooter.sass";

const CardFooter = ({ buttonText }) => {
    return (
        <div className="card-footer">
            <button className="card-footer-button">{buttonText}</button>
        </div>
    );
};

export default CardFooter;
