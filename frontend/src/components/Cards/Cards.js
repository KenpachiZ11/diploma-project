import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import './Cards.scss'


const Cards = () => {
    // const [product, setProduct] = useState([]);
    const [newPostData, setNewPostData] = useState([]);

    useEffect(() => {
        fetch('/about', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
            },
        })
        .then(res => res.json())
        .then(res => setNewPostData(res))
    }, []);

    return (
        <div className='aside-block__owner'>OwnerAside
            <div className='aside-block__owner-grid'>
                {
                    newPostData && newPostData.length > 0 ? <Card newPostData={newPostData}/> : <h1>Данных нет</h1>
                }
                {/* <Card 
                    newPostData={newPostData}
                /> */}
            </div>
        </div>
    )
}

export default Cards