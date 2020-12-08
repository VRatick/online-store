import { connect } from 'react-redux';
import { addProduct } from '../actions/basket'
import ProductsList from '../../screens/ProductsList'

const mapStateToProps = ( state ) => ({
    products: state.basket.products,
    allProducts: state.products.allProducts
  });

const mapDispatchToProps = (dispatch) => ({
    addProductToBasket: (product) => dispatch(addProduct(product))    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);