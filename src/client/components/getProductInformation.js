import React from 'react'
import BasketIcon from '../assets/images/BasketIcon.png'

function GetProductInformation (props) {
    return (
        <div className='single-product-full-information'>
            <div className='single-product-name'>
                <p>{props.product.name}</p>
            </div>
            <div className='single-product-buy'>
                <p className='buy-container price'>{props.product.price}$</p>                        
                <button className='buy-button buy-container' onClick={
                    () => {
                        props.addProductToBasket(props.product);                                                          
                    }
                }>                            
                    <img className='basket-icon' src={BasketIcon} />
                </button>
            </div>
            <div className='single-product-description'>                        
                <p className='description-text'>{props.product.description_full}</p>
                <p><strong>Language:</strong> {props.product.language}</p>
                <p><strong>Platform:</strong> {props.product.platform}</p>
                <p><strong>Producer:</strong> {props.product.producer}</p>
                <p><strong>Amount:</strong> {props.product.amount}</p>
            </div>                    
        </div>
    )
}

export default GetProductInformation