const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
  city_name: String,
});

const StateSchema = new mongoose.Schema({
  state_name: String,
  cities: [CitySchema],
});

const CountrySchema = new mongoose.Schema({
  country_name: String,
  states: [StateSchema],
});

module.exports = mongoose.model("Country", CountrySchema);
