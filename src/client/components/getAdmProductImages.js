import React from 'react';

function GetAdmProductImages (product) {
    const images = product.image.map( (image, index) => {
        return (
            <div key ={index + 1} style={{ 
                height: '150px', 
                width: '150px',  
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

export default GetAdmProductImages