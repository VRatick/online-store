import mongoose from "mongoose";
import { config } from '../etc/config.js';
import '../models/Product.js';
const Product = mongoose.model('Product');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listProducts() {
    return Product.find();
}

export function createProduct(data) {
    const product = new Product({
        name: data.name,
        price: data.price,
        description_short: data.description_short,
        description_full: data.description_full,
        producer: data.producer,
        amount: data.amount,
        language: data.language,
        date: data.date,
        platform: data.platform,
        image: data.image
    });

    return product.save();
}

export function deleteProduct(id) {
    return Product.findById(id).remove();
}