import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Ninja_Package_Data from "$lib/ninja-box/Ninja_Package_Data";
import Router from "next/router";
import BookThisPackageModal from "./BookThisPackageModal";
import { Carousel } from "react-bootstrap";

const Custom_Package = () => {
  const images = [
    "nijjabox1.png",
    "nijjabox2.png",
    "nijjabox3.png",
    "nijjabox4.png",]
  const [show, setShow] = useState(false);
  const [vegNonVeg, setVegNonVeg] = useState('Veg');

  const [vegGuest, setVegGuest] = useState(10);
  const [nonVegGuest, setNonVegGuest] = useState(10);

  const [isSmall, setIsSmall] = useState(false);

  const [indexPhoto, setIndexPhoto] = useState(null);

  // const handlePhotoChange = (index) => {
  //   setPhoto(images[index]);
  //   setIndexPhoto(index);
  //   setIsChanged(true);
  // };

  function clearIndexPhoto() {
    setIndexPhoto(null)
  }

  useEffect(() => {
    const myTimeout = setTimeout(clearIndexPhoto, 10000);
    // clearTimeout(myTimeout);
  }, [indexPhoto])

  const handleClose = (value) => {
    if (value === 'close') {
      setShow(false)
    } else {
      window.location.href = "/view-details"
      setShow(false)
    }


  };
  const handleShow = () => setShow(true);

  //veg non-veg check
  const handleChange = (event) => {
    if (event.target.checked) {
      setVegNonVeg('nonVeg')
    } else {
      setVegNonVeg('Veg')
      console.log(' Checkbox is NOT checked');
    }
  }
  const handleGuestAdd = (e) => {
    vegNonVeg === 'nonVeg' ? setNonVegGuest(e.target.value) : setVegGuest(e.target.value)
    console.log(vegGuest, nonVegGuest)
  }
  // function handleClick(index) {
  //   const starters = Ninja_Package_Data[index].starters;
  //   const mains = Ninja_Package_Data[index].mains;
  //   const desserts = Ninja_Package_Data[index].desserts;
  //   const veg = Ninja_Package_Data[index].veg;
  //   const nonveg = Ninja_Package_Data[index].nonveg;
  //   Router.push(
  //     {
  //       pathname: "/custom",
  //       query: {
  //         data: JSON.stringify({
  //           starters: starters,
  //           mains: mains,
  //           desserts: desserts,
  //           veg: veg,
  //           nonVeg: nonveg,
  //         }),
  //       },
  //     },
  //     "/custom"
  //   );
  // }

  useEffect(() => {
    setIsSmall(window.innerWidth <= 939);
    window.addEventListener("resize", () =>
      setIsSmall(window.innerWidth <= 939)
    );
  }, []);

  return (
    <>
      {!isSmall ? <section className="custom-package py-5">
        <div className="container" id="#NBuPkg">
          <div className="section-title">
            <h2>
              Snack<span>Box</span> Packages
            </h2>
          </div>
          {/* <div className="row mb-md-5 mb-0 filter">
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
              <select onChange={handleGuestAdd} value={vegNonVeg === 'Veg' ? vegGuest : nonVegGuest} name="guests" id="guests">
                <option value="10">10</option>
                <option value="8">15</option>
                <option value="6">20</option>
                <option value="6">25</option>
                <option value="6">30</option>
                <option value="6">35</option>
                <option value="6">40</option>
              </select>
            </div>
          </div> */}
          {/* <div className="checkbox-container mb-5">
            <input onChange={handleChange} type="checkbox" value='veg' name="Veg" id="" />
          </div> */}
          {/* <div className="ninja-package-description">
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
          {/*<button
                      className="bg-red my-2"
                      onClick={handleShow}
                    // onClick={() => (window.location.href = "/view-details")}
                    >
                      Book This Package
                    </button>
                    {/* modal */}

          {/*<button
                      className="bg-white my-2"
                      onClick={() => handleClick(index)}
                    >
                      Customise Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <div className="d-flex">
            <div className="packageNameSection text-center me-4">
              <h3>Premium SnackBox</h3>
              <div className="packageImg">
                <img src="SBP1.png" />
              </div>
              <div className="packagesName">
                <h4>4 Starters + 1 Desserts + 1 Beverage</h4>
                <h3>₹ 375/-<span> Onwards</span></h3>
                <p>(Min. Order 20 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
                <button onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Basic%20Veg%20NinjaClassic%20Package%20")} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise Package</button>
              </div>
            </div>
            <div className="packageNameSection text-center me-4">
              <h3>Executive SnackBox</h3>
              <div className="packageImg">
                <img src="SBP2.png" />
              </div>
              <div className="packagesName">
                <h4>4 Starters + 1 Desserts + 1 Beverage</h4>
                <h3>₹ 225/-<span> Onwards</span></h3>
                <p>(Min. Order 20 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
                <button onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Basic%20Veg%20NinjaClassic%20Package%20")} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise Package</button>
              </div>
            </div>
            <div className="packageNameSection text-center">
              <h3>Classic SnackBox</h3>
              <div className="packageImg">
                <img src="SBP3.png" />
              </div>
              <div className="packagesName">
                <h4>3 Starters + 1 Beverage</h4>
                <h3>₹ 450/-<span> Onwards</span></h3>
                <p>(Min. Order 20 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
                <button onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Basic%20Veg%20NinjaClassic%20Package%20")} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise Package</button>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="packageNameSection text-center me-4">
              <h3>Asian SnackBox</h3>
              <div className="packageImg">
              <img src="17.png" />
              </div>
              <div className="packagesName">
                <h4>4 Starters + 1 Desserts + 1 Beverage</h4>
                <h3>₹ 450/-<span> Onwards</span></h3>
                <p>(Min. Order 20 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
                <button onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Basic%20Veg%20NinjaClassic%20Package%20")} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise Package</button>
              </div>
            </div>
            <div className="packageNameSection text-center me-4">
              <h3>Indian SnackBox</h3>
              <div className="packageImg">
              <img src="17.png" />
              </div>
              <div className="packagesName">
                <h4>2 Starters + 1 Desserts + 1 Beverage</h4>
                <h3>₹ 275/-<span> Onwards</span></h3>
                <p>(Min. Order 20 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
                <button onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Basic%20Veg%20NinjaClassic%20Package%20")} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise Package</button>
              </div>
            </div>
            <div className="packageNameSection text-center">
              <h3>Basic SnackBox</h3>
              <div className="packageImg">
              <img src="17.png" />
              </div>
              <div className="packagesName">
                <h4>2 Starters + 1 Desserts + 1 Beverage</h4>
                <h3>₹ 125/-<span> Onwards</span></h3>
                <p>(Min. Order 20 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
                <button onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Basic%20Veg%20NinjaClassic%20Package%20")} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise Package</button>
              </div>
            </div>
          </div>
        </div>
      </section> : ""}
      {/* {!isSmall ? <section className="custom-package-lower">
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
      </section> : ""} */}
      {!isSmall ? <secction>
        <div className="create-your-own-package-lgd">
          <div className="row">
            <div className="col-6">
              <img src="ninjaboxPackage.png" />
            </div>
            <div className="col-6 textSection-lgd">
              <p>Not Happy with the Packages?</p>
              <h2>Create Your <span>Own</span></h2>
              <h6>Curate your own flavour of party<br /><span>from variety of cuisines</span></h6>
              <button onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20looking%20for%20Snack%20box%20options%20")} className="btn btn-danger">Create Your Own Package</button>
            </div>
          </div>
        </div>
      </secction> : ""}
      {isSmall ? <section>
        <div className="custom-package-smallD text-center mb-5">
          <h1>Snack<span>Box</span></h1>
          <h2>Packages</h2>
          <h6>Select Your Snack<span>Box</span> Package</h6>
          {/* <div className="checkbox-container my-4">
              <input onChange={handleChange} type="checkbox" value='veg' name="Veg" id="" />
            </div> */}
          {/*<div className="container">
              <div className="dropdown-label row">
                <div className="col-6">
                  <p>City</p>
                  <div>
                    <select name="cityName" id="cities">
                      <option value="mumbai">Mumbai</option>
                      <option value="bengaluru">Bengaluru</option>
                      <option value="delhi">Delhi</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <p>No: Of Guests</p>
                  <div>
                    <select name="guestNo" id="guestNo">
                      <option value="10">10</option>
                      <option value="10">15</option>
                      <option value="20">20</option>
                      <option value="30">25</option>
                      <option value="40">30</option>
                      <option value="40">35</option>
                      <option value="40">40</option>
                    </select>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </section> : ""}
      {isSmall ? <section>
        <div className="packageContainer">
          <div className="packageNameSection text-center ms-2 me-4">
          <h3>Premium SnackBox</h3>
              <div className="packageImg">
                <img src="SBP1.png" />
              </div>
              <div className="packagesName">
                <h4>4 Starters + 1 Desserts + 1 Beverage</h4>
                <h3>₹ 375/-<span> Onwards</span></h3>
                <p>(Min. Order 20 Guests)</p>
              </div>
            <div className="d-flex justify-content-evenly">
              {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
              <button onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Premium%20SnackBox%20")} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise Package</button>
            </div>
          </div>
          <div className="packageNameSection text-center me-3">
          <h3>Executive SnackBox</h3>
              <div className="packageImg">
                <img src="SBP2.png" />
              </div>
              <div className="packagesName">
                <h4>4 Starters + 1 Desserts + 1 Beverage</h4>
                <h3>₹ 225/-<span> Onwards</span></h3>
                <p>(Min. Order 20 Guests)</p>
              </div>
            <div className="d-flex justify-content-evenly">
              {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
              <button onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Executive%20SnackBox%20")} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise Package</button>
            </div>
          </div>
          <div className="packageNameSection text-center">
          <h3>Classic SnackBox</h3>
              <div className="packageImg">
                <img src="SBP3.png" />
              </div>
              <div className="packagesName">
                <h4>3 Starters + 1 Beverage</h4>
                <h3>₹ 450/-<span> Onwards</span></h3>
                <p>(Min. Order 20 Guests)</p>
              </div>
            <div className="d-flex justify-content-evenly">
              {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
              <button onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Classic%20SnackBox%20")} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise Package</button>
            </div>
          </div>
        </div>
        <div className="packageContainer">
          <div className="packageNameSection text-center ms-2 me-4">
          <h3>Asian SnackBox</h3>
              <div className="packageImg">
              <img src="17.png" />
              </div>
              <div className="packagesName">
                <h4>4 Starters + 1 Desserts + 1 Beverage</h4>
                <h3>₹ 450/-<span> Onwards</span></h3>
                <p>(Min. Order 20 Guests)</p>
              </div>
            <div className="d-flex justify-content-evenly">
              {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
              <button onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Asian%20SnackBox%20")} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise Package</button>
            </div>
          </div>
          <div className="packageNameSection text-center me-3">
          <h3>Indian SnackBox</h3>
              <div className="packageImg">
              <img src="17.png" />
              </div>
              <div className="packagesName">
                <h4>2 Starters + 1 Desserts + 1 Beverage</h4>
                <h3>₹ 275/-<span> Onwards</span></h3>
                <p>(Min. Order 20 Guests)</p>
              </div>
            <div className="d-flex justify-content-evenly">
              {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
              <button onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Indian%20SnackBox%20")} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise Package</button>
            </div>
          </div>
          <div className="packageNameSection text-center">
          <h3>Basic SnackBox</h3>
              <div className="packageImg">
              <img src="17.png" />
              </div>
              <div className="packagesName">
                <h4>2 Starters + 1 Desserts + 1 Beverage</h4>
                <h3>₹ 125/-<span> Onwards</span></h3>
                <p>(Min. Order 20 Guests)</p>
              </div>
            <div className="d-flex justify-content-evenly">
              {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
              <button onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Basic%20SnackBox%20")} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise Package</button>
            </div>
          </div>
        </div>
      </section> : ""}
      {isSmall ? <section>
        <div className="create-your-own-package">
          <div className="row container">
            <div className="col-4" id="leftside">
              <img id="left-ninja-logo" src="snackboxninja.png"></img>
            </div>
            <div className="col-8" id="rightside">
              <img id="right-ninja-logo" src="caterninja.png"></img>
              <h2>Snack<span>Box</span></h2>
              <p style={{fontSize: "11.4px"}}>Perfect Party Takeway Boxes For <span>All Occasions</span> and <span>Events</span></p>
            </div>
          </div>
          <div className="btmSectnText">
            <p>Not Happy with the Packages?</p>
            <h2>Create Your <span>Own</span></h2>
            <h6>Curate your own flavour of party<br />from variety of cusines</h6>
            <div>
              <button onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20looking%20for%20Snack%20box%20options%20")} className="btn btn-sm">Create Your Own Package</button>
            </div>
          </div>
        </div>
      </section> : ""}
    </>
  );
};

export default Custom_Package;
