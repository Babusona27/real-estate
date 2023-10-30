const CategorySchema = require("../models/CategorySchema");

// GET METHOD
async function getCategory(req, res) {
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

// POST METHOD
async function createCategory(req, res) {
  const { name } = req.body;

  try {
    const category = new CategorySchema({ name });

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

// PUT METHOD
async function updateCategory(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const category = await CategorySchema.findByIdAndUpdate(id, { name });

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

// DELETE METHOD
async function deleteCategory(req, res) {
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
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Failed to delete category",
      data: null,
    });
  }
}

module.exports = {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
