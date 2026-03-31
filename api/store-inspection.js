import { db } from "../firebase-admin";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    const inspection = req.body;

    const docRef = await db
      .collection("inspection_records")
      .add(inspection);

    res.status(200).json({
      success: true,
      id: docRef.id
    });

  } catch (error) {

    res.status(500).json({
      error: "Inspection storage failed"
    });

  }

}
