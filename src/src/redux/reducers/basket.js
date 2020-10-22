import {
    ADD_ITEM_TO_BASKET,
    REMOVE_ITEM_FROM_BASKET    
  } from '../constants/basket';
  
  const initialState = {
    products: []    
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {      
      case ADD_ITEM_TO_BASKET: {
        const { product } = action;
        state.products.push(product)
        return { ...state };
      }
      case REMOVE_ITEM_FROM_BASKET: {
        const { productID } = action;
        state.products.forEach( (product, index) => {
            if (product.uuid === productID) {
                state.products.splice(index, 1);
            }
        })
        return { ...state };
      }      
      default: {
        return state;
      }
    }
  };