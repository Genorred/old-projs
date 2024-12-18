import React, {useEffect, useState} from 'react';
import Card, { CardVariant } from "./components/Card";
import axios from "axios";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";

const App = () => {
    return (
        <div>
            aa
        </div>
        //<BrowserRouter><NavLink to='/users'>us</NavLink><NavLink to='/todos'>td</NavLink><EventsExample></EventsExample><Routes><Route path='/users' element={<UsersPage/>}/><Route path='/todos' element={<TodosPage/>}/></Routes><Card width='200px' height='100px' variant={CardVariant.primary} onCl={(count)=>console.log(count)}><h1>xdd</h1></Card></BrowserRouter>
    );
};

export default App;