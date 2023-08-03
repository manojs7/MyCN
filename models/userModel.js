// orderModel.js
import { ObjectId } from 'mongodb'; // Import ObjectId from the MongoDB driver
import connectDB from '../lib/mongodb/index'; // Update the path
import mongoose from 'mongoose';

const User = mongoose.models.User || mongoose.model("User", userSchema);

// Function to get the MongoDB collection
const getUserCollection = async () => {
  try {
    const client = await connectDB();
    const db = client.db('CaterNinja'); // Replace with your database name
    return db.collection('users');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

// CRUD Operations using the MongoDB driver
const addUser = async (userData) => {
  try {
    const collection = await getUserCollection();
    const newUser = new User(userData);
    const result = await newUser.save();
  console.log("New user created:", result);

    // const result = await collection.insertOne(userData);
    // return result.insertedId;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export { addUser };
