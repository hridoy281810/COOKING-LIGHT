import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../Pages/Banner/Banner';
import ChefCard from '../Pages/shear/ChefCard/ChefCard';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <>
          <Header></Header>
          <Banner></Banner>
          <ChefCard></ChefCard>
          <Footer></Footer>
        </>
    );
};

export default MainLayout;