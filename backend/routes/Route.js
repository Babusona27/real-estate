const express = require("express");
const router = express.Router();

const { validateRequest } = require("../middleware/PropertyMiddleware");
const { Userregister, Userlogin } = require("../controllers/UserController");
const { checkSeller } = require("../middleware/CheckSeller");
const { checkBuyer } = require("../middleware/CheckBuyer");
const { authenticate } = require("../middleware/Authentication");
const { getCategories, createCategory, updateCategory, deleteCategory, } = require("../controllers/CategoryController");
const { getProperties, createProperty, updateProperty, deleteProperty, getProperty, deleteImages, getSellerProperty, reviewSubmit } = require("../controllers/PropertyController");
const { GetCountry, CreateCountry, UpdateCountry, DeleteCountry, } = require("../controllers/CountryController");
const { addToFavorite, myFavorites, deleteFavorite, sendAppointmentRequest } = require("../controllers/FavouriteController");
const BlogController = require("../controllers/BlogController");
const AboutUsController = require("../controllers/AboutUsController");
const TermsAndConditionsController = require("../controllers/TermsAndConditionsController");
const PrivacyPolicyController = require("../controllers/PrivacyPolicyController");




// ******************All CATEGORY ROUTE*********************
router.get("/getcategories", getCategories);
router.post("/createcategory", validateRequest, createCategory);
router.put("/updatecategory/:id", updateCategory);
router.delete("/deletecategory/:id", deleteCategory);

// ******************All PROPERTY ROUTE*********************
router.get("/getproperties", getProperties);
router.get("/propertydetails/:slug", getProperty);
router.post("/createproperty", authenticate, validateRequest, checkSeller, createProperty);
router.put("/updateproperty/:id", authenticate, checkSeller, updateProperty);
router.delete("/deleteproperty/:id", authenticate, checkSeller, deleteProperty);

// ******************REVIEWS ROUTE*********************
router.post("/reviewsubmit/:propertyId", authenticate, checkBuyer, reviewSubmit);

// ******************GET SELLER ALL PROPERTY*********************
router.get("/myproperties", authenticate, checkSeller, getSellerProperty);

// ******************DELETE IMAGE ROUTE********
router.delete("/deleteimages/:id/:imageIndex", deleteImages);

// ********************All FAVOURITE ROUTE******************************
router.post("/addToFavorite", authenticate, checkBuyer, addToFavorite);
router.delete("/deleteFavorite/:id/:propertyIndex", authenticate, checkBuyer, deleteFavorite);
router.get("/myFavorites/:user_id", authenticate, checkBuyer, myFavorites);

// ********************APPOINTMENT REQUEST ROUTE******************************
router.post("/sendAppointmentRequest", authenticate, checkBuyer, sendAppointmentRequest);

// ********************USER ROUTE******************************
router.post("/Userregister", Userregister);
router.post("/Userlogin", Userlogin);

// ********************All COUNTRY ROUTE******************************
router.get("/country", GetCountry);
router.post("/country", CreateCountry);
router.put("country/:id", UpdateCountry);
router.delete("country/:id", DeleteCountry);
// ********************All Blog ROUTE******************************
router.get("/blog", BlogController.getBlog);
router.post("/blog", BlogController.createBlog);
router.put("/blog/:id", BlogController.updateBlog);
router.delete("/blog/:id", BlogController.deleteBlog);
// ********************All AboutUs ROUTE******************************
router.get("/aboutus", AboutUsController.getAboutUs);
router.post("/aboutus", AboutUsController.createAboutUs);
router.put("/aboutus/:id", AboutUsController.updateAboutUs);
router.delete("/aboutus/:id", AboutUsController.deleteAboutUs);
// ********************All TermsAndConditions ROUTE******************************
router.get("/termsandconditions", TermsAndConditionsController.getTermsAndConditions);
router.post("/termsandconditions", TermsAndConditionsController.createTermsAndConditions);
router.put("/termsandconditions/:id", TermsAndConditionsController.updateTermsAndConditions);
router.delete("/termsandconditions/:id", TermsAndConditionsController.deleteTermsAndConditions);
// ********************All PrivacyPolicy ROUTE******************************
router.get("/privacypolicy", PrivacyPolicyController.getPrivacyPolicy);
router.post("/privacypolicy", PrivacyPolicyController.createPrivacyPolicy);
router.put("/privacypolicy/:id", PrivacyPolicyController.updatePrivacyPolicy);
router.delete("/privacypolicy/:id", PrivacyPolicyController.deletePrivacyPolicy);




module.exports = router;
