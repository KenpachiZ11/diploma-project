import React, { useEffect, useState } from 'react'

export const Contacts = () => {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        fetch("/contacts")
            .then(res => res.json())
            .then(data => setMessage(data.message));
    }, []);
    return (
        <div>{message}</div>
    )
}
