import { connect } from 'react-redux';
import { addProduct } from '../actions/basket'
import Product from '../../screens/Product'

const mapDispatchToProps = (dispatch) => ({
    addProductToBasket: (product) => dispatch(addProduct(product)),
});
  
export default connect(null, mapDispatchToProps)(Product);