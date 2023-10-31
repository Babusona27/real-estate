const PropertySchema = require("../models/PropertySchema");

// GET METHOD WITH AGGREGATION CODE
async function getProperties(req, res) {
  try {
    const properties = await PropertySchema.aggregate([
      // Aggregation code here
      {
        $lookup: {
          from: "categories",
          localField: "category_id",
          foreignField: "_id",
          as: "category_details",
        },
      },
    ]);
    res.json({
      status: true,
      message: "Properties fetched successfully",
      data: properties,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Failed to fetch properties",
      data: null,
    });
  }
}

// POST METHOD
async function createProperty(req, res) {
  const {
    name,
    type,
    category_id,
    country,
    state,
    city,
    zip_code,
    latitude,
    longitude,
    sqft,
    bedroom,
    bath,
    parking,
    description,
  } = req.body;

  try {
    const category = new PropertySchema({
      name,
      type,
      category_id,
      country,
      state,
      city,
      zip_code,
      latitude,
      longitude,
      sqft,
      bedroom,
      bath,
      parking,
      description,
    });

    await category.save();

    res.status(201).json({
      status: true,
      message: "Property created successfully",
      data: category,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
      data: null,
    });
  }
}

// PUT METHOD
async function updateProperty(req, res) {
  const { id } = req.params;
  const {
    name,
    type,
    category_id,
    country,
    state,
    city,
    zip_code,
    latitude,
    longitude,
    sqft,
    bedroom,
    bath,
    parking,
    description,
  } = req.body;
  try {
    const property = await PropertySchema.findByIdAndUpdate(id, {
      name,
      type,
      category_id,
      country,
      state,
      city,
      zip_code,
      latitude,
      longitude,
      sqft,
      bedroom,
      bath,
      parking,
      description,
    });
    res.json({
      status: true,
      message: "Property updated successfully",
      data: property,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Failed to update property",
      data: null,
    });
  }
}

// DELETE METHOD
async function deleteProperty(req, res) {
  const { id } = req.params;
  try {
    const property = await PropertySchema.findByIdAndDelete(id);
    res.json({
      status: true,
      message: "Property deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Failed to delete property",
      data: null,
    });
  }
}

module.exports = {
  getProperties,
  createProperty,
  updateProperty,
  deleteProperty,
};
