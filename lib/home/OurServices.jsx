import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const OurServices = () => {
  const [isSmall, setIsSmall] = useState(false);
  const settings = {
    className: "center",

    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,

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
          slidesToScroll: 1,
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
  };

  useEffect(() => {
    setIsSmall(window.innerWidth <= 939);
    window.addEventListener("resize", () =>
      setIsSmall(window.innerWidth <= 939)
    );
    // setIsLoading(false);
  }, []);

  return (
    <section className="our-services mt-5">
      <div className="container">
        <div className="our-services-title">
          <h2>Our Services</h2>
        </div>
        {!isSmall && (
          <div className="row mb-md-5 mb-0 our-service-box-container">
            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="our-services-box">
                <div className="our-services-box-hover">
                  <div className="service-face service-face2">
                    <div className="title">
                      <span> Ninja</span>
                      Box
                    </div>
                    <div className="image">
                      <img
                        src="fontPic.png"
                        alt=""
                        className="img-fluid hoverZoom"
                      />
                    </div>
                    <div className="content">
                      <p>
                        {" "}
                        Door Step Delivery in a Convenient{" "}
                        <span>Ready-to-Serve</span> box
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-back">
                  <p>
                    {" "}
                    ✅ No Mess in Kitchen <br />
                    ✅ No Cleaning Required <br />
                    ✅ Includes 🍃Disposables <br />
                  </p>
                </div>
                <div className="service-back-pic">
                  <img
                    src="backpic.png"
                    alt=""
                    className="img-fluid hoverZoom"
                  />
                </div>
                <div className="buttons">
                  <button
                    onClick={() => (window.location.href = "/ninjabox")}
                    className="view-details"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => (window.location.href = "/custom")}
                    className="sample-pricing"
                  >
                    Sample Pricing
                  </button>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="our-services-box">
                <div className="our-services-box-hover">
                  <div className="service-face service-face2">
                    <div className="title">
                      <span> Ninja</span>
                      Buffet
                    </div>

                    <div className="image">
                      <img
                        src="fontPic2.png"
                        alt=""
                        className="img-fluid hoverZoom"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Our Ninja Caterer comes with a No-Mess{" "}
                        <span>Quick-Setup</span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-back">
                  <p className="">
                    {" "}
                    ✅ 1-2 Trained Captains <br />
                    ✅ Quick Setup - Clean up
                    <br />
                    ✅ Hassel Free Catering
                    <br />✅ Hot and Delicious Food
                  </p>
                </div>
                <div className="service-back-pic">
                  <img
                    src="backpic2.png"
                    alt=""
                    className="img-fluid hoverZoom"
                  />
                </div>
                <div className="buttons">
                  <button className="view-details">View Details</button>
                  <button
                    onClick={() => (window.location.href = "/custom")}
                    className="sample-pricing"
                  >
                    Sample Pricing
                  </button>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="col-12 col-sm-6 col-md-4  mb-5">
              <div className="our-services-box">
                <div className="our-services-box-hover">
                  <div className="service-face service-face2">
                    <div className="title">
                      <span> Ninja</span>Classic
                    </div>
                    <div className="image">
                      <img
                        src="fontPic3.png"
                        alt=""
                        className="img-fluid hoverZoom"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Catering for <span> large gatherings </span> of 50+
                        guests
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-back">
                  <p>
                    {" "}
                    ✅ 1-2 Trained Captains <br />
                    ✅ Outdoor Catering
                    <br />
                    ✅ Quick Setup - Clean up
                    <br />✅ Hot and Delicious Food
                  </p>
                </div>
                <div className="service-back-pic">
                  <img
                    src="backpic3.png"
                    alt=""
                    className="img-fluid hoverZoom"
                  />
                </div>
                <div className="buttons">
                  <button className="view-details mt-2">View Details</button>
                  <button
                    onClick={() => (window.location.href = "/custom")}
                    className="sample-pricing mt-2"
                  >
                    Sample Pricing
                  </button>
                </div>
              </div>
            </div>
            {/* </div>
          <div className="row mb-4 justify-content-center"> */}
            {/* card 4*/}
            <div className="col-12 col-sm-6 col-md-4 mb-md-0 mb-5">
              <div className="our-services-box">
                <div className="our-services-box-hover">
                  <div className="service-face service-face2">
                    <div className="title">
                      <span> Ninja</span>
                      MealBox
                    </div>
                    <div className="image">
                      <img
                        src="fontPic4.png"
                        alt=""
                        className="img-fluid hoverZoom"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Individual <span>Boxed Meals/</span> Packed Lunches or{" "}
                        <span> Dinners</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-back">
                  <p>
                    {" "}
                    ✅ Huge Variety Of Menu <br />
                    ✅ Unique Packeging <br />
                    ✅ Hassel Free Catering <br />✅ Disposable cutlery
                  </p>
                </div>
                <div className="service-back-pic">
                  <img
                    src="backpic4.png"
                    alt=""
                    className="img-fluid hoverZoom"
                  />
                </div>

                <div className="buttons">
                  <button className="view-details mt-3">View Details</button>
                  <button
                    onClick={() => (window.location.href = "/custom")}
                    className="sample-pricing mt-3"
                  >
                    Sample Pricing
                  </button>
                </div>
              </div>
            </div>
            {/* card 5 */}
            <div className="col-12 col-sm-6 col-md-4 mb-md-0 mb-5">
              <div className="our-services-box">
                <div className="our-services-box-hover">
                  <div className="service-face service-face2">
                    <div className="title">
                      <span> Ninja</span>
                      SnackBox
                    </div>
                    <div className="image">
                      <img
                        src="fontPic5.png"
                        alt=""
                        className="img-fluid hoverZoom"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Perfect box of healthy <span>delicious</span> snacks and
                        beverages
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-back">
                  <p>
                    {" "}
                    ✅ No Cleaning Hassel <br />
                    ✅ Doorstep delivery <br />
                    ✅ Hot and Delicious Food <br />✅ Huge variety menu
                  </p>
                </div>
                <div className="service-back-pic">
                  <img
                    src="backpic5.png"
                    alt=""
                    className="img-fluid hoverZoom"
                  />
                </div>
                <div className="buttons">
                  <button className="view-details">View Details</button>
                  <button
                    onClick={() => (window.location.href = "/custom")}
                    className="sample-pricing"
                  >
                    Sample Pricing
                  </button>
                </div>
              </div>
            </div>
            {/* card 6 */}
            <div className="col-12 col-sm-6 col-md-4 mb-md-0 mb-5">
              <div className="our-services-box">
                <div className="our-services-box-hover">
                  <div className="service-face service-face2">
                    <div className="title">
                      <span> Ninja</span>
                      Gourmet
                    </div>

                    <div className="image">
                      <img
                        src="fontPic6.png"
                        alt=""
                        className="img-fluid hoverZoom"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Premium Buffet of High-end <span>Lavish Cuisine</span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-back">
                  <p>
                    {" "}
                    ✅ 1-2 Trained Captains <br />
                    ✅ Outdoor Catering <br />
                    ✅ Quick Setup - Clean up <br />✅ Hot and Delicious Food
                  </p>
                </div>
                <div className="service-back-pic">
                  <img
                    src="backpic6.png"
                    alt=""
                    className="img-fluid hoverZoom"
                  />
                </div>
                <div className="buttons">
                  <button className="view-details mt-5">View Details</button>
                  <button
                    onClick={() => (window.location.href = "/custom")}
                    className="sample-pricing mt-5"
                  >
                    Sample Pricing
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* for mobile */}

        {/* <Slider {...settings}> */}
        <div className="mt-5">
        {isSmall ?<div className="our-services-title">
          <h2>Our Services</h2>
        </div> :""}
          <div className="mobile-card-container">
            {/* card1 */}
            <div className="">
              <div className="our-services-box">
                <div className="our-services-box-hover">
                  <div className="service-face service-face2">
                    <div className="flip-card">
                      <FontAwesomeIcon icon={faCaretUp} className="fs-1 text-danger" />
                    </div>
                    <div className="title">
                      <span> Ninja</span>
                      Box
                    </div>
                    <div className="image1">
                      <img src="fontPic.png" alt="" className="hoverZoom" />
                    </div>
                    <div className="content">
                      <p>
                        {" "}
                        Door Step Delivery in a <br /> Convenient{" "}
                        <span>Ready-to-Serve</span> box
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-back">
                  <p>
                    {" "}
                    ✅ No Mess in Kitchen <br />
                    ✅ No Cleaning Required <br />
                    ✅ Includes 🍃Disposables <br /> <br />

                  </p>
                </div>
                <div className="service-back-picmb">
                  <img
                    src="mBa1.png"
                    height="100%"
                    width="100%"
                    alt=""
                    className="hoverZoom"
                  />
                </div>
                <div className="buttons">
                  <button
                    onClick={() => (window.location.href = "/ninjabox")}
                    className="view-details"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => (window.location.href = "/custom")}
                    className="sample-pricing"
                  >
                    Sample Pricing
                  </button>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="">
              <div className="our-services-box">
                <div className="our-services-box-hover">
                  <div className="service-face service-face2">
                    <div className="flip-card">
                      <FontAwesomeIcon icon={faCaretUp} className="fs-1 text-danger" />
                    </div>
                    <div className="title">
                      <span> Ninja</span>
                      Buffet
                    </div>

                    <div className="image2">
                      <img
                        src="fontPic2.png"
                        alt=""
                        className="img-fluid hoverZoom"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Our Ninja Caterer comes with <br /> a No-Mess{" "}
                        <span>Quick-Setup</span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-back">
                  <p className="">
                    {" "}
                    ✅ 1-2 Trained Captains <br />
                    ✅ Quick Setup - Clean up
                    <br />
                    ✅ Hassel Free Catering
                    <br />✅ Hot and Delicious Food
                  </p>
                </div>
                <div className="service-back-picmb">
                  <img
                    src="mBa2.png"
                    alt=""
                    className="img-fluid hoverZoom"
                  />
                </div>
                <div className="buttons">
                  <button className="view-details">View Details</button>
                  <button
                    onClick={() => (window.location.href = "/custom")}
                    className="sample-pricing"
                  >
                    Sample Pricing
                  </button>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="">
              <div className="our-services-box">
                <div className="our-services-box-hover">
                  <div className="service-face service-face2">
                    <div className="flip-card">
                      <FontAwesomeIcon icon={faCaretUp} className="fs-1 text-danger" />
                    </div>
                    <div className="title">
                      <span> Ninja</span>Classic
                    </div>
                    <div className="image3">
                      <img
                        src="fontPic3.png"
                        alt=""
                        className="img-fluid hoverZoom"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Catering for <span> large gatherings </span> <br /> of 50+ guests
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-back">
                  <p>
                    {" "}
                    ✅ 1-2 Trained Captains <br />
                    ✅ Outdoor Catering
                    <br />
                    ✅ Quick Setup - Clean up
                    <br />✅ Hot and Delicious Food
                  </p>
                </div>
                <div className="service-back-picmb">
                  <img
                    src="mBa3.png"
                    alt=""
                    className="img-fluid hoverZoom"
                  />
                </div>
                <div className="buttons">
                  <button className="view-details">View Details</button>
                  <button
                    onClick={() => (window.location.href = "/custom")}
                    className="sample-pricing"
                  >
                    Sample Pricing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* </Slider> */}

        {/* slider 2 */}
        <div className="mobile-card-container">
          <div className="mb-5">
            <div className="our-services-box">
              <div className="our-services-box-hover">
                <div className="service-face service-face2">
                  <div className="flip-card">
                    <FontAwesomeIcon icon={faCaretUp} className="fs-1 text-danger" />
                  </div>
                  <div className="title">
                    <span> Ninja</span>
                    MealBox
                  </div>
                  <div className="image4">
                    <img
                      src="fontPic4.png"
                      alt=""
                      className="img-fluid hoverZoom"
                    />
                  </div>
                  <div className="content">
                    <p>
                      Individual <span>Boxed Meals/</span> <br /> Packed Lunches or{" "}
                      <span> Dinners</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="service-back">
                <p>
                  {" "}
                  ✅ Huge Variety Of Menu <br />
                  ✅ Unique Packeging <br />
                  ✅ Hassel Free Catering <br />✅ Disposable cutlery
                </p>
              </div>
              <div className="service-back-picmb">
                <img
                  src="mBa4.png"
                  alt=""
                  className="img-fluid hoverZoom"
                />
              </div>

              <div className="buttons">
                <button className="view-details">View Details</button>
                <button
                  onClick={() => (window.location.href = "/custom")}
                  className="sample-pricing"
                >
                  Sample Pricing
                </button>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="mb-5">
            <div className="our-services-box">
              <div className="our-services-box-hover">
                <div className="service-face service-face2">
                  <div className="flip-card">
                    <FontAwesomeIcon icon={faCaretUp} className="fs-1 text-danger" />
                  </div>
                  <div className="title">
                    <span> Ninja</span>
                    SnackBox
                  </div>
                  <div className="image5">
                    <img
                      src="fontPic5.png"
                      alt=""
                      className="img-fluid hoverZoom"
                    />
                  </div>
                  <div className="content">
                    <p>
                      Perfect box of healthy <span>delicious</span>  <br />snacks and
                      beverages
                    </p>
                  </div>
                </div>
              </div>
              <div className="service-back">
                <p>
                  {" "}
                  ✅ No Cleaning Hassel <br />
                  ✅ Doorstep delivery <br />
                  ✅ Hot and Delicious Food <br />✅ Huge variety menu
                </p>
              </div>
              <div className="service-back-picmb">
                <img
                  src="mBa5.png"
                  alt=""
                  className="img-fluid hoverZoom"
                />
              </div>
              <div className="buttons">
                <button className="view-details">View Details</button>
                <button
                  onClick={() => (window.location.href = "/custom")}
                  className="sample-pricing"
                >
                  Sample Pricing
                </button>
              </div>
            </div>
          </div>
          {/* card 6 */}
          <div className="mb-5">
            <div className="our-services-box">
              <div className="our-services-box-hover">
                <div className="service-face service-face2">
                  <div className="flip-card">
                    <FontAwesomeIcon icon={faCaretUp} className="fs-1 text-danger" />
                  </div>
                  <div className="title">
                    <span> Ninja</span>
                    Gourmet
                  </div>
                  <div className="image6">
                    <img
                      src="fontPic6.png"
                      alt=""
                      className="img-fluid hoverZoom"
                    />
                  </div>
                  <div className="content">
                    <p>
                      Premium Buffet of High-end <br /> <span>Lavish Cuisine</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="service-back">
                <p>
                  {" "}
                  ✅ 1-2 Trained Captains <br />
                  ✅ Outdoor Catering <br />
                  ✅ Quick Setup - Clean up <br />✅ Hot and Delicious Food
                </p>
              </div>
              <div className="service-back-picmb">
                <img
                  src="mBa6.png"
                  alt=""
                  className="img-fluid hoverZoom"
                />
              </div>
              <div className="buttons">
                <button className="view-details">View Details</button>
                <button
                  onClick={() => (window.location.href = "/custom")}
                  className="sample-pricing"
                >
                  Sample Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
