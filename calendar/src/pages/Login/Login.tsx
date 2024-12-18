import React from 'react';
import LoginForm from "./components/LoginForm";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {stat} from "fs";
const Login = () => {
    const name = useTypedSelector(state => state.login.name)
    const age = useTypedSelector(state => state.login.age)
    return (
        <div>
            <LoginForm/>
        </div>
    );
};

export default Login;