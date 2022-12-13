import { useState, React, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faAngleLeft,
  faAngleRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick/lib/slider";
import styles from "$styles/home/Home.module.scss";

const Header = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [currindex, setIndex] = useState(0);
  const [isSmall, setIsSmall] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const bannerImages = [
    "mBanner1.png",
    "mBanner2.png",
    "mBanner3.png",
    "mBanner4.png",
    "mBanner5.png",
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

  function handleChange(currentIndex) {
    setIndex(currentIndex);
  }

  const Testimonials_Data = [
    {
      title: "Our Signature Offerings",
      imageUrl: "/home/header/chef.png",
    },
    {
      title: "Our Signature Offerings",
      imageUrl: "/home/header/chef.png",
    },
    {
      title: "Our Signature Offerings",
      imageUrl: "/home/header/chef.png",
    },
  ];

  const rightHeader = (
    <div className="header-right-container">
      <div className="description">
        <div className="header-title mt-4">
          <img src="caterninja.png" height="auto" width="160" alt="logo" />
        </div>
        <div className="header-title-two pt-2">
          <p> Mumbai | Bangalore | Delhi </p>
        </div>
        <div className="header-content">
          <img src="chef.png" height="330px" width="290px" alt="logo" />
          <div className="header-button">
            <button className="bg-red">Our Services</button>
          </div>
        </div>
      </div>
    </div>
  );

  // const leftHeader = (
  //   <div className="header-left-container">
  //     <div className="rating left-box">
  //       95% <FontAwesomeIcon icon={faStar} />
  //       <FontAwesomeIcon icon={faStar} />
  //       <FontAwesomeIcon icon={faStar} />
  //       <FontAwesomeIcon icon={faStar} />
  //       <FontAwesomeIcon icon={faStar} /> Rating
  //     </div>
  //     <div className="customer left-box">
  //       Customers Include Actors And Cricketers
  //     </div>
  //     <div className="orders left-box">10,000 Orders Served Since 2017</div>
  //     <div className="events left-box">
  //       We Cater From Small Events(10+ Guests) To Big Events (20+ Guests)
  //     </div>
  //   </div>
  // );

  const mobileCenter = (
    // <div className={"testimonials-content " + styles.header_center}>
    //   <div className={"testimonials-carousel " + styles.item}>
    //     <Slider ref={setSliderRef} afterChange={handleChange} {...settings}>
    //       <div className={"testimonials-item mobile" + styles.item}>
    //         <div className={"image" + styles.image}>
    //           <div className={styles.description}>
    //             <div className={styles.header_title}>
    //               <span>Cater</span>Ninja
    //             </div>
    //             <div className="header-content">
    //               We make it easy to order great catering food
    //             </div>
    //             <div className="header-button header-button-mobile">
    //               <button>Our Services</button>
    //             </div>
    //           </div>
    //           <div className={"rating left-box-mobile " + styles.box}>
    //             95% <FontAwesomeIcon icon={faStar} />
    //             <FontAwesomeIcon icon={faStar} />
    //             <FontAwesomeIcon icon={faStar} />
    //             <FontAwesomeIcon icon={faStar} />
    //             <FontAwesomeIcon icon={faStar} /> Rating
    //           </div>
    //         </div>
    //       </div>
    //       {Testimonials_Data.map((item, index) => (
    //         <div
    //           className={"testimonials-item mobile " + styles.item}
    //           key={index}
    //         >
    //           <div className={"image " + styles.image}>
    //             <img
    //               src={item.imageUrl}
    //               alt="image"
    //               className="img-fluid hoverZoom"
    //             />
    //           </div>
    //           <div className={styles.content}>
    //             <div className={styles.title}>{item.title}</div>
    //             {index === 0 && (
    //               <div className="left-box-mobile">
    //                 Customers Include Actors And Cricketers
    //               </div>
    //             )}
    //             {index === 1 && (
    //               <div className="orders left-box-mobile">
    //                 10,000 Orders Served Since 2017
    //               </div>
    //             )}
    //             {index === 2 && (
    //               <div className="events left-box-mobile">
    //                 We Cater From Small Events(10+ Guests) To Big Events (20+
    //                 Guests)
    //               </div>
    //             )}
    //           </div>
    //         </div>
    //       ))}

    //     </Slider>
    //   </div>
    // </div>
    <div className="banner-mobile-slide-container">
      <Slider {...settings} className="">
        {bannerImages.map((d, i) => (
          <div key={i} className="banner-mobile-image-container">
            <img src={d} height="100%" width="100%" alt="logo" />

            {i !== 0 && (
              <button className="see-more-below-btn">See More Below</button>
            )}
          </div>
        ))}
      </Slider>
      <div className="banner-btn-container">
        <div className="center-banner-btn">
          <button>
            {" "}
            Ninja <span>Box</span>{" "}
          </button>
          <button>
            Ninja <span>Buffet</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );

  const desktopCenter = (
    <div className={"header-carousel3 " + styles.header_center}>
      <Slider ref={setSliderRef} afterChange={handleChange} {...settings}>
        <div className="image-container">
          <img src="banner1.png" height="450px" width="100%" alt="logo" />
        </div>
        <div className="image-container">
          <img src="banner2.png" height="450px" width="100%" alt="logo" />
        </div>
        <div className="image-container">
          <img src="banner3.png" height="450px" width="100%" alt="logo" />
        </div>
        <div className="image-container">
          <img src="banner4.png" height="450px" width="100%" alt="logo" />
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
