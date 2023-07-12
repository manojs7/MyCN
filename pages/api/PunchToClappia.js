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
    var starters="";
    var mainCourse="";    
    var breadRice="";    
    var dessert="";
    var city="";
    var city_ops;

    orderData.appetizer.forEach((item, index)=>{
      starters+=item.name + " ";
    })
    orderData.mainCourse.forEach((item, index)=>{
      mainCourse+=item.name + " ";
    })
    orderData.breadRice.forEach((item, index)=>{
      breadRice+=item.name + " ";
    })
    orderData.dessert.forEach((item, index)=>{
      dessert+=item.name + " ";
    })

    if(orderData.city==="Banglore"){
      city="BLR";
      city_ops="BLR||cnopsbanglore@gmail.com";
    }
    else if (orderData.city==="delhi"){
      city="DEL";
      city_ops="DEL||cnopsdelhi@gmail.com";
    }
    else if (orderData.city==="mumbai"){
      city="MUM";
      city_ops="MUM||cnopsmumbai@gmail.com";
    }
    else{
      city="BLR";
      city_ops="BLR||cnopsbanglore@gmail.com";
    }
   


    var data={
              "ninja": "Anup",
              "client_nam":orderData.address,
              "contact_nu": orderData.phone,
              "customer_e": orderData.email,
              "pax": orderData.veg_c+ orderData.nonveg_c,
              "service_":"NinjaBox",
              "buff_type":"",
              "buff_char":"",
              "date_of_ev":orderData.date,
              "time_of_ev":orderData.time,
              "address":orderData.address,
              "google_lin":"",
              "payment_mo":"Payu",
              "selling_pr":orderData.grandTotal,
              "city":city,
              "city_ops":city_ops,
              "order_sub":"New Order",
  
              "test_start":starters,
              "test_mains":mainCourse,
              "test_bread":breadRice,
              "test_desse":dessert
  
            }
    let myposts=await db.collection("saveCompletedOrderDetails").findOneAndUpdate({_id:orderData._id}, {$set:{OrderStatus:"Punched"}} , { upsert: true });
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
          "data": data,
        }
      ),
    }).then(function (res) {
      db.collection("saveCompletedOrderDetails").updateOne({_id:orderData._id}, {OrderStatus:"Punched"});
      res.json(res);
    })
    
    res.json(myposts)
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
