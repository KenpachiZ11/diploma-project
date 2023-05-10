import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SinglePageCard.scss'

export const SinglePageCard = () => {
    const { id } = useParams();
    const [newPostData, setNewPostData] = useState([]);

    useEffect(() => {
        fetch(`/about/${id}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => { setNewPostData(res) })
    }, [id]);

    const { title, description, author, linkImage} = newPostData;

    console.log(newPostData, 'newPost')
    return (
        <>
            {
                newPostData 
                ?
                <div className='single-page'>
                    {
                        !!linkImage 
                            ?
                                <div className='single-page__image'>
                                    <img 
                                        src={linkImage} 
                                        alt={title} 
                                        className='single-page__image-img'
                                    />
                                </div>
                            :
                            <div className='single-page__image'>
                                <img 
                                    src='https://images.prom.ua/2161063091_w640_h640_silikonovyj-nochnik-detskij.jpg' 
                                    alt={title} 
                                    className='single-page__image-img'
                                />
                            </div>
                    }

                    <div className='single-page__card'>
                        <div className='single-page__title'>{title}</div>
                        <div className='single-page__description'>{description}</div>
                        <div className='single-page__author'>Author: {author}</div>
                    </div>

                </div>
                :
                <h1>404 not found</h1>
            }
        </>
    )
}
