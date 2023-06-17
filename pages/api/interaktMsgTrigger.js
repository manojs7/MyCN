const { default: axios } = require("axios");

export default async function handler(req, res) {
    if(req.method==="POST"){
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        "Basic dkVfdTBDWUZzV3lPTE8yUlE2MHBleXIwRVZWUzN6OFJncGxJYl9aejZZUTo="
      );
  
      var raw = {
        phoneNumber: "7023405885",
        event: "Test",
        traits: {
          orderID: "{order_id}",
          doe: "{doe}",
          toe: "{time_of_ev}",
          value: "{selling_pr}",
          ninja: "{ninja}",
        },
      };
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
      await axios
        .post("https://api.interakt.ai/v1/public/track/events/", requestOptions)
        .then((response) => console.log("resot", response.json()));
          
          res.status(200).json("res")


    }
  
}