import { React, useState, useEffect } from "react";
import Slider from "react-slick/lib/slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Testimonials_Data } from "./Testimonials_Data";
import styles from "$styles/home/Testimonials.module.scss";

const Testimonials = () =>
{

	const [sliderRef, setSliderRef] = useState(null);
	const [currindex, setIndex] = useState(0);
	const [isSmall, setIsSmall] = useState(false);

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const settingsLarge = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
	}

	useEffect(() =>
	{
		setIsSmall(window.innerWidth < 768);
		window.addEventListener("resize", () => setIsSmall(window.innerWidth < 768));
	}, [])

	function handleChange(currentIndex)
	{
		setIndex(currentIndex);
	}

	const small = (
		<div className="container">
			<div className="testimonials-content">
				<div style={{ paddingBottom: "35px" }}></div>
				<div className="testimonials-carousel">
					<div className="section-title">
						<h2>Testimonials</h2>
						<div className={styles.nav_wrapper}>
							<span onClick={sliderRef?.slickPrev} ><FontAwesomeIcon className={styles.arrows} icon={faAngleLeft} /></span>
							<div className={styles.dot_wrapper}>
								{Testimonials_Data.map((item, index) =>
								{
									return (
										<span key={index} className={styles.dot + " " + (currindex === index && styles.dark)} onClick={() => sliderRef?.slickGoTo(index)}></span>
									)
								})}
							</div>
							<span onClick={sliderRef?.slickNext}><FontAwesomeIcon className={styles.arrows} icon={faAngleRight} /></span>
						</div>
					</div>
					<Slider ref={setSliderRef} afterChange={handleChange}  {...settings} className="my-3">
						{Testimonials_Data.map((item, index) => (
							<div className="testimonials-item mobile" key={index}>
								<span>{item.name}</span>
								<span>{item.place}</span>
								<div className="content">
									<span>
										<FontAwesomeIcon icon={faQuoteLeft} />
									</span>
									{item.content}
								</div>
								<div className="image">
									<img src={item.image} alt="image" className="img-fluid hoverZoom" />
								</div>
							</div>
						))}
					</Slider>
				</div>
				<div className="review-button">
					<button>Checkout Our Google Reviews</button>
				</div>
			</div>
		</div>
	)

	const large = (
		<div className="container">
			<div className="section-title">
				<h2>Testimonials</h2>
			</div>
			<div className="testimonials-sub-title">What People Think About Us</div>
			<div className={styles.wrapper}>
				<Slider {...settingsLarge} className="my-3">
					{Testimonials_Data.map((item, index) =>
					{
						return (
							<div className={styles.testimonialLarge} key={index}>
								<div className={styles.text}>
									<span>{item.content}</span>
									<strong>-{item.name}</strong>
								</div>
								<div className={styles.image}>
									<img src={item.image} alt="image" className="img-fluid hoverZoom" />
								</div>
								<div className={styles.product}>
									<span>{item.product}</span>
								</div>
								<button onClick={() => window.location.href = `/${item.product}`}>Book Now</button>
							</div>
						)
					})}
				</Slider>
			</div>
			<div className="review-button">
				<button>Checkout Our Google Reviews</button>
			</div>
		</div>
	)


	return (
		<section className="testimonials">
			{isSmall ? small : large}
		</section>
	);
};

export default Testimonials;
