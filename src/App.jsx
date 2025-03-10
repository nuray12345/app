import Header from './front/components/Header/Header';
import Parallax from './front/components/Paralax/Paralax.jsx';
import { useState } from 'react';

export default function App() {
    const [content, setContent] = useState('Tap the button');

    const handleClick = (type) => {
        setContent(type); // ✅ Correct way to update state
    };

    return (
        <div>
            <Header handleClick={handleClick} />  {/* Pass handleClick as prop */}
            <Parallax/>
        </div>
    );
}
