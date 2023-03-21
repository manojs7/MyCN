import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube ,faAddressBook,faStar} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";
export default function FeedBack() {
  // const settings = {
  //   className: "center",

  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,

  //   cssEase: "linear",
  //   pauseOnHover: true,
  //   speed: 500,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: false,
  //       },
  //     },
  //     {
  //       breakpoint: 750,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <div className="feed-back-container">
      {/* <Slider {...settings}>
        <div className="content-container">
          <p>95% Ratings </p>
        </div>
        <div>
        <div className="content-container">
          <p>
            Customers Include <span>Actors</span> And <span>Cricketers</span>{" "}
          </p>
        </div>
        </div>
        <div className="content-container">
          <p>
            {" "}
            <span>10,000+</span> Orders Served Since 2017
          </p>
        </div>
        <div>

        </div>
        <div className="content-container">
          <p>
            Small event <span>10+</span> To Big Event <span>200+ Guests</span>{" "}
          </p>
        </div>
      </Slider> */}
      <Carousel indicators={false} controls={false} >

        {/* 1 */}
        <Carousel.Item interval={2000} >
          <div className="content-container">
            {/* <p>95% <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span> Ratings </p> */}
            <p>95% <span><img style={{height: "auto", width: "130px", marginTop: "-5px"}} src="Star.svg" alt="" /></span> Ratings </p>
          </div>
        
        </Carousel.Item>

        {/* 2 */}
        <Carousel.Item interval={2000} >
        <div className="content-container">
          <p>
            Customers Include <span>Actors</span> <br/> And <span>Cricketers</span>{" "}
          </p>
        </div>

        
        </Carousel.Item >
        {/* 3 */}
        <Carousel.Item interval={2000} >
        <div className="content-container">
          <p>
            {" "}
            <span>10,000+</span> Orders Served <br/> Since 2017
          </p>
        </div>

       
        </Carousel.Item>
        {/* 4 */}
        <Carousel.Item interval={2000} >
          <div className="content-container">
            <p>
              Small event <span>10+</span> <br/> To Big Event <span>200+ Guests</span>{" "}
            </p>
          </div>

       
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
