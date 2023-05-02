import React, { useEffect, useState } from 'react';
import CardInfo from './CardInfo';

const ChefCard = () => {
    const [cards,setCards] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/chefData')
        .then(res => res.json())
        .then(data =>setCards(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div className='container mt-24'>
            <h1 className='mb-20 text-center text-3xl font-bold'>Learn about our chefs</h1>
            <div className='grid md:grid-cols-3 gap-10'>
                { 
cards.map(card => <CardInfo key={card.id} card={card}></CardInfo>)
                }
            </div>
        </div>
    );
};

export default ChefCard;