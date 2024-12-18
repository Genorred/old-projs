import React, {useContext, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Card, Form, Row} from "react-bootstrap";
import {useLocation} from "react-router";
import Button from "react-bootstrap/Button";
import {authRoutes, routePaths} from "../routes";
import {NavLink, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {UserStoreType} from "../store/UserStore";
import {Context} from "../index";

const Auth = observer(() => {
    const {user}: {user: UserStoreType} = useContext(Context)
    const navigate = useNavigate()
    const path = useLocation().pathname
    const isLogin = path === '/login'
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<any>()
    console.log(user._user);
    const submitForm = async () => {
        try {
            if(isLogin){
                const response = await login(email, password)
                user.setUser(response)
                user.setIsAuth(true)
                console.log(response)
                navigate(routePaths.SHOP_ROUTE)
            } else {
                const response = await registration(email, password)
                user.setUser(response)
                user.setIsAuth(true)
                console.log(response)
                navigate(routePaths.SHOP_ROUTE)
            }
        } catch (e: any) {
            setError(e.response.data)
            console.log(e.response.data)
        }
    }
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight-54}}
        >
            <Card
                style={{width: '600px'}}
                className='p-5'
            >
                <Form className='d-flex flex-column'>
                    <h2 className='text-center'>
                        {isLogin ?'Authorization' : 'Registration'}
                    </h2>
                    <Form.Control
                        className='mt-3'
                        placeholder='write the email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='write the password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type='password'
                    />
                    <Row className='d-flex justify-content-between ps-3 pe-3 mt-3'>
                        {isLogin
                        ? <> <div className='w-auto'>
                                Do not have an account?
                                <NavLink to={routePaths.REGISTRATION_ROUTE}>
                                    Sign up
                                </NavLink>
                            </div>
                            <Button
                                variant='outline-success'
                                className='w-auto'
                                onClick={submitForm}
                            >Sign in</Button>
                                <div style={{color: 'red'} }>
                                    {error?error:''}
                                </div>
                            </>
                        : <><div className='w-auto'>
                                Already have an account?
                                <NavLink to={routePaths.LOGIN_ROUTE}>
                                    Sign in
                                </NavLink>
                            </div>
                            <Button
                                variant='outline-success'
                                className='w-auto'
                                onClick={submitForm}
                            >sign up</Button>
                                <div style={{color: 'red'} }>
                                    {error?error:''}
                                </div>
                           </>
                        }
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;