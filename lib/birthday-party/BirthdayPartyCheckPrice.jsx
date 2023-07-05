import React, { useState, useEffect } from 'react'
import styles from '/styles/BirthdayParty.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles2 from "/styles/NewCustomizePkg.module.scss";
import Link from 'next/link';

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

    useEffect(() => {
        if (liveCounterItems.length > 0) {
          if (totalGuestCount < 100) {
            setLiveCounterPrice(5000);
          } else if (totalGuestCount >= 100 && totalGuestCount <= 150) {
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
          if (totalGuestCount < 100) {
            setFunEatablesPrice(5000);
          } else if (totalGuestCount >= 100 && totalGuestCount <= 150) {
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

    //PRICING
    // Calculate the total price
    const mainCoursePrice = mainCourseItems.reduce((sum, item) => sum + item.price, 0);

    const totalAddOnsPrice = mainCoursePrice + liveCounterPrice + funEatablePrice;
    const addonsprice = totalAddOnsPrice.toLocaleString();
    console.log(liveCounterPrice);


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
    if((vegCount == "" || vegCount == 0) && (nvCount != "" || nvCount != 0)){
        vegCount = nvCount;
        vegSnackPrice = (checkedValues.reduce((sum, item) => sum + item.price, 0) + checkedValues2.reduce((sum, item) => sum + item.price, 0)) * vegCount;
    }else{
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

    const totalPackagePrice = vegSnackPrice + nvSnackPrice + dessertPrice;

    // Calculate the total price
    const totalPrice = vegSnackPrice + nvSnackPrice + dessertPrice + totalAddOnsPrice;
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
                </div>))) : <h6>- Not selected -</h6>}
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
                </div>))) : <h6>- Not selected -</h6>}
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
                </div>))) : <h6>- Not selected -</h6>}
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
                </div>))) : <h6>- Not selected -</h6>}
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
                </div>))) : <h6>- Not selected -</h6>}
            </div>
            <div className={styles.cpaddons} style={addons}>
                <h2>Add On's -</h2>
            </div>
            {liveCounterItems.map((item, index) => (<div key={index} className={styles.addonsSelectedList}>
                <div>
                    {item.veg === true ? <Image src="/birthdayParty/vegLogo.png" width="11.852px" height="11.852px" /> :
                        <Image src="/birthdayParty/nvlogo.png" width="11.852px" height="11.852px" />}
                </div>
                <div className={styles.addonsName}>
                    <h4>{item.name}</h4>
                </div>
            </div>))}
            {mainCourseItems.map((item, index) => (<div key={index} className={styles.addonsSelectedList}>
                <div>
                    {item.veg === true ? <Image src="/birthdayParty/vegLogo.png" width="11.852px" height="11.852px" /> :
                        <Image src="/birthdayParty/vegLogo.png" width="11.852px" height="11.852px" />}
                </div>
                <div className={styles.addonsName}>
                    <h4>{item.name}</h4>
                </div>
            </div>))}
            {funEatablesItems.map((item, index) => (<div key={index} className={styles.addonsSelectedList}>
                <div>
                    <Image src="/birthdayParty/vegLogo.png" width="11.852px" height="11.852px" />
                </div>
                <div className={styles.addonsName}>
                    <h4>{item.name}</h4>
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
                    <h6>₹ 0000</h6>
                </div>
            </div>
            <hr />
            <div className={styles.priceL}>
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
                <div className={styles.bookinghelpbtn} style={{margin: "auto"}}>
                <Link href="https://api.whatsapp.com/send?phone=917738096313&text=Hey!%20Need%20help%20booking%20a%20BirthdayParty"><button>Get Booking Help</button></Link>
                </div>
                {/* <div className={styles.placeorderbtn}>
                    <button>Place Order</button>
                </div> */}
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
        </div>
    )
}

export default BirthdayPartyCheckPrice