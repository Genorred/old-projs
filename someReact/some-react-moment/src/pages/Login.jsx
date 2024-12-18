import React from 'react'
import MyInput from '../components/UI/Input/MyInput'
import { AuthContext } from '../context';
import { useContext } from 'react';
import MyButton from '../components/UI/Button/MyButton'
const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  console.log(isAuth)
  const login = e =>{
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }
  return (
    <div>
      <h1>page fot login</h1>
     <form onSubmit = {login}>
      <MyInput type='text' placeholder = 'enter a login'/>
      <MyInput type='password' placeholder = 'enter a password'/>
      <MyButton>log in</MyButton>
      </form> 
    </div>
  )
}

export default Login
