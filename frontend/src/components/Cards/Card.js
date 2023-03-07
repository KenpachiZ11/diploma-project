import React from 'react'
// import { Link } from 'react-router-dom';

export const Card = ({data}) => {    
    console.log(data)

    let display = null;
        if(data) {
            display = data.map(result => {

            const {name, id, portfolio} = result;
            // console.log(portfolio.length)
            return (
                <div 
                    key={id}
                    className='wrapper-cards__content-body'
                >
                    <div className='wrapper-cards__body'>
                    {
                        portfolio && portfolio.length > 3 ? <div>Слайдер</div> : <div>Без слайдера</div>
                    }

                        {/* {
                            portfolio.map(p_block => {

                            const {id, body, image, price, title} = p_block;
                                return (
                                    <div 
                                        key={id}
                                        className='wrapper-cards__body-portfolio'
                                    >
                                        <div className='wrapper-cards__body-portfolio__img'>
                                            <img 
                                                src={image} 
                                                alt={title} 
                                                className='wrapper-cards__body-portfolio__img-content'
                                                />
                                        </div>
                                        <div className='wrapper-cards__body-portfolio__title'>
                                            {title}
                                        </div>
                                    </div>
                                )
                            })
                        } */}
                    </div>
                    <div className='wrapper-cards__content-author'>Author: {name}</div>
                </div>
            )
            });
        } else {
            display = '404 not found';
        }
    return (
        <>{display}</>
    )
}
