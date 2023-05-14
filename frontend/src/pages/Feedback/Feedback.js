import React, { useState, useEffect } from 'react';
import { DataNull } from '../../components/DataNull/DataNull';

export const Feedback = () => {
    const [feedback, getFeedback] = useState([]);
    useEffect(() => {
        fetch('/feedback', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
            },
        })
        .then(res => res.json())
        .then(res => getFeedback(res))
    }, []);
    
    console.log(feedback);

    return (
        <div>
            {
                feedback && feedback.length > 0 ? feedback : <DataNull/>
            }
        </div>
    )
}
