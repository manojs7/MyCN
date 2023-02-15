import React, { useState } from 'react'
import styles from '/styles/NewDiy.module.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegular, faMagnifyingGlass, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import Multiselect from 'multiselect-react-dropdown';
import { DisabledByDefault } from '@mui/icons-material';

// this.state = {
//     options: [{ name: 'Option 1️⃣', id: 1 }, { name: 'Option 2️⃣', id: 2 }]
// };



// onSelect(selectedList, selectedItem) {

// }

// onRemove(selectedList, removedItem) {

// }

const NewDiy = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [selectedOptions, setSelectedOptions] = useState();

    const [isDisabled, setIsDisabled] = useState(true);
    const [isDisabledStarter, setIsDisabledStarter] = useState(true);
    const [isDisabledMains, setIsDisabledMains] = useState(true);
    const [isDisabledBread, setIsDisabledBread] = useState(true);
    const [isDisabledRice, setIsDisabledRice] = useState(true);

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        // 👇️ toggle shown state
        setIsShown(current => !current);

        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    const optionList = [
        { value: "red", label: "Paneer Butter Masala" },
        { value: "green", label: "Palak Paneer" },
        { value: "yellow", label: "Kadai Paneer" },
        { value: "blue", label: "Chicken tikka" },
        { value: "white", label: "Chicken Punjabi" }
    ];

    function handleSelect(data) {
        setSelectedOptions(data);
    }

    return (
        <div className={styles.diyMainContainer}>
            {/* <div className={styles.diyAnimationScreen}>
                <div className={styles.whiteBg}>
                    <img id={styles.logo} src='CaterNinja (1).png' />
                    <p>Get Instant Quote In <span>Four</span> Easy Steps</p>
                    <img id={styles.ninja} src='/diy images/Group 266 (1).png' />
                </div>
                <div className={styles.redBg} />
                <div className={styles.yellowBg} />
            </div> */}
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
                <div className="btn-group" role="group" aria-label="Basic example" id={styles.cityIcon}>
                    <button type='radio'><img src='cities/mumbai.png' /></button>
                    <button type='radio'><img src='cities/bangalore.png' /></button>
                    <button type='radio'><img src='cities/delhi.png' /></button>
                    <button type='radio'><img src='cities/gurgaon.png' /></button>
                </div>
            </div>
            <div className={styles.occasion}>
                <h3>Occasion</h3>
                <hr />
                <div className="btn-group" role="group" aria-label="Basic example" id={styles.occasionOptionBtn}>
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
                                <input type="checkbox" checked={isDisabled}
                                    onChange={(e) => setIsDisabled(e.target.checked)} />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                    </div>
                    <div className={styles.vegNonvegOptions}>
                        <div>
                            <select className="form-select" aria-label="Default select example">
                                <option style={{ backgroundImage: "url(4444.png)"}} selected>Veg guest 10</option>
                                <option value="1">Veg guest 10</option>
                                <option value="2">Veg guest 10</option>
                                <option value="3">Veg guest 10</option>
                            </select>
                        </div>
                        <div>
                            <select className="form-select" aria-label="Default select example" disabled={isDisabled}>
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
                <div>
                    <div className={styles.startersContainer}>
                        <div>
                            <label className={styles.switch}>
                                <input type="checkbox" checked={isDisabledStarter}
                                    onChange={() => setIsDisabledStarter(!isDisabledStarter)}/>
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                        <div>
                            <h6>STARTERS -</h6>
                        </div>
                    </div>
                    {/* <div onClick={openForm} className={styles.starterSearchBtn} id="srchbr">
                        <p><FontAwesomeIcon icon={faMagnifyingGlass} />  Select Starter</p>
                        <span><FontAwesomeIcon icon={faAngleDown} />  Click here to select</span>
                    </div> */}
                    {/* { isShown && (<div className={styles.starterMenuContainer}>
                        <Select
                            className={styles.selectDropdown}
                            options={optionList}
                            placeholder="Select Starter"
                            value={selectedOptions}
                            onChange={handleSelect}
                            isSearchable={true}
                            isMulti
                        />
                        <div><button onClick={handleClick}>close</button></div>
                    </div>)} */}
                    <div className={styles.starterMenuContainer}>
                        <Multiselect
                            disable={!isDisabledStarter}
                            id="starterOptions"
                            placeholder="Select Starter"
                            displayValue="key"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={function noRefCheck() { }}
                            onSearch={function noRefCheck() { }}
                            onSelect={function noRefCheck() { }}
                            options={[
                                {
                                    cat: 'Group 1',
                                    key: 'Palak Paneer'
                                },
                                {
                                    cat: 'Group 1',
                                    key: 'Butter Paneer'
                                },
                                {
                                    cat: 'Group 1',
                                    key: 'Muter Paneer'
                                },
                                {
                                    cat: 'Group 2',
                                    key: 'Chilie Paneer'
                                }
                            ]}
                            showCheckbox
                        />
                    </div>
                    <div className={styles.starterBtmLine}>
                        <hr />
                    </div>
                    <div className={styles.addMoreBtn}>
                        <button>+ Add More</button>
                    </div>
                    <div className={styles.startersContainer}>
                        <div>
                            <label className={styles.switch}>
                                <input type="checkbox" checked={isDisabledMains}
                                    onChange={() => setIsDisabledMains(!isDisabledMains)}/>
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                        <div>
                            <h6>MAINS -</h6>
                        </div>
                    </div>
                    <div>
                        <Multiselect
                        disable={!isDisabledMains}
                            id="starterOptions"
                            placeholder="Select Mains"
                            displayValue="key"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={function noRefCheck() { }}
                            onSearch={function noRefCheck() { }}
                            onSelect={function noRefCheck() { }}
                            options={[
                                {
                                    cat: 'Group 1',
                                    key: 'Palak Paneer'
                                },
                                {
                                    cat: 'Group 1',
                                    key: 'Butter Paneer'
                                },
                                {
                                    cat: 'Group 1',
                                    key: 'Muter Paneer'
                                },
                                {
                                    cat: 'Group 2',
                                    key: 'Chilie Paneer'
                                }
                            ]}
                            showCheckbox
                        />
                    </div>
                    <div className={styles.starterBtmLine}>
                        <hr />
                    </div>
                    <div className={styles.addMoreBtn}>
                        <button>+ Add More</button>
                    </div>
                    <div className={styles.startersContainer}>
                        <div>
                            <label className={styles.switch}>
                                <input type="checkbox" checked={isDisabledBread}
                                    onChange={() => setIsDisabledBread(!isDisabledBread)}/>
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                        <div>
                            <h6>BREAD / RICE -</h6>
                        </div>
                    </div>
                    <div>
                        <Multiselect
                            disable={!isDisabledBread}
                            id="starterOptions"
                            placeholder="Select Bread / Rice"
                            displayValue="key"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={function noRefCheck() { }}
                            onSearch={function noRefCheck() { }}
                            onSelect={function noRefCheck() { }}
                            options={[
                                {
                                    cat: 'Group 1',
                                    key: 'Palak Paneer'
                                },
                                {
                                    cat: 'Group 1',
                                    key: 'Butter Paneer'
                                },
                                {
                                    cat: 'Group 1',
                                    key: 'Muter Paneer'
                                },
                                {
                                    cat: 'Group 2',
                                    key: 'Chilie Paneer'
                                }
                            ]}
                            showCheckbox
                        />
                    </div>
                    <div className={styles.starterBtmLine}>
                        <hr />
                    </div>
                    <div className={styles.addMoreBtn}>
                        <button>+ Add More</button>
                    </div>
                    <div className={styles.startersContainer}>
                        <div>
                            <label className={styles.switch}>
                                <input type="checkbox" checked={isDisabledRice}
                                    onChange={() => setIsDisabledRice(!isDisabledRice)}/>
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                        <div>
                            <h6>DESSERT -</h6>
                        </div>
                    </div>
                    <div>
                        <Multiselect
                            disable={!isDisabledRice}
                            id="starterOptions"
                            placeholder="Select Dessert"
                            displayValue="key"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={function noRefCheck() { }}
                            onSearch={function noRefCheck() { }}
                            onSelect={function noRefCheck() { }}
                            options={[
                                {
                                    cat: 'Group 1',
                                    key: 'Palak Paneer'
                                },
                                {
                                    cat: 'Group 1',
                                    key: 'Butter Paneer'
                                },
                                {
                                    cat: 'Group 1',
                                    key: 'Muter Paneer'
                                },
                                {
                                    cat: 'Group 2',
                                    key: 'Chilie Paneer'
                                }
                            ]}
                            showCheckbox
                        />
                    </div>
                    <div className={styles.starterBtmLine}>
                        <hr />
                    </div>
                    <div className={styles.addMoreBtn}>
                        <button>+ Add More</button>
                    </div>
                </div>
            </div>
            <div className={styles.checkPriceBtn}>
                <button>Check Price</button>
            </div>
            <div className={styles.priceDetailsSection}>
                <h3>Review Your Menu</h3>
                <hr />
                <div className={styles.reviewBtn}>
                    <button>Birthday Party</button>
                    <button>Total Guests - 50</button>
                    <button>Veg Only</button>
                </div>
                <div>
                    <div className={styles.menuName}>
                        <div>
                            <h6>Starter -</h6>
                        </div>
                        <div><p>Qt. -</p></div>
                    </div>
                    <div className={styles.itemName}>
                        <div>
                            <h6>Paneer Butter Masala</h6>
                            <h6>Palak Paneer</h6>
                        </div>
                        <div>
                            <h6>2.0 kg</h6>
                            <h6>2.0 kg</h6>
                        </div>
                    </div>
                    <div className={styles.menuName}>
                        <div>
                            <h6>Mains -</h6>
                        </div>
                    </div>
                    <div className={styles.itemName}>
                        <div className='mt-2'>
                            <h6>Paneer Butter Masala</h6>
                            <h6>Palak Paneer</h6>
                        </div>
                        <div>
                            <h6>2.0 kg</h6>
                            <h6>2.0 kg</h6>
                        </div>
                    </div>
                    <div className={styles.menuName}>
                        <div>
                            <h6>Bread / Rice -</h6>
                        </div>
                    </div>
                    <div className={styles.itemName}>
                        <div className='mt-2'>
                            <h6>Paneer Butter Masala</h6>
                            <h6>Palak Paneer</h6>
                        </div>
                        <div>
                            <h6>2.0 kg</h6>
                            <h6>2.0 kg</h6>
                        </div>
                    </div>
                    <div className={styles.menuName}>
                        <div>
                            <h6>Desserts</h6>
                        </div>
                    </div>
                    <div className={styles.itemName}>
                        <div className='mt-2'>
                            <h6>Paneer Butter Masala</h6>
                            <h6>Palak Paneer</h6>
                        </div>
                        <div>
                            <h6>2.0 kg</h6>
                            <h6>2.0 kg</h6>
                        </div>
                    </div>
                </div>
            </div>
            <hr id={styles.pricebtmHr} />
            <div className={styles.backToMenu}>
                <button>Back To Menu</button>
            </div>
            <div className={styles.finalPriceSection}>
                <div className="d-flex justify-content-between">
                    <select className="form-select" aria-label="Default select example">
                        <option value="1">NinjaBox Delivery (Free)</option>
                        <option value="2">Buffet setup + 1 waiter</option>
                    </select>
                    <p>₹ 0000</p>
                </div>
                <div className={styles.couponSection}>
                    <div>
                        <h5>Discount Coupon</h5>
                    </div>
                    <div className={styles.coupon}>
                        <input />
                        <button>Apply</button>
                    </div>
                </div>
                <div className={styles.itemtotalSectn}>
                    <div>
                        <h6>Item Total</h6>
                        <h6>Delivery Charges (As Per Actual)</h6>
                    </div>
                    <div>
                        <h6>₹ 0000</h6>
                        <h6>₹ 0000</h6>
                    </div>
                </div>
                <hr id={styles.pricebtmHr} />
                <div className={styles.itemtotalSectn}>
                    <div>
                        <h6>Coupon Value</h6>
                        <h6>GST</h6>
                    </div>
                    <div>
                        <h6>₹ 0000</h6>
                        <h6>₹ 0000</h6>
                    </div>
                </div>
                <hr id={styles.pricebtmHr} />
                <div className={styles.grandTotalContainer}>
                    <div>
                        <h3>Grand Total</h3>
                    </div>
                    <div>
                        <h3>₹ 0000</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewDiy