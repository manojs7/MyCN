import Navbar from '$lib/Navbar';
import FeedBack from "$lib/home/FeedBack";
import Ninja_Header from '$lib/meal-box/Ninja_Header';
import Specials from '$lib/meal-box/Specials';
import Custom_Package from '$lib/meal-box/Custom_Package';
import Footer from "$lib/Footer";

export default function Meal_Box()
{
    return (<>
        <Navbar />
        <FeedBack />
        <Ninja_Header />
        <Specials />
        <Custom_Package />
        <Footer />
    </>)
}