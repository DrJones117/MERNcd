import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import axios from 'axios';

export default (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    
    const getProducts = () => {
        axios.get('http://localhost:8000/api/products')
        .then(response => {
            setProducts(response.data);
            setLoaded(true);
        })
        .catch(err => console.log(err));
    }
    
    useEffect(() => {getProducts()}, []);

    return (
        <div>
            <ProductForm getProducts={getProducts}/>
            <hr/>
            {console.log(loaded)}
            {loaded && <ProductList products={products} />}
        </div>
    )
}

