import React, { useState, useEffect } from "react";
import Ninja_Package_Data from "$lib/ninja-box/Ninja_Package_Data";
import Router from "next/router";
import BookThisPackageModal from "./BookThisPackageModal";
import { Carousel } from "react-bootstrap";
import { useAppMenu } from "$lib/menuContext";
import styles from "/styles/Custom_Package.module.scss";
import Image from "next/image";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faCircleInfo, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

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
  const [show, setShow] = useState(false);
  const [vegNonVeg, setVegNonVeg] = useState('Veg');

  const [vegGuest, setVegGuest] = useState(10);
  const [nonVegGuest, setNonVegGuest] = useState(10);

  const [isSmall, setIsSmall] = useState(false);

  const [indexPhoto, setIndexPhoto] = useState(null);

  //const { menu, cuisines, allMenus, cities, occasions } = useAppMenu();
  const [city, setCity] = useState("");
  const [occasion, setOccasion] = useState("");
  const [itemSelected, setItemSelected] = useState()
  const [selectedDate, setSelectedDate] = useState("")
  const [showUrgentLink, setShowUrgentLink] = useState(false);

  // const handlePhotoChange = (index) => {
  //   setPhoto(images[index]);
  //   setIndexPhoto(index);
  //   setIsChanged(true);
  // };

  // function clearIndexPhoto() {
  //   setIndexPhoto(null)
  // }

  // useEffect(() => {
  //   const myTimeout = setTimeout(clearIndexPhoto, 10000);
  //   // clearTimeout(myTimeout);
  // }, [indexPhoto])

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

  function hoverLink() {
    setShowUrgentLink(prevState => !prevState);
  }

  //SHOW/HIDE POPUP
  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = (item) => {
    setItemSelected(item)
    // if (!city) {
    //   document.getElementById("cityId").focus();
    //   Swal.fire({
    //     text: "Please select your City",
    //     icon: "warning",
    //     confirmButtonText: "OK",
    //   });
    // } else if (!occasion) {
    //   document.getElementById("occasionId").focus();
    //   Swal.fire({
    //     text: "Please select your occasion",
    //     icon: "warning",
    //     confirmButtonText: "OK",
    //   });
    // } else
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

  //PACKAGES
  const packages = PreSelectMenuNinjaBox;

  //price filter
  //200-350, 350-500, 500+

  const [priceFilter, setPriceFilter] = useState('3501-5000');

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const filteredItems = packages.veg.filter((item) => {
    if (priceFilter === 'all') {
      return item.price >= 3501 && item.price <= 5000;
    } else if (priceFilter === '2000-3500') {
      return item.price >= 2000 && item.price <= 3500;
    } else if (priceFilter === '3501-5000') {
      return item.price >= 3501 && item.price <= 5000;
    }
    else if (priceFilter === '5001+') {
      return item.price >= 5000;
    }
    else {
      return item.price >= 3501 && item.price <= 5000;
    }
  })

  const nonVegFilterdeItems = packages.nonVeg.filter((item) => {
    if (priceFilter === 'all') {
      return item.price >= 3501 && item.price <= 5000;
    } else if (priceFilter === '2000-3500') {
      return item.price >= 2000 && item.price <= 4000;
    } else if (priceFilter === '3501-5000') {
      return item.price >= 4001 && item.price <= 5000;
    } else if (priceFilter === '5001+') {
      return item.price >= 5001;
    }
    else {
      return item.price >= 3501 && item.price <= 5000;
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



  const handleClose = (value) => {
    if (value === 'close') {
      setShow(false)
    } else {
      window.location.href = "/view-details"
      setShow(false)
    }


  };
  const handleShow = () => setShow(true);

  //SHOW NON-VEG PACKAGES
  const [showNonveg, setShowNonVeg] = useState(false);
  const [startTime, setStartTime] = useState("")

  const checkForNonveg = () => {
    setShowNonVeg(!showNonveg);
    if (showNonveg) {
      setNumber(10)
      setNumber2(0)
    } else {
      setNumber(0)
      setNumber2(10)
    }
  };

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

  const handleCity = (city) => {
    setCity(city);
  }
  const handleOccasion = (occasion) => {
    setOccasion(occasion);
  };

  //Submit form
  const navigateToOverview = () => {
    const totalCount = number + number2;

    if (!city) {
      Swal.fire({
        text: "Please select your City",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else if (!occasion) {
      Swal.fire({
        text: "Please select your occasion",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else if (!selectedDate) {
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
      setShowDiv(!showDiv);
      window.open('/customiseNinjaBuffet', '_blank')
    }
  }

  useEffect(() => {
    setIsSmall(window.innerWidth <= 939);
    window.addEventListener("resize", () =>
      setIsSmall(window.innerWidth <= 939)
    );
  }, []);

  return (
    <div>
      {showDiv && (<div className={styles.popupguestcount}>
        <div className="d-flex justify-content-evenly mt-3">
          <div>
            <img src="miniNinjaLeft.png" width="24.03" height="43.92" />
          </div>
          <div>
            <h3>Additional <span>Info</span></h3>
          </div>
          <div>
            <img src="miniNinjaRight.png" width={24.03} height={43.92} />
          </div>
        </div>
        <div className={styles.cityOccasionContnent}>
          <div>
            <h4>City</h4>
            <select
              style={{ fontFamily: "'Montserrat', SansSerif " }}
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
            <h4>Occasion</h4>
            <select
              style={{ fontFamily: "'Montserrat', SansSerif " }}
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
        <div className="d-flex justify-content-evenly">
          <div className={styles.dateContainer}>
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
          </div>
          <div className={styles.deliveryTimeSecn}>
            <h4>Delivery Time</h4>
            <select className="mx-auto" onChange={(e) => setStartTime(e.target.value)} value={startTime}>
              <option value="">Select Time</option>
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
        </div>
        <div className={styles.guestCountCn}>
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
      </div>)}
      {!isSmall ? <section className="custom-package py-5">
        <div className="container" id="buffeyPkg">
          <div className="section-title">
            <h2>
              Ninja<span>Buffet</span> Packages
            </h2>
            <h6 className="text-center" style={{ fontSize: "20px", fontFamily: "'Montserrat', SansSerif" }}>Select Your Ninja<span>Buffet</span> Package</h6>
            <div className="selectCityOcLg mt-5">
              <div style={{ fontFamily: "'Montserrat', SansSerif" }}>
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
              <div style={{ fontFamily: "'Montserrat', SansSerif" }}>
                <p>Occasion</p>
                <select
                  style={{ width: "180px" }}
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
          <h4 style={{ fontSize: "20px", fontWeight: "600", color: "#BE2D30", textAlign: "center", fontFamily: "'Montserrat', SansSerif" }}>Sort By</h4>
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
              <select value={priceFilter} onChange={handlePriceFilterChange} aria-label="Default select example" style={{ fontFamily: "'montserrat', sansSerif", fontWeight: "600", width: "250px" }}>
                <option value="2000-3500">Silver</option>
                <option value="3501-5000" selected>Gold</option>
                <option value="5001+">Platinum</option>
              </select>
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
          {!showNonveg && (<div className="d-flex gap-4 mt-3">
            {firstRow.map((item, index) => (<div key={index} className="packageNameSection text-center">
              <h3><span><Image src="/ninja-box/vlogo.png" width="15px" height="15px" /></span> {item.name}</h3>
              <div className="packageImg">
                <img src={item.img2} />
              </div>
              <div className="packagesName">
                <h4>{item.details}</h4>
                <h3>₹ {item.price + 4000}/-</h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise & Book Now</button> */}
              </div>
            </div>))}
          </div>)}
          {!showNonveg && (<div className="d-flex gap-4">
            {secondRow.map((item, index) => (<div key={index} className="packageNameSection text-center">
              <h3><span><Image src="/ninja-box/vlogo.png" width="15px" height="15px" /></span> {item.name}</h3>
              <div className="packageImg">
                <img src={item.img2} />
              </div>
              <div className="packagesName">
                <h4>{item.details}</h4>
                <h3>₹ {item.price + 4000}/-</h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise & Book Now</button> */}
              </div>
            </div>))}
          </div>)}
          {showNonveg && (<div className="d-flex gap-4 mt-3">
            {nvfirstRow.map((item, index) => (<div key={index} className="packageNameSection text-center">
              <h3><span><Image src="/ninja-box/nvlogo.png" width="15px" height="15px" /></span> {item.name}</h3>
              <div className="packageImg">
                <img src={item.img2} />
              </div>
              <div className="packagesName">
                <h4>{item.details}</h4>
                <h3>₹ {item.price + 4000}/-</h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise & Book Now</button> */}
              </div>
            </div>))}
          </div>)}
          {showNonveg && (<div className="d-flex gap-4">
            {nvsecondRow.map((item, index) => (<div key={index} className="packageNameSection text-center">
              <h3><span><Image src="/ninja-box/nvlogo.png" width="15px" height="15px" /></span> {item.name}</h3>
              <div className="packageImg">
                <img src={item.img2} />
              </div>
              <div className="packagesName">
                <h4>{item.details}</h4>
                <h3>₹ {item.price + 4000}/-</h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise & Book Now</button> */}
              </div>
            </div>))}
          </div>)}
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
          <div style={{ textAlign: "end", marginTop: "-360px" }}>
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
        <div className="custom-package-smallD text-center mb-3">
          <h1>Ninja<span>Buffet</span></h1>
          <h2>Packages</h2>
          <h6>Select Your Ninja<span>Buffet</span> Package</h6>
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
              <select className="form-select" value={priceFilter} onChange={handlePriceFilterChange} aria-label="Default select example" style={{ fontFamily: "'montserrat', sansSerif", width: "200px", border: "1px solid black", fontWeight: "500", fontSize: "12px" }}>
                <option value="2000-3500">Silver</option>
                <option value="3501-5000" selected>Gold</option>
                <option value="5001+">Platinum</option>
              </select>
            </div>
          </div>
        </div> : ""}
      {!showNonveg && <div>
        {isSmall ? <section>
          <div className="packageContainer">
            {firstRow.map((item, index) => (<div key={index} className="packageNameSection text-center ms-2 me-4">
              <h3>{item.name}</h3>
              <div className="packageImg">
                <img src={item.img2} />
              </div>
              <div className="packagesName">
                <h4>{item.details}</h4>
                <h3>₹ {item.price + 4000}/-</h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise & Book Now</button> */}
              </div>
            </div>))}
          </div>
          <div className="packageContainer">
            {secondRow.map((item, index) => (<div key={index} className="packageNameSection text-center ms-2 me-4">
              <h3>{item.name}</h3>
              <div className="packageImg">
                <img src={item.img2} />
              </div>
              <div className="packagesName">
                <h4>{item.details}</h4>
                <h3>₹ {item.price + 4000}/-</h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise & Book Now</button> */}
              </div>
            </div>))}
          </div>
        </section> : ""}
      </div>}
      {showNonveg && <div>
        {isSmall ? <section>
          <div className="packageContainer">
            {nvfirstRow.map((item, index) => (<div key={index} className="packageNameSection text-center ms-2 me-4">
              <h3>{item.name}</h3>
              <div className="packageImg">
                <img src={item.img2} />
              </div>
              <div className="packagesName">
                <h4>{item.details}</h4>
                <h3>₹ {item.price + 4000}/-</h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise & Book Now</button> */}
              </div>
            </div>))}
          </div>
          <div className="packageContainer">
            {nvsecondRow.map((item, index) => (<div key={index} className="packageNameSection text-center ms-2 me-4">
              <h3>{item.name}</h3>
              <div className="packageImg">
                <img src={item.img2} />
              </div>
              <div className="packagesName">
                <h4>{item.details}</h4>
                <h3>₹ {item.price + 4000}/-</h3>
                <p>(Min. Order 10 Guests)</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <button onClick={() => handleButtonClick(item)} type="button" className="btn btn-sm px-5" id="selectBtn">View Details</button>
                {/* <button onClick={() => window.open('/checkprice', '_blank')} type="button" className="btn btn-sm px-5" id="customiseBtn">Customise & Book Now</button> */}
              </div>
            </div>))}
          </div>
        </section> : ""}
      </div>}

      {isSmall ? <section>
        <div className="create-your-own-package" style={footerbg}>
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
              <img id="left-ninja-logo" src="/ninja-buffy/fontPic6.webp"></img>
            </div>
            <div className="col-8" id="rightside">
              <img id="right-ninja-logo" src="/CaterNinja logo/caterninja.webp"></img>
              <h2>Ninja<span>Buffet</span></h2>
              <p><span>Door Step</span> Delivery with Hassle Free Service by our Swift Ninjas For <span>10-40 Guests</span></p>
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
    </div>
  );
};

export default Custom_Package;
