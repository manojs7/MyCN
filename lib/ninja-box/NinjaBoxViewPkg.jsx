import React, { useEffect, useState } from 'react'
import styles from '/styles/ViewPackage.module.scss';
import 'bootstrap/dist/css/bootstrap.css';
import styles2 from "/styles/NewCustomizePkg.module.scss";
import Link from 'next/link';
import Swal from "sweetalert2";
import { useAppMenu } from "$lib/menuContext";

const NinjaBoxViewPkg = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [showDiv, setShowDiv] = useState(false);

    const { menu, cuisines, allMenus, cities, occasions } = useAppMenu();

    const [city, setCity] = useState("");
    const [occasion, setOccasion] = useState("");
    const [itemSelected, setItemSelected] = useState()
    const [selectedDate, setSelectedDate] = useState()
    const [vegCount, setVegCount] = useState()
    const [nonVegCount, setNonVegCount] = useState()
    const [details, setDetails] = useState()
    const [price, setPrice] = useState()
    const [image, setImage] = useState()

    const handleCity = (city) => {
        setCity(city);
    }
    const handleOccasion = (occasion) => {
        setOccasion(occasion);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === "" || phone.trim() === "" || email.trim() === "") {
            //alert("Please fill out all details!");
            Swal.fire({
                text: "Please fill out all details!",
                icon: "warning",
                confirmButtonText: "OK",
            });
        } else {
            setShowDiv(true);
        }
    };

    useEffect(() => {
        let dataSelected = JSON.parse(sessionStorage.getItem("dataSelected"))
        // sessionStorage.removeItem("dataSelected")
        setCity(dataSelected['city'])
        setVegCount(dataSelected['vcount'])
        setNonVegCount(dataSelected['nvcount'])
        setSelectedDate(dataSelected['selectedDate'])
        setOccasion(dataSelected['occasion'])
        setName(dataSelected.itemSelected['name'])
        setDetails(dataSelected.itemSelected['details'])
        setPrice(dataSelected.itemSelected['price'])
        setImage(dataSelected.itemSelected['img'])
        console.log(dataSelected)
    }, [])
    return (
        <div className={styles.customizeMainContainer}>
            <div className={styles.customizeMainContainer}>
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <img id={styles.ninjaLogo} src='/CustomizeImg/CaterNinjaLogo.png' width="91.6px" height="19.49px" />
                        <div className={styles.textLogo}>
                            <div>
                                <h3>View your</h3>
                                <h2 id={styles.ninjaBoxTitle}>Ninja<span>Box</span></h2>
                                <h5>You can also customise your<br />package below!</h5>
                            </div>
                            <div>
                                <img id={styles.ninja} src='/CustomizeImg/Group 267 (1).png' width="102.33px" height="132.73px" />
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.pkgCardHeader}>
                        <div>
                            <h3>PACKAGE NAME</h3>
                            <img src='555.png' />
                            <h5>X Starters + X Mains + X Desserts</h5>
                            <h4> XXXX</h4>
                            <p>(For 20 Guests)</p>
                        </div>
                    </div> */}
                </div>
                <div className={styles.redBg}>
                    {/* <div className={styles.cityContainer}>
                        <div className={styles.cityflexLg}>
                            <h3>City</h3>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Mumbai</option>
                                <option value="1">Bangalore</option>
                                <option value="2">Delhi</option>
                                <option value="3">Gurgaon</option>
                            </select>
                        </div>
                    </div> */}
                    <div className={styles.redContent}>
                        <div className={styles.cityDateContainer}>
                            <div>
                                <p>City</p>
                                <div>
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
                            </div>
                            <div>
                                <p>Date</p>
                                <div>
                                    <input type="date" value={selectedDate}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.guestCountContainer}>
                            <div>
                                <p>Veg Count</p>
                                <div>
                                    <input value={vegCount}></input>
                                </div>
                            </div>
                            <div>
                                <p>N-Veg Count</p>
                                <div>
                                    <input value={nonVegCount}></input>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cityDateContainer}>
                            <div>
                                <p>Occasion</p>
                                <div>
                                    <select
                                        name="occasion"
                                        aria-label="Default select example"
                                        value={occasion}
                                        onChange={(e) => handleOccasion(e.target.value)}
                                    >
                                        <option value="" selected>
                                            Select Occasion
                                        </option>
                                        {occasions.map((item, index) => {
                                            return (
                                                <option key={index} value={item}>
                                                    {item}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.whiteBg}>
                        <div className={styles.packageName}>
                            <h3>{name}</h3>
                            <img src={image} height="150px" width="274.5px" />
                            <h6>{details}</h6>
                            {/* <div>
                                <p id={styles.vegGuest}>Veg Guests<span>: 10</span></p>
                                <p id={styles.nonVeg}>Non Veg Guests<span>: 10</span></p>
                            </div> */}
                            <h5>₹ {price}</h5>
                        </div>
                        <div className={styles.pkgDetails}>
                            <div>
                                <h3>{name}</h3>
                                <h5>{details}</h5>
                                <div>
                                    <p id={styles.vegGuest}>Veg Guests<span>: {vegCount}</span></p>
                                    <p id={styles.nonVegGuest}>Non Veg Guests<span>: {nonVegCount}</span></p>
                                </div>
                                <div>
                                    <h6>₹ {price}</h6>
                                </div>
                            </div>
                            <div>
                                <img id={styles.pkgImg} src={image} width="366px" height="200px" />
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
                                                <div className={styles.pcs}>
                                                    <p>000pcs</p>
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
                                                    <div className={styles.pcs}>
                                                        <p>000pcs</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className={styles2.MenuHr} />
                                <div className={styles2.imgDesc} id="d2">
                                    <p>*Images are for representation purpose only</p>
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
                                                <div className={styles.pcs}>
                                                    <p>000pcs</p>
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
                                                    <div className={styles.pcs}>
                                                        <p>000pcs</p>
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
                                                    <div className={styles.pcs}>
                                                        <p>000pcs</p>
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
                                                    <div className={styles.pcs}>
                                                        <p>000pcs</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className={styles2.MenuHr} />
                                <div className={styles2.imgDesc} id="d2">
                                    <p>*Images are for representation purpose only</p>
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
                                                <div className={styles.pcs}>
                                                    <p>000pcs</p>
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
                                                    <div className={styles.pcs}>
                                                        <p>000pcs</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className={styles2.MenuHr} />
                                <div className={styles2.imgDesc} id="d2">
                                    <p>*Images are for representation purpose only</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className='mt-5'>
                            <div className={styles.userInput}>
                                <h4>Details*</h4>
                                <div className={styles.detailsInputLg}>
                                    <input placeholder='Name' />
                                    <input placeholder='Number' />
                                    <input placeholder='E-Mail' />
                                </div>
                            </div>
                        </div> */}
                        <div className="mt-5">
                            <div className={styles2.userInput}>
                                <h4>Details*</h4>
                                <form className={styles2.detailsInputLg}>
                                    <input
                                        placeholder="Name"
                                        onInput={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <input
                                        placeholder="Phone No."
                                        name="mobileno"
                                        onInput={(e) => setPhone(e.target.value)}
                                        maxLength="10"
                                        required
                                    />
                                    <input
                                        placeholder="Email"
                                        name="email"
                                        onInput={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </form>
                            </div>
                        </div>
                        <div className={styles.chefNote}>
                            <input placeholder='Special Restriction? Chef Note?' type="text" />
                        </div>
                        <div className={styles.btnContnr}>
                            <div>
                                <button onClick={handleSubmit} id={styles.cnfrmPkg}>Check Price</button>
                            </div>
                            <div>
                                <button onClick={() => window.open('/customiseNinjaBox', '_blank')} id={styles.custmPkg}>Customise Package</button>
                            </div>
                        </div>
                        {/* <div style={{marginBottom: "10px"}} className={styles.instantQuoteBtn}>
                            <button>Get Instant Quote</button>
                        </div> */}
                        {/* <div className={styles.applyCoupon}>
                            <input type="text" placeholder='Enter Coupon Code' />
                            <button>Apply</button>
                        </div> */}
                        {showDiv && (<div className={styles.pricing}>
                            <div>
                                <div className={styles.pricingTitle1}>
                                    <div>
                                        <h4>Items Total</h4>
                                    </div>
                                    <div>
                                        <p>₹0000</p>
                                    </div>
                                </div>
                                {/* <div className={styles.pricingTitle11}>
                                    <div>
                                        <h4>Buffet Service</h4>
                                    </div>
                                    <div>
                                        <p>₹0000</p>
                                    </div>
                                </div> */}
                                {/* <div className={styles.pricingTitle2}>
                                    <div>
                                        <h4>Delivery Charges <span>(Free Upto 10 Km)</span></h4>
                                    </div>
                                    <div>
                                        <p>₹0000</p>
                                    </div>
                                </div> */}
                                <hr className={styles.hr1} />
                                {/* <div className={styles.pricingTitle3}>
                                    <div>
                                        <h4>Coupon Value</h4>
                                    </div>
                                    <div>
                                        <p>₹0000</p>
                                    </div>
                                </div> */}
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
                            <div className={styles2.dlvryChrg}>
                                <p>*Delivery charges as per actual</p>
                            </div>
                            <div className={styles.orderBtn}>
                                <Link href="https://api.whatsapp.com/send?phone=917738096313&text=Hey!%20Need%20help%20booking%20a%20DIY%20Menu"><button>Get Booking Help</button></Link>
                            </div>
                        </div>)}
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

export default NinjaBoxViewPkg