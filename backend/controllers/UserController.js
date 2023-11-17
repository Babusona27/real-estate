const UserSchema = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

// NEW USER REGISTRATION (POST METHOD)
async function Userregister(req, res) {
  const {
    user_name,
    user_image,
    user_type,
    seller_type,
    user_phone,
    user_email,
    user_address,
    password,
  } = req.body;

  try {
    // Check if the email is already registered
    const existingEmail = await UserSchema.findOne({ user_email });
    if (existingEmail) {
      return res.status(400).json({
        status: false,
        message: "Email is already registered. Please use a different email.",
      });
    }

    // Check if the phone number is already registered
    const existingPhone = await UserSchema.findOne({ user_phone });
    if (existingPhone) {
      return res.status(400).json({
        status: false,
        message:
          "Phone number is already registered. Please use a different phone number.",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new UserSchema({
      user_name,
      user_image,
      user_type,
      seller_type,
      user_phone,
      user_email,
      user_address,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Send a success response
    res.status(201).json({
      status: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: error.message });
  }
}

// USER LOGIN (POST METHOD)
async function Userlogin(req, res) {
  const { user_email, password } = req.body;

  try {
    const user = await UserSchema.findOne({ user_email });

    if (!user) {
      return res
        .status(401)
        .json({ status: false, message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ status: false, message: "Invalid email or password" });
    }

    // Create a JWT token with user information in the payload
    const payload = {
      user_id: user._id,
      user_type: user.user_type,
    };
    // console.log("from usercontroller", payload);

    const token = jwt.sign(payload, secretKey, {
      expiresIn: "24h",
    });
    
    const data = {
      token: token,
      user_name: user.user_name,
      user_image: user.user_image,
      user_type: user.user_type,
      seller_type: user.seller_type,
    };

    res.json({ status: true, message: "User Login Successfull", data: data });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ status: false, message: error.message });
  }
}

module.exports = { Userregister, Userlogin };
