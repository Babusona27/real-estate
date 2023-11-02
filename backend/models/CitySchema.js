const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
  city_name: {
    type: String,
    required: [true, "City name is required"],
  },
  state_id: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: "State",
    required: [true, "State id is required"],
  },
});

module.exports = mongoose.model("City", CitySchema);
