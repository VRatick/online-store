import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeProduct } from '../redux/actions/basket';
import { Grid, Select, MenuItem, TextField, FormControl, FormHelperText, Input, InputLabel, Button, InputAdornment} from '@material-ui/core';
import countries from '../assets/counties.json';
import customerBasket from '../assets/customersBasket.json';
import { validationName, validationSurname, validationPhone, validationCity} from '../assets/validation';
import inputPhoneReplace from '../components/inputPhoneReplace';
import '../styles/basket.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

function Basket (props) {    
    const [customerInformation, setСustomerInformation] = useState({
        name: null,
        surname: null,
        phone: null,
        country: '',
        city: null,
        nameValidation: null,        
        surnameValidation: null,
        phoneValidation: null,        
        cityValidation: null
    })
    const [deal, setDeal] = useState(false);
    const [productsList, setProductsList] = useState( () => {
            const arr = [];
            props.products.forEach( (product) => {                             
                arr.push({
                    uuid: product.uuid,
                    amount: 1,
                    price: product.price
                })
            })            
            return arr            
        }
    );
    const [sum, setSum] = useState( () => {
            let total = 0;
            productsList.forEach( (product) => {
                total += product.amount * product.price
            })
            return total
    });    

    const setCustomerName = (event) => {
        const customer = {...customerInformation};
        customer.name = event.target.value;
        if (customer.name !== null && customer.name.match(validationName)) {            
            customer.nameValidation = true;           
            
        }
        else {
            customer.nameValidation = false;            
        }
        setСustomerInformation(customer);        
    }    

    const setCustomerSurname = (event) => {
        const customer = {...customerInformation}
        customer.surname = event.target.value;
        if (customer.surname !== null && customer.surname.match(validationSurname)) {            
            customer.surnameValidation = true;           
            
        }
        else {
            customer.surnameValidation = false;            
        }
        setСustomerInformation(customer);        
    }    

    const setCustomerPhone = (event) => {
        const customer = {...customerInformation}
        customer.phone = inputPhoneReplace(event.target.value);
        if (customer.phone !== null && customer.phone.match(validationPhone)) {            
            customer.phoneValidation = true;           
            
        }
        else {
            customer.phoneValidation = false;            
        }
        setСustomerInformation(customer);        
    }    

    const setCustomerCity = (event) => {
        const customer = {...customerInformation}
        customer.city = event.target.value;
        if (customer.city !== null && customer.city.match(validationCity)) {            
            customer.cityValidation = true;           
            
        }
        else {
            customer.cityValidation = false;            
        }
        setСustomerInformation(customer);        
    }    

    const setCustomerCountry = (event) => {
        const customer = {...customerInformation}
        customer.country = event.target.value;
        setСustomerInformation(customer);
    }
    
    const setProductAmount = (event, uuid) => {        
        const productsArray = [...productsList];
        productsArray.forEach( (product, index) => {
            if (product.uuid === uuid) {
                productsArray[index].amount = event.target.value      
            }
        })
        setProductsList(productsArray);        
    }    
    
    const changeTotalSum = () => {        
        let sum = 0;
        productsList.forEach( (product) => {            
            sum += product.amount * +product.price;
        })
        setSum(sum);        
    }    

    const userForm = props.products.length !== 0 ? (
        <div className='basket-user-information'>
            <h1>
                {customerBasket.buyerInformation}
            </h1>
            <form>
                <div className='basket-input'>
                    <FormControl fullWidth={true} error={customerInformation.nameValidation === null || customerInformation.nameValidation === true ? false : true}>
                        <InputLabel htmlFor="customer-name">{customerBasket.name}</InputLabel>
                        <Input
                        id="customer-name"
                        value={customerInformation.name}
                        onChange={setCustomerName}                    
                        aria-describedby="customer-name-text"
                        />
                        <FormHelperText id="customer-name-text">{customerInformation.nameValidation === null || customerInformation.nameValidation === true ? customerBasket.nameMessage : customerBasket.validationError}</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true} error={customerInformation.surnameValidation === null || customerInformation.surnameValidation === true ? false : true}>
                        <InputLabel htmlFor="customer-surname">{customerBasket.surname}</InputLabel>
                        <Input
                        id="customer-surname"
                        value={customerInformation.surname}
                        onChange={setCustomerSurname}                    
                        aria-describedby="customer-surname-text"
                        />
                        <FormHelperText id="customer-surname-text">{customerInformation.surnameValidation === null || customerInformation.surnameValidation === true ? customerBasket.surnameMessage : customerBasket.validationError}</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true} error={customerInformation.phoneValidation === null || customerInformation.phoneValidation === true ? false : true}>
                        <InputLabel htmlFor="customer-phone">{customerBasket.phone}</InputLabel>
                        <Input
                        id="customer-phone"
                        value={customerInformation.phone}
                        onChange={setCustomerPhone}                    
                        aria-describedby="customer-phone-text"                    
                        startAdornment={<InputAdornment position="start">+38</InputAdornment>}
                        inputProps={{
                            "maxLength": "15"
                        }}                        
                        />
                        <FormHelperText id="customer-phone-text">{customerInformation.phoneValidation === null || customerInformation.phoneValidation === true ? customerBasket.phoneMessage : customerBasket.validationError}</FormHelperText>
                    </FormControl>
                </div>
                <div className='basket-input'>
                    <TextField
                        fullWidth={true}
                        id="customer-country"
                        select
                        label={customerBasket.country}
                        value={customerInformation.country}
                        onChange={setCustomerCountry}
                        helperText={customerBasket.countryMessage}
                        >
                        {countries.map((country) => (
                            <MenuItem key={country.code} value={country.name}>
                            {country.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className='basket-input'>
                    <FormControl fullWidth={true} error={customerInformation.cityValidation === null || customerInformation.cityValidation === true ? false : true}>
                        <InputLabel htmlFor="customer-city">{customerBasket.city}</InputLabel>
                        <Input
                        id="customer-city"
                        value={customerInformation.city}
                        onChange={setCustomerCity}                    
                        aria-describedby="customer-city-text"
                        />
                        <FormHelperText id="customer-city-text">{customerInformation.cityValidation === null || customerInformation.cityValidation === true ? customerBasket.cityMessage : customerBasket.validationError}</FormHelperText>
                    </FormControl>
                </div>
                <div>
                    <Button 
                        variant="contained" 
                        disabled={customerInformation.nameValidation && 
                        customerInformation.surnameValidation && 
                        customerInformation.phoneValidation && 
                        customerInformation.country !== null && 
                        customerInformation.cityValidation ? false : true} 
                        color="secondary"
                        onClick={() => {
                            setDeal(true)
                        }}
                    >
                        {customerBasket.buyButton}
                    </Button> 
                </div>               
            </form>
        </div>
    ) : null

    const products = props.products.length !== 0 ? props.products.map( (product) => {             
        let amount = [];         
        for (let i = 1; i <= product.amount; i++) {
            amount.push(<MenuItem value={i}>{i}</MenuItem>)
        }
        let productInfo = {} ;
            productsList.forEach( (item) => {
                if (item.uuid === product.uuid) {
                    productInfo.total = item.amount * item.price;
                    productInfo.amount = item.amount;
                }
            })      
           
        return (
            <div key={product.uuid} className='basket-product'>
                <div className='basket-product-image'>
                    <img className='image' src={product.image[0]} />
                </div>
                <div className='basket-product-information'>
                    <h2>{product.name}</h2>
                    <div className='basket-product-pricing'>
                        <div className='basket-product-price'>
                            <p>{customerBasket.price}</p>
                            <p>{product.price}$</p>
                        </div>
                        <div className='basket-product-amount'>
                            <p>{customerBasket.amount}</p>
                            <Select labelId={product.name} id={product.name} value={productInfo.amount} onChange={
                                (event) => {
                                    setProductAmount(event, product.uuid)
                                    changeTotalSum()
                                }
                            }>
                                {amount}
                            </Select>
                        </div>
                        <div className='basket-product-price'>
                            <p>{customerBasket.total}</p>
                            <p>{productInfo.total}$</p>
                        </div>                  
                    </div>
                </div>
                <div className='basket-product-remove-from-basket'>
                    <Button onClick={ 
                            () => {
                            props.removeProductFromBasket(product.uuid)
                            productsList.forEach( (item, index) => {
                                if (item.uuid === product.uuid) {
                                    productsList.splice(index, 1);
                                }
                            })
                            changeTotalSum();                                               
                        }
                    }><HighlightOffIcon></HighlightOffIcon></Button>
                </div>
            </div>
        )
    }) : <div className='basket-empty'>
            <VideogameAssetIcon fontSize='large'></VideogameAssetIcon>
            <p>{customerBasket.emptyBasket}</p>
        </div>;    
    
    return deal ? (
        <div className='basket-container'>
            <div className='basket-deal-message'>
                <div className='basket-deal-text'>
                    <EmojiEmotionsIcon fontSize='large'></EmojiEmotionsIcon>
                    <p>{customerBasket.dealMessage}</p>
                </div>
            </div>
        </div>
    ) : (          
        <div className='basket-container'>
            <Grid            
            container
            direction="row"
            justify="center"
            alignItems="center"               
            > 
                <div className='basket-products'>
                    <div className='basket-products-list'>
                        {products}
                    </div>
                    <div className='basket-total-sum'>
                        {props.products.length !== 0 ? <h2 class='text-center'>Total: {sum} $</h2> : null}     
                    </div>      
                </div>                      
                {userForm}  
            </Grid>          
        </div>
        
    ) 
    
}

const mapStateToProps = ( state ) => ({
    products: state.basket.products
  });
  
const mapDispatchToProps = (dispatch) => ({
    removeProductFromBasket: (productId) => dispatch(removeProduct(productId)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Basket);

