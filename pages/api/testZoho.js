import { ready } from "jquery";

const { default: axios } = require("axios");

export default async function handler(req, res) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Zoho-oauthtoken 1000.722e0a467334d67e86a0996af2c710fd.e9d42eba68680fcec43f1f08a158590b"
  );

  var datas={
            "Company":"CaterNinja",
            "Last_Name":req.body.name,
            "First_Name":req.body.name,
            "Email":req.body.email,
            "Phone":req.body.mobileno,
            "City":req.body.city,
            "V_Pax":req.body.veg_c,
            "NV_Pax":req.body.nonveg_c,
            "Client_Budget":req.body.grandTotal,
            // "Bread_Rice":req.body.breadRice,
            // "Starters":req.body.appetizer     
        }

  const response = await axios({
    method: "POST",
    url: "https://www.zohoapis.com/crm/v2/Leads",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Zoho-oauthtoken 1000.191cb3045bde4dfe716c727e736c00d3.a3fc6c8dd08221b2dcfd30e7508d5366"
    },
    data: datas,
  }).catch((error) => {
    console.log("API not available", error);
  });
  
  console.log("response",response);
  res.status(200).json("res");
}
