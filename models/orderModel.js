// orderModel.js
import mongoose from 'mongoose';
import clientPromise from '../lib/mongodb/index'; // Update the path
import orderSchema from "../models/orderSchema";
// Define the order schema using Mongoose

// Create the Mongoose model for the "orders" collection
const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

// Function to get the MongoDB collection
const getOrderCollection = async () => {
  try {
    const client = await clientPromise;
    const db = client.db('CaterNinja'); // Replace with your database name
    return db.collection('orders');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

// CRUD Operations using Mongoose
const createOrder = async (orderData) => {
  try {
    const order = new Order(orderData);
    const savedOrder = await order.save();
    return savedOrder;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

// Add other CRUD operations if needed

export { createOrder };
