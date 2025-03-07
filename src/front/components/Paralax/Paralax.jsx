import React from 'react';
import './Paralax.sass';  // Подключение стилей для параллакса

export default function Parallax() {
    return (
        <div className="parallax-container">
            {/* Параллакс с фоном */}
            <div className="parallax" style={{ backgroundImage: `url('/img/parallax.jpg')` }}>
                {/* Можно вставить картинку с использованием CSS */}
            </div>

            {/* Текст на параллаксе */}
            <div className="parallax-text text-center fade-in">
                <h2 className="parallax-title">Землеустройство и архитектурно-конструкторское проектирование</h2>
                <h4>Все объекты имеют своё местоположение. Однако понимание того, почему они находятся там, где они есть, - это совсем другая история.</h4>
            </div>
        </div>
    );
}
