import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Ninja_Package_Data from "$lib/ninja-box/Ninja_Package_Data";
import Router from "next/router";
import BookThisPackageModal from "./BookThisPackageModal";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

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

  //footer bg
  const footerbg = {
    backgroundImage: 'url("/ninja-box/footerbg.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };

  //footer bg
  const desktopfooter = {
    backgroundImage: 'url("/ninja-box/desktopfooter.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: "588.228px"
  };

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
        <div className="container" id="NCPkg">
          <div className="section-title">
            <h2>
              Ninja<span>Classic</span> Packages
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
                      Chat & Place Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <div className="d-flex">
            <div className="packageNameSection text-center me-4">
            <img src="NCP1.png" width="280px"/>
              <div className="d-flex justify-content-evenly">
                {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
                <button onClick={() => window.open('http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Gold%20Veg%20NinjaClassic%20Package%20', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Chat & Place Order</button>
              </div>
            </div>
            <div className="packageNameSection text-center me-4">
            <img src="NCP2.png" width="280px"/>
              <div className="d-flex justify-content-evenly">
                {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
                <button onClick={() => window.open('http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Silver%20Veg%20NinjaClassic%20Package%20', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Chat & Place Order</button>
              </div>
            </div>
            <div className="packageNameSection text-center">
            <img src="NCP3.png" width="280px"/>
              <div className="d-flex justify-content-evenly">
                {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
                <button onClick={() => window.open('http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Basic%20Veg%20NinjaClassic%20Package%20', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Chat & Place Order</button>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="packageNameSection text-center me-4">
            <img src="NCP4.png" width="280px"/>
              <div className="d-flex justify-content-evenly">
                {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
                <button onClick={() => window.open('http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Gold%20Non-Veg%20NinjaClassic%20Package%20', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Chat & Place Order</button>
              </div>
            </div>
            <div className="packageNameSection text-center me-4">
            <img src="NCP5.png" width="280px"/>
              <div className="d-flex justify-content-evenly">
                {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
                <button onClick={() => window.open('http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Silver%20Non-Veg%20NinjaClassic%20Package%20', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Chat & Place Order</button>
              </div>
            </div>
            <div className="packageNameSection text-center">
            <img src="NCP6.png" width="280px"/>
              <div className="d-flex justify-content-evenly">
                {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
                <button onClick={() => window.open('http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Basic%20Non-Veg%20NinjaClassic%20Package%20', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Chat & Place Order</button>
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
        <div className="create-your-own-package-lgd pt-5 ps-5" backgroundColor="#FFC31A" style={desktopfooter}>
          <h3 style={{ color: "#FFF", marginLeft: "35px", marginTop: "60px", textShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", fontFamily: "'Montserrat', sansSerif", fontSize: "36.661px", fontStyle: "italic", fontWeight: "500" }}>Not Happy with the Packages?</h3>
          <h2 style={{
            color: "#2C3338",
            marginLeft: "35px",
            fontFamily: "Montserrat",
            fontSize: "64.915px",
            fontStyle: "normal",
            fontWeight: "800"
          }}>Create Your <span style={{ color: "#BE2D30" }}>Own</span></h2>
          <h6 style={{
            color: "#42484E",
            marginLeft: "35px",
            fontFamily: "Montserrat",
            fontSize: "34.62px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "125%"
          }}>Curate your own flavour of party<br />from variety of cuisines</h6>
          <div className="mt-5">
            <button onClick={() => window.open('/checkprice', '_blank')} style={{
              width: "417.733px",
              height: "67.764px", borderRadius: "35.168px",
              marginLeft: "35px",
              backgroundColor: "#BE2D30", border: "none",
              boxShadow: "3.360179901123047px 4.480240345001221px 11.200600624084473px 0px #42484E",
              color: "#FFF", fontFamily: "Montserrat",
              fontSize: "26.842px", fontWeight: "700"
            }}>Customize Your Package</button>
          </div>
          <div style={{textAlign: "end", marginTop: "-360px"}}>
          <Image src="/ninja-box/deskFooter.png" width="791px" height="501px" />
            </div>
        </div>
        {/* <div className="create-your-own-package-lgd">
          <div className="row">
            <div className="col-6">
              <img src="ninjaboxPackage.png" />
            </div>
            <div className="col-6 textSection-lgd">
              <p>Not Happy with the Packages?</p>
              <h2>Create Your <span>Own</span></h2>
              <h6>Curate your own flavour of party<br /><span>from variety of cuisines</span></h6>
              <button onClick={() => window.open('/checkprice', '_blank')} className="btn btn-danger">Create Your Own Package</button>
            </div>
          </div>
        </div> */}
      </secction> : ""}
      {isSmall ? <section>
        <div className="custom-package-smallD text-center mb-5">
          <h1>Ninja<span>Classic</span></h1>
          <h2>Packages</h2>
          <h6>Select Your Ninja<span>Classic</span> Package</h6>
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
          <div className="gourmetPackageNameSection text-center ms-2 me-3">
            <img src="NCP1.png"/>
            <div className="d-flex justify-content-evenly">
              {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
              <button onClick={() => window.open('http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Gold%20Veg%20NinjaClassic%20Package%20', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Chat & Place Order</button>
            </div>
          </div>
          <div className="gourmetPackageNameSection text-center me-3">
            <img src="NCP2.png"/>
            <div className="d-flex justify-content-evenly">
              {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
              <button onClick={() => window.open('http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Silver%20Veg%20NinjaClassic%20Package%20', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Chat & Place Order</button>
            </div>
          </div>
          <div className="gourmetPackageNameSection text-center">
            <img src="NCP3.png"/>
            <div className="d-flex justify-content-evenly">
              {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
              <button onClick={() => window.open('http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Basic%20Veg%20NinjaClassic%20Package%20', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Chat & Place Order</button>
            </div>
          </div>
        </div>
        <div className="packageContainer">
          <div className="gourmetPackageNameSection text-center ms-2 me-3">
            <img src="NCP4.png"/>
            <div className="d-flex justify-content-evenly">
              {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
              <button onClick={() => window.open('http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Gold%20Non-Veg%20NinjaClassic%20Package%20', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Chat & Place Order</button>
            </div>
          </div>
          <div className="gourmetPackageNameSection text-center me-3">
            <img src="NCP5.png"/>
            <div className="d-flex justify-content-evenly">
              {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
              <button onClick={() => window.open('http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Silver%20Non-Veg%20NinjaClassic%20Package%20', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Chat & Place Order</button>
            </div>
          </div>
          <div className="gourmetPackageNameSection text-center">
            <img src="NCP6.png"/>
            <div className="d-flex justify-content-evenly">
              {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
              <button onClick={() => window.open('http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20would%20like%20to%20book%20Basic%20Non-Veg%20NinjaClassic%20Package%20', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Chat & Place Order</button>
            </div>
          </div>
        </div>
      </section> : ""}
      {isSmall ? <section>
        <div className="create-your-own-package" style={footerbg}>
          {/* <div className="row container">
            <div className="col-4" id="leftside">
              <img id="left-ninja-logo" src="/ninja-box/header/Group 1065.png"></img>
            </div>
            <div className="col-8" id="rightside">
              <img id="right-ninja-logo" src="/CaterNinja logo/caterninja.webp"></img>
              <h2>Ninja<span>Box</span></h2>
              <p><span>Door Step</span> Delivery in a Convenient <span>Ready-to-Serve</span> box for <span>10-40 Guests</span></p>
            </div>
          </div> */}
          {/* <div className="btmSectnText">
            <p>Not Happy with the Packages?</p>
            <h2>Create Your <span>Own</span></h2>
            <h6>Curate your own flavour of party<br />from variety of cusines</h6>
            <div>
              <button onClick={() => window.open('/checkprice', '_blank')} className="btn btn-sm">Create Your Own Package</button>
            </div>
          </div> */}
          <div style={{marginLeft: "40px"}}>
            <h3 style={{ paddingTop: "40px", color: "#FFF", textShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", fontFamily: "'Montserrat', sansSerif", fontSize: "14.56px", fontStyle: "italic", fontWeight: "500" }}>Not Happy with the Packages?</h3>
            <h2 className="ms-0" style={{
              color: "#2C3338",
              marginTop: "-10px",
              fontFamily: "Montserrat",
              fontSize: "25.782px",
              fontStyle: "normal",
              fontWeight: "800"
            }}>Create Your <span style={{ color: "#BE2D30" }}>Own</span></h2>
            <h6 style={{
              color: "#42484E",
              fontFamily: "Montserrat",
              marginTop: "-5px",
              fontSize: "12.559px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "125%"
            }}>Curate your own flavour of party<br />from variety of cuisines</h6>
            <div>
              <button onClick={() => window.open('/checkprice', '_blank')} style={{
                width: "165.905px",
                marginTop: "5px",
                height: "26.913px", borderRadius: "13.967px",
                backgroundColor: "#BE2D30", border: "none",
                boxShadow: "1.3345141410827637px 1.7793523073196411px 4.448380947113037px 0px #42484E",
                color: "#FFF", fontFamily: "Montserrat",
                fontSize: "10.66px", fontWeight: "700"
              }}>Customize Your Package</button>
            </div>
            <div style={{marginLeft: "75px", marginTop: "-50px"}}>
              <Image src="/ninja-box/footerNinjamb.png" width="234.93px" height="211.45px" />
            </div>
          </div>
        </div>
        {/* <div className="create-your-own-package">
          <div className="row container">
            <div className="col-4" id="leftside">
              <img id="left-ninja-logo" src="Group 1069 (1).png" style={{width: "150px"}}></img>
            </div>
            <div className="col-8" id="rightside">
              <img id="right-ninja-logo" src="caterninja.png"></img>
              <h2>Ninja<span>Classic</span></h2>
              <p style={{fontSize: "8.5px"}}><span>Premium</span> Dining Experience for <span>50+ Guests</span> with finger Licking Yummy Food and <span>Crockery</span></p>
            </div>
          </div>
          <div className="btmSectnText">
            <p>Not Happy with the Packages?</p>
            <h2>Create Your <span>Own</span></h2>
            <h6>Curate your own flavour of party<br />from variety of cusines</h6>
            <div>
              <button onClick={() => window.open('/checkprice', '_blank')} className="btn btn-sm">Create Your Own Package</button>
            </div>
          </div>
        </div> */}
      </section> : ""}
    </>
  );
};

export default Custom_Package;
