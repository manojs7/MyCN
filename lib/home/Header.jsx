import { useState, React, useEffect } from "react";
import Slider from "react-slick/lib/slider";
import styles from "$styles/home/Home.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  // const [sliderRef, setSliderRef] = useState(null);
  // const [currindex, setIndex] = useState(0);
  const [isSmall, setIsSmall] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const bannerImages = [
    "/home/header/component.webp",
    "/home/header/ninjabox1.webp",
    "/home/header/ninjabuffet.webp",
    "/home/header/mealbox.webp",
    "/home/header/ninjaclassic.webp",
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
          <Image priority src="/CaterNinja logo/caterninja.webp" height={36.92} width={183.88} alt="logo"/>
        </div>
        <div className="header-title-two pt-2">
          <p> Mumbai | Bangalore | Delhi </p>
        </div>
        <div className="header-content">
          <img src="/home/header/chef-min.webp" height="313.89px" width="261.5px" alt="logo" />
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
            <Image priority src={d} width={380} height={436} alt="logo" />

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
          <Image priority src="/home/header/group.webp" width={960} height={450}  alt="logo" />
        </div>
        <div className="image-container">
          <Image priority src="/home/header/group3.webp" width={963} height={458} alt="logo" />
        </div>
        <div className="image-container">
          <Image priority src="/home/header/group5.webp" width={963} height={458} alt="logo" />
        </div>
        <div className="image-container">
          <Image priority src="/home/header/group6.webp" width={963} height={458} alt="logo" />
        </div>
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
