// pages/api/order.js
import { connectDB } from '../../utils/db'; // Import the database connection function
import { createOrder, getOrderById } from '../../models/orderModel'; // Import the Mongoose order model

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Create a new order
    try {
      const  {orderData}  = req.body; // Get the order data from the request body
      const savedOrder = await createOrder(orderData);
      res.status(201).json({ message: 'Order created successfully', order: savedOrder });
      
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ message: 'Failed to create order' });
    }
  } else if (req.method === 'GET') {
    // Get all orders
    try {
      const orders = await getOrderById();
      return res.status(200).json({ status: 200, data: orders });

    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ message: 'Failed to fetch orders' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
