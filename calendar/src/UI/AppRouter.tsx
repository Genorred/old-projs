import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Board from "../components/Board";
import Calendar from "../pages/Calendar/Calendar";
import Login from "../pages/Login/Login";
import {authRoutes, publicRoutes} from "../utils/Routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
const AppRouter = () => {
    const isAuth = useTypedSelector(state => state.login)
    return (
        <Routes>
            {!isAuth.name
            ? publicRoutes.map((route) =>
                        <Route element={route.component} path={route.path}/>
                    )
            : authRoutes.map((route) =>
                        <Route element={route.component} path={route.path}/>
                    )
            }
        </Routes>
    );
};

export default AppRouter;