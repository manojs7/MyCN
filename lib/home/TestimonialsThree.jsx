import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import CustomArrow from "./CustomArrow";

export default function TestimonialsThree() {
    const [testimonials, setTestimonials] = useState([])
    const settings = {
        className: "center",
        dots: true,
        nextArrow: <CustomArrow />,
        prevArrow: <CustomArrow />,
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
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
    }
    useEffect(() => {
        let testimonialsData = [1, 2, 3, 4];
        setTestimonials(testimonialsData);
    }, [])
    return (
        <div>
            <div className="testimonialsContainer mt-2" style={{ backgroundColor: "#2eb82e" }}>
                <h2 className="text-center" style={{ borderBottom: "3px solid #ffb800", color: "white", paddingBottom: "1px", paddingTop: "20px", marginBottom: "23px" }}>Testimonials</h2>
                <div className="">
                    <div className="pb-4">
                        <Slider {...settings}>
                            {testimonials.map((data, index) => {
                                return (
                                    <div className="" key={index}>
                                            <div className="testimonial-section d-flex">
                                                <div className="img-section">
                                                    <img src="AvatarPic.jpg"/>
                                                </div>
                                                <div className="review-section d-flex flex-column justify-content-center align-items-center">
                                                    <img src="Star.svg"/><br />
                                                    <p id="title">NAME</p> <br />
                                                    <p id="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                    </div>
                                );
                            })}
                        </Slider>
                        {/* <Slider>
                        <div className="row border border-primary" style={{ borderRadius: "15px", backgroundColor: "#ffb800" }}>
                                <div className="col-3">
                                    <div className="mt-2">
                                        <img src="profile.png" style={{ height: "88px", width: "100px", borderRadius: "15px" }} />
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="ms-4">
                                        <img src="Star.svg" style={{ margin: "10px 0 2px 8px", height: "auto", width: "90px"}} /><br />
                                        <p style={{color: "#6699ff", fontFamily: "Montserrat", fontWeight: "600"}}>NAME</p> <br />
                                        <p style={{ color: "#6699ff", marginTop: "-15px", fontFamily: "Montserrat", lineHeight: "16px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                            </Slider> */}
                    </div>
                </div>

            </div>
        </div>
    );
}