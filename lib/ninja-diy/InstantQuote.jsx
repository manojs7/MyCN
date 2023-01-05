import React from 'react'
import styles from '$styles/InstantQuote/InstantQuote.module.scss';

const InstantQuote = () => {
    return (
        <div className={styles.instantQuoteBody}>
            <div className={styles.instantContainer}>
                <div className={styles.header}>
                    <div className={styles.headerIcon}>
                        <img src='Group 966.png' />
                    </div>
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
                                <div className={styles.fstbtn}>
                                    <button>Birthday Party</button>
                                    <button>House-Party</button>
                                    <button>House Warmings</button>
                                </div>
                                <div className={styles.secbtn}>
                                    <button>Pre-Wedding</button>
                                    <button>Office-Party</button>
                                    <button>Other Occassion</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.guestCount}>
                            <h3>Guest Count</h3>
                            <div>
                                <button className={styles.guestBtn1}>Veg Guests</button>
                                <button className={styles.guestBtn2}>Non-Veg Guests</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstantQuote
