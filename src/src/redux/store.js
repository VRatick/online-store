import { createStore, combineReducers } from "redux";
import basket from "./reducers/basket";
import products from './reducers/products';

const rootReducer = combineReducers({
    products: products,
    basket: basket
  });

export const store = createStore(rootReducer)