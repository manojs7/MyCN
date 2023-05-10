import Navbar from '$lib/Navbar';
import NewNavBar from '$lib/NewNavBar';
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav from '$lib/FloatNav';
import Float from '$lib/Float';
import Birthday_Packages from '$lib/birthday-party/Birthday_Packages';

export default function Birthday_Party()
{
    return (<>
        <NewNavBar />
        <Navbar />
        <Birthday_Packages />
        <NewFooter />
        <Float/>
        <FloatNav/>
        <Zoho/>
    </>)
}