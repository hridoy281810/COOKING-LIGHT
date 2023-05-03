import React, {  useEffect, useState } from 'react';
import CardInfo from '../CardInfo/CardInfo';
import { FaRegPaperPlane } from 'react-icons/fa';
// import Loader from '../Loader/Loader';
import { Audio } from 'react-loader-spinner';

const ChefCard = () => {

    const [cards,setCards] = useState([])
   const [spinner,setSpinner] = useState(true)
    useEffect(()=>{
        setSpinner(true)
        fetch('https://assaignment-ten-server-hridoy281810.vercel.app/chefData')
        .then(res => res.json())
        .then(data =>setCards(data))
        .catch(error => console.error(error))
        setSpinner(false)
    },[])
 if(spinner){
    // return <Loader></Loader>
    return<div className='flex justify-center items-center'> <Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  /></div>
 }
    return (
        <div className='container mt-24'>
           <div className='md:flex justify-between '>
           <h1 className='mb-10 text-center text-3xl font-bold'>Learn about our chefs</h1>
           <button className="btn btn-primary button-m">View More <FaRegPaperPlane className='ms-4'></FaRegPaperPlane> </button>
           </div>
           <hr />
            <div className='grid md:grid-cols-3 gap-10 mt-10'>
                { 
cards.map(card => <CardInfo key={card.id} card={card}></CardInfo>)
                }
            </div>
        </div>
    );
};

export default ChefCard;