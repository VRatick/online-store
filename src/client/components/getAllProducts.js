import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { buyButton } from '../styles/materialUIStyles';


function GetAllProducts (props) {

    const products = props.productsList.map( (product) => {
        return (
            <div key={product.uuid} className='product'>
                <div className='product-image'>
                    <Link to={{
                        pathname: "/product",
                        hash: "#" + product.uuid,
                        state: product
                        }}>                    
                        <img className='image' src={product.image[0]}/>                                  
                    </Link>                   
                </div>
                <div className='product-information'>
                    <Link style={{textDecoration: 'none', color: 'black'}} to={{
                        pathname: "/product",
                        hash: "#" + product.uuid,
                        state: product
                        }}>                    
                        <p>{product.name}</p>
                        <p>${product.price}, {product.producer}</p>                        
                        <p>{product.description_short}</p>                                  
                    </Link>
                </div>
                <div className='product-add-to-basket'>
                    <Button style={buyButton} variant="contained" onClick={
                            () => {
                                props.addProductToBasket(product);
                                props.setAlert(true)                                                   
                            }
                        }><ShoppingBasketIcon/></Button>
                </div>                
            </div>
        )
    })
    return products
}

export default GetAllProducts;