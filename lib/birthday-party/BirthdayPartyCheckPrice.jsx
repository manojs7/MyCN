import React, { useState, useEffect } from 'react'
import styles from '/styles/BirthdayParty.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles2 from "/styles/NewCustomizePkg.module.scss";

const BirthdayPartyCheckPrice = () => {

    const [totalGuestCount, setTotalGuestCount] = useState();

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

    useEffect(() => {
        let selectedBirthdayPkg = JSON.parse(sessionStorage.getItem("selectedBirthdayPkg"));
        console.log('selectedBirthdayPkg', selectedBirthdayPkg)
        // sessionStorage.removeItem("dataSelected")
        if (selectedBirthdayPkg) {
            setTotalGuestCount(selectedBirthdayPkg.totalGuestCount);
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
                <h5>Veg Only</h5>
            </div>
            <div className={styles.selectedItems}>
                <h5>Veg Snack</h5>
                <div className='d-flex'>
                    <div>
                        <Image src="/diy images/vegLogo.png" width="11.852px" height="11.852px" />
                    </div>
                    <div>
                        <h6>Paneer Butter Masala</h6>
                    </div>
                </div>
                <div className='d-flex'>
                    <div>
                        <Image src="/diy images/vegLogo.png" width="11.852px" height="11.852px" />
                    </div>
                    <div>
                        <h6>Paneer Butter Masala</h6>
                    </div>
                </div>
            </div>
            <div className={styles.selectedItems}>
                <h5>Veg Heavy Snack</h5>
                <div className='d-flex'>
                    <div>
                        <Image src="/diy images/vegLogo.png" width="11.852px" height="11.852px" />
                    </div>
                    <div>
                        <h6>Paneer Butter Masala</h6>
                    </div>
                </div>
                <div className='d-flex'>
                    <div>
                        <Image src="/diy images/vegLogo.png" width="11.852px" height="11.852px" />
                    </div>
                    <div>
                        <h6>Paneer Butter Masala</h6>
                    </div>
                </div>
            </div>
            <div className={styles.selectedItems}>
                <h5>Dessert</h5>
                <div className='d-flex'>
                    <div>
                        <Image src="/diy images/vegLogo.png" width="11.852px" height="11.852px" />
                    </div>
                    <div>
                        <h6>Paneer Butter Masala</h6>
                    </div>
                </div>
                <div className='d-flex'>
                    <div>
                        <Image src="/diy images/vegLogo.png" width="11.852px" height="11.852px" />
                    </div>
                    <div>
                        <h6>Paneer Butter Masala</h6>
                    </div>
                </div>
            </div>
            <div className={styles.cpaddons} style={addons}>
                <h2>Add On's -</h2>
            </div>
            <div className={styles.addonsSelectedList}>
                <div>
                    <Image src="/diy images/vegLogo.png" width="11.852px" height="11.852px" />
                </div>
                <div className={styles.addonsName}>
                    <h4>Veg Dum Biryani</h4>
                </div>
            </div>
            <div className={styles.addonsSelectedList}>
                <div>
                    <Image src="/diy images/vegLogo.png" width="11.852px" height="11.852px" />
                </div>
                <div className={styles.addonsName}>
                    <h4>Veg Dum Biryani</h4>
                </div>
            </div>
            <div className="mt-4">
                <hr />
            </div>
            <h6 id={styles.addmoreitemCP}><FontAwesomeIcon icon={faPlus} /> Add More Items</h6>
            <div className={styles.priceSection}>
                <div className={styles.priceDropdown}>
                    <select>
                        <option>NinjaBox-Delivery (Free)</option>
                        <option>Ninja Buffet</option>
                    </select>
                </div>
                <div>
                    <h6>₹0000</h6>
                </div>
            </div>
            <div className={styles.priceL}>
                <div>
                    <h5>Item Total</h5>
                    <h5>Delivery Charges (As Per Actual)</h5>
                </div>
                <div>
                    <h6>₹0000</h6>
                    <h6>₹0000</h6>
                </div>
            </div>
            <hr />
            <div className={styles.priceL}>
                <div>
                    <h5>GST</h5>
                </div>
                <div>
                    <h6>₹0000</h6>
                </div>
            </div>
            <div className={styles.simpleHR}>
                <hr />
            </div>
            <div className={styles.grandtotal}>
                <h3>Grand Total</h3>
                <h3>₹0000</h3>
            </div>
            <div className={styles.orderbuttonsectn}>
                <div className={styles.bookinghelpbtn}>
                    <button>Get Booking Help</button>
                </div>
                <div className={styles.placeorderbtn}>
                    <button>Place Order</button>
                </div>
            </div>
            <div className={styles.addonsBtmSectn} style={btmPng}>

            </div>
            <div className={styles2.createYourOwnPkg} style={{marginTop: "0px"}}>
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