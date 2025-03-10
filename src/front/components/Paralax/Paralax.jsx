import React, { useEffect } from 'react';
import './Paralax.sass';
import './font.sass';
export default function Parallax() {
    useEffect(() => {
        const handleScroll = () => {
            const myDiv = document.getElementById('navbar');
            if (myDiv) {
                    if (window.scrollY > 100) {
                    myDiv.style.backgroundColor = '#343a40';
                    myDiv.setAttribute('data-bs-theme', 'dark');
                    myDiv.style.borderBottom = '1px solid rgba(125, 125, 135, 1.0)';
                } else {
                    myDiv.style.backgroundColor = 'transparent';
                    myDiv.setAttribute('data-bs-theme', 'dark');
                    myDiv.style.borderBottom = '0';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-container">
            {/* Параллакс с фоном */}
            <div className="parallax" style={{ backgroundImage: "url('/img/products/bg5.jpg')" }}>
                {/* Фон подгружается напрямую из public */}
            </div>

            {/* Текст на параллаксе */}
            <div className="parallax-text text-center fade-in ">
                <h2 className="parallax-title kanit-regular">
                    Землеустройство и архитектурно-конструкторское проектирование
                </h2>
                <h4 className="kanit-regular">
                    Все объекты имеют своё местоположение. Однако понимание того, почему
                    они находятся там, где они есть, - это совсем другая история.
                </h4>
            </div>
        </div>
    );
}
