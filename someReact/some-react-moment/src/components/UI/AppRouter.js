import React, { useContext } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Error from '../../pages/Error';
import { publicRoutes, privateRoutes } from '../../router/router'
import { AuthContext } from '../../context';
import Login from '../../pages/Login';
import Loader from './Loader/Loader';
import { Navigate } from 'react-router-dom';


const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    if (isLoading) {
        return <Loader/>
    }
    return (

        isAuth
            ?

            <Routes>
                <Route path="/*" element={<Navigate to="/login" replace />} />
                {privateRoutes.map((rout) =>
                    <Route element={rout.element} key={rout.path} path={rout.path} />)}
            </Routes>

            :
            < Routes >
                <Route path="/*" element={<Navigate to="/login" replace />} />
                {publicRoutes.map((rout) =>
                    <Route element={rout.element} key={rout.path} path={rout.path} />)}
            