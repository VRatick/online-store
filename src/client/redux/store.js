import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import basket from "./reducers/basket";
import products from './reducers/products';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    products: products,
    basket: basket
  });

  export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))