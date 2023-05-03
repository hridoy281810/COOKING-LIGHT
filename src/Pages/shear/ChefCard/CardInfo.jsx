import React from 'react';
import { Link} from 'react-router-dom';

const CardInfo = ({card}) => {
    const {id,chef_name,years_of_experience,number_of_recipes,likes,chef_picture_url} = card;
    return (
        <div className='mb-24'>
            <div className="card w-96 bg-base-100 pt-2 shadow-xl">
  <figure><img className='' style={{width:'150px', height:'200px', borderRadius: '10px'}} src={chef_picture_url} alt="chef_picture" /></figure>
  <div className="card-body">
    <h2 className="card-title">{chef_name}</h2>
    <p>Years of experience: {years_of_experience}</p>
    <p>Numbers of recipes: {number_of_recipes}</p>
    <p>Like: {likes}</p>
    <div className="card-actions justify-end">
      <Link to={`/recipe/${id}`} className="btn btn-primary">view recipes</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CardInfo;