import Navbar from '$lib/Navbar';
import NewNavBar from '$lib/NewNavBar';
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav from '$lib/FloatNav';
import Float from '$lib/Float';
import AllOccasionCatering from '$lib/allOccasionCatering/AllOccasionCatering';

export default function All_Occasion_Catering()
{
    return (<>
        <NewNavBar />
        <Navbar />
        <AllOccasionCatering />
        <NewFooter />
        <Float/>
        <FloatNav/>
        <Zoho/>
    </>)
}