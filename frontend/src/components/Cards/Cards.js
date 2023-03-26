import React, { useState, useEffect } from 'react'
import { Card } from './Card';
import './Cards.scss'


const Cards = () => {
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        try {

            fetch(`https://fakestoreapi.com/products`)
                .then(res => res.json())
                .then(res => setProduct(res))

        } catch (error) {
            console.log(error);
        }
    }, []);

    // console.log(product)

    return (
        <div className='aside-block__owner'>OwnerAside
            <div className='aside-block__owner-grid'>
                <Card 
                    product={product}
                />
            </div>
        </div>
    )
}

export default Cards