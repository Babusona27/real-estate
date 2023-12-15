const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("Message", MessageSchema);