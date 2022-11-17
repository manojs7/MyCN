import Footer from "$lib/Footer";
import Categories from "$lib/home/Categories";
import FeedBack from "$lib/home/FeedBack";
import Header from "$lib/home/Header";
import HowItWorks from "$lib/home/HowItWorks";
import HowToOrder from "$lib/home/HowToOrder";
import News from "$lib/home/News";
import OurServices from "$lib/home/OurServices";
import Testimonials from "$lib/home/Testimonials";
import TestimonialsTwo from "$lib/home/TestimonialsTwo";
import WhatMakeUsSpecial from "$lib/home/WhatMakeUsSpecial";
import Navbar from "$lib/Navbar";
import Custom_Package from "$lib/ninja-box/Custom_Package";
import Ninja_Header from "$lib/ninja-box/Ninja_Header";
import Specials from "$lib/ninja-box/Specials";
import Head from "next/head";
import Image from "next/image";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Home() {
  return (
    <div activeClass="active" to='footer-logo' spy={true} smooth={true} offset={50} duration={1000}>
       <Navbar />
      <Header />
      <FeedBack/>
      <OurServices />

      <WhatMakeUsSpecial/>
      <HowToOrder/>
      <HowItWorks />

      {/* <Testimonials /> */}

      {/* <TestimonialsTwo/> */}
      <News />
      <Categories />



      {/* <Ninja_Header /> */}
      {/* <Specials /> */}
      {/* <Custom_Package /> */}



      <Footer />
    </div>
  );
}
