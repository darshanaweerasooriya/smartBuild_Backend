const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../config/db');

const addProductSchema = new mongoose.Schema({
    productname: {
        type: String,
        lowercase: true,
        require
    },
    brand: {
        type: String,
        lowercase: true,
        require
    },
    price: {
        type: String,
        lowercase: true,
        require
    },
    description: {
        type: String,
        lowercase: true,
        require
    },
    image: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('product', addProductSchema);