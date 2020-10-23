import React from 'react';
import { connect } from 'react-redux';
import { removeProduct } from '../redux/actions/basket';
import { Select, MenuItem } from '@material-ui/core';

function Basket (props) {    
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
    }) : <div>The basket is empty</div>;    
    return (
        <div>
            {products}
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

