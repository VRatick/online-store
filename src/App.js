import React, { useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import axios from 'axios';
import AdminPanel from './client/redux/connect/AdminPanel';
import Basket from './client/redux/connect/Basket';
import ProductsList from './client/redux/connect/ProductsList';
import Product from './client/redux/connect/Product';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { getProductsFromDataBase } from './client/redux/actions/products';
import { apiPrefix } from './client/config.json'
import { icon } from './client/styles/materialUIStyles'
import xboxLogo from './client/assets/images/xboxLogo.png'
import './client/styles/app.css';

function App (props) {
  const [loading, setLoading] = useState(true);
    if (props.products.length === 0 && loading) {
        props.getProduct();
        setLoading(false);
    }    

  return (
    <Router>
      <div>
        <div className='container'>            
              <Link to="/productslist">
                <img className='banner' src={xboxLogo} />
              </Link>
              <div>        
                <Link to="/basket">                          
                  <ShoppingCartIcon style={icon}></ShoppingCartIcon>   
                </Link>
              </div>     
        </div>
              
        <Switch>
          <Route path="/adminpanel">
            <AdminPanel />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>        
          <Route path="/productslist">
            <ProductsList />
          </Route>
          <Route path="/product/">
            <Product/>
          </Route>
        </Switch>
      </div>
    </Router>
  );  
}

const mapStateToProps = ( state ) => ({
  products: state.basket.products
});

const mapDispatchToProps = (dispatch) => ({  
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

export default connect(mapStateToProps, mapDispatchToProps)(App);