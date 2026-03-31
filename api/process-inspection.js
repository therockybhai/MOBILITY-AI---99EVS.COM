import { db } from "../firebase-admin";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    const {

      inspectionId,
      vehicleId,
      checklist

    } = req.body;


    const chargeRetention = checklist.chargeRetention || 0;
    const voltageStability = checklist.voltageStability || 0;
    const thermalBehavior = checklist.thermalBehavior || 0;
    const cycleAge = checklist.cycleAge || 0;
    const bmsStatus = checklist.bmsStatus || 0;


    const motorCondition = checklist.motorCondition || 0;
    const controllerResponse = checklist.controllerResponse || 0;
    const brakingCondition = checklist.brakingCondition || 0;
    const suspensionCondition = checklist.suspensionCondition || 0;
    const wiringCondition = checklist.wiringCondition || 0;


    const bri =

      chargeRetention * 0.4 +
      voltageStability * 0.2 +
      thermalBehavior * 0.1 +
      cycleAge * 0.2 +
      bmsStatus * 0.1;


    const mri =

      motorCondition * 0.35 +
      controllerResponse * 0.25 +
      brakingCondition * 0.15 +
      suspensionCondition * 0.15 +
      wiringCondition * 0.10;


    const trustScore =

      bri * 0.30 +
      mri * 0.25 +
      80 * 0.15 +
      80 * 0.15 +
      80 * 0.05 +
      80 * 0.05 +
      80 * 0.05;


    await db.collection("health_scores").doc(vehicleId).set({

      bri,
      mri,
      trustScore,
      inspectionId,
      updatedAt: new Date()

    });


    res.status(200).json({

      success: true,
      bri,
      mri,
      trustScore

    });

  } catch (error) {

    res.status(500).json({

      error: "Inspection scoring failed"

    });

  }

}
