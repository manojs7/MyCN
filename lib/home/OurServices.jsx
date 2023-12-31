import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import Image from "next/image";

const OurServices = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    setIsSmall(window.innerWidth <= 939);
    window.addEventListener("resize", () =>
      setIsSmall(window.innerWidth <= 939)
    );
    // setIsLoading(false);
  }, []);

  return (
    <section className="our-services mt-5" id="ourServices">
      <div className="container">
        <div className="our-services-title">
          <h2 style={{ fontSize: "41px" }}>Our Services</h2>
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
                      <Image
                        src="/home/ourServices/ninjabox2.png"
                        width={240} height={160}
                        alt=""
                        className="img-fluid hoverZoom"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Bulk Food Delivery in<br />Convenient
                        <span> Table-Display</span> box
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
                  <Image
                    src="/home/ourServices/backpic.webp"
                    width={300} height={230}
                    alt=""
                    className="img-fluid hoverZoom"
                  />
                </div>
                <div className="buttons">
                  <Link href="/ninjabox"><button
                    className="view-details"
                  >
                    View Details
                  </button></Link>
                  {/* <button onClick={() => window.open('/checkprice', '_blank')}
                    className="sample-pricing"
                  >
                    Sample Pricing
                  </button> */}
                </div>
              </div>
              <div style={{ position: "relative", marginTop: "-490px", marginLeft: "-5px" }}>
                <Image src="/home/ourServices/min10.png" width="190px" height="35px" />
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
                      <Image
                        src="/home/ourServices/osf22.webp"
                        width={230} height={210}
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
                <div className="service-back ">
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
                  <Image
                    src="/home/ourServices/backpic2.webp"
                    width={300} height={230}
                    alt=""
                    className="img-fluid hoverZoom"
                  />
                </div>
                <div className="buttons">
                  <Link href="/ninjabuffet"><button className="view-details">View Details</button></Link>
                  {/* <button onClick={() => window.open('/checkprice', '_blank')}
                    className="sample-pricing"
                  >
                    Sample Pricing
                  </button> */}
                </div>
              </div>
              <div style={{ position: "relative", marginTop: "-490px", marginLeft: "-5px" }}>
                <Image src="/home/ourServices/min10.png" width="190px" height="35px" />
              </div>
            </div>

            {/* card 3 */}
            <div className="col-12 col-sm-6 col-md-4 mb-md-0 mb-5">
              <div className="our-services-box">
                <div className="our-services-box-hover">
                  <div className="service-face service-face2">
                    <div className="title">
                      <span> Ninja</span>
                      Gourmet
                    </div>

                    <div className="image">
                      <Image
                        src="/home/ourServices/osf3.webp"
                        width={220} height={210}
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
                <div className="service-back-pic" style={{paddingTop: "40px"}}>
                  <Image
                    src="/home/ourServices/gourmetpc.png"
                    width={262} height={185}
                    alt=""
                    className="img-fluid hoverZoom"
                  />
                </div>
                <div className="buttons">
                  <Link href="/gourmet"><button
                    className="view-details mt-5 mx-auto">View Details</button></Link>
                  {/* <button
                    onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20looking%20for%20Gourmet%20options%20")}
                    className="sample-pricing mt-5"
                  >
                    Sample Pricing
                  </button> */}
                </div>
              </div>
            </div>
            {/* </div>
          <div className="row mb-4 justify-content-center"> */}
            {/* card 4*/}
            <div className="col-12 col-sm-6 col-md-4  mb-5 mt-5">
              <div className="our-services-box">
                <div className="our-services-box-hover">
                  <div className="service-face service-face2">
                    <div className="title">
                      <span> Ninja</span>Classic
                    </div>
                    <div className="image">
                      <Image
                        src="/home/ourServices/nc1.webp"
                        width={260} height={210}
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
                <div className="service-back ">
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
                  <Image
                    src="/home/ourServices/classicmb.png"
                    width={261.99} height={185}
                    alt=""
                    className="img-fluid hoverZoom"
                  />
                </div>
                <div className="buttons">
                  <Link href="/ninjaclassic"><button
                    className="view-details mt-2 mx-auto">View Details</button></Link>
                  {/* <button
                    onClick={() => (window.location.href = "https://caterninja.com/shop/catering")}
                    className="sample-pricing mt-2"
                  >
                    Sample Pricing
                  </button> */}
                </div>
              </div>
            </div>

            {/* card 5 */}
            <div className="col-12 col-sm-6 col-md-4 mb-md-0 mb-5 mt-5">
              <div className="our-services-box">
                <div className="our-services-box-hover">
                  <div className="service-face service-face2">
                    <div className="title">
                      <span> Ninja</span>
                      MealBox
                    </div>
                    <div className="image">
                      <Image
                        src="/home/ourServices/osf4.webp"
                        width={220} height={210}
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
                <div className="service-back ">
                  <p>
                    {" "}
                    ✅ Huge Variety Of Menu <br />
                    ✅ Unique Packeging <br />
                    ✅ Hassel Free Catering <br />✅ Disposable cutlery
                  </p>
                </div>
                <div className="service-back-pic">
                  <Image
                    src="/home/ourServices/backpic4.webp"
                    width={300} height={230}
                    alt=""
                    className="img-fluid hoverZoom"
                  />
                </div>

                <div className="buttons">
                  <Link href="/mealbox"><button
                    className="view-details mt-3 mx-auto">View Details</button></Link>
                  {/* <button
                    onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20looking%20for%20Meal%20box%20options%20")}
                    className="sample-pricing mt-3"
                  >
                    Sample Pricing
                  </button> */}
                </div>
              </div>
              <div style={{ position: "relative", marginTop: "-490px", marginLeft: "-5px" }}>
                <Image src="/home/ourServices/min15.png" width="190px" height="35px" />
              </div>
            </div>
            {/* card 6 */}
            <div className="col-12 col-sm-6 col-md-4 mb-md-0 mb-5 mt-5">
              <div className="our-services-box">
                <div className="our-services-box-hover">
                  <div className="service-face service-face2">
                    <div className="title">
                      <span> Ninja</span>
                      SnackBox
                    </div>
                    <div className="image">
                      <Image
                        src="/home/ourServices/ezgif.com-gif-maker.webp"
                        width={220} height={210}
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
                <div className="service-back ">
                  <p>
                    {" "}
                    ✅ No Cleaning Hassel <br />
                    ✅ Doorstep delivery <br />
                    ✅ Hot and Delicious Food <br />✅ Huge variety menu
                  </p>
                </div>
                <div className="service-back-pic">
                  <Image
                    src="/home/ourServices/backpic5.webp"
                    width={210} height={200}
                    alt=""
                    className="img-fluid hoverZoom"
                  />
                </div>
                <div className="buttons">
                  <Link href="/snackbox"><button
                    className="view-details mx-auto">View Details</button></Link>
                  {/* <button
                    onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20looking%20for%20Snack%20box%20options%20")}
                    className="sample-pricing"
                  >
                    Sample Pricing
                  </button> */}
                </div>
              </div>
              <div style={{ position: "relative", marginTop: "-490px", marginLeft: "-5px" }}>
                <Image src="/home/ourServices/min15.png" width="190px" height="35px" />
              </div>
            </div>
          </div>
        )}
        {/* for mobile */}

        {/* <Slider {...settings}> */}
        <div className="mt-5">
          {isSmall ? <div className="our-services-title">
            <h2 id="ourservices">Our Services</h2>
          </div> : ""}
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
                      <Image src="/home/ourServices/ninjabox2.png" width={166.9} height={129.11} alt="" className="hoverZoom" />
                    </div>
                    <div className="content">
                      <p>
                        Bulk Food Delivery in<br />Convenient
                        <span> Table-Display</span> box
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
                  <Image
                    src="/home/ourServices/backpic.webp"
                    width={210} height={140}
                    alt=""
                    className="hoverZoom"
                  />
                </div>
                <div className="buttons">
                  <Link href="/ninjabox"><button
                    className="view-details"
                  >
                    View Details
                  </button></Link>
                  {/* <button onClick={() => window.open('/checkprice', '_blank')}
                    className="sample-pricing"
                  >
                    Sample Pricing
                  </button> */}
                </div>
              </div>
              <div style={{ position: "relative", marginTop: "-313px", marginLeft: "5px" }}>
                <Image src="/home/ourServices/min10.png" width="112px" height="19.1px" />
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
                      <Image
                        src="/home/ourServices/osf22.webp"
                        width={152.92} height={134.75}
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
                  <Image
                    src="/home/ourServices/backpic2.webp"
                    width={210} height={140}
                    alt=""
                    className="hoverZoom"
                  //className="img-fluid hoverZoom"
                  />
                </div>
                <div className="buttons">
                  <Link href="/ninjabuffet"><button className="view-details">
                    View Details
                  </button></Link>
                  {/* <button onClick={() => window.open('/checkprice', '_blank')}
                    className="sample-pricing"
                  >
                    Sample Pricing
                  </button> */}
                </div>
              </div>
              <div style={{ position: "relative", marginTop: "-313px", marginLeft: "5px" }}>
                <Image src="/home/ourServices/min10.png" width="112px" height="19.1px" />
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
                      <span> Ninja</span>
                      Gourmet
                    </div>
                    <div className="image6">
                      <Image
                        src="/home/ourServices/osf3.webp"
                        width={129.57} height={148.77}
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
                  <Image
                    src="/home/ourServices/gourmetmb.png"
                    width={164} height={115.8}
                    alt=""
                    className="img-fluid hoverZoom"
                  />
                </div>
                <div className="buttons">
                  <Link href="/gourmet"><button
                    className="view-details mx-auto">View Details</button></Link>
                  {/* <button
                  onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20looking%20for%20Gourmet%20options%20")}
                  className="sample-pricing"
                >
                  Sample Pricing
                </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* </Slider> */}

        {/* slider 2 */}
        <div className="mobile-card-container">
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
                    <Image
                      src="/home/ourServices/nc1.webp"
                      width={180} height={148.77}
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
                <Image
                  src="/home/ourServices/classicmb.png"
                  width={164.4} height={115.8}
                  alt=""
                  className="img-fluid hoverZoom"
                />
              </div>
              <div className="buttons">
                <Link href="/ninjaclassic"><button
                  className="view-details mx-auto">View Details</button></Link>
                {/* <button
                    onClick={() => (window.location.href = "https://caterninja.com/shop/catering")}
                    className="sample-pricing"
                  >
                    Sample Pricing
                  </button> */}
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
                    MealBox
                  </div>
                  <div className="image4">
                    <Image
                      src="/home/ourServices/osf4.webp"
                      width={158.65} height={141.72}
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
                <Image
                  src="/home/ourServices/backpic4.webp"
                  width={210} height={140}
                  alt=""
                  className="img-fluid hoverZoom"
                />
              </div>

              <div className="buttons">
                <Link href="/mealbox"><button
                  className="view-details mx-auto">View Details</button></Link>
                {/* <button
                  onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20looking%20for%20Meal%20box%20options%20")}
                  className="sample-pricing"
                >
                  Sample Pricing
                </button> */}
              </div>
            </div>
            <div style={{ position: "relative", marginTop: "-313px", marginLeft: "5px" }}>
                <Image src="/home/ourServices/min15.png" width="112px" height="19.1px" />
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
                    SnackBox
                  </div>
                  <div className="image5">
                    <Image
                      src="/home/ourServices/ezgif.com-gif-maker.webp"
                      width={152.92} height={134.75}
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
                <Image
                  src="/home/ourServices/backpic5.webp"
                  width={150} height={130}
                  alt=""
                  className="img-fluid hoverZoom"
                />
              </div>
              <div className="buttons">
                <Link href="/snackbox"><button
                  className="view-details mx-auto">View Details</button></Link>
                {/* <button
                  onClick={() => (window.location.href = "http://api.whatsapp.com/send?phone=917738096313&text=Hey!%20looking%20for%20Snack%20box%20options%20")}
                  className="sample-pricing"
                >
                  Sample Pricing
                </button> */}
              </div>
            </div>
            <div style={{ position: "relative", marginTop: "-313px", marginLeft: "5px" }}>
                <Image src="/home/ourServices/min15.png" width="112px" height="19.1px" />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
