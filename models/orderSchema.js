// orderSchema.js
import mongoose from 'mongoose';

const orderSchema = {
  orderid:{ type: "string", required: true },
  ninja:{ type: "string", required: true, default:"DIY" },
  user: {
    name: { type: "string", required: true },
    email: { type: "string", required: true },
    mobile: { type: "string", required: true },
    city: { type: "string", required: true },
  },
  event_time: { type: "string", required: true },
  event_date: { type: "date", required: true },
  instructions: { type: "string" },
  menu_selected: mongoose.Schema.Types.Mixed,
  guest_count: { type: "number", required: true },
  veg_c: { type: "number", required: true },
  nonveg_c: { type: "number", required: true },
  address: { type: "string", required: true },
  pincode: { type: "string", required: true },
  grandTotal: { type: "string", required: true },
  location_url: { type: "string" },
  kitchendetails: {
    ops_ninja: { type: "string" },
    ops_ninjaEmail: { type: "string" },
    dispatchTimeFromKitchen: { type: "string" },
    kitchenName: { type: "string" },
    kitchenEmailId: { type: "string" },
    delivery: { type: "string" },
  },
  paymentdetails: {
    amount: { type: "number", required: true },
    payment_method: { type: "string", required: true },
    timeOfPayment: { type: "date", required: true },
    transaction_no: { type: "string", required: true },
    transaction_time: { type: "date", required: true },
    reference_no: { type: "string" },
  },
  statusdetails: {
    current_status: { type: "string" },
    overall: { type: "string" },
  },
};

module.exports = orderSchema;
