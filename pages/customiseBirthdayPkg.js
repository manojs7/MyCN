import Navbar from '$lib/Navbar';
import NewNavBar from '$lib/NewNavBar';
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav from '$lib/FloatNav';
import Float from '$lib/Float';
import CustomiseBirthdayPkg from '$lib/birthday-party/CustomiseBirthdayPkg';

export default function Customise_Birthday_Pkg()
{
    return (<>
        <NewNavBar />
        <Navbar />
        <CustomiseBirthdayPkg />
        <NewFooter />
        <Float/>
        <FloatNav/>
        <Zoho/>
    </>)
}