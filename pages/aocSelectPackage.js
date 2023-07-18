import Navbar from '$lib/Navbar';
import NewNavBar from '$lib/NewNavBar';
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav from '$lib/FloatNav';
import Float from '$lib/Float';
import SelectPackage from '$lib/allOccasionCatering/SelectPackage';

export default function Aoc_Select_Package()
{
    return (<>
        <NewNavBar />
        <Navbar />
        <SelectPackage />
        <NewFooter />
        <Float/>
        <FloatNav/>
        <Zoho/>
    </>)
}