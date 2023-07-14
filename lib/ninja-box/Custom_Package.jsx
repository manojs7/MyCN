import React, { useState, useEffect, useRef } from "react";
import styles from "/styles/Custom_Package.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faCircleInfo, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
// import Ninja_Package_Data from "$lib/ninja-box/Ninja_Package_Data";
// import Router from "next/router";
// import BookThisPackageModal from "./BookThisPackageModal";
// import { Carousel } from "react-bootstrap";
import { useAppMenu } from "$lib/menuContext";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import Swal from "sweetalert2";
import Link from "next/link";

const Custom_Package = () => {
  const {
    menu,
    cuisines,
    allMenus,
    cities,
    occasions,
    PreSelectMenuNinjaBox,
    ZipCodes,
  } = useAppMenu();
  const [city, setCity] = useState("");
  const [occasion, setOccasion] = useState("");
  const [itemSelected, setItemSelected] = useState()
  const [selectedDate, setSelectedDate] = useState("")

  const [startDate, setStartDate] = useState(new Date());

  const [showUrgentLink, setShowUrgentLink] = useState(false);

  function hoverLink() {
    setShowUrgentLink(prevState => !prevState);
  }

  function hoverLeaveLink() {
    setShowUrgentLink(false);
  }


  //DATE LOGIC
  // const minDate = new Date();
  // minDate.setDate(minDate.getDate() + 2);
  // const minDateISO = minDate.toISOString().split('T')[0];

  //select date logic
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const generateDateOptions = () => {
    const options = [];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const twoDaysFromNow = new Date();
    twoDaysFromNow.setDate(currentDate.getDate() + 2);

    for (
      let date = twoDaysFromNow;
      date.getFullYear() === currentYear;
      date.setDate(date.getDate() + 1)
    ) {
      const optionValue = date.toISOString().slice(0, 10);
      const optionLabel = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      options.push(
        <option key={optionValue} value={optionValue}>
          {optionLabel}
        </option>
      );
    }

    return options;
  };

  const handleCity = (city) => {
    setCity(city);
  }
  const handleOccasion = (occasion) => {
    setOccasion(occasion);
  };


  const navigateToOverview = () => {
    const totalCount = number + number2;

    if (!selectedDate) {
      Swal.fire({
        text: "please select date",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
    else if (!startTime) {
      Swal.fire({
        text: "please select Time",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
    else if (totalCount < 10) {
      Swal.fire({
        text: "Guest count should be at least 10",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else {
      let mealType;
      if (showNonveg) {
        mealType = 'nonVeg'
      }
      else {
        mealType = 'veg'
      }
      let dataSelected = { city: city, occasion: occasion, selectedDate: selectedDate, vcount: number, nvcount: number2, itemSelected: itemSelected, mealType: mealType, startTime: startTime }
      sessionStorage.setItem("dataSelected", JSON.stringify(dataSelected))
      window.open('/customiseNinjaBox', '_blank')
    }
  }

  //PACKAGES

  const packages=PreSelectMenuNinjaBox;


  //price filter
  //200-350, 350-500, 500+

  const [priceFilter, setPriceFilter] = useState('all');

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const filteredItems = packages.veg.filter((item) => {
    if (priceFilter === 'all') {
      return true;
    } else if (priceFilter === '2000-3500') {
      return item.price >= 2000 && item.price <= 3500;
    } else if (priceFilter === '3501-5000') {
      return item.price >= 3501 && item.price <= 5000;
    } else {
      return item.price >= 5001;
    }
  })

  const nonVegFilterdeItems = packages.nonVeg.filter((item) => {
    if (priceFilter === 'all') {
      return true;
    } else if (priceFilter === '2000-4000') {
      return item.price >= 2000 && item.price <= 4000;
    } else if (priceFilter === '4001-5000') {
      return item.price >= 4001 && item.price <= 5000;
    } else if (priceFilter === '5001-6000') {
      return item.price >= 5001 && item.price <= 6000;
    } else {
      return item.price >= 6001;
    }
  })


  //Separate Row for veg packages
  const firstRow = filteredItems.slice(0, 3);
  const secondRow = filteredItems.slice(3, 6);
  const thirdRow = filteredItems.slice(6);
  //Separate Row for Non-veg packages
  const nvfirstRow = nonVegFilterdeItems.slice(0, 3);
  const nvsecondRow = nonVegFilterdeItems.slice(3, 6);
  const nvthirdRow = nonVegFilterdeItems.slice(6);


  //SHOW NON-VEG PACKAGES
  const [showNonveg, setShowNonVeg] = useState(false);
  const [startTime, setStartTime] = useState("")

  const checkForNonveg = () => {
    setShowNonVeg(!showNonveg);
    if (showNonveg) {
      setNumber2(0)
    } else {
      setNumber(5)
      setNumber2(10)
    }
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

  //SHOW/HIDE POPUP
  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = (item) => {
    setItemSelected(item)
    if (!city) {
      document.getElementById("cityId").focus();
      Swal.fire({
        text: "Please select your City",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else if (!occasion) {
      document.getElementById("occasionId").focus();
      Swal.fire({
        text: "Please select your occasion",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else
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

  const [number2, setNumber2] = useState(0);

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
      {showDiv && (<div className={styles.popupguestcount}>
        <h3>Additional <span>Info</span></h3>
        <div className={styles.dateContainer}>
          <div>
            <img src="miniNinjaLeft.png" width="24.03" height="43.92" />
          </div>
          <div>
            <h4>Date <span id={styles.urgentL} onMouseEnter={hoverLink}
              onClick={hoverLink}><FontAwesomeIcon icon={faCircleInfo} size="sm" style={{ color: "#1245ba" }} /></span></h4>
            {/* <div><input type="date" onChange={(event) => setSelectedDate(event.target.value)}
              value={selectedDate}
              min={minDateISO} /></div> */}
            <div className={styles.dateOptions}>
              <select id="dateSelect" value={selectedDate} onChange={handleDateChange}>
                <option value="">Select a date</option>
                {generateDateOptions()}
              </select>
            </div>
          </div>
          {showUrgentLink && (<div id={styles.urgentLink}>
            <a href="https://api.whatsapp.com/send?phone=917738096313&text=Hey!%20Need%20help%20for%20urgent%20booking%20from%20NinjaBox%20Packages" target="_blank">Click here for urgent order!</a>
          </div>)}
          <div>
            <img src="miniNinjaRight.png" width={24.03} height={43.92} />
          </div>
        </div>
        <div className={styles.deliveryTimeSecn}>
          <h4>Delivery Time</h4>
          <select className="mx-auto" onChange={(e) => setStartTime(e.target.value)}>
            <option value="">Select Time</option>
            <option value="11:00 am">11:00 am</option>
            <option value="11:30 am">11:30 am</option>
            <option value="12:00 pm">12:00 pm</option>
            <option value="12:30 pm">12:30 pm</option>
            <option value="1:00 pm">1:00 pm</option>
            <option value="1:30 pm">1:30 pm</option>
            <option value="2:00 pm">2:00 pm</option>
            <option value="2:00 pm">2:00 pm</option>
            <option value="2:30 pm">2:30 pm</option>
            <option value="3:00 pm">3:00 pm</option>
            <option value="5:00 pm">5:00 pm</option>
            <option value="5:30 pm">5:30 pm</option>
            <option value="6:00 pm">6:00 pm</option>
            <option value="6:30 pm">6:30 pm</option>
            <option value="7:00 pm">7:00 pm</option>
            <option value="7:30 pm">7:30 pm</option>
            <option value="8:00 pm">8:00 pm</option>
            <option value="8:30 pm">8:30 pm</option>
            <option value="9:00 pm">9:30 pm</option>
          </select>
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
            {showNonveg && <div>
              <p>NV Guest</p>
              <div className={styles.numBtn}>
                <button onClick={handleDecreaseClick2}>-</button>
                <input id={styles.nvNum} type="number" value={number2} onChange={handleInputChange2} onClick={handleInputClick2} />
                <button onClick={handleIncreaseClick2}>+</button>
              </div>
            </div>}
          </div>
        </div>
        <div className={styles.cnfmBtn}>
          <button onClick={closePopup} id={styles.cancelBtn}><span><FontAwesomeIcon icon={faArrowLeftLong} /></span> Go Back</button>
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
            <h6 className="text-center" style={{ fontSize: "20px" }}>Select Your Ninja<span>Box</span> Package</h6>
            {/* <div className="checkbox-container my-4 mx-auto">
              <input type="checkbox" checked={showNonveg} onChange={checkForNonveg} />
            </div> */}
            <div className="selectCityOcLg mt-5">
              <div>
                <p>City</p>
                <select
                  id="cityId"
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
                  id="occasionId"
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
          <h4 style={{ fontSize: "20px", fontWeight: "600", color: "#BE2D30", textAlign: "center" }}>Sort By</h4>
          <hr />
          <div className="d-flex" style={{ justifyContent: "space-between", marginInline: "100px" }}>
            <div className="d-flex">
              <h3 style={{ fontWeight: "600", fontFamily: "'Montserrat', sans-serif", marginRight: "10px", fontSize: "20px", marginTop: "5px" }}>Veg Only</h3>
              <label className={styles.toggle}>
                <input type="checkbox" checked={!showNonveg} onChange={checkForNonveg} />
                <span className={styles.slider}></span>
              </label>
            </div>
            <div>
              <select value={priceFilter} onChange={handlePriceFilterChange} aria-label="Default select example" style={{ fontFamily: "'montserrat', sansSerif", fontWeight: "600", width: "170px" }}>
                <option value="all">By Price</option>
                <option value="2000-3500">200 - 350</option>
                <option value="3501-5000">350 - 500</option>
                <option value="5001+">500 +</option>
              </select>
            </div>
          </div>
          {/* <div>
            <label className={styles.toggle}>
              <input type="checkbox" checked={showNonveg} onChange={checkForNonveg} />
              <span className={styles.slider}></span>
              <span className={styles.labels} data-on="Veg Only" data-off="OFF"></span>
            </label>
          </div> */}
          {!showNonveg && <div style={{ marginInline: "70px" }}>
            <div className="d-flex mt-3">
              {firstRow.map((item, index) => (<div key={index} className="packageNameSection text-center mx-2">
                <h3><span><Image src="/diy images/vegLogo.png" width="15px" height="15px" /></span> {item.name}</h3>
                <div className="packageImg">
                  <img src={item.img} />
                </div>
                <div className="packagesName">
                  <h4>{item.details}</h4>
                  <h3>₹ {(item.price).toLocaleString("en-US")}/-<span> Onwards</span></h3>
                  <p>(Min. Order 10 Guests)</p>
                </div>
                <div className="d-flex justify-content-evenly">
                  <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                  {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-4" id="customiseBtn">Customise</button> */}
                </div>
              </div>))}
            </div>
            <div className="d-flex">
              {secondRow.map((item, index) => (<div key={index} className="packageNameSection text-center mx-2">
                <h3><span><Image src="/diy images/vegLogo.png" width="15px" height="15px" /></span> {item.name}</h3>
                <div className="packageImg">
                  <img src={item.img} />
                </div>
                <div className="packagesName">
                  <h4>{item.details}</h4>
                  <h3>₹ {item.price.toLocaleString("en-US")}/-<span> Onwards</span></h3>
                  <p>(Min. Order 10 Guests)</p>
                </div>
                <div className="d-flex justify-content-evenly">
                  <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                  {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-4" id="customiseBtn">Customise</button> */}
                </div>
              </div>))}
            </div>
            <div className="d-flex" style={{ marginInline: "90px" }}>
              {thirdRow.map((item, index) => (<div key={index} className="packageNameSection text-center mx-2">
                <h3><span><Image src="/diy images/vegLogo.png" width="15px" height="15px" /></span> {item.name}</h3>
                <div className="packageImg">
                  <img src={item.img} />
                </div>
                <div className="packagesName">
                  <h4>{item.details}</h4>
                  <h3>₹ {item.price}/-<span> Onwards</span></h3>
                  <p>(Min. Order 10 Guests)</p>
                </div>
                <div className="d-flex justify-content-evenly">
                  <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                  {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-4" id="customiseBtn">Customise</button> */}
                </div>
              </div>))}
            </div>
          </div>}
          {showNonveg && <div style={{ marginInline: "70px" }}>
            {/* <div className="d-flex ms-3 mb-2 mt-2">
              <div>
                <h3 style={{ color: "#BE2D30", fontWeight: "600", fontFamily: "'Montserrat', sans-serif" }}>Non-Veg Packages</h3>
              </div>
              <div className="mt-2 ms-2">
                <Image src="/diy images/Group 962.png" width="20px" height="20px" />
              </div>
            </div> */}
            <div className="d-flex mt-3">
              {nvfirstRow.map((item, index) => (<div key={index} className="packageNameSection text-center mx-2">
                <h3><span><Image src="/diy images/Group 962.png" width="15px" height="15px" /></span> {item.name}</h3>
                <div className="packageImg">
                  <img src={item.img} />
                </div>
                <div className="packagesName">
                  <h4>{item.details}</h4>
                  <h3>₹ {item.price}/-<span> Onwards</span></h3>
                  <p>(Approx Price for 15 Guests)</p>
                </div>
                <div className="d-flex justify-content-evenly">
                  <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                  {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-4" id="customiseBtn">Customise</button> */}
                </div>
              </div>))}
            </div>
            <div className="d-flex">
              {nvsecondRow.map((item, index) => (<div key={index} className="packageNameSection text-center mx-2">
                <h3><span><Image src="/diy images/Group 962.png" width="15px" height="15px" /></span> {item.name}</h3>
                <div className="packageImg">
                  <img src={item.img} />
                </div>
                <div className="packagesName">
                  <h4>{item.details}</h4>
                  <h3>₹ {item.price}/-<span> Onwards</span></h3>
                  <p>(Approx Price for 15 Guests)</p>
                </div>
                <div className="d-flex justify-content-evenly">
                  <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                  {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-4" id="customiseBtn">Customise</button> */}
                </div>
              </div>))}
            </div>
            <div className="d-flex" style={{ marginInline: "90px" }}>
              {nvthirdRow.map((item, index) => (<div key={index} className="packageNameSection text-center mx-2">
                <h3><span><Image src="/diy images/Group 962.png" width="15px" height="15px" /></span> {item.name}</h3>
                <div className="packageImg">
                  <img src={item.img} />
                </div>
                <div className="packagesName">
                  <h4>{item.details}</h4>
                  <h3>₹ {item.price}/-<span> Onwards</span></h3>
                  <p>(Min. Order 10 Guests)</p>
                </div>
                <div className="d-flex justify-content-evenly">
                  <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                  {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-4" id="customiseBtn">Customise</button> */}
                </div>
              </div>))}
            </div>
          </div>}
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
          <div className="custom-package-smallD text-center mb-3">
            <h1>Ninja<span>Box</span></h1>
            <h2>Packages</h2>
            <h6>Select Your Ninja<span>Box</span> Package</h6>
            {/* <div className="checkbox-container my-4">
              <input type="checkbox" checked={showNonveg} onChange={checkForNonveg} />
            </div> */}
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
      {isSmall ?
        <div className="mb-3">
          <h4 style={{ textAlign: "center", fontWeight: "bolder", fontFamily: "'Montserrat', sans-serif", fontSize: "20px", color: "#BE2D30" }}>Sort By</h4>
          <div className="d-flex justify-content-around"> <div className="d-flex justify-content-center">
            <p style={{ fontWeight: "600", fontFamily: "'Montserrat', sans-serif" }}>Veg Only</p>
            <label className={styles.toggle}>
              <input type="checkbox" checked={!showNonveg} onChange={checkForNonveg} />
              <span className={styles.slider}></span>
            </label>
          </div>
            <div>
              <select className="form-select" value={priceFilter} onChange={handlePriceFilterChange} aria-label="Default select example" style={{ fontFamily: "'montserrat', sansSerif", width: "150px", border: "1px solid black", fontWeight: "500", fontSize: "12px" }}>
                <option value="all">By Price</option>
                <option value="2000-3500">200 - 350</option>
                <option value="3501-5000">350 - 500</option>
                <option value="5001+">500 +</option>
              </select>
            </div>
          </div>
        </div> : ""}
      {!showNonveg && <div>
        {isSmall ? <section>
          <div className="packageContainer">
            {firstRow.map((item, index) => (<div key={index} className="packageNameSection text-center ms-2 me-4">
              <h3><span><Image src="/diy images/vegLogo.png" width="15px" height="15px" /></span> {item.name}</h3>
              <div className="packageImg">
                <img src={item.img} />
              </div>
              <div className="packagesName">
                <h4>{item.details}</h4>
                <h3>₹ {item.price}/-<span> Onwards</span></h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-4" id="customiseBtn">Customise</button> */}
              </div>
            </div>))}
          </div>
          <div className="packageContainer">
            {secondRow.map((item, index) => (<div key={index} className="packageNameSection text-center ms-2 me-4">
              <h3><span><Image src="/diy images/vegLogo.png" width="15px" height="15px" /></span> {item.name}</h3>
              <div className="packageImg">
                <img src={item.img} />
              </div>
              <div className="packagesName">
                <h4>{item.details}</h4>
                <h3>₹ {item.price}/-<span> Onwards</span></h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-4" id="customiseBtn">Customise</button> */}
              </div>
            </div>))}
          </div>
          <div className="packageContainer">
            {thirdRow.map((item, index) => (<div key={index} className="packageNameSection text-center ms-2 me-4">
              <h3><span><Image src="/diy images/vegLogo.png" width="15px" height="15px" /></span> {item.name}</h3>
              <div className="packageImg">
                <img src={item.img} />
              </div>
              <div className="packagesName">
                <h4>{item.details}</h4>
                <h3>₹ {item.price}/-<span> Onwards</span></h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-4" id="customiseBtn">Customise</button> */}
              </div>
            </div>))}
          </div>
        </section> : ""}
      </div>}
      {showNonveg && <div>
        {isSmall ? <section>
          <div className="packageContainer">
            {nvfirstRow.map((item, index) => (<div key={index} className="packageNameSection text-center ms-2 me-4">
              <h3><span><Image src="/diy images/Group 962.png" width="15px" height="15px" /></span> {item.name}</h3>
              <div className="packageImg">
                <img src={item.img} />
              </div>
              <div className="packagesName">
                <h4>{item.details}</h4>
                <h3>₹ {item.price}/-<span> Onwards</span></h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-4" id="customiseBtn">Customise</button> */}
              </div>
            </div>))}
          </div>
          <div className="packageContainer">
            {nvsecondRow.map((item, index) => (<div key={index} className="packageNameSection text-center ms-2 me-4">
              <h3><span><Image src="/diy images/Group 962.png" width="15px" height="15px" /></span> {item.name}</h3>
              <div className="packageImg">
                <img src={item.img} />
              </div>
              <div className="packagesName">
                <h4>{item.details}</h4>
                <h3>₹ {item.price}/-<span> Onwards</span></h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-4" id="customiseBtn">Customise</button> */}
              </div>
            </div>))}
          </div>
          <div className="packageContainer">
            {nvthirdRow.map((item, index) => (<div key={index} className="packageNameSection text-center ms-2 me-4">
              <h3><span><Image src="/diy images/Group 962.png" width="15px" height="15px" /></span> {item.name}</h3>
              <div className="packageImg">
                <img src={item.img} />
              </div>
              <div className="packagesName">
                <h4>{item.details}</h4>
                <h3>₹ {item.price}/-<span> Onwards</span></h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-4" id="customiseBtn">Customise</button> */}
              </div>
            </div>))}
          </div>
        </section> : ""}
      </div>}
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
