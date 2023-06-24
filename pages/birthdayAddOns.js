import Navbar from '$lib/Navbar';
import NewNavBar from '$lib/NewNavBar';
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav from '$lib/FloatNav';
import Float from '$lib/Float';
import BirthdayAddOns from '$lib/birthday-party/BirthdayAddOns';

export default function Birthday_Add_Ons()
{
    return (<>
        <NewNavBar />
        <Navbar />
        <BirthdayAddOns />
        <NewFooter />
        <Float/>
        <FloatNav/>
        <Zoho/>
    </>)
}