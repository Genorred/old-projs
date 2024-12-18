import Login from "../pages/login/Login";
import Home from "../pages/home/Home";

export enum routePath {
    LOGIN_PATH = '/login',
    CHARACTERS_PATH = '/charachters',
    TIER_LIST_PATH = '/tier-list',
    HOME_PATH = '/home'
}
export const authRoutes = [
    {
        path: routePath.LOGIN_PATH,
        element: <Login/>
    },
    {
        path: routePath.HOME_PATH,
        element: <Home/>
    }
]