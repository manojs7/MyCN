// components/OrderApprovalPopup.js
import React, { useState } from "react";
import Modal from "react-modal";
import styles4 from "/styles/ViewPackage.module.scss";

const OrderApprovalPopup = ({ orderDetails, onClose, onApprove }) => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(orderDetails.grandTotal);
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

      paymentdetails: {
        amount: orderDetails.status.net_amount_debit,
        payment_method: "PayU",
        timeOfPayment: orderDetails.createdAt,
        transaction_no: orderDetails.status.txnid,
        transaction_time: orderDetails.status.addedon,
        reference_no: orderDetails.status.bank_ref_num,
      },
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

    // Call the onApprove callback with the approved data
    onApprove(myApprovedData);
    onClose();
  };

  return (
    <Modal isOpen={true} onRequestClose={onClose}>
      <h2>Order Approval</h2>
      <div>
        <label>Amount:</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Payment Method:</label>
        <input
          type="text"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Approve</button>
      <button onClick={onClose}>Cancel</button>
      {/* {(
        <div className={styles4.popupCnfrmPkg}>
          <h4>Details</h4>
          <div className={styles4.scrldetails}>
            <div className={styles4.formDetails}>
              <div className="d-flex justify-content-between">
                <p>Name:</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="d-flex justify-content-between">
                <p>Phone:</p>
                <input
                  type="text"
                  value={mobileno}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>
              <div className="d-flex justify-content-between">
                <p>Email:</p>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="d-flex justify-content-between">
                <p>Address:</p>
                <input
                  type="text"
                  // value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
              </div>
              <div className="d-flex justify-content-between">
                <p>ZipCode:</p>
                <input
                  type="number"
                  maxLength={6}
                  // value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                ></input>
              </div>
              <p>{zipcodeError}</p>
            </div>
            <hr />
            <div className={styles4.selectedDetails}>
              <div className={styles4.data}>
                <div>
                  <h6>City:</h6>
                  <h6>Date:</h6>
                  <h6>Time:</h6>
                  <h6>Veg Guest:</h6>
                  <h6>Non-veg Guest:</h6>
                  <h6>Occassion:</h6>
                </div>
                <div>
                  <h6>{city}</h6>
                  <h6>{startDate}</h6>
                  <h6>{startTime}</h6>
                  <h6>{veg}</h6>
                  <h6>{nonVeg}</h6>
                  <h6>{occasion}</h6>
                </div>
              </div>
              <hr />
              <div className={styles4.selectedItems}>
                <div>
                  <h4>- Starters -</h4>
                  {starters.map((item, index) => (
                    <p className="col-10">{item.name} ({item.quantity} {item.Qtype})</p>
                  ))
                  }
                </div>
                <div>
                  <h4>- Mains -</h4>
                  {mains.map((item, index) => (
                    <p className="col-10">{item.name} ({item.quantity} {item.Qtype})</p>
                  ))
                  }
                  {breadRice.map((item, index) => (
                    <p className="col-10">{item.name} ({item.quantity} {item.Qtype})</p>
                  ))
                  }
                </div>
                <div>
                  <h4>- Desserts -</h4>
                  {desserts.map((item, index) => (
                    <p>{item.name} ({item.quantity} {item.Qtype})</p>
                  ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr />
            <div className={styles4.priceing}>
              <h6>GRAND TOTAL :</h6>
              <h6>₹ {grandTotal}</h6>
            </div>
            <div className={styles4.cnfmBtn}>
              <button onClick={closePopup} id={styles4.cancelBtn}>
                Go Back
              </button>
              <button onClick={payumoney} id={styles4.viewBtn}>
                Payment
              </button>
            </div>
          </div>
        </div>
      )} */}
    </Modal>
  );
};

export default OrderApprovalPopup;
