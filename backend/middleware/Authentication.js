const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

// Authenticate Middleware: You need to implement authentication middleware to verify the user's token.
function authenticate(req, res, next) {
  const token = req.headers.authorization; // You can use any authentication method you prefer
  //   console.log("Received token:", token);

  if (!token) {
    return res.status(401).json({ status: false, message: "Unauthorized" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      // console.log(err);
      return res.status(401).json({ sattus: false, message: "Unauthorized" });
    }
    req.user = decoded;
    // console.log("**********", decoded);
    next();
  });
}

module.exports = { authenticate };
