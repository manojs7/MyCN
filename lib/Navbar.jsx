import styles from "$styles/Navbar.module.scss";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

export default function Navbar({ page }) {
  const router = useRouter();
  console.log(router.pathname);
  const [sticky, setSticky] = useState(false);
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // scroll handle
  const [y, setY] = useState(-5);
  const [scrollUp, setScrollUp] = useState(true);

  const handleNavigation = useCallback((e) => {

    const window = e.currentTarget;
    console.log('scroll', y, window.scrollY)
    if ((y) > (window.scrollY)) {
      console.log("scrolling up");
      setScrollUp(true)
    } else if (y < window.scrollY) {
      console.log("scrolling down");
      setScrollUp(false)
    }
    setY(window.scrollY);
  },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 939);
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth <= 939)
    );
    // Sticky NavBar
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].boundingClientRect.y < 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  function burger_click() {
    let navigation_links = document.querySelectorAll(`#links > li > a`);
    navigation_links.forEach((link, index) => {
      if (active) {
        setActive(!active);
        setTimeout(() => {
          link.classList.remove(styles.shown);
        }, 300);
      } else {
        setActive(!active);
        link.animate(
          [
            { opacity: 0, transform: "translateX(0px)" },
            { opacity: 1, transform: "translateX(0px)" },
          ],
          {
            duration: 700,
          }
        );
        setTimeout(() => {
          link.classList.add(styles.shown);
        }, 700);
      }
    });
  }

  const small = (
    <nav className={styles.nav + ` ${sticky ? styles.sticky : ""}`}>
      <div className={styles.logo} onClick={() => (window.location.href = "/")}>
        <img src="CaterNinja (1).png" alt="logo" />
      </div>
      <div
        className={styles.burger + ` ${active ? styles.active : ""}`}
        onClick={() => {
          burger_click();
        }}
        data-state={active.toString()}
      >
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
      <ul className={styles.links} data-state={active.toString()} id="links">
        <li className={styles.margin}>
          <Link href="/ninjabox">
            <a onClick={() => burger_click()}>NinjaBox</a>
          </Link>
        </li>
        <li className={styles.margin}>
          <Link href="/ninjabuffet">
            <a onClick={() => burger_click()}>NinjaBuffet</a>
          </Link>
        </li>
        <li className={styles.margin}>
          <Link href="/mealbox">
            <a onClick={() => burger_click()}>MealBox</a>
          </Link>
        </li>
        <li className={styles.margin}>
          <Link href="/process">
            <a onClick={() => burger_click()}>About Us</a>
          </Link>
        </li>
        <li className={styles.margin}>
          <Link href="/software">
            <a onClick={() => burger_click()}>Blog</a>
          </Link>
        </li>
        {/* <li className={styles.margin}>
          <Link href="/newpage">
            <a onClick={() => burger_click()}>New</a>
          </Link>
        </li> */}
      </ul>
    </nav>
  );

  const big = (
    <nav className={styles.nav + ` ${sticky ? styles.sticky : ""}` + ` ${!scrollUp ? styles.hideNav : ""}`}>
      <div className="col-4">
        <ul className={styles.links} data-state={active.toString()} id="links">
          <li>
            <Link href="/ninjabox">
              <a
                className={
                  router.pathname == "/ninjabox" ? styles.current : null
                }
                onClick={() => burger_click()}
              >
                {" "}
                <span style={{ color: "#BE2D30" }}>Ninja </span> Box
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ninjabuffet">
              <a
                className={
                  router.pathname == "/ninjabuffet" ? styles.current : null
                }
                onClick={() => burger_click()}
              >
                <span style={{ color: "#BE2D30" }}>Ninja </span>Buffet
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href="/ninjaclassic">
              <a
                className={
                  router.pathname == "/ninjaclassic" ? styles.current : null
                }
                onClick={() => burger_click()}
              >
                <span style={{ color: "#BE2D30" }}>Ninja </span>Classic
              </a>
            </Link>
          </li> */}
          <li>
            <Link href="/mealbox">
              <a
                className={
                  router.pathname == "/mealbox" ? styles.current : null
                }
                onClick={() => burger_click()}
              >
                <span style={{ color: "#BE2D30" }}>Meal </span>Box
              </a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a
                className={page == "gallery" ? styles.current : null}
                onClick={() => burger_click()}
              >
                About Us
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              <a
                className={page == "contact" ? styles.current : null}
                onClick={() => burger_click()}
              >
                Blog
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href="/newpage">
              <a
                className={page == "/newpage" ? styles.current : null}
                onClick={() => burger_click()}
              >
                <span style={{ color: "#BE2D30" }}>New</span>
              </a>
            </Link>
          </li> */}
        </ul>
      </div>
      <div
        className={styles.logo + " col-4"}
        onClick={() => (window.location.href = "/")}
      >
        <img src="CaterNinja (1).png" alt="logo" />
      </div>
      <div className={styles.nav_socials + " col-4"}>
        <ul className={styles.links}>
          <li>
            <Link href="/">
              <a>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faInstagram}
                ></FontAwesomeIcon>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faFacebook}
                ></FontAwesomeIcon>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faYoutube}
                ></FontAwesomeIcon>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={styles.burger + ` ${active ? styles.active : ""}`}
        onClick={() => {
          burger_click();
        }}
        data-state={active.toString()}
      >
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </nav>
  );

  return <>{isMobile ? small : big}</>;
}
