import { useState } from 'react';
import Header from './front/components/Header/Header';
import Parallax from './front/components/Paralax/Paralax.jsx';
import News from './front/components/News/News.jsx';
import Services from './front/components/Services/Services.jsx'
import About from './front/components/AboutUs/About.jsx'
import Projects from './front/components/Projects/Projects.jsx';
import Achievement from './front/components/Achievement/Achievement.jsx';


export default function App() {
    const [content, setContent] = useState('Tap the button');

    const handleClick = (type) => {
        setContent(type); // ✅ Correct way to update state
    };

    return (
        <div>
            <Header handleClick={handleClick} />  {/* Pass handleClick as prop */}
            <Parallax/>
            <News/>
            <Services/>
            <About/>
            <Projects/>
            <Achievement/>
        </div>
    );
}
