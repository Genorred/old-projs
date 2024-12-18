import React from 'react';
import Input from "../../../../UI/Input/Input";
import Button from "../../../../UI/Button/Button";
import './loginForm.css'

const LoginForm = () => {
    const submitHandler = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='form-container'>
                <div className='inputs'>
                    <Input type='text' placeholder='write the name'/>
                    <Input type='password' placeholder='write the password'/>
                </div>
                <Button>Submit</Button>
            </div>
        </form>
    );
};

export default LoginForm;