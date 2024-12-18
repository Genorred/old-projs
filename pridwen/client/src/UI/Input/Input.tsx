import React from 'react';
import './input.css'
interface InputProps{
    params: 'string',
}
const Input = ({...params}) => {
    return (
        <input {...params}/>
    );
};

export default Input;