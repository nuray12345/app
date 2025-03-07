import './Button.sass';
import React from 'react';

// Правильный экспорт компонента
const Button = ({ children, onClick }) => {
    return (
        <button className='button active' onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
