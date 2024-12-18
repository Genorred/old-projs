import React from 'react'
import classes from './Navbar.module.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context';
import MyButton from '../Button/MyButton';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    return (
        <div>
            <MyButton onClick={() => {
                setIsAuth(false)
                localStorage.removeItem('auth')
            }
            }>
                exit
            </MyButton>
            <div className={classes.navbar}>
                <Link to='/about' className={classes.navbarLinks}>about</Link>
                <Link to='/posts' className={classes.navbarLinks}>posts</Link>
            </div>

        </div>
    )
}

export default Navbar
