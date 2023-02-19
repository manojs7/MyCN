import Navbar from '$lib/Navbar';
import FeedBack from "$lib/home/FeedBack";
import Ninja_Header from '$lib/ninja-classic/Ninja_Header';
import Specials from '$lib/ninja-classic/Specials';
import Custom_Package from '$lib/ninja-classic/Custom_Package';
import Footer from "$lib/Footer";
import NewNavBar from '$lib/NewNavBar';
import NewFooter from '$lib/NewFooter';
//import NinjaBuffet_Video from '$lib/ninja-classic/NinjaBuffet_Video';

export default function Ninja_Classic()
{
    return (<>
        <NewNavBar />
        <Navbar />
        <FeedBack />
        <Ninja_Header />
        <Specials />
        {/* <NinjaBuffet_Video /> */}
        <Custom_Package />
        {/* <Footer /> */}
        <NewFooter />
    </>)
}