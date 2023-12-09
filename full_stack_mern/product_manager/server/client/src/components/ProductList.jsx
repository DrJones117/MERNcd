import React from 'react'
import {Link} from "react-router-dom"

const ProductList = (props) => {
    const {products} = props;

    return (
        <div>
            {products.map( (product, i) => {
                return <Link key={i} to={`/products/${product._id}`}>{product.title}</Link>
            })}
        </div>
    );
}

export default ProductList