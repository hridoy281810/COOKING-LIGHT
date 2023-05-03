import React from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../shear/ChefCard/ChefCard';
import PopularCategories from '../PopularCategories/PopularCategories';
import OurDeliciusOffer from '../OurDeliciusOffer/OurDeliciusOffer';

const Home = () => {
   
     
    return (
        <div>
            <Banner></Banner>
          <ChefCard></ChefCard>
          <PopularCategories></PopularCategories>
          <OurDeliciusOffer></OurDeliciusOffer>
        </div>
    );
};

export default Home;