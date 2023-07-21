import Navbar from '$lib/Navbar';
import NewNavBar from '$lib/NewNavBar';
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav from '$lib/FloatNav';
import Float from '$lib/Float';
import CustomBirthdayPkg from '$lib/birthday-party/CustomBirthdayPkg';

export default function Customise_Birthday_Pkg()
{
    return (<>
        <NewNavBar />
        <Navbar />
        <CustomBirthdayPkg />
        <NewFooter />
        <Float/>
        <FloatNav/>
        <Zoho/>
    </>)
}