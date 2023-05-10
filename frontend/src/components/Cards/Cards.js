import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import './Cards.scss'
// import { Pagination } from '../Pagination/Pagination';


const Cards = () => {
    // const [product, setProduct] = useState([]);
    const [newPostData, setNewPostData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        fetch(`/about/?page=${pageNumber}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
            },
        })
        .then(res => res.json())
        .then(res => setNewPostData(res))
    }, [pageNumber]);

    return (
        <>  
            {
                newPostData && newPostData.length > 0 
                    ? 
                        <div className='about-page__grid'><Card newPostData={newPostData}/></div>
                    : 
                        <h1>Данных нет</h1>
            }
        </>
    )
}

export default Cards