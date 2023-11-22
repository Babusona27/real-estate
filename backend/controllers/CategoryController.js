const CategorySchema = require("../models/CategorySchema");

// GET ALL CATEGORIES (GET METHOD)
exports.getCategories = async (req, res) => {
  try {
    const categories = await CategorySchema.find();

    res.status(200).json({
      status: true,
      message: "Categories fetched successfully",
      data: categories,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Failed to fetch categories",
      data: null,
    });
  }
}

// CREATE NEW CATEGORY (POST METHOD)
exports.createCategory = async (req, res) => {
  const { category_name, type } = req.body;

  try {
    const category = new CategorySchema({ category_name, type });

    await category.save();

    res.status(201).json({
      status: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
      data: null,
    });
  }
}

// UPDATE CATEGORY (PUT METHOD)
exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { category_name, type } = req.body;

  try {
    const category = await CategorySchema.findByIdAndUpdate(id, {
      category_name,
      type,
    });

    if (!category) {
      return res
        .status(404)
        .json({ status: false, message: "Category not found", data: null });
    }

    res.status(200).json({
      status: true,
      message: "Category update successful",
      data: category,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Failed to update Category",
      data: null,
    });
  }
}

// DELETE CATEGORY (DELETE METHOD)
exports.deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await CategorySchema.findByIdAndDelete(id);

    if (!category) {
      return res
        .status(404)
        .json({ status: false, message: "Category not found" });
    }

    res.status(200).json({
      status: true,
      message: "Category deleted successfully",
      data: category,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Failed to delete category",
      data: null,
    });
  }
}
