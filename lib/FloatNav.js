import React, { useState } from "react";
import styles from "$styles/Navbar.module.scss";
import Navbar from "./Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-brands-svg-icons";
import { width } from "@mui/system";
import Link from "next/link";

export default function FloatNav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div className={styles.float_nav_container}>
      <div
      className={styles.float_nav_burger}
       
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <img height="100%" width="100%" src="hamburger.png" alt="" />

        {/* <FontAwesomeIcon style={{color:'#C22D2E'}}  color='#C22D2E' className={styles.iconNav} icon={faBars}></FontAwesomeIcon> */}
      </div>
      <div>
        <img height="24px" width="119px" src="caterninja.png" alt=""  />
      </div>

      <div>
        <img height="auto" width="auto" src="bottomNavLogo.png" alt=""  />
      </div>
      <div className={styles.float_nav_button}>
        <button>
          {" "}
          <span style={{ color: "#B70C10" }}>Call a Ninja </span>
          <br />
          Instant Order
        </button>
        <button>
          <span style={{ color: "#B70C10" }}>Custom Menu</span>
          <br />
          Instant Price
        </button>
      </div>

      <div
        className={
          isNavExpanded
            ? styles.float_nav_content
            : styles.float_nav_content_not
        }
      >
        <ul id="links" style={{marginRight: "50px"}}>
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
            <Link href="/gallery">
              <a onClick={() => burger_click()}>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
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
