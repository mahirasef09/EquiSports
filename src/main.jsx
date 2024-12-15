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
import AuthProvider from './Providers/AuthProvider.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import ViewDetails from './Components/ViewDetails.jsx';
import UpdateEquipment from './Components/UpdateEquipment.jsx';
import Dashboard from './Components/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch('https://server-of-equisports.vercel.app/equipment'),
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allEquipment",
        element: <PrivateRoute>
          <AllEquipment></AllEquipment>
        </PrivateRoute>
      },
      {
        path: "/addEquipment",
        element: <PrivateRoute>
          <AddEquipment></AddEquipment>
        </PrivateRoute>,
      },
      {
        path: "/updateEquipment/:id",
        element: <PrivateRoute>
          <UpdateEquipment></UpdateEquipment>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://server-of-equisports.vercel.app/equipment/${params.id}`)
      },
      {
        path: "/viewDetails/:id",
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://server-of-equisports.vercel.app/equipment/${params.id}`)
      },
      {
        path: "/myList/:email",
        element: <PrivateRoute>
          <MyList></MyList>
        </PrivateRoute>
      },
      {
        path: "/dashboard",
        element: <PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
    errorElement: <ErrorPage></ErrorPage>,
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
