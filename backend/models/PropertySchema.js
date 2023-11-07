const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  property_name: {
    type: String,
  },
  type: {
    type: String,
  },
  category: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  sqft: {
    type: Number,
  },
  bedroom: {
    type: Number,
  },
  bath: {
    type: Number,
  },
  parking: {
    type: Boolean,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  images: [{ type: String }],
});

module.exports = mongoose.model("Property", PropertySchema);
