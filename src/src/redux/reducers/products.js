import {
    ADD_ITEM_TO_DATABASE,
    CHANGE_ITEM_FROM_DATABASE,
    REMOVE_ITEM_FROM_DATABASE  
  } from '../constants/products';
  
const initialState = {
    allProducts: []    
};

export default (state = initialState, action) => {
    switch (action.type) {      
        case ADD_ITEM_TO_DATABASE: {
            const { product } = action;
            const products = state.allProducts;        
            products.push(product);             
            return { ...state, products };
        }
        case CHANGE_ITEM_FROM_DATABASE: {
            const { product } = action;
            const products = state.allProducts; 
            products.forEach( ( item, index ) => {
                if (item.uuid === product.uuid) {                
                    products.splice(index, 1, product)
                }
            })
            return { ...state, products };
        }
        case REMOVE_ITEM_FROM_DATABASE: {
            const { productId } = action;
            const products = [];
            state.allProducts.forEach( ( product ) => {
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