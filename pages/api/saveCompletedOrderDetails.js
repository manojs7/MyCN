import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("CaterNinja");
  if (req.method === "POST") {
    let bodyObject = (req.body);
    let myPost = await db.collection("saveCompletedOrderDetails").insertOne(bodyObject);    

    res.json(myPost);
  } else {
    const allPosts = await db.collection("saveCompletedOrderDetails").find({}).toArray();
    res.json({ status: 200, data: allPosts });
  }


}
