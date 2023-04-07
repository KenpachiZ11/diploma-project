import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './SinglePageCard.scss'

export const SinglePageCard = () => {
    const { id } = useParams();

    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        try {

            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(res => setProduct(res))

        } catch (error) {
            console.log(error);
        }
    }, [id]);
    console.log(product)
    return (
        <div className='single-page-card'>
            {
                product && (
                    <div className='single-page-card__block'>
                        <div className='single-page-card__block-img'>
                            <img 
                                src={product.image} 
                                alt={product.title}
                                className='single-page-card__block-img-images'
                            />
                        </div>
                        <div className='single-page-card__block-info'>
                            <div>Title: {product.title}</div>
                            <div>Description: {product.description}</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
