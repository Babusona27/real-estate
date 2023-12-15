const MessageSchema = require('../models/Message');
//send message
exports.sendMessage = async (req, res) => {
    try {
        let senderId = req.user.user_id;
        let payload = req.body;
        const newMessage = new MessageSchema({
            senderId: senderId,
            receiverId: payload.receiverId,
            message: payload.message
        });
        const message = await newMessage.save();
        res.status(200).json({
            status: true,
            message: "Message sent successfully",
            data: message
        });
    } catch (e) {
        res.status(500).json({
            status: false,
            message: "something went wrong"
        })
    }
}

//get message
exports.getMessage = async (req, res) => {
    try {
        let receiverId = req.user.user_id;
        const message = await MessageSchema.find({ receiverId: receiverId }).populate('senderId', 'user_name user_image user_type user_phone');
        res.status(200).json({
            status: true,
            message: "Message get successfully",
            data: message
        });
    } catch (e) {
        res.status(500).json({
            status: false,
            message: "something went wrong"
        })
    }
}