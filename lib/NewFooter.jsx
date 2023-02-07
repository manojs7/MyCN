import React from 'react'
import styles from '/styles/NewFooter.module.scss';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube, faAddressBook } from "@fortawesome/free-brands-svg-icons";

const NewFooter = () => {
    return (
        <div>
            <footer className={styles.footerContainer}>
                <div className={styles.insideContent}>
                    <div>
                        <div className={styles.caterninjaLogo}>
                            <img src="CaterNinja (1).png" alt="Caterninja" />
                        </div>
                        <div className={styles.footer_socials}>
                            <ul className={styles.links} >
                                <li>
                                    <Link href='https://www.instagram.com/caterninja/' ><a><FontAwesomeIcon className={styles.icon} icon={faInstagram}></FontAwesomeIcon></a></Link>
                                </li>
                                <li>
                                    <Link href='https://www.facebook.com/CaterNinja/' ><a><FontAwesomeIcon className={styles.icon} icon={faFacebook}></FontAwesomeIcon></a></Link>
                                </li>
                                <li>
                                    <Link href='https://www.youtube.com/channel/UC_lMKzsQnJ6R2LaIR49fvSA' ><a><FontAwesomeIcon className={styles.icon} icon={faYoutube}></FontAwesomeIcon></a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.copyright}>
                        <p>© 2022 CaterNinja. All Rights Reserved.</p>
                    </div>
                    <div className={styles.address}>
                        <h3>Contact Us</h3>
                        <Link passHref={true} href='https://goo.gl/maps/Xf1DK7xMR6PZ4tMG7'><div className={styles.caterninja}>
                            <img src='address-book.png' />
                            <h4>CaterNinja<br/>GraveyTech Catering Ventures Pvt<br/>Ltd. Bangalore, Mumbai and Delhi<br/>NCR</h4>
                        </div></Link>
                        <Link passHref={true} href='tel:+9108047176666'><div className={styles.number}>
                            <img src='phone.png'/>
                            <h4>08047176666</h4>
                        </div></Link>
                        <Link passHref={true} href='mailto:admin@caterninja.com'><div className={styles.email}>
                            <img src='envelope.png'/>
                            <h4>admin@caterninja.com</h4>
                        </div></Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default NewFooter