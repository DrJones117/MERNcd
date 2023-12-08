import React, { useState } from 'react'
import axios from 'axios'
export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const formHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(response => {
                console.log(response)
            .catch(err => {
                console.log(err)
            })
        })
    }
    return (
        <form onSubmit={formHandler}>
            <p>
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price</label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>Description</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}></input>
            </p>
            <button type="submit">Submit Product</button>
        </form>
    );
}