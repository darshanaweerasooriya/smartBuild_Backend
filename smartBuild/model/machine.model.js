const { default: mongoose } = require('mongoose');
const mongoos = require('mongoose');

const addMachineSchema = new mongoos.Schema({
    brand: {
        type: String,
        lowercase: true,
        required: true
    },
    model: {
        type: String,
        lowercase: true,
        required: true
    },
    modelNumber: {
        type: String,
        lowercase: true,
        required: true
    },
    country: {
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
module.exports = mongoose.model('machine', addMachineSchema);