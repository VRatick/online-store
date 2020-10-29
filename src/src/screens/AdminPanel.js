import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { getProductsFromDataBase, addProductToDataBase, changeProductFromDataBase, removeProductFromDataBase} from '../redux/actions/products';
import axios from 'axios';
import { apiPrefix } from '../etc/config.json'

function AdminPanel (props) {  
    
    if (props.products.length === 0) {
        props.getProduct();
    }
    
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = ( state ) => ({
    products: state.products.allProducts,
    loading: state.products.loading
  });

const mapDispatchToProps = (dispatch) => ({    
    addProduct: (product) => dispatch(addProductToDataBase(product)),
    changeProduct: (product) => dispatch(changeProductFromDataBase(product)),
    deleteProduct: (productId) => dispatch(removeProductFromDataBase(productId)),
    getProduct: async () => {  
        let allProducts;      
        await axios.get(`${apiPrefix}/products`).then( (response) => {
            allProducts = response.data             
            dispatch(getProductsFromDataBase(allProducts))
        })
        .catch(err => {
            console.log(err)
        }); 
        
      }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);


