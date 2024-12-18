import React, {useContext, useEffect} from 'react';
import {routePaths} from "../routes";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import {observer} from "mobx-react-lite";
import auth, {UserStoreType} from '../store/UserStore'
import {NavLink, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import {Context} from "../index";
const NavBar = observer( () => {
    const {user}: {user: UserStoreType} = useContext(Context)
    const isAuth = user._isAuth
    const navigate = useNavigate()
    const logout = () => {
        user.setIsAuth(false)
        user.setUser(null)
        localStorage.clear()
        navigate(routePaths.LOGIN_ROUTE)
    }
    return (
        <>
        {isAuth
        ? <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink style={{color: "white", textDecoration: "none"}} to={routePaths.SHOP_ROUTE} >
                        MagaZZZin
                    </NavLink>
                    <Nav>
                        <Button
                            className='ms-lg-2'
                            variant={"outline-light"}
                            onClick={()=>navigate(routePaths.BASKET_ROUTE)}
                        >
                            Basket
                        </Button>
                        { user._user?.role === 'ADMIN' && <Button
                            className='ms-lg-2'
                            variant={"outline-light"}
                            onClick={()=>navigate(routePaths.ADMIN_ROUTE)}
                        >
                            Admin
                        </Button>}
                        <Button
                            className='ms-lg-2'
                            variant={"outline-light"}
                            onClick={logout}
                        >
                            Exit
                        </Button>
                    </Nav>
                </Container>
            </Navbar>
        : <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink style={{color: "white", textDecoration: "none"}} to={routePaths.SHOP_ROUTE} >MagaZZZin</NavLink>
                    <Nav>
                        <Button
                            className='ms-lg-2'
                            variant={"outline-light"}
                            onClick={()=>navigate(routePaths.LOGIN_ROUTE)}
                        >
                            Sign in
                        </Button>
                    </Nav>
                </Container>
            </Navbar>
        }
            </>
    )});

export default NavBar;