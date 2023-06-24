import React, { useState, useRef, useEffect } from 'react';
import styles from '/styles/BirthdayParty.module.scss';
import Image from 'next/image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";

const BirthdayAddOns = () => {

    const [city, setCity] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [vegCount, setVegCount] = useState();
    const [nvCount, setNvCount] = useState();

    //background image
    const backgroundStyle = {
        backgroundImage: 'url("/birthdayParty/birthdayBg.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    //live counter header background image
    const livecounterheader = {
        backgroundImage: 'url("/birthdayParty/livecountervector.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    const liveCounterList = [
        { id: 1, name: 'Veg Pasta Station', price: "₹70/-" },
        { id: 2, name: 'Chicken Pasta Station', price: "₹70/-" },
        { id: 3, name: 'Poori Bhaji / Chole', price: "₹70/-" },
        { id: 4, name: 'Chole Bhatture', price: "₹70/-" },
        { id: 5, name: 'Chole Kulche', desc: '(Backed)', price: "₹70/-" },
        { id: 6, name: 'Momo Veg / Chicken', price: "₹70/-" },
        { id: 7, name: 'Chaat Station', desc: '(Paani Puri Papdi Chaat)', price: "₹70/-" },
        { id: 8, name: 'Appam With Stew', price: "₹70/-" },
        { id: 9, name: 'Dosa Station', desc: '(With Chutny)', price: "₹70/-" },
      ];

    const mainCourseList = [
        { id: 1, name: 'Veg Dum Biryani', price: "₹35/-" },
        { id: 2, name: 'Chicken Dum Biryani', price: "₹70/-" },
        { id: 3, name: 'Mutton Dum Biryani', price: "₹120/-" },
    ]

    const funEatablesList = [
        { id: 1, name: 'Cotton Candy', price: "₹35/-" },
        { id: 2, name: 'Popcorn Station', price: "₹70/-" },
        { id: 3, name: 'Chocolate Fountain', price: "₹120/-" },
        { id: 3, name: 'Ice Gola Station', price: "₹120/-" },
        { id: 3, name: 'Potato Swiris', price: "₹120/-" },
        { id: 3, name: 'Waffle Station', price: "₹120/-" },
    ]

    const totalGuestCount = vegCount + nvCount ;

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
            <div className={styles.addonsHeader}>
                <h3>Select Add On's</h3>
            </div>
            <hr/>
            <div className={styles.liveCountersSection}>
                <div className={styles.header} style={livecounterheader}>
                    <h4 >🔥 Live Counters 🔥</h4>
                </div>
                <h6>Per <span>Person</span> Prices</h6>
                {liveCounterList.map((items, index) => (<div key={index} className={styles.itemsListContainer}>
                    <div className={styles.list}>
                        <h4>🔥 {items.name}</h4>
                    </div>
                    <div>
                        { totalGuestCount >= 50 ?<button><FontAwesomeIcon icon={faPlus} style={{marginRight: "10px", color: "white"}}/>{items.price}</button> :
                        <button><FontAwesomeIcon icon={faPlus} style={{marginRight: "10px", color: "white"}}/>Add</button>}
                    </div>
                </div>))}
            </div>
            <hr/>
            <div className={styles.liveCountersSection}>
                <div className={styles.header} style={livecounterheader}>
                    <h4 >Main Course</h4>
                </div>
                <h6>Per <span>Person</span> Prices</h6>
                {mainCourseList.map((items, index) => (<div key={index} className={styles.itemsListContainer}>
                    <div className={styles.list}>
                        <h4>{items.name}</h4>
                    </div>
                    <div>
                        <button><FontAwesomeIcon icon={faPlus} style={{marginRight: "10px", color: "white"}}/>{items.price}</button>
                    </div>
                </div>))}
            </div>
            <hr />
            <div className={styles.liveCountersSection}>
                <div className={styles.header} style={livecounterheader}>
                    <h4 >Fun Eatables</h4>
                </div>
                <h6>Per <span>Counter</span> Prices</h6>
                <h5>₹5,000/-</h5>
                <h3>(Max 100 Qty Counters)</h3>
                {funEatablesList.map((items, index) => (<div key={index} className={styles.itemsListContainer}>
                    <div className={styles.list}>
                        <h4>{items.name}</h4>
                    </div>
                    <div>
                        <button><FontAwesomeIcon icon={faPlus} style={{marginRight: "10px", color: "white"}}/>Add</button>
                    </div>
                </div>))}
            </div>
            <hr />
            <div className={styles.checkpriceBtn}>
                <button>Check Price <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    )
}

export default BirthdayAddOns