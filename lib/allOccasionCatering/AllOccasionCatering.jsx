import Image from 'next/image';
import React, { useState } from 'react'
import styles from '/styles/AllOccasionCatering.module.scss';
import { useAppMenu } from "$lib/menuContext";
import styles2 from '/styles/BirthdayParty.module.scss';
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const AllOccasionCatering = () => {

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
            window.open('aocSelectPackage', '_self')
        }
    }

    //background image
    const backgroundStyle = {
        backgroundImage: 'url("/ODC/odcbg.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return (
        <div>
            <div className={styles.mainBody} style={backgroundStyle}>
                <div className='text-center pt-4'>
                    <Image src="/ODC/header.png" width="331.96px" height="33.55px" />
                </div>
                <div className={styles.topheader}>
                    <div>
                        <Image src="/ODC/leftninja.png" width="84.89px" height="92px" />
                    </div>
                    <div>
                        <h3>Premium <span>Outdoor Buffet</span> Service</h3>
                        <h4><span>50</span> Guest Onwards</h4>
                        <div className='text-center mt-3'>
                            <Image src="/ODC/servicebenefits.png" width="117px" height="14.18px" />
                        </div>
                        <div className={styles.servicebenefits}>
                            <dl>
                                <li>Rate comes with <span>Food, Buffet Tables, Plates, Cutleries & Buffet service</span></li>
                                <li>Transportation Additional on actual - Porter</li>
                                <li>Service window <span>3 hours Premium</span></li>
                            </dl>
                        </div>
                    </div>
                    <div>
                        <Image src="/ODC/rightninja.png" width="84.89px" height="92px" />
                    </div>
                </div>
                <h2>Select Your Details</h2>
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
                <div className={styles2.seePackageBtn}>
                    <button onClick={handleSubmit} style={{ backgroundColor: isFormValid ? '#BC0A01' : '#FFFFFF', color: isFormValid ? 'white' : "" }}>See Packages</button>
                </div>
                <div>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/ODC/pic1.png" className="d-block mx-auto" alt="..." width="217px" height="147px"/>
                            </div>
                            <div className="carousel-item">
                                <img src="/ODC/pic1.png" className="d-block mx-auto" alt="..." width="217px" height="147px"/>
                            </div>
                            <div className="carousel-item">
                                <img src="/ODC/pic1.png" className="d-block mx-auto" alt="..." width="217px" height="147px"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{marginTop: "-180px"}}>
                    <div>
                        <Image src="/ODC/leftborder.png" width="163.91px" height="231px" />
                    </div>
                    <div>
                        <Image src="/ODC/rightborder.png" width="163.91px" height="231px" />
                    </div>
                </div>
            </div>
            {showPopup && (<div className={styles2.homepageAlert}>
                <h1>Minimum 50 guest are required for this service.<br />Please select our other services below</h1>
                <div className={styles2.serviceImg}>
                    <a href='/ninjabox' target="_blank"><Image src="/birthdayParty/NBS.PNG" width="291.01px" height="171.75px" /></a>
                </div>
                <div className={styles2.serviceImg}>
                    <a href='/ninjabuffet' target="_blank"><Image src="/birthdayParty/NBUS.PNG" width="291.01px" height="171.75px" /></a>
                </div>
                <div style={{ textAlign: "center", marginTop: "25px" }}>
                    <button onClick={goBackBtn} id={styles2.backBtn}><FontAwesomeIcon icon={faArrowLeft} />  Go Back</button>
                </div>
            </div>)}
        </div>
    )
}

export default AllOccasionCatering