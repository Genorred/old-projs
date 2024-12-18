import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {setAge, setName} from '../../../store/reducers/loginReducer'
import '../Login.css'

const LoginForm = () => {
    const nameRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const submitLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(ageRef.current?.value !== '' && nameRef.current?.value !== '')
        dispatch(setAge(Number(ageRef.current?.value)))
        dispatch(setName(String(nameRef.current?.value)))
    }
    return (
        <div>
            <h1>Log in</h1>
            <form>
                <input ref={nameRef} type = "text" placeholder='введите имя'/>
                <input ref={ageRef} type = "number" placeholder='введите возраст'/>
                <button onClick={submitLogin}>submit</button>
            </form>
        </div>
    );
};

export default LoginForm;