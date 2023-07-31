// pages/api/payment.js

import connectDB from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    // Connect to the MongoDB client before performing the database operation
    const client = await connectDB();
    const db = client.db("CaterNinja");
    const collection = db.collection("RawPaymentAllDetails");

    if (req.method === "POST") {
      // Assuming the request body contains the payment data in JSON format
      const paymentData = req.body;

      // Insert the payment details into the collection
      const result = await collection.insertOne(paymentData);

      // Return the inserted payment details as the response
      return res.status(201).json({ message: 'Payment details created successfully', payment: result.ops[0] });
    } else {
      // Fetch all payment details from the collection
      const sort = { createdAt: -1 };
      const allPayments = await collection.find({}).sort(sort).toArray();
      const filtered = allPayments.filter((payment) => payment.status.txnStatus === "CANCEL");

      // Return the filtered payment details as the response
      return res.status(200).json({ status: 200, data: filtered });
    }
  } catch (error) {
    console.error('Error in payment API:', error);
    return res.status(500).json({ message: 'Server Error' });
  }
}
