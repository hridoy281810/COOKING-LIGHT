import { createBrowserRouter } from "react-router-dom";
import Banner from "../Pages/Banner/Banner";
import MainLayout from "../Layout/MainLayoout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LoginLayout from "../Layout/LoginLayout";
import RegisterLayout from "../Layout/RegisterLayout";

const router = createBrowserRouter([
   

    {
        path:'/',
        element:<MainLayout></MainLayout>,
      
       
    },
    {
        path:'/',
       element: <LoginLayout />,
       children:[
        {
            path:'/login',
           element: <Login />
        },
        {
            path:'/register',
           element: <Register />
        },
       ]
    },
   
])

export default router;