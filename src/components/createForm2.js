import React, { useState } from 'react';

const CreateForm2 = () => {
  const [order, setOrder] = useState({
    orderid: '',
    user: {
      name: '',
      email: '',
      mobile: '',
      city: '',
    },
    event_time: '',
    event_date: '',
    instructions: '',
    menu_selected: null, // or you can set an initial value here
    guest_count: 0,
    veg_c: 0,
    nonveg_c: 0,
    address: '',
    pincode: '',
    grandTotal: '',
    location_url: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here, e.g. send the order data to an API

    // reset the form after submission
    setOrder({
      orderid: '',
      user: {
        name: '',
        email: '',
        mobile: '',
        city: '',
      },
      event_time: '',
      event_date: '',
      instructions: '',
      menu_selected: null, // or you can set an initial value here
      guest_count: 0,
      veg_c: 0,
      nonveg_c: 0,
      address: '',
      pincode: '',
      grandTotal: '',
      location_url: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      user: {
        ...prevOrder.user,
        [name]: value,
      },
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Order ID:
        <input
          type="text"
          name="orderid"
          value={order.orderid}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        User Name:
        <input
          type="text"
          name="name"
          value={order.user.name}
          onChange={handleUserChange}
          required
        />
      </label>
      <br />
      {/* Repeat the above pattern for the other user fields */}
      {/* ... */}
      <br />
      <label>
        Event Time:
        <input
          type="text"
          name="event_time"
          value={order.event_time}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      {/* Repeat the above pattern for the other fields */}
      {/* ... */}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateForm2;
