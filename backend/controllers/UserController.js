const UserSchema = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

// User Registration
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
    const hashedPassword = await bcrypt.hash(password, 10);
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
    await newUser.save();
    res.status(201).json({
      status: true,
      data: newUser,
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
}

// User Login
async function Userlogin(req, res) {
  const { user_email, password } = req.body;

  try {
    const user = await UserSchema.findOne({ user_email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Create a JWT token with user information in the payload
    const payload = {
      user_id: user._id,
      user_type: user.user_type,
    };
    console.log("from usercontroller", payload);

    const token = jwt.sign(payload, secretKey, {
      expiresIn: "24h",
    });

    res.json({ message: "User Login Successfull", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Login failed" });
  }
}

module.exports = { Userregister, Userlogin };
