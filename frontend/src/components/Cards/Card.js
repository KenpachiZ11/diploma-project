import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.scss';

export const Card = ({ newPostData }) => {
    let display = null;

        if(!newPostData) {
            display = '404 Not Found!'
        }
        display = newPostData.map(result => {
            // const { _id, author, title, description } = result;
            const { _id, title } = result;
            return (
                <Link 
                    to={`/about/${_id}`} 
                    key={_id}
                    className='cards-block'
                >
                    <div className='cards-block__owner'>
                        <div className='cards-block__owner-image'>
                            <img 
                                src='https://get.wallhere.com/photo/illustration-children-teddy-bears-sleeping-painting-artwork-fan-art-1464585.jpg' 
                                alt={title}
                                className='cards-block__owner-image-img'
                            ></img>
                        </div>
                        <div className='cards-block__owner-title'>
                            {title}
                        </div>
                    </div>
                </Link>
            )
        });
        return (
        <>
            {display}
        </>
    )
}