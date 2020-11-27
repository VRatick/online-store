import React, { useState } from 'react';
import { Grid,  Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import productInfo from '../assets/local/customersBasket.json';
import GetAllProducts from '../components/getAllProducts'
import '../styles/productslist.css'

function ProductsList (props) {
    const [alert, setAlert] = useState(false)    

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setAlert(false);
      };   

    return (        
        <div className='products-list'>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"               
            >                
                <GetAllProducts productsList={props.allProducts} addProductToBasket={props.addProductToBasket} setAlert={setAlert}/>
            </Grid>
            <Snackbar open={alert} autoHideDuration={2000} onClose={handleClose}>
                    <Alert severity="success" onClose={handleClose}>
                        {productInfo.add_to_the_basket_message}
                    </Alert>
            </Snackbar>          
        </div>    
    )
}

export default ProductsList;