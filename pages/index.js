import Categories from "$lib/home/Categories";
import FeedBack from "$lib/home/FeedBack";
import Header from "$lib/home/Header";
import HowItWorks from "$lib/home/HowItWorks";
import HowToOrder from "$lib/home/HowToOrder";
import News from "$lib/home/News";
import OurServices from "$lib/home/OurServices";
import TestimonialsThree from "$lib/home/TestimonialsThree";
import WhatMakeUsSpecial from "$lib/home/WhatMakeUsSpecial";
import Navbar from "$lib/Navbar";
import NewNavBar from "$lib/NewNavBar";
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav from '$lib/FloatNav';
import Float from '$lib/Float';

export default function Home() {
  
  return (
    <div activeclass="active" to='footer-logo' spy="true" smooth="true" offset={50} duration={1000}>
      <NewNavBar/>
      <Navbar />
      <FeedBack />
      <Header />
      <OurServices />
      <WhatMakeUsSpecial />
      <TestimonialsThree />
      <HowToOrder />
      <HowItWorks />
      {/* <Testimonials /> */}
      {/* <TestimonialsTwo/> */}
      <News />
      <Categories />
      {/* <Ninja_Header /> */}
      {/* <Specials /> */}
      {/* <Custom_Package /> */}
      {/* <Footer /> */}
      <NewFooter />
      <Float/>
      <FloatNav />
      <Zoho />
    </div>
  );
}
