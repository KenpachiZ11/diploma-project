import React, { useEffect, useState } from 'react';
import './Home.scss';

export const Home = () => {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000')
            .then(res => res.json())
            .then(data => setMessage(data.message));
    }, []);
    return (
        <div>{message}</div>
    )
}
