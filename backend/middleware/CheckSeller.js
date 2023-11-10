// Middleware to check if the user is a seller
const checkSeller = (req, res, next) => {
  console.log("User Type:", req.user.user_type);
  if (req.user && req.user.user_type === "seller") {
    // User is a seller, proceed to the next middleware or route handler
    next();
  } else {
    // User is not a seller, respond with an error
    res
      .status(403)
      .json({ error: "Only sellers are allowed to create properties." });
  }
};

module.exports = { checkSeller };