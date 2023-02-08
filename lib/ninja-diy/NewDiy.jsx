import React, { useState } from 'react'
import styles from '/styles/NewDiy.module.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewDiy = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className={styles.diyMainContainer}>
            <div className={styles.header}>
                <img src='CaterNinja (1).png' />
                <h4>Get Instant Quote In Four Easy Steps</h4>
                <div className={styles.headerButtonsLines}>
                    <button id={styles.btn1}></button>
                    <div id={styles.line1}></div>
                    <button></button>
                    <div id={styles.line1}></div>
                    <button></button>
                    <div id={styles.line1}></div>
                    <button></button>
                </div>
            </div>
            <div className={styles.selectCity}>
                <h3>Select Your City</h3>
                <hr />
                <div className={styles.cityIcon}>
                    <button><img src='cities/mumbai.png' /></button>
                    <button><img src='cities/bangalore.png' /></button>
                    <button><img src='cities/delhi.png' /></button>
                    <button><img src='cities/gurgaon.png' /></button>
                </div>
            </div>
            <div className={styles.occasion}>
                <h3>Occasion</h3>
                <hr />
                <div className={styles.occasionOptionBtn}>
                    <div>
                        <button>Birthday Party</button>
                        <button>Pre-Wedding</button>
                        <button>House Warmings</button>
                    </div>
                    <div>
                        <button>House-Party</button>
                        <button>Office-Party</button>
                        <button>Other Occasion</button>
                    </div>
                </div>
            </div>
            <div className={styles.eventDate}>
                <h3>Event Date &amp; Time</h3>
                <hr />
                <div className={styles.datePicker}>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className={styles.availableSlots}>
                    <h5>Available Slots</h5>
                </div>
            </div>
        </div>
    )
}

export default NewDiy