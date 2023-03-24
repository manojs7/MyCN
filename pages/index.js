import React, { useEffect, useState } from 'react'
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
  const[url, setUrl] = useState("");
    

    useEffect(() => {
        const x = document.referrer;
        if (sessionStorage.getItem("first_url") === null) {
            const catch_url = sessionStorage.setItem("first_url", JSON.stringify(x));
            console.log(catch_url);
          } else {
            let url_value = sessionStorage.getItem("first_url");
            setUrl(url_value)
            console.log(url_value);
          }
          var $zoho = {};
            $zoho=$zoho.salesiq = $zoho.salesiq || {widgetcode: "99b5ba1c1d8e0e516ed773004b338dd1578d41185684ec39567606d36ae19b4dda650c6fc171098ce0179514dc48a6cb", values:{},ready:function(){}};var d=document;var s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);
    }, [])
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
