import styles from "$styles/Footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube ,faAddressBook} from "@fortawesome/free-brands-svg-icons";

export default function Footer()
{
    return (
        <div className="container mt-2">
        <footer className={styles.footer}>
            <div className={styles.row +" row"}>
                <div className={styles.heading + " col-lg-4 col-md-4 col-sm-12 footer-logo"}>
                    <div className={styles.text}>
                        <img src="CaterNinja (1).png" alt="Caterninja"/>
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

                <div className={styles.copyright +  " col-md-4 copyright"}>
                    <p>© 2022 CaterNinja. All Rights Reserved.</p>

                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 flex-column footer-contract">
                    <Link passHref={true} href='https://goo.gl/maps/Xf1DK7xMR6PZ4tMG7'>
                        <div className={styles.contact}>
                            <img src='address-book.png'></img>
                            <div className={styles.address}>
                                CaterNinja<br />
                                GraveyTech Catering Ventures Pvt Ltd.<br />
                                Bangalore, Mumbai and Delhi NCR
                            </div>
                        </div></Link>
                    <Link passHref={true} href='tel:+9108047176666'>
                        <div className={styles.contact}>
                            
                            <img src='phone.png'></img>
                           
                        
                        08047176666</div>
                    </Link>
                    <Link passHref={true} href='mailto:admin@caterninja.com'>
                        <div className={styles.contact}><img src='envelope.png'></img>admin@caterninja.com</div>
                    </Link>
                </div>
            </div>
        </footer>
        </div>
    );
}