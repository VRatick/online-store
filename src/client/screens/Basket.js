import React, { useState } from 'react';
import customerBasket from '../assets/local/customersBasket.json';
import UserForm from '../components/userForm'
import GetBasketProducts from '../components/getBasketProducts';
import GameIcon from '../assets/images/GameIcon.png'
import SmileIcon from '../assets/images/SmileIcon.png'
import { validationName, validationSurname, validationPhone, validationCity} from '../assets/validation';
import inputPhoneReplace from '../components/inputPhoneReplace';
import '../styles/basket.css';


function Basket (props) {    
    const [customerInformation, setСustomerInformation] = useState({
        name: null,
        surname: null,
        phone: null,
        country: '',
        city: null,
        nameValidation: true,        
        surnameValidation: true,
        phoneValidation: true,        
        cityValidation: true
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
    
    const disabledButton = () => {
        return customerInformation.nameValidation && 
        customerInformation.surnameValidation && 
        customerInformation.phoneValidation && 
        customerInformation.country !== null && 
        customerInformation.cityValidation ? false : true 
    }

    const userForm = props.products.length !== 0 ? (
        <div className='basket-user-information'>
            <h1>
                {customerBasket.buyerInformation}
            </h1>
            <UserForm 
                disabledButton={disabledButton} 
                setDeal={setDeal} 
                setCustomerCity={setCustomerCity} 
                setCustomerName={setCustomerName} 
                setCustomerSurname={setCustomerSurname}
                setCustomerPhone={setCustomerPhone}
                setCustomerCountry={setCustomerCountry}
                customerInformation={customerInformation}
            />
        </div>
    ) : null

    const products = props.products.length !== 0 ? 
        <GetBasketProducts 
            removeProductFromBasket={props.removeProductFromBasket}
            changeTotalSum={changeTotalSum}
            setProductAmount={setProductAmount}
            products={props.products}
            productsList={productsList}
        /> : 
        <div className='basket-empty'>
            <img className='basket-icon' src={GameIcon} />
            <p>{customerBasket.emptyBasket}</p>
        </div>;    
    
    return deal ? (
        <div className='basket-container'>
            <div className='basket-deal-message'>
                <div className='basket-deal-text'>
                    <img className='basket-icon' src={SmileIcon} />    
                    <p>{customerBasket.dealMessage}</p>
                </div>
            </div>
        </div>
    ) : (          
        <div className='basket-container'>
            <div className='flex-container'>  
                <div className='basket-products'>
                    <div className='basket-products-list'>
                        {products}
                    </div>
                    <div className='basket-total-sum'>
                        {props.products.length !== 0 ? <h2 class='text-center'>Total: {sum} $</h2> : null}     
                    </div>      
                </div>                      
                {userForm}  
            </div>          
        </div>
        
    ) 
    
}

export default Basket;

