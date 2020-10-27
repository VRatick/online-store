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
import { Badge } from '@material-ui/core'

function App (props) {  
  return (
    <Router>
      <div>
        <div className='container'>            
              <Link to="/productslist">
                <img className='banner' src={xboxLogo} />
              </Link>
              <div>        
                <Link to="/basket">
                  <Badge badgeContent={props.products.length} color="error">             
                    <ShoppingCartIcon style={{ width: '75px', height: '75px', color: 'black' }}></ShoppingCartIcon>     
                  </Badge>              
                </Link>            
                <Link to="/adminpanel">
                  <SupervisorAccountIcon disabled style={{ width: '75px', height: '75px', color: 'black', display: 'none' }}></SupervisorAccountIcon>
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

export default connect(mapStateToProps, null)(App);