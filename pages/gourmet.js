import Navbar from '$lib/Navbar';
import FeedBack from "$lib/home/FeedBack";
import Ninja_Header from '$lib/gourmet/Ninja_Header';
import Specials from '$lib/gourmet/Specials';
import Custom_Package from '$lib/gourmet/Custom_Package';
import Footer from "$lib/Footer";
import NewNavBar from '$lib/NewNavBar';
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav from '$lib/FloatNav';
//import NinjaBuffet_Video from '$lib/gourmet/NinjaBuffet_Video';

export default function Gourmet()
{
    return (<>
        <NewNavBar />
        <Navbar />
        <FeedBack />
        <Ninja_Header />
        <Specials />
        {/* <NinjaBuffet_Video /> */}
        <Custom_Package />
        <Zoho/>
        {/* <Footer /> */}
        <FloatNav/>
        <NewFooter />
    </>)
}