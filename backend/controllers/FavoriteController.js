const UserSchema = require("../models/UserSchema");
const AppointmentRequestSchema = require("../models/AppointmentRequestSchema");
const { ObjectId } = require('mongodb');
// ADD NEW FAVORITE PROPERTY (POST METHOD)
exports.addToFavorite = async (req, res) => {
  const { property_id, property_name, property_image, propertyPrice } = req.body;

  const userId = req.user.user_id; // Assuming you have the user_id in the decoded JWT payload

  try {
    // Check if the user has already added this property to their favorites
    const user = await UserSchema.findById(userId);

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }
    //user table favorite_properties array property_id check
    const propertyExist = user.favorite_properties.find(
      (property) => property.property_id.equals(new ObjectId(property_id))
    );
    if (propertyExist) {
      return res
        .status(400)
        .json({ status: false, message: "Property already exist" });
    }
    // Add the property to the user's favorite_properties array
    user.favorite_properties.push({
      property_id,
      property_name,
      property_image,
      propertyPrice,
    });
    const savedUser = await user.save();
    res.status(200).json({
      status: true,
      message: "Property added to favorites successfully",
      data: savedUser.favorite_properties,
    });

  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: false, message: "Failed to add property to favorites" });
  }
}

// DELETE FAVORITE PROPERTY BY INDEX (DELETE METHOD)
exports.deleteFavorite = async (req, res) => {
  const userId = req.params.id;
  const propertyIndex = parseInt(req.params.propertyIndex);

  try {
    const property = await UserSchema.findById(userId);

    if (!property) {
      return res.status(404).send("Property not found");
    }

    // Check if the imageIndex is within a valid range
    if (
      propertyIndex < 0 ||
      propertyIndex >= property.favorite_properties.length
    ) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid image index" });
    }

    // const adjustedIndex = imageIndex - 1;

    const deletedImage = property.favorite_properties[propertyIndex];

    // Splice the image from the images array using the imageIndex
    property.favorite_properties.splice(propertyIndex, 1);

    await property.save(); // Save the updated property document

    res.status(200).json({
      status: true,
      message: "Image deleted successfully",
      data: deletedImage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Error deleting image from property",
      message: error.message,
    });
  }
}

// GET MY FAVORITE LIST (GET METHOD)
exports.myFavorites = async (req, res) => {
  const { user_id } = req.params;

  try {
    // Find the user by _id
    const user = await UserSchema.findById(user_id);
    // console.log(user);

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    // Retrieve the favorite_properties directly
    const favoriteProperties = user.favorite_properties;

    res.status(200).json({
      status: true,
      message: "user favorites properties",
      favoriteProperties,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// CREATE NEW APPOINTMENT REQUEST (POST METHOD)
exports.sendAppointmentRequest = async (req, res) => {
  const { user_id, property_id, seller_id } = req.body;

  // Create a new appointment request
  const appointmentRequest = new AppointmentRequestSchema({
    user_id,
    property_id,
    seller_id,
    date_of_request: new Date(),
  });

  try {
    await appointmentRequest.save();
    res.status(200).json({
      status: true,
      message: "Appointment request sent successfully",
      data: appointmentRequest,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: error.message });
  }
}
