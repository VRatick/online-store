import * as Constants from '../constants/products';

export const getProductsFromDataBase = (products) => ({
    type: Constants.GET_ITEM_FROM_DATABASE,
    products
});

export const addProductToDataBase = (product) => ({
    type: Constants.ADD_ITEM_TO_DATABASE,
    product
  });
  
export const changeProductFromDataBase = (product) => ({
    type: Constants.CHANGE_ITEM_FROM_DATABASE,
    product,
});

export const removeProductFromDataBase = (productId) => ({
    type: Constants.REMOVE_ITEM_FROM_DATABASE,
    productId,
});