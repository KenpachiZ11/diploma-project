import React, { useState, useEffect, useRef } from 'react'

export const FormCard = () => {
    const form = useRef(null);
    const [message, setMessage] = useState([]);
    const [inputs, setInputs] = useState({
        author: null,
        title: null,
        description: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const { author, title, description } = inputs;
        fetch('/form', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
                // 'Content-type': 'text/plain'
            },
            body: JSON.stringify({ author, title, description })     
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setInputs(json.inputs)
        })
        console.log(inputs)

        // setInputs('');
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(prevState  => ({...prevState, [name]: value}))
    };

    useEffect(() => {
        fetch('http://localhost:8000/form')
            .then(res => res.json())
            .then(data => setMessage(data.message));
    }, []);

    return (
        <div>{message}
            <form ref={form} onSubmit={handleSubmit}>
            <label>
                <h4>author</h4>
                <input 
                    type="text" 
                    name="author" 
                    value={inputs.author || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                <h4>title</h4>
                <input 
                    type="text" 
                    name="title" 
                    value={inputs.title || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                <h4>description</h4>
                <input 
                    type="text" 
                    name="description" 
                    value={inputs.description || ''}
                    onChange={handleChange}
                />
            </label>

            <input type="submit" value='Submit'/>
            </form>
        </div>
    )
}