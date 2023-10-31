const express = require("express");
const router = express.Router();
const {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoryController");

const {
  getProperties,
  createProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/PropertyController");
const { validateRequest } = require("../middleware/PropertyMiddleware");

// ******************All CATEGORY ROUTE*********************

// get all categories route
router.get("/getcategory", getCategory);

// post category route
router.post("/createcategory", createCategory);

// update category route
router.put("/updatecategory/:id", updateCategory);

// delete category route
router.delete("/deletecategory/:id", deleteCategory);

// ******************All PROPERTY ROUTE*********************

// get all properties route
router.get("/getproperties", getProperties);

// post property route
router.post("/createproperty", validateRequest, createProperty);

// update property route
router.put("/updateproperty/:id", updateProperty);

// delete property route
router.delete("/deleteproperty/:id", deleteProperty);

module.exports = router;
