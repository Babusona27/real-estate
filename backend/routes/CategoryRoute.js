const express = require("express");
const router = express.Router();
const {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoryController");


// get all categories route
router.get("/getcategory", getCategory);

// post category route
router.post("/createcategory", createCategory);

// update category route
router.put("/updatecategory/:id", updateCategory);

// delete categpry route
router.delete("/deletecategory/:id", deleteCategory);

module.exports = router;
