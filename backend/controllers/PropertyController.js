const PropertySchema = require("../models/PropertySchema");
const CategorySchema = require("../models/CategorySchema");

// GET METHOD WITH AGGREGATION CODE
async function getProperties(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 5;
    const offset = parseInt(req.query.offset) || 0;

    // Define an empty filter object to hold the filtering criteria
    const filter = {};

    // Define criteria based on request parameters
    if (req.query.type) {
      filter.type = req.query.type;
    }
    if (req.query.category) {
      filter["category_details.name"] = req.query.category;
    }
    if (req.query.country) {
      filter["country_details.country_name"] = req.query.country;
    }
    if (req.query.state) {
      filter["state_details.state_name"] = req.query.state;
    }
    if (req.query.city) {
      filter["city_details.city_name"] = req.query.city;
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
    if (req.query.price) {
      filter.price = parseFloat(req.query.price);
    }

    const properties = await PropertySchema.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "category_id",
          foreignField: "_id",
          as: "category_details",
        },
      },
      {
        $lookup: {
          from: "countries",
          localField: "country_id",
          foreignField: "_id",
          as: "country_details",
        },
      },
      {
        $lookup: {
          from: "states",
          localField: "state_id",
          foreignField: "_id",
          as: "state_details",
        },
      },
      {
        $lookup: {
          from: "cities",
          localField: "city_id",
          foreignField: "_id",
          as: "city_details",
        },
      },
      {
        $match: filter, // Apply the filtering criteria
      },
      {
        $skip: offset,
      },
      {
        $limit: limit,
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
    property_name,
    category_id,
    country_id,
    state_id,
    city_id,
    latitude,
    longitude,
    sqft,
    bedroom,
    bath,
    parking,
    description,
    price,
  } = req.body;

  try {
    let category = await CategorySchema.findOne({ _id: category_id });
    if (category) {
      let type = category.type;
      const property = new PropertySchema({
        property_name,
        type,
        category_id,
        country_id,
        state_id,
        city_id,
        latitude,
        longitude,
        sqft,
        bedroom,
        bath,
        parking,
        description,
        price,
      });

      await property.save();
      res.status(201).json({
        status: true,
        message: "Property created successfully",
        data: property,
      });
    } else {
      res.status(500).json({
        status: false,
        message: "category not found.",
        data: null,
      });
    }
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
    property_name,
    category_id,
    country_id,
    state_id,
    city_id,
    latitude,
    longitude,
    sqft,
    bedroom,
    bath,
    parking,
    description,
    price,
  } = req.body;
  try {
    const property = await PropertySchema.findByIdAndUpdate(id, {
      property_name,
      category_id,
      country_id,
      state_id,
      city_id,
      latitude,
      longitude,
      sqft,
      bedroom,
      bath,
      parking,
      description,
      price,
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

module.exports = {
  getProperties,
  createProperty,
  updateProperty,
  deleteProperty,
};
