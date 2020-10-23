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
        const products = state.products;        
        products.push(product);
        let count = 0;
        products.forEach( (item, index) => {
          if (product.uuid === item.uuid) {
            count++;
          }
          if (count > 1) {
            products.splice(index, 1);
          }
        })       
        return { ...state, products };
      }
      case REMOVE_ITEM_FROM_BASKET: {
        const { productId } = action;
        const products = [];
        state.products.forEach( ( product ) => {
            if (product.uuid !== productId) {                
                products.push(product)
            }
        })
        return { ...state, products };
      }      
      default: {
        return state;
      }
    }
  };