import React from 'react';

function GetProductImages (product, size) {
    const images = product.image.map( (image, index) => {        
        return (
            <div key ={index + 1} className={size === 'normal' ? 'image-container-normal' : 'image-container-small'}> 
                <img className='image-contain' src={image} />
            </div>                   
        )
    })
    return images
}

export default GetProductImages