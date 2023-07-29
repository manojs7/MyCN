import Navbar from '$lib/Navbar';
import NewNavBar from '$lib/NewNavBar';
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav from '$lib/FloatNav';
import Float from '$lib/Float';
import AllOccasionCateringCheckprice from '$lib/allOccasionCatering/AllOccasionCateringCheckprice';

export default function All_Occasion_Catering_Checkprice()
{
    return (<>
        <NewNavBar />
        <Navbar />
        <AllOccasionCateringCheckprice />
        <NewFooter />
        <Float/>
        <FloatNav/>
        <Zoho/>
    </>)
}