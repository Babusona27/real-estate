const mongoose = require('mongoose');

const AmenitiesSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model('Amenities', AmenitiesSchema);