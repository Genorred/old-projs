import React from 'react'
import About from '../pages/About'
import Posts from '../pages/Posts'
import PostIdPage from '../pages/PostIdPage'
import Login from '../pages/Login'

export const privateRoutes = [
    {element: <About/>, path:'/about'},
    {element: <Posts/>, path:'/posts'},
    {element: <PostIdPage/>, path:'/posts/:id'}
]
export const publicRoutes = [
    {element: <Login/>, path:'/login'},
]