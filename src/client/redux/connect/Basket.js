import { connect } from 'react-redux';
import { removeProduct } from '../actions/basket';
import Basket from '../../screens/Basket';

const mapStateToProps = ( state ) => ({
    products: state.basket.products
  });
  
const mapDispatchToProps = (dispatch) => ({
    removeProductFromBasket: (productId) => dispatch(removeProduct(productId)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Basket);