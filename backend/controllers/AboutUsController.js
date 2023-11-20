const AboutUs = require("../models/AboutUs");

// Create a new about us
exports.createAboutUs = async (req, res) => {
    const { title, description } = req.body;
    try {
        const newAboutUs = new AboutUs({
            title,
            description,
        });
        await newAboutUs.save();
        res.status(201).json({
            status: true,
            message: "About us created successfully",
            data: newAboutUs,
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};
// Get all about us
exports.getAboutUs = async (req, res) => {
    try {
        const aboutUs = await AboutUs.find();
        res.status(200).json({
            status: true,
            message: "About us Fetched successfully",
            data: aboutUs,
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};
// Get a single about us
exports.getSingleAboutUs = async (req, res) => {
    try {
        const aboutUs = await AboutUs.findById(req.params.id);
        res.status(200).json({
            status: true,
            message: "Single about us",
            data: aboutUs,
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};
// Update a about us
exports.updateAboutUs = async (req, res) => {
    const { title, description } = req.body;
    try {
        const aboutUs = await AboutUs.findById(req.params.id);
        if (aboutUs) {
            if (title) aboutUs.title = title;
            if (description) aboutUs.description = description;
            await aboutUs.save();
            res.status(200).json({
                status: true,
                message: "About us updated successfully",
                data: aboutUs,
            });
        }
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};
// Delete a about us
exports.deleteAboutUs = async (req, res) => {
    try {
        const aboutUs = await AboutUs.findById(req.params.id);
        if (aboutUs) {
            await aboutUs.deleteOne();
            res.status(200).json({
                status: true,
                message: "About us deleted successfully",
            });
        }
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};