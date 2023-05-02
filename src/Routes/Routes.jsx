import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayoout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LoginLayout from "../Layout/LoginLayout";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
   

    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            }
        ]
      
       
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