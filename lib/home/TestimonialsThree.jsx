import React, { useState, useEffect } from "react";
import Slider from "react-slick";

export default function TestimonialsThree() {
    const [testimonials, setTestimonials] = useState([])
    const settings = {
        className: "center",
        dots: true,
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
            <div className="container" style={{ backgroundColor: "#2eb82e" }}>
                <h2 className="text-center" style={{ borderBottom: "3px solid #ffb800", color: "white", paddingBottom: "5px", paddingTop: "25px" }}>Testimonials</h2>
                <div className="container-fluid">
                    <div className="pb-4">
                        <Slider {...settings}>
                            {testimonials.map((data, index) => {
                                return (
                                    <div key={index} className="testimonial-section justify-content-center align-items-center d-flex">
                                        <div className="img-section">
                                            <img src="profile.png" style={{ height: "70px", width: "70px", borderRadius: "15px", margin: "-5px" }} />
                                        </div>
                                        <div className="review-section d-flex flex-column justify-content-center align-items-center">
                                            <img src="Star.svg" style={{margin: "10px 0 2px -60px", height: "auto", width: "60px" }} /><br />
                                            <p style={{ color: "#6699ff", margin: "-25px 40px 20px -40px", fontFamily: "Montserrat", fontWeight: "600", fontSize: "10px" }}>NAME</p> <br />
                                            <p style={{ color: "#6699ff", marginTop: "-43px",marginLeft: "18px", fontFamily: "Montserrat", lineHeight: "10px", fontSize: "10px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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