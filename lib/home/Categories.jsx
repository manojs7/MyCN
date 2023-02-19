import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { categories_1 } from "./Categories_Data";
import { categories_2 } from "./Categories_Data";

const Categories = () => {
  var settings = {
  
    dots: true,
   
    
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    className: "center",
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
   
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
  };
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>Our Categories</h2>
        </div>
        <div className="categories-item-container">
        {categories_1.map((item, index) => (
            <div className="categories-item" key={index}>
              <Link href="https://caterninja.com/shop/catering"><img src={item.image} alt="" className="img-fluid"/></Link>
              <Link href="https://caterninja.com/shop/catering"><p>{item.title}</p></Link>
            </div>
          ))}

        {/* </div >
        <div className="categories-item-container"> */}
        {categories_2.map((item, index) => (
            <div className="categories-item" key={index}>
              <Link href="https://caterninja.com/shop/catering"><img src={item.image} alt="" className="img-fluid " /></Link>
              <Link href="https://caterninja.com/shop/catering"><p>{item.title}</p></Link>
            </div>
          ))}

        </div >
        
        {/* <Slider {...settings} className="mb-5">
          

         
          {categories_1.map((item, index) => (
            <div className="categories-item" key={index}>
              <img src={item.image} alt="" className="img-fluid hoverZoom" />
            </div>
          ))}
          
        </Slider>
        <Slider {...settings}>
          {categories_2.map((item, keys) => (
            <div className="categories-item" key={keys}>
              <img src={item.image} alt="" className="img-fluid hoverZoom" />
            </div>
          ))}
        </Slider> */}
      </div>
    </section>
  );
};

export default Categories;
