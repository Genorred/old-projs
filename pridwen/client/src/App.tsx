import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
};
//"start": "cross-env PORT=5000 NODE_ENV=development node src/utils/backand.js",
  //"start": "react-scripts start",
export default App;