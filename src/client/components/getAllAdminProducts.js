import React from 'react';
import Carousel from '../components/carousel';
import adminPanelText from '../assets/local/adminPanel.json';
import DeleteIcon from '../assets/images/DeleteIcon.png'
import PenIcon from '../assets/images/PenIcon.svg';

function GetAllAdminProducts (props) {
    return props.db.map( (product) => {
        const images = props.GetProductImages(product, 'small');
        return (
            <div key={product.uuid} className='product height'>
                <div className='product-image'>                                      
                    <Carousel images={images}/>                                  
                </div>
                <div className='product-information'>
                    <p>{adminPanelText.uuid}: {product.uuid}</p>                 
                    <p>{adminPanelText.name}: {product.name}</p>
                    <p>{adminPanelText.price}: ${product.price}</p>                                        
                    <p>{adminPanelText.description_short}: {product.description_short}</p>   
                    <p>{adminPanelText.description_full}: {product.description_full}</p>
                    <p>{adminPanelText.producer}: {product.producer}</p>   
                    <p>{adminPanelText.amount}: {product.amount}</p>   
                    <p>{adminPanelText.language}: {product.language}</p>
                    <p>{adminPanelText.date}: {product.date}</p>
                    <p>{adminPanelText.platform}: {product.platform}</p>
                </div>
                <div className='product-add-to-basket'>
                    <button className="remove-product buy-button" onClick={
                        () => {
                            props.deleteProduct(product.uuid)                            
                        }
                    }><img className='basket-icon' src={DeleteIcon} /></button>
                    <button className='change-button' onClick={
                        () => {                                                                           
                            props.setProductDB({...props.productDB,
                                uuid: product.uuid,
                                name: product.name,
                                price: product.price,
                                description_short: product.description_short,
                                description_full: product.description_full,
                                producer: product.producer,
                                amount: product.amount,
                                language: product.language,
                                date: product.date,
                                platform: product.platform,
                                image: product.image,
                                __v: product.__v,
                                _id: product._id
                            });   
                            props.handleClickOpen();                             
                        }
                    }><img className='basket-icon' src={PenIcon} />
                    </button>
                </div>
            </div>
        )
    })
}

export default GetAllAdminProducts