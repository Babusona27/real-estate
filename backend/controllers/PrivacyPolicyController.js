const PrivacyPolicy = require("../models/PrivacyPolicySchema");

// Create a new privacy policy
exports.createPrivacyPolicy = async (req, res) => {
    const { title, description } = req.body;
    try {
        const newPrivacyPolicy = new PrivacyPolicy({
            title,
            description,
        });
        await newPrivacyPolicy.save();
        res.status(201).json({
            status: true,
            message: "Privacy policy created successfully",
            data: newPrivacyPolicy,
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};
// Get all privacy policy
exports.getPrivacyPolicy = async (req, res) => {
    try {
        const privacyPolicy = await PrivacyPolicy.find();
        res.status(200).json({
            status: true,
            message: "Privacy policy Fetched successfully",
            data: privacyPolicy,
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};
// Get a single privacy policy
exports.getSinglePrivacyPolicy = async (req, res) => {
    try {
        const privacyPolicy = await PrivacyPolicy.findById(req.params.id);
        res.status(200).json({
            status: true,
            message: "Single privacy policy",
            data: privacyPolicy,
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};
// Update a privacy policy
exports.updatePrivacyPolicy = async (req, res) => {
    const { title, description } = req.body;
    try {
        const privacyPolicy = await PrivacyPolicy.findById(req.params.id);
        if (privacyPolicy) {
            if (title) privacyPolicy.title = title;
            if (description) privacyPolicy.description = description;
            await privacyPolicy.save();
            res.status(201).json({
                status: true,
                message: "Privacy policy updated successfully",
                data: privacyPolicy,
            });
        }
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};
// Delete a privacy policy
exports.deletePrivacyPolicy = async (req, res) => {
    try {
        const privacyPolicy = await PrivacyPolicy.findById(req.params.id);
        if (privacyPolicy) {
            await privacyPolicy.deleteOne();
            res.status(201).json({
                status: true,
                message: "Privacy policy deleted successfully",
            });
        }
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message,
        });
    }
};
