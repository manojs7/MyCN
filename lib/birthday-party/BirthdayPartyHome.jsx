import React, { useState } from 'react'
import styles from '/styles/BirthdayParty.module.scss';
import Image from 'next/image';
import { useAppMenu } from "$lib/menuContext";
import { WindowSharp } from '@mui/icons-material';
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BirthdayPartyHome = () => {

    const { cities } = useAppMenu();
    const [city, setCity] = useState("");
    const [selectedDate, setSelectedDate] = useState("")
    const [vegCount, setVegCount] = useState("")
    const [nvCount, setNvCount] = useState("")
    const [isFormValid, setIsFormValid] = useState(false);

    const [showPopup, setShowPopup] = useState(false);

    const handleCity = (city) => {
        setCity(city);
        checkFormValidity();
    }

    //select date logic
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        checkFormValidity();
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

    const handleInput1Change = (event) => {
        setVegCount(event.target.value);
        checkFormValidity();
    };

    const handleInput2Change = (event) => {
        setNvCount(event.target.value);
        checkFormValidity();
    };

    const checkFormValidity = () => {
        if (city && selectedDate) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const goBackBtn = () => {
        setShowPopup(!showPopup);
    }

    const handleSubmit = () => {
        const totalGuestCount = Number(vegCount) + Number(nvCount);
        if (!city) {
            Swal.fire({
                text: "please select your city",
                icon: "warning",
                confirmButtonText: "OK",
            });
        }
        else if (!selectedDate) {
            Swal.fire({
                text: "please select date",
                icon: "warning",
                confirmButtonText: "OK",
            });
        }
        else if (totalGuestCount < 50) {
            setShowPopup(!showPopup);
        } else if (isFormValid) {
            const selectedBirthdayPkg = {
                city,
                selectedDate,
                vegCount,
                nvCount,
                totalGuestCount
            }
            setIsFormValid(false);
            // let selectedBirthdayPkg = { city: city, selectedDate: selectedDate, vegCount: vegCount, nvCount: nvCount }
            sessionStorage.setItem("selectedBirthdayPkg", JSON.stringify(selectedBirthdayPkg))
            window.open('/birthdayParty', '_self')
        }
    }

    //background image
    const backgroundStyle = {
        backgroundImage: 'url("/birthdayParty/birthdayBg.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    //small png bg
    const smallPng = {
        backgroundImage: 'url("/birthdayParty/doodle 3.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    //bottom png bg
    const btmPng = {
        backgroundImage: 'url("/birthdayParty/bottomPng.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    //bottom png card bg
    const btmPngCard = {
        backgroundImage: 'url("/birthdayParty/Vector3.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return (
        <div className={styles.mainBody} style={backgroundStyle}>
            <div className='text-center pt-4'>
                <Image src="/birthdayParty/birthdaypartyhome.png" width="365px" height="133.73px" />
            </div>
            <div className={styles.birthdayHomeHeader} style={smallPng}>
                <h6>Easiest To Book Your Blockbuster<br />Birthday Party Catering!</h6>
                <h3>Select Your Details</h3>
                <hr />
            </div>
            <div className={styles.inputBox}>
                <div>
                    <div>
                        <h6>City</h6>
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
                        <h6>Veg Count</h6>
                        <input type='number' value={vegCount} onChange={handleInput1Change}></input>
                    </div>
                </div>
                <div>
                    <div>
                        <h6>Date</h6>
                        <select id="dateSelect" value={selectedDate} onChange={handleDateChange}>
                            <option value="">Select a date</option>
                            {generateDateOptions()}
                        </select>
                    </div>
                    <div>
                        <h6>N-Veg Count</h6>
                        <input type='number' value={nvCount} onChange={handleInput2Change}></input>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.seePackageBtn}>
                <button onClick={handleSubmit} style={{ backgroundColor: isFormValid ? '#BC0A01' : '#FFFFFF', color: isFormValid ? 'white' : "" }}>See Packages</button>
            </div>
            <div className={styles.bottomSectn} style={btmPng}>
                <div className={styles.top} style={btmPngCard}>
                    <h6>Fun Eatables, Live Counters<br />Main Course Add On's</h6>
                    <button>On Next Page</button>
                </div>
            </div>
            {showPopup && (<div className={styles.homepageAlert}>
                <h1>Minimum 50 guest are required for this service.<br />Please select our other services below</h1>
                <div className={styles.serviceImg}>
                    <a href='/ninjabox' target="_blank"><Image src="/birthdayParty/NBS.PNG" width="291.01px" height="171.75px" /></a>
                </div>
                <div className={styles.serviceImg}>
                    <a href='/ninjabuffet' target="_blank"><Image src="/birthdayParty/NBUS.PNG" width="291.01px" height="171.75px" /></a>
                </div>
                <div style={{ textAlign: "center", marginTop: "25px" }}>
                    <button onClick={goBackBtn} id={styles.backBtn}><FontAwesomeIcon icon={faArrowLeft} />  Go Back</button>
                </div>
            </div>)}
        </div>

        // addons - live 50-60 - price- 
        // 100 - 5000

        // checkprice -
        // addon ons - dlt button
        // item total - package total
        // addon total - 
    )
}

export default BirthdayPartyHome