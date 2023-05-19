import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("CaterNinja");
  if (req.method === "POST") {
    let bodyObject = (req.body);
    let myPost = await db.collection("RawPaymentAllDetails").insertOne(bodyObject);
    res.json(myPost);
  } else {
    const sort = { createdAt: -1 };
    const allPosts = await db.collection("RawPaymentAllDetails").find({}).sort(sort).toArray();
    const filtered= allPosts.filter((d)=>d.status.txnStatus==="CANCEL")
    res.json({ status: 200, data: filtered });
  }
}
