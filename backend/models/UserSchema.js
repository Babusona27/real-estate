const mongoose = require("mongoose");

// USER ADDRESS SCHEMA
const UserAddressSchema = new mongoose.Schema({
  street: {
    type: String,
    // required: [true, "Street name is required"],
  },
  city: {
    type: String,
    // required: [true, "City name is required"],
  },
  state: {
    type: String,
    // required: [true, "State name is required"],
  },
  postal_code: {
    type: String,
    // required: [true, "Postal code is required"],
  },
  country: {
    type: String,
    // required: [true, "Country name is required"],
  },
});

// FAVORITE PROPERTY SCHEMA
const FavoritePropertySchema = new mongoose.Schema({
  property_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Property Id is Required"],
  },
  property_name: {
    type: String,
    required: [true, "Property name is Required"],
  },
  property_image: {
    type: String,
    default: null,
  },
});

// USER SCHEMA
const UserSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: [true, "Username is Required"],
  },
  user_image: {
    type: String,
    default: null,
  },
  user_type: {
    type: String,
    enum: ["seller", "buyer"],
    required: [true, "User Type is required"],
  },
  seller_type: {
    type: String,
    enum: ["agent", "owner"],
    required: function () {
      return this.user_type === "seller";
    },
  },
  user_phone: {
    type: Number,
    required: [true, "Phoneno is required"],
  },
  user_email: {
    type: String,
    required: [true, "Email is required"],
  },
  user_address: UserAddressSchema,
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  favorite_properties: {
    type: [FavoritePropertySchema],
    default: [],
  },
});

module.exports = mongoose.model("User", UserSchema);
