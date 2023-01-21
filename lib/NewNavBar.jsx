import React from 'react'
import styles from "$styles/NewNavBar.module.scss";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThin, faChevronRight } from "@fortawesome/free-solid-svg-icons";


const NewNavBar = () => {

    return (
        <div className='mobileNavbar'>
            <nav className="navbar py-3">
                <div className="container-fluid">
                    <button className="navbar-toggler" id={styles.btn} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img id={styles.hmbg} src='hamburger.png' width="21.19px" height="11.91px" />
                    </button>
                    <Link href='/'><a><img id={styles.midLogo} src='CaterNinja (1).png' width="119px" height="24px" /></a></Link>
                    <img src='bottomNavLogo.png' width="29.64px" height="30.06px" />
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto my-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}
                            <li className="nav-item d-flex align-items-center">
                                <img id={styles.navImg} src='nav1.png' height="33px" width="52.8px" />
                                <Link href="/ninjabox"><a  id={styles.navLink} className="nav-link">Ninja<span>Box</span></a></Link>
                                {/* <div className={styles.rightArrow}>
                                    <FontAwesomeIcon icon={faChevronRight}/>
                                </div> */}
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <img id={styles.navImg} src='nav1.png' height="33px" width="52.8px" />
                                <Link href="/ninjabuffet"><a id={styles.navLink} className="nav-link" >Ninja<span>Buffet</span></a></Link>
                                {/* <div className={styles.rightArrow}>
                                    <FontAwesomeIcon icon={faChevronRight}/>
                                </div> */}
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <img id={styles.navImg} src='nav1.png' height="33px" width="52.8px" />
                                <Link href="/mealbox"><a id={styles.navLink} className="nav-link" >Meal<span>Box</span></a></Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <img id={styles.navImg} src='nav1.png' height="33px" width="52.8px" />
                                <Link href="/snackbox"><a id={styles.navLink} className="nav-link" >Snack<span>Box</span></a></Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <img id={styles.navImg} src='nav1.png' height="33px" width="52.8px" />
                                <Link href="/ninjaclassic"><a id={styles.navLink} className="nav-link" >Ninja<span>Classic</span></a></Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <img id={styles.navImg} src='nav1.png' height="33px" width="52.8px" />
                                <Link href="/gourmet"><a id={styles.navLink} className="nav-link" >Ninja<span>Gourmet</span></a></Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                            <Link href="https://www.caterninja.com/about-us"><a id={styles.navLink} className="nav-link"  target="_blank">About<span>Us</span></a></Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                            <Link href="https://www.caterninja.com/blog/"><a id={styles.navLink} className="nav-link"  target="_blank">Blogs</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <div className={styles.navContainer}>
                <div className={styles.contents}>
                    <div>
                        <img src='hamburger.png' width="21.19px" height="11.91px" />
                    </div>
                    <div>
                        <img src='CaterNinja (1).png' width="119px" height="24px" />
                    </div>
                    <div>
                        <Link href="javascript:void(0)" onclick={() => myFunction()} ><img src='bottomNavLogo.png' width="29.64px" height="30.06px" /></Link>
                    </div>
                </div>
            </div>
            <div className={styles.navMenu}>
                <nav className="nav-drill">
                    <ul className="nav-items nav-level-1">
                        <li className="nav-item nav-expand">
                            <a className="nav-link nav-expand-link" href="#">
                                Ninja<span>Box</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            Ninja<span>Buffet</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            Meal<span>Box</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            Ninja<span>Box</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            Snack<span>Box</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div> */}
            <Helmet>
                <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <Link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            </Helmet>
        </div >
    )
}

export default NewNavBar