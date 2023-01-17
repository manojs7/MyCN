import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import styles from '/styles/instantQuote/InstantQuote.module.scss';
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
const InstantQuote = () => {

    const [isSmall, setIsSmall] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        setIsSmall(window.innerWidth < 993);
        window.addEventListener("resize", () =>
            setIsSmall(window.innerWidth < 993)
        );
    }, []);

    return (
        <div className={styles.instantQuoteBody}>
            <div className={styles.instantContainer}>
                <div className={styles.header}>
                    {!isSmall ? <div className={styles.headerIcon}>
                        <img src='instantQuoteHeader.png' />
                    </div> : ""}
                    {isSmall ? <div>
                        <h1>Welcome To</h1>
                        <img className={styles.ninjaTitleLogo} src="diy images/CaterNinja.png" />
                        <h5>Get Instant Quote In Few Easy Steps</h5>
                        <img className={styles.ninjaHeaderlogo} src="diy images/Group 961.png" />
                    </div> : ""}
                </div>
                <div className={styles.secondContentBg}>
                    <div className={styles.insidebg}>
                        <div className={styles.citycontainer}>
                            <h3>Choose City</h3>
                            <div className={styles.cityIcon}>
                                <img src='cities/bangalore.png' />
                                <img src='cities/delhi.png' />
                                <img src='cities/mumbai.png' />
                                <img src='cities/gurgaon.png' />
                            </div>
                        </div>
                        <div className={styles.ocassion}>
                            <h3>Occassion</h3>
                            <div className=''>
                                {!isSmall ? <div className={styles.fstbtn}>
                                    <button>Birthday Party</button>
                                    <button>House-Party</button>
                                    <button>House Warmings</button>
                                </div> : ""}
                                {!isSmall ? <div className={styles.secbtn}>
                                    <button>Pre-Wedding</button>
                                    <button>Office-Party</button>
                                    <button>Other Occassion</button>
                                </div> : ""}
                                {isSmall ? <div className={styles.occassionbtn}>
                                    <button>Birthday Party</button>
                                    <button>House-Party</button>
                                    <button>House Warmings</button>
                                    <button>Pre-Wedding</button>
                                    <button>Office-Party</button>
                                    <button>Other Occassion</button>
                                </div> : ""}
                            </div>
                        </div>
                        <div className={styles.guestCount}>
                            <h3>Guest Count</h3>
                            <div>
                                <button className={styles.guestBtn1}>Veg Guests</button>
                                <button className={styles.guestBtn2}>Non-Veg Guests</button>
                            </div>
                        </div>
                        <div className={styles.eventDate}>
                            <h3>Event Date</h3>
                            <div className={styles.datePicker}>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                        <div>
                            <div className={styles.ocassion}>
                                <h3>Cuisine</h3>
                                <div className=''>
                                    <div className={styles.fstbtn}>
                                        <button>North Indian</button>
                                        <button>Pan Asian</button>
                                        <button>Continental</button>
                                    </div>
                                    <div className={styles.secbtn}>
                                        <button>Bengali</button>
                                        <button>Indian Chinese</button>
                                        <button>Multi Cuisine</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.menuContainer}>
                        <h1>Create Your Menu</h1>
                        <div className={styles.startersContainer}>
                            <h5>Starters</h5>
                            <div className={styles.starterItems}>
                                <div className={styles.fstItem}>
                                    <img className={styles.itemImage} src="/diy images/starter/image 23.png" />
                                    <div className={styles.itemDetailsContainer}>
                                        <img className={styles.vegLogo} src="/diy images/vegLogo.png" />
                                        <div>
                                            <h4>Paneer Butter<br />Masala</h4>
                                            <p>Classic Choice For Mains</p>
                                        </div>
                                        <div>
                                            <img className={styles.downarrowLogo} src="/diy images/Polygon 9.png" />
                                        </div>
                                        <div>
                                            <div className={styles.quantityBtn}>
                                                <button>-</button>
                                                <h6>5.5 Kg</h6>
                                                <button>+</button>
                                            </div>
                                            <p className={styles.recQnty}>Recommended Qt.</p>
                                        </div>
                                        <div>
                                            <img className={styles.trassLogo} src="/diy images/trash-alt.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className={styles.fstItem}>
                                        <img className={styles.itemImage} src="/diy images/starter/Mask group.png" />
                                        <div className={styles.itemDetailsContainer}>
                                            <img className={styles.vegLogo} src="/diy images/Group 962.png" />
                                            <div>
                                                <h4>Chicken<br />Tandoori</h4>
                                                <p>Classic Choice For Mains</p>
                                            </div>
                                            <div>
                                                <img className={styles.downarrowLogo} src="/diy images/Polygon 9.png" />
                                            </div>
                                            <div>
                                                <div className={styles.quantityBtn}>
                                                    <button>-</button>
                                                    <h6>50 Pcs</h6>
                                                    <button>+</button>
                                                </div>
                                                <p className={styles.recQnty}>Recommended Qt.</p>
                                            </div>
                                            <div>
                                                <img className={styles.trassLogo} src="/diy images/trash-alt.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.addStarterBtnContnr}>
                                    <button className={styles.addStarterBtn}>+ Add Starter</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.mainsContainer}>
                            <h5>Mains</h5>
                            <div className={styles.starterItems}>
                                <div className={styles.fstItem}>
                                    <img className={styles.itemImage} src="/diy images/starter/Mask group.png" />
                                    <div className={styles.itemDetailsContainer}>
                                        <img className={styles.vegLogo} src="/diy images/Group 962.png" />
                                        <div>
                                            <h4>Chicken<br />Tandoori</h4>
                                            <p>Classic Choice For Mains</p>
                                        </div>
                                        <div>
                                            <img className={styles.downarrowLogo} src="/diy images/Polygon 9.png" />
                                        </div>
                                        <div>
                                            <div className={styles.quantityBtn}>
                                                <button>-</button>
                                                <h6>50 Pcs</h6>
                                                <button>+</button>
                                            </div>
                                            <p className={styles.recQnty}>Recommended Qt.</p>
                                        </div>
                                        <div>
                                            <img className={styles.trassLogo} src="/diy images/trash-alt.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className={styles.fstItem}>
                                        <img className={styles.itemImage} src="/diy images/starter/Mask group.png" />
                                        <div className={styles.itemDetailsContainer}>
                                            <img className={styles.vegLogo} src="/diy images/Group 962.png" />
                                            <div>
                                                <h4>Chicken<br />Tandoori</h4>
                                                <p>Classic Choice For Mains</p>
                                            </div>
                                            <div>
                                                <img className={styles.downarrowLogo} src="/diy images/Polygon 9.png" />
                                            </div>
                                            <div>
                                                <div className={styles.quantityBtn}>
                                                    <button>-</button>
                                                    <h6>50 Pcs</h6>
                                                    <button>+</button>
                                                </div>
                                                <p className={styles.recQnty}>Recommended Qt.</p>
                                            </div>
                                            <div>
                                                <img className={styles.trassLogo} src="/diy images/trash-alt.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className={styles.fstItem}>
                                        <img className={styles.itemImage} src="/diy images/starter/image 23.png" />
                                        <div className={styles.itemDetailsContainer}>
                                            <img className={styles.vegLogo} src="/diy images/vegLogo.png" />
                                            <div>
                                                <h4>Paneer Butter<br />Masala</h4>
                                                <p>Classic Choice For Mains</p>
                                            </div>
                                            <div>
                                                <img className={styles.downarrowLogo} src="/diy images/Polygon 9.png" />
                                            </div>
                                            <div>
                                                <div className={styles.quantityBtn}>
                                                    <button>-</button>
                                                    <h6>5.5 Kg</h6>
                                                    <button>+</button>
                                                </div>
                                                <p className={styles.recQnty}>Recommended Qt.</p>
                                            </div>
                                            <div>
                                                <img className={styles.trassLogo} src="/diy images/trash-alt.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className={styles.fstItem}>
                                        <img className={styles.itemImage} src="/diy images/starter/image 23.png" />
                                        <div className={styles.itemDetailsContainer}>
                                            <img className={styles.vegLogo} src="/diy images/vegLogo.png" />
                                            <div>
                                                <h4>Paneer Butter<br />Masala</h4>
                                                <p>Classic Choice For Mains</p>
                                            </div>
                                            <div>
                                                <img className={styles.downarrowLogo} src="/diy images/Polygon 9.png" />
                                            </div>
                                            <div>
                                                <div className={styles.quantityBtn}>
                                                    <button>-</button>
                                                    <h6>5.5 Kg</h6>
                                                    <button>+</button>
                                                </div>
                                                <p className={styles.recQnty}>Recommended Qt.</p>
                                            </div>
                                            <div>
                                                <img className={styles.trassLogo} src="/diy images/trash-alt.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.addStarterBtnContnr}>
                                    <button className={styles.addStarterBtn}>+ Add Mains</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.dessertsContainer}>
                            <h5>Desserts</h5>
                            <div className={styles.starterItems}>
                                <div className={styles.fstItem}>
                                    <img className={styles.itemImage} src="/diy images/starter/image 23.png" />
                                    <div className={styles.itemDetailsContainer}>
                                        <img className={styles.vegLogo} src="/diy images/vegLogo.png" />
                                        <div>
                                            <h4>Paneer Butter<br />Masala</h4>
                                            <p>Classic Choice For Mains</p>
                                        </div>
                                        <div>
                                            <img className={styles.downarrowLogo} src="/diy images/Polygon 9.png" />
                                        </div>
                                        <div>
                                            <div className={styles.quantityBtn}>
                                                <button>-</button>
                                                <h6>5.5 Kg</h6>
                                                <button>+</button>
                                            </div>
                                            <p className={styles.recQnty}>Recommended Qt.</p>
                                        </div>
                                        <div>
                                            <img className={styles.trassLogo} src="/diy images/trash-alt.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className={styles.fstItem}>
                                        <img className={styles.itemImage} src="/diy images/starter/Mask group.png" />
                                        <div className={styles.itemDetailsContainer}>
                                            <img className={styles.vegLogo} src="/diy images/Group 962.png" />
                                            <div>
                                                <h4>Chicken<br />Tandoori</h4>
                                                <p>Classic Choice For Mains</p>
                                            </div>
                                            <div>
                                                <img className={styles.downarrowLogo} src="/diy images/Polygon 9.png" />
                                            </div>
                                            <div>
                                                <div className={styles.quantityBtn}>
                                                    <button>-</button>
                                                    <h6>50 Pcs</h6>
                                                    <button>+</button>
                                                </div>
                                                <p className={styles.recQnty}>Recommended Qt.</p>
                                            </div>
                                            <div>
                                                <img className={styles.trassLogo} src="/diy images/trash-alt.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.addStarterBtnContnr}>
                                    <button className={styles.addStarterBtn}>+ Add Dessert</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.detailsContainer}>
                        <div className={styles.inputContainer}>
                            <h3>Details</h3>
                            <div className={styles.inputField}>
                                <input placeholder="Name" type="text" />
                                <input placeholder="Number" type="number" />
                                <input placeholder="Email" type="email" />
                            </div>
                        </div>
                        <div className={styles.specialRestrictionContainer}>
                            <h6>Special Restrictions? Chef Note?</h6>
                            <input type="text" />
                        </div>
                        <div>
                            <button>Get Instant Quote</button>
                        </div>
                    </div>
                    <div className={styles.chooseYourServiceContainer}>
                        <h4>Choose Your Service</h4>
                        <div className={styles.serviceImg}>
                            <img src="/diy images/Group 947.png" />
                            <img src="/diy images/Group 944.png" />
                        </div>
                    </div>
                    <div className={styles.pricingListContainer}>
                        <div className={styles.discount}>
                            <h4>Discount Coupon</h4>
                            <div className={styles.inputBtn}>
                                <input type="text" placeholder="Enter Code" />
                                <button type="button">Apply</button>
                            </div>
                        </div>
                        <div className={styles.pricing}>
                            <div className={styles.optionCnt}>
                                <div>
                                    <select>
                                        <option value="volvo">NinjaBox - Delivery (Free)</option>
                                        <option value="saab">Buffet setup + 1 waiter (+Rs. 3500.00)</option>
                                    </select>
                                </div>
                                <div>
                                    <p>0000</p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.pricingTitle1}>
                                    <div>
                                        <h4>Food Items Total</h4>
                                    </div>
                                    <div>
                                        <p>0000</p>
                                    </div>
                                </div>
                                <div className={styles.pricingTitle2}>
                                    <div>
                                        <h4>Delivery Charges <span>(Free Upto 10 Km)</span></h4>
                                    </div>
                                    <div>
                                        <p>0000</p>
                                    </div>
                                </div>
                                <hr className={styles.hr1} />
                                <div className={styles.pricingTitle3}>
                                    <div>
                                        <h4>Coupon Value</h4>
                                    </div>
                                    <div>
                                        <p>0000</p>
                                    </div>
                                </div>
                                <div className={styles.pricingTitle4}>
                                    <div>
                                        <h4>GST</h4>
                                    </div>
                                    <div>
                                        <p>0000</p>
                                    </div>
                                </div>
                                <hr id={styles.hr2}/>
                            </div>
                            <div className={styles.grandTotal}>
                                <div>
                                    <h4>Grand Total</h4>
                                </div>
                                <div>
                                    <p>0000</p>
                                </div>
                            </div>
                            <div className={styles.orderBtn}>
                                <button>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstantQuote
