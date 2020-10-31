import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { addProduct } from '../redux/actions/basket'
import { connect } from 'react-redux';
import '../styles/productslist.css'
import { Grid, Button, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import productInfo from '../assets/customersBasket.json'

function ProductsList (props) {
    const [alert, setAlert] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setAlert(false);
      };

    const db = props.allProducts;
    const products = db.map( (product) => {
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
                    <Button style={{backgroundColor: '#00A046', color: 'white'}} variant="contained" onClick={
                            () => {
                                props.addProductToBasket(product);
                                setAlert(true)                                                   
                            }
                        }><ShoppingBasketIcon></ShoppingBasketIcon></Button>
                </div>                
            </div>
        )
    })
    return (        
        <div className='products-list'>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"               
            >                
                {products}  
            </Grid>
            <Snackbar open={alert} autoHideDuration={2000} onClose={handleClose}>
                    <Alert severity="success" onClose={handleClose}>
                        {productInfo.add_to_the_basket_message}
                    </Alert>
            </Snackbar>          
        </div>    
    )
}

const mapStateToProps = ( state ) => ({
    products: state.basket.products,
    allProducts: state.products.allProducts
  });

const mapDispatchToProps = (dispatch) => ({
    addProductToBasket: (product) => dispatch(addProduct(product))    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);