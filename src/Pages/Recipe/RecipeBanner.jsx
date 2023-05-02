import React from 'react';
import { Link } from 'react-router-dom';
const RecipeBanner = ({recipe}) => {
   const {chef_name,years_of_experience,number_of_recipes,likes,chef_picture_url,description} = recipe;

    return (
        <div >
        <div className="hero min-h-screen bg-orange-100">
  <div className="hero-content flex-col lg:flex-row-reverse gap-20">
    <img style={{width: '300px', height: '400px'}} src={chef_picture_url} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{chef_name}</h1>
      <p className="py-6 text-2xl font-bold mb-2 "> Description: {description} </p>
      <p className='text-2xl font-bold mb-3'>Years of experience: {years_of_experience} y</p>
    <p className='text-2xl font-bold mb-3'>Numbers of recipes: {number_of_recipes}</p>
    <p className='text-2xl font-bold mb-3'>Like: {likes}</p> 
    <Link to='/' className="btn btn-primary">About More</Link>
    </div>
  </div>
</div>


    </div>
    );
};

export default RecipeBanner;