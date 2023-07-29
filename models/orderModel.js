// orderModel.js
import { ObjectId } from 'mongodb'; // Import ObjectId from the MongoDB driver
import connectDB from '../lib/mongodb/index'; // Update the path

// Function to get the MongoDB collection
const getOrderCollection = async () => {
  try {
    const client = await connectDB();
    const db = client.db('CaterNinja'); // Replace with your database name
    return db.collection('orders');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

// CRUD Operations using the MongoDB driver
const createOrder = async (orderData) => {
  try {
    const collection = await getOrderCollection();
    const result = await collection.insertOne(orderData);
    return result.insertedId;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

const getOrderById = async (orderId) => {
  try {
    const collection = await getOrderCollection();
    let order;
    if (orderId) {
      order = await collection.findOne({ _id: ObjectId(orderId) });
    } else {
      order = await collection.find().toArray();
    }
    return order;
  } catch (error) {
    console.error('Error getting order by ID:', error);
    throw error;
  }
};

// Add other CRUD operations if needed

export { createOrder, getOrderById };
