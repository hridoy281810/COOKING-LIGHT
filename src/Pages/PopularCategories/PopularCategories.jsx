import React from 'react';
import './PopularCategories.css'
import { FaRegPaperPlane } from 'react-icons/fa';
import popular1 from '../../assets/img/popolar.png'
import popular2 from '../../assets/img/populer22.jpg'
import popular3 from '../../assets/img/populer2.png'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const PopularCategories = () => {
  return (

    <div className='container mt-24'>
      <div className='md:flex justify-between '>
        <h1 className='mb-10 text-center  text-3xl font-bold'>Popular Categories</h1>
        <button className="btn btn-primary button-m">View More <FaRegPaperPlane className='ms-4'></FaRegPaperPlane> </button>
      </div>
      <hr />
      <div className="  mt-10">
        <AwesomeSlider className='bg-white' >
          <div className="bg-white shadow p-4 p-card rounded-lg  ">
            <img src={popular1} style={{ height: '268px' }} className="max-w-sm rounded-lg shadow-2xl popular1" />
            <div >
              <h1 className="text-5xl font-bold text-responsive">Shorshe Ilish!</h1>
              <p className="py-6 text-responsive-2 ">Provident cupiditate voluptatem et in. Quaerat fugiat  <br /> assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Discover Recipes</button>
            </div>
          </div>
          <div className="bg-white shadow p-4 p-card rounded-lg  ">
            <img src={popular2} style={{ height: '268px' }} className="max-w-sm popular1 rounded-lg shadow-2xl" />
            <div>
             <h1 className="text-5xl font-bold text-responsive"> Kacchi Biriyani!</h1>
              <p className="py-6 text-responsive-2 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut <br /> assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Discover Recipes</button>
            </div>
          </div>
          <div className="bg-white shadow p-4  rounded-lg  ">
            <img src={popular3} className="max-w-sm rounded-lg p-card shadow-2xl popular1" />
            <div>
             <h1 className="text-5xl font-bold text-responsive">Chicken Biryani!</h1>
              <p className="py-6 text-responsive-2 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut <br /> assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Discover Recipes</button>
            </div>
          </div>
        </AwesomeSlider>
      </div>










    </div>

  );
};

export default PopularCategories;