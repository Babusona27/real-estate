const express = require("express");
const router = express.Router();

const { validateRequest } = require("../middleware/PropertyMiddleware");
const { Userregister, Userlogin } = require("../controllers/UserController");
const { checkSeller } = require("../middleware/CheckSeller");
const { checkBuyer } = require("../middleware/CheckBuyer");
const { authenticate } = require("../middleware/Authentication");
const { getCategories, createCategory, updateCategory, deleteCategory, } = require("../controllers/CategoryController");
const { GetCountry, CreateCountry, UpdateCountry, DeleteCountry, } = require("../controllers/CountryController");
const { addToFavorite, myFavorites, deleteFavorite, sendAppointmentRequest } = require("../controllers/FavouriteController");
const BlogController = require("../controllers/BlogController");
const AboutUsController = require("../controllers/AboutUsController");
const TermsAndConditionsController = require("../controllers/TermsAndConditionsController");
const PrivacyPolicyController = require("../controllers/PrivacyPolicyController");
const ContactUsController = require("../controllers/ContactUsController");
const propertyController = require("../controllers/PropertyController");




// ******************All CATEGORY ROUTE*********************
router.get("/getcategories", getCategories);
router.post("/createcategory", validateRequest, createCategory);
router.put("/updatecategory/:id", updateCategory);
router.delete("/deletecategory/:id", deleteCategory);

// ******************All PROPERTY ROUTE*********************
router.get("/getproperties", propertyController.getProperties);
router.get("/propertydetails/:id", propertyController.getProperty);
router.post("/createproperty", authenticate, validateRequest, checkSeller, propertyController.createProperty);
router.put("/updateproperty/:id", authenticate, checkSeller, propertyController.updateProperty);
router.delete("/deleteproperty/:id", authenticate, checkSeller, propertyController.deleteProperty);
router.post("/reviewsubmit/:propertyId", authenticate, checkBuyer, propertyController.reviewSubmit);
router.get("/reviews/:propertyId", propertyController.getReviews);
router.put("/updatereview/:propertyId", authenticate, checkBuyer, propertyController.updateReviews);

router.get("/myproperties", authenticate, checkSeller, propertyController.getSellerProperty);
router.delete("/deleteimages/:id/:imageIndex", propertyController.deleteImages);

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
// ********************All ContactUs ROUTE******************************
router.get("/contactus", ContactUsController.getContactUs);
router.post("/contactus", ContactUsController.createContactUs);

module.exports = router;
