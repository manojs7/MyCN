import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ReactImageMagnify from "react-image-magnify";
import { Carousel } from "react-bootstrap";
import { Carousel as BootstrapCarousel } from 'react-responsive-carousel';

const Ninja_Header = () => {
  const images = [
    "buffetCr1.png",
    "buffetCr2.png",
    "buffetCr3.png",
    "buffetCr4.png",



  ];
  const [isSmall, setIsSmall] = useState(false);
  const [photo, setPhoto] = useState(images[0]);
  const [indexPhoto, setIndexPhoto] = useState(null);
  const [isChanged, setIsChanged] = useState(false);




  useEffect(() => {
    setIsSmall(window.innerWidth < 939);
    window.addEventListener("resize", () =>
      setIsSmall(window.innerWidth < 939)
    );
  }, []);

  const handlePhotoChange = (index) => {
    setPhoto(images[index]);
    setIndexPhoto(index);
    setIsChanged(true);
  };

  function clearIndexPhoto() {
    setIndexPhoto(null)
  }

  useEffect(() => {
    const myTimeout = setTimeout(clearIndexPhoto, 10000);
    // clearTimeout(myTimeout);
  }, [indexPhoto])





  useEffect(() => {
    setTimeout(() => {
      setIsChanged(false);
    }, 2000);
  }, [isChanged]);
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const normal = (
    <>
      <div className="ninja-box-header-left-container">
        <img src="Snackbox banner.png" style={{width: "700px"}} id="hoverzoom"/>
      </div>
      <div className="ninja-header-right-container">
        <div className="description">
          <div className="lgd-ninja-box-header-logo">
            <img src="caterninja.png" height="27px" width="134.46px" alt="" />
          </div>
          <div className="lgd-ninja-buffet-header-title">Snack<span>Box</span>
          </div>
          <div className="lgd-snack-box-header-content">
            Perfect Party Takeway Boxes For <span>All Occasions</span> and <span>Events</span>
          </div>

          <div className="lgd-ninja-box-ninja-img">
            <img src='snackboxninja.png' alt='' style={{width: "160px", marginTop: "10px"}} />
          </div>
          <div className="ninja-box-header-button">
            <button href = "#NBuPkg" className="bg-red">Select Package</button>
          </div>
        </div>
      </div>
    </>
  );

  const small = (
    <div className="row" id="smallninja-container">
      <div className="smd-ninja-header-right-container">
        <div className="description">
          <div className="description">
            <div className="ninja-buffet-header-logo">
              <img src="caterninja.png" height="auto" width="100%" alt="" />
            </div>
            <div className="container d-flex">
              <div className="col-6">
                <div className="snack-box-header-title">
                  Snack<span>Box</span>
                </div>
                <div className="ninja-buffet-header-content">
                Perfect Party Takeway Boxes For <span>All Occasions</span> and <span>Events</span>
                </div>
              </div>
              <div className="col-6 ninja-buffet-ninja-img">
                <img src='snackboxninja.png' alt='' style={{ height: "auto", width: "120px"}} />
              </div>
            </div>
          </div>
          {/* <div className="video-player">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: photo,
                },
                largeImage: {
                  src: photo,
                  width: 100,
                  height: 200,
                },
              }}
            />
          </div> */}
          <div className="mb-5">
            {/* <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: photo,
              },
              largeImage: {
                src: photo,
                width: 600,
                height: 800,
              },
            }}
          /> */}
            {/* <img loader={'loading'} src={photo} alt='' height='100%' width='100%'/> */}
            <img src="Snack Box Desktop.png" style={{width: "330px", marginTop: "20px", marginBottom: "-20px"}} id="smhover"/>
          </div>
        </div>
      </div>
      
    </div>
  );

  return <section className="ninja-header ninja-box-ninja-header">{isSmall ? small : normal}</section>;
};

export default Ninja_Header;
