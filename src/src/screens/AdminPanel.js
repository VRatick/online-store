import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProductToDataBase, changeProductFromDataBase, removeProductFromDataBase } from '../redux/actions/products';
import { Grid, Select, MenuItem, TextField, FormControl, FormHelperText, Input, InputLabel, Button, InputAdornment} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Carousel } from 'react-responsive-carousel';

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
    
    const [productsList, setProductsList] = useState(props.allProducts);

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
    
    const products = productsList.map( (product) => {
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
            <div key={product.uuid} className='product' style={{height: '700px'}}>
                <div className='product-image'>                                      
                    <Carousel showThumbs={false}>
                        {images}
                    </Carousel>              
                </div>
                <div className='product-information'>
                    <p>Uuid: {product.uuid}</p>                 
                    <p>Name: {product.name}</p>
                    <p>Price: ${product.price}</p>                                        
                    <p>Description_short: {product.description_short}</p>   
                    <p>Description_full: {product.description_full}</p>
                    <p>Producer: {product.producer}</p>   
                    <p>Amount: {product.amount}</p>   
                    <p>Language: {product.language}</p>
                    <p>Date: {product.date}</p>
                    <p>Platform: {product.platform}</p>
                </div>
                <div className='product-add-to-basket'>
                    <Button style={{backgroundColor: '#00A046', color: 'white'}} variant="contained" onClick={
                        () => {
                            props.deleteProduct(product.uuid)
                            productsList.forEach( (item, index) => {
                                if (item.uuid === product.uuid) {
                                    productsList.splice(index, 1);
                                }
                            })
                        }
                    }><HighlightOffIcon></HighlightOffIcon></Button>
                </div>
            </div>
        )
    })

    const addProductForm = (        
        <div className='product' style={{height: '800px', width: '600px', display: showForm ? 'block' : 'none'}}>            
            <form>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input
                        id="customer-name"
                        value={productDB.name}
                        onChange={setProductName}                    
                        aria-describedby="name-text"
                        />
                        <FormHelperText id="name-text">Enter product name</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="price">Price</InputLabel>
                        <Input
                        id="price"
                        value={productDB.price}
                        onChange={setProductPrice}                    
                        aria-describedby="price-text"
                        />
                        <FormHelperText id="price-text">Enter product price</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="description-short">Description short</InputLabel>
                        <Input
                        id="description-short"
                        value={productDB.description_short}
                        onChange={setProductDescriptionShort}                    
                        aria-describedby="description-short-text"
                        />
                        <FormHelperText id="description-short-text">Enter product description short</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="description-full">Description full</InputLabel>
                        <Input
                        id="description-full"
                        value={productDB.description_full}
                        onChange={setProductDescriptionFull}                    
                        aria-describedby="description-full-text"
                        />
                        <FormHelperText id="description-full-text">Enter product description full</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="producer">Producer</InputLabel>
                        <Input
                        id="producer"
                        value={productDB.producer}
                        onChange={setProductProduser}                    
                        aria-describedby="producer-text"
                        />
                        <FormHelperText id="producer-text">Enter product producer</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="amount">Amount</InputLabel>
                        <Input
                        id="amount"
                        value={productDB.amount}
                        onChange={setProductAmount}                    
                        aria-describedby="amount-text"
                        />
                        <FormHelperText id="amount-text">Enter product amount</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="language">Language</InputLabel>
                        <Input
                        id="language"
                        value={productDB.language}
                        onChange={setProductLanguage}                    
                        aria-describedby="language-text"
                        />
                        <FormHelperText id="language-text">Enter product language</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="date">Date</InputLabel>
                        <Input
                        id="date"
                        value={productDB.date}
                        onChange={setProductDate}                    
                        aria-describedby="date-text"
                        />
                        <FormHelperText id="date-text">Enter product release date</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="platform">Platform</InputLabel>
                        <Input
                        id="platform"
                        value={productDB.platform}
                        onChange={setProductPlatform}                    
                        aria-describedby="platform-text"
                        />
                        <FormHelperText id="platform-text">Enter product platform</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="images">Images</InputLabel>
                        <Input
                        id="images"
                        value={productDB.image}
                        onChange={setProductImages}                    
                        aria-describedby="images-text"
                        />
                        <FormHelperText id="images-text">Enter product src images</FormHelperText>
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
                            productsList.push(productDB);
                        }}
                    >
                        Add
                    </Button> 
                </div>               
            </form>
        </div>
        )
    
    return (        
        <div className='products-list' style={{textAlign: 'center'}}>
            <div>
                <Button color="primary" variant="contained" onClick={() => {setShowForm(!showForm)}}>Add Product</Button>
            </div>
            <div className='add-product-form' style={{marginTop: '10px'}}>
                {addProductForm}
            </div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"               
            >                
                {products}  
            </Grid>          
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


