import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './SinglePageCard.scss'

export const SinglePageCard = () => {
    const { id } = useParams();
    const [newPostData, setNewPostData] = useState([]);
    let display = null;

    useEffect(() => {
        fetch(`/about`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
            setNewPostData(res)
            // console.log(res, 'res')
        })
    }, [id]);

    // display = newPostData.filter(el => {
    //     const { _id, author, title, description  } = el;
    //     console.log(_id, '_id')
    //     console.log(id, 'id')
    //         if(id === _id) {
    //             console.log(id, _id)
    //             // return (
    //             //     <div key={_id}>
    //             //         <h1>{title}</h1>
    //             //         <div>{description}</div>
    //             //         <h4>{author}</h4>
    //             //     </div>
    //             // )
    //         }
    // });



    // let idProduct = null;
        display = newPostData.map(el => {
            const { _id, author, title, description  } = el;
            if(id === _id) {
                // console.log(id, _id)
                return (
                    <div key={_id}>
                        <h1>{title}</h1>
                        <div>{description}</div>
                        <h4>{author}</h4>
                    </div>
                )
            }
        });
    // if(idProduct )

    // console.log(idProduct)

    // const [product, setProduct] = useState([]);
    
    // useEffect(() => {
    //     try {
    //         fetch(`/about/${id}`)
    //             .then(res => res.json())
    //             .then(res => {
    //                 setProduct(res)
    //                 console.log(res)
    //             })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, [id]);
    // console.log(product)
    return (
        <>
            {display}
        </>
        // <div className='single-page-card'>
        //     {/* {
        //         product && (
        //             <div className='single-page-card__block'>
        //                 <div className='single-page-card__block-img'>
        //                     <img 
        //                         src={product.image} 
        //                         alt={product.title}
        //                         className='single-page-card__block-img-images'
        //                     />
        //                 </div>
        //                 <div className='single-page-card__block-info'>
        //                     <div>Title: {product.title}</div>
        //                     <div>Description: {product.description}</div>
        //                 </div>
        //             </div>
        //         )
        //     } */}
        // </div>
    )
}
