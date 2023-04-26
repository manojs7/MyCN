import React, { useState } from "react";
import styles from "$styles/Navbar.module.scss";
import Navbar from "./Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-brands-svg-icons";
import { width } from "@mui/system";
import Link from "next/link";

export default function FloatNav2() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div className={styles.float_nav_container}>
      {/* <div float_nav_container
      className={styles.float_nav_burger}
       
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <img height="100%" width="100%" src="hamburger.png" alt="" />

        <FontAwesomeIcon style={{color:'#C22D2E'}}  color='#C22D2E' className={styles.iconNav} icon={faBars}></FontAwesomeIcon>
      </div> */}
      {/* <div>
        <Link href="/"><img height="24px" width="119px" src="caterninja.png" alt=""  /></Link>
      </div>

      <div>
        <img height="auto" width="auto" src="bottomNavLogo.png" alt=""  />
      </div> */}
      <div className={styles.float_nav_button}>
        {/* <button onClick={() => (window.open('tel:08047176666'))}>
          {" "}
          <span style={{ color: "#B70C10" }}>Call a Ninja </span>
          <br />
          Instant Order
        </button>
        <button onClick={() => (window.location.href = "https://caterninja.com/shop/catering")}>
          <span style={{ color: "#B70C10" }}>Custom Menu</span>
          <br />
          Instant Price
        </button> */}
        <div className={styles.bottomBtn2}>
          {/* <div id="float1btn">
            <img onClick={() => (window.location.href = "https://caterninja.com/shop/catering")} src="Group 894.png" width="80"  />
          </div> */}
          <div>
            <img onClick={() => (window.open('tel:08047176666'))} src="Group 1073.png" width="80"  />
          </div>
          <div>
            <img onClick={() => window.open('https://api.whatsapp.com/send?phone=917738096313&text=Hi Need Menu and Prices', '_blank')} src="Group 1074.png" width="80"  />
          </div>
        </div>
      </div>

      <div
        className={
          isNavExpanded
            ? styles.float_nav_content
            : styles.float_nav_content_not
        }
      >
        <ul id="links" style={{ marginRight: "50px" }}>
          <li>
            <Link href="/">
              <a onClick={() => burger_click()}>
                {" "}
                <img
                  height="40px"
                  width="159px"
                  src="caterninja.png"
                  alt="logo"
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ninjabox">
              <a onClick={() => burger_click()}>
                {" "}
                <span style={{ color: "#BE2D30" }}>Ninja</span>Box
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ninjabuffet">
              <a onClick={() => burger_click()}>
                <span style={{ color: "#BE2D30" }}>Ninja</span>Buffet
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href="/ninjaclassic">
              <a onClick={() => burger_click()}>
                <span style={{ color: "#BE2D30" }}>Ninja</span>Classic
              </a>
            </Link>
          </li> */}
          <li>
            <Link href="/mealbox">
              <a onClick={() => burger_click()}>
                <span style={{ color: "#BE2D30" }}>Meal</span>Box
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.caterninja.com/about-us" target="_blank">
              <a onClick={() => burger_click()}>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.caterninja.com/blog/" target="_blank">
              <a onClick={() => burger_click()}>Blog</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/newpage">
              <a onClick={() => burger_click()}>New</a>
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
