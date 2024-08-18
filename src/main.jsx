import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login.jsx';
import Register from './Register.jsx';
import Authprovider from './Authprovider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/reg',
    element:<Register></Register>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider><RouterProvider router={router} /></Authprovider>
  </StrictMode>,
)
