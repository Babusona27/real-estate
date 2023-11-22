const mongoose = require("mongoose");

const ContactUsSchema = new mongoose.Schema({
    email: {
        type: String,

    },
    phone: {
        type: String,

    },
    address: {
        type: String,

    },
    facebook: {
        type: String,

    },
    twitter: {
        type: String,

    },
    instagram: {
        type: String,

    },
    linkedin: {
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
module.exports = mongoose.model("ContactUs", ContactUsSchema);