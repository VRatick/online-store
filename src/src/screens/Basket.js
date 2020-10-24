import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeProduct } from '../redux/actions/basket';
import { Select, MenuItem, TextField, FormControl, FormHelperText, Input, InputLabel, Button, InputAdornment} from '@material-ui/core';
import countries from '../assets/counties.json';
import customerBasket from '../assets/customersBasket.json';
import { validationName, validationSurname, validationPhone, validationCity} from '../assets/validation';

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
        customer.phone = inputPhone(event.target.value);
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

    const inputPhone = (phone) => {
        let phoneNumber = phone;          
        if (phoneNumber.length === 1) {
            phoneNumber = '(' + phoneNumber[0];
        }
        if (phoneNumber.length === 4) {
            phoneNumber += ') ';            
        }
        if (phoneNumber.length === 9) {
            phoneNumber += '-';
        }
        if (phoneNumber.length === 14) {
            return phoneNumber;
        }
        console.log(phoneNumber);
        return phoneNumber
        
    }

    const userForm = true ? (
        <div>
            <form>
                <FormControl error={customerInformation.nameValidation === null || customerInformation.nameValidation === true ? false : true}>
                    <InputLabel htmlFor="customer-name">{customerBasket.name}</InputLabel>
                    <Input
                    id="customer-name"
                    value={customerInformation.name}
                    onChange={setCustomerName}                    
                    aria-describedby="customer-name-text"
                    />
                    <FormHelperText id="customer-name-text">{customerInformation.nameValidation === null || customerInformation.nameValidation === true ? customerBasket.nameMessage : customerBasket.validationError}</FormHelperText>
                </FormControl>
                <FormControl error={customerInformation.surnameValidation === null || customerInformation.surnameValidation === true ? false : true}>
                    <InputLabel htmlFor="customer-surname">{customerBasket.surname}</InputLabel>
                    <Input
                    id="customer-surname"
                    value={customerInformation.surname}
                    onChange={setCustomerSurname}                    
                    aria-describedby="customer-surname-text"
                    />
                    <FormHelperText id="customer-surname-text">{customerInformation.surnameValidation === null || customerInformation.surnameValidation === true ? customerBasket.surnameMessage : customerBasket.validationError}</FormHelperText>
                </FormControl>
                <FormControl  error={customerInformation.phoneValidation === null || customerInformation.phoneValidation === true ? false : true}>
                    <InputLabel htmlFor="customer-phone">{customerBasket.phone}</InputLabel>
                    <Input
                    id="customer-phone"
                    value={customerInformation.phone}
                    onChange={setCustomerPhone}                    
                    aria-describedby="customer-phone-text"                    
                    startAdornment={<InputAdornment position="start">+38</InputAdornment>}
                    inputProps={{
                        "maxlength": "15"
                    }}                        
                    />
                    <FormHelperText id="customer-phone-text">{customerInformation.phoneValidation === null || customerInformation.phoneValidation === true ? customerBasket.phoneMessage : customerBasket.validationError}</FormHelperText>
                </FormControl>
                <TextField
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
                <FormControl error={customerInformation.cityValidation === null || customerInformation.cityValidation === true ? false : true}>
                    <InputLabel htmlFor="customer-city">{customerBasket.city}</InputLabel>
                    <Input
                    id="customer-city"
                    value={customerInformation.city}
                    onChange={setCustomerCity}                    
                    aria-describedby="customer-city-text"
                    />
                    <FormHelperText id="customer-city-text">{customerInformation.cityValidation === null || customerInformation.cityValidation === true ? customerBasket.cityMessage : customerBasket.validationError}</FormHelperText>
                </FormControl>
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
            </form>
        </div>
    ) : null

    const products = props.products.length !== 0 ? props.products.map( (product) => {
        const count = 1;
        let amount = [];         
        for (let i = 1; i <= product.amount; i++) {
            amount.push(<MenuItem value={i}>{i}</MenuItem>)
        }        
              
        return (
            <div key={product.uuid}>
                <img src={product.image[0]} />
                <h2>Name: {product.name}</h2>
                <Select labelId="label" id={product.name} value="1">
                    {amount}
                </Select>
                <p>Price: {product.price * count}</p>
                <button onClick={ 
                        () => {
                        props.removeProductFromBasket(product.uuid)                        
                    }
                }>Remove Product From Basket</button>
            </div>
        )
    }) : <div>{customerBasket.emptyBasket}</div>;
    
    return deal ? (
        <div>
            {customerBasket.dealMessage}
        </div>
    ) : (
        <div>
            <div>
             {products}
            </div>           
             {userForm}            
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

