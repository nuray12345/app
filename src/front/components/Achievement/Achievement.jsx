import React from 'react';
import './Achievement.css'; // Подключаем стили

const Achievement = () => {
  return (
    <div className="achievement-block text-center">
        <h3 className="fw-bold mb-4">Наши достижения</h3>
        <div className="achievement-row">
          <div className="achievement-item">
          <img src="/clock.png" alt="clock" />
            <h4 className="counter">11</h4>
            <p>Опыт на рынке</p>
          </div>
          <div className="achievement-item">
          <img src="bag.png" alt="bag" />
            <h4 className="counter">100</h4>
            <p>Успешных проектов</p>
          </div>
          <div className="achievement-item">
          <img src="PersonCheck.png" alt="person" />
            <h4 className="counter">1200</h4>
            <p>Довольных клиентов</p>
          </div>
        </div>
      </div>
  );
};

export default Achievement;