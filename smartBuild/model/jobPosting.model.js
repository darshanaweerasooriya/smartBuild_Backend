const mongoose = require('mongoose');

const addJobScheme = new mongoose.Schema({
    jobTitle: {
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

module.exports = mongoose.model('JobPosting', addJobScheme);