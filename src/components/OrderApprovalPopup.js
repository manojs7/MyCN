// components/OrderApprovalPopup.js
import React, { useState } from "react";
import Modal from "react-modal";
import styles4 from "/styles/ViewPackage.module.scss";
import { useSession } from "next-auth/react";

const OrderApprovalPopup = ({ orderDetails, onClose, onApprove }) => {
  const { data: session } = useSession();

  const role = session?.user?.role;
  
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(orderDetails.grandTotal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

    const [formData, setFormData] = useState({
      ops_ninja:"",
  ops_ninjaEmail:"",
  dispatchTimeFromKitchen:"",
  kitchenName:"",
  kitchenEmailId:"",
  delivery:"",
    })
  
  const handleSubmit = () => {

    // order details
    const myApprovedData = {
      orderid: "Test01",
      user: {
        name: orderDetails.name,
        email: orderDetails.email,
        mobile: orderDetails.phone,
        city: orderDetails.city,
      },
      event_time: orderDetails.time,
      event_date: orderDetails.date,
      instructions: "chef instructions",
      menu_selected: {
        appetizer: orderDetails.appetizer,
        mainCourse: orderDetails.mainCourse,
        dessert: orderDetails.dessert,
        breadRice: orderDetails.breadRice,
      },
      guest_count: orderDetails.people,
      veg_c: orderDetails.veg_c,
      nonveg_c: orderDetails.nonveg_c,
      address: orderDetails.address,
      pincode: orderDetails.zipcode,
      location_url: orderDetails.url,
      grandTotal:orderDetails.grandTotal,
      kitchendetails:{
        ops_ninja: formData.ops_ninja?formData.ops_ninja:"",
        ops_ninjaEmail: formData.ops_ninjaEmail?formData.ops_ninjaEmail:"",
        dispatchTimeFromKitchen: formData.dispatchTimeFromKitchen?formData.dispatchTimeFromKitchen:"",
        kitchenName: formData.kitchenName?formData.kitchenName:"",
        kitchenEmailId: formData.kitchenEmailId?formData.kitchenEmailId:"",
        delivery: formData.delivery?formData.delivery:"",
      },
      // paymentdetails: {
      //   amount: orderDetails.status.net_amount_debit,
      //   timeOfPayment: orderDetails.createdAt,
      //   transaction_no: orderDetails.status.txnid,
      //   transaction_time: orderDetails.status.addedon,
      //   reference_no: orderDetails.status.bank_ref_num,
      // },
      statusdetails: {
        current_status: "Sales Approved",
        overall: "Approved",
      },
    };

    const approvedData = {
      ...orderDetails,
      paymentdetails: {
        amount,
        payment_method: paymentMethod,
        timeOfPayment: new Date(),
      },
      statusdetails: {
        current_status: "Approved",
        overall: "Approved",
      },
    };

    console.log("final_data", myApprovedData)

    // Call the onApprove callback with the approved data
    onApprove(myApprovedData);
    onClose();
  };

  return (
    <Modal isOpen={true} onRequestClose={onClose}
    style={{
      overlay: {
        position: 'fixed',
        zIndex: 1020,
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(255, 255, 255, 0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      content: {
        background: 'white',
        width: '45rem',
        maxWidth: 'calc(100vw - 2rem)',
        maxHeight: 'calc(100vh - 2rem)',
        overflowY: 'auto',
        position: 'relative',
        border: '1px solid #ccc',
        borderRadius: '0.3rem',
      }}}>
      <h2>Order Approval</h2>
      <div className="container">
        <label>
          Ninja:
          <input
          
            type="text"
            name="ninja"
            value={orderDetails.ninja}
            
          />
        </label>

        <label>
          Order ID:
          <input
          
            type="text"
            name="orderid"
            value={orderDetails.orderid}
            
          />
        </label>

        <label>
          Name:
          <input
          
            type="text"
            name="name"
            value={orderDetails.name}
            
          />
        </label>

        <label>
          Email:
          <input
          
            type="email"
            name="email"
            value={orderDetails.email}
            
          />
        </label>

        <label>
          Mobile:
          <input
          
            type="tel"
            name="mobile"
            value={orderDetails.mobile}
            
          />
        </label>

        <label>
          City:
          <input
          
            type="text"
            name="city"
            value={orderDetails.city}
            
          />
        </label>

        <label>
          Event Time:
          <input
          
            type="time"
            name="event_time"
            value={orderDetails.event_time}
            
          />
        </label>

        <label>
          Event Date:
          <input
          
            type="date"
            name="event_date"
            value={orderDetails.event_date}
            
          />
        </label>

        <label>
          Instructions:
          <textarea
            name="instructions"
            value={orderDetails.instructions}
            
          ></textarea>
        </label>

        <label>
          Menu Selected:
          <input
          
            type="text"
            name="menu_selected"
            value={orderDetails.menu_selected}
            
          />
        </label>

        <label>
          Guest Count:
          <input
          
            type="number"
            name="guest_count"
            value={orderDetails.guest_count}
            
          />
        </label>

        <label>
          Vegetarian Count:
          <input
          
            type="number"
            name="veg_c"
            value={orderDetails.veg_c}
            
          />
        </label>

        <label>
          Non-Vegetarian Count:
          <input
          
            type="number"
            name="nonveg_c"
            value={orderDetails.nonveg_c}
            
          />
        </label>

        <label>
          Address:
          <textarea
            name="address"
            value={orderDetails.address}
            
          ></textarea>
        </label>

        <label>
          Pincode:
          <input
          
            type="text"
            name="pincode"
            value={orderDetails.pincode}
            
          />
        </label>

        <label>
          Grand Total:
          <input
          
            type="number"
            name="grandTotal"
            value={orderDetails.grandTotal}
            
          />
        </label>

        <label>
          Location URL:
          <input
          
            type="text"
            name="location_url"
            value={orderDetails.location_url}
            
          />
        </label>

        <label>
          Amount:
          <input
          
            type="number"
            name="amount"
            value={orderDetails.amount}
            
          />
        </label>

        <label>
          Payment Method:
          <input
          
            type="text"
            name="payment_method"
            value={orderDetails.payment_method}
            
          />
        </label>

        <label>
          Time of Payment:
          <input
          
            type="time"
            name="timeOfPayment"
            value={orderDetails.timeOfPayment}
            
          />
        </label>

        <label>
          Transaction No:
          <input
          
            type="text"
            name="transaction_no"
            value={orderDetails.transaction_no}
            
          />
        </label>

        <label>
          Transaction Time:
          <input
          
            type="time"
            name="transaction_time"
            value={orderDetails.transaction_time}
            
          />
        </label>

        <label>
          Reference No:
          <input
          
            type="text"
            name="reference_no"
            value={orderDetails.reference_no}
            
          />
        </label>
        </div>
       

      {/* OPS Section */}

      {role === 'ops'?
      <form>

      <label>
        Ops Ninja:
        <input
          type="text"
          name="ops_ninja"
          value={formData.ops_ninja}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Ops Ninja Email:
        <input
          type="email"
          name="ops_ninjaEmail"
          value={formData.ops_ninjaEmail}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Dispatch Time from Kitchen:
        <input
          type="text"
          name="dispatchTimeFromKitchen"
          value={formData.dispatchTimeFromKitchen}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Kitchen Name:
        <input
          type="text"
          name="kitchenName"
          value={formData.kitchenName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Kitchen Email ID:
        <input
          type="email"
          name="kitchenEmailId"
          value={formData.kitchenEmailId}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Delivery:
        <input
          type="text"
          name="delivery"
          value={formData.delivery}
          onChange={handleChange}
        />
      </label>
      <br />
      </form>
      :null
      }

      {/* <button type="submit">Submit</button> */}

      <button onClick={handleSubmit}>Approve</button>
      <button onClick={onClose}>Cancel</button>

      
    </Modal>
  );
};

export default OrderApprovalPopup;
