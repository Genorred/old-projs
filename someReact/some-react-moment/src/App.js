import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/UI/navbar/navbar';
import AppRouter from './components/UI/AppRouter';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() =>{
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
}, [])

  return (
    <AuthContext.Provider value={{
      isAuth, 
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar></Navbar>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
export default App;