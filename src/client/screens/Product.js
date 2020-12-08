import React from 'react';
import { useLocation } from 'react-router-dom';
import GetProductImages from '../components/getProductImages';
import Carousel from '../components/carousel';
import '../styles/product.css';
import GetProductInformation from '../components/getProductInformation';

function Product (props) {    
    const match = useLocation();    
    const product = match.state;
    const images = GetProductImages(product, 'normal')
    
    return (
        <div className='single-product'>
            <div className='flex-container'>  
                <GetProductInformation 
                    addProductToBasket={props.addProductToBasket}
                    product={product}
                />
                <div className='single-product-images'>
                    <Carousel images={images}/>                           
                </div>
            </div>            
        </div>
    )
}
  
export default Product;