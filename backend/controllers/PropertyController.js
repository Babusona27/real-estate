const { log } = require("console");
const PropertySchema = require("../models/PropertySchema");
const fs = require("fs");
const path = require("path");

// GET ALL PROPERTIES (GET METHOD)
exports.getProperties = async (req, res) => {
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
    const propertiesCount = await PropertySchema.countDocuments(filter);
    res.json({
      status: true,
      message: "Properties fetched successfully",
      data: properties,
      propertiesCount,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Failed to fetch properties",
      data: null,
    });
  }
}

// GET ONLY SINGLE PROPERTY (GET METHOD)
exports.getProperty = async (req, res) => {
  const slug = req.params.slug;
  try {
    const property = await PropertySchema.findOne({ slug: slug });

    if (property) {
      res.json({
        status: true,
        message: "Property Fetched successfully",
        data: property,
      });
    } else {
      // Send a 404 response only if the property is not found
      res.status(404).json({ status: false, message: "Property not found" });
    }
  } catch (error) {
    // Send a 500 response in case of an error
    res.status(500).json({
      status: false,
      message: "Error fetching property",
      data: error.message,
    });
  }
}

// CREATE NEW PROPERTY (POST METHOD)
exports.createProperty = async (req, res) => {
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
    createBy,
    propertyOwnerType,
    propertyOwnerContactNumber
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
    //create slug
    createSlug = property_name.replace(/\s+/g, "-").toLowerCase();
    checkslug = await PropertySchema.findOne({ slug: createSlug });
    if (checkslug) {
      createSlug = createSlug + "-" + sqft;
    }
    //create property id 6 digit
    createPropertyId = Math.floor(100000 + Math.random() * 900000);
    checkPropertyId = await PropertySchema.findOne({ createPropertyId: createPropertyId });
    if (checkPropertyId) {
      createPropertyId = createPropertyId + 1;
    }


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
      slug: createSlug,
      createPropertyId,
      createBy,
      propertyOwnerType,
      propertyOwnerContactNumber
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

// UPDATE PROPERTY (PUT METHOD)
exports.updateProperty = async (req, res) => {
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
    floor_images,
    inspection_agencies,
    neighborhood_information,
    seller,
    reviews,
    property_status,
    posted_on,
    propertyOwnerContactNumber,
    propertyOwnerType
  } = req.body;

  var images = [];
  var floor_plan_images = [];

  try {
    // Handle images_arr
    if (images_arr && Array.isArray(images_arr)) {
      const rootPath = process.cwd();
      for (const image of images_arr) {
        const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
        const filename = `property_image_${Date.now()}.jpg`;
        const relativePath = path.join("PropertyImages", filename);
        const filePath = path.join(rootPath, "uploads", relativePath);
        fs.writeFileSync(filePath, base64Data, "base64");
        images.push(relativePath);
      }
    }

    // Handle floor_images
    if (floor_images && Array.isArray(floor_images)) {
      const rootPathFloorImage = process.cwd();
      for (const image of floor_images) {
        const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
        const filename = `floor_image_${Date.now()}.jpg`;
        const relativePath = path.join("FloorImages", filename);
        const filePath = path.join(rootPathFloorImage, "uploads", relativePath);
        fs.writeFileSync(filePath, base64Data, "base64");
        floor_plan_images.push(relativePath);
      }
    }

    // Construct the update object
    const updateObject = {
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
      inspection_agencies,
      neighborhood_information,
      seller,
      reviews,
      property_status,
      posted_on,
      propertyOwnerContactNumber,
      propertyOwnerType
    };

    // Add images and floor_plan_images only if they are provided
    if (images.length > 0) {
      updateObject.images = images;
    }

    if (floor_plan_images.length > 0) {
      updateObject.floor_plan_images = floor_plan_images;
    }

    // Update the property in the database
    const property = await PropertySchema.findByIdAndUpdate(id, updateObject, {
      new: true, // Return the modified document rather than the original
    });

    res.json({
      status: true,
      message: "Property updated successfully",
      data: property,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Failed to update property",
      data: null,
    });
  }
}

// DELETE PROPERTY (DELETE METHOD)
exports.deleteProperty = async (req, res) => {
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

// DELETE IMAGES BY INDEX (DELETE METHOD)
exports.deleteImages = async (req, res) => {
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

// GET SELLER ALL PROPERTY (GET METHOD)
exports.getSellerProperty = async (req, res) => {
  try {
    const filter = {};

    // Include the seller ID filter if available in the request parameters
    if (req.query.sellerId) {
      filter["seller.seller_id"] = req.query.sellerId;
    }
    // Find properties where the seller ID matches
    const sellerProperties = await PropertySchema.find(filter);

    if (!sellerProperties || sellerProperties.length === 0) {
      return res.status(404).json({
        status: false,
        message: "Properties not found for the specified seller",
      });
    }

    res.status(200).json({
      status: true,
      message: "seller all property fetched succefull",
      data: sellerProperties,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: true, message: "Internal server error" });
  }
}

// REVIEW SUBMIT BY USER (POST METHOD)
exports.reviewSubmit = async (req, res) => {
  try {
    const slug = req.params.slug;
    const { rating, review, user_name, user_profile_image, user_id } = req.body;

    // Find the property by ID
    const property = await PropertySchema.findOne({ slug: slug });

    if (!property) {
      return res
        .status(404)
        .json({ status: false, message: "Property not found" });
    }

    // Create a new review
    const newReview = {
      rating,
      review,
      user_name,
      user_profile_image,
      user_id,
    };

    // Add the review to the property's reviews array
    property.reviews.push(newReview);

    // Save the property with the new review
    await property.save();

    res.status(201).json({
      status: true,
      message: "Review submitted successfully",
      data: newReview,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
}
//GET REVIEWS BY PROPERTY ID (GET METHOD)
exports.getReviews = async (req, res) => {
  try {
    const slug = req.params.slug;
    reviews = await PropertySchema.findOne({ slug: slug }, { reviews: 1 });
    if (!reviews) {
      return res
        .status(404)
        .json({ status: false, message: "Reviews not found" });
    } else {
      res.status(200).json({
        status: true,
        message: "Reviews fetched successfully",
        data: reviews,
      });
    }
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
}
//UPDATE REVIEWS BY USER ID AND PROPERTY ID (PUT METHOD)
exports.updateReviews = async (req, res) => {
  try {
    const propertyId = req.params.propertyId;
    const userId = req.params.userId;
    const { rating, review, user_name, user_profile_image } = req.body;
    const property = await PropertySchema.findById(propertyId);
    if (!property) {
      return res
        .status(404)
        .json({ status: false, message: "Property not found" });
    }
    const reviewIndex = property.reviews.findIndex(
      (review) => review.user_id.toString() === userId
    );
    if (reviewIndex === -1) {
      return res
        .status(404)
        .json({ status: false, message: "Review not found" });
    }
    property.reviews[reviewIndex].rating = rating;
    property.reviews[reviewIndex].review = review;
    property.reviews[reviewIndex].user_name = user_name;
    property.reviews[reviewIndex].user_profile_image = user_profile_image;
    await property.save();
    res.status(200).json({
      status: true,
      message: "Review updated successfully",
      data: property.reviews[reviewIndex],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
}