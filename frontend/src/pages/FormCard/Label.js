// import React, { useState } from 'react';
// import dataCard from '../../components/verb';
// // import dataCard from '../../components/verb.js'

// export const Label = () => {
//     dataCard = {
//         author: '',
//         title: '',
//         description: '',
//     }

//     const [inputs, setInputs] = useState(dataCard);

//     const handleChange = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setInputs(values => ({...values, [name]: value}))
//     };
//     return (
//         <>
//             <label>
//                 <h4>author</h4>
//                 <input 
//                     type="text" 
//                     name="author" 
//                     value={inputs.author}
//                     onChange={handleChange}
//                 />
//             </label>
//             <label>
//                 <h4>title</h4>
//                 <input 
//                     type="text" 
//                     name="title" 
//                     value={inputs.title}
//                     onChange={handleChange}
//                 />
//             </label>
//             <label>
//                 <h4>description</h4>
//                 <input 
//                     type="text" 
//                     name="description" 
//                     value={inputs.description}
//                     onChange={handleChange}
//                 />
//             </label>

//             <input type="submit" value='Submit'/>
//         </>
//     )
// }
