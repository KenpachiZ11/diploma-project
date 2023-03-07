import React, { useEffect, useState } from 'react';
import './Cards.scss';
import { card_array } from '../../components/arrayComponent';
import { Card } from './Card';

// console.log(card_array)

export const Cards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setData(card_array);
        }, 1500);
    }, []);

    // console.log(data)
    return (
        <div className='wrapper-cards'>
            <div className='wrapper-cards__content'>
                {
                    data && data.length > 0 ? (
                        <Card data={data} /> 
                    ) : 
                        <div className='wrapper-cards__content-loading'>
                            Loading...
                        </div>
                }
            </div>
        </div>
    )
}
