import Navbar from '$lib/Navbar';
import FeedBack from "$lib/home/FeedBack";
import Ninja_Header from '$lib/snack-box/Ninja_Header';
import Specials from '$lib/snack-box/Specials';
import Custom_Package from '$lib/snack-box/Custom_Package';
import Footer from "$lib/Footer";
import NewNavBar from '$lib/NewNavBar';
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav from '$lib/FloatNav';
import Float from '$lib/Float';
//import NinjaBuffet_Video from '$lib/snack-box/NinjaBuffet_Video';

export default function Snack_Box()
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
        <Float/>
        <FloatNav/>
        <Zoho/>
    </>)
}