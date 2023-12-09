import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const DetailProduct = (props) => {
    const {navigate} = props;
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                console.log(response.data)
                setProduct(response.data)
            })
            .catch(err => console.error(err))
    }, [id]);

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(response => {
                navigate("/products/")
            })
            .catch(err => console.error(err));
    }


    return (
        <div>
            {Object.keys(product).length === 0 ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p>Title: {product.title}</p>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                </>
            )}
            <Link to={`/products/${product._id}/edit`}>Edit</Link>
            <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
        </div>
    );
}

export default DetailProduct;