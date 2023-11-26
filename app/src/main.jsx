import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './view/Login';
import Admin from './view/Admin';
import Gestion from './view/Gestion';
import Agenda from './view/Agenda';
import Error404 from './view/Error404';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error404/>
  },
  {
    path: '/login',
    element: <Login />,
    errorElement:<Error404/>
  },
  {
    path:'/admin',
    element: <Admin/>,
    errorElement: <Error404/>
  },       {
    path: '/admin/gestion',
    element:<Gestion/>
  },
  {
    path:'admin/agenda/',
    element:<Agenda/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
