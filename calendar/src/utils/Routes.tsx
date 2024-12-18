import Login from "../pages/Login/Login";
import {CALENDAR_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE} from "./consts";
import Calendar from "../pages/Calendar/Calendar";
import Profile from "../pages/Profile/Profile";
import {Navigate} from "react-router-dom";
export const authRoutes = [
    {
        component: <Navigate to={CALENDAR_ROUTE} replace/>,
        path: '/*'
    },
    {
        component: <Calendar/>,
        path: CALENDAR_ROUTE
    },
    {
        component: <Profile/>,
        path: PROFILE_ROUTE
    }
]
export const publicRoutes = [
    {
        component: <Navigate to={LOGIN_ROUTE} replace/>,
        path: '/*'
    },
    {
        component: <Login/>,
        path: LOGIN_ROUTE
    }
]