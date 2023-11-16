const mongoose = require("mongoose");
const moment = require("moment");

// Define the Appointment Requests Schema
const AppointmentRequestSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the User model
    ref: "User",
    required: [true, "User ID is required."],
  },
  property_id: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the Property model
    ref: "Property",
    required: [true, "Property ID is required."],
  },
  seller_id: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the User model (for the seller)
    ref: "User",
    required: [true, "Seller ID is required."],
  },
  // date_of_request: Date,
  date_of_request: {
    type: String,
    default: () => moment().format("DD-MM-YYYY HH:mm:ss"),
  },
});

module.exports = mongoose.model("AppointmentRequest", AppointmentRequestSchema);
