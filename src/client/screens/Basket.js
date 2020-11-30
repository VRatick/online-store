import React, { useState } from 'react';
import countries from '../assets/counties.json';
import customerBasket from '../assets/local/customersBasket.json';
import GameIcon from '../assets/images/GameIcon.png'
import DeleteIcon from '../assets/images/DeleteIcon.png'
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

    const userForm = props.products.length !== 0 ? (
        <div className='basket-user-information'>
            <h1>
                {customerBasket.buyerInformation}
            </h1>
            <form>
                <div className='basket-input'>                
                    <p>{customerBasket.name}</p>
                    <input className='text-input' value={customerInformation.name} onChange={setCustomerName} placeholder={customerBasket.nameMessage}></input>  
                </div>
                <div className='basket-input'>
                    <p>{customerBasket.surname}</p>
                    <input className='text-input' value={customerInformation.surname} onChange={setCustomerSurname} placeholder={customerBasket.surnameMessage}></input>
                </div>
                <div className='basket-input'>
                    <p>{customerBasket.phone}</p>
                    <input className='text-input' value={customerInformation.phone} onChange={setCustomerPhone} placeholder={customerBasket.phoneMessage}></input>
                </div>
                <div className='basket-input'>
                    <p>{customerBasket.country}</p>
                    <select                        
                        className='text-input'
                        value={customerInformation.country}
                        onChange={setCustomerCountry}                        
                        >
                        {countries.map((country) => (
                            <option key={country.code} value={country.name}>
                            {country.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='basket-input'>
                    <p>{customerBasket.city}</p>
                    <input className='text-input' value={customerInformation.city} onChange={setCustomerCity} placeholder={customerBasket.cityMessage}></input>                      
                </div>
                <div>
                    <button                         
                        disabled={customerInformation.nameValidation && 
                        customerInformation.surnameValidation && 
                        customerInformation.phoneValidation && 
                        customerInformation.country !== null && 
                        customerInformation.cityValidation ? false : true}                         
                        onClick={() => {
                            setDeal(true)
                        }}
                        className='buy-button'
                    >
                        {customerBasket.buyButton}
                    </button> 
                </div>               
            </form>
        </div>
    ) : null

    const products = props.products.length !== 0 ? props.products.map( (product) => {             
        let amount = [];         
        for (let i = 1; i <= product.amount; i++) {
            amount.push(<option key={i+1} value={i}>{i}</option>)
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
                            <select className='amount-input' value={productInfo.amount} onChange={
                                (event) => {
                                    setProductAmount(event, product.uuid)
                                    changeTotalSum()
                                }
                            }>
                                {amount}
                            </select>
                        </div>
                        <div className='basket-product-price'>
                            <p>{customerBasket.total}</p>
                            <p>{productInfo.total}$</p>
                        </div>                  
                    </div>
                </div>
                <div className='basket-product-remove-from-basket'>
                    <button onClick={ 
                            () => {
                            props.removeProductFromBasket(product.uuid)
                            productsList.forEach( (item, index) => {
                                if (item.uuid === product.uuid) {
                                    productsList.splice(index, 1);
                                }
                            })
                            changeTotalSum();                                               
                        }
                    }
                    className='change-button'
                    >
                        <img className='basket-icon' src={DeleteIcon} />
                    </button>
                </div>
            </div>
        )
    }) : <div className='basket-empty'>
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

