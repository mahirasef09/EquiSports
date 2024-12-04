import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Auth from './Layouts/Auth.jsx';
import Home from './Layouts/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import PrivateRoute from './PrivateRoutes/PrivateRoute.jsx';
import AllEquipment from './Components/AllEquipment.jsx';
import MyList from './Components/MyList.jsx';
import AddEquipment from './Components/AddEquipment.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allequipment",
        element: <PrivateRoute>
          <AllEquipment></AllEquipment>
        </PrivateRoute>,
      },
      {
        path: "/addequipment",
        element: <PrivateRoute>
          <AddEquipment></AddEquipment>
        </PrivateRoute>,
      },
      {
        path: "/mylist",
        element: <PrivateRoute>
          <MyList></MyList>
        </PrivateRoute>,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
