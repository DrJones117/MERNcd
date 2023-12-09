import React from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';

const ProductList = (props) => {
    const {products} = props;
    const {removeFromDom} = props;
    const {navigate} = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(response => {
                removeFromDom(productId);
                navigate("/products/")
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='list'>
            {products.map( (product, i) => {
                return <div key={i} className='list-item' style={{"width": "200px", "border": "solid"}}>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                            <button onClick={(e) => {deleteProduct(product._id)}} style={{"height": "30px", "width": "100px",}}>Delete</button>
                        </div>
            })}
        </div>
    );
}

export default ProductList