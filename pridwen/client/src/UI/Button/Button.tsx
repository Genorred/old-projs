import React from 'react';
import './button.css'
interface ButtonProps{
    params?: 'string',
    children: React.ReactNode
}
const Button = ({children, ...props}: ButtonProps) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};

export default Button;