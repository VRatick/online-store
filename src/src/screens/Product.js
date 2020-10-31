import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProduct } from '../redux/actions/basket'
import '../styles/product.css';
import { Grid, Button, Snackbar } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Alert from '@material-ui/lab/Alert';
import productInfo from '../assets/customersBasket.json'

function Product (props) {    
    const match = useLocation();
    const [alert, setAlert] = useState(false)

    const handleClose = (event, reason) => {
        console.log(1)
        if (reason === 'clickaway') {
          return;
        }
        
        setAlert(false);
      };
    const product = match.state;
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
                        <Button className='buy-container' style={{backgroundColor: '#00A046', color: 'white'}} variant="contained" onClick={
                                () => {
                                    props.addProductToBasket(product);
                                    setAlert(true)                       
                                }
                            }>{productInfo.buyButton}<ShoppingBasketIcon></ShoppingBasketIcon>
                        </Button>
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
                    <Carousel showThumbs={false}>
                        {images}
                    </Carousel>      
                </div>
            </Grid>
            <Snackbar open={alert} autoHideDuration={2000} onClose={handleClose}>
                    <Alert severity="success" onClose={handleClose}>
                        {productInfo.add_to_the_basket_message}
                    </Alert>
            </Snackbar>
        </div>
    )
}
  
const mapDispatchToProps = (dispatch) => ({
    addProductToBasket: (product) => dispatch(addProduct(product)),
});
  
export default connect(null, mapDispatchToProps)(Product);

