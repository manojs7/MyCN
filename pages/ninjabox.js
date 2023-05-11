import Navbar from '$lib/Navbar';
import FeedBack from "$lib/home/FeedBack";
import Ninja_Header from '$lib/ninja-box/Ninja_Header';
import Specials from '$lib/ninja-box/Specials';
import Custom_Package from '$lib/ninja-box/Custom_Package';
import Footer from "$lib/Footer";
import NinjaBox_Video from '$lib/ninja-box/NinjaBox_Video';
import React, { useEffect, useState } from 'react'
import NewNavBar from '$lib/NewNavBar';
import NboxVd from '$lib/ninja-box/NboxVd';
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav from '$lib/FloatNav';
import Float from '$lib/Float';

export default function Ninja_Box()
{
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

    return (<>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" ></meta>
    </Head>
    <Script id="bolt" src="https://checkout-static.citruspay.com/bolt/run/bolt.min.js" bolt-color="e34524" bolt-logo="http://boltiswatching.com/wp-content/uploads/2015/09/Bolt-Logo-e14421724859591.png"/>

        <NewNavBar />
        <Navbar />
        <FeedBack/>
        <Ninja_Header />
        <Specials />
        <NinjaBox_Video />
        {/* <NboxVd /> */}
        <Custom_Package />
        {/* <Footer /> */}
        
        <NewFooter />
        <Float />
        <FloatNav/>
        <Zoho/>
    </>)
}