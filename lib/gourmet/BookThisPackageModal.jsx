import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState,useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import {  faFish,faSeedling } from "@fortawesome/free-solid-svg-icons";

export default function BookThisPackageModal({handleClose,show,vegGuest,nonVegGuest}) {
const [vegGuestModal,setVegGuestModal]=useState(0)
const [nonVegGuestModal,setNonVegGuestModal]=useState(0)

useEffect(()=>{
  setVegGuestModal(vegGuest/2)
setNonVegGuestModal(nonVegGuest/2)
},[vegGuest,nonVegGuest])
  return (
    <Modal show={show} onHide={()=>handleClose('close')} animation={true} centered>
        <Modal.Header closeButton>
          <Modal.Title>Veg and Non-Veg Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>No. of Guests: Veg <FontAwesomeIcon icon={faSeedling} /> 
          <span onClick={()=>setVegGuestModal(vegGuestModal-1)}>-</span>
          {vegGuestModal}
          <span onClick={()=>setVegGuestModal(vegGuestModal+1)}>+</span>
          </h4>
          <h4>No. of Guests: Non-Veg <FontAwesomeIcon icon={faFish}/> 
          <span onClick={()=>setNonVegGuestModal(nonVegGuestModal-1)}>-</span>
          {nonVegGuestModal}
          <span onClick={()=>setNonVegGuestModal(nonVegGuestModal+1)}>+</span>
          </h4>
        
          <Button variant="primary" onClick={()=>handleClose('')}>
            Details
          </Button>

        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer> */}
      </Modal>
  )
}
