import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import axios from 'axios';

export default (props) => {
    
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();


    const getProducts = () => {
        axios.get('http://localhost:8000/api/products')
        .then(response => {
            setProducts(response.data);
            setLoaded(true);
        })
        .catch(err => console.log(err));
    }
    
    useEffect(() => {getProducts()}, []);

    const removeFromDom = (productId) => {
        setProducts(products.filter(product => product._id != productId));
    }

    return (
        <div>
            <h1>Add a Product</h1>
            <ProductForm getProducts={getProducts}/>
            <hr/>
            {console.log(loaded)}
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} navigate={navigate}/>}
        </div>
    )
}

