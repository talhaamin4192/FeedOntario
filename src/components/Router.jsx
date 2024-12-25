import React from 'react'
import Home from './Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    }
    ,
    {
      path: "",
      element: {}
    }
  ]
    
  )
  return (

    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default Router