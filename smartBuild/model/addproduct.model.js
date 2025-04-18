const mongoose = require('mongoose');

const addProductSchema = new mongoose.Schema({
    productname: {
        type: String,
        lowercase: true,
        required: true
    },
    brand: {
        type: String,
        lowercase: true,
        required: true
    },
    price: {
        type: String,
        lowercase: true,
        required: true
    },
    description: {
        type: String,
        lowercase: true,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('product', addProductSchema);
