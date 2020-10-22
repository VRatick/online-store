import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProduct } from '../redux/actions/basket'

function Product (props) {   
    const match = useLocation();
    const product = match.state;
    const images = product.image.map( (image, index) => {
        return (
            <img key={index + 1} src={image} />
        )
    })
    return (
        <div>
            <h1>Name: {product.name}</h1>
            <p>Price: {product.price}</p>
            <p>Amount: {product.amount}</p>
            <p>Description: {product.description_full}</p>
            <p>Language: {product.language}</p>
            <p>Platform: {product.platform}</p>
            <p>Producer: {product.producer}</p>
            {images}
            <button onClick={
                () => {
                    props.addProductToBasket(product);
                    console.log(props);
                }
            }>Add to Basket</button>
        </div>
    )
}

const mapStateToProps = ( state ) => ({
    products: state.basket.products
  });
  
const mapDispatchToProps = (dispatch) => ({
    addProductToBasket: (product) => dispatch(addProduct(product)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Product);

