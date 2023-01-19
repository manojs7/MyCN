import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ReactImageMagnify from "react-image-magnify";
import { Carousel } from "react-bootstrap";
import { Carousel as BootstrapCarousel } from 'react-responsive-carousel';

const Ninja_Header = () => {
  const images = [
    "gdesk 1.png",
    "gdesk 2.png",
    "gdesk 3.png",
    "gdesk 4.png",
    "gdesk 5.png"



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
          <div className="lgd-ninja-box-header-logo">
            <img src="caterninja.png" height="27px" width="134.46px" alt="" />
          </div>
          <div className="lgd-ninja-gourmet-header-title">Ninja<span>Gourmet</span>
          </div>
          <div className="lgd-ninja-gourmet-header-content">
            <span>Super Premium Quality</span> Meals for Sophisticated <span>Corporate Meets!</span>
          </div>

          <div className="lgd-ninja-box-ninja-img">
            <img src='Gourmet Ninja.png' alt='' style={{width: "180px"}} />
          </div>
          <div className="ninja-box-header-button">
            <button onClick={() => (window.location.href = "#gourmetPkg")} className="bg-red">Select Package</button>
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
              <img src="caterninja.png" height="21.49px" width="107px" alt="" />
            </div>
            <div className="container d-flex">
              <div className="col-6">
                <div className="ninja-gourmet-header-title">
                  Ninja<span>Gourmet</span>
                </div>
                <div className="ninja-gourmet-header-content">
                <span>Super Premium Quality</span> Meals for Sophisticated <span>Corporate Meets!</span>
                </div>
              </div>
              <div className="col-6 ninja-gourmet-ninja-img">
                <img src='Group 1084.png' alt='' style={{ height: "97.44px", width: "94.5px" }} />
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
          <div className="my-4">
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
                  className="d-block"
                  src={d}
                  alt="Third slide"
                  style={{ height: "auto", width: "370px" }}
                />
              </Carousel.Item>)}
            </Carousel>}
            {indexPhoto !== null && <Carousel activeIndex={indexPhoto} slide={true}>
              {images.map((d, i) => <Carousel.Item key={i} interval={1000}>
                <img
                  className="d-block"
                  src={d}
                  alt="Third slide"
                />
              </Carousel.Item>)}
            </Carousel>}
          </div>
        </div>
      </div>
      <div className="mt-2">
        {/*{<BootstrapCarousel {...settings}>
          <div>
            <div onClick={() => handlePhotoChange(0)} >
              <img src={images[0]} alt="" style={{ width: "200px", height: "100px" }} />
            </div>
          </div>
          <div>
            <div onClick={() => handlePhotoChange(1)} >
              <img src={images[1]} alt="" style={{ width: "200px", height: "100px" }} />
            </div>
          </div>
          <div>
            <div onClick={() => handlePhotoChange(2)} >
              <img src={images[2]} alt="" style={{ width: "200px", height: "100px" }} />
            </div>
          </div>
          <div>
            <div onClick={() => handlePhotoChange(3)} >
              <img src={images[3]} alt="" style={{ width: "200px", height: "100px" }} />
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
            </div>
        </BootstrapCarousel>}*/}
        <div className="d-flex justify-content-between">
          <div className="me-2">
            <div onClick={() => handlePhotoChange(0)} >
              <img src={images[0]} alt="" style={{ width: "80px", height: "auto" }} />
            </div>
          </div>
          <div className="me-2">
            <div onClick={() => handlePhotoChange(1)} >
              <img src={images[1]} alt="" style={{ width: "80px", height: "auto" }} />
            </div>
          </div>
          <div className="me-2">
            <div onClick={() => handlePhotoChange(2)} >
              <img src={images[2]} alt="" style={{ width: "80px", height: "auto" }} />
            </div>
          </div>
          <div>
            <div  onClick={() => handlePhotoChange(3)} >
              <img src={images[3]} alt="" style={{ width: "80px", height: "auto" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <section className="ninja-header ninja-box-ninja-header">{isSmall ? small : normal}</section>;
};

export default Ninja_Header;
