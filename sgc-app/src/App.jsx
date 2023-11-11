import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <App></App>
    }
  ])
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
