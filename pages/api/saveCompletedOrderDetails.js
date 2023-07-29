// pages/api/order.js

import connectDB from '../../lib/mongodb/index';

export default async function handler(req, res) {
  try {
    // Connect to the MongoDB client before performing the database operation
    const client = await connectDB();
    const db = client.db("CaterNinja");
    const collection = db.collection("saveCompletedOrderDetails");

    if (req.method === "POST") {
      // Assuming the request body contains the order data in JSON format
      const orderData = req.body;

      // Insert the order into the collection
      const result = await collection.insertOne(orderData);

      // Return the inserted order as the response
      return res.status(201).json({ message: 'Order created successfully', order: result.ops[0] });
    } else {
      // Fetch all orders from the collection
      const allOrders = await collection.find({}).toArray();

      // Return the fetched orders as the response
      return res.status(200).json({ status: 200, data: allOrders });
    }
  } catch (error) {
    console.error('Error in order API:', error);
    return res.status(500).json({ message: 'Server Error' });
  }
}
