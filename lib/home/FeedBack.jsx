import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube ,faAddressBook,faStar} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";
export default function FeedBack() {
  return (
    <div className="feed-back-container">
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
