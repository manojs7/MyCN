import Navbar from '$lib/Navbar';
import FeedBack from "$lib/home/FeedBack";
import Ninja_Header from '$lib/ninja-buffet/Ninja_Header';
import Specials from '$lib/ninja-buffet/Specials';
import Custom_Package from '$lib/ninja-buffet/Custom_Package';
import Footer from "$lib/Footer";
import NinjaBuffet_Video from '$lib/ninja-buffet/NinjaBuffet_Video';
import NewNavBar from '$lib/NewNavBar';
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav from '$lib/FloatNav';

export default function Ninja_Buffet()
{
    return (<>
        <NewNavBar />
        <Navbar />
        <FeedBack />
        <Ninja_Header />
        <Specials />
        <NinjaBuffet_Video />
        <Custom_Package />
        {/* <Footer /> */}
        <NewFooter />
        <FloatNav/>
        <Zoho/>
    </>)
}