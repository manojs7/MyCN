import React, { useEffect, useState } from 'react'
import styles from '/styles/AllOccasionCatering.module.scss';
import styles2 from '/styles/BirthdayParty.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong, faMagnifyingGlass, faAngleDown, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const SelectPackage = () => {

    const [city, setCity] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [vegCount, setVegCount] = useState();
    const [nvCount, setNvCount] = useState();

    //packages
    const allOccasionCateringPkg = {
        valueNonVegOne: {
            name: "VALUE NON VEG 1",
            veg: false,
            price: 625,
            ///items: ["1 Veg Starter", "1 Starter -", "1 Salad", "1 Bread", "1 Veg dry/gravy", "1 Dal", "1 Non veg gravy -", "1 Rice", "1 Dessert", "Curd, Pickle & Pappad"],
            items: [
                {name: "1 Veg Starter", desc: ""},
                {name: "1 Non veg Starter -", desc: " Chicken/Fish"},
                {name: "1 Salad", desc: ""},
                {name: "1 Bread", desc: ""},
                {name: "1 Veg dry/gravy", desc: ""},
                {name: "1 Dal", desc: ""},
                {name: "1 Non veg gravy -", desc: " Chicken/Fish"},
                {name: "1 Rice", desc: ""},
                {name: "1 Dessert", desc: ""},
                {name: "Curd, Pickle & Pappad", desc: ""},
            ],
            vegStarterQnty: 1,
            nvStarterQnty: 1,
            saladQnty: 1,
            breadQnty: 1,
            vegDryQnty: 1,
            vegGravyQnty: 1,
            dalQnty: 1,
            nonVegGravyQnty: 1,
            riceQnty: 1,
            dessertQnty: 1,
            koftaQnty: 0
        },
        valueNonVegTwo: {
            name: "VALUE NON VEG 2",
            veg: false,
            price: 700,
            items: [
                {name: "1 Veg Starter", desc: ""},
                {name: "2 Non veg Starters -", desc: " Chicken/Fish"},
                {name: "1 Salad", desc: ""},
                {name: "1 Bread", desc: ""},
                {name: "1 Veg dry/gravy", desc: ""},
                {name: "1 Dal", desc: ""},
                {name: "2 Non veg gravies -", desc: " Chicken/Fish"},
                {name: "1 Rice", desc: ""},
                {name: "2 Desserts", desc: ""},
                {name: "Curd, Pickle & Pappad", desc: ""},
            ],
            vegStarterQnty: 1,
            nvStarterQnty: 2,
            saladQnty: 1,
            breadQnty: 1,
            vegDryQnty: 1,
            vegGravyQnty: 1,
            dalQnty: 1,
            nonVegGravyQnty: 2,
            riceQnty: 1,
            dessertQnty: 2,
            koftaQnty: 0
        },
        valueNonVegThree: {
            name: "VALUE NON VEG 3",
            veg: false,
            price: 700,
            items: [
                {name: "2 Veg Starter", desc: ""},
                {name: "2 Non veg Starters -", desc: " Chicken/Fish"},
                {name: "1 Salad", desc: ""},
                {name: "1 Bread", desc: ""},
                {name: "1 Veg dry/gravy", desc: ""},
                {name: "1 Dal", desc: ""},
                {name: "2 Non veg gravies -", desc: " Chicken/Fish"},
                {name: "1 Rice", desc: ""},
                {name: "2 Desserts", desc: ""},
                {name: "Curd, Pickle & Pappad", desc: ""},
            ],
            vegStarterQnty: 2,
            nvStarterQnty: 2,
            saladQnty: 1,
            breadQnty: 1,
            vegDryQnty: 1,
            vegGravyQnty: 1,
            dalQnty: 1,
            nonVegGravyQnty: 2,
            riceQnty: 1,
            dessertQnty: 2,
            koftaQnty: 0
        },
        valueVegOne: {
            name: "VALUE VEG 1",
            veg: true,
            price: 375,
            items: [
                {name: "1 Salad", desc: ""},
                {name: "1 Bread", desc: ""},
                {name: "1 Veg dry", desc: ""},
                {name: "1 Dal", desc: ""},
                {name: "1 Rice", desc: ""},
                {name: "1 Dessert", desc: ""},
                {name: "Sambar & Rasam", desc: ""},
                {name: "Curd, Pickle & Pappad", desc: ""},
            ],
            vegStarterQnty: 0,
            nvStarterQnty: 0,
            saladQnty: 1,
            breadQnty: 1,
            vegDryQnty: 1,
            vegGravyQnty: 0,
            dalQnty: 1,
            nonVegGravyQnty: 0,
            riceQnty: 1,
            dessertQnty: 1,
            koftaQnty: 0
        },
        valueVegTwo: {
            name: "VALUE VEG 2",
            veg: true,
            price: 475,
            items: [
                {name: "2 Veg Starters", desc: ""},
                {name: "1 Salad", desc: ""},
                {name: "1 Bread", desc: ""},
                {name: "1 Veg dry", desc: ""},
                {name: "1 Veg/Paneer gravy", desc: ""},
                {name: "1 Kofta curry", desc: ""},
                {name: "1 Dal", desc: ""},
                {name: "1 Rice", desc: ""},
                {name: "2 Desserts", desc: ""},
                {name: "Curd, Pickle & Pappad", desc: ""},
            ],
            vegStarterQnty: 2,
            nvStarterQnty: 0,
            saladQnty: 1,
            breadQnty: 1,
            vegDryQnty: 2,
            vegGravyQnty: 1,
            dalQnty: 1,
            nonVegGravyQnty: 0,
            riceQnty: 1,
            dessertQnty: 2,
            koftaQnty: 1
        },
        valueVegThree: {
            name: "VALUE VEG 3",
            veg: true,
            price: 550,
            items: [
                {name: "3 Veg Starters", desc: ""},
                {name: "1 Salad", desc: ""},
                {name: "1 Bread", desc: ""},
                {name: "1 Veg dry", desc: ""},
                {name: "1 Veg gravy", desc: ""},
                {name: "1 Kofta curry", desc: ""},
                {name: "1 Dal", desc: ""},
                {name: "1 Rice", desc: ""},
                {name: "2 Desserts", desc: ""},
                {name: "Curd, Pickle & Pappad", desc: ""},
            ],
            vegStarterQnty: 3,
            nvStarterQnty: 0,
            saladQnty: 1,
            breadQnty: 1,
            vegDryQnty: 1,
            vegGravyQnty: 1,
            dalQnty: 1,
            nonVegGravyQnty: 0,
            riceQnty: 1,
            dessertQnty: 2,
            koftaQnty: 1
        },
        nonvegCustom: {
            name: "CUSTOM",
            veg: false,
            price: 0
        },
        vegCustom: {
            name: "CUSTOM",
            veg: true,
            price: 0
        }
    }

    //PACKAGE SELECTION
    const selectNvPackageOne = () => {
        // Save selectNvPackageOne data in session storage
        sessionStorage.setItem('aocNvPackageOne', JSON.stringify(allOccasionCateringPkg.valueNonVegOne));

        // Set the packageData state to trigger a re-render
        //setGoldPackage(allOccasionCateringPkg.valueNonVegOne);

        // Open new page to show the data
        window.open('/customizeAocPkg', '_self');
        // return () => {
        //     sessionStorage.removeItem('packageOne' && 'packageTwo');
        //   };
    };
    
    const selectNvPackageTwo = () => {
        // Save selectNvPackageOne data in session storage
        sessionStorage.setItem('aocNvPackageOne', JSON.stringify(allOccasionCateringPkg.valueNonVegTwo));

        // Set the packageData state to trigger a re-render
        //setGoldPackage(allOccasionCateringPkg.valueNonVegOne);

        // Open new page to show the data
        window.open('/customizeAocPkg', '_self');
        // return () => {
        //     sessionStorage.removeItem('packageOne' && 'packageTwo');
        //   };
    };

    const selectNvPackageThree = () => {
        // Save selectNvPackageOne data in session storage
        sessionStorage.setItem('aocNvPackageOne', JSON.stringify(allOccasionCateringPkg.valueNonVegThree));

        // Set the packageData state to trigger a re-render
        //setGoldPackage(allOccasionCateringPkg.valueNonVegOne);

        // Open new page to show the data
        window.open('/customizeAocPkg', '_self');
        // return () => {
        //     sessionStorage.removeItem('packageOne' && 'packageTwo');
        //   };
    };

    const selectVegPackageOne = () => {
        // Save selectNvPackageOne data in session storage
        sessionStorage.setItem('aocNvPackageOne', JSON.stringify(allOccasionCateringPkg.valueVegOne));

        // Set the packageData state to trigger a re-render
        //setGoldPackage(allOccasionCateringPkg.valueNonVegOne);

        // Open new page to show the data
        window.open('/customizeAocPkg', '_self');
        // return () => {
        //     sessionStorage.removeItem('packageOne' && 'packageTwo');
        //   };
    };

    const selectVegPackageTwo = () => {
        // Save selectNvPackageOne data in session storage
        sessionStorage.setItem('aocNvPackageOne', JSON.stringify(allOccasionCateringPkg.valueVegTwo));

        // Set the packageData state to trigger a re-render
        //setGoldPackage(allOccasionCateringPkg.valueNonVegOne);

        // Open new page to show the data
        window.open('/customizeAocPkg', '_self');
        // return () => {
        //     sessionStorage.removeItem('packageOne' && 'packageTwo');
        //   };
    };

    const selectVegPackageThree = () => {
        // Save selectNvPackageOne data in session storage
        sessionStorage.setItem('aocNvPackageOne', JSON.stringify(allOccasionCateringPkg.valueVegThree));

        // Set the packageData state to trigger a re-render
        //setGoldPackage(allOccasionCateringPkg.valueNonVegOne);

        // Open new page to show the data
        window.open('/customizeAocPkg', '_self');
        // return () => {
        //     sessionStorage.removeItem('packageOne' && 'packageTwo');
        //   };
    };

    const selectNonVegCustom = () => {
        // Save selectNvPackageOne data in session storage
        sessionStorage.setItem('aocNvPackageOne', JSON.stringify(allOccasionCateringPkg.nonvegCustom));

        // Set the packageData state to trigger a re-render
        //setGoldPackage(allOccasionCateringPkg.valueNonVegOne);

        // Open new page to show the data
        window.open('/customizeAoc', '_self');
        // return () => {
        //     sessionStorage.removeItem('packageOne' && 'packageTwo');
        //   };
    };

    const selectVegCustom = () => {
        // Save selectNvPackageOne data in session storage
        sessionStorage.setItem('aocNvPackageOne', JSON.stringify(allOccasionCateringPkg.vegCustom));

        // Set the packageData state to trigger a re-render
        //setGoldPackage(allOccasionCateringPkg.valueNonVegOne);

        // Open new page to show the data
        window.open('/customizeAoc', '_self');
        // return () => {
        //     sessionStorage.removeItem('packageOne' && 'packageTwo');
        //   };
    };


    //background image
    const backgroundStyle = {
        backgroundImage: 'url("/ODC/odcbg.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    //nvtag bg
    const nvtag = {
        backgroundImage: 'url("/ODC/nvtag.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    //vegtag bg
    const vegtag = {
        backgroundImage: 'url("/ODC/vegtag.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    //bottom png card bg
    const btmPngCard = {
        backgroundImage: 'url("/ODC/vector.png")',
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
        <div>
            <div className={styles.mainBody} style={backgroundStyle}>
                <div className={styles.headerSectn}>
                    <div className={styles.logo}>
                        <Image src="/ODC/odctop.png" width="129.07px" height="92.06px" />
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
                <div className={styles2.packagesContainer}>
                    <h3>Select Your package</h3>
                    <hr />
                </div>
                <div className={styles.pkgHeader}>
                    <h6><span>Per</span> Person Prices</h6>
                    <h6><span>Uniquely</span> Curated Packages</h6>
                </div>
                {nvCount == "" || nvCount == 0 ? <div>
                    <div className='d-flex justify-content-center'>
                        <div>
                            <div className={styles.card} style={{ border: "1px solid green" }}>
                                <div style={vegtag} className={styles.nvtag}>
                                    <h4>VALUE VEG 1</h4>
                                </div>
                                <div className={styles.blackCard}>
                                    <h5>1 Salad</h5>
                                    <h5>1 Bread</h5>
                                    <h5>1 Veg dry</h5>
                                    <h5>1 Dal</h5>
                                    <h5>1 Rice</h5>
                                    <h5>1 Dessert</h5>
                                    <h5>Sambar & Rasam</h5>
                                    <h5>Curd, Pickle & Pappad</h5>
                                </div>
                            </div>
                            <div className={styles.selectNvPkgBtn}>
                                <div style={{ marginTop: "2px" }}>
                                    <Image src="/ODC/vlogo.png" width="20.731px" height="20.731px" />
                                </div>
                                <div>
                                    <button onClick={selectVegPackageOne}>@ 375/- <span>pp</span></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.card} style={{ border: "1px solid green" }}>
                                <div style={vegtag} className={styles.nvtag}>
                                    <h4>VALUE VEG 2</h4>
                                </div>
                                <div className={styles.blackCard}>
                                    <h5>2 Veg Starters</h5>
                                    <h5>1 Salad</h5>
                                    <h5>1 Bread</h5>
                                    <h5>1 Veg dry</h5>
                                    <h5>1 Veg/Paneer gravy</h5>
                                    <h5>1 Kofta curry</h5>
                                    <h5>1 Dal</h5>
                                    <h5>1 Rice</h5>
                                    <h5>2 Desserts</h5>
                                    <h5>Curd, Pickle & Pappad</h5>
                                </div>
                            </div>
                            <div className={styles.selectNvPkgBtn}>
                                <div style={{ marginTop: "2px" }}>
                                    <Image src="/ODC/vlogo.png" width="20.731px" height="20.731px" />
                                </div>
                                <div>
                                    <button onClick={selectVegPackageTwo}>@ 475/- <span>pp</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mb-5'>
                        <div>
                            <div className={styles.card} style={{ border: "1px solid green" }}>
                                <div style={vegtag} className={styles.nvtag}>
                                    <h4>VALUE VEG 3</h4>
                                </div>
                                <div className={styles.blackCard}>
                                    <h5>3 Veg Starters</h5>
                                    <h5>1 Salad</h5>
                                    <h5>1 Bread</h5>
                                    <h5>1 Veg dry</h5>
                                    <h5>1 Veg gravy</h5>
                                    <h5>1 Kofta curry</h5>
                                    <h5>1 Dal</h5>
                                    <h5>1 Rice</h5>
                                    <h5>2 Desserts</h5>
                                    <h5>Curd, Pickle & Pappad</h5>
                                </div>
                            </div>
                            <div className={styles.selectNvPkgBtn}>
                                <div style={{ marginTop: "2px" }}>
                                    <Image src="/ODC/vlogo.png" width="20.731px" height="20.731px" />
                                </div>
                                <div>
                                    <button onClick={selectVegPackageThree}>@ 550/- <span>pp</span></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.card} style={{ border: "1px solid #F3A400", backgroundColor: 'rgba(255, 255, 255, 0.44)'}}>
                                <div style={vegtag} className={styles.nvtag}>
                                    <h4>CUSTOM</h4>
                                </div>
                                <div className={styles.vegCostomCard}>
                                    <div className={styles.smselectItemSearchBox} id="srchbr">
                                        <h6><FontAwesomeIcon icon={faAngleDown} /> Select A Starter</h6>
                                        {/* <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6> */}
                                    </div>
                                    <div className={styles.smselectItemSearchBox} id="srchbr">
                                        <h6><FontAwesomeIcon icon={faAngleDown} /> Select A Bread</h6>
                                        {/* <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6> */}
                                    </div>
                                    <div className={styles.smselectItemSearchBox} id="srchbr">
                                        <h6><FontAwesomeIcon icon={faAngleDown} /> Select A Gravy</h6>
                                        {/* <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6> */}
                                    </div>
                                    <div className={styles.smselectItemSearchBox} id="srchbr">
                                        <h6><FontAwesomeIcon icon={faAngleDown} /> Select A Dal</h6>
                                        {/* <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6> */}
                                    </div>
                                    <div className={styles.addMoreBtn}>
                                        <button>+ Add More</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.createPkgBtn} style={{ marginTop: "7px" }}>
                                <button onClick={selectVegCustom}>Create Your Own Package</button>
                            </div>
                        </div>
                    </div>
                </div> : ""}
                {nvCount > 0 ? <div>
                    <div className={styles.carousel}>
                        <div>
                            <div className={styles.card}>
                                {/* <div className={styles.pkgtag}>
                                <Image src="/ODC/nvtag.png" width="132.6px" height="23.65px" /> 
                            </div> */}
                                <div style={nvtag} className={styles.nvtag}>
                                    <h4>VALUE NON-VEG 1</h4>
                                </div>
                                <div className={styles.blackCard}>
                                    <h5>1 Veg Starter <FontAwesomeIcon icon={faCircleInfo} size="sm"/></h5>
                                    <h5>1 Starter - <span>Chicken</span></h5>
                                    <h5>1 Salad</h5>
                                    <h5>1 Bread</h5>
                                    <h5>1 Veg dry/gravy</h5>
                                    <h5>1 Daal</h5>
                                    <h5>1 Non veg gravy - <span>Chicken</span></h5>
                                    <h5>1 Rice</h5>
                                    <h5>1 Dessert</h5>
                                    <h5>Curd, Pickle & Pappad</h5>
                                </div>
                            </div>
                            <div className={styles.selectPkgBtn}>
                                <div style={{ marginTop: "2px" }}>
                                    <Image src="/ODC/nvlogo.png" width="20.731px" height="20.731px" />
                                </div>
                                <div>
                                    <button onClick={selectNvPackageOne}>@ 625/- <span>pp</span></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.card}>
                                <div style={nvtag} className={styles.nvtag}>
                                    <h4>VALUE NON-VEG 2</h4>
                                </div>
                                <div className={styles.blackCard}>
                                    <h5>1 Veg Starter</h5>
                                    <h5>2 Non veg Starters - <span>Chicken</span></h5>
                                    <h5>1 Salad</h5>
                                    <h5>1 Bread</h5>
                                    <h5>1 Veg dry/gravy</h5>
                                    <h5>1 Daal</h5>
                                    <h5>2 Non veg gravies<span>(Fish/Chicken)</span></h5>
                                    <h5>1 Rice</h5>
                                    <h5>2 Desserts</h5>
                                    <h5>Curd, Pickle & Pappad</h5>
                                </div>
                            </div>
                            <div className={styles.selectPkgBtn}>
                                <div style={{ marginTop: "2px" }}>
                                    <Image src="/ODC/nvlogo.png" width="20.731px" height="20.731px" />
                                </div>
                                <div>
                                    <button onClick={selectNvPackageTwo}>@ 700/- <span>pp</span></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.card}>
                                <div style={nvtag} className={styles.nvtag}>
                                    <h4>VALUE NON-VEG 3</h4>
                                </div>
                                <div className={styles.blackCard}>
                                    <h5>2 Veg Starters</h5>
                                    <h5>2 Non Veg Starters<span>(Chicken/Fish)</span></h5>
                                    <h5>1 Salad</h5>
                                    <h5>1 Bread</h5>
                                    <h5>1 Veg dry/gravy</h5>
                                    <h5>1 Daal</h5>
                                    <h5>2 Non veg gravies - <span>(Fish/Chicken)</span></h5>
                                    <h5>1 Rice</h5>
                                    <h5>2 Dessert</h5>
                                    <h5>Curd, Pickle & Pappad</h5>
                                </div>
                            </div>
                            <div className={styles.selectPkgBtn}>
                                <div style={{ marginTop: "2px" }}>
                                    <Image src="/ODC/nvlogo.png" width="20.731px" height="20.731px" />
                                </div>
                                <div>
                                    <button onClick={selectNvPackageThree}>@ 775/- <span>pp</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.carousel}>
                        <div>
                            <div className={styles.card} style={{ border: "1px solid green" }}>
                                <div style={vegtag} className={styles.nvtag}>
                                    <h4>VALUE VEG 1</h4>
                                </div>
                                <div className={styles.blackCard}>
                                    <h5>1 Salad</h5>
                                    <h5>1 Bread</h5>
                                    <h5>1 Veg dry</h5>
                                    <h5>1 Dal</h5>
                                    <h5>1 Rice</h5>
                                    <h5>1 Dessert</h5>
                                    <h5>Sambar & Rasam</h5>
                                    <h5>Curd, Pickle & Pappad</h5>
                                </div>
                            </div>
                            <div className={styles.selectNvPkgBtn}>
                                <div style={{ marginTop: "2px" }}>
                                    <Image src="/ODC/vlogo.png" width="20.731px" height="20.731px" />
                                </div>
                                <div>
                                    <button onClick={selectVegPackageOne}>@ 375/- <span>pp</span></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.card} style={{ border: "1px solid green" }}>
                                {/* <div className={styles.pkgtag}>
                                <Image src="/ODC/nvtag.png" width="132.6px" height="23.65px" /> 
                            </div> */}
                                <div style={vegtag} className={styles.nvtag}>
                                    <h4>VALUE VEG 2</h4>
                                </div>
                                <div className={styles.blackCard}>
                                    <h5>2 Veg Starters</h5>
                                    <h5>1 Salad</h5>
                                    <h5>1 Bread</h5>
                                    <h5>1 Veg dry</h5>
                                    <h5>1 Veg/Paneer gravy</h5>
                                    <h5>2 Kofta curry</h5>
                                    <h5>1 Dal</h5>
                                    <h5>1 Rice</h5>
                                    <h5>2 Desserts</h5>
                                    <h5>Curd, Pickle & Pappad</h5>
                                </div>
                            </div>
                            <div className={styles.selectNvPkgBtn}>
                                <div style={{ marginTop: "2px" }}>
                                    <Image src="/ODC/vlogo.png" width="20.731px" height="20.731px" />
                                </div>
                                <div>
                                    <button onClick={selectVegPackageTwo}>@ 475/- <span>pp</span></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.card} style={{ border: "1px solid green" }}>
                                {/* <div className={styles.pkgtag}>
                                <Image src="/ODC/nvtag.png" width="132.6px" height="23.65px" /> 
                            </div> */}
                                <div style={vegtag} className={styles.nvtag}>
                                    <h4>VALUE VEG 3</h4>
                                </div>
                                <div className={styles.blackCard}>
                                    <h5>3 Veg Starters</h5>
                                    <h5>1 Salad</h5>
                                    <h5>1 Bread</h5>
                                    <h5>1 Veg dry</h5>
                                    <h5>1 Veg gravy</h5>
                                    <h5>1 Kofta curry</h5>
                                    <h5>1 Dal</h5>
                                    <h5>1 Rice</h5>
                                    <h5>2 Desserts</h5>
                                    <h5>Curd, Pickle & Pappad</h5>
                                </div>
                            </div>
                            <div className={styles.selectNvPkgBtn}>
                                <div style={{ marginTop: "2px" }}>
                                    <Image src="/ODC/vlogo.png" width="20.731px" height="20.731px" />
                                </div>
                                <div>
                                    <button>@ 550/- <span>pp</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ""}
                {nvCount > 0 ? <div>
                    <div className={styles.customCard}>
                        <div style={{ marginTop: "80px", position: "relative", zIndex: "1" }}>
                            <div className={styles.smselectItemSearchBox} id="srchbr">
                                <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select A Starter</h6>
                                <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                            </div>
                            <div className={styles.smselectItemSearchBox} id="srchbr">
                                <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select A Bread</h6>
                                <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                            </div>
                            <div className={styles.smselectItemSearchBox} id="srchbr">
                                <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select A Gravy</h6>
                                <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                            </div>
                            <div className={styles.smselectItemSearchBox} id="srchbr">
                                <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select A Dal</h6>
                                <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                            </div>
                            <div className={styles.addMoreBtn}>
                                <button>+ Add More</button>
                            </div>
                        </div>
                        <div style={{ marginTop: "-140px" }}>
                            <Image src="/ODC/customCard.png" width="208px" height="160px" />
                        </div>
                    </div>
                    <div className={styles.createPkgBtn}>
                        <button onClick={selectNonVegCustom}>Create Your Own Package</button>
                    </div>
                </div> : ""}
                {/* <div className={styles.bottomtag} style={btmPngCard}>
                    <h6>🔥Live Counters & Add On's🔥</h6>
                    <button>On <span>Next</span> Page</button>
                </div> */}
                <div className='d-flex justify-content-between' style={{ marginTop: "-120px" }}>
                    <div>
                        <Image src="/ODC/leftBtm.png" width="163.91px" height="231px" />
                    </div>
                    <div>
                        <Image src="/ODC/rightbtm.png" width="163.91px" height="231px" />
                    </div>
                </div>
                {/* <div className={styles.detailspopup}>
                    <h6>Veg-Starter(Manchurian, chilly Paneer etc.)</h6>
                    <h6>NonVeg-Starter(Chilly Chicken, Chicken Kabab etc.)</h6>
                    <h6>salad(Green Salad, Russian Salad etc.)</h6>
                    <h6>Veg-dry(Aalo Mutter, Bhindi etc.)</h6>
                    <h6>Veg-gravy(Kadai veg, veg Colapuri etc.)</h6>
                    <h6>Dal(Dal Tadka, Dal Makhni)</h6>
                    <h6>NonVeg-Starter()</h6>
                    <h6>Rice(Veg Pulao, Jeera Pulao etc.)</h6>
                    <h6>Dessert(Sheer Korma, Rice Khir etc.)</h6>
                </div> */}
            </div>
        </div>
    )
}

export default SelectPackage