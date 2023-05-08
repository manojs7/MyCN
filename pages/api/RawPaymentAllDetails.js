import clientPromise from "../../lib/mongodb";

export default function handler(req, res) {
  const client = clientPromise;
  const db = client.db("CaterNinja");
  if (req.method === "POST") {
    let bodyObject = (req.body);
    let myPost = db.collection("RawPaymentAllDetails").insertOne(bodyObject);
    res.json(myPost);
  } else {
    const allPosts = db.collection("RawPaymentAllDetails").find({}).toArray();
    res.json({ status: 200, data: allPosts });
  }
}
