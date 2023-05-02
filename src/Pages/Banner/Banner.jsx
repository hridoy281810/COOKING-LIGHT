import React from 'react';
import Lottie from "lottie-react";
import chef from '../../assets/lottie/women.json'

const Banner = () => {
    return (
         <div>
            <div className='bg-orange-100'>
            <div className='container '>
           <div className='md:flex justify-between items-center'>
           <div>
        <h3 className='text-2xl font-bold mb-2'>GET FRESHLY COOKED</h3>
        <h2 className='text-6xl font-bold mb-3'>Eat our delicious food with your family</h2>
        <h3 className='text-2xl font-bold mb-3'>For Fresh & Delicious BD Recipe</h3>
        <button className="btn btn-primary">Order Now</button>
             </div>
             <div>
             <Lottie
              animationData={chef} loop={true} />
             </div>
           </div>
            </div>
            </div>
   

        </div>
    );
};

export default Banner;