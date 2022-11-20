import Navbar from '$lib/Navbar';
import Ninja_Header from '$lib/ninja-box/Ninja_Header';
import Specials from '$lib/ninja-box/Specials';
import Custom_Package from '$lib/ninja-box/Custom_Package';
import Footer from "$lib/Footer";
import NewPage from 'pages/newpage';

export default function Ninja_Box()
{
    return (<>
        <Navbar />
        <Ninja_Header />
        <Specials />
        <Custom_Package />
        <Footer />
    </>)
}