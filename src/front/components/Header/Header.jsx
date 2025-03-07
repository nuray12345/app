import React from 'react';
import Button from '../Button/Button';
import './Header.sass';

export default function Header() {
    // Объявляем функцию handleClick
    const handleClick = (type) => {
        console.log(type); // Можешь заменить на нужную логику
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    {/* Логотип загружается из папки public */}
                    <img src="/logo.png" alt="Logo" width="40" height="35" />
                    GIS pro
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100 d-flex justify-content-between">
                        <li className="nav-item">
                            <Button onClick={() => handleClick('news')}>Новости</Button>
                        </li>
                        <li className="nav-item">
                            <Button onClick={() => handleClick('services')}>Услуги</Button>
                        </li>
                        <li className="nav-item">
                            <Button onClick={() => handleClick('about')}>О нас</Button>
                        </li>
                        <li className="nav-item">
                            <Button onClick={() => handleClick('projects')}>Проекты</Button>
                        </li>
                        <li className="nav-item">
                            <Button onClick={() => handleClick('achievements')}>Достижения</Button>
                        </li>
                        <li className="nav-item">
                            <Button onClick={() => handleClick('details')}>Реквизиты</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
