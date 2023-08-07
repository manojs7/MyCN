import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import YouTube from "react-youtube";
import styles from '/styles/Ninjabox.module.scss';

const Ninja_Header = () => {
  const images = [
    "/ninja-box/header/Frame 760.png",
    "/ninja-box/header/Frame 761.png",
    "/ninja-box/header/Frame 762.png",
    "/ninja-box/header/Frame 763.png",
  ];
  const [isSmall, setIsSmall] = useState(false);
  const [photo, setPhoto] = useState(images[0]);
  const [indexPhoto, setIndexPhoto] = useState(null);
  const [isChanged, setIsChanged] = useState(false);

  const optsm = {
    height: "370",
    width: "630",
    playerVars: {
      autoplay: 0,
    },
  }




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
              <Image src={images[0]} alt="" height="90px" width="150px" />
            </div>
          </div>
          <div>
            <div onClick={() => handlePhotoChange(1)} className="inner-slide">
              <Image src={images[1]} alt="" height="90px" width="150px" />
            </div>
          </div>
          <div>
            <div onClick={() => handlePhotoChange(2)} className="inner-slide">
              <Image src={images[2]} alt="" height="90px" width="150px" />
            </div>
          </div>
          <div>
            <div onClick={() => handlePhotoChange(3)} className="inner-slide">
              <Image src={images[3]} alt="" height="90px" width="150px" />
            </div>
          </div>
        </div>

        <div className="video-player">
          {indexPhoto === null && <Carousel slide={true}>
            {images.map((d, i) => <Carousel.Item key={i} interval={2000}>
              <Image
                height="380px" width="630px"
                className="d-block w-100"
                src={d}
                alt="Third slide"
              />
            </Carousel.Item>)}
            {/* <div className="ninjaBoxVideoSm">
              <YouTube videoId="o-s9E53Apq8" opts={optsm} />
            </div> */}
          </Carousel>}

          {indexPhoto !== null && <Carousel activeIndex={indexPhoto} slide={true}>
            {images.map((d, i) => <Carousel.Item key={i} interval={1000}>
              <Image
                height="380px" width="630px"
                className="d-block w-100"
                src={d}
                alt="Third slide"
              />
            </Carousel.Item>)}
          </Carousel>}
        </div>
      </div>
      {/* <div className="ninja-header-right-container">
        <div className="description">
          <div className="lgd-ninja-box-header-logo">
            <img src="/CaterNinja logo/caterninja.webp" height="27px" width="134.46px" alt="" />
          </div>
          <div className="lgd-ninja-box-header-title">
            Ninja<span>Box</span>
          </div>
          <div className="lgd-ninja-box-header-content">
            <span>Door Step</span> Delivery in a Convenient <span>Ready-to-Serve</span> box for <span>10- 40
              Guests</span>
          </div>

          <div className="lgd-ninja-box-ninja-img">
            <img src='/ninja-box/header/ninja-box-ninja.png' alt='' />
          </div>
          <div className="ninja-box-header-button">
            <button onClick={() => (window.location.href = "#NBPkg")} className="bg-red">Select Package</button>
          </div>
        </div>
      </div> */}
      <div className={styles.ninjaheader}>
        <div className="text-center mt-5">
          <Image src="/CaterNinja logo/caterninja.webp" height="27px" width="134.46px" />
        </div>
        <h2>Ninja<span>Box</span></h2>
        <h6><span>Door Step</span> Delivery in a Convenient <span>Ready-to-Serve</span> box for <span>10- 40
          Guests</span></h6>
        <div className="text-center mt-2">
          <Image src='/ninja-box/header/ninja-box-ninja.png' width="155px" height="134px" />
        </div>
        <div className={styles.selectPkgBtn}>
          <button onClick={() => (window.location.href = "#NBPkg")}>Select Package</button>
        </div>
      </div>
    </>
  );

  const small = (
    <div className="row" id="smallninja-container">
      <div className="smd-ninja-header-right-container">
        <div className="description">
          <div className="description">
            <div className="ninja-box-header-logo">
              <img src="/CaterNinja logo/caterninja.webp" height="21.49px" width="107px" alt="" />
            </div>
            <div className="container d-flex">
              <div className="col-6">
                <div className="ninja-box-header-title">
                  Ninja<span>Box</span>
                </div>
                <div className="ninja-box-header-content">
                  <span>Door Step</span> Delivery in a Convenient <span>Ready-to-Serve</span> box for <span>10- 40
                    Guests</span>
                </div>
              </div>
              <div className="col-6 ninja-box-ninja-img">
                <img src='/ninja-box/header/Group 1065.png' alt='' style={{ height: "118.57px", width: "109.22px" }} />
              </div>
            </div>
          </div>
          <div className="mb-5">
            {indexPhoto === null && <Carousel slide={true}>
              {images.map((d, i) => <Carousel.Item key={i} interval={2000}>
                <img
                  className="d-block"
                  src={d}
                  alt="Third slide"
                  style={{ height: "auto", width: "360px", marginTop: "20px" }}
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
            <div onClick={() => handlePhotoChange(3)} >
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
