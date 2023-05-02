import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
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

export default MainLayout;