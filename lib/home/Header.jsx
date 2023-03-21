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
import Link from "next/link";
import Image from 'next/image'

const Header = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [currindex, setIndex] = useState(0);
  const [isSmall, setIsSmall] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const bannerImages = [
    "/Component 7.png",
    "/ninjabox1.png",
    "/ninjabuffet.png",
    "/mealbox.png",
    "/ninjaclassic.png",
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
        <div className="header-title" style={{marginTop: "35px"}}>
          <Image src="/CaterNinja (1).png" height={36.92} width={183.88} alt="logo"/>
        </div>
        <div className="header-title-two pt-2">
          <p> Mumbai | Bangalore | Delhi </p>
        </div>
        <div className="header-content">
          {/* height="330px" width="290px" */}
          <img src="chef.png" height="313.89px" width="261.5px" alt="logo" />
          <div className="header-button">
            <a href="#ourServices" className="bg-red">Our Services</a>
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
            <Image src={d} layout="fill" alt="logo" />

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
      <Slider ref={setSliderRef} afterChange={handleChange} {...settings}>
        <div className="image-container">
          <img src="Group 1069.png" height="450px" width="100%" alt="logo" />
        </div>
        <div className="image-container">
          <img src="Group 823.png" height="458px" width="100%" alt="logo" />
        </div>
        <div className="image-container">
          <img src="Group 824.png" height="458px" width="100%" alt="logo" />
        </div>
        <div className="image-container">
          <img src="Group 825.png" height="458px" width="100%" alt="logo" />
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
