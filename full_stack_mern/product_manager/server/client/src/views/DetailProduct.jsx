import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailProduct = (props) => {
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
        </div>
    );
}

export default DetailProduct;