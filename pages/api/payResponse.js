export default function handler(req, res) {
    var jsSHA = require("jssha");
var pd = req.body;
    //Generate new Hash 
     var hashString = 'KMp7HV1w8V' + '|' + pd.status + '||||||||||' + '|' + pd.email + '|' + pd.firstname + '|' + pd.productinfo + '|' + pd.amount + '|' + pd.txnid + '|' + 'VKy9EEvW'
     var sha = new jsSHA('SHA-512', "TEXT");
     sha.update(hashString)
     var hash = sha.getHash("HEX");
     // Verify the new hash with the hash value in response
     if (hash == pd.hash) {
         res.send({'status':pd.status});
     } else {
         res.send({'status':"Error occured"});
     }
    }