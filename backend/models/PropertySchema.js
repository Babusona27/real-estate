const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
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
  zip_code: {
    type: Number,
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
});

module.exports = mongoose.model("Property", PropertySchema);
