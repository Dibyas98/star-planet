import React from 'react'
import Planet from '../planet/Planet'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Resident from '../resident/Resident'

export default function Screen() {
  const route = createBrowserRouter([
    {
      path: '/',
      element:<Planet></Planet>
    },
    {
      path:'/resident',
      element:<Resident></Resident>
    }
  ])
  return (
    <>
    <RouterProvider router={route}></RouterProvider>
    </>
  )
}
