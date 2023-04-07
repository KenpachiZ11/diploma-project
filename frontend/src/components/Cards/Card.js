import React from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export const Card = ({ product }) => {    
    console.log(product)

    let display = null;
        if(product) {
            display = product.map(result => {

            const {id, title, image} = result;
                // console.log(portfolio.length)
                return (
                    <Link 
                        className='cards-block'
                        key={id}
                        to={`/about/${id}`}
                    >
                        <div className='cards-block__owner'>
                            <div className='cards-block__image'>
                                <img 
                                    src={image} 
                                    alt={title}
                                    className='cards-block__image-img'
                                />
                            </div>
                            <div className='cards-block__title'>{title}</div>
                        </div>
                        
                    </Link>
                )
            });
        } else {
            display = '404 not found';
        }
    return (
        <>{display}</>
    )
}
