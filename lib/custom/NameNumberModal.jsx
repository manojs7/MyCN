import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

export const NameNumberModal = ({ handleClose, show,totalPrice }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email,phone)
    
    const data={
     Name: name,
     Phone: phone,
     Email: email,
      
    }
    axios.post('https://sheet.best/api/sheets/aafb8baf-f00a-4fc1-82e7-1db142605b8e',data)
    .then(res=>{
      console.log(res);
      setName('');
      setEmail('')
      setPhone('')
      handleClose()
    })
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
     
      <Modal.Header closeButton>
        
        {totalPrice<3000?<p className="p-5">You have to order a minimum of 3000 rupees</p>:<Modal.Title>Please fill up the form</Modal.Title>}
      </Modal.Header>
      <Modal.Body>
      {totalPrice<3000?"":<> 
      <h6>
        Total Price  : {totalPrice}
      </h6>
        {/* <form onSubmit={handleSubmit}>
          <input
            onBlur={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
          />
          <input
            onBlur={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Your Number"
          />
          <input
            onBlur={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
          />
          <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
        </form> */}
        </>
    }
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
        
      </Modal.Footer> */}
     
    </Modal>
  );
};
