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
        uuid: data.uuid,
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

export function changeProduct(product) {
    return Product.find({uuid: product.uuid}).updateOne({
        name: product.name,
        price: product.price,
        description_short: product.description_short,
        description_full: product.description_full,
        producer: product.producer,
        amount: product.amount,
        language: product.language,
        date: product.date,
        platform: product.platform,
        image: product.image
    })
}

export function deleteProduct(uuid) {
    return Product.find({uuid: uuid}).remove();
}