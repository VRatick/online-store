import React from 'react';
import AdminPanel from './src/screens/AdminPanel';
import Basket from './src/screens/Basket';
import Product from './src/screens/Product';
import ProductsList from './src/screens/ProductsList';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/productslist">Products List</Link>
            </li>
            <li>
              <Link to="/basket">Basket</Link>
            </li>
            <li>
              <Link to="/adminpanel">Admin Panel</Link>
            </li>
          </ul>
        </nav>
              
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
        </Switch>
      </div>
    </Router>
  );  
}

export default App;
