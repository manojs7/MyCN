import Navbar from '$lib/Navbar';
import FeedBack from "$lib/home/FeedBack";
import Ninja_Header from '$lib/ninja-box/Ninja_Header';
import Specials from '$lib/ninja-box/Specials';
import Custom_Package from '$lib/ninja-box/Custom_Package';
import Footer from "$lib/Footer";
import NinjaBox_Video from '$lib/ninja-box/NinjaBox_Video';
import InstantQuote from '$lib/ninja-diy/InstantQuote';
import NewNavBar from '$lib/NewNavBar';
import NinjaBoxCustomise from '$lib/ninja-box/NinjaBoxCustomise';
import Head from "next/head"
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav2 from '$lib/FloatNav2';
import Float2 from '$lib/Float2';

export default function CustomiseNinjaBox() {
    return (<>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
        </Head>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
        <Script type="application/javascript" src="https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/CaterN17180271203216.js"  crossorigin="anonymous"></Script>

        <NewNavBar />
        <Navbar />
 
        <NinjaBoxCustomise />
        {/* <Footer /> */}
        <Float2/>
        <FloatNav2 />
        <NewFooter />
    </>)
}