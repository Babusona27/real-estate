const express = require("express");
const router = express.Router();

const { validateRequest } = require("../middleware/PropertyMiddleware");
const { checkSeller } = require("../middleware/CheckSeller");
const { checkBuyer } = require("../middleware/CheckBuyer");
const { authenticate } = require("../middleware/Authentication");
const blogController = require("../controllers/BlogController");
const aboutUsController = require("../controllers/AboutUsController");
const termsAndConditionsController = require("../controllers/TermsAndConditionsController");
const PrivacyPolicyController = require("../controllers/PrivacyPolicyController");
const ContactUsController = require("../controllers/ContactUsController");
const propertyController = require("../controllers/PropertyController");
const UserController = require("../controllers/UserController");
const CategoryController = require("../controllers/CategoryController");
const CountryController = require("../controllers/CountryController");
const favoriteController = require("../controllers/FavoriteController");




// ******************All CATEGORY ROUTE*********************
router.get("/getcategories", CategoryController.getCategories);
router.post("/createcategory", validateRequest, CategoryController.createCategory);
router.put("/updatecategory/:id", CategoryController.updateCategory);
router.delete("/deletecategory/:id", CategoryController.deleteCategory);

// ******************All PROPERTY ROUTE*********************
router.get("/getproperties", propertyController.getProperties);
router.get("/propertydetails/:slug", propertyController.getProperty);
router.post("/createproperty", authenticate, validateRequest, checkSeller, propertyController.createProperty);
router.put("/updateproperty/:id", authenticate, checkSeller, propertyController.updateProperty);
router.delete("/deleteproperty/:id", authenticate, checkSeller, propertyController.deleteProperty);
//property review
router.post("/reviewsubmit/:slug", authenticate, propertyController.reviewSubmit);
router.get("/reviews/:propertyId", authenticate, propertyController.getReviews);
router.put("/updatereview/:propertyId", authenticate, propertyController.updateReviews);


router.get("/myproperties", authenticate, checkSeller, propertyController.getSellerProperty);
router.delete("/deleteimages/:id/:imageIndex", propertyController.deleteImages);

// ********************All FAVOURITE ROUTE******************************
router.post("/addToFavorite", authenticate, checkBuyer, favoriteController.addToFavorite);
router.delete("/deleteFavorite/:id/:propertyIndex", authenticate, checkBuyer, favoriteController.deleteFavorite);
router.get("/myFavorites/:user_id", authenticate, checkBuyer, favoriteController.myFavorites);

// ********************APPOINTMENT REQUEST ROUTE******************************
router.post("/sendAppointmentRequest", authenticate, checkBuyer, favoriteController.sendAppointmentRequest);

// ********************USER ROUTE******************************
router.post("/Userregister", UserController.userRegister);
router.post("/Userlogin", UserController.userLogin);
//user review
router.post("/userreview/:userId", authenticate, UserController.userReview);
router.get("/userreviews/:userId", authenticate, UserController.getUserReviews);

// ********************All COUNTRY ROUTE******************************
router.get("/country", CountryController.getCountry);
router.post("/country", CountryController.createCountry);
router.put("country/:id", CountryController.updateCountry);
router.delete("country/:id", CountryController.deleteCountry);
// ********************All Blog ROUTE******************************
router.get("/blog", blogController.getBlog);
router.post("/blog", blogController.createBlog);
router.put("/blog/:id", blogController.updateBlog);
router.delete("/blog/:id", blogController.deleteBlog);
// ********************All AboutUs ROUTE******************************
router.get("/aboutus", aboutUsController.getAboutUs);
router.post("/aboutus", aboutUsController.createAboutUs);
router.put("/aboutus/:id", aboutUsController.updateAboutUs);
router.delete("/aboutus/:id", aboutUsController.deleteAboutUs);
// ********************All TermsAndConditions ROUTE******************************
router.get("/termsandconditions", termsAndConditionsController.getTermsAndConditions);
router.post("/termsandconditions", termsAndConditionsController.createTermsAndConditions);
router.put("/termsandconditions/:id", termsAndConditionsController.updateTermsAndConditions);
router.delete("/termsandconditions/:id", termsAndConditionsController.deleteTermsAndConditions);
// ********************All PrivacyPolicy ROUTE******************************
router.get("/privacypolicy", PrivacyPolicyController.getPrivacyPolicy);
router.post("/privacypolicy", PrivacyPolicyController.createPrivacyPolicy);
router.put("/privacypolicy/:id", PrivacyPolicyController.updatePrivacyPolicy);
router.delete("/privacypolicy/:id", PrivacyPolicyController.deletePrivacyPolicy);
// ********************All ContactUs ROUTE******************************
router.get("/contactus", ContactUsController.getContactUs);
router.post("/contactus", ContactUsController.createContactUs);

module.exports = router;
