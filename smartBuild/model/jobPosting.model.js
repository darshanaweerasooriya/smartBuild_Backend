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
    location: {
        type: String,
        lowercase: true
      },
    jobType: {
        type: String, // e.g., fulltime, parttime
        lowercase: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('JobPosting', addJobScheme);