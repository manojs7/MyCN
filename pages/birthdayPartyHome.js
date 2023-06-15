import Navbar from '$lib/Navbar';
import NewNavBar from '$lib/NewNavBar';
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav from '$lib/FloatNav';
import Float from '$lib/Float';
import BirthdayPartyHome from '$lib/birthday-party/BirthdayPartyHome';

export default function Birthday_Party_Home()
{
    return (<>
        <NewNavBar />
        <Navbar />
        <BirthdayPartyHome />
        <NewFooter />
        <Float/>
        <FloatNav/>
        <Zoho/>
    </>)
}