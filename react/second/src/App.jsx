import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Blogs from '../pages/Blogs'
import NoPage from '../pages/NoPage'
import Home from '../pages/Home'
import Applayout from '../layout/Applayout'
import UserProfile from '../pages/UserProfile'
import Contact from '../pages/Contact'

const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Applayout/>,
      errorElement:<NoPage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/blog',
          element:<Blogs/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:"/user/:userId",
          element:<UserProfile />
        },
        {
          path:'*',
          element:<NoPage/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
