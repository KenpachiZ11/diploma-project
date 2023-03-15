import React, {useState, useEffect} from 'react';

export const About = () => {
    const [message, setMessage] = useState([{}]);

    useEffect(() => {
        fetch("/aboute").then(res => res.json()).then(data => setMessage(data));
    }, []);

    return (
        <div>
            {message}
        </div>
    )
}
