const ContactUs = require("../models/ContactUs");

// Create a new contact us
exports.createContactUs = async (req, res) => {
    const { email, phone, address, facebook, twitter, instagram, linkedin, description } = req.body;
    try {
        const newContactUs = new ContactUs({
            email,
            phone,
            address,
            facebook,
            twitter,
            instagram,
            linkedin,
            description,
        });
        await newContactUs.save();
        res.status(201).json({
            status: true,
            message: "Contact us created successfully",
            data: newContactUs,
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};
// Get all contact us
exports.getContactUs = async (req, res) => {
    try {
        const contactUs = await ContactUs.find();
        res.status(200).json({
            status: true,
            message: "Contact us Fetched successfully",
            data: contactUs,
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};