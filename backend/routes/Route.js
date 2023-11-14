const express = require("express");
const router = express.Router();

const { validateRequest } = require("../middleware/PropertyMiddleware");
const { Userregister, Userlogin } = require("../controllers/UserController");
const { checkSeller } = require("../middleware/CheckSeller");
const { checkBuyer } = require("../middleware/CheckBuyer");
const { authenticate } = require("../middleware/Authentication");

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
  deleteImages,
  getSellerProperty,
  reviewSubmit,
} = require("../controllers/PropertyController");

const {
  GetCountry,
  CreateCountry,
  UpdateCountry,
  DeleteCountry,
} = require("../controllers/CountryController");

const {
  addToFavorite,
  myFavorites,
  deleteFavorite,
  sendAppointmentRequest,
} = require("../controllers/FavouriteController");

// ******************All CATEGORY ROUTE*********************
router.get("/getcategories", getCategories);
router.post("/createcategory", validateRequest, createCategory);
router.put("/updatecategory/:id", updateCategory);
router.delete("/deletecategory/:id", deleteCategory);

// ******************All PROPERTY ROUTE*********************
router.get("/getproperties", getProperties);
router.get("/propertydetails/:id", getProperty);
router.post(
  "/createproperty",
  authenticate,
  validateRequest,
  checkSeller,
  createProperty
);
router.put("/updateproperty/:id", authenticate, checkSeller, updateProperty);
router.delete("/deleteproperty/:id", authenticate, checkSeller, deleteProperty);

// ******************REVIEWS ROUTE*********************
router.post(
  "/reviewsubmit/:propertyId",
  authenticate,
  checkBuyer,
  reviewSubmit
);

// ******************GET SELLER ALL PROPERTY*********************
router.get("/myproperties", authenticate, checkSeller, getSellerProperty);

// ******************DELETE IMAGE ROUTE********
router.delete("/deleteimages/:id/:imageIndex", deleteImages);

// ********************All FAVOURITE ROUTE******************************
router.post("/addToFavorite", authenticate, checkBuyer, addToFavorite);
router.delete(
  "/deleteFavorite/:id/:propertyIndex",
  authenticate,
  checkBuyer,
  deleteFavorite
);
router.get("/myFavorites/:user_id", authenticate, checkBuyer, myFavorites);

// ********************APPOINTMENT REQUEST ROUTE******************************
router.post(
  "/sendAppointmentRequest",
  authenticate,
  checkBuyer,
  sendAppointmentRequest
);

// ********************USER ROUTE******************************
router.post("/Userregister", Userregister);
router.post("/Userlogin", Userlogin);

// ********************All COUNTRY ROUTE******************************
router.get("/country", GetCountry);
router.post("/country", CreateCountry);
router.put("country/:id", UpdateCountry);
router.delete("country/:id", DeleteCountry);

module.exports = router;
