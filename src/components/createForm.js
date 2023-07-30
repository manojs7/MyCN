import React, { useState } from "react";
import styles from "../../styles/Admin/captainForm.module.scss"; // Make sure to update the path based on your project structure
import BaseCard from "./baseCard/BaseCard";
import { Slack } from "feather-icons-react/build/IconComponents";
import { Select } from "@mui/base";
import Router from "next/router";

const CreateForm = () => {
  const [formData, setFormData] = useState({
    ninja: "",
    orderid: "",
    name: "",
    email: "",
    mobile: "",
    city: "",
    event_time: "",
    event_date: "",
    instructions: "",
    menu_selected: null, // or you can set an initial value here
    guest_count: 0,
    veg_c: 0,
    nonveg_c: 0,
    address: "",
    pincode: "",
    grandTotal: "",
    location_url: "",
    amount: "",
    payment_method: "",
    timeOfPayment: "",
    transaction_no: "",
    transaction_time: "",
    reference_no: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    console.log("Form validated:", validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      fetch("/api/ordersApprove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderData: formData }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response, show success message, etc.
          console.log("Order approved and saved:", data);
          fetchData();
        })
        .catch((error) => {
          // Handle errors, show error message, etc.
          console.error("Error approving order:", error);
        });

      // Your form submission logic here
      alert("Form submitted:");
      Router.push("/Admin/orders");
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    // Add your validation rules here
    if (!data.event_date) {
      errors.event_date = "Date of Event is required.";
    }

    setErrors(errors);
    // Add more validation rules for other fields

    return errors;
  };

  return (
    <BaseCard>
      <form onSubmit={handleSubmit}>
        <label>
          Ninja:
          <input
            type="text"
            name="ninja"
            value={formData.ninja}
            onChange={handleChange}
          />
        </label>

        <label>
          Order ID:
          <input
            type="text"
            name="orderid"
            value={formData.orderid}
            onChange={handleChange}
          />
        </label>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Mobile:
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </label>

        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </label>

        <label>
          Event Time:
          <input
            type="time"
            name="event_time"
            value={formData.event_time}
            onChange={handleChange}
          />
        </label>

        <label>
          Event Date:
          <input
            type="date"
            name="event_date"
            value={formData.event_date}
            onChange={handleChange}
          />
        </label>

        <label>
          Instructions:
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
          ></textarea>
        </label>

        <label>
          Menu Selected:
          <input
            type="text"
            name="menu_selected"
            value={formData.menu_selected}
            onChange={handleChange}
          />
        </label>

        <label>
          Guest Count:
          <input
            type="number"
            name="guest_count"
            value={formData.guest_count}
            onChange={handleChange}
          />
        </label>

        <label>
          Vegetarian Count:
          <input
            type="number"
            name="veg_c"
            value={formData.veg_c}
            onChange={handleChange}
          />
        </label>

        <label>
          Non-Vegetarian Count:
          <input
            type="number"
            name="nonveg_c"
            value={formData.nonveg_c}
            onChange={handleChange}
          />
        </label>

        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </label>

        <label>
          Pincode:
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </label>

        <label>
          Grand Total:
          <input
            type="number"
            name="grandTotal"
            value={formData.grandTotal}
            onChange={handleChange}
          />
        </label>

        <label>
          Location URL:
          <input
            type="text"
            name="location_url"
            value={formData.location_url}
            onChange={handleChange}
          />
        </label>

        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </label>

        <label>
          Payment Method:
          <input
            type="text"
            name="payment_method"
            value={formData.payment_method}
            onChange={handleChange}
          />
        </label>

        <label>
          Time of Payment:
          <input
            type="time"
            name="timeOfPayment"
            value={formData.timeOfPayment}
            onChange={handleChange}
          />
        </label>

        <label>
          Transaction No:
          <input
            type="text"
            name="transaction_no"
            value={formData.transaction_no}
            onChange={handleChange}
          />
        </label>

        <label>
          Transaction Time:
          <input
            type="time"
            name="transaction_time"
            value={formData.transaction_time}
            onChange={handleChange}
          />
        </label>

        <label>
          Reference No:
          <input
            type="text"
            name="reference_no"
            value={formData.reference_no}
            onChange={handleChange}
          />
        </label>

        {/* Add the submit button */}
        <button type="submit">Submit</button>
      </form>
    </BaseCard>
  );
};

export default CreateForm;
