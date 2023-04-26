import React from 'react'
import { Link } from 'react-router-dom';

// export const Card = ({ newPostData }) => {
//     // console.log(newPostData)

//     let display = null;
//         if(newPostData) {
//             display = newPostData.map(result => {

//                 // console.log(result)

//             const {_id, title, image} = result;
//                 // console.log(portfolio.length)
//                 return (
//                     <Link 
//                         className='cards-block'
//                         key={_id}
//                         to={`/about/${_id}`}
//                     >
//                         <div className='cards-block__owner'>
//                             <div className='cards-block__image'>
//                                 <img 
//                                     src={image} 
//                                     alt={title}
//                                     className='cards-block__image-img'
//                                 />
//                             </div>
//                             <div className='cards-block__title'>{title}</div>
//                         </div>
                        
//                     </Link>
//                 )
//             });
//         } else {
//             display = '404 not found';
//         }
//     return (
//         <>{display}</>
//     )
// }
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
                    {title}
                </Link>
            )
        });
        return (
        <>
            {display}
        </>
    )
}