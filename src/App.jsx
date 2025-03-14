import Header from './front/components/Header/Header';
import Parallax from './front/components/Paralax/Paralax.jsx';
import { useState } from 'react';
import Card from "./front/components/Cart/Cart/Card";
import {Fragment} from "react";

export default function App() {
    const [content, setContent] = useState('Tap the button');

    const handleClick = (type) => {
        setContent(type);
    };

    return (
        <>
            <Header handleClick={handleClick} />  {/* Pass handleClick as prop */}
            <Parallax/>
            <Card/>
        </>
    );
}
