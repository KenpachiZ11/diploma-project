import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './SinglePageCard.scss'

export const SinglePageCard = () => {
    const { id } = useParams();
    const [newPostData, setNewPostData] = useState([]);

    // console.log(id, 'id')
    // let display = null;

    useEffect(() => {
        fetch(`/about/${id}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
            setNewPostData(res)
            // console.log(res, 'res')
        })
    }, [id]);

    const { title, description, author } = newPostData;

    // console.log(newPostData, 'newPost')
    return (
        <>
            {
                newPostData ? (
                    <div>
                        <div>Title: {title}</div>
                        <div>Description: {description}</div>
                        <div>Author: {author}</div>
                    </div>
                ) : <h1>404 not found</h1>
            }

            {/* {display ? display : <h1>404 not found</h1>} */}
        </>
    )
}
