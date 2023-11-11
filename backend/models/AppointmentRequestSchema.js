const mongoose = require("mongoose");

// Define the Appointment Requests Schema
const AppointmentRequestSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the User model
    ref: "User",
  },
  property_id: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the Property model
    ref: "Property",
  },
  seller_id: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the User model (for the seller)
    ref: "User",
  },
  date_of_request: Date,
});

module.exports = mongoose.model("AppointmentRequest", AppointmentRequestSchema);
