import React from 'react';
import { useLocation } from 'react-router-dom';
import GetProductImages from '../components/getProductImages';
import BasketIcon from '../assets/images/BasketIcon.png'
import Carousel from '../components/carousel';
import '../styles/product.css';

function Product (props) {    
    const match = useLocation();    
    const product = match.state;
    const images = GetProductImages(product, 'normal')
    
    return (
        <div className='single-product'>
            <div className='flex-container'>  
                <div className='single-product-full-information'>
                    <div className='single-product-name'>
                        <p>{product.name}</p>
                    </div>
                    <div className='single-product-buy'>
                        <p className='buy-container price'>{product.price}$</p>                        
                        <button className='buy-button buy-container' onClick={
                            () => {
                                props.addProductToBasket(product);                                                          
                            }
                        }>                            
                            <img className='basket-icon' src={BasketIcon} />
                        </button>
                    </div>
                    <div className='single-product-description'>                        
                        <p className='description-text'>{product.description_full}</p>
                        <p><strong>Language:</strong> {product.language}</p>
                        <p><strong>Platform:</strong> {product.platform}</p>
                        <p><strong>Producer:</strong> {product.producer}</p>
                        <p><strong>Amount:</strong> {product.amount}</p>
                    </div>                    
                </div>
                <div className='single-product-images'>
                    <Carousel images={images}/>                           
                </div>
            </div>            
        </div>
    )
}
  
export default Product;