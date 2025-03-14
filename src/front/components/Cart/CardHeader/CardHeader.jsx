import React from "react";
import "./CardHeader.sass";

const CardHeader = ({ imageSrc, altText }) => {
    return (
        <div className="card-header">
            <div className="card-header-image-container">
                <img src="/img/products/1.jpg" alt={altText} className="card-header-image" />
            </div>
        </div>
    );
};

export default CardHeader;
