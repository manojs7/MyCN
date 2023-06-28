import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("CaterNinja");
  if (req.method === "POST") {
    
    //orderData variable containing info about the order
    if(!req.body.orderData[0]){
      res.status(401).json("data variable is empty");
    }
    var orderData=req.body.orderData[0];

    var data={
              "ninja": "Anup",
              "client_nam":orderData.address,
              "contact_nu": "7023405885",
              "customer_e": "takmanoj369@gmail.com",
              "pax": orderData.veg_c+ orderData.nonveg_c,
              "service_":"NinjaBox",
              "buff_type":"",
              "buff_char":"",
              "date_of_ev":"09-05-2023",
              "time_of_ev":"12:30 PM",
              "address":"",
              "google_lin":"",
  
              "payment_mo":"Payu",
              "selling_pr":orderData.grandTotal,
              "city":"BLR",
              "city_ops":"BLR||cnopsbanglore@gmail.com",
              "order_sub":"New Order",
  
              "test_start":"Achaari Paneer Tikka",
              "test_mains":"Kadai veg",
              "test_bread":"curd rice",
              "test_desse":"Angoori gulab jamun",
  
              "visit_location": "23.554,81.9283"
            }
    console.log(data)

    // await fetch("https://api-public-v3.clappia.com/submissions/create", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     "x-api-key":"cat51996896100f61ff96467198b93c81ff5e3ba0",
    //   },
    //   body: JSON.stringify(
    //     {
    //       "appId": "CNB468071",
    //       "workplaceId": "CAT519968",
    //       "requestingUserEmailAddress": "takmanoj369@gmail.com",
    //       "data": {
    //         "ninja": "Anup",
    //         "client_nam":"Test Manoj",
    //         "contact_nu": "7023405885",
    //         "customer_e": "takmanoj369@gmail.com",
    //         "pax": "10",
    //         "service_":"NinjaBox",
    //         "buff_type":"",
    //         "buff_char":"",
    //         "date_of_ev":"09-05-2023",
    //         "time_of_ev":"12:30 PM",
    //         "address":"",
    //         "google_lin":"",

    //         "payment_mo":"Payu",
    //         "selling_pr":"1",
    //         "city":"BLR",
    //         "city_ops":"BLR||cnopsbanglore@gmail.com",
    //         "order_sub":"New Order",

    //         "test_start":"Achaari Paneer Tikka",
    //         "test_mains":"Kadai veg",
    //         "test_bread":"curd rice",
    //         "test_desse":"Angoori gulab jamun",

    //         "visit_location": "23.554,81.9283"
    //       }
    //     }
    //   ),
    // }).then(function (res) {
    //   res.json(res);
    // })
    
    res.json("hey")
  } else {
    await fetch("https://api-public-v3.clappia.com/submissions/getSubmissions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-api-key":"cat51996896100f61ff96467198b93c81ff5e3ba0",
      },
      body: JSON.stringify(
        {
          "workplaceId": "CAT519968",
          "appId": "CNB468071",
          "forward": true,
          "requestingUserEmailAddress": "takmanoj369@gmail.com",
          "pageSize": 0,
          "filters": {
            "queries": [
              {
                "queries": [
                  {}
                ],
                "conditions": [
                  {
                    "operator": "string",
                    "filterKeyType": "string",
                    "key": "string",
                    "value": "string"
                  }
                ],
                "operator": "string"
              }
            ],
            "conditions": [
              {}
            ],
            "operator": "string"
          }
        }
      ),
    }).then(function (res) {
      res.json(res);
    })
  }


}
