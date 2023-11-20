const TermsAndConditions = require("../models/TermsAndConditions");

// Create a new terms and conditions
exports.createTermsAndConditions = async (req, res) => {
    const { title, description } = req.body;
    try {
        const newTermsAndConditions = new TermsAndConditions({
            title,
            description,
        });
        await newTermsAndConditions.save();
        res.status(201).json({
            status: true,
            message: "Terms and conditions created successfully",
            data: newTermsAndConditions,
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};
// Get all terms and conditions
exports.getTermsAndConditions = async (req, res) => {
    try {
        const termsAndConditions = await TermsAndConditions.find();
        res.status(200).json({
            status: true,
            message: "Terms and conditions Fetched successfully",
            data: termsAndConditions,
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};
// Get a single terms and conditions
exports.getSingleTermsAndConditions = async (req, res) => {
    try {
        const termsAndConditions = await TermsAndConditions.findById(req.params.id);
        res.status(200).json({
            status: true,
            message: "Single terms and conditions",
            data: termsAndConditions,
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};
// Update a terms and conditions
exports.updateTermsAndConditions = async (req, res) => {
    const { title, description } = req.body;
    try {
        const termsAndConditions = await TermsAndConditions.findById(req.params.id);
        if (termsAndConditions) {
            if (title) termsAndConditions.title = title;
            if (description) termsAndConditions.description = description;
            await termsAndConditions.save();
            res.status(200).json({
                status: true,
                message: "Terms and conditions updated successfully",
                data: termsAndConditions,
            });
        }
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};
// Delete a terms and conditions
exports.deleteTermsAndConditions = async (req, res) => {
    try {
        const termsAndConditions = await TermsAndConditions.findById(req.params.id);
        if (termsAndConditions) {
            await termsAndConditions.deleteOne();
            res.status(200).json({
                status: true,
                message: "Terms and conditions deleted successfully",
            });
        }
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};
