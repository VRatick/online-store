import axios from 'axios';
import { apiPrefix } from '../../config.json'

export default {
    listProducts() {        
        return axios.get(`${apiPrefix}/products`);
    },

    createProduct(data) {
        return axios.post(`${apiPrefix}/products`, data);
    },

    changeProduct(product) {        
        return axios.put(`${apiPrefix}/products/${product}`, product);
    },


    deleteProduct(productId) {
        return axios.delete(`${apiPrefix}/products/${productId}`);
    }
}