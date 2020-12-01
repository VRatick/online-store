import React from 'react';
import DeleteIcon from '../assets/images/DeleteIcon.png'
import customerBasket from '../assets/local/customersBasket.json';

function GetBasketProducts (props) {    
    return props.products.map( (product) => {             
        let amount = [];         
        for (let i = 1; i <= product.amount; i++) {
            amount.push(<option key={i+1} value={i}>{i}</option>)
        }
        let productInfo = {} ;
        props.productsList.forEach( (item) => {
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
                                    props.setProductAmount(event, product.uuid)
                                    props.changeTotalSum()
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
                            props.productsList.forEach( (item, index) => {
                                if (item.uuid === product.uuid) {
                                    props.productsList.splice(index, 1);
                                }
                            })
                            props.changeTotalSum();                                               
                        }
                    }
                    className='change-button'
                    >
                        <img className='basket-icon' src={DeleteIcon} />
                    </button>
                </div>
            </div>
        )
    }) 
}

export default GetBasketProducts;