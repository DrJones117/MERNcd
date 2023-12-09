import React from 'react'
import axios from 'axios'

const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, i) => {
                <p key={i}>{product}</p>
            })}
        </div>
    );
}

export default ProductList