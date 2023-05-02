import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayoout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LoginLayout from "../Layout/LoginLayout";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import RecipeLayout from "../Layout/RecipeLayout";
import Recipe from "../Pages/Recipe/Recipe";

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
            },
           
        ]
      
       
    },
    {
        path:'/recipe',
        element:<RecipeLayout></RecipeLayout>,
        children:[
            {
                path:':id',
                element:  <Recipe></Recipe>,
                loader:({params})=> fetch(`http://localhost:5000/chefData/${params.id}`)
              

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