import React from 'react';
import Logo from '.logo.png';
export default function Header() { 
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="logo/logo.png" alt="Logo" width="40" height="35" />
                    GIS pro
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100 d-flex justify-content-between">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Новости</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Услуги</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">О нас</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Проекты</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Достижения</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Реквизиты</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
