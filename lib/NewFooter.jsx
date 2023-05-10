import React from 'react'
import styles from '/styles/NewFooter.module.scss';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

const NewFooter = () => {

    // const [showPopup, setShowPopup] = useState(false);
    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');

    // useEffect(() => {
    //     window.addEventListener('beforeunload', handleBeforeUnload);
      
    //     return () => {
    //       window.removeEventListener('beforeunload', handleBeforeUnload);
    //     };
    //   }, []);
      
    //   const handleBeforeUnload = (event) => {
    //     event.preventDefault();
    //     setShowPopup(true);
    //     event.returnValue = 'r u sure?';
    //   };

    // useEffect(()=>{
    //     const handleTabClose = event => {
    //         event.preventDefault();
    //         console.log("event triggred");
    //         setShowPopup(true);
    //         return (event.returnValue = 'Are you human being?');
    //     };

    //     window.addEventListener('beforeunload', handleTabClose);

    //     return () => {
    //         window.removeEventListener('beforeunload', handleTabClose);
    //     };
    // }, []);

    // function submitForm(event) {
    //     event.preventDefault();
    //     setName(name);
    //     console.log(name);
    //     setShowPopup(false);
    // }

    // const cancelBtn = () => {
    //     setShowPopup(false);
    // };

    return (
        <div>
            {/* {showPopup && (
                <form><div className={styles.popupUserDetails}>
                    <h3>Do you want a call back ?</h3>
                    <p>*Please fill the details below</p>
                    <div className={styles.namePhoneContainer}>
                        <div id={styles.nameSecn}>
                            <h6>Name :</h6>
                            <input type="text" value={name} onChange={(event) => setName(event.target.value)}></input>
                        </div>
                        <div id={styles.phoneSecn}>
                            <h6>Phone :</h6>
                            <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)}></input>
                        </div>
                    </div>
                    <div className={styles.btnSection}>
                        <button id={styles.btn1} type="button" onClick={cancelBtn}>Cancel</button>
                        <button id={styles.btn2} type="submit" onClick={submitForm}>Submit</button>
                    </div>
                </div></form>
            )} */}
            <footer className={styles.footerContainer}>
                <div className={styles.insideContent}>
                    <div>
                        <div className={styles.caterninjaLogo}>
                            <img src="/CaterNinja logo/caterninja.webp" alt="Caterninja" />
                        </div>
                        <div className={styles.footer_socials}>
                            <ul className={styles.links} >
                                <li>
                                    <Link href='https://www.instagram.com/caterninja/' ><a target='_blank'><FontAwesomeIcon className={styles.icon} icon={faInstagram}></FontAwesomeIcon></a></Link>
                                </li>
                                <li>
                                    <Link href='https://www.facebook.com/CaterNinja/' ><a target='_blank'><FontAwesomeIcon className={styles.icon} icon={faFacebook}></FontAwesomeIcon></a></Link>
                                </li>
                                <li>
                                    <Link href='https://www.youtube.com/channel/UC_lMKzsQnJ6R2LaIR49fvSA' ><a target='_blank'><FontAwesomeIcon className={styles.icon} icon={faYoutube}></FontAwesomeIcon></a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.copyright}>
                        <p>© 2023 CaterNinja. All Rights Reserved.</p>
                    </div>
                    <div className={styles.address}>
                        <h3>Contact Us</h3>
                        <Link passHref={true} href='#'><div className={styles.caterninja}>
                            <img src='address-book.png' />
                            <h4>CaterNinja<br />GraveyTech Catering Ventures Pvt<br />Ltd. Bangalore, Mumbai and Delhi<br />NCR</h4>
                        </div></Link>
                        <Link passHref={true} href='tel:+9108047176666'><div className={styles.number}>
                            <img src='phone.png' />
                            <h4>08047176666</h4>
                        </div></Link>
                        <Link passHref={true} href='mailto:admin@caterninja.com'><div className={styles.email}>
                            <img src='envelope.png' />
                            <h4>admin@caterninja.com</h4>
                        </div></Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default NewFooter