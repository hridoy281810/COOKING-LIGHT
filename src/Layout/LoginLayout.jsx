import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Footer from '../components/Footer/Footer';

const LoginLayout = () => {
    return (
        <>
            <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </>
    );
};

export default LoginLayout;