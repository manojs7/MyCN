import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [formData, setFormData] = useState({
    role: "",
    username: "",
    password: "",
    city: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to the API to save the user data
    axios.post("/api/AddUsers", formData)
      .then((response) => {
        console.log(response.data);
        // Clear the form after successful submission
        setFormData({
          role: "",
          username: "",
          password: "",
          city: "",
          email: "",
          mobile: "",
        });
      })
      .catch((error) => {
        console.error("Error saving user:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Role:
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
            <option value="">Select Role</option>
            <option value="sales">sales</option>
            <option value="ops">ops</option>
            <option value="admin">admin</option>
            <option value="captain">captain</option>
            <option value="kitchen">kitchen</option>
        </select>
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Mobile:
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
      </label>
      <br />

      {/* Add the submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;