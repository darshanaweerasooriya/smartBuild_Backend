const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const db = require('../config/db');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        lowercase: true,
        required: true,
    },
    lastName: {
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
    phoneNumb: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Password hashing
userSchema.pre('save', async function () {
    try {
        const user = this;
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(user.password, salt);
        user.password = hashpass;
    } catch (error) {
        throw error;
    }
});

// Compare password
userSchema.methods.comparePassword = async function (userPassword) {
    try {
        return await bcrypt.compare(userPassword, this.password);
    } catch (error) {
        throw error;
    }
};

const UserModel = db.model('user', userSchema);
module.exports = UserModel;
