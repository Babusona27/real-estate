const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
  city_name: {
    type: String,
    // required: [true, "City name is required"],
  },
});

const StateSchema = new mongoose.Schema({
  state_name: {
    type: String,
    // required: [true, "State name is required"],
  },
  cities: {
    type: [CitySchema],
    default: [],
  },
});

const CountrySchema = new mongoose.Schema({
  country_name: {
    type: String,
    // required: [true, "Country name is required"],
  },
  states: {
    type: [StateSchema],
    default: [],
  },
});

module.exports = mongoose.model("Country", CountrySchema);
