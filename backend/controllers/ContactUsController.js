const ContactUs = require("../models/ContactUs");
const ContactMail = require("../models/ContactMail");
const nodemailer = require("nodemailer");
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

//mail send
exports.sendMail = async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'souravwebsadroit@gmail.com',
                pass: 'fuws vlvi tjdp zjrn'
            }
        });
        const mailOptions = {
            from: email,
            to: "souravwebsadroit@gmail.com",
            subject: subject,
            text: message
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.status(400).json({
                    status: false,
                    message: error.message,
                });
            } else {
                const newContactMail = new ContactMail({
                    name,
                    email,
                    subject,
                    message,
                });
                newContactMail.save();
                res.status(200).json({
                    status: true,
                    message: "Mail Sent Successfully",
                    data: info.response,
                });
            }
        });
    }
    catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
}