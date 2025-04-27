const mongoose = require('mongoose');

const addWorkers = new mongoose.Schema({
    firstName: {
        type: String,
        lowercase: true,
        required: true
    },
    lastName: {
        type: String,
        lowercase: true,
        required: true
    },
    NICNumber: {
        type: String,
        lowercase: true,
        required: true
    },
    telephoneNum: {
        type: String,
        lowercase: true,
        required: true
    },
    email:{
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        lowercase: true,
        required: true
    },
    workingType: {
        type: String,
        lowercase: true,
        required: true
    },
    address:{
        type: String,
        lowercase: true,
        required: true
    },
    nationality: {
        type: String,
        lowercase: true,
        required: true
    },
    birthday: {
        type: String,
        lowercase: true,
        required: true
    },
   
    grossSalary: {
        type: String,
        lowercase: true,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('workers', addWorkers); 