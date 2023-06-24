import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("CaterNinja");
  if (req.method === "POST") {
   
    await fetch("https://api-public-v3.clappia.com/submissions/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-api-key":"cat51996896100f61ff96467198b93c81ff5e3ba0",
      },
      body: JSON.stringify(
        {
          "appId": "CNB468071",
          "workplaceId": "CAT519968",
          "requestingUserEmailAddress": "takmanoj369@gmail.com",
          "data": {
            "ninja": "Anup",
            "client_nam":"Test Manoj",
            "contact_nu": "7023405885",
            "customer_e": "takmanoj369@gmail.com",
            "pax": "10",
            "service_":"NinjaBox",
            "buff_type":"",
            "buff_char":"",
            "date_of_ev":"09-05-2023",
            "time_of_ev":"12:30 PM",
            "address":"",
            "google_lin":"",

            "visit_location": "23.554,81.9283"
          }
        }
      ),
    }).then(function (res) {
      res.json(res);
    })
    
  } else {
    const allPosts = await db.collection("saveCompletedOrderDetails").find({}).toArray();
    res.json({ status: 200, data: allPosts });
  }


}
