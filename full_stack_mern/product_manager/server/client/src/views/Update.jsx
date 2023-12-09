import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const UpdateProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                setTitle(response.data.title);
                setPrice(response.data.price);
                setDescription(response.data.description);
            })
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
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
                <button type="submit">Submit Edit</button>
            </form>
        </div>
    );
}

export default UpdateProduct
