import React from "react";
import Slider from "react-slick";
import CustomArrow from "./CustomArrow";

export default function TestimonialsThree() {
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
    return (
        <div>
            <div className="testimonialsContainer mt-2">
                <h2 className="text-center">Testimonials</h2>
                <div className="">
                    <div className="pb-4">
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
                        </Slider>
                    </div>
                </div>

            </div>
        </div>
    );
}