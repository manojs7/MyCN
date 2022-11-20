import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ReactImageMagnify from "react-image-magnify";
import { Carousel } from "react-bootstrap";

const Ninja_Header = () => {
  const images = [
    "nijjabox1.png",
    "nijjabox2.png",
    "nijjabox3.png",
    "nijjabox4.png",



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
        <div className="ninja-box-carouserl-container">
          <div>
            <div onClick={() => handlePhotoChange(0)} className="inner-slide">
              <img src={images[0]} alt="" height="100%" width="100%" />
            </div>
          </div>
          <div>
            <div onClick={() => handlePhotoChange(1)} className="inner-slide">
              <img src={images[1]} alt="" height="100%" width="100%" />
            </div>
          </div>
          <div>
            <div onClick={() => handlePhotoChange(2)} className="inner-slide">
              <img src={images[2]} alt="" height="100%" width="100%" />
            </div>
          </div>
          <div>
            <div onClick={() => handlePhotoChange(3)} className="inner-slide">
              <img src={images[3]} alt="" height="100%" width="100%" />
            </div>
          </div>
        </div>

        <div className="video-player">
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
          {indexPhoto === null && <Carousel slide={true}>
            {images.map((d, i) => <Carousel.Item key={i} interval={2000}>
              <img
                className="d-block w-100"
                src={d}
                alt="Third slide"
              />


            </Carousel.Item>)}



          </Carousel>}



          {indexPhoto !== null && <Carousel activeIndex={indexPhoto} slide={true}>
            {images.map((d, i) => <Carousel.Item key={i} interval={1000}>
              <img
                className="d-block w-100"
                src={d}
                alt="Third slide"
              />


            </Carousel.Item>)}



          </Carousel>}

        </div>
      </div>
      <div className="ninja-header-right-container">
        <div className="description">
          <div className="ninja-box-header-logo">
            <img src="caterninja.png" height="auto" width="100%" alt="" />
          </div>
          <div className="ninja-box-header-title">
            Ninja <span>Box</span>
          </div>
          <div className="ninja-box-header-content">
            Door Step Delivery in a Convenient Ready-to-Serve box for 10- 40
            Guests
          </div>

          <div className="ninja-box-ninja-img">
            <img src='ninja-box-ninja.png' alt='' />
          </div>
          <div className="ninja-box-header-button">
            <button className="bg-red">Select Package</button>
          </div>
        </div>
      </div>
    </>
  );

  const small = (
    <div className="row">
      <div className="ninja-header-right-container mt-auto">
        <div className="description">
          <div className="header-title">
            <span>ninja</span>Box
          </div>
          <div className="header-content">
            Door Step Delivery in a Convenient Ready-to-Serve box for 10- 40
            Guests
          </div>
          <div className="video-player">
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
          </div>
          <div className="header-button">
            <button className="fs-6">Select Package</button>
          </div>
          <div className="ninja-box-carouserl">
            {<Slider {...settings}>
              <div>
                <div>
                  <div onClick={() => handlePhotoChange(0)} className="inner-slide">
                    <img src={images[0]} alt="" height="100%" width="100%"/>
                  </div>
                </div>
                <div>
                  <div onClick={() => handlePhotoChange(1)} className="inner-slide">
                    <img src={images[1]} alt="" height="100%" width="100%"/>
                  </div>
                </div>
                <div>
                  <div onClick={() => handlePhotoChange(2)} className="inner-slide">
                    <img src={images[2]} alt="" height="100%" width="100%"/>
                  </div>
                </div>
                <div>
                  <div onClick={() => handlePhotoChange(3)} className="inner-slide">
                    <img src={images[3]} alt="" height="100%" width="100%" />
                  </div>
                </div>
              </div>
              {/* <div>
              <div onClick={() => handlePhotoChange(4)} className="inner-slide">
                <img src={images[4]} alt="" height="100%" width="100%" />
              </div>
            </div>
            <div>
              <div onClick={() => handlePhotoChange(5)} className="inner-slide">
                <img src={images[5]} alt="" height="100%" width="100%" />
              </div>
            </div>
            <div>
              <div onClick={() => handlePhotoChange(6)} className="inner-slide">
                <img src={images[6]} alt="" height="100%" width="100%" />
              </div>
            </div>
            <div>
              <div onClick={() => handlePhotoChange(7)} className="inner-slide">
                <img src={images[7]} alt="" height="100%" width="100%" />
              </div>
            </div>
          <div>
              <div className="inner-slide">5</div>
            </div>
            <div>
              <div className="inner-slide">5</div>
            </div>*/}
            </Slider>}
          </div>

        </div>
      </div>
    </div>
  );

  return <section className="ninja-header ninja-box-ninja-header">{isSmall ? small : normal}</section>;
};

export default Ninja_Header;
