import React, { useState } from 'react';
import AdminPanel from './src/screens/AdminPanel';
import Basket from './src/screens/Basket';
import ProductsList from './src/screens/ProductsList';
import Product from './src/screens/Product';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './src/styles/app.css';
import xboxLogo from './src/assets/images/xboxLogo.png'
import { getProductsFromDataBase } from './src/redux/actions/products';
import axios from 'axios';
import { apiPrefix } from './src/etc/config.json'

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
                  <ShoppingCartIcon style={{ width: '75px', height: '75px', color: 'black' }}></ShoppingCartIcon>   
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