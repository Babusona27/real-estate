const mongoose = require('mongoose');

const ContactMailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,

    },
    subject: {
        type: String,

    },
    message: {
        type: String,

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model("ContactMail", ContactMailSchema);