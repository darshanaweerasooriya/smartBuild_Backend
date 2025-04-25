const mongoose = require('mongoose');

const addInteriorDEsignSchema = new mongoose.Schema({
    desingName: {
        type: String,
        lowercase: true,
        required: true
    },
    designType: {
        type: String,
        lowercase: true,
        required: true
    },
    date: {
        type: String,
        lowercase: true,
        required: true
    },
    supplierName: {
        type: String,
        lowercase: true,
        required: true
    },
    price: {
        type: String,
        lowercase: true,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('interiorDesgins', addInteriorDEsignSchema);