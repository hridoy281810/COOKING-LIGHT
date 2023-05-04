import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayoout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LoginLayout from "../Layout/LoginLayout";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import RecipeLayout from "../Layout/RecipeLayout";
import Recipe from "../Pages/Recipe/Recipe";
import PrivetRoute from "./PrivetRoute";
import Error from "../Pages/Error/Error";
import UserProfile from "../Pages/UserProfile/UserProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/profile',
                element: <UserProfile></UserProfile>
            }
        ]
    },
    {
        path: '/recipe',
        element: <RecipeLayout></RecipeLayout>,
        children: [
            {
                path: ':id',
                element: <PrivetRoute> <Recipe></Recipe></PrivetRoute>,
                loader: ({ params }) => fetch(`https://assaignment-ten-server-hridoy281810.vercel.app/chefData/${params.id}`)
            }
        ]
    },
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }

        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }

])
export default router;