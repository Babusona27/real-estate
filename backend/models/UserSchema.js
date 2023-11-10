const mongoose = require("mongoose");

const UserAddressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  postal_code: String,
  country: String,
});

const FavoritePropertySchema = new mongoose.Schema({
  property_id: String,
  property_name: String,
  property_image: String, // You mentioned that this should be the path to the first image
});

const UserSchema = new mongoose.Schema({
  user_name: String,
  user_image: String,
  user_type: {
    type: String,
    enum: ["seller", "buyer"],
    required: true,
  },
  seller_type: {
    type: String,
    enum: ["agent", "owner"],
    required: function () {
      return this.user_type === "seller";
    },
  },
  user_phone: Number,
  user_email: String,
  user_address: UserAddressSchema,
  password: String,
  favorite_properties: {
    type: [FavoritePropertySchema],
    default: [],
  },
});

module.exports = mongoose.model("User", UserSchema);
