import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    uuid: {type: Number, required: true},
    name: { type: String, required: true},
    price: { type: Number, required: true},
    description_short: { type: String, required: true},
    description_full: { type: String, required: true},
    producer: { type: String, required: true},
    amount: { type: Number, required: true},
    language: { type: String, required: true},
    date: { type: Number, required: true},
    platform: { type: String, required: true},
    image: { type: Array, required: true}    
});

const Product = mongoose.model('Product', ProductSchema);