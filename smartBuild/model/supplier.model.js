const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const db = require('../config/db');


const supplierSchema = new mongoose.Schema({
    firstName: {
        type: String,
        lowercase: true,
        required: true,
    },
    phoneNumb: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        lowercase: true,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

supplierSchema.methods.comparePassword = async function (supplierPassword) {
    try {
        return await bcrypt.compare(supplierPassword, this.password);
    } catch (error) {
        throw error;
    }
};

const supplierModel = db.model('supplier', supplierSchema);
module.exports = supplierModel;