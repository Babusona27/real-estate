// Middleware to check if the user is a buyer
const checkBuyer = (req, res, next) => {
  console.log("User Type:", req.user.user_type);
  if (req.user && req.user.user_type === "buyer") {
    // User is a seller, proceed to the next middleware or route handler
    next();
  } else {
    // User is not a seller, respond with an error
    res.status(403).json({
      status: false,
      message: "Only buyers are allowed to create properties.",
    });
  }
};

module.exports = { checkBuyer };
