import React from 'react';

function GetProductImages (product, size) {
    const images = product.image.map( (image, index) => {        
        return (
            <div key ={index + 1} className={size === 'normal' ? 'single-product-image' : 'single-product-image-min'}> 
                <img className='image-container' src={image} />
            </div>                   
        )
    })
    return images
}

export default GetProductImages