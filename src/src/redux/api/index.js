import axios from 'axios';
import { apiPrefix } from '../../etc/config.json'

export default {
    listProducts() {        
        return axios.get(`${apiPrefix}/products`);
    },

    createProduct(data) {
        return axios.post(`${apiPrefix}/products`, data);
    },

    deleteProduct(productId) {
        return axios.delete(`${apiPrefix}/products/${productId}`);
    }
}