const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: [true, "Category name is required"],
  },
  type: {
    type: String,
    required: [true, "Category Type is required"],
    validate: {
      validator: function (value) {
        return value === "sale" || value === "rent";
      },
      message: "Category Type must be 'sale' or 'rent'",
    },
  },
});

module.exports = mongoose.model("Category", CategorySchema);
