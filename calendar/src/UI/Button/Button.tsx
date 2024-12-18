import React from 'react';
import './Button.css'
interface ButtonProps{
    props?: {}
    children?: React.ReactNode
}
const Button = ({children, props}: ButtonProps) => {
    return (
        <button {...props} className='button'>
            {children}
        </button>
    );
};

export default Button;