import Navbar from '$lib/Navbar';
import NewNavBar from '$lib/NewNavBar';
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav from '$lib/FloatNav';
import Float from '$lib/Float';
import CustomizeAoc from '$lib/allOccasionCatering/CustomizeAoc';

export default function Customize_Aoc()
{
    return (<>
        <NewNavBar />
        <Navbar />
        <CustomizeAoc />
        <NewFooter />
        <Float/>
        <FloatNav/>
        <Zoho/>
    </>)
}