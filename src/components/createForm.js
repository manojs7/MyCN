import React, { useState } from 'react';
import styles from '../../styles/Admin/captainForm.module.scss'; // Make sure to update the path based on your project structure
import BaseCard from './baseCard/BaseCard';
import { Slack } from 'feather-icons-react/build/IconComponents';
import { Select } from '@mui/base';

const CreateForm = () => {
  const [formData, setFormData] = useState({
    ninja:"",
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
    <BaseCard>  
    <form className={styles['form-group']} onSubmit={handleSubmit}>
    <div className='container'>
      <div className='row'>
      <div className="col-md-4">
        <label>Ninja:</label>
        <Select
        className='form-control'
          name="ninja"
          value={formData.ninja}
          onChange={handleChange}
        >
          <option value={''}>Select Ninja</option>
          <option value={'Anup'}>Anup</option>
        </Select>

      </div>

      <div className="col-md-4">
        <label>Date of Event:</label>
        <input
        className='form-control'
          type="date"
          name="dateOfEvent"
          value={formData.dateOfEvent}
          onChange={handleChange}
        />
        {errors.dateOfEvent && <span className={styles.error}>{errors.dateOfEvent}</span>}
      </div>

      <div className="col-md-4">
        <label>Dispatch Time (AM/PM format):</label>
        <input
        className='form-control'
          type="time"
          name="dispatchTime"
          value={formData.dispatchTime}
          onChange={handleChange}
        />
        {/* Add validation error span if needed */}
      </div>

      <div className="col-md-4">
        <label>Kitchen Name:</label>
        <input
        className='form-control'
          type="text"
          name="kitchenName"
          value={formData.kitchenName}
          onChange={handleChange}
        />
        {/* Add validation error span if needed */}
      </div>

      <div className="col-md-4">
        <label>Kitchen Name:</label>
        <input
        className='form-control'
          type="text"
          name="kitchenName"
          value={formData.kitchenName}
          onChange={handleChange}
        />
        {/* Add validation error span if needed */}
      </div>
      <div className="col-md-4">
        <label>Kitchen Name:</label>
        <input
        className='form-control'
          type="text"
          name="kitchenName"
          value={formData.kitchenName}
          onChange={handleChange}
        />
        {/* Add validation error span if needed */}
      </div>
      <div className="col-md-4">
        <label>Kitchen Name:</label>
        <input
        className='form-control'
          type="text"
          name="kitchenName"
          value={formData.kitchenName}
          onChange={handleChange}
        />
        {/* Add validation error span if needed */}
      </div>
      <div className="col-md-4">
        <label>Kitchen Name:</label>
        <input
        className='form-control'
          type="text"
          name="kitchenName"
          value={formData.kitchenName}
          onChange={handleChange}
        />
        {/* Add validation error span if needed */}
      </div>
      <div className="col-md-4">
        <label>Kitchen Name:</label>
        <input
        className='form-control'
          type="text"
          name="kitchenName"
          value={formData.kitchenName}
          onChange={handleChange}
        />
        {/* Add validation error span if needed */}
      </div>
      <div className="col-md-4">
        <label>Kitchen Name:</label>
        <input
        className='form-control'
          type="text"
          name="kitchenName"
          value={formData.kitchenName}
          onChange={handleChange}
        />
        {/* Add validation error span if needed */}
      </div>
      <div className="col-md-4">
        <label>Kitchen Name:</label>
        <input
        className='form-control'
          type="text"
          name="kitchenName"
          value={formData.kitchenName}
          onChange={handleChange}
        />
        {/* Add validation error span if needed */}
      </div>

      {/* Add other input fields here */}

      </div>
      <button type="submit" className='btn btn-primary col-md-4' maxLength={10} >Submit</button>

    </div>
    </form>
    
    </BaseCard>
  );
};

export default CreateForm;
