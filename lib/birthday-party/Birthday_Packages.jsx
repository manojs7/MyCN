import React, { useState, useRef, useEffect } from 'react';
import styles from '/styles/BirthdayParty.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong, faMagnifyingGlass, faAngleDown, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const Birthday_Packages = () => {
    
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [extraStarter, setExtraStarter] = useState([]);
    const [goldPackage, setGoldPackage] = useState([]);
    const [silverPackage, setSilverPackage] = useState([]);
    const [nvGoldPackage, setNvGoldPackage] = useState([]);
    const [nvSilverPackage, setNvSilverPackage] = useState([]);
    const [customPackage, setCustomPackage] = useState([]);

    const [city, setCity] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [vegCount, setVegCount] = useState();
    const [nvCount, setNvCount] = useState();

    const [showVegSnackInfo, setShowVegSnackInfo] = useState(false);
    const [showVegHeavySnackInfo, setShowVegHeavySnackInfo] = useState(false);
    const [showDessertInfo, setShowDessertInfo] = useState(false);

    const [showVegSnackInfo2, setShowVegSnackInfo2] = useState(false);
    const [showVegHeavySnackInfo2, setShowVegHeavySnackInfo2] = useState(false);
    const [showDessertInfo2, setShowDessertInfo2] = useState(false);

    const [showVegSnackInfo3, setShowVegSnackInfo3] = useState(false);
    const [showVegHeavySnackInfo3, setShowVegHeavySnackInfo3] = useState(false);
    const [showDessertInfo3, setShowDessertInfo3] = useState(false);
    const [showNvSnack, setShowNvSnack] = useState(false);
    const [showHvNvHeavySnack, setShowHvNvHeavySnack] = useState(false);

    const [showVegSnackInfo4, setShowVegSnackInfo4] = useState(false);
    const [showVegHeavySnackInfo4, setShowVegHeavySnackInfo4] = useState(false);
    const [showDessertInfo4, setShowDessertInfo4] = useState(false);
    const [showNvSnack2, setShowNvSnack2] = useState(false);
    const [showHvNvHeavySnack2, setShowHvNvHeavySnack2] = useState(false);

    //veg snack
    const handleMouseEnter = () => {
        setShowVegSnackInfo(true);
    };

    const handleMouseLeave = () => {
        setShowVegSnackInfo(false);
    };

    const handleClick = () => {
        setShowVegSnackInfo((prevShow) => !prevShow);
    };

    //veg heavy snack
    const handleMouseEnter2 = () => {
        setShowVegHeavySnackInfo(true);
    };

    const handleMouseLeave2 = () => {
        setShowVegHeavySnackInfo(false);
    };

    const handleClick2 = () => {
        setShowVegHeavySnackInfo((prevShow) => !prevShow);
    };

    //dessert
    const handleMouseEnter3 = () => {
        setShowDessertInfo(true);
    };

    const handleMouseLeave3 = () => {
        setShowDessertInfo(false);
    };

    const handleClick3 = () => {
        setShowDessertInfo((prevShow) => !prevShow);
    };

    //FOR SILVER
    //veg snack
    const handleMouseEnter4 = () => {
        setShowVegSnackInfo2(true);
    };

    const handleMouseLeave4 = () => {
        setShowVegSnackInfo2(false);
    };

    const handleClick4 = () => {
        setShowVegSnackInfo2((prevShow) => !prevShow);
    };

    //veg heavy snack
    const handleMouseEnter5 = () => {
        setShowVegHeavySnackInfo2(true);
    };

    const handleMouseLeave5 = () => {
        setShowVegHeavySnackInfo2(false);
    };

    const handleClick5 = () => {
        setShowVegHeavySnackInfo2((prevShow) => !prevShow);
    };

    //dessert
    const handleMouseEnter6 = () => {
        setShowDessertInfo2(true);
    };

    const handleMouseLeave6 = () => {
        setShowDessertInfo2(false);
    };

    const handleClick6 = () => {
        setShowDessertInfo2((prevShow) => !prevShow);
    };

    //FOR NV SILVER
    //veg snack
    const handleMouseEnter10 = () => {
        setShowVegSnackInfo4(true);
    };

    const handleMouseLeave10 = () => {
        setShowVegSnackInfo4(false);
    };

    const handleClick10 = () => {
        setShowVegSnackInfo4((prevShow) => !prevShow);
    };

    //veg heavy snack
    const handleMouseEnter11 = () => {
        setShowVegHeavySnackInfo4(true);
    };

    const handleMouseLeave11 = () => {
        setShowVegHeavySnackInfo4(false);
    };

    const handleClick11 = () => {
        setShowVegHeavySnackInfo4((prevShow) => !prevShow);
    };

    //dessert
    const handleMouseEnter12 = () => {
        setShowDessertInfo4(true);
    };

    const handleMouseLeave12 = () => {
        setShowDessertInfo4(false);
    };

    const handleClick12 = () => {
        setShowDessertInfo4((prevShow) => !prevShow);
    };

    //nv Snack
    const nvSnackEnter2 = () => {
        setShowNvSnack2(true);
    };

    const nvSnackLeave2 = () => {
        setShowNvSnack2(false);
    };

    const nvSnackClick2 = () => {
        setShowNvSnack2((prevShow) => !prevShow);
    };

    //nv Snack
    const nvHvSnackEnter2 = () => {
        setShowHvNvHeavySnack2(true);
    };

    const nvHvSnackLeave2 = () => {
        setShowHvNvHeavySnack2(false);
    };

    const nvHvSnackClick2 = () => {
        setShowHvNvHeavySnack2((prevShow) => !prevShow);
    };

    //FOR NV GOLD
    //veg snack
    const handleMouseEnter7 = () => {
        setShowVegSnackInfo3(true);
    };

    const handleMouseLeave7 = () => {
        setShowVegSnackInfo3(false);
    };

    const handleClick7 = () => {
        setShowVegSnackInfo3((prevShow) => !prevShow);
    };

    //veg heavy snack
    const handleMouseEnter8 = () => {
        setShowVegHeavySnackInfo3(true);
    };

    const handleMouseLeave8 = () => {
        setShowVegHeavySnackInfo3(false);
    };

    const handleClick8 = () => {
        setShowVegHeavySnackInfo3((prevShow) => !prevShow);
    };

    //dessert
    const handleMouseEnter9 = () => {
        setShowDessertInfo3(true);
    };

    const handleMouseLeave9 = () => {
        setShowDessertInfo3(false);
    };

    const handleClick9 = () => {
        setShowDessertInfo3((prevShow) => !prevShow);
    };

    //nv Snack
    const nvSnackEnter = () => {
        setShowNvSnack(true);
    };

    const nvSnackLeave = () => {
        setShowNvSnack(false);
    };

    const nvSnackClick = () => {
        setShowNvSnack((prevShow) => !prevShow);
    };

    //nv Snack
    const nvHvSnackEnter = () => {
        setShowHvNvHeavySnack(true);
    };

    const nvHvSnackLeave = () => {
        setShowHvNvHeavySnack(false);
    };

    const nvHvSnackClick = () => {
        setShowHvNvHeavySnack((prevShow) => !prevShow);
    };



    //packages
    const vegPackages = {
        goldPackage: {
            name: "GOLD",
            veg: true,
            price: 550,
            items: ["Veg Snack", "Veg Heavy Snack", "Dessert"],
            quantity: ["Any 4", "Any 3", "Any 2"],
            vegSnackQnty: 4,
            vegHeavySnackQnty: 3,
            dessertQnty: 2
        },
        silverPackage: {
            name: "SILVER",
            veg: true,
            price: 450,
            items: ["Veg Snack", "Veg Heavy Snack", "Dessert"],
            quantity: ["Any 3", "Any 3", "Any 2"],
            vegSnackQnty: 3,
            vegHeavySnackQnty: 3,
            dessertQnty: 2
        },
        nvGoldPackage: {
            name: "GOLD NV",
            veg: false,
            price: 650,
            items: ["Veg Snack", "Non Veg Snack", "Veg Heavy Snack", "NV Heavy Snack", "Dessert"],
            quantity: ["Any 2", "Any 3", "Any 2", "Any 1", "Any 2"],
            vegSnackQnty: 2,
            nonVegSnackQnty: 3,
            vegHeavySnackQnty: 2,
            nonVegHeavySnackQnty: 1,
            dessertQnty: 2
        },
        nvSilverPackage: {
            name: "SILVER NV",
            veg: false,
            price: 570,
            items: ["Veg Snack", "Non Veg Snack", "Veg Heavy Snack", "NV Heavy Snack", "Dessert"],
            quantity: ["Any 2", "Any 3", "Any 2", "Any 1", "Any 2"],
            vegSnackQnty: 2,
            nonVegSnackQnty: 3,
            vegHeavySnackQnty: 2,
            nonVegHeavySnackQnty: 1,
            dessertQnty: 2
        },
        customPackage: {
            name: "CUSTOM",
            veg: false,
            price: 0,
            items: ["Veg Snack", "Non Veg Snack", "Veg Heavy Snack", "NV Heavy Snack", "Dessert"],
            quantity: ["Any 2", "Any 3", "Any 2", "Any 1", "Any 2"],
            vegSnackQnty: 2,
            nonVegSnackQnty: 3,
            vegHeavySnackQnty: 2,
            nonVegHeavySnackQnty: 1,
            dessertQnty: 2
        }
    }


    const selectPackageOne = () => {
        // Save packageOne data in session storage
        sessionStorage.setItem('packageOne', JSON.stringify(vegPackages.goldPackage));

        // Set the packageData state to trigger a re-render
        setGoldPackage(vegPackages.goldPackage);

        // Open new page to show the data
        window.open('/customiseBirthdayPkg', '_self');
        // return () => {
        //     sessionStorage.removeItem('packageOne' && 'packageTwo');
        //   };
    };

    const selectPackageTwo = () => {
        // Save packageOne data in session storage
        sessionStorage.setItem('packageOne', JSON.stringify(vegPackages.silverPackage));

        // Set the packageData state to trigger a re-render
        setSilverPackage(vegPackages.silverPackage);

        // Open new page to show the data
        window.open('/customiseBirthdayPkg', '_self');
        // return () => {
        //     sessionStorage.removeItem('packageOne' && 'packageTwo');
        //   };
    };

    const selectPackageThree = () => {
        // Save packageOne data in session storage
        sessionStorage.setItem('packageOne', JSON.stringify(vegPackages.nvGoldPackage));

        // Set the packageData state to trigger a re-render
        setNvGoldPackage(vegPackages.nvGoldPackage);

        // Open new page to show the data
        window.open('/customiseBirthdayPkg', '_self');
        // return () => {
        //     sessionStorage.removeItem('packageOne' && 'packageTwo');
        //   };
    };

    const selectPackageFour = () => {
        // Save packageOne data in session storage
        sessionStorage.setItem('packageOne', JSON.stringify(vegPackages.nvSilverPackage));

        // Set the packageData state to trigger a re-render
        setNvSilverPackage(vegPackages.nvSilverPackage);

        // Open new page to show the data
        window.open('/customiseBirthdayPkg', '_self');
        // return () => {
        //     sessionStorage.removeItem('packageOne' && 'packageTwo');
        //   };
    };

    const selectCustomPkg = () => {
        // Save packageOne data in session storage
        sessionStorage.setItem('packageOne', JSON.stringify(vegPackages.customPackage));

        // Set the packageData state to trigger a re-render
        setCustomPackage(vegPackages.customPackage);

        // Open new page to show the data
        window.open('/customBirthdayPkg', '_self');
        // return () => {
        //     sessionStorage.removeItem('packageOne' && 'packageTwo');
        //   };
    };

    //Starter selector
    const [showDiv, setShowDiv] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowDiv(false);
        }
    };

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

    useEffect(() => {
        let selectedBirthdayPkg = JSON.parse(sessionStorage.getItem("selectedBirthdayPkg"));
        console.log('selectedBirthdayPkg', selectedBirthdayPkg)
        // sessionStorage.removeItem("dataSelected")
        if (selectedBirthdayPkg) {
            setCity(selectedBirthdayPkg["city"]);
            setSelectedDate(selectedBirthdayPkg["selectedDate"]);
            setVegCount(selectedBirthdayPkg["vegCount"]);
            setNvCount(selectedBirthdayPkg["nvCount"]);

        }
    }, []);

    return (
        <div style={backgroundStyle} className={styles.mainBody}>
            <div className={styles.headerSectn}>
                <div className={styles.logo}>
                    <Image src="/birthdayParty/birthdayPartyLogo.png" width="91px" height="74px" />
                </div>
                <div className={styles.headerDetails}>
                    <div>
                        <h6>City: <span>{city}</span></h6>
                        <h6>Veg Count: <span>{vegCount}</span></h6>
                    </div>
                    <div>
                        <h6>Date: <span>{selectedDate}</span></h6>
                        <h6>NV Count: <span>{nvCount}</span></h6>
                    </div>
                </div>
            </div>
            <div className={styles.packagesContainer}>
                <h3>Select Your package</h3>
                <hr />
                <h4 id={styles.custTitle}>Customization Available</h4>
                <div className={styles.packages}>
                    <div className={styles.firstRow}>
                        <div className={styles.goldPkg}>
                            <div className={styles.blackbg}>
                                <div>
                                    <div id={styles.vector}>
                                        <Image src="/birthdayParty/Vectorr.png" height="24.6px" width="108.53px" />
                                    </div>
                                    <p>GOLD</p>
                                </div>
                                <div className={styles.insideContent}>
                                    {/* <h4>₹ 550/-</h4>
                                    <p>Per Person</p> */}
                                    <div className={styles.btns}>
                                        {showVegSnackInfo && <div className={styles.hoverDetails}>
                                            <h1>Cheese Balls, French Fries, etc.</h1>
                                        </div>}
                                        {showVegHeavySnackInfo && <div className={styles.hoverDetails}>
                                            <h1>Noodles, Sandwich, etc.</h1>
                                        </div>}
                                        {showDessertInfo && <div className={styles.hoverDetails}>
                                            <h1>Fruit Custard, Phirni, etc.</h1>
                                        </div>}
                                        <div id={styles.btnName}>
                                            <h6 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}><FontAwesomeIcon icon={faCircleInfo} size='lg' /> Veg Snack</h6>
                                            <h6 onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} onClick={handleClick2}><FontAwesomeIcon icon={faCircleInfo} size='lg' /> Veg Heavy Snack</h6>
                                            <h6 onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} onClick={handleClick3}><FontAwesomeIcon icon={faCircleInfo} size='lg' /> Dessert</h6>
                                        </div>
                                        <div id={styles.greenBtn}>
                                            <h6>Any 4</h6>
                                            <h6>Any 3</h6>
                                            <h6>Any 2</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.goldPkg}>
                            <div className={styles.blackbg}>
                                <div>
                                    <div id={styles.vector}>
                                        <Image src="/birthdayParty/Vector2.png" height="24.6px" width="108.53px" />
                                    </div>
                                    <p style={{ marginLeft: "50px" }}>SILVER</p>
                                </div>
                                <div className={styles.insideContent}>
                                    {/* <h4>₹ 450/-</h4>
                                    <p>Per Person</p> */}
                                    <div className={styles.btns}>
                                        {showVegSnackInfo2 && <div className={styles.hoverDetails}>
                                            <h1>Cheese Balls, French Fries, etc.</h1>
                                        </div>}
                                        {showVegHeavySnackInfo2 && <div className={styles.hoverDetails}>
                                            <h1>Noodles, Sandwich, etc.</h1>
                                        </div>}
                                        {showDessertInfo2 && <div className={styles.hoverDetails}>
                                            <h1>Fruit Custard, Phirni, etc.</h1>
                                        </div>}
                                        <div id={styles.btnName}>
                                            <h6 onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} onClick={handleClick4}><FontAwesomeIcon icon={faCircleInfo} size='lg' /> Veg Snack</h6>
                                            <h6 onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5} onClick={handleClick5}><FontAwesomeIcon icon={faCircleInfo} size='lg' /> Veg Heavy Snack</h6>
                                            <h6 onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6} onClick={handleClick6}><FontAwesomeIcon icon={faCircleInfo} size='lg' /> Dessert</h6>
                                        </div>
                                        <div id={styles.greenBtn}>
                                            <h6>Any 3</h6>
                                            <h6>Any 2</h6>
                                            <h6>Any 1</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.selectBtn}>
                        <button onClick={selectPackageOne}>Select This Package</button>
                        <button onClick={selectPackageTwo}>Select This Package</button>
                    </div>
                    {nvCount >= 1 ? <div className={styles.secondRow}>
                        <div className={styles.nvGoldPkg}>
                            <div className={styles.blackbg}>
                                <div>
                                    <div id={styles.vector}>
                                        <Image src="/birthdayParty/Vectorr.png" height="24.6px" width="108.53px" />
                                    </div>
                                    <p style={{ marginLeft: "40px" }}>GOLD NV</p>
                                </div>
                                <div className={styles.insideContent}>
                                    {/* <h4>₹ 650/-</h4>
                                    <p>Per Person</p> */}
                                    <div className={styles.btns}>
                                    {showVegSnackInfo3 && <div className={styles.hoverDetails}>
                                            <h1>Cheese Balls, French Fries, etc.</h1>
                                        </div>}
                                        {showVegHeavySnackInfo3 && <div className={styles.hoverDetails}>
                                            <h1>Noodles, Sandwich, etc.</h1>
                                        </div>}
                                        {showDessertInfo3 && <div className={styles.hoverDetails}>
                                            <h1>Fruit Custard, Phirni, etc.</h1>
                                        </div>}
                                        {showNvSnack && <div className={styles.hoverDetails}>
                                            <h1>Chicken Tikka, Nuggets, etc.</h1>
                                        </div>}
                                        {showHvNvHeavySnack && <div className={styles.hoverDetails}>
                                            <h1>Chicken Noodles, Burger, etc.</h1>
                                        </div>}
                                        <div id={styles.btnName}>
                                            <h6 onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7} onClick={handleClick7}><FontAwesomeIcon icon={faCircleInfo} size='lg' /> Veg Snack</h6>
                                            <h6 onMouseEnter={nvSnackEnter} onMouseLeave={nvSnackLeave} onClick={nvSnackClick}><FontAwesomeIcon icon={faCircleInfo} size='lg' /> Non Veg Snack</h6>
                                            <h6 onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8} onClick={handleClick8}><FontAwesomeIcon icon={faCircleInfo} size='lg' /> Veg Heavy Snack</h6>
                                            <h6 onMouseEnter={nvHvSnackEnter} onMouseLeave={nvHvSnackLeave} onClick={nvHvSnackClick}><FontAwesomeIcon icon={faCircleInfo} size='lg' /> NV Heavy Snack</h6>
                                            <h6 onMouseEnter={handleMouseEnter9} onMouseLeave={handleMouseLeave9} onClick={handleClick9}><FontAwesomeIcon icon={faCircleInfo} size='lg' /> Dessert</h6>
                                        </div>
                                        <div id={styles.greenBtn}>
                                            <h6>Any 2</h6>
                                            <h6 style={{ backgroundColor: "#BC0A01" }}>Any 3</h6>
                                            <h6>Any 2</h6>
                                            <h6 style={{ backgroundColor: "#BC0A01" }}>Any 1</h6>
                                            <h6>Any 2</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.nvGoldPkg}>
                            <div className={styles.blackbg}>
                                <div>
                                    <div id={styles.vector}>
                                        <Image src="/birthdayParty/Vector2.png" height="24.6px" width="108.53px" />
                                    </div>
                                    <p style={{ marginLeft: "33px" }}>SILVER NV</p>
                                </div>
                                <div className={styles.insideContent}>
                                    {/* <h4>₹ 570/-</h4>
                                    <p>Per Person</p> */}
                                    <div className={styles.btns}>
                                    {showVegSnackInfo4 && <div className={styles.hoverDetails}>
                                            <h1>Cheese Balls, French Fries, etc.</h1>
                                        </div>}
                                        {showVegHeavySnackInfo4 && <div className={styles.hoverDetails}>
                                            <h1>Noodles, Sandwich, etc.</h1>
                                        </div>}
                                        {showDessertInfo4 && <div className={styles.hoverDetails}>
                                            <h1>Fruit Custard, Phirni, etc.</h1>
                                        </div>}
                                        {showNvSnack2 && <div className={styles.hoverDetails}>
                                            <h1>Chicken Tikka, Nuggets, etc.</h1>
                                        </div>}
                                        {showHvNvHeavySnack2 && <div className={styles.hoverDetails}>
                                            <h1>Chicken Noodles, Burger, etc.</h1>
                                        </div>}
                                        <div id={styles.btnName}>
                                            <h6 onMouseEnter={handleMouseEnter10} onMouseLeave={handleMouseLeave10} onClick={handleClick10}><FontAwesomeIcon icon={faCircleInfo} size='lg' /> Veg Snack</h6>
                                            <h6 onMouseEnter={nvSnackEnter2} onMouseLeave={nvSnackLeave2} onClick={nvSnackClick2}><FontAwesomeIcon icon={faCircleInfo} size='lg' /> Non Veg Snack</h6>
                                            <h6 onMouseEnter={handleMouseEnter11} onMouseLeave={handleMouseLeave11} onClick={handleClick11}><FontAwesomeIcon icon={faCircleInfo} size='lg' /> Veg Heavy Snack</h6>
                                            <h6 onMouseEnter={nvHvSnackEnter2} onMouseLeave={nvHvSnackLeave2} onClick={nvHvSnackClick2}><FontAwesomeIcon icon={faCircleInfo} size='lg' /> NV Heavy Snack</h6>
                                            <h6 onMouseEnter={handleMouseEnter12} onMouseLeave={handleMouseLeave12} onClick={handleClick12}><FontAwesomeIcon icon={faCircleInfo} size='lg' /> Dessert</h6>
                                        </div>
                                        <div id={styles.greenBtn}>
                                            <h6>Any 2</h6>
                                            <h6 style={{ backgroundColor: "#BC0A01" }}>Any 2</h6>
                                            <h6>Any 1</h6>
                                            <h6 style={{ backgroundColor: "#BC0A01" }}>Any 1</h6>
                                            <h6>Any 1</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ""}
                    {nvCount >= 1 ? <div className={styles.selectBtn}>
                        <button onClick={selectPackageThree}>Select This Package</button>
                        <button onClick={selectPackageFour}>Select This Package</button>
                    </div> : ""}
                </div>
            </div>
            <div className='text-center'>
                <div style={{ position: "relative", zIndex: "1" }}>
                    <div className={styles.smselectItemSearchBox} id="srchbr">
                        <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select A Snack</h6>
                        <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                    </div>
                    <div className={styles.smselectItemSearchBox} id="srchbr">
                        <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select A Heavy Snack</h6>
                        <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                    </div>
                    <div className={styles.smselectItemSearchBox} id="srchbr">
                        <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select A Dessert</h6>
                        <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                    </div>
                    <div className={styles.addMoreBtn}>
                        <button>+ Add More</button>
                    </div>
                </div>
                <div style={{ marginTop: "-120px" }}>
                    <Image src="/birthdayParty/custom.png" width="179px" height="130px" />
                </div>
            </div>
            <div className={styles.selectCustomPkg}>
                <button onClick={selectCustomPkg}>Customize Package</button>
            </div>
            <div className={styles.bottomSectn} style={btmPng}>
                <div className={styles.top} style={btmPngCard}>
                    <h6>Fun Eatables, Live Counters<br />Main Course Add On's</h6>
                    <button>On Next Page</button>
                </div>
            </div>
            {/* <div className={styles.pkgContainer}>
                <h3>-Packages-</h3>
                <div className={styles.pkgCards}>
                    <div className={styles.pkg1}>
                        <h5>GOLD</h5>
                        <div className={styles.cardBg}>
                            <h4>Rs.550/-</h4>
                            <div>
                                <div className='d-flex justify-content-between'>
                                    <p>Veg Snack-</p>
                                    <button onMouseEnter={handleHover}>Any 4</button>
                                    {showDiv && (<div className={styles.vegSnackOptions} ref={ref}>
                                        <ul>
                                            {options.map((option) => (
                                                <li key={option.id}>
                                                    <p>{option.label}</p>
                                                    <input htmlFor={option.id}
                                                        type="checkbox"
                                                        id={option.id}
                                                        checked={selectedOptions.indexOf(option.id) !== -1}
                                                        onChange={() => handleOptionSelect(option.id)}
                                                        disabled={selectedOptions.indexOf(option.id) === -1 && selectedOptions.length >= 4}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                        <hr />
                                        <ul>
                                            {extraOptions.map((option) => (
                                                <li key={option.id} onClick={() => handleLiClick(option.id)}>
                                                    <p>{option.label}{!extraStarter.includes(option.id) && extraStarter.length >= 2 && <span>Ex</span>}</p>
                                                    <input htmlFor={option.id}
                                                        type="checkbox"
                                                        id={option.id}
                                                        checked={extraStarter.includes(option.id)}
                                                        onChange={() => handleCheckboxChange(option.id)}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>)}
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p style={{ textAlign: "start" }}>Veg Heavy Snack-</p>
                                    <button>Any 3</button>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Dessert-</p>
                                    <button>Any 2</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.pkg1}>
                        <h5>SILVER</h5>
                        <h4>Rs.450/-</h4>
                        <div>
                            <div className='d-flex'>
                                <p>Veg Snack-</p>
                                <button>Any 3</button>
                                <div className={styles.silverVegSnackContainer}>
                                        <ul>
                                            <li>
                                                <p>title</p>
                                                <input type="checkbox" />
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                            <div className='d-flex'>
                                <p>Veg Heavy Snack-</p>
                                <button>Any 2</button>
                            </div>
                            <div className='d-flex'>
                                <p>Dessert-</p>
                                <button>Any 1</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div>
                <p>Selected options:</p>
                <ul>
                    {selectedOptions.map((optionId) => {
                        const option = options.find((opt) => opt.id === optionId);
                        return <li key={optionId}>{option.label}</li>;
                    })}
                </ul>
            </div>
            <div>
                <p>Extra items:</p>
                <ul>
                    {extraStarter.map((optionId) => {
                        const extraStarter = extraOptions.find((option) => option.id === optionId);
                        return <li key={extraStarter.id}>{extraStarter.label}</li>;
                    })}
                </ul>
            </div> */}
            {/* <div>
                <div className={styles.slidercontainer}>
                    <div className={styles.slider}>
                        {items.map((item, index) => (
                            <Item key={index} name={item.name} price={item.price} />
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Birthday_Packages