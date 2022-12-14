import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Testimonials_Data } from "./Testimonials_Data";
import styles from "$styles/home/Testimonials.module.scss";
import BookThisPackageModal from "$lib/ninja-box/BookThisPackageModal";

export default function TestimonialsTwo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(show)
  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  // useEffect(() => {


  //   window.addEventListener("resize", () => {
  //     (window.innerWidth <= 1300 &&window.innerWidth >= 800)
  //       ? setSettings({ ...settings, slidesToShow: 2 })
  //       : window.innerWidth < 800?
  //     setSettings({ ...settings, slidesToShow: 1 }): (window.innerWidth <= 2000 &&window.innerWidth >= 1300)?setSettings({ ...settings, slidesToShow: 3 }):setSettings({ ...settings, slidesToShow: 4 })
  //   });
  // }, []);
  console.log(settings);
  return (
    <div className="container m-auto">
      <div className="section-title mt-5">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials-sub-title">What People Think About Us</div>
        <Slider {...settings}>
          {Testimonials_Data.map((data, index) => {
            return (
              <div key={index}>
                <div className={styles.testimonialContainer}>
                  {/* <div className="d-flex mt-4 mb-4"> */}
                  <div className={styles.clientPic}>
                    <img
                      src={data.image}
                      alt="image"
                      className="img-fluid hoverZoom"
                    />
                  </div>
                  <div>
                    <h5>{data.name}</h5>
                    {/* <h5>{data.place}</h5> */}
                  </div>
                  {/* </div> */}

                  <p>{data.content.slice(0, 150)}....</p>
                </div>
              </div>
            );
          })}
        </Slider>
      {/* <h3  onClick={handleShow}>Click This button</h3>
      <BookThisPackageModal
        handleClose={handleClose}
        show={show}
      /> */}
    </div>
  );
}
