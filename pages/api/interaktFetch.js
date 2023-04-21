const { default: axios } = require("axios");

export default function handler(req, res) {
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic dkVfdTBDWUZzV3lPTE8yUlE2MHBleXIwRVZWUzN6OFJncGxJYl9aejZZUTo=");

var raw = JSON.stringify({
  // "userId": "12035448-36a0-3aa24",
  "phoneNumber": "7023405885",
  "countryCode": "+91",
  // "traits": {
  //   "name": "John Doe",
  //   "email": "johndoe@gmail.com"
  // },
  // "createdAt": "2020-11-05T13:26:52.926Z"
});
// var raw=JSON.stringify({
//   "filters": [
//       {
//           "trait": "created_at_utc",
//           "op": "gt",
//           "val": "2023-04-17T11:35:47.089Z" 
//       },
//       {
//           "trait": "created_at_utc",
//           "op": "lt",
//           "supr_op": "and",
//           "val": "2023-04-19T01:40:47.089Z" 
//       }
//   ]
// })

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

let a=axios.post("https://api.interakt.ai/v1/public/apis/users/?offset=0&limit=100", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

res.status(200).json("res",a)
}


