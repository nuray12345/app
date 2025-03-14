import React from "react";
import "./CardHeader.sass";

const CardHeader = ({ title, description }) => {
    return (
        <div className="card-header">
            <div className="card-header-image-container">
                <img src="/img/products/1.jpg" alt={title} className="card-header-image" />
            </div>
            <div className="card-header-info">
                <h2 className="card-header-title">{title}</h2>
                <p className="card-header-description">{description}</p>
            </div>
        </div>
    );
};

export default CardHeader;
