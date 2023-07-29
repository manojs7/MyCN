import React, { useState } from 'react';
import styles from '../../styles/Admin/captainForm.module.scss'; // Make sure to update the path based on your project structure
import BaseCard from './baseCard/BaseCard';
import { Slack } from 'feather-icons-react/build/IconComponents';
import { Select } from '@mui/base';

const CreateForm = () => {
  const [formData, setFormData] = useState({
    ninja:"",
    dateOfEvent: '',
    eventTime: '',
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

    // orderid: '',
    //   user: {
    //     name: '',
    //     email: '',
    //     mobile: '',
    //     city: '',
    //   },
    //   event_time: '',
    //   event_date: '',
    //   instructions: '',
    //   menu_selected: null, // or you can set an initial value here
    //   guest_count: 0,
    //   veg_c: 0,
    //   nonveg_c: 0,
    //   address: '',
    //   pincode: '',
    //   grandTotal: '',
    //   location_url: '',
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
    <form onSubmit={handleSubmit}>
      
      <label>
        Ninja:
        <select
        className='form-control'
          name="ninja"
          value={formData.ninja}
          onChange={handleChange}
        >
          <option value="">Select Ninja</option>
          <option value="diy">DIY</option>
          <option value="Anup">Anup</option>
        </select>
      </label>
      <br />
      <label>
        Date of Event:
        <input
        className='form-control'
          type="date"
          name="dateOfEvent"
          value={formData.dateOfEvent}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Dispatch Time:
        <input
        className='form-control'
          type="time"
          name="dispatchTime"
          value={formData.dispatchTime}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Kitchen Name:
        <input
        className='form-control'
          type="text"
          name="kitchenName"
          value={formData.kitchenName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Order ID:
        <input
        className='form-control'
          type="text"
          name="orderID"
          value={formData.orderID}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Client Name:
        <input
        className='form-control'
          type="text"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Product Name:
        <input
        className='form-control'
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Menu Selected:
        <input
        className='form-control'
          type="text"
          name="menuSelected"
          value={formData.menuSelected}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Special Instructions:
        <input
        className='form-control'
          type="text"
          name="specialInstructions"
          value={formData.specialInstructions}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Delivery Agent:
        <input
        className='form-control'
          type="text"
          name="deliveryAgent"
          value={formData.deliveryAgent}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Delivery Agent Contact:
        <input
        className='form-control'
          type="text"
          name="deliveryAgentContact"
          value={formData.deliveryAgentContact}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Guest Count:
        <input
        className='form-control'
          type="number"
          name="guestCount"
          value={formData.guestCount}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Modified Section:
        <input
        className='form-control'
          type="text"
          name="modifiedSection"
          value={formData.modifiedSection}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        City:
        <input
        className='form-control'
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Kitchen Code:
        <input
        className='form-control'
          type="text"
          name="kitchenCode"
          value={formData.kitchenCode}
          onChange={handleChange}
        />
      </label>
      <br />

      {/* Add the submit button */}
      <button type="submit">Submit</button>
    </form>
    </BaseCard>
  );
};

export default CreateForm;
