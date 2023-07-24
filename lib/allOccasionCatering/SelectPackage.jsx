import React, { useEffect, useState } from 'react'
import styles from '/styles/AllOccasionCatering.module.scss';
import styles2 from '/styles/BirthdayParty.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong, faMagnifyingGlass, faAngleDown, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const SelectPackage = () => {

    const [city, setCity] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [vegCount, setVegCount] = useState();
    const [nvCount, setNvCount] = useState();

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
                                    <button>@ 625/- <span>pp</span></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.card} style={{ border: "1px solid green" }}>
                                <div style={vegtag} className={styles.nvtag}>
                                    <h4>VALUE VEG 2</h4>
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
                                    <button>@ 625/- <span>pp</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mb-5'>
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
                                    <button>@ 625/- <span>pp</span></button>
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
                                <button>Create Your Own Package</button>
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
                                    <h5>1 Veg Starter</h5>
                                    <h5>1 Starter - <span>Chicken</span></h5>
                                    <h5>1 Salad</h5>
                                    <h5>1 Bread</h5>
                                    <h5>1 Veg dry / gravy</h5>
                                    <h5>1 Daal</h5>
                                    <h5>1 Non veg gravy - <span>Chicken</span></h5>
                                    <h5>1 Rice 1 Dessert</h5>
                                    <h5>Curd, Pickle & Pappad</h5>
                                </div>
                            </div>
                            <div className={styles.selectPkgBtn}>
                                <div style={{ marginTop: "2px" }}>
                                    <Image src="/ODC/nvlogo.png" width="20.731px" height="20.731px" />
                                </div>
                                <div>
                                    <button>@ 625/- <span>pp</span></button>
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
                                    <h5>1 Starter - <span>Chicken</span></h5>
                                    <h5>1 Salad</h5>
                                    <h5>1 Bread</h5>
                                    <h5>1 Veg dry / gravy</h5>
                                    <h5>1 Daal</h5>
                                    <h5>1 Non veg gravy - <span>Chicken</span></h5>
                                    <h5>1 Rice 1 Dessert</h5>
                                    <h5>Curd, Pickle & Pappad</h5>
                                </div>
                            </div>
                            <div className={styles.selectPkgBtn}>
                                <div style={{ marginTop: "2px" }}>
                                    <Image src="/ODC/nvlogo.png" width="20.731px" height="20.731px" />
                                </div>
                                <div>
                                    <button>@ 625/- <span>pp</span></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.card}>
                                <div style={nvtag} className={styles.nvtag}>
                                    <h4>VALUE NON-VEG 3</h4>
                                </div>
                                <div className={styles.blackCard}>
                                    <h5>1 Veg Starter</h5>
                                    <h5>1 Starter - <span>Chicken</span></h5>
                                    <h5>1 Salad</h5>
                                    <h5>1 Bread</h5>
                                    <h5>1 Veg dry / gravy</h5>
                                    <h5>1 Daal</h5>
                                    <h5>1 Non veg gravy - <span>Chicken</span></h5>
                                    <h5>1 Rice 1 Dessert</h5>
                                    <h5>Curd, Pickle & Pappad</h5>
                                </div>
                            </div>
                            <div className={styles.selectPkgBtn}>
                                <div style={{ marginTop: "2px" }}>
                                    <Image src="/ODC/nvlogo.png" width="20.731px" height="20.731px" />
                                </div>
                                <div>
                                    <button>@ 625/- <span>pp</span></button>
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
                                    <button>@ 625/- <span>pp</span></button>
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
                                    <button>@ 625/- <span>pp</span></button>
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
                                    <button>@ 625/- <span>pp</span></button>
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
                        <button>Create Your Own Package</button>
                    </div>
                </div> : ""}
                <div className={styles.bottomtag} style={btmPngCard}>
                    <h6>🔥Live Counters & Add On's🔥</h6>
                    <button>On <span>Next</span> Page</button>
                </div>
                <div className='d-flex justify-content-between' style={{ marginTop: "-120px" }}>
                    <div>
                        <Image src="/ODC/leftborder.png" width="163.91px" height="231px" />
                    </div>
                    <div>
                        <Image src="/ODC/rightborder.png" width="163.91px" height="231px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectPackage