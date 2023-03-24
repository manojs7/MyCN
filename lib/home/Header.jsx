import { useState, React, useEffect } from "react";
import Slider from "react-slick/lib/slider";
import styles from "$styles/home/Home.module.scss";
import Link from "next/link";

const Header = () => {
  // const [sliderRef, setSliderRef] = useState(null);
  // const [currindex, setIndex] = useState(0);
  const [isSmall, setIsSmall] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const bannerImages = [
    "Component 7.webp",
    "ninjabox1.webp",
    "ninjabuffet.webp",
    "mealbox.webp",
    "ninjaclassic.webp",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    setIsSmall(window.innerWidth <= 939);
    window.addEventListener("resize", () =>
      setIsSmall(window.innerWidth <= 939)
    );
    setIsLoading(false);
  }, []);

  // function handleChange(currentIndex) {
  //   setIndex(currentIndex);
  // }

  const rightHeader = (
    <div className="header-right-container">
      <div className="description">
        <div className="header-title" style={{marginTop: "35px"}}>
          <img src="CaterNinja (1).png" height="36.92px" width="183.88px" alt="logo"/>
        </div>
        <div className="header-title-two pt-2">
          <p> Mumbai | Bangalore | Delhi </p>
        </div>
        <div className="header-content">
          {/* height="330px" width="290px" */}
          <img src="chef-min.png" height="313.89px" width="261.5px" alt="logo" />
          <div className="header-button">
            <a href="#ourServices" className="bg-red">Our Services</a>
          </div>
        </div>
      </div>
    </div>
  );

  const mobileCenter = (
    <div className="banner-mobile-slide-container">
      <Slider {...settings} className="">
        {bannerImages.map((d, i) => (
          <div key={i} className="banner-mobile-image-container">
            <img src={d} height="100%" width="100%" alt="logo" />

            {i !== 0 && (
              <button onClick={() => (window.location.href = "#ourservices")} className="see-more-below-btn">See More Below</button>
            )}
          </div>
        ))}
      </Slider>
      <div className="banner-btn-container">
        <div className="center-banner-btn">
          <Link href="/ninjabox"><button>
            {" "}
            Ninja <span>Box</span>{" "}
          </button></Link>
          <Link href="/ninjabuffet"><button>
            Ninja <span>Buffet</span>{" "}
          </button></Link>
        </div>
      </div>
    </div>
  );

  const desktopCenter = (
    <div className={"header-carousel3 " + styles.header_center}>
      <Slider {...settings}>
        <div className="image-container">
          <img src="Group 1069.webp" height="450px" width="100%" alt="logo" />
        </div>
        <div className="image-container">
          <img src="Group 823.webp" height="458px" width="100%" alt="logo" />
        </div>
        <div className="image-container">
          <img src="Group 824.webp" height="458px" width="100%" alt="logo" />
        </div>
        <div className="image-container">
          <img src="Group 825.webp" height="458px" width="100%" alt="logo" />
        </div>

        {/* {Testimonials_Data.map((item, index) => (
              <div
                className={"testimonials-item mobile " + styles.item}
                key={index}
              >
                <div className={"image " + styles.image}>
                  <img
                    src={item.imageUrl}
                    alt="image"
                    className="img-fluid hoverZoom"
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.title}>{item.title}</div>
                </div>
              </div>
            ))} */}
      </Slider>
    </div>
  );
  if (isLoading) {
    return <p>{""}</p>;
  }
  return (
    <>
      <div className="containerHeader">
        <section className="header">
          {/* {!isSmall ? leftHeader : null} */}
          {isSmall ? mobileCenter : desktopCenter}
          {!isSmall ? rightHeader : null}
        </section>
      </div>
    </>
  );
};

export default Header;
