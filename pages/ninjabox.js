import Navbar from '$lib/Navbar';
import FeedBack from "$lib/home/FeedBack";
import Ninja_Header from '$lib/ninja-box/Ninja_Header';
import Specials from '$lib/ninja-box/Specials';
import Custom_Package from '$lib/ninja-box/Custom_Package';
import Footer from "$lib/Footer";
import NinjaBox_Video from '$lib/ninja-box/NinjaBox_Video';

export default function Ninja_Box()
{
    return (<>
        <Navbar />
        <FeedBack/>
        <Ninja_Header />
        <Specials />
        <NinjaBox_Video />
        <Custom_Package />
        <Footer />
    </>)
}