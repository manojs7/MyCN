import React from "react";
import Slider from "react-slick/lib/slider";
import { News_Data } from "$lib/home/News_Data";

const News = () => {
  var settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
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
    <section className="news">
      <div className="container">
        <div className="section-title">
          <h2>CaterNinja in the News</h2>
        </div>
        <Slider {...settings}>
          {News_Data.map((item, index) => (
            <div className="news-item" key={index}>
              <img src={item.image} alt="News image" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default News;
