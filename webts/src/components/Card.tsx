import React, { useState, FC } from 'react';
export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}
interface CardProps {
    width?: string;
    height?: string;
    variant?: CardVariant
    children?: React.ReactNode
    onCl?: (num: number)=>void
}
const Card: FC<CardProps> = ({ width, height, variant, children, onCl }) => {
    const [count, setCount] = useState(0)
    return (
        <div onClick={() =>{
            if (onCl) 
            {onCl(count)}
        }} 
        style={{ width, height, border: variant === CardVariant.outlined ? '1px solid black' : 'none', 
        background: variant === CardVariant.primary ? 'lightgray' : '' }}>
            {children}
        </div>
    );
};

export default Card;