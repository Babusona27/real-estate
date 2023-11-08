const express = require("express");
const router = express.Router();
const { validateRequest } = require("../middleware/PropertyMiddleware");
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoryController");

const {
  getProperties,
  createProperty,
  updateProperty,
  deleteProperty,
  getProperty,
} = require("../controllers/PropertyController");

const {
  GetCountry,
  CreateCountry,
  UpdateCountry,
  DeleteCountry,
} = require("../controllers/CountryController");

// ******************All CATEGORY ROUTE*********************
router.get("/getcategories", getCategories);
router.post("/createcategory", validateRequest, createCategory);
router.put("/updatecategory/:id", updateCategory);
router.delete("/deletecategory/:id", deleteCategory);

// ******************All PROPERTY ROUTE*********************
router.get("/getproperties", getProperties);
router.get("/propertydetails/:id", getProperty);
router.post("/createproperty", validateRequest, createProperty);
router.put("/updateproperty/:id", updateProperty);
router.delete("/deleteproperty/:id", deleteProperty);

// ********************All COUNTRY ROUTE******************************
router.get("/country", GetCountry);
router.post("/country", CreateCountry);
router.put("country/:id", UpdateCountry);
router.delete("country/:id", DeleteCountry);

module.exports = router;
