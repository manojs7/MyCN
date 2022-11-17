import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Ninja_Package_Data from "$lib/ninja-box/Ninja_Package_Data";
import Router from "next/router";
import BookThisPackageModal from "./BookThisPackageModal";

const Custom_Package = () => {
  const [show, setShow] = useState(false);
  const [vegNonVeg, setVegNonVeg] = useState('Veg');

  const [vegGuest, setVegGuest] = useState(10);
  const [nonVegGuest, setNonVegGuest] = useState(10);

  const handleClose = (value) => {
    if(value==='close'){
      setShow(false)
    }else{
      window.location.href = "/view-details"
      setShow(false)
    }
    
  
  };
  const handleShow = () => setShow(true);

//veg non-veg check
 const handleChange=(event)=>{
  if (event.target.checked) {
    setVegNonVeg('nonVeg')
  } else {
    setVegNonVeg('Veg')
    console.log(' Checkbox is NOT checked');
  }
 }
 const handleGuestAdd=(e)=>{
  vegNonVeg==='nonVeg'?setNonVegGuest(e.target.value):setVegGuest(e.target.value)
  console.log(vegGuest,nonVegGuest)
 }
  function handleClick(index) {
    const starters = Ninja_Package_Data[index].starters;
    const mains = Ninja_Package_Data[index].mains;
    const desserts = Ninja_Package_Data[index].desserts;
    const veg = Ninja_Package_Data[index].veg;
    const nonveg = Ninja_Package_Data[index].nonveg;
    Router.push(
      {
        pathname: "/custom",
        query: {
          data: JSON.stringify({
            starters: starters,
            mains: mains,
            desserts: desserts,
            veg: veg,
            nonVeg: nonveg,
          }),
        },
      },
      "/custom"
    );
  }

  return (
    <>
      <section className="custom-package my-3">
        <div className="container">
          <div className="section-title">
            <h2>
              Ninja<span>Box</span> Packages
            </h2>
          </div>
          <div className="row mb-md-5 mb-0 filter">
            <h5>Choose City</h5>
            <div className="col-md-6 mb-md-0 mb-3 d-flex justify-content-start align-items-center flex-md-row flex-column">
              <input
                type="radio"
                className="btn-check"
                name="city"
                id="city_mumbai"
                required
                value="mumbai"
              />
              <label
                id="city"
                className="btn-outline-warning d-flex justify-content-center p-0"
                htmlFor="city_mumbai"
              >
                <img
                  src="../cities/mumbai.png"
                  id="city_mumbai"
                  height="100px"
                  width="100px"
                  alt=""
                />
              </label>

              <input
                type="radio"
                className="btn-check"
                name="city"
                id="city-bangalore"
                required
                value="bangalore"
              />
              <label
                id="city"
                className="btn-outline-warning p-0"
                htmlFor="city-bangalore"
              >
                <img
                  src="../cities/bangalore.png"
                  id="city-bangalore"
                  height="100px"
                  width="100px"
                  alt=""
                />
              </label>

              <input
                type="radio"
                className="btn-check"
                name="city"
                id="city-delhi"
                required
                value="bangalore"
              />
              <label
                id="city"
                className="btn-outline-warning p-0"
                htmlFor="city-delhi"
              >
                <img
                  src="../cities/delhi.png"
                  id="city-delhi"
                  height="100px"
                  width="100px"
                  alt=""
                />
              </label>
            </div>
            <div className="col-md-6 mb-md-0 mb-5 d-flex justify-content-md-center align-items-center flex-md-row flex-column">
              <label htmlFor="guests" >No: Of Guests</label>
              <select onChange={handleGuestAdd} value={vegNonVeg==='Veg'?vegGuest:nonVegGuest} name="guests" id="guests">
                <option value="10">10</option>
                <option value="8">8</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>
          <div className="checkbox-container mb-5">
            <input onChange={handleChange} type="checkbox" value='veg' name="Veg" id="" />
          </div>
          <div className="ninja-package-description">
            {Ninja_Package_Data.map((item, index) => (
              <div className="ninja-package-item" key={index}>
                <div className="row mb-md-3 mb-0">
                  <div className="col-md-6 mb-md-0 mb-3 d-flex justify-content-center align-items-left flex-column">
                    <div className="package-name">{item.name}</div>
                    <div className="package-content">{item.content}</div>
                    <div className="package-price">
                      <span>
                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                      </span>
                      {item.price}
                    </div>
                  </div>
                  <div className="col-md-6 mb-md-0 mb-3 d-flex justify-content-center align-items-center">
                    <img
                      src={item.image}
                      alt=""
                      className="img-fluid hoverZoom"
                    />
                  </div>
                </div>
                <div className="row mb-md-4 mb-0">
                  <div className="col-md-4 mb-md-0 mb-3 d-flex justify-content-md-start justify-content-center"></div>
                  <div className="col-md-8 mb-md-0 mb-3 d-flex justify-content-evenly flex-md-row flex-column">
                    {/* <button className="bg-white mb-md-0 mb-2" onClick={() => window.location.href = '/view-details'}>
											View Details
										</button> */}
                    <button
                      className="bg-red my-2"
                      onClick={handleShow}
                      // onClick={() => (window.location.href = "/view-details")}
                    >
                      Book This Package
                    </button>
                    {/* modal */}
                   
                    <button
                      className="bg-white my-2"
                      onClick={() => handleClick(index)}
                    >
                      Customise Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="custom-package-lower">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-md-0 mb-3 d-flex justify-content-center align-items-center">
              <img
                src="../ninja-box/custom-package.png"
                alt=""
                className="img-fluid hoverZoom"
              />
            </div>
            <div className="col-md-6 mb-md-0 mb-3 d-flex justify-content-center align-items-center">
              <div className="custom-package-description">
                <span>Not Happy with the packages?</span>
                <h1>Create Your Own!</h1>
                <button
                  className="bg-red"
                  onClick={() => (window.location.href = "/custom")}
                >
                  Create Your Own Package
                </button>
              </div>
            </div>
          </div>
        </div>
        <BookThisPackageModal
                   handleClose={handleClose}
                   show={show}
                   vegGuest={vegGuest}
                   nonVegGuest={nonVegGuest}
                    />
      </section>
    </>
  );
};

export default Custom_Package;
