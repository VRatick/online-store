import React from 'react';
import db from '../assets/db.json'
import { Link } from "react-router-dom";
import { addProduct } from '../redux/actions/basket'
import { connect } from 'react-redux';

function ProductsList (props) {
    const products = db.map( (product) => {
        return (
            
            <div key={product.uuid}>
                <Link to={{
                    pathname: "/product",
                    hash: "#" + product.uuid,
                    state: product
                    }}>                    
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                    <p>{product.producer}</p>
                    <p>{product.description_short}</p>
                    <img src={product.image[0]}/>                    
                </Link>
                <button onClick={
                        () => {
                            props.addProductToBasket(product);                    
                        }
                    }>Add to Basket</button>
            </div>
        )
    })
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
    addProductToBasket: (product) => dispatch(addProduct(product)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);