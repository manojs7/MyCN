import Navbar from '$lib/Navbar';
import FeedBack from "$lib/home/FeedBack";
import Ninja_Header from '$lib/meal-box/Ninja_Header';
import Specials from '$lib/meal-box/Specials';
import Custom_Package from '$lib/meal-box/Custom_Package';
import Footer from "$lib/Footer";
import MealBox_Video from '$lib/meal-box/MealBox_Video';

export default function Meal_Box()
{
    return (<>
        <Navbar />
        <FeedBack />
        <Ninja_Header />
        <Specials />
        <MealBox_Video />
        <Custom_Package />
        <Footer />
    </>)
}