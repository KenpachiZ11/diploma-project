import React, { useState, useEffect } from 'react'
import './OwnerAsideBlock.scss'
// import { card_array } from '../../../components/arrayComponent'


const OwnerAside = () => {
    const [product, setProduct] = useState([]);
    const [LoadingStatus, setLoadingStatus] = useState();


    useEffect(() => {
        try {
            const timer = 
                setInterval(() => {
                    setLoadingStatus(
                        fetch(`https://fakestoreapi.com/products`)
                            .then(res => res.json())
                            .then(res => setProduct(res))
                        )
                    }, 1500);

            return () => clearInterval(timer);

        } catch (error) {
            console.log(error);
        }
    }, []);

    console.log(product)

    return (
        <div className='aside-block__owner'>OwnerAside
            <div className='aside-block__owner-grid'>
                {
                    LoadingStatus ? 
                        product.length && product.map(x => {
                            return(
                                <div key={x.id}>
                                    <h6>{x.title}</h6>
                                </div>
                            )
                    })  : <h1>Loading ...</h1>
                }
            </div>
        </div>
    )
}

export default OwnerAside