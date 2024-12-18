import React from 'react';
import {authRoutes} from "../utils/Routes";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            {authRoutes.map(route =>
                <Route path={route.path} element={route.element}/>
            )}
        </Routes>
    );
};

export default AppRouter;