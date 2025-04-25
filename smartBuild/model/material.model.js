const mongoose = require('mongoose');

const addMaterialSchema = new mongoose.Schema({
    material:{
        type: String,
        lowercase: true,
        required: true
    },
    materialType: {
        type: String,
        lowercase: true,
        required: true
    },
    price: {
        type: String,
        lowercase: true,
        required: true
    },
    dateAdded:{
        type: String,
        lowercase: true,
        required: true
    },
    supplierName: {
        type: String,
        lowercase: true,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
});

module.exports =mongoose.model('material', addMaterialSchema);