import React from 'react';

export default function Content() { 
    const name = 'Logo';
    return (
        <div>
            {/* Навигация */}
           
            {/* Параллакс */}
            <div className="parallax-container">
                <div className="parallax-text">
                    <h2 className="parallax-title">Землеустройство и проектирование</h2>
                    <p>Понимание местоположения объектов — это ключ к эффективному проектированию и строительству.</p>
                </div>
            </div>
        
            {/* О нас */}
            <div className="about-block text-center">
                <h3 className="fw-bold mb-4">О нас</h3>
                <p>Мы создаем инновационные решения в области землеустройства и архитектурного проектирования, основываясь на многолетнем опыте и высоких стандартах качества.</p>
            </div>
        
            {/* Наши достижения */}
            <div className="about-block text-center">
                <h3 className="fw-bold mb-4">Наши достижения</h3>
                <div className="row">
                    <div className="col-md-4">
                        <i className="bi bi-clock-history font-gold fs-2"></i>
                        <h4>11 лет</h4>
                        <p>Опыт на рынке</p>
                    </div>
                    <div className="col-md-4">
                        <i className="bi bi-briefcase font-gold fs-2"></i>
                        <h4>100+</h4>
                        <p>Успешных проектов</p>
                    </div>
                    <div className="col-md-4">
                        <i className="bi bi-person-check font-gold fs-2"></i>
                        <h4>1200+</h4>
                        <p>Довольных клиентов</p>
                    </div>
                </div>
            </div>
        
            {/* Реквизиты */}
            <div className="about-block text-center requisites">
                <h3 className="fw-bold mb-4">Реквизиты</h3>
                <div className="row">
                    <div className="col-md-6 text-start">
                        <p><strong>Адрес:</strong> г. Бишкек, ул. Токтоналиева 4Б</p>
                        <p><strong>Email:</strong> admin@domain.com</p>
                        <p><strong>Телефон:</strong> +996 700 600 645</p>
                        <p><strong>Телефон:</strong> +996 700 600 645</p>
                        <p><strong>Телефон:</strong> +996 700 600 645</p>
                        <div className="social-buttons">
                            <a href="https://www.instagram.com" target="_blank" className="bi bi-instagram" style={{ fontSize: '2rem', color: '#f3b73d', marginRight: '15px' }}></a>
                            <a href="https://www.facebook.com" target="_blank" className="bi bi-facebook" style={{ fontSize: '2rem', color: '#f3b73d', marginRight: '15px' }}></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div id="map"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
