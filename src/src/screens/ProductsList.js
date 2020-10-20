import React from 'react';
import db from '../assets/db.json'
import { Link } from "react-router-dom";

function ProductsList () {
    const products = db.map( (product) => {
        return (
            
            <div key={product.uuid}>
                <Link to={{
                    pathname: "/product",
                    hash: "#" + product.uuid,
                    state: product
                    }}>                    
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                    <p>{product.producer}</p>
                    <p>{product.description_short}</p>
                    <img src={product.image[0]}/>
                </Link>
            </div>
        )
    })
    return (        
        <div>
            {products}            
        </div>    
    )
}

export default ProductsList