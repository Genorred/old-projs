import {Navigate} from "react-router-dom";
import React from "react";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import DevicePage from "./pages/DevicePage";
export enum routePaths {
    ADMIN_ROUTE = '/admin',
    LOGIN_ROUTE = '/login',
    REGISTRATION_ROUTE = '/registration',
    SHOP_ROUTE = '/',
    BASKET_ROUTE = '/basket',
    DEVICE_ROUTE = '/device'
}
export const authRoutes = [
    {
        path: routePaths.ADMIN_ROUTE,
        element: <Admin/>
    },
    {
        path: routePaths.BASKET_ROUTE,
        element: <Basket/>
    },
]
export const publicRoutes = [
    {
        path: routePaths.REGISTRATION_ROUTE,
        element: <Auth/>
    },
    {
        path: routePaths.LOGIN_ROUTE,
        element: <Auth/>
    },
    {
        path: routePaths.SHOP_ROUTE,
        element: <Shop/>
    },
    {
        path: routePaths.DEVICE_ROUTE + '/:id',
        element: <DevicePage/>
    },
    {
        path: '/*',
        element: <Navigate to={routePaths.SHOP_ROUTE} replace/>
    }
]