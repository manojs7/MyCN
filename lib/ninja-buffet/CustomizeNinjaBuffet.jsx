import React from 'react'
import styles from '/styles/NewCustomizePkg.module.scss';
import 'bootstrap/dist/css/bootstrap.css';

const CustomizeNinjaBuffet = () => {
    return (
        <div className={styles.customizeMainContainer}>
            <div className={styles.customizeMainContainer}>
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <img id={styles.ninjaLogo} src='/CustomizeImg/CaterNinjaLogo.png' width="91.6px" height="19.49px" />
                        <div className={styles.textLogo}>
                            <div>
                                <h3>Customize your</h3>
                                <h2 id={styles.ninjaBuffetTitle}>Ninja<span>Buffet</span></h2>
                                <h5>Get instant quote in just few<br />easy steps!</h5>
                            </div>
                            <div>
                                <img id={styles.ninjaBuffy} src='/CustomizeImg/NinjaBuffy.png'/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ninjaBuffyHpkg}>
                        <img src='/CustomizeImg/Group 853.png' width="281.81px" height="218px" />
                    </div>
                </div>
                <div className={styles.redBg}>
                    <div className={styles.cityContainer}>
                        <div className={styles.cityflexLg}>
                            <h3>City</h3>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Mumbai</option>
                                <option value="1">Bangalore</option>
                                <option value="2">Delhi</option>
                                <option value="3">Gurgaon</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.whiteBg}>
                        <div className={styles.packageName}>
                            <h3>PACKAGE NAME</h3>
                            <img src='555.png' height="150px" width="274.5px" />
                            <h6>Starters + X Mains + X Desserts</h6>
                            <div>
                                <p id={styles.vegGuest}>Veg Guests<span>: 10</span></p>
                                <p id={styles.nonVeg}>Non Veg Guests<span>: 10</span></p>
                            </div>
                        </div>
                        <div className={styles.pkgDetails}>
                            <div>
                                <h3>PACKAGE NAME</h3>
                                <h5>X Starters + X Mains + X Desserts</h5>
                                <div>
                                    <p id={styles.vegGuest}>Veg Guests<span>: 10</span></p>
                                    <p id={styles.nonVegGuest}>Non Veg Guests<span>: 10</span></p>
                                </div>
                            </div>
                            <div>
                                <img id={styles.pkgImg} src='555.png' width="366px" height="200px" />
                            </div>
                        </div>
                        <div>
                            <div className={styles.menuContainer}>
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
                                                    <div className={styles.recQnty}>
                                                        <p>Recommended Qt.</p>
                                                    </div>
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
                                                        <div className={styles.recQnty}>
                                                            <p>Recommended Qt.</p>
                                                        </div>
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
                                <div className={styles.startersContainer}>
                                    <h5 className='mt-5'>Mains</h5>
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
                                                    <div className={styles.recQnty}>
                                                        <p>Recommended Qt.</p>
                                                    </div>
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
                                                        <div className={styles.recQnty}>
                                                            <p>Recommended Qt.</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className={styles.trassLogo} src="/diy images/trash-alt.png" />
                                                    </div>
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
                                                        <div className={styles.recQnty}>
                                                            <p>Recommended Qt.</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className={styles.trassLogo} src="/diy images/trash-alt.png" />
                                                    </div>
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
                                                        <div className={styles.recQnty}>
                                                            <p>Recommended Qt.</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className={styles.trassLogo} src="/diy images/trash-alt.png" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.addStarterBtnContnr}>
                                            <button className={styles.addStarterBtn}>+ Add Main</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.startersContainer}>
                                    <h5 className='mt-5'>Desserts</h5>
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
                                                    <div className={styles.recQnty}>
                                                        <p>Recommended Qt.</p>
                                                    </div>
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
                                                        <div className={styles.recQnty}>
                                                            <p>Recommended Qt.</p>
                                                        </div>
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
                        </div>
                        <div className='mt-5'>
                            <div className={styles.userInput}>
                                <h4>Details*</h4>
                                <div className={styles.detailsInputLg}>
                                    <input placeholder='Name' />
                                    <input placeholder='Number' />
                                    <input placeholder='E-Mail' />
                                </div>
                            </div>
                        </div>
                        <div className={styles.chefNote}>
                            <p>Special Restriction? Chef Note?</p>
                            <input type="text" />
                        </div>
                        <div className={styles.instantQuoteBtn}>
                            <button>Get Instant Quote</button>
                        </div>
                        <div className={styles.applyCoupon}>
                            <input type="text" placeholder='Enter Coupon Code' />
                            <button>Apply</button>
                        </div>
                        <div className={styles.pricing}>
                            <div>
                                <div className={styles.pricingTitle1}>
                                    <div>
                                        <h4>Items Total</h4>
                                    </div>
                                    <div>
                                        <p>₹0000</p>
                                    </div>
                                </div>
                                <div className={styles.pricingTitle11}>
                                    <div>
                                        <h4>NinjaBuffet Setup + 1 Waiter</h4>
                                    </div>
                                    <div>
                                        <p>₹0000</p>
                                    </div>
                                </div>
                                <div className={styles.pricingTitle2}>
                                    <div>
                                        <h4>Delivery Charges <span>(Free Upto 10 Km)</span></h4>
                                    </div>
                                    <div>
                                        <p>₹0000</p>
                                    </div>
                                </div>
                                <hr className={styles.hr1} />
                                <div className={styles.pricingTitle3}>
                                    <div>
                                        <h4>Coupon Value</h4>
                                    </div>
                                    <div>
                                        <p>₹0000</p>
                                    </div>
                                </div>
                                <div className={styles.pricingTitle4}>
                                    <div>
                                        <h4>GST</h4>
                                    </div>
                                    <div>
                                        <p>₹0000</p>
                                    </div>
                                </div>
                                <hr id={styles.hr2} />
                            </div>
                            <div className={styles.grandTotal}>
                                <div>
                                    <h4>Grand Total</h4>
                                </div>
                                <div>
                                    <p>₹0000</p>
                                </div>
                            </div>
                            <div className={styles.orderBtn}>
                                <button>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.createYourOwnPkg}>
                    <div>
                        <img src='Group 803.png' />
                    </div>
                    <div className='text-center mt-3'>
                        <p>Not Happy with the Package?</p>
                        <h2>Create Your<span>Own</span></h2>
                        <h6>Curate your own flavour of party<br />from variety of cuisines</h6>
                        <button>Create Your Own Package</button>
                    </div>
                </div>
            </div>
            {/* <div className={styles.header}>
                <div className={styles.headerContent}>
                    <div>
                        <img id={styles.ninjaLogo} src='/CustomizeImg/CaterNinjaLogo.png' width="186.97px" height="39.79px" />
                        <h2>Customise Your</h2>
                        <h1>Ninja<span>Box</span></h1>
                        <p>Get instant quote in just few<br />easy steps!</p>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <img id={styles.ninja} src='/CustomizeImg/Group 267.png' width="208.89px" height="270.92px" />
                        </div>
                        <div>
                            <img id={styles.pkgImg} src='NB.png' width="376.91px" height="291.56px" />
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className={styles.packageContainer}>
                <div className={styles.page}>
                    <div className={styles.cityContent}>
                        <div>
                            <h3>City</h3>
                        </div>
                        <div>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Mumbai</option>
                                <option value="1">Bangalore</option>
                                <option value="2">Delhi</option>
                                <option value="3">Gurgaon</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.bgWhiteClr}>
                        <div className={styles.pkgDetails}>
                            <div>
                                <h3>PACKAGE NAME</h3>
                                <h5>X Starters + X Mains + X Desserts</h5>
                                <div>
                                    <p id={styles.vegGuest}>Veg Guests<span>: 10</span></p>
                                    <p id={styles.nonVegGuest}>Non Veg Guests<span>: 10</span></p>
                                </div>
                            </div>
                            <div>
                                <img id={styles.pkgImg} src='555.png' width="366px" height="200px" />
                            </div>
                        </div>
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
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default CustomizeNinjaBuffet