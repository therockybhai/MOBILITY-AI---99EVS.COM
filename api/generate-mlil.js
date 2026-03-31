export default function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { vehicleType, region } = req.body;

  if (!vehicleType || !region) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  const randomId = Math.random().toString(36).substring(2, 8).toUpperCase();

  const mlilId = `99EVS-MACHINE-${vehicleType}-${region}-${randomId}`;

  res.status(200).json({ mlilId });
}
