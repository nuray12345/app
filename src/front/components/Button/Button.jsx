import './Button.sass';
import React from 'react';

const Button = ({ children, onClick }) => {
    return (
        <button className='button active' onClick={onClick}>
            {children}
        </button>
    );
};
export default Button;
