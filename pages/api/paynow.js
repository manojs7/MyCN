export default function handler(req, res) {
  if (req.method === "POST") {
    const https = require("https");
    var jsSHA = require("jssha");

    if (!req.body.txnid || !req.body.amount || !req.body.productinfo   
      || !req.body.firstname || !req.body.email) {
        res.send("Mandatory fields missing");
  } else {
        var pd = req.body;
        var hashString = "VKy9EEvW" // Merchant Key 
                 + '|' + pd.txnid 
                 + '|' + pd.amount + '|' + pd.productinfo + '|'          
                 + pd.firstname + '|' + pd.email + '|' 
                 + '||||||||||' 
                 + "KMp7HV1w8V" // Your salt value
        var sha = new jsSHA('SHA-512', "TEXT");
        sha.update(hashString)
        var hash = sha.getHash("HEX");
        res.send({ 'hash': hash });
  }


    /*
     * import checksum generation utility
     * You can get this utility from https://developer.paytm.com/docs/checksum/
     */
    // const PaytmChecksum =  require("paytmchecksum");
    // var paytmParams = {};

    // paytmParams.body = {
    //   requestType: "Payment",
    //   mid: "CaterN17180271203216",
    //   websiteName: "CaterNinja",
    //   orderId: req.body.oid,
    //   callbackUrl: "https://localhost:3000/",
    //   txnAmount: {
    //     value: "100",
    //     currency: "INR",
    //   },
    //   userInfo: {
    //     custId: "CUST_001",
    //   },
    // };

    // Pay-U Login

//     merchant_key=VKy9EEvW
//     merchant_salt=KMp7HV1w8V

//     Client ID=e72c7fae349bf2062d57c2615dabea0924b7df0af1199a8dcb5edb4723e398f7

// client secret=92c284b80584147c84933ec9159e3c1a858b5b89fce91eb2757e8cad3dd9aacd
    /*
     * Generate checksum by parameters we have in body
     * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
     */
    // const checksum= await PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body),"foZ2sz#E#Lhmq9xm")

    //   paytmParams.head = {
    //     signature: checksum,
    //   };

    //   var post_data = JSON.stringify(paytmParams);

    //   const requestAsync = async() => {
    //     return new Promise((resolve, reject) => {
    //       var options = {
    //         /* for Staging */
    //         hostname: "securegw-stage.paytm.in",

    //         /* for Production */
    //         // hostname: 'securegw.paytm.in',

    //         port: 443,
    //         path:
    //           `/theia/api/v1/initiateTransaction?mid=CaterN17180271203216&orderId=${req.body.oid}`,
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           "Content-Length": post_data.length,
    //         },
    //       };

    //       var response = "";
    //       var post_req = https.request(options, function (post_res) {
    //         post_res.on("data", function (chunk) {
    //           response += chunk;
    //         });

    //         post_res.on("end", function () {
    //           console.log("Response: ", response);
    //           resolve(response)
    //         });
    //       });

    //       post_req.write(post_data);
    //       post_req.end();
    //     });
    //   };
    //   let myr= await requestAsync();
      
    //   res.status(200).json(myr);
  }
}
