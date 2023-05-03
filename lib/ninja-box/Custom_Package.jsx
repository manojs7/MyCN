import React, { useState, useEffect, useRef } from "react";
import styles from "/styles/Custom_Package.module.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
// import Ninja_Package_Data from "$lib/ninja-box/Ninja_Package_Data";
// import Router from "next/router";
// import BookThisPackageModal from "./BookThisPackageModal";
// import { Carousel } from "react-bootstrap";
import { useAppMenu } from "$lib/menuContext";
import "react-datepicker/dist/react-datepicker.css";

const Custom_Package = () => {
  const { menu, cuisines, allMenus, cities, occasions } = useAppMenu();
  const [city, setCity] = useState("");
  const [occasion, setOccasion] = useState("");
  const [itemSelected, setItemSelected] = useState()
  const [selectedDate, setSelectedDate] = useState()

  const [startDate, setStartDate] = useState(new Date());

  const handleCity = (city) => {
    setCity(city);
  }
  const handleOccasion = (occasion) => {
    setOccasion(occasion);
  };

  const navigateToOverview = ()=>{
    let dataSelected = {city: city, occasion: occasion, selectedDate: selectedDate, vcount: number, nvcount: number2, itemSelected: itemSelected}
    sessionStorage.setItem("dataSelected", JSON.stringify(dataSelected))
    window.open('/ninjaBoxViewPkg', '_blank')
  }

//PACKAGES
const packages = {
  veg: [
    { id: 1, name: 'Punjabi NinjaBox', price: '5,299', img: '/ninja-box/packages/NBP-1.png', details: "3 Starters + 4 Mains + 1 Dessert" },
    { id: 2, name: 'NinjaBox Indian', price: '4,499', img: '/ninja-box/packages/NBP2.png', details: "3 Starters + 4 Mains + 1 Dessert"  },
    { id: 3, name: "B'Day NinjaBox", price: '3,699', img: '/ninja-box/packages/NBP3.png', details: "1 Starters + 4 Mains + 1 Dessert"  },
  ],
  nonVeg: [
    { id: 4, name: 'Fusion NinjaBox', price: '5,999', img: '/ninja-box/packages/NBP4.png', details: "2 Starters + 3 Mains + 1 Dessert" },
    { id: 5, name: 'Asian NinjaBox', price: '4,199', img: '/ninja-box/packages/NBP5.png', details: "3 Starters + 4 Mains + 1 Dessert" },
    { id: 6, name: 'Cocktail Party', price: '4,199', img: '/ninja-box/packages/NBP6.png', details: "6 Starters + 1 Mains" }
  ],
};




  const images = [
    "nijjabox1.png",
    "nijjabox2.png",
    "nijjabox3.png",
    "nijjabox4.png",]
  // const [show, setShow] = useState(false);
  const [vegNonVeg, setVegNonVeg] = useState('Veg');

  // const [vegGuest, setVegGuest] = useState(10);
  // const [nonVegGuest, setNonVegGuest] = useState(10);

  const [isSmall, setIsSmall] = useState(false);

  // const [indexPhoto, setIndexPhoto] = useState(null);

  // const handlePhotoChange = (index) => {
  //   setPhoto(images[index]);
  //   setIndexPhoto(index);
  //   setIsChanged(true);
  // };

  function clearIndexPhoto() {
    setIndexPhoto(null)
  }

  // useEffect(() => {
  //   const myTimeout = setTimeout(clearIndexPhoto, 10000);
  //   // clearTimeout(myTimeout);
  // }, [indexPhoto])

  // const handleClose = (value) => {
  //   if (value === 'close') {
  //     setShow(false)
  //   } else {
  //     window.location.href = "/view-details"
  //     setShow(false)
  //   }


  // };
  // const handleShow = () => setShow(true);

  //veg non-veg check
  const handleChange = (event) => {
    if (event.target.checked) {
      setVegNonVeg('nonVeg')
    } else {
      setVegNonVeg('Veg')
      console.log(' Checkbox is NOT checked');
    }
  }
  // const handleGuestAdd = (e) => {
  //   vegNonVeg === 'nonVeg' ? setNonVegGuest(e.target.value) : setVegGuest(e.target.value)
  //   console.log(vegGuest, nonVegGuest)
  // }
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

  //SHOW/HIDE POPUP
  const [showDiv, setShowDiv] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowDiv(false);
    }
  };

  const handleButtonClick = (item) => {
    setItemSelected(item)
    if(!city){
      alert("please select the city ")
    }else if(!occasion){
      alert("please select the occasion")
    }else
    setShowDiv(!showDiv);
  };
  const closePopup = () => {
    setShowDiv(!showDiv);
  };

  //VEG - GUEST COUNT
  const [number, setNumber] = useState(10);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value !== "" && /^\d+$/.test(value)) {
      setNumber(parseInt(value));
    } else {
      setNumber(0);
    }
  };

  const handleInputClick = () => {
    setNumber("");
  };

  const handleIncreaseClick = () => {
    setNumber(number + 1);
  };

  const handleDecreaseClick = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const [number2, setNumber2] = useState(10);

  const handleInputChange2 = (event) => {
    const value2 = event.target.value;
    if (value2 !== "" && /^\d+$/.test(value2)) {
      setNumber2(parseInt(value2));
    } else {
      setNumber2(0);
    }
  };

  const handleInputClick2 = () => {
    setNumber2("");
  };

  const handleIncreaseClick2 = () => {
    setNumber2(number2 + 1);
  };

  const handleDecreaseClick2 = () => {
    if (number2 > 0) {
      setNumber2(number2 - 1);
    }
  };
  useEffect(() => {
    setIsSmall(window.innerWidth <= 939);
    window.addEventListener("resize", () =>
      setIsSmall(window.innerWidth <= 939)
    );
  }, []);

  return (
    <div>
      {showDiv && (<div className={styles.popupguestcount} ref={ref}>
        <h3>Additional <span>Info</span></h3>
        <div className={styles.dateContainer}>
          <div>
            <img src="miniNinjaLeft.png" width="24.03" height="43.92" />
          </div>
          <div>
            <h4>Date</h4>
            <div><input type="date" onChange={(event)=>setSelectedDate(event.target.value)}/></div>
          </div>
          <div>
            <img src="miniNinjaRight.png" width={24.03} height={43.92} />
          </div>
        </div>
        <div className={styles.guestCountCn}>
          <h3>Guest Count</h3>
          <div className={styles.guestcountCN}>
            <div>
              <p>Veg Guest</p>
              <div className={styles.numBtn}>
                <button onClick={handleDecreaseClick}>-</button>
                <input id={styles.vNum} type="number" value={number} onChange={handleInputChange} onClick={handleInputClick} />
                <button onClick={handleIncreaseClick}>+</button>
              </div>
            </div>
            <div>
              <p>NV Guest</p>
              <div className={styles.numBtn}>
                <button onClick={handleDecreaseClick2}>-</button>
                <input id={styles.nvNum} type="number" value={number2} onChange={handleInputChange2} onClick={handleInputClick2} />
                <button onClick={handleIncreaseClick2}>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cnfmBtn}>
          <button onClick={closePopup} id={styles.cancelBtn}>Go Back</button>
          <button onClick={() => navigateToOverview()} id={styles.viewBtn}>View Package</button>
        </div>
        {/* <div>
            <div className={styles.inputContainer}>
              <div>
                <h4 id={styles.vegText}>Vegetarian<br /><span>Guests</span></h4>
              </div>
              <div className={styles.btnConatiner}>
                <button onClick={handleDecreaseClick}>-</button>
                <input type="number" value={number} onChange={handleInputChange} onClick={handleInputClick} />
                <button onClick={handleIncreaseClick}>+</button>
              </div>
            </div>
            <div className={styles.inputContainer}>
              <div>
                <h4 id={styles.nonvegText}>Non-Vegetarian<br /><span>Guests</span></h4>
              </div>
              <div className={styles.btnConatiner}>
                <button onClick={handleDecreaseClick2}>-</button>
                <input type="number" value={number2} onChange={handleInputChange2} onClick={handleInputClick2} />
                <button onClick={handleIncreaseClick2}>+</button>
              </div>
            </div>
            <div className={styles.viewPkgBtn}>
              <button onClick={() => window.open('/ninjaBoxViewPkg', '_blank')}>View Package</button>
            </div>
          </div> */}
      </div>)}
      {!isSmall ? <section className="custom-package py-5">
        <div className="container" id="NBPkg">
          <div className="section-title">
            <h2>
              Ninja<span>Box</span> Packages
            </h2>
            <h6 className="text-center" style={{fontSize: "20px"}}>Select Your Ninja<span>Box</span> Package</h6>
            <div className="checkbox-container my-4 mx-auto">
              <input type="checkbox"  value='veg' name="Veg" id="" />
            </div>
            <div className="selectCityOcLg mt-5">
              <div>
                <p>City</p>
                <select
                  name="city"
                  aria-label="Default select example"
                  value={city}
                  onChange={(e) => handleCity(e.target.value)}
                  required
                >
                  <option value="" selected>
                    Select City
                  </option>
                  {cities.map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <p>Occasion</p>
                <select
                    name="occasion"
                    aria-label="Default select example"
                    value={occasion}
                    onChange={(e) => handleOccasion(e.target.value)}
                  >
                    <option value="" selected>
                      Select Occasion
                    </option>
                    {occasions.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
              </div>
            </div>
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
                      Customise & Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <div className="d-flex">
          {packages.veg.map((item, index) => (<div key={index} className="packageNameSection text-center mx-2">
              <h3>{item.name}</h3>
              <div className="packageImg">
                <img src={item.img} />
              </div>
              <div className="packagesName">
                <h4>{item.details}</h4>
                <h3>₹ {item.price}/-<span> Onwards</span></h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <button onClick={()=>handleButtonClick(item)} type="button" className="btn btn-sm px-2" id="selectBtn">Select Package</button>
                <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-4" id="customiseBtn">Customise</button>
              </div>
            </div>))}
          </div>
          <div className="d-flex">
            <div className="packageNameSection text-center me-4">
              <h3>Fusion NinjaBox</h3>
              <div className="packageImg">
                <img src="/ninja-box/packages/NBP4.png" />
              </div>
              <div className="packagesName">
                <h4>2 Starters + 3 Mains + 1 Dessert</h4>
                <h3>₹ 5,999/-<span> Onwards</span></h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
                <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise & Book Now</button>
              </div>

            </div>
            <div className="packageNameSection text-center me-4">
              <h3>Asian NinjaBox</h3>
              <div className="packageImg">
                <img src="/ninja-box/packages/NBP5.png" />
              </div>
              <div className="packagesName">
                <h4>3 Starters + 4 Mains + 1 Dessert</h4>
                <h3>₹ 4,199/-<span> Onwards</span></h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
                <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise & Book Now</button>
              </div>

            </div>
            <div className="packageNameSection text-center">
              <h3>Cocktail Party</h3>
              <div className="packageImg">
                <img src="/ninja-box/packages/NBP6.png" />
              </div>
              <div className="packagesName">
                <h4>6 Starters + 1 Mains</h4>
                <h3>₹ 4,199/-<span> Onwards</span></h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
                <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise & Book Now</button>
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
              <button onClick={() => window.open('/checkprice', '_blank')} className="btn btn-danger">Create Your Own Package</button>
            </div>
          </div>
        </div>
      </secction> : ""}
      {isSmall ?
        <section>
          <div className="custom-package-smallD text-center mb-5">
            <h1>Ninja<span>Box</span></h1>
            <h2>Packages</h2>
            <h6>Select Your Ninja<span>Box</span> Package</h6>
            <div className="checkbox-container my-4">
              <input type="checkbox" onChange={handleChange} value='veg' name="Veg" id="" />
            </div>
            <div className="container">
              <div className="dropdown-label row">
                <div className="col-6">
                  <p>City</p>
                  <div className="selectCityDropdown">
                    <select
                      className="form-select"
                      name="city"
                      aria-label="Default select example"
                      value={city}
                      onChange={(e) => handleCity(e.target.value)}
                      required
                    >
                      <option value="" selected>
                        Select City
                      </option>
                      {cities.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <p>Occasion</p>
                  <div className="selectOccasionDropdown">
                    <select
                      className="form-select"
                      name="occasion"
                      aria-label="Default select example"
                      value={occasion}
                      onChange={(e) => handleOccasion(e.target.value)}
                    >
                      <option value="" selected>
                        Select Occasion
                      </option>
                      {occasions.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> : ""}
      {isSmall ? <section>
        <div className="packageContainer">
        {packages.veg.map((item, index) => (<div key={index} className="packageNameSection text-center ms-2 me-4">
            <h3>{item.name}</h3>
            <div className="packageImg">
              <img src={item.img} />
            </div>
            <div className="packagesName">
              <h4>{item.details}</h4>
              <h3>₹ {item.price}/-<span> Onwards</span></h3>
              <p>(Min. Order 10 Guests)</p>
            </div>
            <div className="d-flex justify-content-evenly">
              <button onClick={()=>handleButtonClick(item)} type="button" className="btn btn-sm px-4" id="selectBtn">Select Package</button>
              <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-4" id="customiseBtn">Customise</button>
            </div>
            </div>))}
        </div>
        <div className="packageContainer">
          <div className="packageNameSection text-center ms-2 me-4">
            <h3>Fusion NinjaBox</h3>
            <div className="packageImg">
              <img src="/ninja-box/packages/NBP4.png" />
            </div>
            <div className="packagesName">
              <h4>2 Starters + 3 Mains + 1 Dessert</h4>
              <h3>₹ 5,999/-<span> Onwards</span></h3>
              <p>(Min. Order 10 Guests)</p>
            </div>
            <div className="d-flex justify-content-evenly">
              {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
              <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise & Book Now</button>
            </div>

          </div>
          <div className="packageNameSection text-center me-3">
            <h3>Asian NinjaBox</h3>
            <div className="packageImg">
              <img src="/ninja-box/packages/NBP5.png" />
            </div>
            <div className="packagesName">
              <h4>3 Starters + 4 Mains + 1 Dessert</h4>
              <h3>₹ 4,199/-<span> Onwards</span></h3>
              <p>(Min. Order 10 Guests)</p>
            </div>
            <div className="d-flex justify-content-evenly">
              {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
              <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise & Book Now</button>
            </div>

          </div>
          <div className="packageNameSection text-center">
            <h3>Cocktail Party</h3>
            <div className="packageImg">
              <img src="/ninja-box/packages/NBP6.png" />
            </div>
            <div className="packagesName">
              <h4>6 Starters + 1 Mains</h4>
              <h3>₹ 4,199/-<span> Onwards</span></h3>
              <p>(Min. Order 10 Guests)</p>
            </div>
            <div className="d-flex justify-content-evenly">
              {/* <button type="button" className="btn btn-sm" id="selectBtn">Select Package</button> */}
              <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise & Book Now</button>
            </div>
          </div>
        </div>
      </section> : ""}
      {isSmall ? <section>
        <div className="create-your-own-package">
          <div className="row container">
            <div className="col-4" id="leftside">
              <img id="left-ninja-logo" src="/ninja-box/header/Group 1065.png"></img>
            </div>
            <div className="col-8" id="rightside">
              <img id="right-ninja-logo" src="/CaterNinja logo/caterninja.webp"></img>
              <h2>Ninja<span>Box</span></h2>
              <p><span>Door Step</span> Delivery in a Convenient <span>Ready-to-Serve</span> box for <span>10-40 Guests</span></p>
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
        </div>
      </section> : ""}
    </div>
  );
};

export default Custom_Package;
