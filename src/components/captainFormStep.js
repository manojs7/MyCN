import React, { useState } from 'react';
import styles from '../../styles/Admin/captainForm.module.scss'; // Make sure to update the path based on your project structure

const CaptainForm = () => {
  const [formData, setFormData] = useState({
    dateOfEvent: '',
    dispatchTime: '',
    kitchenName: '',
    orderID: '',
    clientName: '',
    productName: '',
    menuSelected: '',
    specialInstructions: '',
    deliveryAgent: '',
    deliveryAgentContact: '',
    guestCount: '',
    modifiedSection: '',
    city: '',
    kitchenCode: '',
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
    if (Object.keys(validationErrors).length === 0) {
      // Your form submission logic here
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    // Add your validation rules here
    if (!data.dateOfEvent) {
      errors.dateOfEvent = 'Date of Event is required.';
    }

    // Add more validation rules for other fields

    return errors;
  };

  return (
    <form className={styles['event-form']} onSubmit={handleSubmit}>
      <div className={styles['form-group']}>
        <label>Date of Event:</label>
        <input
          type="date"
          name="dateOfEvent"
          value={formData.dateOfEvent}
          onChange={handleChange}
        />
        {errors.dateOfEvent && <span className={styles.error}>{errors.dateOfEvent}</span>}
      </div>

      <div className={styles['form-group']}>
        <label>Dispatch Time (AM/PM format):</label>
        <input
          type="text"
          name="dispatchTime"
          value={formData.dispatchTime}
          onChange={handleChange}
        />
        {/* Add validation error span if needed */}
      </div>

      <div className={styles['form-group']}>
        <label>Kitchen Name:</label>
        <input
          type="text"
          name="kitchenName"
          value={formData.kitchenName}
          onChange={handleChange}
        />
        {/* Add validation error span if needed */}
      </div>

      {/* Add other input fields here */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default CaptainForm;
