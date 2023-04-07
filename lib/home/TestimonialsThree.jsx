import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import CustomArrow from "./CustomArrow";
import Link from 'next/link'

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
            <div className="testimonialsContainer mt-2">
                <h2 className="text-center">Testimonials</h2>
                <div className="">
                    <div className="pb-4">
                        {/* <Slider {...settings}>
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
                        </Slider> */}
                        <Slider {...settings}>
                            <div className="">
                                <div className="review-card row p-2">
                                    <div className="profile-img col-3">
                                        <a href="https://goo.gl/maps/hLUoXjyE4yGQdjUH7" target="_blank" rel="noreferrer"><img src="https://lh3.googleusercontent.com/a-/AD5-WCmmUr9Vtx6TbYVjrPmlJNl-3OQz-uTJQxs8CvQrGck=w60-h60-p-rp-mo-br100" /></a>
                                    </div>
                                    <div className="text-section col-9 ps-4">
                                        <a href="https://goo.gl/maps/hLUoXjyE4yGQdjUH7" target="_blank" rel="noreferrer"><img id="img1" src="google logo.png" /></a>
                                        <img src="Star.svg" />

                                        <a href="https://goo.gl/maps/hLUoXjyE4yGQdjUH7" target="_blank" rel="noreferrer"><p id="title">Robin Max Almeida</p></a>
                                        <a href="https://goo.gl/maps/hLUoXjyE4yGQdjUH7" target="_blank" rel="noreferrer"><p id="description">Ordered food at the last moment for them and turned out be the best decision. Fistly punctuality and then is the quality of food. No regrets to hold people enjoyed every bit of it. Would definetely recommend them.</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="review-card row p-2">
                                    <div className="profile-img col-3">
                                        <a href="https://goo.gl/maps/ozRLQGGgoRqfcyy69" target="_blank" rel="noreferrer"><img src="https://lh3.googleusercontent.com/a-/AD5-WCnbK8B8AsuYm9zlzWAwXwT7Sq3n3CtaRj1lMDEdcQ=w60-h60-p-rp-mo-br100" /></a>
                                    </div>
                                    <div className="text-section col-9 ps-4">
                                        <a href="https://goo.gl/maps/ozRLQGGgoRqfcyy69" target="_blank" rel="noreferrer"><img id="img1" src="google logo.png" /></a>
                                        <img src="Star.svg" />
                                        <a href="https://goo.gl/maps/ozRLQGGgoRqfcyy69" target="_blank" rel="noreferrer"><p id="title">Naresh Thawal</p></a>
                                        <a href="https://goo.gl/maps/ozRLQGGgoRqfcyy69" target="_blank" rel="noreferrer"><p id="description">Overall good experience with your team and cooperation.
                                            Food quality and arrangements are superb.
                                            Very punctual about timing.
                                            Would like to work in future best of luck 🤞</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="review-card row p-2">
                                    <div className="profile-img col-3">
                                        <a href="https://g.co/kgs/DZaWfT" target="_blank" rel="noreferrer"><img src="https://lh3.googleusercontent.com/a-/ACB-R5TiN8YZ0ICbW_ifUJGrZ8Arn6Z-VH2eatK_9An4gA=w60-h60-p-rp-mo-br100" /></a>
                                    </div>
                                    <div className="text-section col-9 ps-4">
                                        <a href="https://g.co/kgs/DZaWfT" target="_blank" rel="noreferrer"><img id="img1" src="google logo.png" /></a>
                                        <img src="Star.svg" />
                                        <a href="https://g.co/kgs/DZaWfT" target="_blank" rel="noreferrer"><p id="title">Kiran Dwivedi</p></a>
                                        <a href="https://g.co/kgs/DZaWfT" target="_blank" rel="noreferrer"><p id="description">Amazing service.
                                            Very well priced.
                                            Every dish on the menu was delicious.thank you</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="review-card row p-2">
                                    <div className="profile-img col-3">
                                        <a href="https://goo.gl/maps/aWFj7rH5y167e2ZT9" target="_blank" rel="noreferrer"><img src="https://lh3.googleusercontent.com/a-/AD5-WCn6Oz63RVaH6MtoCWEkp_Mo2loMC-yvqQFW7ywTETw=w60-h60-p-rp-mo-br100" /></a>
                                    </div>
                                    <div className="text-section col-9 ps-4">
                                        <a href="https://goo.gl/maps/aWFj7rH5y167e2ZT9" target="_blank" rel="noreferrer"><img id="img1" src="google logo.png" /></a>
                                        <img src="Star.svg" />
                                        <a href="https://goo.gl/maps/aWFj7rH5y167e2ZT9" target="_blank" rel="noreferrer"><p id="title">Ananya Rai</p></a>
                                        <a href="https://goo.gl/maps/aWFj7rH5y167e2ZT9" target="_blank" rel="noreferrer"><p id="description">I ordered ninja buffet service for the third time. This time food was best out of all 3 times. All my guests liked the food. There was no extra oil and masala. The food was like a home cooked meal. Dahi vadas we’re too good nice, soft and spongy. The service of servers was completely fuss free and excellent.</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="review-card row p-2">
                                    <div className="profile-img col-3">
                                        <a href="https://g.co/kgs/r74yB3" target="_blank" rel="noreferrer"><img src="https://lh3.googleusercontent.com/a-/ACB-R5QHQyXfD4fxr83m6OJJmvyeYqatBeMO_F498yTMRNY=w60-h60-p-rp-mo-br100" /></a>
                                    </div>
                                    <div className="text-section col-9 ps-4">
                                        <a href="https://g.co/kgs/r74yB3" target="_blank" rel="noreferrer"><img id="img1" src="google logo.png" /></a>
                                        <img src="Star.svg" />
                                        <a href="https://g.co/kgs/r74yB3" target="_blank" rel="noreferrer"><p id="title">Santnu Duttaf</p></a>
                                        <a href="https://g.co/kgs/r74yB3" target="_blank" rel="noreferrer"><p id="description">Food quality is very good and packaging was also very good.. All my guest  liked the food very much... Thank you Ninja caterer.... ❤❤</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="review-card row p-2">
                                    <div className="profile-img col-3">
                                        <a href="https://goo.gl/maps/s93Zi829wxXGyuH36" target="_blank" rel="noreferrer"><img src="https://lh3.googleusercontent.com/a-/AD5-WCm1bU5qWaR52q02TXVX0-BsWPl-P84gS8pO0JKhcw=w60-h60-p-rp-mo-br100" /></a>
                                    </div>
                                    <div className="text-section col-9 ps-4">
                                        <a href="https://goo.gl/maps/s93Zi829wxXGyuH36" target="_blank" rel="noreferrer"><img id="img1" src="google logo.png" /></a>
                                        <img src="Star.svg" />
                                        <a href="https://goo.gl/maps/s93Zi829wxXGyuH36" target="_blank" rel="noreferrer"><p id="title">Sowmya Ravindranath</p></a>
                                        <a href="https://goo.gl/maps/s93Zi829wxXGyuH36" target="_blank" rel="noreferrer"><p id="description">Myself and my guests enjoyed the food. The packaging was excellent and it was hassle free on my side. I could enjoy the party without any stress. 😊 Thank you very much for your wonderful service.</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="review-card row p-2">
                                    <div className="profile-img col-3">
                                        <a href="https://g.co/kgs/Z6iXBj" target="_blank" rel="noreferrer"><img src="https://lh3.googleusercontent.com/a-/ACB-R5R2T4wO-lIdvuKXaRYpBWUJmeaMjv-loAhrjX3c8A=w60-h60-p-rp-mo-br100" /></a>
                                    </div>
                                    <div className="text-section col-9 ps-4">
                                        <a href="https://g.co/kgs/Z6iXBj" target="_blank" rel="noreferrer"><img id="img1" src="google logo.png" /></a>
                                        <img src="Star.svg" />
                                        <a href="https://g.co/kgs/Z6iXBj" target="_blank" rel="noreferrer"><p id="title">Pooja Shah</p></a>
                                        <a href="https://g.co/kgs/Z6iXBj" target="_blank" rel="noreferrer"><p id="description">I ordered from them for an office party and it was quite a good experience. The menu selection, ordering process was seamless. Delivery was super neat and punctual. The food was really good, everyone loved it. And the overall setup was very impressive. The quantities were enough and everyone ate to their heart’s full… and to top it, I found them quite reasonably priced.I am definitely ordering again from them.</p></a>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="">
                                <div className="testimonial-section d-flex">
                                    <div className="img-section">
                                        <img src="https://lh3.googleusercontent.com/a-/AD5-WCmmUr9Vtx6TbYVjrPmlJNl-3OQz-uTJQxs8CvQrGck=w60-h60-p-rp-mo-br100" />
                                    </div>
                                    <div className="review-section d-flex flex-column justify-content-center align-items-center">
                                        <img src="Star.svg" /><br />
                                        <p id="title">Robin Max Almeida</p> <br />
                                        <p id="description">Ordered food at the last moment for them and turned out be the best decision. Fistly punctuality and then is the quality of food. No regrets to hold people enjoyed every bit of it. Would definetely recommend them.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="testimonial-section d-flex">
                                    <div className="img-section">
                                        <img src="https://lh3.googleusercontent.com/a-/AD5-WCnbK8B8AsuYm9zlzWAwXwT7Sq3n3CtaRj1lMDEdcQ=w60-h60-p-rp-mo-br100" />
                                    </div>
                                    <div className="review-section d-flex flex-column justify-content-center align-items-center">
                                        <img src="Star.svg" /><br />
                                        <p id="title">NARESH THAWAL</p> <br />
                                        <p id="description">Overall good experience with your team and cooperation.
                                            Food quality and arrangements are superb.
                                            Very punctual about timing.
                                            Would like to work in future best of luck 🤞</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="testimonial-section d-flex">
                                    <div className="img-section">
                                        <img src="https://lh3.googleusercontent.com/a-/AD5-WClycg2JiOEDl3Yntgm2GM8qt-HpCFdC3fgn5fRzJQ=w60-h60-p-rp-mo-br100" />
                                    </div>
                                    <div className="review-section d-flex flex-column justify-content-center align-items-center">
                                        <img src="Star.svg" /><br />
                                        <p id="title">Hari om Gangwar</p> <br />
                                        <p id="description">I had a snack box party for 90 kids with CaterNinja.
                                            It was delivered to me before time and the delivery person was friendly and helped me in keeping the boxes at my place.
                                            Kids loved the donuts, spring rolls and veg sliders a lot.
                                            Hassle free and best experience for me.
                                            Highly recommend to everyone looking for professional catering requirements.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="testimonial-section d-flex">
                                    <div className="img-section">
                                        <img src="https://lh3.googleusercontent.com/a-/AD5-WCn6Oz63RVaH6MtoCWEkp_Mo2loMC-yvqQFW7ywTETw=w60-h60-p-rp-mo-br100" />
                                    </div>
                                    <div className="review-section d-flex flex-column justify-content-center align-items-center">
                                        <img src="Star.svg" /><br />
                                        <p id="title">Ananya Rai</p> <br />
                                        <p id="description">I ordered ninja buffet service for the third time. This time food was best out of all 3 times. All my guests liked the food. There was no extra oil and masala. The food was like a home cooked meal. Dahi vadas we’re too good nice, soft and spongy. The service of servers was completely fuss free and excellent.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="testimonial-section d-flex">
                                    <div className="img-section">
                                        <img src="https://lh3.googleusercontent.com/a-/AD5-WCkS3_VMomayA5xpyA8L2Jr2g3BIKxCIyACmgnWy=w60-h60-p-rp-mo-br100" />
                                    </div>
                                    <div className="review-section d-flex flex-column justify-content-center align-items-center">
                                        <img src="Star.svg" /><br />
                                        <p id="title">Aditi Shah</p> <br />
                                        <p id="description">Food came hot in their nicely packed containers and packaging looked premium and very unique.
                                            It tasted very good, we kept the items for tomorrow and their containers were microwave friendly.
                                            Great initiative by company.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="testimonial-section d-flex">
                                    <div className="img-section">
                                        <img src="https://lh3.googleusercontent.com/a-/AD5-WCm1bU5qWaR52q02TXVX0-BsWPl-P84gS8pO0JKhcw=w60-h60-p-rp-mo-br100" />
                                    </div>
                                    <div className="review-section d-flex flex-column justify-content-center align-items-center">
                                        <img src="Star.svg" /><br />
                                        <p id="title">Sowmya Ravindranath</p> <br />
                                        <p id="description">Myself and my guests enjoyed the food. The packaging was excellent and it was hassle free on my side. I could enjoy the party without any stress. 😊 Thank you very much for your wonderful service.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="testimonial-section d-flex">
                                    <div className="img-section">
                                        <img src="https://lh3.googleusercontent.com/a-/AD5-WCnUB65nzQv8Ljg2xSs_OwLU5VotOzaQ5fXMc6qi=w60-h60-p-rp-mo-br100" />
                                    </div>
                                    <div className="review-section d-flex flex-column justify-content-center align-items-center">
                                        <img src="Star.svg" /><br />
                                        <p id="title">swati Singh</p> <br />
                                        <p id="description">We have ordered for 30 people , Fixed menu and we  must say It was very easy and time saving decision. Food was yummy, Packaging was very nice.
                                            Our overall experience was very good.</p>
                                    </div>
                                </div>
                            </div> */}
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