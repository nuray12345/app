import React from "react";
import {Fragment} from "react";
import "../CardFooter/CardFooter.sass";
export default function CardContent({ children }) {
    return (
        <>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                {children[0]} {/* First text with large font */}
            </p>
            <p style={{ fontSize: "14px" }}>
                {children[1]} {}
            </p>
        </>
    );
}
