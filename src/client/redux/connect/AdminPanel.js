import { connect } from 'react-redux';
import { addProductToDataBase, changeProductFromDataBase, removeProductFromDataBase } from '../actions/products';
import AdminPanel from '../../screens/AdminPanel'

const mapStateToProps = ( state ) => ({
    allProducts: state.products.allProducts,    
  });

const mapDispatchToProps = (dispatch) => ({    
    addProduct: (product) => dispatch(addProductToDataBase(product)),
    changeProduct: (product) => dispatch(changeProductFromDataBase(product)),
    deleteProduct: (productId) => dispatch(removeProductFromDataBase(productId)),
    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);