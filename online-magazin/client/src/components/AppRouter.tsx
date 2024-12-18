import React, {useContext} from 'react';
import {publicRoutes, authRoutes, routePaths} from "../routes";
import {Navigate, Route, Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";
import auth from '../store/UserStore'
import {Context} from "../index";
const AppRouter = observer( () => {
    const {user}: any = useContext(Context)
    const isAuth = user._isAuth
    return (
        <Routes>
            {isAuth && authRoutes.map(route =>
                        <Route key={route.path} path={route.path} element={route.element}/>
                    )}
            {publicRoutes.map(route =>
                <Route key={route.path} path={route.path} element={route.element}/>
            )}
        </Routes>
    );
})

export default AppRouter;