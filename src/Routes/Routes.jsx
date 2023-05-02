import { createBrowserRouter } from "react-router-dom";
import Banner from "../Pages/Banner/Banner";
import MainLayout from "../Layout/MainLayoout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
       
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/login',
       element: <Login></Login>
    }
])

export default router;