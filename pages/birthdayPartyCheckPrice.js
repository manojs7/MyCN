import Navbar from '$lib/Navbar';
import NewNavBar from '$lib/NewNavBar';
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav from '$lib/FloatNav';
import Float from '$lib/Float';
import BirthdayPartyCheckPrice from '$lib/birthday-party/BirthdayPartyCheckPrice';

export default function Birthday_Party_Check_Price()
{
    return (<>
        <NewNavBar />
        <Navbar />
        <BirthdayPartyCheckPrice />
        <NewFooter />
        <Float/>
        <FloatNav/>
        <Zoho/>
    </>)
}