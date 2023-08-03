import connectDB from '/lib/mongodb/index';
import mongoose from "mongoose";
import userSchema from "../../models/userSchema";
import {addUser} from "../../models/userModel"

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create a new user instance using the data from the request body
      // Save the user data to the database
      const savedUser = await addUser(req.body);
      res.status(201).json(savedUser);
    } catch (error) {
      console.error("Error saving user:", error);
      res.status(500).json({ error: "Failed to save user" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
