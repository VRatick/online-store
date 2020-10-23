import React from 'react';
import { connect } from 'react-redux';
import { removeProduct } from '../redux/actions/basket';

function Basket (props) {
    const products = props.products.length !== 0 ? props.products.map( (product) => {
        const count = 1;
        return (
            <div key={product.uuid}>
                <img src={product.image[0]} />
                <h2>Name: {product.name}</h2>
                <p>Amount: {count}</p>
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

