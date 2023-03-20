import React, {useState, useEffect} from 'react';

export const About = () => {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        // fetch("http://localhost:8000/about")
        //     .then((res) => res.json())
        //     .then((data) => setMessage(data.message));
        fetch("/about").then(res => res.json()).then(data => setMessage(data.message));
    }, []);

    return (
        <div>
            {message}
        </div>
    )
}
