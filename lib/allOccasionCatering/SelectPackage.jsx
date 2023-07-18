import React, { useEffect, useState } from 'react'
import styles from '/styles/AllOccasionCatering.module.scss';
import styles2 from '/styles/BirthdayParty.module.scss';
import Image from 'next/image';

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
                        <Image src="/ODC/Group 84.png" width="129.07px" height="92.06px" />
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
            </div>
        </div>
    )
}

export default SelectPackage