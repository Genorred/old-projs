import React from 'react';
interface InputProps{
    props?: {}
    children?: React.ReactNode
}
const Input = ({props}: InputProps) => {

    return (
        <input {...props} />
    );
};

export default Input;