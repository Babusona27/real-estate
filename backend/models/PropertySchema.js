const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  property_name: {
    type: String,
  },
  type: {
    type: String,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  country_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  state_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  city_id: {
    type: mongoose.Schema.Types.ObjectId,
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
    type:Number,
  }
});

module.exports = mongoose.model("Property", PropertySchema);
