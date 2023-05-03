import React, { useState } from 'react';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import { ToastContainer, toast } from 'react-toastify';

const RecipeCard = ({recipe}) => {
    const {recipes_1,recipes_2,recipes_3} = recipe;

    const [favorite,setFavorite] = useState(false)
    const handleFavorite = (event)=>{
       if(favorite){
        setFavorite(event.target.disabled)
       }
  else{
     toast(' asjdf;oi 🔥')
       
       
       }  }

    return (
        <div className='container mt-24  mb-24'>
          <ToastContainer></ToastContainer>
            <h1 className='mb-20 text-center text-3xl font-bold'>Some special recipes and their description</h1>
       <div className='md:grid md:grid-cols-3 gap-10'>
       <div className="card w-full bg-base-100 shadow-xl">
  <figure><img style={{height: '281px'}} src={recipes_1?.recipe_picture_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipes_1?.name}</h2>
    <p> <strong>Ingredients:</strong> {recipes_1?.ingredients}</p>
    <p> <strong>Cooking Method:</strong> {recipes_1?.method}</p>
    <div className='flex-grow-1 flex items-center mt-4 mb-3'>
   <Rating style={{ maxWidth:150 }} value={Math.round(recipes_1?.rating || 0)} readOnly/>
    <span className='ms-2'>{recipes_1?.rating}</span>
   </div>
    <div className="card-actions justify-end">
      <button 
       type='button'
      onClick={() => {
                    handleFavorite(
                        event.target.disabled = true)
                }} className='btn w-full btn-primary '>Favorite</button>
    </div>
  </div>
</div>
       <div className="card  w-full bg-base-100 shadow-xl">
  <figure><img style={{height: '281px'}} src={recipes_2?.recipe_picture_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipes_2?.name}</h2>
    <p> <strong>Ingredients:</strong> {recipes_2?.ingredients}</p>
    <p> <strong>Cooking Method:</strong> {recipes_2?.method}</p>
    <div className='flex-grow-1 flex items-center mt-4 mb-3'>
   <Rating style={{ maxWidth:150 }} value={Math.round(recipes_2?.rating || 0)} readOnly/>
    <span className='ms-2'>{recipes_2?.rating}</span>
   </div>
    <div className="card-actions justify-end">
      <button 
       type='button'
      onClick={() => {
                    handleFavorite(
                        event.target.disabled = true)
                }} className='btn w-full btn-primary '>Favorite</button>
    </div>
  </div>
</div>
       <div className="card  w-full bg-base-100 shadow-xl">
  <figure><img style={{height: '281px'}} src={recipes_3?.recipe_picture_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipes_3?.name}</h2>
    <p> <strong>Ingredients:</strong> {recipes_3?.ingredients}</p>
    <p> <strong>Cooking Method:</strong> {recipes_3?.method}</p>
    <div className='flex-grow-1 flex items-center mt-4 mb-3'>
   <Rating style={{ maxWidth:150 }} value={Math.round(recipes_3?.rating || 0)} readOnly/>
    <span className='ms-2'>{recipes_3?.rating}</span>
   </div>
    <div className="card-actions justify-end">
      <button 
       type='button'
      onClick={() => {
                    handleFavorite(
                        event.target.disabled = true)
                }} className='btn w-full btn-primary '>Favorite</button>
    </div>
  </div>
</div>
       </div>
        </div>
    );
};

export default RecipeCard;