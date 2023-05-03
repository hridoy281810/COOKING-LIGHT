import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import popular1 from '../../assets/img/popolar.png'
import popular2 from '../../assets/img/populer22.jpg'
import popular3 from '../../assets/img/populer2.png'

const PopularCategories = () => {
    return (
      
         <div  className='container mt-24'>
            <div className='md:flex justify-between '>
           <h1 className='mb-10 text-center text-3xl font-bold'>Popular Categories</h1>
           <button className="btn btn-primary">View More <FaRegPaperPlane className='ms-4'></FaRegPaperPlane> </button>
           </div>
           <hr />
           <div className=" md:flex justify-between  mt-10">
        
           <div className="bg-white shadow p-4  rounded-lg  ">
    <img src={popular1} style={{height:'268px'}} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Shorshe Ilish!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut <br/> assumenda excepturi exercitationem quasi. <br/> In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Discover Recipes</button>
    </div>
            </div>
           <div className="bg-white shadow p-4  rounded-lg  ">
    <img src={popular2} style={{height:'268px'}} className="max-w-sm  rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold"> Kacchi Biriyani!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut <br/> assumenda excepturi exercitationem quasi. <br/> In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Discover Recipes</button>
    </div>
            </div>
           <div className="bg-white shadow p-4  rounded-lg  ">
    <img src={popular3} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Chicken Biryani!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut <br/> assumenda excepturi exercitationem quasi. <br/> In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Discover Recipes</button>
    </div>
            </div>
</div>
        </div>
     
    );
};

export default PopularCategories;