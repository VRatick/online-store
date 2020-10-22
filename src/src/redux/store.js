import { createStore, combineReducers } from "redux";
import basket from "./reducers/basket";

const rootReducer = combineReducers({
    basket: basket
  });

export const store = createStore(rootReducer)