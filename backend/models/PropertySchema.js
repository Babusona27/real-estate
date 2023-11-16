const mongoose = require("mongoose");

// INSPECTION AGENCIES SCHEMA
const InspectionAgenciesSchema = new mongoose.Schema({
  agency_name: String,
  agency_image: {
    type: String,
    default: null,
  },
});

// NEIGHBORHOOD INFORMATION SCHEMA
const NeighborhoodInformationSchema = new mongoose.Schema({
  info: String,
  schools: String,
  public_transportation: String,
  nearby_amenities: String,
});

// SELLER SCHEMA
const SellerSchema = new mongoose.Schema({
  seller_id: {
    type: String,
    required: [true, "seller id is required"],
  },
  seller_name: {
    type: String,
    required: [true, "seller id is required"],
  },
  user_profile_image: {
    type: String,
    default: null,
  },
});

// REVIEW SCHEMA
const ReviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  review: String,
  user_name: String,
  user_profile_image: {
    type: String,
    default: null,
  },
  user_id: mongoose.Schema.Types.ObjectId,
});

// PROPERTY SCHEMA
const PropertySchema = new mongoose.Schema({
  property_name: String,
  type: {
    type: String,
    enum: ["rent", "sale"],
  },
  category: String,
  country: String,
  state: String,
  city: String,
  latitude: Number,
  longitude: Number,
  sqft: Number,
  bedroom: Number,
  bath: Number,
  parking: Boolean,
  description: String,
  price: Number,
  images: [String],
  floor_plan_images: [String],
  inspection_agencies: [InspectionAgenciesSchema],
  neighborhood_information: [NeighborhoodInformationSchema],
  seller: SellerSchema,
  reviews: [ReviewSchema],
  property_status: {
    type: String,
    enum: ["active", "inactive", "sold"],
    default: "active",
  },
  posted_on: Date,
});

module.exports = mongoose.model("Property", PropertySchema);
