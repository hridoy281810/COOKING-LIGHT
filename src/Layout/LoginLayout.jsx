import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const LoginLayout = () => {
    return (
        <>
            <Header></Header>
            <div className='min-h-[calc(100vh-373px)]'>
          <Outlet></Outlet>
         </div>
           <Footer></Footer>
        </>
    );
};

export default LoginLayout;