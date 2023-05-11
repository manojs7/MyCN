import axios from "axios";

export default function handler(req, res) {
    try{
        var jsSHA = require("jssha");
        var pd = req.body;
        //Generate new Hash 
         var hashString = 'KMp7HV1w8V' + '|' + pd.status + '||||||||||' + '|' + pd.email + '|' + pd.firstname + '|' + pd.productinfo + '|' + pd.amount + '|' + pd.txnid + '|' + 'VKy9EEvW'
         var sha = new jsSHA('SHA-512', "TEXT");
         sha.update(hashString)
         var hash = sha.getHash("HEX");
        //  console.log({'status':pd})
         res.send({'status':pd});
         // Verify the new hash with the hash value in response
        //  if (hash === pd.hash) {
        //      res.status(200).json({'status':pd});
        //  } else {
        //      res.status(200).json({'status':"hash code doesn't matched"});
        //  }
    }
    catch(e){
        res.status(500).json({"error":e})
    }
   
    }