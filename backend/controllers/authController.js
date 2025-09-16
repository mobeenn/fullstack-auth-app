import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Register Controller
export const registerUser = async (req, res) => {
   try {
      const { name, email, password } = req.body;

      // 🔹 Basic field validation
      if (!name || !email || !password) {
         return res
            .status(400)
            .json({ success: false, message: "All fields are required" });
      }

      // 🔹 Email already exists check
      const existingUser = await User.findOne({ email });
      if (existingUser) {
         return res
            .status(409) // Conflict status code
            .json({ success: false, message: "User already exists" });
      }

      // 🔹 Password length check
      if (password.length < 6) {
         return res.status(400).json({
            success: false,
            message: "Password must be at least 6 characters long",
         });
      }

      // 🔹 Password hash
      const hashedPassword = await bcrypt.hash(password, 10);

      // 🔹 New user create
      const user = await User.create({
         name,
         email,
         password: hashedPassword,
      });

      // 🔹 Response without password
      return res.status(201).json({
         success: true,
         message: "User registered successfully",
         user: {
            id: user._id,
            name: user.name,
            email: user.email,
         },
      });
   } catch (error) {
      console.error("Register Error:", error);
      return res.status(500).json({
         success: false,
         message: "Server error, please try again later",
      });
   }
};

// controllers/authController.js
export const loginUser = async (req, res) => {
   try {
      const { email, password } = req.body;

      // Email check
      const user = await User.findOne({ email });
      if (!user) {
         return res.status(404).json({ message: "User not found" });
      }

      // Password check
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
         return res.status(401).json({ message: "Invalid credentials" });
      }

      // Token generate
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
         expiresIn: "1h",
      });

      // password ko hide karke bhejna
      const { password: _, ...userData } = user._doc;

      return res.status(200).json({
         message: "Login successful",
         token,
         user: userData,
      });
   } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ message: "Server error" });
   }
};
