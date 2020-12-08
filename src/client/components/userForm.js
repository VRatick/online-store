import React from 'react';
import TextInput from '../components/textInput'
import countries from '../assets/counties.json';
import customerBasket from '../assets/local/customersBasket.json';

function UserForm (props) {
    return (
        <form>
            <TextInput info='name' infoMessage='nameMessage' onChange={props.setCustomerName} value={props.customerInformation} text={customerBasket}/>
            <TextInput info='surname' infoMessage='surnameMessage' onChange={props.setCustomerSurname} value={props.customerInformation} text={customerBasket}/>
            <TextInput info='phone' infoMessage='phoneMessage' onChange={props.setCustomerPhone} value={props.customerInformation} text={customerBasket}/>
            <div className='basket-input'>
                <p>{customerBasket.country}</p>
                <select                        
                    className='text-input'
                    value={props.customerInformation.country}
                    onChange={props.setCustomerCountry}                        
                    >
                    {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                        {country.name}
                        </option>
                    ))}
                </select>
            </div>
            <TextInput info='city' infoMessage='cityMessage' onChange={props.setCustomerCity} value={props.customerInformation} text={customerBasket}/>
            <div>
                <button                         
                    disabled={props.disabledButton()}                         
                    onClick={() => {
                        props.setDeal(true)
                    }}
                    className='buy-button'
                >
                    {customerBasket.buyButton}
                </button> 
            </div>               
        </form>     
    )
}

export default UserForm