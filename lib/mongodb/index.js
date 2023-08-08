// lib/mongodb/index.js

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  // ... other options
  connectTimeoutMS: 30000, // Set the connection timeout to 30 seconds (adjust as needed)
  serverSelectionTimeoutMS: 30000, // Set the server selection timeout to 30 seconds (adjust as needed)
};

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const client = new MongoClient(uri, options);

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB !');
    return client;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
}

export default connectDB;
