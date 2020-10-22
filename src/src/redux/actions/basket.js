import * as Constants from '../constants/basket';

export const addProduct = (product) => ({
    type: Constants.ADD_ITEM_TO_BASKET,
    product
  });
  
  export const removeProduct = (productId) => ({
    type: Constants.REMOVE_ITEM_FROM_BASKET,
    productId,
  });