const PropertySchema = require("../models/PropertySchema");
const fs = require("fs");
const path = require("path");

// GET METHOD WITH AGGREGATION CODE
async function getProperties(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;

    // Define an empty filter object to hold the filtering criteria
    const filter = {};

    // Define criteria based on request parameters
    if (req.query.type) {
      filter.type = req.query.type;
    }
    if (req.query.category) {
      filter.category = req.query.category;
    }
    if (req.query.country) {
      filter.country = req.query.country;
    }
    if (req.query.state) {
      filter.state = req.query.state;
    }
    if (req.query.city) {
      filter.city = req.query.city;
    }
    if (req.query.sqft) {
      filter.sqft = parseInt(req.query.sqft);
    }
    if (req.query.bedroom) {
      filter.bedroom = parseInt(req.query.bedroom);
    }
    if (req.query.bath) {
      filter.bath = parseInt(req.query.bath);
    }
    if (req.query.parking === "true") {
      filter.parking = true;
    } else if (req.query.parking === "false") {
      filter.parking = false;
    }
    if (req.query.price_from && req.query.price_to) {
      const priceFrom = parseFloat(req.query.price_from);
      const priceTo = parseFloat(req.query.price_to);
      filter.price = { $gte: priceFrom, $lte: priceTo };
    } else if (req.query.price_from) {
      const priceFrom = parseFloat(req.query.price_from);
      filter.price = { $gte: priceFrom };
    } else if (req.query.price_to) {
      const priceTo = parseFloat(req.query.price_to);
      filter.price = { $lte: priceTo };
    }

    const properties = await PropertySchema.find(filter) // Apply the filtering criteria
      .skip(offset)
      .limit(limit);

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

async function getProperty(req, res) {
  const propertyId = req.params.id;
  try {
    const property = await PropertySchema.findById(propertyId);
    if (property) {
      res.json({
        status: true,
        message: "Property Fetched successfully",
        data: property,
      });
    }
    // No need for else block; if property is not found, the code below will execute.
    res.status(404).json({ status: false, message: "Property not found" });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error fetching property",
      data: error.message,
    });
  }
}

// POST METHOD
async function createProperty(req, res) {
  const {
    property_name,
    type,
    category,
    country,
    state,
    city,
    latitude,
    longitude,
    sqft,
    bedroom,
    bath,
    parking,
    description,
    price,
    images_arr,
    floor_images,
    inspection_agencies,
    neighborhood_information,
    seller,
    reviews,
    property_status,
    posted_on,
  } = req.body;

  var images = [];
  var floor_plan_images = [];

  try {
    // images
    const rootPath = process.cwd();
    for (const image of images_arr) {
      const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
      const filename = `property_image_${Date.now()}.jpg`;
      const relativePath = path.join("PropertyImages", filename);
      const filePath = path.join(rootPath, "uploads", relativePath);
      fs.writeFileSync(filePath, base64Data, "base64");
      images.push(relativePath);
    }
    // console.log("images - ", images);

    // Floor Images
    const rootPathFloorImage = process.cwd();
    for (const image of floor_images) {
      const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
      const filename = `floor_image_${Date.now()}.jpg`;
      const relativePath = path.join("FloorImages", filename);
      const filePath = path.join(rootPathFloorImage, "uploads", relativePath);
      fs.writeFileSync(filePath, base64Data, "base64");
      floor_plan_images.push(relativePath);
    }
    // console.log("Floor images - ", images);

    const property = new PropertySchema({
      property_name,
      type,
      category,
      country,
      state,
      city,
      latitude,
      longitude,
      sqft,
      bedroom,
      bath,
      parking,
      description,
      price,
      images,
      floor_plan_images,
      inspection_agencies,
      neighborhood_information,
      seller,
      reviews,
      property_status,
      posted_on,
    });
    await property.save();
    res.status(201).json({
      status: true,
      message: "Property created successfully",
      data: property,
    });
  } catch (err) {
    console.log(err);
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
    property_name,
    category,
    type,
    country,
    state,
    city,
    latitude,
    longitude,
    sqft,
    bedroom,
    bath,
    parking,
    description,
    price,
    images_arr,
  } = req.body;

  var images = [];

  try {
    const rootPath = process.cwd();
    for (const image of images_arr) {
      const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
      const filename = `property_image_${Date.now()}.jpg`;
      const filePath = path.join(rootPath, "PropertyImages", filename);
      // const filePath = path.join(__dirname, "PropertyImages", filename);
      fs.writeFileSync(filePath, base64Data, "base64");
      images.push(filePath);
    }
    // console.log("images - ", images);

    const property = await PropertySchema.findByIdAndUpdate(id, {
      property_name,
      type,
      category,
      country,
      state,
      city,
      latitude,
      longitude,
      sqft,
      bedroom,
      bath,
      parking,
      description,
      price,
      images,
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

    if (!property) {
      return res
        .status(404)
        .json({ status: false, message: "property not found" });
    }

    res.json({
      status: true,
      message: "Property deleted successfully",
      data: property,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Failed to delete property",
      data: null,
    });
  }
}

async function deleteImages(req, res) {
  const propertyId = req.params.id;
  const imageIndex = parseInt(req.params.imageIndex);

  try {
    const property = await PropertySchema.findById(propertyId);

    if (!property) {
      return res
        .status(404)
        .json({ status: false, message: "Property not found" });
    }

    // Check if the imageIndex is within a valid range
    if (imageIndex < 0 || imageIndex >= property.images.length) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid image index" });
    }

    // const adjustedIndex = imageIndex - 1;

    const deletedImage = property.images[imageIndex];

    // Splice the image from the images array using the imageIndex
    property.images.splice(imageIndex, 1);

    await property.save(); // Save the updated property document

    res.status(200).json({
      status: true,
      message: "Image deleted successfully",
      deletedImage,
    });
  } catch (error) {
    // console.error(error);
    res.status(500).json({
      status: false,
      message: "Error deleting image from property",
      message: error.message,
    });
  }
}

module.exports = {
  getProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
  deleteImages,
};
