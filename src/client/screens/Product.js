import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Button, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import GetProductImages from '../components/getProductImages';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Carousel from '../components/carousel';
import productInfo from '../assets/local/customersBasket.json'
import { buyButton } from '../styles/materialUIStyles';
import '../styles/product.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function Product (props) {    
    const match = useLocation();
    const [showAlert, setShowAlert] = useState(false)
    
    const handleClose = (event, reason) => {        
        if (reason === 'clickaway') {
          return;
        }
        
        setShowAlert(false);
      };
    const product = match.state;
    const images = GetProductImages(product)
    
    return (
        <div className='single-product'>
            <Grid            
                container
                direction="row"
                justify="center"
                alignItems="center"               
            >                
                <div className='single-product-full-information'>
                    <div className='single-product-name'>
                        <p>{product.name}</p>
                    </div>
                    <div className='single-product-buy'>
                        <p className='buy-container price'>{product.price}$</p>                        
                        <Button className='buy-container buy-button' style={buyButton} variant="contained" onClick={
                                () => {
                                    props.addProductToBasket(product);
                                    setShowAlert(true)                       
                                }
                            }>{productInfo.buyButton}<ShoppingBasketIcon /></Button>
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
            </Grid>
            <Snackbar open={showAlert} autoHideDuration={2000} onClose={handleClose}>
                    <Alert severity="success" onClose={handleClose}>
                        {productInfo.add_to_the_basket_message}
                    </Alert>
            </Snackbar>
        </div>
    )
}
  
export default Product;