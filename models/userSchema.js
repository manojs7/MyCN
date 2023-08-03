import mongoose from 'mongoose';

const orderSchema = {
    role: { type: "string", required: true }, 
    username: { type: "string", required: true }, 
    password: { type: "string", required: true }, 
    city: { type: "string", required: true }, 
    email: { type: "string", required: true }, 
    mobile: { type: "string", required: true }, 
    createdAt: Date, 
    updatedAt: Date, 
}
module.exports = orderSchema;

  