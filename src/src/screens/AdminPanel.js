import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProductToDataBase, changeProductFromDataBase, removeProductFromDataBase } from '../redux/actions/products';
import { Grid, FormControl, FormHelperText, Input, InputLabel, Button } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Carousel } from 'react-responsive-carousel';
import adminPanelText from '../assets/adminPanel.json';

function AdminPanel (props) {
    const [productDB, setProductDB] = useState({
        uuid: Date.now(),
        name: null,
        price: null,
        description_short: null,
        description_full: null,
        producer: null,
        amount: null,
        language: null,
        date: null,
        platform: null,
        image: null
    })
    const [showForm, setShowForm] = useState(false)
    
    const db = props.allProducts   

    const setProductName = (event) => {
        const product = {...productDB};
        product.name = event.target.value;        
        setProductDB(product);        
    }

    const setProductPrice = (event) => {
        const product = {...productDB};
        product.price = +event.target.value;        
        setProductDB(product);        
    }

    const setProductDescriptionShort = (event) => {
        const product = {...productDB};
        product.description_short = event.target.value;        
        setProductDB(product);        
    }

    const setProductDescriptionFull = (event) => {
        const product = {...productDB};
        product.description_full = event.target.value;        
        setProductDB(product);        
    }

    const setProductProduser = (event) => {
        const product = {...productDB};
        product.producer = event.target.value;        
        setProductDB(product);        
    }

    const setProductAmount = (event) => {
        const product = {...productDB};
        product.amount = +event.target.value;        
        setProductDB(product);        
    }

    const setProductLanguage = (event) => {
        const product = {...productDB};
        product.language = event.target.value;        
        setProductDB(product);        
    }

    const setProductDate = (event) => {
        const product = {...productDB};
        product.date = +event.target.value;        
        setProductDB(product);        
    }

    const setProductPlatform = (event) => {
        const product = {...productDB};
        product.platform = event.target.value;        
        setProductDB(product);        
    }

    const setProductImages = (event) => {
        const product = {...productDB};
        product.image = event.target.value.split(' ');        
        setProductDB(product);        
    }
    
    const products = db.map( (product) => {
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
        return (
            <div key={product.uuid} className='product height'>
                <div className='product-image'>                                      
                    <Carousel showThumbs={false}>
                        {images}
                    </Carousel>              
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
                    <Button className="remove-product" style={{backgroundColor: '#00A046', color: 'white'}} variant="contained" onClick={
                        () => {
                            props.deleteProduct(product.uuid)                            
                        }
                    }><HighlightOffIcon></HighlightOffIcon></Button>
                </div>
            </div>
        )
    })

    const addProductForm = (        
        <div className=''>            
            <form>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="name">{adminPanelText.name}</InputLabel>
                        <Input
                        id="customer-name"
                        value={productDB.name}
                        onChange={setProductName}                    
                        aria-describedby="name-text"
                        />
                        <FormHelperText id="name-text">{adminPanelText.name_help_text}</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="price">{adminPanelText.price}</InputLabel>
                        <Input
                        id="price"
                        value={productDB.price}
                        onChange={setProductPrice}                    
                        aria-describedby="price-text"
                        />
                        <FormHelperText id="price-text">{adminPanelText.price_help_text}</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="description-short">{adminPanelText.description_short}</InputLabel>
                        <Input
                        id="description-short"
                        value={productDB.description_short}
                        onChange={setProductDescriptionShort}                    
                        aria-describedby="description-short-text"
                        />
                        <FormHelperText id="description-short-text">{adminPanelText.description_short_help_text}</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="description-full">{adminPanelText.description_full}</InputLabel>
                        <Input
                        id="description-full"
                        value={productDB.description_full}
                        onChange={setProductDescriptionFull}                    
                        aria-describedby="description-full-text"
                        />
                        <FormHelperText id="description-full-text">{adminPanelText.description_full_help_text}</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="producer">{adminPanelText.producer}</InputLabel>
                        <Input
                        id="producer"
                        value={productDB.producer}
                        onChange={setProductProduser}                    
                        aria-describedby="producer-text"
                        />
                        <FormHelperText id="producer-text">{adminPanelText.producer_help_text}</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="amount">{adminPanelText.amount}</InputLabel>
                        <Input
                        id="amount"
                        value={productDB.amount}
                        onChange={setProductAmount}                    
                        aria-describedby="amount-text"
                        />
                        <FormHelperText id="amount-text">{adminPanelText.amount_help_text}</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="language">{adminPanelText.language}</InputLabel>
                        <Input
                        id="language"
                        value={productDB.language}
                        onChange={setProductLanguage}                    
                        aria-describedby="language-text"
                        />
                        <FormHelperText id="language-text">{adminPanelText.language_help_text}</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="date">{adminPanelText.date}</InputLabel>
                        <Input
                        id="date"
                        value={productDB.date}
                        onChange={setProductDate}                    
                        aria-describedby="date-text"
                        />
                        <FormHelperText id="date-text">{adminPanelText.date_hepl_text}</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="platform">{adminPanelText.platform}</InputLabel>
                        <Input
                        id="platform"
                        value={productDB.platform}
                        onChange={setProductPlatform}                    
                        aria-describedby="platform-text"
                        />
                        <FormHelperText id="platform-text">{adminPanelText.platform_help_text}</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="images">{adminPanelText.images}</InputLabel>
                        <Input
                        id="images"
                        value={productDB.image === null ? productDB.image : productDB.image.join(' ')}
                        onChange={setProductImages}                    
                        aria-describedby="images-text"
                        />
                        <FormHelperText id="images-text">{adminPanelText.images_help_text}</FormHelperText>
                    </FormControl>
                </div>
                <div>
                    <Button 
                        variant="contained" 
                        disabled={!(productDB.name && 
                            productDB.price && 
                            productDB.description_short &&
                            productDB.description_full && 
                            productDB.producer &&
                            productDB.amount &&
                            productDB.language &&
                            productDB.date &&
                            productDB.platform &&
                            productDB.image !== null)} 
                        color="secondary"
                        onClick={() => {                            
                            props.addProduct(productDB);  
                            window.location.reload(false);                            
                        }}
                    >
                        {adminPanelText.add}
                    </Button> 
                </div>               
            </form>
        </div>
        )
    
    return (        
        <div className='products-list center'>
            <div>
                <Button color="primary" variant="contained" onClick={() => {setShowForm(!showForm)}}>{!showForm ? adminPanelText.add_product : adminPanelText.show_products}</Button>
            </div>
            <div className='add-product-form'  style={{display: showForm ? 'block' : 'none'}}>
                {addProductForm}
            </div>
            <div className='margin-top' style={{display: !showForm ? 'block' : 'none'}}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"               
                >                
                    {products}  
                </Grid> 
            </div>         
        </div>    
    )
}

const mapStateToProps = ( state ) => ({
    allProducts: state.products.allProducts,    
  });

const mapDispatchToProps = (dispatch) => ({    
    addProduct: (product) => dispatch(addProductToDataBase(product)),
    changeProduct: (product) => dispatch(changeProductFromDataBase(product)),
    deleteProduct: (productId) => dispatch(removeProductFromDataBase(productId)),
    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);


