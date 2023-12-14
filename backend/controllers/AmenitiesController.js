const AmenitiesSchema = require('../models/Amenities');


//get all amenities
exports.getAmenities = async (req, res) => {
    try {
        const amenities = await AmenitiesSchema.find();
        res.status(200).json({
            status: true,
            message: "Amenities fetched successfully",
            amenities,
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};
//create amenities
exports.createAmenities = async (req, res) => {
    try {
        const payload = req.body;
        const amenities = new AmenitiesSchema({
            title: payload.title,
            description: payload.description,
            status: payload.status,
        });
        await amenities.save();
        res.status(200).json({
            status: true,
            message: "Amenities created successfully",
            data: amenities,
        });

    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};
//update amenities
exports.updateAmenities = async (req, res) => {
    try {
        const payload = req.body;
        const amenities = await AmenitiesSchema.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    title: payload.title,
                    description: payload.description,
                    status: payload.status,
                },
            },
            { new: true }
        );
        res.status(200).json({
            status: true,
            message: "Amenities updated successfully",
            data: amenities,
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};

//delete amenities
exports.deleteAmenities = async (req, res) => {
    try {
        const amenities = await AmenitiesSchema.findByIdAndDelete({
            _id: req.params.id,
        });
        res.status(200).json({
            status: true,
            message: "Amenities deleted successfully",
            data: amenities,
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};