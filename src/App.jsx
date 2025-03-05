import Header from './front/components/Header/Header';
import Content from './front/components/Content';  
import { useState } from 'react';

export default function App() {
    const [content, setContent] = useState('Tap the button');

    const handleClick = (type) => {
        setContent(type); // ✅ Correct way to update state
    };

    return (
        <div>
            <Header handleClick={handleClick} />  {/* Pass handleClick as prop */}
            <Content />
        </div>
    );
}
