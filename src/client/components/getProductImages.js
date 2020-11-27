import React from 'react';

function GetProductImages (product) {
    const images = product.image.map( (image, index) => {
        return (
            <div key ={index + 1} style={{ 
                height: '600px', 
                width: '600px',  
                background: `url(${image}) 100% 100% no-repeat` , 
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: '#BEBEBE' 
                }}>      
            </div>                   
        )
    })
    return images
}

export default GetProductImages