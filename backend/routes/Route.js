const express = require("express");
const router = express.Router();

const { validateRequest } = require("../middleware/PropertyMiddleware");
const { checkSeller } = require("../middleware/CheckSeller");
const { checkBuyer } = require("../middleware/CheckBuyer");
const { authenticate } = require("../middleware/Authentication");
const blogController = require("../controllers/BlogController");
const aboutUsController = require("../controllers/AboutUsController");
const termsAndConditionsController = require("../controllers/TermsAndConditionsController");
const privacyPolicyController = require("../controllers/PrivacyPolicyController");
const contactUsController = require("../controllers/ContactUsController");
const propertyController = require("../controllers/PropertyController");
const userController = require("../controllers/UserController");
const categoryController = require("../controllers/CategoryController");
const countryController = require("../controllers/CountryController");
const favoriteController = require("../controllers/FavoriteController");




// ******************All CATEGORY ROUTE*********************
router.get("/getcategories", categoryController.getCategories);
router.post("/createcategory", validateRequest, categoryController.createCategory);
router.put("/updatecategory/:id", categoryController.updateCategory);
router.delete("/deletecategory/:id", categoryController.deleteCategory);

// ******************All PROPERTY ROUTE*********************
router.get("/getproperties", authenticate, propertyController.getProperties);
router.get("/propertydetails/:slug", propertyController.getProperty);
router.post("/createproperty", authenticate, validateRequest, propertyController.createProperty);
router.put("/updateproperty/:id", authenticate, propertyController.updateProperty);
router.delete("/deleteproperty/:id", authenticate, propertyController.deleteProperty);
//property review
router.post("/reviewsubmit/:slug", authenticate, propertyController.reviewSubmit);
router.get("/reviews/:slug", authenticate, propertyController.getReviews);
router.put("/updatereview/:propertyId", authenticate, propertyController.updateReviews);


router.get("/myproperties", authenticate, checkSeller, propertyController.getSellerProperty);
router.delete("/deleteimages/:id/:imageIndex", propertyController.deleteImages);

// ********************All FAVOURITE ROUTE******************************
router.post("/addToFavorite", authenticate, favoriteController.addToFavorite);
router.delete("/deleteFavorite/:id/:property_id", favoriteController.deleteFavorite);
router.get("/myFavorites/:user_id", authenticate, favoriteController.myFavorites);

// ********************APPOINTMENT REQUEST ROUTE******************************
router.post("/sendAppointmentRequest", authenticate, favoriteController.sendAppointmentRequest);

// ********************USER ROUTE******************************
router.post("/Userregister", userController.userRegister);
router.post("/Userlogin", userController.userLogin);
//user review
router.post("/userreview/:userId", authenticate, userController.userReview);
router.get("/userreviews/:userId", authenticate, userController.getUserReviews);

// ********************All COUNTRY ROUTE******************************
router.get("/country", countryController.getCountry);
router.post("/country", countryController.createCountry);
router.put("country/:id", countryController.updateCountry);
router.delete("country/:id", countryController.deleteCountry);
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
router.get("/privacypolicy", privacyPolicyController.getPrivacyPolicy);
router.post("/privacypolicy", privacyPolicyController.createPrivacyPolicy);
router.put("/privacypolicy/:id", privacyPolicyController.updatePrivacyPolicy);
router.delete("/privacypolicy/:id", privacyPolicyController.deletePrivacyPolicy);
// ********************All ContactUs ROUTE******************************
router.get("/contactus", contactUsController.getContactUs);
router.post("/contactus", contactUsController.createContactUs);
//mail send
router.post("/sendmail", contactUsController.sendMail);

module.exports = router;
