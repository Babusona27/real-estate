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
} = require("../controllers/PropertyController");
const {
  getCountries,
  createCountry,
  updateCountry,
  deleteCountry,
} = require("../controllers/CountryController");
const {
  getStates,
  createState,
  updateState,
  deleteState,
} = require("../controllers/StateController");
const {
  getCities,
  createCity,
  updateCity,
  deleteCity,
} = require("../controllers/CityController");

// ******************All CATEGORY ROUTE*********************
router.get("/getcategories", getCategories);
router.post("/createcategory", createCategory);
router.put("/updatecategory/:id", updateCategory);
router.delete("/deletecategory/:id", deleteCategory);

// ******************All PROPERTY ROUTE*********************
router.get("/getproperties", getProperties);
router.post("/createproperty", validateRequest, createProperty);
router.put("/updateproperty/:id", updateProperty);
router.delete("/deleteproperty/:id", deleteProperty);

// ******************All COUNTRY ROUTE*********************
router.get("/getcountries", getCountries);
router.post("/createcountry", createCountry);
router.put("/updatecountry/:id", updateCountry);
router.delete("/deletecountry/:id", deleteCountry);

// ******************All STATE ROUTE*********************
router.get("/getstates", getStates);
router.post("/createstate", createState);
router.put("/updatestate/:id", updateState);
router.delete("/deletestate/:id", deleteState);

// ******************All CITY ROUTE*********************
router.get("/getcities", getCities);
router.post("/createcity", createCity);
router.put("/updatecity/:id", updateCity);
router.delete("/deletecity/:id", deleteCity);

module.exports = router;
