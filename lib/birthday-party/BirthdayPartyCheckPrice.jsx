import React, { useState, useEffect } from 'react'
import styles from '/styles/BirthdayParty.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles2 from "/styles/NewCustomizePkg.module.scss";
import Link from 'next/link';
import styles4 from "/styles/ViewPackage.module.scss";

const BirthdayPartyCheckPrice = () => {

    const [totalGuestCount, setTotalGuestCount] = useState();
    const [vegCount, setVegCount] = useState();
    const [nvCount, setNvcount] = useState();
    const [liveCounterItems, setLiveCounterItems] = useState([]);
    const [mainCourseItems, setMainCourseItems] = useState([]);
    const [funEatablesItems, setFunEatablesItems] = useState([]);

    const [liveCounterPrice, setLiveCounterPrice] = useState();
    const [funEatablePrice, setFunEatablesPrice] = useState();

    const [checkedValues, setCheckedValues] = React.useState([]);
    const [checkedValues2, setCheckedValues2] = React.useState([]);
    const [checkedValues3, setCheckedValues3] = React.useState([]);
    const [checkedValues4, setCheckedValues4] = React.useState([]);
    const [checkedValues5, setCheckedValues5] = React.useState([]);

    const [packagePrice, setPackagePrice] = useState();

    const [showPopup, setShowPopup] = useState(false);

    const placeOrder = (e) => {
        e.preventDefault();
        setShowPopup(true);
    }
    const closePopup = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        if (liveCounterItems.length > 0) {
            if (totalGuestCount <= 100) {
                setLiveCounterPrice(5000);
            } else if (totalGuestCount >= 101 && totalGuestCount <= 150) {
                setLiveCounterPrice(7500);
            } else {
                setLiveCounterPrice(10000);
            }
        } else {
            setLiveCounterPrice(0);
        }
    }, [liveCounterItems, totalGuestCount]);

    useEffect(() => {
        if (funEatablesItems.length > 0) {
            if (totalGuestCount <= 100) {
                setFunEatablesPrice(5000);
            } else if (totalGuestCount >= 101 && totalGuestCount <= 150) {
                setFunEatablesPrice(7500);
            } else {
                setFunEatablesPrice(10000);
            }
        } else {
            setFunEatablesPrice(0);
        }
    }, [funEatablesItems, totalGuestCount]);


    //background image
    const backgroundStyle = {
        backgroundImage: 'url("/birthdayParty/birthdayBg.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    //add ons image
    const addons = {
        backgroundImage: 'url("/birthdayParty/checkepriceaddons.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    //bottom png bg
    const btmPng = {
        backgroundImage: 'url("/birthdayParty/bottomPng.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    //Remove Live Counter Item
    const removeLiveCounter = (index) => {
        // Remove the item from the liveCounterItems array
        liveCounterItems.splice(index, 1);

        // Update the state or re-render the component with the modified liveCounterItems array
        // For example, if you are using React state:
        setLiveCounterItems([...liveCounterItems]);
    };

    //Remove Mains Item
    const removeMains = (index) => {
        // Remove the item from the liveCounterItems array
        mainCourseItems.splice(index, 1);

        // Update the state or re-render the component with the modified liveCounterItems array
        // For example, if you are using React state:
        setMainCourseItems([...mainCourseItems]);
    };

    //Remove Fun Eatables Item
    const removeFunEatable = (index) => {
        // Remove the item from the liveCounterItems array
        funEatablesItems.splice(index, 1);

        // Update the state or re-render the component with the modified liveCounterItems array
        // For example, if you are using React state:
        setFunEatablesItems([...funEatablesItems]);
    };

    //PRICING
    // Calculate the total add ons price
    //const mainCoursePrice = mainCourseItems.reduce((sum, item) => sum + item.price, 0) * totalGuestCount;

    //live counter logic
    const vegs = liveCounterItems.filter((obj) => obj.veg == true);
    const nonVegs = liveCounterItems.filter((obj) => obj.veg != true);
    //debugger;
    if (vegCount == 0) {
        vegCount = nvCount;
    }
    console.log("liveCounterItems - ", liveCounterItems);
    let vegLC = vegs.length * 70 * vegCount;
    let nonVegLC = nonVegs.length * 70 * nvCount;
    console.log("vegLC - ", vegLC);
    console.log("NVvegLC - ", nonVegLC);
    const totalvegnonvegLC = vegLC + nonVegLC;

    //maincource logic
    const maincourseVeg = mainCourseItems.filter((obj) => obj.veg == true);
    const maincourseNonVeg = mainCourseItems.filter((obj) => obj.veg != true);
    if (vegCount == 0) {
        vegCount = nvCount;
    }
    let maincourseVegPrice = maincourseVeg.reduce((acc, item) => acc + item.price, 0) * vegCount;
    let maincourseNonVegPrice = maincourseNonVeg.reduce((acc, item) => acc + item.price, 0) * nvCount;
    const totalMainCoursePrice = maincourseVegPrice + maincourseNonVegPrice;
    console.log("maincoursetotalprice - ", maincourseVegPrice);

    const lcprc = liveCounterItems.length * 70 * totalGuestCount;
    const funeatableprc = funEatablesItems.length * funEatablePrice;
    const totallf = lcprc + funeatableprc;


    //const totalAddOnsPrice = mainCoursePrice + totallf;
    const totalAddOnsPrice = totalvegnonvegLC + funeatableprc + totalMainCoursePrice;
    const addonsprice = totalAddOnsPrice.toLocaleString();
    console.log("liveCounterPrice - ", liveCounterPrice);


    // Calculate the GST charges (18% of the total price)
    //const gstCharges = (totalPrice * 0.18).toFixed(2);

    // Calculate the grand price (total price + GST charges)
    //const grandPrice = (totalPrice + parseFloat(gstCharges)).toFixed(2);

    // const vegSnackPrice = checkedValues.reduce((sum, item) => sum + item.price, 0);
    // const vegHeavySnackPrice = checkedValues2.reduce((sum, item) => sum + item.price, 0);
    // const nvSnackPrice = checkedValues3.reduce((sum, item) => sum + item.price, 0);
    // const nvHeavySnackPrice = checkedValues4.reduce((sum, item) => sum + item.price, 0);
    // const dessrtPrice = checkedValues5.reduce((sum, item) => sum + item.price, 0);

    // const totalPrice = vegSnackPrice + vegHeavySnackPrice + nvSnackPrice + nvHeavySnackPrice + dessrtPrice;

    // const gstCharges = (totalPrice * 0.18).toFixed(2);

    // const grandTotal = (totalPrice + parseFloat(gstCharges)).toFixed(2);

    // Calculate the price for veg snacks based on the number of veg people
    console.log(nvCount);
    let vegSnackPrice = 0;
    if ((vegCount == "" || vegCount == 0) && (nvCount != "" || nvCount != 0)) {
        vegCount = nvCount;
        vegSnackPrice = (checkedValues.reduce((sum, item) => sum + item.price, 0) + checkedValues2.reduce((sum, item) => sum + item.price, 0)) * vegCount;
    } else {
        vegSnackPrice = (checkedValues.reduce((sum, item) => sum + item.price, 0) + checkedValues2.reduce((sum, item) => sum + item.price, 0)) * vegCount;
    }
    //const vegSnackPrice = ((vegCount !== "" && vegCount !== 0) ? (checkedValues.reduce((sum, item) => sum + item.price, 0) + checkedValues2.reduce((sum, item) => sum + item.price, 0)) * vegCount : checkedValues.reduce((sum, item) => sum + item.price, 0) + checkedValues2.reduce((sum, item) => sum + item.price, 0)) * nvCount;
    // Calculate the price for non-veg snacks based on the number of non-veg people
    console.log(vegSnackPrice)
    
    const nvSnackPrice = (checkedValues3.reduce((sum, item) => sum + item.price, 0) + checkedValues4.reduce((sum, item) => sum + item.price, 0)) * nvCount;
    console.log(nvSnackPrice)
    // Calculate the dessert price based on the total number of people
    const dessertPrice = checkedValues5.reduce((sum, item) => sum + item.price, 0) * totalGuestCount;
    console.log(dessertPrice)

    //Total Package Price

    const customprice = vegSnackPrice + nvSnackPrice + dessertPrice;
    let totalPackagePrice = 0
    if (packagePrice > 0) {
        totalPackagePrice = totalGuestCount * packagePrice;
    } else {
        totalPackagePrice = customprice;
    }
    //const totalPackagePrice = totalGuestCount * packagePrice;
    // Calculate the total price
    //const totalPrice = vegSnackPrice + nvSnackPrice + dessertPrice + totalAddOnsPrice;
    const totalPrice = totalPackagePrice + totalAddOnsPrice;
    console.log(totalPrice)

    // Calculate the GST charges
    const gstCharges = (totalPrice * 0.18).toFixed(2);

    // Calculate the grand total
    const grandTotal = (totalPrice + parseFloat(gstCharges)).toFixed(2);

    const formattedTotalPrice = totalPackagePrice.toLocaleString();
    const formattedGstCharges = parseFloat(gstCharges).toLocaleString();
    const formattedGrandTotal = parseFloat(grandTotal).toLocaleString();

    useEffect(() => {
        let selectedBirthdayPkg = JSON.parse(sessionStorage.getItem("selectedBirthdayPkg"));
        console.log('selectedBirthdayPkg', selectedBirthdayPkg)
        // sessionStorage.removeItem("dataSelected")
        if (selectedBirthdayPkg) {
            setTotalGuestCount(selectedBirthdayPkg.totalGuestCount);
            setVegCount(selectedBirthdayPkg.vegCount);
            setNvcount(selectedBirthdayPkg.nvCount);
        }
    }, []);

    useEffect(() => {
        const packageOneData = sessionStorage.getItem('packageOne');
        if (packageOneData) {
            const data = JSON.parse(packageOneData);
            setPackagePrice(data.price);
        }
        const addedItems = JSON.parse(sessionStorage.getItem("addedItems"));
        const addedMainCourse = JSON.parse(sessionStorage.getItem("addedMainCourse"));
        const addedFunEatables = JSON.parse(sessionStorage.getItem("addedFunEatables"));
        console.log('addedItems', addedItems)
        if (addedItems) {
            setLiveCounterItems(addedItems);
        }
        if (addedMainCourse) {
            setMainCourseItems(addedMainCourse);
        }
        if (addedFunEatables) {
            setFunEatablesItems(addedFunEatables);
        }

        return () => {
            sessionStorage.removeItem('addedItems');
            sessionStorage.removeItem('addedMainCourse');
            sessionStorage.removeItem('addedFunEatables');
          };
    }, []);

    React.useEffect(() => {
        const savedCheckedValues = sessionStorage.getItem('checkedValues');
        const savedCheckedValues2 = sessionStorage.getItem('checkedValues2');
        const savedCheckedValues3 = sessionStorage.getItem('checkedValues3');
        const savedCheckedValues4 = sessionStorage.getItem('checkedValues4');
        const savedCheckedValues5 = sessionStorage.getItem('checkedValues5');

        if (savedCheckedValues) {
            setCheckedValues(JSON.parse(savedCheckedValues));
        }
        if (savedCheckedValues2) {
            setCheckedValues2(JSON.parse(savedCheckedValues2));
        }
        if (savedCheckedValues3) {
            setCheckedValues3(JSON.parse(savedCheckedValues3));
        }
        if (savedCheckedValues4) {
            setCheckedValues4(JSON.parse(savedCheckedValues4));
        }
        if (savedCheckedValues5) {
            setCheckedValues5(JSON.parse(savedCheckedValues5));
        }
    }, []);

    // const fetchPackageData = () => {

    //     fetchPackageData();
    // };

    return (
        <div style={backgroundStyle} className={styles.mainBody}>
            <h3 id={styles.checkpriceHeader}>Review Your Menu</h3>
            <hr />
            <div className={styles.checkpriceheadersection}>
                <div>
                    <Image src="/birthdayParty/checkpriceheader.png" width="99px" height="33.69px" />
                </div>
                <h4>Total Guest - {totalGuestCount}</h4>
                {nvCount ? <h5>Non-Veg</h5> : <h5>Veg Only</h5>}
            </div>
            <div className={styles.selectedItems}>
                <h5>Veg Snack</h5>
                {checkedValues.length > 0 ? (checkedValues.map((vegSnackdata, index) => (<div key={index} className='d-flex'>
                    <div>
                        <Image src="/birthdayParty/vegLogo.png" width="11.852px" height="11.852px" />
                    </div>
                    <div>
                        <h6>{vegSnackdata.name}</h6>
                    </div>
                </div>))) : <h6 style={{ color: "#4D555B", fontFamily: "'Montserrat', sanSerif", fontSize: "11.933px", fontStyle: "italic", fontWeight: "400" }}>- Not selected -</h6>}
            </div>
            <div className={styles.selectedItems}>
                <h5>Veg Heavy Snack</h5>
                {checkedValues2.length > 0 ? (checkedValues2.map((vegHeavySnackdata, index) => (<div key={index} className='d-flex'>
                    <div>
                        <Image src="/birthdayParty/vegLogo.png" width="11.852px" height="11.852px" />
                    </div>
                    <div>
                        <h6>{vegHeavySnackdata.name}</h6>
                    </div>
                </div>))) : <h6 style={{ color: "#4D555B", fontFamily: "'Montserrat', sanSerif", fontSize: "11.933px", fontStyle: "italic", fontWeight: "400" }}>- Not selected -</h6>}
            </div>
            <div className={styles.selectedItems}>
                <h5>Non-Veg Snack</h5>
                {checkedValues3.length > 0 ? (checkedValues3.map((nonVegSnackData, index) => (<div key={index} className='d-flex'>
                    <div>
                        <Image src="/birthdayParty/nvlogo.png" width="11.852px" height="11.852px" />
                    </div>
                    <div>
                        <h6>{nonVegSnackData.name}</h6>
                    </div>
                </div>))) : <h6 style={{ color: "#4D555B", fontFamily: "'Montserrat', sanSerif", fontSize: "11.933px", fontStyle: "italic", fontWeight: "400" }}>- Not selected -</h6>}
            </div>
            <div className={styles.selectedItems}>
                <h5>Non-Veg Heavy Snack</h5>
                {checkedValues4.length > 0 ? (checkedValues4.map((nonVegHeavySnackData, index) => (<div key={index} className='d-flex'>
                    <div>
                        <Image src="/birthdayParty/nvlogo.png" width="11.852px" height="11.852px" />
                    </div>
                    <div>
                        <h6>{nonVegHeavySnackData.name}</h6>
                    </div>
                </div>))) : <h6 style={{ color: "#4D555B", fontFamily: "'Montserrat', sanSerif", fontSize: "11.933px", fontStyle: "italic", fontWeight: "400" }}>- Not selected -</h6>}
            </div>
            <div className={styles.selectedItems}>
                <h5>Dessert</h5>
                {checkedValues5.length > 0 ? (checkedValues5.map((dessertData, index) => (<div key={index} className='d-flex'>
                    <div>
                        <Image src="/birthdayParty/vegLogo.png" width="11.852px" height="11.852px" />
                    </div>
                    <div>
                        <h6>{dessertData.name}</h6>
                    </div>
                </div>))) : <h6 style={{ color: "#4D555B", fontFamily: "'Montserrat', sanSerif", fontSize: "11.933px", fontStyle: "italic", fontWeight: "400" }}>- Not selected -</h6>}
            </div>
            <div className={styles.cpaddons} style={addons}>
                <h2>Add On's -</h2>
            </div>
            {liveCounterItems.length + mainCourseItems.length + funEatablesItems.length === 0 ? <div >
                <h4 style={{ color: "#4D555B", fontFamily: "'Montserrat', sanSerif", fontSize: "11.933px", fontStyle: "italic", fontWeight: "400", marginLeft: "30px" }}>--- No Add On Selected ---</h4>
                <hr />
                <div className={styles.cpaddonsbtn}>
                    <Link href="/birthdayAddOns"><button>Go To Add On's</button></Link>
                </div>
            </div> : ""}
            {liveCounterItems.map((item, index) => (<div key={index} className={styles.addonsSelectedList}>
                <div>
                    {item.veg === true ? <Image src="/birthdayParty/vegLogo.png" width="11.852px" height="11.852px" /> :
                        <Image src="/birthdayParty/nvlogo.png" width="11.852px" height="11.852px" />}
                </div>
                <div className={styles.addonsName}>
                    <h4>{item.name}</h4>
                </div>
                <div className="remove" onClick={() => removeLiveCounter(index)}>
                    <Image src="/birthdayParty/trash.png" width="11px" height="11px" />
                </div>
            </div>))}
            {mainCourseItems.map((item, index) => (<div key={index} className={styles.addonsSelectedList}>
                <div>
                    {item.veg === true ? <Image src="/birthdayParty/vegLogo.png" width="11.852px" height="11.852px" /> :
                        <Image src="/birthdayParty/nvlogo.png" width="11.852px" height="11.852px" />}
                </div>
                <div className={styles.addonsName}>
                    <h4>{item.name}</h4>
                </div>
                <div className="remove" onClick={() => removeMains(index)}>
                    <Image src="/birthdayParty/trash.png" width="11px" height="11px" />
                </div>
            </div>))}
            {funEatablesItems.map((item, index) => (<div key={index} className={styles.addonsSelectedList}>
                <div>
                    <Image src="/birthdayParty/vegLogo.png" width="11.852px" height="11.852px" />
                </div>
                <div className={styles.addonsName}>
                    <h4>{item.name}</h4>
                </div>
                <div className="remove" onClick={() => removeFunEatable(index)}>
                    <Image src="/birthdayParty/trash.png" width="11px" height="11px" />
                </div>
            </div>))}
            <div className="mt-4">
                <hr />
            </div>
            {/* <h6 id={styles.addmoreitemCP}><FontAwesomeIcon icon={faPlus} /> Add More Items</h6> */}
            <div className={styles.priceL}>
                <div>
                    <h5>Total Package Price</h5>
                    <h5>Total Add On's Price</h5>
                    <h5>Delivery Charges (As Per Actual)</h5>
                </div>
                <div>
                    <h6>₹ {formattedTotalPrice}</h6>
                    <h6>₹ {addonsprice}</h6>
                    {/* <h6>₹ 0000</h6> */}
                </div>
            </div>
            <hr />
            <div className={styles.priceL} style={{ marginTop: "5px" }}>
                <div>
                    <h5>GST</h5>
                </div>
                <div>
                    <h6>₹ {formattedGstCharges}</h6>
                </div>
            </div>
            <div className={styles.simpleHR}>
                <hr />
            </div>
            <div className={styles.grandtotal}>
                <h3>Grand Total</h3>
                <h3>₹ {formattedGrandTotal}</h3>
            </div>
            <div className={styles.orderbuttonsectn}>
                <div className={styles.bookinghelpbtn} style={{ margin: "auto" }}>
                    <Link href="https://api.whatsapp.com/send?phone=917738096313&text=Hey!%20Need%20help%20booking%20a%20BirthdayParty"><button>Get Booking Help</button></Link>
                </div>
                <div className={styles.placeorderbtn}>
                    <button>Place Order</button>
                </div>
            </div>
            <div className={styles.addonsBtmSectn} style={btmPng}>

            </div>
            <div className={styles2.createYourOwnPkg} style={{ marginTop: "0px" }}>
                <div>
                    <img src="Group 1097.png" />
                </div>
                <div className="text-center mt-3">
                    <p>Wanna try with the Packages?</p>
                    <h2>
                        Visit Our<span> Website</span>
                    </h2>
                    <h6>
                        Curate your own flavour of party
                        <br />
                        from variety of cuisines and services
                    </h6>
                    <a target="_blank" href="/">
                        <button>SEE ALL THE SERVICES</button>
                    </a>
                </div>
            </div>
            {showPopup && (
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
                                {/* <div>
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
                </div> */}
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
            )}
        </div>
    )
}

export default BirthdayPartyCheckPrice