import React, {useContext, useEffect, useState} from 'react'
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {observer} from "mobx-react-lite";
import {check} from "./http/userAPI";
import {UserStoreType} from "./store/UserStore";
import {Context} from "./index";
import {Spinner} from "react-bootstrap";
import Footer from "./components/Footer";

const App = observer(() => {
    const {user}: {user: UserStoreType} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(data)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
})
export default App