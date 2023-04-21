var unirest = require("unirest");
var accountSid = "caterninja1";
var accountToken = "ad6337eb9b286bb5fd9ff92aecdb79afae76b721d1e7f791";
var authKey = "a91b21ee336efccda0e77f37e55068ceea187de4106973f5";

var encoding = Buffer.from(authKey + ":" + accountToken).toString("base64");
export default function handler(req, res) {
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
				"number":"+919100XXXX10",
				"first_name":"captain",
				"last_name":"exotel",
				"company_name":"Exotel",
				"email":"captain@email.com",
				"tag":"Technician",
				"custom_field":{
					"key":{"key1":"values1"}
				},
            }
        ],
      })
    )
    .end(function (res) { 
        if (res.error) throw new Error(res.error); 
        console.log(res.raw_body);
      });
  
}
