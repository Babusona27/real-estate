const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
  country_name: {
    type: String,
    required: [true, "Country name is required"],
  },
});

module.exports = mongoose.model("Country", CountrySchema);
