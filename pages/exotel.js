
import Navbar from '$lib/Navbar';
import FeedBack from "$lib/home/FeedBack";
import Ninja_Header from '$lib/gourmet/Ninja_Header';
import Specials from '$lib/gourmet/Specials';
import Custom_Package from '$lib/gourmet/Custom_Package';
import Footer from "$lib/Footer";
import NewNavBar from '$lib/NewNavBar';
import NewFooter from '$lib/NewFooter';
import Zoho from '$lib/bookChef/Zoho';
import FloatNav from '$lib/FloatNav';
import Float from '$lib/Float';
//import NinjaBuffet_Video from '$lib/gourmet/NinjaBuffet_Video';

export default function Gourmet()
{

    var unirest = require("unirest");
var accountSid = "caterninja1";
var accountToken = "ad6337eb9b286bb5fd9ff92aecdb79afae76b721d1e7f791";
var authKey = "a91b21ee336efccda0e77f37e55068ceea187de4106973f5";

var encoding = Buffer.from(authKey + ":" + accountToken).toString("base64");
//   res.status(200).json({ name: 'John Doe' })
var req = unirest(
    "POST",
    "https://api.exotel.com/v2/accounts/caterninja1/contacts"
  )
    .headers({
      Authorization: "Basic " + encoding,
      "Content-Type": "application/json",
    })
    .send(
      JSON.stringify({
        contacts: [
            {
				"number":"1234567890",
				"first_name":"captain",
				"last_name":"exotel",
				"company_name":"Exotel",
				"email":"captain@email.com",
				
            }
        ],
      })
    )
    .end(function (res) { 
        if (res.error) throw new Error(res.error); 
        console.log(res.raw_body);
      });
  

    return (<>
        <NewNavBar />
        <Navbar />
        
        <NewFooter />
    </>)
}