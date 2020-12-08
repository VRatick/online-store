import {
    GET_ITEM_FROM_DATABASE,
    ADD_ITEM_TO_DATABASE,
    CHANGE_ITEM_FROM_DATABASE,
    REMOVE_ITEM_FROM_DATABASE  
  } from '../constants/products';

import api from '../api';
  
const initialState = {
    allProducts: [],    
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEM_FROM_DATABASE: {
            const { products } = action;
            const allProducts = products
            return { ...state, allProducts};
        }      
        case ADD_ITEM_TO_DATABASE: {
            const { product } = action;
            const allProducts = state.allProducts;        
            allProducts.push(product);
            api.createProduct(product)
                .then(() =>
                    console.log('Successful add')
                )
                .catch(err =>
                    console.error(err)
                );             
            return { ...state, allProducts };
        }
        case CHANGE_ITEM_FROM_DATABASE: {
            const { product } = action;
            const allProducts = state.allProducts; 
            allProducts.forEach( ( item, index ) => {
                if (item.uuid === product.uuid) {                
                    allProducts.splice(index, 1, product)
                }
            })
            api.changeProduct(product)
                .then(() =>
                    console.log('Successful change')
                )
                .catch(err =>
                    console.error(err)
                );            
            return { ...state, allProducts };
        }
        case REMOVE_ITEM_FROM_DATABASE: {
            const { productId } = action;
            const allProducts = [];
            state.allProducts.forEach( ( product ) => {
                if (product.uuid !== productId) {                
                    allProducts.push(product)
                }
            })
            api.deleteProduct(productId)
                .then(() =>
                    console.log('Successful remove')
                )
                .catch(err =>
                    console.error(err)
                );
            return { ...state, allProducts };
        }          
        default: {
            return state;
        }
    }
};