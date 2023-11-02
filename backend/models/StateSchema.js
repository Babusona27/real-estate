const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema({
  state_name: {
    type: String,
    required: [true, "State name is required"],
  },
  country_id: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: "Country",
    required: [true, "Country id is required"],
  },
});

module.exports = mongoose.model("State", StateSchema);
