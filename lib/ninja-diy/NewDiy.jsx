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
            <div className={styles.guestCount}>
                <h3>Guest Count</h3>
                <hr />
                <div>
                    <div className={styles.vegSwitch}>
                        <div>
                            <p>Veg Only</p>
                        </div>
                        <div>
                            <label className={styles.switch}>
                                <input type="checkbox" />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                    </div>
                    <div className={styles.vegNonvegOptions}>
                        <div>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Veg guest 10</option>
                                <option value="1">Veg guest 10</option>
                                <option value="2">Veg guest 10</option>
                                <option value="3">Veg guest 10</option>
                            </select>
                        </div>
                        <div>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Non-Veg guest 10</option>
                                <option value="1">Non-Veg guest 10</option>
                                <option value="2">Non-Veg guest 10</option>
                                <option value="3">Non-Veg guest 10</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cuisineContainer}>
                <h3>Cuisine</h3>
                <hr />
                <div className={styles.cuisineBtn}>
                    <div>
                        <button>North Indian</button>
                        <button>Bengali</button>
                        <button>Contiental</button>
                    </div>
                    <div>
                        <button>Pan Asian</button>
                        <button>Indian Chinese</button>
                        <button>Multi Cuisine</button>
                    </div>
                </div>
            </div>
            <hr id={styles.bottomLine} />
            <div className={styles.backBtn}>
                <button>back</button>
            </div>
            <div className={styles.createYourMenuContainer}>
                <h3>Create Your Menu</h3>
                <hr />
                <div className={styles.startersContainer}>
                    <div>
                        <label className={styles.switch}>
                            <input type="checkbox" />
                            <span className={styles.slider}></span>
                        </label>
                    </div>
                    <div>
                    <h6>STARTERS -</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewDiy