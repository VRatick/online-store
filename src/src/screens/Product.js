import React from 'react';
import { useLocation } from 'react-router-dom';

function Product () {   
    const match = useLocation();
    const product = match.state;
    const images = product.image.map( (image, index) => {
        return (
            <img key={index + 1} src={image} />
        )
    })
    return (
        <div>
            <h1>Name: {product.name}</h1>
            <p>Price: {product.price}</p>
            <p>Amount: {product.amount}</p>
            <p>Description: {product.description_full}</p>
            <p>Language: {product.language}</p>
            <p>Platform: {product.platform}</p>
            <p>Producer: {product.producer}</p>
            {images}
            <button>Add to Basket</button>
        </div>
    )
}

export default Product